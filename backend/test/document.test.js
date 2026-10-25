const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const app = require('../server');

const BASE_URL = 'http://127.0.0.1:5000';

// Authentic 2-page valid PDF document
const REAL_PDF_STRING = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R 6 0 R] /Count 2 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 72 >>
stream
BT /F1 14 Tf 72 700 Td (Page 1: Confidential Citadel Enterprise Security Report) Tj ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
6 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 7 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
7 0 obj
<< /Length 64 >>
stream
BT /F1 14 Tf 72 700 Td (Page 2: Cryptographic Enclave Key Infrastructure) Tj ET
endstream
endobj
xref
0 8
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000122 00000 n 
0000000251 00000 n 
0000000374 00000 n 
0000000455 00000 n 
0000000584 00000 n 
trailer
<< /Size 8 /Root 1 0 R >>
startxref
699
%%EOF`;

const REAL_PDF_BUFFER = Buffer.from(REAL_PDF_STRING, 'utf-8');

// Authentic 1x1 valid PNG image
const REAL_PNG_BUFFER = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64'
);

async function runDocumentTests() {
  console.log('\n=======================================================');
  console.log('🧪 Citadel Document Pipeline: Decryption & Integrity Tests');
  console.log('=======================================================\n');

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✅ PASS: ${message}`);
      passed++;
    } else {
      console.error(`  ❌ FAIL: ${message}`);
      failed++;
    }
  }

  try {
    // 1. Register test users
    const userAEmail = `doc_owner_${Date.now()}@citadel.sec`;
    const userBEmail = `doc_intruder_${Date.now()}@citadel.sec`;
    const password = 'DocSecurityPass123!#';

    const regARes = await fetch(`${BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Document Owner A', email: userAEmail, password })
    });
    const regA = await regARes.json();
    const tokenA = regA.token;
    assert(regARes.status === 201 && tokenA, 'User A registered with valid token');

    const regBRes = await fetch(`${BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Intruder B', email: userBEmail, password })
    });
    const regB = await regBRes.json();
    const tokenB = regB.token;
    assert(regBRes.status === 201 && tokenB, 'User B registered for unauthorized download tests');

    const headersA = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenA}`
    };
    const headersB = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenB}`
    };

    // 2. Upload real multi-page PDF
    console.log('\n--- Test Case 1: Upload Real Multi-Page PDF with AES-256-GCM Encryption ---');
    const pdfBase64 = `data:application/pdf;base64,${REAL_PDF_BUFFER.toString('base64')}`;
    const expectedPdfSha256 = crypto.createHash('sha256').update(REAL_PDF_BUFFER).digest('hex');

    const uploadPdfRes = await fetch(`${BASE_URL}/api/documents`, {
      method: 'POST',
      headers: headersA,
      body: JSON.stringify({
        name: 'Confidential_Citadel_Report.pdf',
        category: 'Work',
        description: 'Multi-page executive security document',
        fileData: pdfBase64
      })
    });
    const uploadPdfData = await uploadPdfRes.json();
    assert(uploadPdfRes.status === 201 && uploadPdfData.success, 'Multi-page PDF uploaded successfully with HTTP 201');
    const docPdf = uploadPdfData.document;
    assert(docPdf && docPdf.filePath, 'Document record has stored filePath');
    assert(docPdf.isEncrypted === true, 'Document record marked as AES-256-GCM encrypted (isEncrypted: true)');
    assert(docPdf.encryptionIv && docPdf.encryptionAuthTag, 'Document has unique AES-GCM IV and AuthTag recorded');
    assert(docPdf.encryptedSha256 === expectedPdfSha256, 'Document record stores SHA-256 of the original PDF');

    // Verify stored file on disk is encrypted (ciphertext != plaintext)
    const diskPathPdf = path.join(__dirname, '..', 'uploads', 'documents', path.basename(docPdf.filePath));
    assert(fs.existsSync(diskPathPdf), 'Stored file exists on disk in uploads/documents/');
    const diskBytes = fs.readFileSync(diskPathPdf);
    assert(!diskBytes.equals(REAL_PDF_BUFFER), 'Stored disk file is encrypted ciphertext (does NOT match raw PDF bytes)');
    assert(diskBytes.toString('utf-8', 0, 5) !== '%PDF-', 'Stored disk file does not expose plaintext %PDF- magic bytes');

    // 3. Download the PDF and verify exact original decryption
    console.log('\n--- Test Case 2: Decrypt & Download Original PDF Bytes ---');
    const downloadPdfRes = await fetch(`${BASE_URL}/api/documents/${docPdf.id}/download`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
    assert(downloadPdfRes.status === 200, 'Authenticated download returned HTTP 200');
    assert(downloadPdfRes.headers.get('Content-Type') === 'application/pdf', 'Content-Type header is application/pdf');
    const dispositionPdf = downloadPdfRes.headers.get('Content-Disposition') || '';
    assert(dispositionPdf.includes('Confidential_Citadel_Report.pdf'), 'Content-Disposition includes correct original filename');

    const downloadedPdfBuffer = Buffer.from(await downloadPdfRes.arrayBuffer());
    assert(downloadedPdfBuffer.toString('utf-8', 0, 5) === '%PDF-', 'Decrypted PDF starts with valid %PDF- magic signature');
    assert(downloadedPdfBuffer.toString('utf-8').includes('%%EOF'), 'Decrypted PDF ends with valid %%EOF marker');
    assert(downloadedPdfBuffer.toString('utf-8').includes('Page 1: Confidential Citadel Enterprise Security Report'), 'Decrypted PDF contains exact original Page 1 text content');
    assert(downloadedPdfBuffer.toString('utf-8').includes('Page 2: Cryptographic Enclave Key Infrastructure'), 'Decrypted PDF contains exact original Page 2 text content');
    assert(!downloadedPdfBuffer.toString('utf-8').includes('CITADEL Secure Document Locker - Authenticated Decrypted Asset'), 'Decrypted PDF does NOT contain Citadel verification page / placeholder');
    assert(!downloadedPdfBuffer.toString('utf-8').includes('Decrypted Fallback'), 'Decrypted PDF does NOT contain Decrypted Fallback placeholder');
    assert(downloadedPdfBuffer.length === REAL_PDF_BUFFER.length, `Decrypted byte length (${downloadedPdfBuffer.length}) matches original (${REAL_PDF_BUFFER.length})`);
    assert(downloadedPdfBuffer.equals(REAL_PDF_BUFFER), 'Decrypted PDF matches original input buffer bit-for-bit');
    const downloadedPdfSha256 = crypto.createHash('sha256').update(downloadedPdfBuffer).digest('hex');
    assert(downloadedPdfSha256 === expectedPdfSha256, `Decrypted PDF SHA-256 matches original file SHA-256 (${downloadedPdfSha256.substring(0, 16)}...)`);

    // 4. Test Inline View endpoint
    console.log('\n--- Test Case 3: Inline Viewer Decryption (GET /api/documents/:id/view) ---');
    const viewRes = await fetch(`${BASE_URL}/api/documents/${docPdf.id}/view`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
    assert(viewRes.status === 200, 'Inline view returned HTTP 200');
    assert(viewRes.headers.get('Content-Type') === 'application/pdf', 'Inline view Content-Type is application/pdf');
    assert((viewRes.headers.get('Content-Disposition') || '').includes('inline'), 'Inline view Content-Disposition includes "inline"');
    const viewBuffer = Buffer.from(await viewRes.arrayBuffer());
    assert(viewBuffer.equals(REAL_PDF_BUFFER), 'Inline view serves exact decrypted original PDF');

    // 5. Test Real PNG Image Upload & Decrypted Download
    console.log('\n--- Test Case 4: Real PNG Image Encryption & Decrypted Download ---');
    const pngBase64 = `data:image/png;base64,${REAL_PNG_BUFFER.toString('base64')}`;
    const expectedPngSha256 = crypto.createHash('sha256').update(REAL_PNG_BUFFER).digest('hex');

    const uploadPngRes = await fetch(`${BASE_URL}/api/documents`, {
      method: 'POST',
      headers: headersA,
      body: JSON.stringify({
        name: 'Employee_Badge.png',
        category: 'IDs',
        fileData: pngBase64
      })
    });
    const uploadPngData = await uploadPngRes.json();
    assert(uploadPngRes.status === 201 && uploadPngData.success, 'PNG uploaded and encrypted');
    const docPng = uploadPngData.document;

    const downloadPngRes = await fetch(`${BASE_URL}/api/documents/${docPng.id}/download`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
    assert(downloadPngRes.status === 200, 'PNG download returned HTTP 200');
    assert(downloadPngRes.headers.get('Content-Type') === 'image/png', 'PNG Content-Type is image/png');
    const downloadedPngBuffer = Buffer.from(await downloadPngRes.arrayBuffer());
    assert(downloadedPngBuffer.equals(REAL_PNG_BUFFER), 'Downloaded PNG matches original PNG bit-for-bit');
    const downloadedPngSha256 = crypto.createHash('sha256').update(downloadedPngBuffer).digest('hex');
    assert(downloadedPngSha256 === expectedPngSha256, 'Downloaded PNG SHA-256 matches original file SHA-256');

    // 6. Test Missing File Handling: Show clear error instead of generating fake PDF
    console.log('\n--- Test Case 5: Missing File Error Handling (No Fake PDF Generation) ---');
    // Simulate missing file by requesting non-existent ID or removing a temporary file
    const ghostDocRes = await fetch(`${BASE_URL}/api/documents`, {
      method: 'POST',
      headers: headersA,
      body: JSON.stringify({
        name: 'Ghost_File.pdf',
        category: 'Personal',
        fileData: pdfBase64
      })
    });
    const ghostDocData = await ghostDocRes.json();
    const ghostDoc = ghostDocData.document;
    // Delete the file on disk to simulate missing file
    const ghostDiskPath = path.join(__dirname, '..', 'uploads', 'documents', path.basename(ghostDoc.filePath));
    if (fs.existsSync(ghostDiskPath)) {
      fs.unlinkSync(ghostDiskPath);
    }

    const downloadGhostRes = await fetch(`${BASE_URL}/api/documents/${ghostDoc.id}/download`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
    assert(downloadGhostRes.status === 404, `Missing file returns HTTP 404 instead of generating fake PDF (got ${downloadGhostRes.status})`);
    const ghostErrData = await downloadGhostRes.json();
    assert(ghostErrData.success === false && ghostErrData.message.includes('missing'), 'Error response explicitly states file is missing');

    // 7. Test Download of Document Without File Payload (Returns 404, never generates fake PDF)
    console.log('\n--- Test Case 6: Download Document Without File Payload Returns 404 (No Fake PDF) ---');
    const emptyDocRes = await fetch(`${BASE_URL}/api/documents`, {
      method: 'POST',
      headers: headersA,
      body: JSON.stringify({
        name: 'Metadata_Only_Notice.pdf',
        category: 'Personal'
      })
    });
    const emptyDocData = await emptyDocRes.json();
    assert(emptyDocRes.status === 201 && emptyDocData.document, 'Metadata-only document created');

    const downloadEmptyDocRes = await fetch(`${BASE_URL}/api/documents/${emptyDocData.document.id}/download`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${tokenA}` }
    });
    assert(downloadEmptyDocRes.status === 404, `Downloading metadata-only document returns HTTP 404 instead of generating fake PDF (got ${downloadEmptyDocRes.status})`);
    const emptyDocErr = await downloadEmptyDocRes.json();
    assert(emptyDocErr.success === false && emptyDocErr.message.includes('missing'), 'Error message states original document file is missing');

    // 8. Test Invalid PDF Header Rejection
    console.log('\n--- Test Case 7: Reject Invalid PDF Header Signature ---');
    const fakePdfBase64 = `data:application/pdf;base64,${Buffer.from('NOT A REAL PDF FILE HEADER').toString('base64')}`;
    const fakePdfUploadRes = await fetch(`${BASE_URL}/api/documents`, {
      method: 'POST',
      headers: headersA,
      body: JSON.stringify({
        name: 'Corrupt.pdf',
        fileData: fakePdfBase64
      })
    });
    assert(fakePdfUploadRes.status === 400, 'File with invalid PDF header is rejected with HTTP 400');

    // 9. Test Unauthorized Access (User B cannot download User A's document)
    console.log('\n--- Test Case 8: Access Control & Privacy Protection ---');
    const unauthRes = await fetch(`${BASE_URL}/api/documents/${docPdf.id}/download`, {
      method: 'GET',
      headers: headersB
    });
    assert(unauthRes.status === 404 || unauthRes.status === 403, `User B prevented from downloading User A's document (got ${unauthRes.status})`);

    // 10. Test Unauthenticated Access
    console.log('\n--- Test Case 9: Unauthenticated Request Rejection ---');
    const unauthenticatedRes = await fetch(`${BASE_URL}/api/documents/${docPdf.id}/download`, {
      method: 'GET'
    });
    assert(unauthenticatedRes.status === 401, `Unauthenticated download rejected with HTTP 401 (got ${unauthenticatedRes.status})`);

    console.log(`\n=======================================================`);
    console.log(`🏁 Document Integrity Summary: ${passed} passed, ${failed} failed.`);
    console.log(`=======================================================\n`);

    if (failed > 0) {
      process.exit(1);
    } else {
      process.exit(0);
    }
  } catch (err) {
    console.error('Test suite error:', err);
    process.exit(1);
  }
}

setTimeout(runDocumentTests, 1200);
