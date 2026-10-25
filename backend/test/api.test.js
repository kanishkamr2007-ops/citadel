const http = require('http');
const app = require('../server');

const BASE_URL = 'http://127.0.0.1:5000';

async function runTests() {
  console.log('🧪 Running Comprehensive Citadel API Tests...\n');
  let passed = 0;
  let failed = 0;

  function assert(condition, name) {
    if (condition) {
      console.log(`  ✅ PASS: ${name}`);
      passed++;
    } else {
      console.error(`  ❌ FAIL: ${name}`);
      failed++;
    }
  }

  try {
    const testEmail = `testuser_${Date.now()}@citadel.sec`;
    const testPassword = 'SuperMasterPassword123!#';

    // 1. Register
    console.log('1. Testing Registration...');
    const regRes = await fetch(`${BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test Agent',
        email: testEmail,
        password: testPassword,
        recoveryEmail: 'recovery@citadel.sec'
      })
    });
    const regData = await regRes.json();
    assert(regRes.status === 201 && regData.success && regData.token, 'User registered successfully with JWT');
    const token = regData.token;
    const authHeaders = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };

    // 2. Login
    console.log('\n2. Testing Authentication Login...');
    const loginRes = await fetch(`${BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: testEmail,
        password: testPassword
      })
    });
    const loginData = await loginRes.json();
    assert(loginRes.status === 200 && loginData.success, 'Login verified and token refreshed');

    // 3. Multi-Account Management (Create 2 accounts for same App: Instagram)
    console.log('\n3. Testing Multi-Account Credential Management (AES-256-GCM)...');
    const acc1Res = await fetch(`${BASE_URL}/api/accounts`, {
      method: 'POST',
      headers: authHeaders,
      body: JSON.stringify({
        title: 'Instagram',
        url: 'https://instagram.com',
        username: 'agent_personal',
        password: 'PersonalInstagramSecretPass99!',
        category: 'Social',
        accountType: 'Personal',
        notes: 'Personal account for photography'
      })
    });
    const acc1Data = await acc1Res.json();
    assert(acc1Res.status === 201 && acc1Data.account.password === 'PersonalInstagramSecretPass99!', 'Account 1 (Personal) created & encrypted');

    const acc2Res = await fetch(`${BASE_URL}/api/accounts`, {
      method: 'POST',
      headers: authHeaders,
      body: JSON.stringify({
        title: 'Instagram',
        url: 'https://instagram.com',
        username: 'agent_business',
        password: 'BusinessInstagramSecretPass88!',
        category: 'Social',
        accountType: 'Business',
        notes: 'Official business account'
      })
    });
    const acc2Data = await acc2Res.json();
    assert(acc2Res.status === 201 && acc2Data.account.password === 'BusinessInstagramSecretPass88!', 'Account 2 (Business) created under same App (Instagram)');

    // 4. Test Multi-Account Grouping by App
    console.log('\n4. Testing Grouped Accounts By Application (/api/accounts/apps)...');
    const groupedRes = await fetch(`${BASE_URL}/api/accounts/apps`, { headers: authHeaders });
    const groupedData = await groupedRes.json();
    const instaGroup = groupedData.applications.find(a => a.application === 'Instagram');
    assert(
      groupedRes.status === 200 &&
      instaGroup &&
      instaGroup.accounts.length === 2 &&
      instaGroup.accounts.some(a => a.accountType === 'Personal') &&
      instaGroup.accounts.some(a => a.accountType === 'Business'),
      'Multi-Account grouping correctly groups Personal and Business accounts under Instagram'
    );

    // 5. Test Personal Documents
    console.log('\n5. Testing Document Locker Management...');
    const docRes = await fetch(`${BASE_URL}/api/documents`, {
      method: 'POST',
      headers: authHeaders,
      body: JSON.stringify({
        name: 'Passport_Scan.pdf',
        category: 'IDs',
        description: 'Primary national passport scan',
        size: '2.4 MB'
      })
    });
    const docData = await docRes.json();
    assert(docRes.status === 201 && docData.document.name === 'Passport_Scan.pdf', 'Personal Document stored securely');

    // 6. Test Secure Notes
    console.log('\n6. Testing Secure Notes...');
    const noteRes = await fetch(`${BASE_URL}/api/notes`, {
      method: 'POST',
      headers: authHeaders,
      body: JSON.stringify({
        title: 'Crypto Backup Seed Words',
        category: 'Finance',
        content: 'alpha beta gamma delta echo foxtrot golf hotel india juliet kilo lima',
        color: 'emerald'
      })
    });
    const noteData = await noteRes.json();
    assert(noteRes.status === 201 && noteData.note.title === 'Crypto Backup Seed Words', 'Secure Note saved');

    // 7. Test Personal Information / Profile Update
    console.log('\n7. Testing Personal Details Update...');
    const profileRes = await fetch(`${BASE_URL}/api/vault/profile`, {
      method: 'PUT',
      headers: authHeaders,
      body: JSON.stringify({
        name: 'Commander Antigravity',
        role: 'Chief Security Officer',
        recoveryEmail: 'cso_backup@citadel.sec'
      })
    });
    const profileData = await profileRes.json();
    assert(profileRes.status === 200 && profileData.user.name === 'Commander Antigravity', 'Personal profile updated');

    // 8. Test Vault Sync
    console.log('\n8. Testing Unified Vault State Synchronization (/api/vault/sync)...');
    const syncRes = await fetch(`${BASE_URL}/api/vault/sync`, { headers: authHeaders });
    const syncData = await syncRes.json();
    assert(
      syncRes.status === 200 &&
      syncData.data.passwords.length >= 2 &&
      syncData.data.documents.length >= 1 &&
      syncData.data.notes.length >= 1 &&
      syncData.data.user.name === 'Commander Antigravity',
      'Vault State fully synchronized with database'
    );

    // 9. Test Trash & Restore
    console.log('\n9. Testing Trash Lifecycle (Delete & Restore)...');
    const delRes = await fetch(`${BASE_URL}/api/accounts/${acc1Data.account.id}`, {
      method: 'DELETE',
      headers: authHeaders
    });
    const delData = await delRes.json();
    assert(delRes.status === 200 && delData.success, 'Moved account to Trash');

    const trashListRes = await fetch(`${BASE_URL}/api/trash`, { headers: authHeaders });
    const trashListData = await trashListRes.json();
    const trashedItem = trashListData.trash.find(t => t.title === 'Instagram');
    assert(trashedItem !== undefined, 'Item found in Trash');

    const restoreRes = await fetch(`${BASE_URL}/api/trash/${trashedItem.id}/restore`, {
      method: 'POST',
      headers: authHeaders
    });
    const restoreData = await restoreRes.json();
    assert(restoreRes.status === 200 && restoreData.success, 'Item restored from Trash to Vault');

    // 10. Testing Profile Avatar Upload
    console.log('\n10. Testing Profile Picture Upload (POST /api/auth/avatar)...');
    // 1x1 transparent PNG as test data URL
    const testPngBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
    const avatarRes = await fetch(`${BASE_URL}/api/auth/avatar`, {
      method: 'POST',
      headers: authHeaders,
      body: JSON.stringify({ image: testPngBase64 })
    });
    const avatarData = await avatarRes.json();
    assert(avatarRes.status === 200 && avatarData.success && avatarData.avatar.startsWith('/uploads/avatars/'), 'Profile avatar uploaded and saved to file storage');

    // 11. Testing Profile Avatar Validation (Reject invalid image type)
    console.log('\n11. Testing Avatar Validation Security (Reject invalid types)...');
    const invalidAvatarRes = await fetch(`${BASE_URL}/api/auth/avatar`, {
      method: 'POST',
      headers: authHeaders,
      body: JSON.stringify({ image: 'data:text/plain;base64,aGVsbG8=' })
    });
    const invalidAvatarData = await invalidAvatarRes.json();
    assert(invalidAvatarRes.status === 400 && !invalidAvatarData.success, 'Invalid image format correctly rejected with 400');

    // 12. Testing Profile Avatar Reset to Default (DELETE /api/auth/avatar)
    console.log('\n12. Testing Profile Picture Reset (DELETE /api/auth/avatar)...');
    const removeAvatarRes = await fetch(`${BASE_URL}/api/auth/avatar`, {
      method: 'DELETE',
      headers: authHeaders
    });
    const removeAvatarData = await removeAvatarRes.json();
    assert(removeAvatarRes.status === 200 && removeAvatarData.success && removeAvatarData.avatar.includes('unsplash'), 'Profile picture successfully reset to default avatar');

    console.log(`\n=======================================================`);
    console.log(`🏁 Test Summary: ${passed} passed, ${failed} failed.`);
    console.log(`=======================================================\n`);

    if (failed > 0) {
      process.exit(1);
    } else {
      process.exit(0);
    }
  } catch (err) {
    console.error('Test error:', err);
    process.exit(1);
  }
}

setTimeout(runTests, 1200);
