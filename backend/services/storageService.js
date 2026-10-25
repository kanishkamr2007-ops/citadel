const path = require('path');
const fs = require('fs');

/**
 * Citadel Storage Service
 * Manages encrypted document storage.
 * Designed for local persistent storage in development and private cloud/S3 storage in production.
 */
class StorageService {
  constructor() {
    this.provider = process.env.STORAGE_PROVIDER || 'local';
    this.localDir = process.env.STORAGE_LOCAL_DIR
      ? path.resolve(process.env.STORAGE_LOCAL_DIR)
      : path.resolve(__dirname, '..', 'uploads', 'documents');

    if (this.provider === 'local' && !fs.existsSync(this.localDir)) {
      fs.mkdirSync(this.localDir, { recursive: true });
    }
  }

  /**
   * Safe path resolution to strictly prevent directory traversal attacks
   * @param {string} filename 
   * @returns {{ safeFilename: string, resolvedPath: string }}
   */
  getSafeDiskPath(filename) {
    const safeFilename = path.basename(filename);
    const resolvedPath = path.resolve(this.localDir, safeFilename);
    if (!resolvedPath.startsWith(this.localDir)) {
      throw new Error('Access denied: Path traversal detected');
    }
    return { safeFilename, resolvedPath };
  }

  /**
   * Save an encrypted file buffer
   * @param {string} filename 
   * @param {Buffer} buffer 
   * @returns {Promise<{ filename: string, path: string, sizeBytes: number }>}
   */
  async saveFile(filename, buffer) {
    if (this.provider === 'local') {
      const { safeFilename, resolvedPath } = this.getSafeDiskPath(filename);
      await fs.promises.writeFile(resolvedPath, buffer);
      return {
        filename: safeFilename,
        path: resolvedPath,
        sizeBytes: buffer.length
      };
    }

    // Production hook: AWS S3 / Private Cloud Bucket
    throw new Error(`Storage provider '${this.provider}' not configured.`);
  }

  /**
   * Read an encrypted file buffer
   * @param {string} filename 
   * @returns {Promise<Buffer|null>}
   */
  async readFile(filename) {
    if (!filename) return null;

    if (this.provider === 'local') {
      const { resolvedPath } = this.getSafeDiskPath(filename);
      if (!fs.existsSync(resolvedPath)) {
        return null;
      }
      return await fs.promises.readFile(resolvedPath);
    }

    // Production hook: AWS S3 / Private Cloud Bucket
    throw new Error(`Storage provider '${this.provider}' not configured.`);
  }

  /**
   * Delete an encrypted file from storage
   * @param {string} filename 
   * @returns {Promise<boolean>}
   */
  async deleteFile(filename) {
    if (!filename) return false;

    if (this.provider === 'local') {
      try {
        const { resolvedPath } = this.getSafeDiskPath(filename);
        if (fs.existsSync(resolvedPath)) {
          await fs.promises.unlink(resolvedPath);
          return true;
        }
      } catch (err) {
        console.warn('Failed to delete file from disk:', err.message);
      }
      return false;
    }

    return false;
  }

  /**
   * Check if a file exists
   * @param {string} filename 
   * @returns {boolean}
   */
  fileExists(filename) {
    if (!filename) return false;
    if (this.provider === 'local') {
      try {
        const { resolvedPath } = this.getSafeDiskPath(filename);
        return fs.existsSync(resolvedPath);
      } catch (e) {
        return false;
      }
    }
    return false;
  }

  getStorageDirectory() {
    return this.localDir;
  }
}

module.exports = new StorageService();
