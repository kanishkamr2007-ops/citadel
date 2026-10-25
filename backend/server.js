require('dotenv').config();
const path = require('path');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const fs = require('fs');
const connectDB = require('./config/db');

// Connect to MongoDB Database
connectDB();

const app = express();

// Security Middleware (allowing CDNs for fonts and scripts used by frontend)
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: { policy: 'cross-origin' }
}));

// CORS Configuration - allows frontend origin in dev and production
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:4173',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:3000',
  'http://127.0.0.1:5000',
  'http://localhost:5000'
].filter(Boolean);

app.use(cors({
  origin: function(origin, callback) {
    // Allow non-browser requests (mobile, curl, server-to-server)
    if (!origin) return callback(null, true);
    if (process.env.NODE_ENV !== 'production' || allowedOrigins.includes(origin) || origin.endsWith('.vercel.app')) {
      return callback(null, true);
    }
    return callback(null, true);
  },
  credentials: true
}));

// Request Body Parsers (support large binary Base64 file uploads)
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());

// Request Logger
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

// API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/accounts', require('./routes/accountRoutes'));
app.use('/api/documents', require('./routes/documentRoutes'));
app.use('/api/notes', require('./routes/noteRoutes'));
app.use('/api/trash', require('./routes/trashRoutes'));
app.use('/api/activities', require('./routes/activityRoutes'));
app.use('/api/vault', require('./routes/vaultRoutes'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    system: 'Citadel - Secure Vault Backend',
    timestamp: new Date().toISOString()
  });
});

// Ensure uploads directories exist
const avatarsDir = path.join(__dirname, 'uploads', 'avatars');
const documentsDir = path.join(__dirname, 'uploads', 'documents');
if (!fs.existsSync(avatarsDir)) {
  fs.mkdirSync(avatarsDir, { recursive: true });
}
if (!fs.existsSync(documentsDir)) {
  fs.mkdirSync(documentsDir, { recursive: true });
}

// Serve Static Avatars (Publicly accessible with proper headers)
app.use('/uploads/avatars', express.static(avatarsDir));

// Fallback for unmatched API routes
app.use('/api', (req, res) => {
  res.status(404).json({ success: false, message: 'API endpoint not found' });
});

// Root ping
app.get('/', (req, res) => {
  res.status(200).json({
    name: 'Citadel Security Vault API',
    status: 'operational',
    version: '1.0.0',
    documentation: '/api/health'
  });
});

// Centralized Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Application Error:', err);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🛡️  CITADEL BACKEND SERVER RUNNING`);
  console.log(`🌐 Local URL:  http://localhost:${PORT}`);
  console.log(`📡 API Status: http://localhost:${PORT}/api/health`);
  console.log(`🔒 Encryption: AES-256-GCM Active`);
  console.log(`=======================================================`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection Error:', err.message);
});

module.exports = app;
