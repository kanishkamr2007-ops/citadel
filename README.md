# Citadel – Secure Personal Information & Multi-Account Management System

Citadel is a zero-knowledge, encrypted personal vault and multi-account credential management system. It combines an aesthetic cybersecurity dashboard with an enterprise-grade Node.js/Express and MongoDB backend, featuring authenticated AES-256-GCM encryption for credentials and documents.

The project is cleanly decoupled into two independent sub-projects: **`frontend/`** and **`backend/`**.

---

## 📁 Repository Structure

```text
citadel/
├── frontend/                     # Standalone Frontend Application (Vite + Vanilla JS + Tailwind)
│   ├── public/
│   │   └── favicon.svg           # Application shield icon
│   ├── src/
│   │   └── app.js                # Core Citadel application logic & state machine
│   ├── assets/                   # Static media and icons
│   ├── index.html                # Frontend entrypoint & responsive design
│   ├── vite.config.js            # Vite configuration with /api & /uploads proxy
│   ├── vercel.json               # SPA routing rewrite configuration for Vercel
│   ├── package.json              # Frontend scripts (dev, build, preview)
│   ├── .env.example              # Frontend environment template
│   └── .gitignore                # Frontend-specific ignore rules
│
├── backend/                      # Standalone Backend REST API (Node.js + Express + Mongoose)
│   ├── config/
│   │   └── db.js                 # MongoDB connection & connection pooling
│   ├── controllers/              # Business logic controllers
│   │   ├── accountController.js  # Multi-account CRUD & application grouping
│   │   ├── activityController.js # Security event & audit logger
│   │   ├── authController.js     # User registration, login, profile & avatar upload
│   │   ├── documentController.js # Document locker & AES-256-GCM decryption pipeline
│   │   ├── noteController.js     # Encrypted markdown notes
│   │   ├── trashController.js    # Soft-delete, restore, and cryptographic shredding
│   │   └── vaultController.js    # Unified vault synchronization
│   ├── middleware/
│   │   └── auth.js               # JWT bearer verification & user isolation
│   ├── models/                   # Mongoose schemas
│   │   ├── Account.js            # Account schema (multi-account per app)
│   │   ├── Activity.js           # Activity log schema
│   │   ├── Document.js           # Encrypted document metadata schema
│   │   ├── Note.js               # Encrypted note schema
│   │   ├── Trash.js              # Trash lifecycle schema
│   │   └── User.js               # User master identity & settings schema
│   ├── routes/                   # Express route definitions
│   │   ├── accountRoutes.js
│   │   ├── activityRoutes.js
│   │   ├── authRoutes.js
│   │   ├── documentRoutes.js
│   │   ├── noteRoutes.js
│   │   ├── trashRoutes.js
│   │   └── vaultRoutes.js
│   ├── services/
│   │   └── storageService.js     # Storage abstraction (local disk + cloud S3 hooks)
│   ├── test/                     # Automated integration test suites
│   │   ├── api.test.js           # 15 assertions (auth, accounts, notes, trash, avatar)
│   │   └── document.test.js      # 39 assertions (AES-256-GCM encryption & PDF integrity)
│   ├── uploads/                  # Protected local file storage (excluded from Git)
│   │   ├── avatars/              # Uploaded user profile pictures
│   │   └── documents/            # Encrypted ciphertext document binaries
│   ├── utils/
│   │   └── crypto.js             # AES-256-GCM cryptographic helper functions
│   ├── server.js                 # Express server bootstrap & security headers
│   ├── package.json              # Backend scripts (start, dev, test)
│   ├── .env.example              # Backend environment template
│   └── .gitignore                # Backend-specific ignore rules
│
├── .gitignore                    # Monorepo-level gitignore
├── .env.example                  # Root configuration documentation
├── package.json                  # Root workspace convenience runner scripts
└── README.md                     # Comprehensive architecture & deployment documentation
```

---

## 🔒 Security & Cryptographic Architecture

1. **User Authentication:**
   - Master account passwords are safe-hashed using **bcrypt** with dynamic salting.
   - Authentication yields cryptographically signed **JSON Web Tokens (JWT)**.
   - Profile picture uploads are checked for MIME type, file signature, and size restrictions.

2. **Credential Encryption (AES-256-GCM):**
   - Application passwords and confidential credential notes are encrypted using **AES-256-GCM** (Galois/Counter Mode).
   - Each secret generates an independent 96-bit initialization vector (`IV`) and a 128-bit authentication tag (`authTag`).
   - Stored format: `iv:authTag:ciphertext`. Tampering invalidates the authentication tag and fails decryption.

3. **Document Encryption & File Retrieval Pipeline:**
   - Uploaded PDF, image, and office documents are received as binary payloads.
   - The original binary is hashed with **SHA-256** and encrypted using **AES-256-GCM** before writing to disk (`.enc`).
   - Stored files on disk contain pure ciphertext; plaintext file headers (e.g. `%PDF-`) are never written unencrypted.
   - Upon download (`GET /api/documents/:id/download`) or inline view (`GET /api/documents/:id/view`), the server authenticated-decrypts the ciphertext, checks the PDF magic signature, verifies the SHA-256 hash, and streams the genuine binary response with appropriate `Content-Disposition` and `Content-Type` headers.
   - The download pipeline **never** outputs placeholder verification pages or substitutes corrupted files. If an item cannot be found, it returns a standard HTTP 404.

