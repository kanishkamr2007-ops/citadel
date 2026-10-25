const crypto = require('crypto');
const bcrypt = require('bcryptjs');

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 12; // 96 bits for GCM recommended

function getEncryptionKey() {
  const secret = process.env.ENCRYPTION_SECRET || '6b8d2f5a9e3c1a4b7d0e2f5a8c1b4d7e0f3a6c9b2e5a8d1c4f7b0e3a6c9d2f5a';
  if (secret.length === 64) {
    return Buffer.from(secret, 'hex');
  }
  return crypto.createHash('sha256').update(secret).digest();
}

/**
 * Encrypt plaintext using AES-256-GCM.
 * Output format: iv_hex:authTag_hex:ciphertext_hex
 */
function encryptSecret(text) {
  if (!text) return '';
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, getEncryptionKey(), iv);
  
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  const authTag = cipher.getAuthTag().toString('hex');
  return `${iv.toString('hex')}:${authTag}:${encrypted}`;
}

/**
 * Decrypt ciphertext using AES-256-GCM.
 * Input format: iv_hex:authTag_hex:ciphertext_hex
 */
function decryptSecret(encryptedPayload) {
  if (!encryptedPayload) return '';
  try {
    const parts = encryptedPayload.split(':');
    if (parts.length !== 3) {
      // If it's already plaintext (e.g. legacy/mock data), return as is
      return encryptedPayload;
    }
    const [ivHex, authTagHex, ciphertextHex] = parts;
    const iv = Buffer.from(ivHex, 'hex');
    const authTag = Buffer.from(authTagHex, 'hex');
    
    const decipher = crypto.createDecipheriv(ALGORITHM, getEncryptionKey(), iv);
    decipher.setAuthTag(authTag);
    
    let decrypted = decipher.update(ciphertextHex, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  } catch (err) {
    console.error('Decryption failed:', err.message);
    return encryptedPayload;
  }
}

/**
 * Hash login password using bcrypt (12 rounds)
 */
async function hashPassword(plainPassword) {
  const salt = await bcrypt.genSalt(12);
  return bcrypt.hash(plainPassword, salt);
}

/**
 * Compare plain password against stored hash
 */
async function comparePassword(plainPassword, hashedPassword) {
  return bcrypt.compare(plainPassword, hashedPassword);
}

/**
 * Encrypt binary buffer using AES-256-GCM.
 * Returns { encryptedBuffer, iv, authTag }
 */
function encryptBuffer(buffer) {
  if (!buffer || buffer.length === 0) {
    throw new Error('Cannot encrypt empty buffer');
  }
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, getEncryptionKey(), iv);
  const encryptedBuffer = Buffer.concat([cipher.update(buffer), cipher.final()]);
  const authTag = cipher.getAuthTag();
  return {
    encryptedBuffer,
    iv: iv.toString('hex'),
    authTag: authTag.toString('hex')
  };
}

/**
 * Decrypt binary buffer using AES-256-GCM.
 * Returns original decrypted Buffer
 */
function decryptBuffer(encryptedBuffer, ivHex, authTagHex) {
  if (!encryptedBuffer || encryptedBuffer.length === 0) {
    throw new Error('Cannot decrypt empty buffer');
  }
  const iv = Buffer.from(ivHex, 'hex');
  const authTag = Buffer.from(authTagHex, 'hex');
  const decipher = crypto.createDecipheriv(ALGORITHM, getEncryptionKey(), iv);
  decipher.setAuthTag(authTag);
  const decrypted = Buffer.concat([decipher.update(encryptedBuffer), decipher.final()]);
  return decrypted;
}

module.exports = {
  encryptSecret,
  decryptSecret,
  encryptBuffer,
  decryptBuffer,
  hashPassword,
  comparePassword
};