4. **Multi-Account Hierarchy:**
   - Supports multiple distinct accounts under one application (e.g. *Personal*, *College*, and *Business* accounts under *Instagram*).
   - Applications can be queried in groups (`/api/accounts/apps`) or synchronized globally (`/api/vault/sync`).

---

## 🚀 Quickstart: Local Development

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB instance (MongoDB Atlas connection string or local MongoDB at `mongodb://127.0.0.1:27017/citadel_vault`)

### 1. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your MONGODB_URI and ENCRYPTION_SECRET

# Start development server (runs on http://localhost:5000)
npm run dev
```

### 2. Frontend Setup
In a separate terminal:
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Default VITE_API_URL is empty or http://localhost:5000 (Vite proxies /api to port 5000)

# Start development server (runs on http://localhost:5173)
npm run dev
```

### Root Convenience Commands
From the repository root, you can manage both services:
```bash
npm run dev:backend       # Starts the backend server with auto-restart
npm run dev:frontend      # Starts the Vite frontend dev server
npm run build:frontend    # Compiles the production frontend bundle to frontend/dist/
npm test                  # Runs all 54 automated integration test assertions
```

---

## ⚙️ Environment Variables Reference

### Backend (`backend/.env`)
| Variable | Description | Example |
| :--- | :--- | :--- |
| `PORT` | HTTP port for the Express API | `5000` |
| `NODE_ENV` | Runtime environment mode | `development` or `production` |
| `MONGODB_URI` | MongoDB Atlas or local connection string | `mongodb+srv://user:pass@cluster.mongodb.net/citadel` |
| `JWT_SECRET` | Secret key used to sign session JWTs | `a_very_long_secure_random_string` |
| `ENCRYPTION_SECRET` | 32-byte hex string (64 characters) for AES-256-GCM | `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |
| `FRONTEND_URL` | Allowed origin for CORS in production | `https://your-citadel-app.vercel.app` |
| `STORAGE_PROVIDER` | Document storage provider (`local` or `s3`) | `local` |
| `STORAGE_LOCAL_DIR` | Local disk folder for encrypted documents | `uploads/documents` |

### Frontend (`frontend/.env`)
| Variable | Description | Example |
| :--- | :--- | :--- |
| `VITE_API_URL` | Base URL of deployed backend API (omit in local dev) | `https://citadel-api.onrender.com` |

---

## 🧪 Testing & Verification

### Request Diagnostics
Frontend API requests log the request ID, method, destination path, HTTP status, and duration in the browser developer console. Backend logs the same request ID with the method, path, status, and duration in the service logs (for example, Render logs). Request bodies, passwords, tokens, and query strings are not included. Use the request ID to match a browser entry with its backend request.

The backend includes comprehensive end-to-end integration test suites:

```bash
cd backend
npm test
```

### What the test suites verify:
1. **Document Pipeline (`backend/test/document.test.js` - 39 assertions):**
   - Multi-page PDF upload with authenticated AES-256-GCM encryption.
   - Verification that ciphertext on disk is completely obfuscated (no `%PDF-` signature leaked).
   - Authenticated decryption returning bit-for-bit identical PDF bytes matching the original SHA-256 hash.
   - Inline PDF view headers (`inline; filename=...`).
   - Image upload and exact binary decryption.
   - Missing/ghost file handling (returns HTTP 404 without producing fake verification PDFs).
   - Corrupt PDF header rejection (HTTP 400).
   - Cross-user authorization boundaries (User B cannot download User A's document).
   - Unauthenticated request rejection (HTTP 401).

2. **Core API Pipeline (`backend/test/api.test.js` - 15 assertions):**
   - User registration and JWT issuance.
   - Login credential verification and password hashing.
   - Multi-account credential creation and grouping by application name.
   - Document metadata and encrypted notes.
   - Vault state synchronization (`/api/vault/sync`).
   - 30-day trash lifecycle (moving items to trash, restoring, permanent shredding).
   - Profile avatar upload, validation against invalid file types, and reset to default.

---

## 🌐 Production Deployment Guide

### Deploying the Frontend (e.g. Vercel)
1. In the Vercel dashboard, click **Add New Project** and import this repository.
2. Set the **Root Directory** setting to `frontend`.
3. Vercel will automatically detect Vite:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Add the Environment Variable in Vercel:
   - `VITE_API_URL`: Your deployed backend URL (e.g. `https://citadel-api.yourdomain.com`).
5. Deploy! The included `frontend/vercel.json` ensures client-side routes redirect correctly to `index.html`.

### Deploying the Backend (e.g. Sevalla, Render, Railway, or VPS)
1. In your cloud provider dashboard, create a new Web Service and set the **Root Directory** to `backend` (or set the start command to `npm --prefix backend start`).
2. Set the environment:
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
3. Configure Environment Variables in the service settings:
   - `NODE_ENV=production`
   - `PORT=5000` (or leave default assigned by provider)
   - `MONGODB_URI`: Your MongoDB Atlas connection URI
   - `JWT_SECRET`: A strong 64-character secret
   - `ENCRYPTION_SECRET`: A 64-character hex key
   - `FRONTEND_URL`: The URL of your deployed frontend (e.g. `https://your-citadel-app.vercel.app`)
4. **Persistent Storage Note:**
   If using local file storage for documents and avatars on cloud containers with ephemeral file systems, configure a persistent disk mount for `backend/uploads/` or configure the cloud storage hook in `backend/services/storageService.js` (AWS S3, Google Cloud Storage, or Cloudflare R2).
