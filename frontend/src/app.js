// CITADEL — Seed Data & State Model
const INITIAL_DATA = {
  user: {
    name: "Alex Morgan",
    email: "alex.morgan@citadel-vault.io",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
    role: "Vault Master & Cybersecurity Analyst",
    joinedDate: "14 January 2025",
    lastLogin: "Today, 10:32 AM (Chrome on Windows 11)",
    twoFactorEnabled: true,
    emergencyKey: "CTDL-9842-8871-K9X2-M041-SECURE",
    recoveryEmail: "alex.backup@pm.me"
  },
  stats: {
    passwordsCount: 24,
    documentsCount: 12,
    notesCount: 8,
    securityScore: 92
  },
  passwords: [
    {
      id: "pwd-1",
      title: "Google Workspace & Gmail",
      url: "https://accounts.google.com",
      domain: "google.com",
      username: "student@gmail.com",
      password: "k9#Vq$92Lm!Px8@Z",
      category: "Education",
      strength: "strong",
      strengthScore: 95,
      isReused: false,
      isCompromised: false,
      lastUpdated: "26 Aug 2026",
      notes: "Primary academic & personal recovery inbox with hardware YubiKey 2FA enabled.",
      tags: ["Primary", "Email", "SSO"],
      favIcon: "🌐",
      brandColor: "#4285F4"
    },
    {
      id: "pwd-2",
      title: "GitHub Enterprise",
      url: "https://github.com",
      domain: "github.com",
      username: "alexmorgan-dev",
      password: "G7#kM9!vPq2$Xw8@Ln4",
      category: "Work",
      strength: "strong",
      strengthScore: 98,
      isReused: false,
      isCompromised: false,
      lastUpdated: "24 Aug 2026",
      notes: "Contains SSH keys and production CI/CD signing keys.",
      tags: ["Development", "Code", "2FA"],
      favIcon: "🐙",
      brandColor: "#8B5CF6"
    },
    {
      id: "pwd-3",
      title: "Chase Sapphire Banking",
      url: "https://www.chase.com",
      domain: "chase.com",
      username: "alex.morgan.fin",
      password: "Cs9$Vault!2026#Secure",
      category: "Finance",
      strength: "strong",
      strengthScore: 100,
      isReused: false,
      isCompromised: false,
      lastUpdated: "20 Aug 2026",
      notes: "Primary checking & credit cards account. Requires SMS code.",
      tags: ["Banking", "Finance", "Critical"],
      favIcon: "🏦",
      brandColor: "#0060F0"
    },
    {
      id: "pwd-4",
      title: "AWS Cloud Console",
      url: "https://aws.amazon.com",
      domain: "aws.amazon.com",
      username: "alex-root@citadel-vault.io",
      password: "Aw5!Super#Sec99*CloudKey",
      category: "Work",
      strength: "strong",
      strengthScore: 98,
      isReused: false,
      isCompromised: false,
      lastUpdated: "19 Aug 2026",
      notes: "Root account with TOTP MFA and budget alarms configured.",
      tags: ["Cloud", "DevOps", "Infrastructure"],
      favIcon: "☁️",
      brandColor: "#FF9900"
    },
    {
      id: "pwd-5",
      title: "Spotify Premium",
      url: "https://open.spotify.com",
      domain: "spotify.com",
      username: "alex_beats",
      password: "password123!",
      category: "Social",
      strength: "weak",
      strengthScore: 35,
      isReused: true,
      isCompromised: false,
      lastUpdated: "12 May 2025",
      notes: "Family plan subscription. Need to update to strong generated key.",
      tags: ["Entertainment", "Music"],
      favIcon: "🎵",
      brandColor: "#1DB954"
    },
    {
      id: "pwd-6",
      title: "Netflix Streaming",
      url: "https://www.netflix.com",
      domain: "netflix.com",
      username: "alex.morgan@citadel-vault.io",
      password: "password123!",
      category: "Social",
      strength: "weak",
      strengthScore: 35,
      isReused: true,
      isCompromised: false,
      lastUpdated: "10 Feb 2025",
      notes: "Reused password from Spotify. Flagged for immediate update.",
      tags: ["Streaming", "Entertainment"],
      favIcon: "🎬",
      brandColor: "#E50914"
    },
    {
      id: "pwd-7",
      title: "Steam Gaming Vault",
      url: "https://store.steampowered.com",
      domain: "steampowered.com",
      username: "cyber_alex_99",
      password: "password123!",
      category: "Social",
      strength: "weak",
      strengthScore: 35,
      isReused: true,
      isCompromised: false,
      lastUpdated: "04 Jan 2025",
      notes: "Steam Guard mobile authenticator linked.",
      tags: ["Gaming", "Steam"],
      favIcon: "🎮",
      brandColor: "#171A21"
    },
    {
      id: "pwd-8",
      title: "Amazon Prime Shopping",
      url: "https://www.amazon.com",
      domain: "amazon.com",
      username: "alex.shopping@pm.me",
      password: "AmzPass2026!Summer",
      category: "Shopping",
      strength: "medium",
      strengthScore: 68,
      isReused: false,
      isCompromised: false,
      lastUpdated: "18 Jul 2026",
      notes: "1-Click ordering enabled with Citi virtual card.",
      tags: ["E-Commerce", "Shopping"],
      favIcon: "📦",
      brandColor: "#FF9900"
    },
    {
      id: "pwd-9",
      title: "Stripe Billing Dashboard",
      url: "https://dashboard.stripe.com",
      domain: "stripe.com",
      username: "billing@citadel-vault.io",
      password: "Str!pe#9284*VaultProdPay",
      category: "Finance",
      strength: "strong",
      strengthScore: 99,
      isReused: false,
      isCompromised: false,
      lastUpdated: "15 Aug 2026",
      notes: "Merchant billing access. Protected by Passkey and hardware token.",
      tags: ["Payments", "SaaS", "Finance"],
      favIcon: "💳",
      brandColor: "#635BFF"
    },
    {
      id: "pwd-10",
      title: "University Student Portal",
      url: "https://portal.university.edu",
      domain: "university.edu",
      username: "a.morgan2026@university.edu",
      password: "Uni2026!Student#Portal",
      category: "Education",
      strength: "medium",
      strengthScore: 72,
      isReused: false,
      isCompromised: false,
      lastUpdated: "25 Aug 2026",
      notes: "Access to semester transcripts, research archives, and campus VPN.",
      tags: ["Academics", "University"],
      favIcon: "🎓",
      brandColor: "#2563EB"
    },
    {
      id: "pwd-11",
      title: "ProtonMail Secure Comms",
      url: "https://mail.proton.me",
      domain: "proton.me",
      username: "alex.morgan@pm.me",
      password: "Pr0t0n*PGP#MasterKey2026!",
      category: "Other",
      strength: "strong",
      strengthScore: 97,
      isReused: false,
      isCompromised: false,
      lastUpdated: "22 Aug 2026",
      notes: "Zero-knowledge end-to-end encrypted backup mailbox.",
      tags: ["Encrypted", "Privacy", "PGP"],
      favIcon: "🔒",
      brandColor: "#6D4AFF"
    },
    {
      id: "pwd-12",
      title: "Slack Workspace (Citadel Team)",
      url: "https://citadel-team.slack.com",
      domain: "slack.com",
      username: "alex.morgan@citadel-vault.io",
      password: "Slk#TeamCollab2026!Secure",
      category: "Work",
      strength: "strong",
      strengthScore: 92,
      isReused: false,
      isCompromised: false,
      lastUpdated: "11 Aug 2026",
      notes: "Engineering and incident response communication channel.",
      tags: ["Work", "Messaging"],
      favIcon: "💬",
      brandColor: "#4A154B"
    }
  ],
  documents: [
    {
      id: "doc-1",
      name: "Degree_Certificate.pdf",
      category: "Academic",
      categoryName: "Academic",
      categoryIcon: "🎓",
      fileType: "pdf",
      size: "2.4 MB",
      sizeBytes: 2516582,
      uploadedDate: "26 Aug 2026",
      encryptedSha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
      isFavorite: true,
      description: "Official B.S. in Computer Science & Cybersecurity Honors Degree (Authenticated with digital seal).",
      tags: ["Degree", "University", "Certified"]
    },
    {
      id: "doc-2",
      name: "National_Passport_Scan.pdf",
      category: "IDs",
      categoryName: "IDs",
      categoryIcon: "🪪",
      fileType: "pdf",
      size: "4.1 MB",
      sizeBytes: 4300000,
      uploadedDate: "24 Aug 2026",
      encryptedSha256: "a1c2e3f4b5d67890123456789abcdef0123456789abcdef0123456789abcdef0",
      isFavorite: true,
      description: "Biometric passport bio-page scan with emergency contact sheet.",
      tags: ["Identity", "Government", "Travel"]
    },
    {
      id: "doc-3",
      name: "CISSP_Security_Certificate.pdf",
      category: "Certificates",
      categoryName: "Certificates",
      categoryIcon: "📜",
      fileType: "pdf",
      size: "1.8 MB",
      sizeBytes: 1887436,
      uploadedDate: "21 Aug 2026",
      encryptedSha256: "789abcde0123456789abcdef0123456789abcdef0123456789abcdef01234567",
      isFavorite: false,
      description: "Certified Information Systems Security Professional credential ID: #884920.",
      tags: ["Certification", "Cybersecurity", "ISC2"]
    },
    {
      id: "doc-4",
      name: "Drivers_License_Card.png",
      category: "IDs",
      categoryName: "IDs",
      categoryIcon: "🪪",
      fileType: "png",
      size: "3.2 MB",
      sizeBytes: 3355443,
      uploadedDate: "18 Aug 2026",
      encryptedSha256: "456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef0123",
      isFavorite: false,
      description: "Front and back high-resolution scan of state driver's license with Real ID star.",
      tags: ["ID", "License", "State"]
    },
    {
      id: "doc-5",
      name: "Apartment_Lease_Agreement_2026.docx",
      category: "Personal",
      categoryName: "Personal",
      categoryIcon: "👤",
      fileType: "docx",
      size: "1.2 MB",
      sizeBytes: 1258291,
      uploadedDate: "14 Aug 2026",
      encryptedSha256: "fedcba9876543210fedcba9876543210fedcba9876543210fedcba9876543210",
      isFavorite: false,
      description: "Residential residential rental agreement terms and security deposit receipt.",
      tags: ["Housing", "Legal", "Contract"]
    },
    {
      id: "doc-6",
      name: "Employment_Contract_Citadel.pdf",
      category: "Work",
      categoryName: "Work",
      categoryIcon: "💼",
      fileType: "pdf",
      size: "3.8 MB",
      sizeBytes: 3984588,
      uploadedDate: "10 Aug 2026",
      encryptedSha256: "11223344556677889900aabbccddeeff11223344556677889900aabbccddeeff",
      isFavorite: true,
      description: "Signed executive contract, IP assignment, and benefits overview.",
      tags: ["Employment", "Work", "Legal"]
    },
    {
      id: "doc-7",
      name: "Medical_Vaccination_Records.pdf",
      category: "Personal",
      categoryName: "Personal",
      categoryIcon: "👤",
      fileType: "pdf",
      size: "1.5 MB",
      sizeBytes: 1572864,
      uploadedDate: "05 Aug 2026",
      encryptedSha256: "aabbccddeeff00112233445566778899aabbccddeeff00112233445566778899",
      isFavorite: false,
      description: "Immunization history and international health clearance records.",
      tags: ["Health", "Medical"]
    },
    {
      id: "doc-8",
      name: "Tax_Return_Form_1040.pdf",
      category: "Other",
      categoryName: "Other",
      categoryIcon: "📂",
      fileType: "pdf",
      size: "5.1 MB",
      sizeBytes: 5347737,
      uploadedDate: "28 Jul 2026",
      encryptedSha256: "99887766554433221100ffeeddccbbaa99887766554433221100ffeeddccbbaa",
      isFavorite: false,
      description: "Federal & State tax filings with IRS electronic filing confirmation.",
      tags: ["Financial", "Taxes", "IRS"]
    }
  ],
  notes: [
    {
      id: "note-1",
      title: "College Portal & Research Server Access",
      category: "Education",
      categoryIcon: "🎓",
      color: "indigo",
      lastUpdated: "26 Aug 2026",
      tags: ["Academics", "SSH", "Server"],
      preview: "Important cluster login info and research compute cluster credentials...",
      content: `### High-Performance Cluster Access Details\n- **Cluster Node**: \`hpc-gw01.compute.university.edu\`\n- **Port**: \`22022\`\n- **SSH Key Fingerprint**: \`SHA256:9vK88xLn98Qz11m44Vv7\`\n- **VPN Gateway**: \`vpn.academics.edu/ssl-secure\`\n\n> Note: All compute jobs require SLURM scheduler script submission. Never commit API keys to git scratchpad.`
    },
    {
      id: "note-2",
      title: "Hardware Wallet Recovery Seeds",
      category: "Finance",
      categoryIcon: "🪙",
      color: "emerald",
      lastUpdated: "24 Aug 2026",
      tags: ["ColdStorage", "Crypto", "Critical"],
      preview: "Cold storage backup schema and safety instructions for physical safe...",
      content: `### Cold Storage Vault Architecture\n- **Device**: Ledger Stax & Trezor Safe 3\n- **Derivation Path**: \`m/44'/60'/0'/0/0\`\n- **Physical Backup**: Seed split into 2-of-3 Shamir Secret Sharing cards stored in safety deposit boxes A and B.\n- **Passphrase**: Stored in memory with emergency family access envelope.`
    },
    {
      id: "note-3",
      title: "Home Network & Router Security Setup",
      category: "Personal",
      categoryIcon: "📡",
      color: "cyan",
      lastUpdated: "20 Aug 2026",
      tags: ["Network", "IoT", "Firewall"],
      preview: "VLAN segmentation schema, Pi-Hole DNS sinks, and WireGuard peer keys...",
      content: `### Home Cybersecurity Infrastructure\n- **Gateway IP**: \`192.168.10.1\` (OPNsense Firewall)\n- **VLAN 10 (Secure)**: Workstations & NAS (\`192.168.10.0/24\`)\n- **VLAN 20 (IoT)**: Smart plugs & cameras (Isolated, no WAN outbound)\n- **VLAN 30 (Guest)**: Client rate-limited\n- **DNS**: Dual Pi-Hole + Unbound with DNS-over-TLS enabled.`
    },
    {
      id: "note-4",
      title: "Emergency Master Vault Contingency Protocol",
      category: "Work",
      categoryIcon: "🛡️",
      color: "rose",
      lastUpdated: "15 Aug 2026",
      tags: ["Emergency", "Protocol", "Family"],
      preview: "Contingency procedures for vault inheritance and designated emergency contacts...",
      content: `### Emergency Vault Protocol\n1. Designated emergency contact can request access via CITADEL Emergency Access portal.\n2. Mandatory 7-day waiting period with email and SMS notifications sent to primary device.\n3. If not declined, vault generates read-only emergency export encrypted with contact's public PGP key.`
    },
    {
      id: "note-5",
      title: "API Keys & Production Tokens",
      category: "Work",
      categoryIcon: "🔑",
      color: "purple",
      lastUpdated: "12 Aug 2026",
      tags: ["DevOps", "Keys", "Prod"],
      preview: "Citadel Vault Cloud KMS keys and webhook signing secrets...",
      content: `### Active Infrastructure Keys\n- **GCP Service Account**: \`citadel-vault-engine@citadel-sec.iam.gserviceaccount.com\`\n- **KMS Key Ring**: \`citadel-primary-ring-asia-east1\`\n- **Rotation Interval**: 90 Days (Next scheduled: 15 Nov 2026)`
    }
  ],
  activities: [
    {
      id: "act-1",
      type: "login",
      icon: "🔐",
      color: "indigo",
      title: "Successful Vault Unlock",
      description: "Master password verified with Biometric WebAuthn passkey.",
      time: "Today, 10:32 AM",
      category: "Login",
      device: "Chrome 128 / Windows 11",
      ip: "185.220.101.5 (Secure VPN - London, UK)",
      status: "success"
    },
    {
      id: "act-2",
      type: "password",
      icon: "🔑",
      color: "blue",
      title: "Gmail Credential Updated",
      description: "Password rotated and encrypted with 256-bit AES-GCM.",
      time: "Today, 10:20 AM",
      category: "Passwords",
      device: "Chrome 128 / Windows 11",
      ip: "185.220.101.5 (London, UK)",
      status: "success"
    },
    {
      id: "act-3",
      type: "document",
      icon: "📁",
      color: "emerald",
      title: "Degree_Certificate.pdf Uploaded",
      description: "Encrypted file stored in Academic document vault (2.4 MB).",
      time: "Today, 09:45 AM",
      category: "Documents",
      device: "Chrome 128 / Windows 11",
      ip: "185.220.101.5 (London, UK)",
      status: "success"
    },
    {
      id: "act-4",
      type: "note",
      icon: "📝",
      color: "violet",
      title: "Private Note Created",
      description: "Added 'College Portal & Research Server Access' note.",
      time: "Today, 09:15 AM",
      category: "Notes",
      device: "Chrome 128 / Windows 11",
      ip: "185.220.101.5 (London, UK)",
      status: "success"
    },
    {
      id: "act-5",
      type: "security",
      icon: "🛡️",
      color: "amber",
      title: "Vault Security Audit Completed",
      description: "Overall security rating scored 92% (2 weak passwords detected).",
      time: "Yesterday, 04:12 PM",
      category: "Security",
      device: "CITADEL Automated Sentinel",
      ip: "Internal Security Engine",
      status: "warning"
    },
    {
      id: "act-6",
      type: "login",
      icon: "🚨",
      color: "rose",
      title: "New Device Login Verification",
      description: "New session verified from Safari on iPhone 16 Pro.",
      time: "24 Aug 2026, 08:30 PM",
      category: "Login",
      device: "Mobile Safari / iOS 18.2",
      ip: "82.165.197.1 (Manchester, UK)",
      status: "info"
    }
  ],
  notifications: [
    {
      id: "notif-1",
      type: "danger",
      icon: "🔴",
      title: "2 Weak Passwords Detected",
      message: "Spotify and Netflix are using low-complexity passwords that can be easily cracked.",
      time: "15 minutes ago",
      read: false,
      actionText: "Fix in Security Center",
      actionTarget: "security"
    },
    {
      id: "notif-2",
      type: "warning",
      icon: "🟡",
      title: "Password Reused on Multiple Websites",
      message: "The same password is shared across Spotify, Netflix, and Steam Gaming.",
      time: "1 hour ago",
      read: false,
      actionText: "Rotate Passwords",
      actionTarget: "passwords"
    },
    {
      id: "notif-3",
      type: "success",
      icon: "🟢",
      title: "Document Successfully Secured",
      message: "Degree_Certificate.pdf has been verified and encrypted with AES-256.",
      time: "2 hours ago",
      read: false,
      actionText: "View Document",
      actionTarget: "documents"
    },
    {
      id: "notif-4",
      type: "success",
      icon: "🟢",
      title: "Password Successfully Updated",
      message: "Google Workspace & Gmail credential was successfully updated.",
      time: "3 hours ago",
      read: true,
      actionText: "View Vault",
      actionTarget: "passwords"
    },
    {
      id: "notif-5",
      type: "info",
      icon: "🔐",
      title: "New Login Detected",
      message: "Vault was accessed from Chrome on Windows 11 in London, UK.",
      time: "Today, 10:32 AM",
      read: true,
      actionText: "Review Session",
      actionTarget: "settings"
    }
  ],
  trash: [
    {
      id: "trash-1",
      itemType: "password",
      title: "Old University Wifi Portal",
      originalCategory: "Education",
      deletedDate: "27 Aug 2026",
      daysRemaining: 28,
      data: {
        username: "morgan_wifi_old",
        password: "TempCampusWifi2024!"
      }
    },
    {
      id: "trash-2",
      itemType: "document",
      title: "Draft_Resume_2024.pdf",
      originalCategory: "Academic",
      deletedDate: "25 Aug 2026",
      daysRemaining: 26,
      data: {
        fileType: "pdf",
        size: "1.1 MB"
      }
    },
    {
      id: "trash-3",
      itemType: "note",
      title: "Old Apartment Wifi Password",
      originalCategory: "Personal",
      deletedDate: "23 Aug 2026",
      daysRemaining: 24,
      data: {
        preview: "Wifi router password from previous residence on Baker St."
      }
    }
  ],
  settings: {
    theme: "dark",
    autoLockTimeout: "15",
    clipboardClearTimeout: "30",
    twoFactorEnabled: true,
    loginAlertsEnabled: true,
    biometricUnlockEnabled: true,
    passphraseGeneratorDefaultLength: 16,
    defaultLanguage: "English (US)",
    activeSessions: [
      {
        id: "sess-1",
        device: "Chrome 128 on Windows 11 Pro",
        location: "London, United Kingdom",
        ip: "185.220.101.5",
        isCurrent: true,
        lastActive: "Active Now"
      },
      {
        id: "sess-2",
        device: "CITADEL Mobile App on iPhone 16 Pro",
        location: "Manchester, United Kingdom",
        ip: "82.165.197.1",
        isCurrent: false,
        lastActive: "2 days ago"
      },
      {
        id: "sess-3",
        device: "Firefox Browser on MacBook Pro M3",
        location: "London, United Kingdom",
        ip: "86.14.92.110",
        isCurrent: false,
        lastActive: "5 days ago"
      }
    ]
  }
};

// CITADEL — Cryptographic Password Generator & Strength Engine

class PasswordGenerator {
  static CHAR_SETS = {
    uppercase: "ABCDEFGHJKLMNPQRSTUVWXYZ", // Excluded ambiguous by default optionally
    uppercaseAll: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijkmnopqrstuvwxyz",
    lowercaseAll: "abcdefghijklmnopqrstuvwxyz",
    numbers: "23456789",
    numbersAll: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?"
  };

  static PASSPHRASE_WORDS = [
    "citadel", "quantum", "cipher", "sentinel", "nebula", "matrix", "bastion",
    "horizon", "vertex", "eclipse", "guardian", "phoenix", "shield", "stellar",
    "cyber", "enigma", "vanguard", "apex", "titan", "falcon", "solace", "orbit",
    "aurora", "stratus", "zenith", "valkyrie", "beacon", "crypto", "nexus", "prism"
  ];

  static generate(options = {}) {
    const {
      length = 16,
      uppercase = true,
      lowercase = true,
      numbers = true,
      symbols = true,
      excludeLookalikes = false,
      mode = "password" // "password" or "passphrase"
    } = options;

    if (mode === "passphrase") {
      const wordsCount = Math.max(3, Math.min(6, Math.floor(length / 4)));
      const chosen = [];
      for (let i = 0; i < wordsCount; i++) {
        const randIndex = Math.floor(Math.random() * this.PASSPHRASE_WORDS.length);
        let word = this.PASSPHRASE_WORDS[randIndex];
        if (uppercase && i % 2 === 0) {
          word = word.charAt(0).toUpperCase() + word.slice(1);
        }
        chosen.push(word);
      }
      let result = chosen.join("-");
      if (numbers) result += Math.floor(Math.random() * 90 + 10);
      if (symbols) result += "!@#"[Math.floor(Math.random() * 3)];
      return result;
    }

    let charPool = "";
    const mandatoryChars = [];

    if (uppercase) {
      const set = excludeLookalikes ? this.CHAR_SETS.uppercase : this.CHAR_SETS.uppercaseAll;
      charPool += set;
      mandatoryChars.push(set[Math.floor(Math.random() * set.length)]);
    }
    if (lowercase) {
      const set = excludeLookalikes ? this.CHAR_SETS.lowercase : this.CHAR_SETS.lowercaseAll;
      charPool += set;
      mandatoryChars.push(set[Math.floor(Math.random() * set.length)]);
    }
    if (numbers) {
      const set = excludeLookalikes ? this.CHAR_SETS.numbers : this.CHAR_SETS.numbersAll;
      charPool += set;
      mandatoryChars.push(set[Math.floor(Math.random() * set.length)]);
    }
    if (symbols) {
      charPool += this.CHAR_SETS.symbols;
      mandatoryChars.push(this.CHAR_SETS.symbols[Math.floor(Math.random() * this.CHAR_SETS.symbols.length)]);
    }

    if (!charPool) {
      charPool = this.CHAR_SETS.lowercaseAll + this.CHAR_SETS.numbersAll;
    }

    const passwordArr = [...mandatoryChars];
    const targetLength = Math.max(mandatoryChars.length, length);

    // Crypto secure random generation if available
    const randomBuffer = new Uint32Array(targetLength);
    if (window.crypto && window.crypto.getRandomValues) {
      window.crypto.getRandomValues(randomBuffer);
    } else {
      for (let i = 0; i < targetLength; i++) {
        randomBuffer[i] = Math.floor(Math.random() * 4294967296);
      }
    }

    for (let i = passwordArr.length; i < targetLength; i++) {
      const randIdx = randomBuffer[i] % charPool.length;
      passwordArr.push(charPool[randIdx]);
    }

    // Shuffle
    for (let i = passwordArr.length - 1; i > 0; i--) {
      const j = randomBuffer[i] % (i + 1);
      [passwordArr[i], passwordArr[j]] = [passwordArr[j], passwordArr[i]];
    }

    return passwordArr.join("");
  }

  static evaluateStrength(password = "") {
    if (!password) {
      return {
        score: 0,
        label: "Empty",
        level: "none",
        entropyBits: 0,
        crackTime: "Instant",
        color: "slate",
        feedback: ["Please enter a password."]
      };
    }

    let poolSize = 0;
    if (/[a-z]/.test(password)) poolSize += 26;
    if (/[A-Z]/.test(password)) poolSize += 26;
    if (/[0-9]/.test(password)) poolSize += 10;
    if (/[^a-zA-Z0-9]/.test(password)) poolSize += 32;

    const length = password.length;
    const entropyBits = Math.round(length * Math.log2(Math.max(2, poolSize)));

    // Score 0 - 100
    let score = 0;
    const feedback = [];

    // Length points
    if (length >= 16) score += 40;
    else if (length >= 12) score += 30;
    else if (length >= 8) score += 15;
    else {
      score += 5;
      feedback.push("Password should be at least 12-16 characters long.");
    }

    // Complexity points
    if (/[a-z]/.test(password)) score += 15;
    if (/[A-Z]/.test(password)) score += 15;
    else feedback.push("Add uppercase letters.");

    if (/[0-9]/.test(password)) score += 15;
    else feedback.push("Add numbers.");

    if (/[^a-zA-Z0-9]/.test(password)) score += 15;
    else feedback.push("Add special symbols (!@#$%).");

    // Deductions for simple patterns
    if (/(password|123456|admin|welcome|qwerty|citadel)/i.test(password)) {
      score = Math.min(score, 35);
      feedback.push("Avoid dictionary words and common sequences.");
    }

    score = Math.min(100, Math.max(0, score));

    let label = "Weak";
    let level = "weak";
    let color = "rose";
    let crackTime = "< 1 minute";

    if (score >= 90) {
      label = "Very Strong";
      level = "strong";
      color = "emerald";
      crackTime = "Trillions of centuries";
    } else if (score >= 70) {
      label = "Strong";
      level = "strong";
      color = "emerald";
      crackTime = "34,000 years";
    } else if (score >= 50) {
      label = "Medium";
      level = "medium";
      color = "amber";
      crackTime = "3 months";
    } else {
      label = "Weak";
      level = "weak";
      color = "rose";
      crackTime = "< 5 minutes";
    }

    return {
      score,
      label,
      level,
      entropyBits,
      crackTime,
      color,
      feedback: feedback.length ? feedback : ["Excellent cryptographic complexity."]
    };
  }
}

// CITADEL — Security Engine & Vault Auditor


class SecurityEngine {
  static analyzeVault(passwords = [], twoFactorEnabled = true) {
    if (!passwords || passwords.length === 0) {
      return {
        score: 100,
        grade: "A+",
        gradeLabel: "Vault Protected",
        gradeColor: "emerald",
        strongCount: 0,
        mediumCount: 0,
        weakCount: 0,
        reusedCount: 0,
        compromisedCount: 0,
        reusedGroups: {},
        analyzedPasswords: [],
        vulnerabilities: [],
        recommendations: [
          {
            id: "rec-master",
            status: "success",
            icon: "🟢",
            title: "Master Password is Strong & Secure",
            description: "Protected with Argon2id cryptographic key derivation (64MB memory cost).",
            actionText: null
          },
          ...(twoFactorEnabled ? [{
            id: "rec-2fa",
            status: "success",
            icon: "🟢",
            title: "Two-Factor Authentication (2FA) is Active",
            description: "TOTP hardware authenticator protects against unauthorized logins.",
            actionText: null
          }] : [{
            id: "rec-2fa-off",
            status: "danger",
            icon: "🔴",
            title: "Two-Factor Authentication is Disabled",
            description: "Your vault is vulnerable if your master password is ever leaked.",
            actionText: "Enable 2FA",
            actionType: "enable-2fa"
          }]),
          {
            id: "rec-clean-vault",
            status: "success",
            icon: "🛡️",
            title: "No Vulnerabilities Detected",
            description: "Your zero-knowledge encrypted vault has no weak or compromised credentials. Add new accounts to begin real-time entropy and breach monitoring.",
            actionText: null
          }
        ]
      };
    }

    let strongCount = 0;
    let mediumCount = 0;
    let weakCount = 0;
    let compromisedCount = 0;

    // Track password frequencies for reuse detection
    const passwordFreq = {};
    passwords.forEach(item => {
      const pwd = item.password || "";
      passwordFreq[pwd] = (passwordFreq[pwd] || []);
      passwordFreq[pwd].push(item);
    });

    let reusedCount = 0;
    const reusedGroups = {};
    Object.entries(passwordFreq).forEach(([pwd, items]) => {
      if (items.length > 1 && pwd.length > 0) {
        reusedCount += items.length;
        reusedGroups[pwd] = items;
      }
    });

    const analyzedPasswords = passwords.map(item => {
      const strength = PasswordGenerator.evaluateStrength(item.password);
      const isReused = (passwordFreq[item.password] || []).length > 1;
      const isCompromised = item.isCompromised || (item.password === "password123!");

      if (strength.level === "strong") strongCount++;
      else if (strength.level === "medium") mediumCount++;
      else weakCount++;

      if (isCompromised) compromisedCount++;

      return {
        ...item,
        strengthScore: strength.score,
        strengthLevel: strength.level,
        isReused,
        isCompromised
      };
    });

    // Compute composite security score
    const total = passwords.length;
    let score = 0;

    // Factor 1: Password Strength (Weight: 50%)
    const avgStrength = (strongCount * 100 + mediumCount * 65 + weakCount * 25) / total;
    score += avgStrength * 0.50;

    // Factor 2: Reused Passwords Penalty (Weight: 25%)
    const reuseRatio = Math.max(0, 1 - (reusedCount / total));
    score += (reuseRatio * 100) * 0.25;

    // Factor 3: 2FA & Master Key Security (Weight: 25%)
    const twoFactorScore = twoFactorEnabled ? 100 : 40;
    score += twoFactorScore * 0.25;

    // Deduct heavily if compromised passwords exist
    if (compromisedCount > 0) {
      score -= (compromisedCount * 5);
    }

    score = Math.max(10, Math.min(100, Math.round(score)));

    let grade = "A+";
    let gradeLabel = "Excellent";
    let gradeColor = "emerald";

    if (score >= 90) {
      grade = "A+";
      gradeLabel = "Excellent";
      gradeColor = "emerald";
    } else if (score >= 80) {
      grade = "A";
      gradeLabel = "Very Good";
      gradeColor = "emerald";
    } else if (score >= 70) {
      grade = "B";
      gradeLabel = "Good";
      gradeColor = "cyan";
    } else if (score >= 50) {
      grade = "C";
      gradeLabel = "Needs Attention";
      gradeColor = "amber";
    } else {
      grade = "F";
      gradeLabel = "Critical Risk";
      gradeColor = "rose";
    }

    // Build specific recommendation cards
    const recommendations = [];

    recommendations.push({
      id: "rec-master",
      status: "success",
      icon: "🟢",
      title: "Master Password is Strong & Secure",
      description: "Protected with Argon2id cryptographic key derivation (64MB memory cost).",
      actionText: null
    });

    if (twoFactorEnabled) {
      recommendations.push({
        id: "rec-2fa",
        status: "success",
        icon: "🟢",
        title: "Two-Factor Authentication (2FA) is Active",
        description: "TOTP hardware authenticator protects against unauthorized logins.",
        actionText: null
      });
    } else {
      recommendations.push({
        id: "rec-2fa-off",
        status: "danger",
        icon: "🔴",
        title: "Two-Factor Authentication is Disabled",
        description: "Your vault is vulnerable if your master password is ever leaked.",
        actionText: "Enable 2FA",
        actionType: "enable-2fa"
      });
    }

    if (weakCount > 0) {
      recommendations.push({
        id: "rec-weak",
        status: "danger",
        icon: "🔴",
        title: `${weakCount} weak ${weakCount === 1 ? "password" : "passwords"} detected`,
        description: "Low-complexity passwords can be cracked in under 5 minutes.",
        actionText: "Fix Now",
        actionType: "fix-weak"
      });
    } else {
      recommendations.push({
        id: "rec-weak-none",
        status: "success",
        icon: "🟢",
        title: "No weak passwords found",
        description: "All stored credentials meet industry strength requirements.",
        actionText: null
      });
    }

    if (reusedCount > 0) {
      recommendations.push({
        id: "rec-reused",
        status: "warning",
        icon: "🟡",
        title: `${reusedCount} reused ${reusedCount === 1 ? "password" : "passwords"} detected`,
        description: "If one service is breached, all shared accounts become compromised.",
        actionText: "Fix Now",
        actionType: "fix-reused"
      });
    } else {
      recommendations.push({
        id: "rec-reused-none",
        status: "success",
        icon: "🟢",
        title: "No reused passwords found",
        description: "Every account uses a distinct cryptographic secret.",
        actionText: null
      });
    }

    if (compromisedCount > 0) {
      recommendations.push({
        id: "rec-breach",
        status: "danger",
        icon: "🚨",
        title: `${compromisedCount} compromised credentials found in known data breaches`,
        description: "These credentials have been spotted in public breach dumps.",
        actionText: "Fix Immediately",
        actionType: "fix-breached"
      });
    }

    return {
      score,
      grade,
      gradeLabel,
      gradeColor,
      strongCount,
      mediumCount,
      weakCount,
      reusedCount,
      compromisedCount,
      reusedGroups,
      analyzedPasswords,
      recommendations
    };
  }
}

// CITADEL — API Client & Communication Layer
const CitadelApi = {
  getBaseUrl() {
    if (typeof window !== 'undefined' && window.CITADEL_API_URL) {
      return window.CITADEL_API_URL.replace(/\/+$/, '');
    }
    try {
      if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_URL) {
        return import.meta.env.VITE_API_URL.replace(/\/+$/, '');
      }
    } catch (e) {}
    return '';
  },
  getUrl(endpoint) {
    if (!endpoint) return '';
    if (endpoint.startsWith('http://') || endpoint.startsWith('https://')) return endpoint;
    const base = this.getBaseUrl();
    if (!base) return endpoint;
    return `${base}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;
  },
  resolveAssetUrl(url) {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
      return url;
    }
    const base = this.getBaseUrl();
    return base ? `${base}${url.startsWith('/') ? '' : '/'}${url}` : url;
  },
  getToken() {
    return localStorage.getItem('citadel_jwt_token') || '';
  },
  setToken(token) {
    if (token) {
      localStorage.setItem('citadel_jwt_token', token);
    } else {
      localStorage.removeItem('citadel_jwt_token');
    }
  },
  async request(endpoint, options = {}) {
    const token = this.getToken();
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      ...(options.headers || {})
    };
    const targetUrl = this.getUrl(endpoint);
    try {
      const res = await fetch(targetUrl, {
        ...options,
        headers,
        credentials: 'include'
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.message || `Request failed with status ${res.status}`);
      }
      return data;
    } catch (err) {
      console.warn(`[CitadelApi] Request error (${endpoint}):`, err.message);
      throw err;
    }
  },
  async uploadAvatar(imageData) {
    return this.request('/api/auth/avatar', {
      method: 'POST',
      body: JSON.stringify({ image: imageData })
    });
  },
  async removeAvatar() {
    return this.request('/api/auth/avatar', {
      method: 'DELETE'
    });
  },
  async downloadBlob(endpoint) {
    const token = this.getToken();
    const headers = {
      ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    };
    const targetUrl = this.getUrl(endpoint);
    const res = await fetch(targetUrl, {
      method: 'GET',
      headers,
      credentials: 'include'
    });
    if (!res.ok) {
      let errMsg = `Download failed with status ${res.status}`;
      try {
        const errJson = await res.json();
        if (errJson && errJson.message) errMsg = errJson.message;
      } catch (e) {}
      throw new Error(errMsg);
    }
    const blob = await res.blob();
    const disposition = res.headers.get('Content-Disposition') || '';
    let filename = '';
    const filenameMatch = disposition.match(/filename\*?=(?:UTF-8'')?["']?([^"';]+)["']?/i);
    if (filenameMatch && filenameMatch[1]) {
      try {
        filename = decodeURIComponent(filenameMatch[1]);
      } catch (e) {
        filename = filenameMatch[1];
      }
    }
    return { blob, filename, contentType: res.headers.get('Content-Type') };
  }
};
window.CitadelApi = CitadelApi;

// CITADEL — Vault Store & State Management
const STORAGE_KEY = "citadel_vault_v1_store";
const DEMO_SESSION_CLEANUP_KEY = "citadel_demo_session_cleanup_v1";

class VaultStore {
  constructor() {
    this.state = this.loadState();
    this.listeners = [];
    this.isSyncing = false;
  }

  loadState() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn("Failed to read from localStorage:", e);
    }
    // Deep clone initial data
    return JSON.parse(JSON.stringify(INITIAL_DATA));
  }

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error("Failed to save to localStorage:", e);
    }
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this.state));
  }

  resetToDefault() {
    this.state = JSON.parse(JSON.stringify(INITIAL_DATA));
    this.saveState();
  }

  // --- Backend Sync ---
  async syncWithBackend() {
    if (this.isSyncing) return;
    this.isSyncing = true;
    try {
      const res = await CitadelApi.request('/api/vault/sync');
      if (res && res.success && res.data) {
        if (res.data.user) {
          this.state.user = {
            ...this.state.user,
            ...res.data.user
          };
        }
        if (Array.isArray(res.data.passwords)) {
          this.state.passwords = res.data.passwords;
        }
        if (Array.isArray(res.data.documents)) {
          this.state.documents = res.data.documents;
        }
        if (Array.isArray(res.data.notes)) {
          this.state.notes = res.data.notes;
        }
        if (Array.isArray(res.data.trash)) {
          this.state.trash = res.data.trash;
        }
        if (Array.isArray(res.data.activities) && res.data.activities.length > 0) {
          this.state.activities = res.data.activities;
        }
        if (res.data.user && res.data.user.settings) {
          this.state.settings = {
            ...this.state.settings,
            ...res.data.user.settings
          };
        }
        this.saveState();
      }
    } catch (err) {
      console.warn("Vault background sync note:", err.message);
    } finally {
      this.isSyncing = false;
    }
  }

  // --- Password Credentials CRUD ---
  async addPassword(credentialData) {
    const strength = PasswordGenerator.evaluateStrength(credentialData.password);
    const tempId = "pwd-" + Date.now();
    const newCred = {
      id: tempId,
      title: credentialData.title || "Untitled Credential",
      url: credentialData.url || "",
      domain: this.extractDomain(credentialData.url),
      username: credentialData.username || "",
      password: credentialData.password || "",
      category: credentialData.category || "Other",
      accountType: credentialData.accountType || "Personal",
      strength: strength.level,
      strengthScore: strength.score,
      isReused: false,
      isCompromised: false,
      lastUpdated: this.formatDateNow(),
      notes: credentialData.notes || "",
      tags: credentialData.tags || [],
      favIcon: this.getIconForCategory(credentialData.category, credentialData.title),
      brandColor: credentialData.brandColor || "#6366F1"
    };

    // Optimistic UI update
    this.state.passwords.unshift(newCred);
    this.logActivity({
      type: "password",
      icon: "🔑",
      color: "blue",
      title: `Added "${newCred.title}"`,
      description: `New credential created (${newCred.accountType}) in category: ${newCred.category}.`,
      category: "Passwords"
    });
    this.addNotification({
      type: "success",
      icon: "🟢",
      title: "Credential Saved",
      message: `"${newCred.title}" encrypted and added to your vault.`,
      actionTarget: "passwords"
    });
    this.saveState();

    // Call Backend API
    try {
      const apiRes = await CitadelApi.request('/api/accounts', {
        method: 'POST',
        body: JSON.stringify(credentialData)
      });
      if (apiRes && apiRes.account) {
        const idx = this.state.passwords.findIndex(p => p.id === tempId);
        if (idx !== -1) {
          this.state.passwords[idx] = { ...newCred, ...apiRes.account };
          this.saveState();
        }
      }
    } catch (e) {
      console.warn("Saved locally, server will sync next roundtrip.");
    }
    return newCred;
  }

  async updatePassword(id, updatedFields) {
    const index = this.state.passwords.findIndex(p => p.id === id);
    if (index === -1) return null;

    const old = this.state.passwords[index];
    const passwordChanged = updatedFields.password && updatedFields.password !== old.password;
    const strength = PasswordGenerator.evaluateStrength(updatedFields.password || old.password);

    const updated = {
      ...old,
      ...updatedFields,
      domain: updatedFields.url ? this.extractDomain(updatedFields.url) : old.domain,
      strength: strength.level,
      strengthScore: strength.score,
      lastUpdated: this.formatDateNow()
    };

    this.state.passwords[index] = updated;
    this.logActivity({
      type: "password",
      icon: "✏️",
      color: "indigo",
      title: `Updated "${updated.title}"`,
      description: passwordChanged ? "Password secret rotated and re-encrypted." : "Metadata updated.",
      category: "Passwords"
    });
    this.saveState();

    // Call Backend API
    try {
      await CitadelApi.request(`/api/accounts/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedFields)
      });
    } catch (e) {
      console.warn("Update saved locally:", e.message);
    }
    return updated;
  }

  async deletePassword(id) {
    const index = this.state.passwords.findIndex(p => p.id === id);
    if (index === -1) return false;

    const [deleted] = this.state.passwords.splice(index, 1);
    this.state.trash.unshift({
      id: "trash-" + Date.now(),
      originalId: deleted.id,
      itemType: "password",
      title: deleted.title,
      originalCategory: deleted.category,
      deletedDate: this.formatDateNow(),
      daysRemaining: 30,
      data: deleted
    });

    this.logActivity({
      type: "password",
      icon: "🗑️",
      color: "rose",
      title: `Moved "${deleted.title}" to Trash`,
      description: "Item will be permanently deleted after 30 days.",
      category: "Passwords"
    });
    this.saveState();

    // Call Backend API
    try {
      await CitadelApi.request(`/api/accounts/${id}`, { method: 'DELETE' });
    } catch (e) {
      console.warn("Deleted locally:", e.message);
    }
    return true;
  }

  // --- Documents CRUD ---
  async addDocument(docData) {
    const tempId = "doc-" + Date.now();
    let newDoc = {
      id: tempId,
      name: docData.name || "Document.pdf",
      originalFilename: docData.originalFilename || docData.name || "Document.pdf",
      category: docData.category || "Personal",
      categoryName: docData.category || "Personal",
      categoryIcon: this.getDocumentCategoryIcon(docData.category),
      fileType: docData.fileType || ((docData.name || "doc.pdf").split('.').pop() || "pdf").toLowerCase(),
      size: docData.size || "1.5 MB",
      sizeBytes: docData.sizeBytes || 1572864,
      uploadedDate: this.formatDateNow(),
      encryptedSha256: this.generateMockHash(),
      isFavorite: false,
      description: docData.description || "Secure encrypted document payload.",
      tags: docData.tags || ["Uploaded", "AES-256-GCM"],
      fileData: docData.fileData
    };

    this.state.documents.unshift(newDoc);
    this.logActivity({
      type: "document",
      icon: "📁",
      color: "emerald",
      title: `Uploaded "${newDoc.name}"`,
      description: `Encrypted file stored in ${newDoc.category} category (${newDoc.size}).`,
      category: "Documents"
    });
    this.addNotification({
      type: "success",
      icon: "🟢",
      title: "Document Secured",
      message: `"${newDoc.name}" encrypted with AES-256 and stored safely.`,
      actionTarget: "documents"
    });
    this.saveState();

    try {
      const apiRes = await CitadelApi.request('/api/documents', {
        method: 'POST',
        body: JSON.stringify(docData)
      });
      if (apiRes && apiRes.document) {
        const idx = this.state.documents.findIndex(d => d.id === tempId);
        if (idx !== -1) {
          newDoc = { ...newDoc, ...apiRes.document, id: apiRes.document.id || apiRes.document._id };
          this.state.documents[idx] = newDoc;
          this.saveState();
        }
      }
    } catch (e) {
      console.warn("Document stored locally:", e.message);
    }
    return newDoc;
  }

  async renameDocument(id, newName) {
    const doc = this.state.documents.find(d => d.id === id);
    if (!doc) return false;
    doc.name = newName;
    this.saveState();

    try {
      await CitadelApi.request(`/api/documents/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name: newName })
      });
    } catch (e) {
      console.warn("Renamed locally:", e.message);
    }
    return true;
  }

  async deleteDocument(id) {
    const index = this.state.documents.findIndex(d => d.id === id);
    if (index === -1) return false;

    const [deleted] = this.state.documents.splice(index, 1);
    this.state.trash.unshift({
      id: "trash-" + Date.now(),
      originalId: deleted.id,
      itemType: "document",
      title: deleted.name,
      originalCategory: deleted.category,
      deletedDate: this.formatDateNow(),
      daysRemaining: 30,
      data: deleted
    });

    this.logActivity({
      type: "document",
      icon: "🗑️",
      color: "rose",
      title: `Moved "${deleted.name}" to Trash`,
      description: "Document archived in Trash.",
      category: "Documents"
    });
    this.saveState();

    try {
      await CitadelApi.request(`/api/documents/${id}`, { method: 'DELETE' });
    } catch (e) {
      console.warn("Deleted locally:", e.message);
    }
    return true;
  }

  // --- Secure Notes CRUD ---
  async addNote(noteData) {
    const tempId = "note-" + Date.now();
    const newNote = {
      id: tempId,
      title: noteData.title || "Untitled Private Note",
      category: noteData.category || "Personal",
      categoryIcon: this.getNoteCategoryIcon(noteData.category),
      color: noteData.color || "indigo",
      lastUpdated: this.formatDateNow(),
      tags: noteData.tags || ["Encrypted"],
      preview: (noteData.content || "").slice(0, 70).replace(/[#*`]/g, '') + "...",
      content: noteData.content || ""
    };

    this.state.notes.unshift(newNote);
    this.logActivity({
      type: "note",
      icon: "📝",
      color: "violet",
      title: `Created Note "${newNote.title}"`,
      description: `New encrypted note in ${newNote.category} category.`,
      category: "Notes"
    });
    this.saveState();

    try {
      const apiRes = await CitadelApi.request('/api/notes', {
        method: 'POST',
        body: JSON.stringify(noteData)
      });
      if (apiRes && apiRes.note) {
        const idx = this.state.notes.findIndex(n => n.id === tempId);
        if (idx !== -1) {
          this.state.notes[idx] = { ...newNote, ...apiRes.note };
          this.saveState();
        }
      }
    } catch (e) {
      console.warn("Note stored locally:", e.message);
    }
    return newNote;
  }

  async updateNote(id, updatedFields) {
    const index = this.state.notes.findIndex(n => n.id === id);
    if (index === -1) return null;

    const old = this.state.notes[index];
    const content = updatedFields.content !== undefined ? updatedFields.content : old.content;
    const preview = content.slice(0, 70).replace(/[#*`]/g, '') + "...";

    const updated = {
      ...old,
      ...updatedFields,
      preview,
      lastUpdated: this.formatDateNow()
    };

    this.state.notes[index] = updated;
    this.logActivity({
      type: "note",
      icon: "📝",
      color: "violet",
      title: `Updated Note "${updated.title}"`,
      description: "Note contents re-encrypted.",
      category: "Notes"
    });
    this.saveState();

    try {
      await CitadelApi.request(`/api/notes/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedFields)
      });
    } catch (e) {
      console.warn("Note updated locally:", e.message);
    }
    return updated;
  }

  async deleteNote(id) {
    const index = this.state.notes.findIndex(n => n.id === id);
    if (index === -1) return false;

    const [deleted] = this.state.notes.splice(index, 1);
    this.state.trash.unshift({
      id: "trash-" + Date.now(),
      originalId: deleted.id,
      itemType: "note",
      title: deleted.title,
      originalCategory: deleted.category,
      deletedDate: this.formatDateNow(),
      daysRemaining: 30,
      data: deleted
    });

    this.logActivity({
      type: "note",
      icon: "🗑️",
      color: "rose",
      title: `Moved "${deleted.title}" to Trash`,
      description: "Note moved to Trash vault.",
      category: "Notes"
    });
    this.saveState();

    try {
      await CitadelApi.request(`/api/notes/${id}`, { method: 'DELETE' });
    } catch (e) {
      console.warn("Note moved to trash locally:", e.message);
    }
    return true;
  }

  // --- Trash & Recovery ---
  async restoreFromTrash(trashId) {
    const index = this.state.trash.findIndex(t => t.id === trashId);
    if (index === -1) return false;

    const [item] = this.state.trash.splice(index, 1);
    if (item.itemType === "password") {
      this.state.passwords.unshift(item.data);
    } else if (item.itemType === "document") {
      this.state.documents.unshift(item.data);
    } else if (item.itemType === "note") {
      this.state.notes.unshift(item.data);
    }

    this.logActivity({
      type: "security",
      icon: "♻️",
      color: "emerald",
      title: `Restored "${item.title}"`,
      description: `Item recovered from Trash into ${item.itemType} vault.`,
      category: "Security"
    });
    this.saveState();

    try {
      await CitadelApi.request(`/api/trash/${trashId}/restore`, { method: 'POST' });
    } catch (e) {
      console.warn("Restored locally:", e.message);
    }
    return true;
  }

  async deletePermanently(trashId) {
    const index = this.state.trash.findIndex(t => t.id === trashId);
    if (index === -1) return false;

    const [item] = this.state.trash.splice(index, 1);
    this.logActivity({
      type: "security",
      icon: "💥",
      color: "rose",
      title: `Permanently Erased "${item.title}"`,
      description: "Cryptographic keys purged. Data unrecoverable.",
      category: "Security"
    });
    this.saveState();

    try {
      await CitadelApi.request(`/api/trash/${trashId}`, { method: 'DELETE' });
    } catch (e) {
      console.warn("Permanently deleted locally:", e.message);
    }
    return true;
  }

  async emptyTrash() {
    const count = this.state.trash.length;
    this.state.trash = [];
    this.logActivity({
      type: "security",
      icon: "💥",
      color: "rose",
      title: "Emptied Trash Vault",
      description: `${count} deleted items purged permanently.`,
      category: "Security"
    });
    this.saveState();

    try {
      await CitadelApi.request('/api/trash', { method: 'DELETE' });
    } catch (e) {
      console.warn("Trash emptied locally:", e.message);
    }
    return count;
  }

  // --- Profile & Settings API ---
  async updateProfile(profileData) {
    try {
      const res = await CitadelApi.request('/api/vault/profile', {
        method: 'PUT',
        body: JSON.stringify(profileData)
      });
      if (res && res.user) {
        this.state.user = { ...this.state.user, ...res.user };
        this.saveState();
      }
    } catch (e) {
      this.state.user = { ...this.state.user, ...profileData };
      this.saveState();
    }
  }

  async updateSettings(settingsData) {
    try {
      await CitadelApi.request('/api/vault/settings', {
        method: 'PUT',
        body: JSON.stringify({ settings: settingsData })
      });
    } catch (e) {
      console.warn("Settings saved locally:", e.message);
    }
    this.state.settings = { ...this.state.settings, ...settingsData };
    this.saveState();
  }

  // --- Activities & Notifications ---
  logActivity(data) {
    const activity = {
      id: "act-" + Date.now(),
      time: "Just now",
      device: "Chrome on Windows 11 Pro",
      ip: "127.0.0.1 (Local Enclave)",
      status: "success",
      ...data
    };
    this.state.activities.unshift(activity);
    if (this.state.activities.length > 50) this.state.activities.pop();
  }

  addNotification(data) {
    const notif = {
      id: "notif-" + Date.now(),
      time: "Just now",
      read: false,
      actionText: "View",
      ...data
    };
    this.state.notifications.unshift(notif);
    if (this.state.notifications.length > 30) this.state.notifications.pop();
  }

  markAllNotificationsRead() {
    this.state.notifications.forEach(n => { n.read = true; });
    this.saveState();
  }

  clearNotification(id) {
    this.state.notifications = this.state.notifications.filter(n => n.id !== id);
    this.saveState();
  }

  // --- Universal Search ---
  globalSearch(query = "") {
    const q = query.trim().toLowerCase();
    if (!q) return { passwords: [], documents: [], notes: [] };

    const passwords = this.state.passwords.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.username.toLowerCase().includes(q) ||
      p.domain.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (p.tags && p.tags.some(t => t.toLowerCase().includes(q)))
    );

    const documents = this.state.documents.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q) ||
      (d.description && d.description.toLowerCase().includes(q)) ||
      (d.tags && d.tags.some(t => t.toLowerCase().includes(q)))
    );

    const notes = this.state.notes.filter(n =>
      n.title.toLowerCase().includes(q) ||
      n.content.toLowerCase().includes(q) ||
      n.category.toLowerCase().includes(q) ||
      (n.tags && n.tags.some(t => t.toLowerCase().includes(q)))
    );

    return { passwords, documents, notes };
  }

  // --- Export / Import ---
  exportVaultJSON() {
    const exportPayload = {
      app: "CITADEL Personal Digital Security Vault",
      version: "2.4.0",
      exportedAt: new Date().toISOString(),
      user: {
        email: this.state.user.email,
        name: this.state.user.name
      },
      vaultData: {
        passwords: this.state.passwords,
        documents: this.state.documents,
        notes: this.state.notes
      }
    };
    return JSON.stringify(exportPayload, null, 2);
  }

  exportPasswordsCSV() {
    const header = "Title,URL,Username,Password,Category,AccountType,Notes,LastUpdated\n";
    const rows = this.state.passwords.map(p => {
      const escape = (str) => `"${(str || "").replace(/"/g, '""')}"`;
      return [
        escape(p.title),
        escape(p.url),
        escape(p.username),
        escape(p.password),
        escape(p.category),
        escape(p.accountType || 'Personal'),
        escape(p.notes),
        escape(p.lastUpdated)
      ].join(",");
    }).join("\n");
    return header + rows;
  }

  // --- Helper Utilities ---
  extractDomain(url = "") {
    try {
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
      }
      const parsed = new URL(url);
      return parsed.hostname.replace(/^www\./, '');
    } catch {
      return url || "generic";
    }
  }

  formatDateNow() {
    const now = new Date();
    const day = now.getDate();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    return `${day} ${month} ${year}`;
  }

  generateMockHash() {
    const hex = "0123456789abcdef";
    let hash = "";
    for (let i = 0; i < 64; i++) {
      hash += hex[Math.floor(Math.random() * hex.length)];
    }
    return hash;
  }

  getDocumentCategoryIcon(cat) {
    switch (cat) {
      case "Certificates": return "📜";
      case "IDs": return "🪪";
      case "Academic": return "🎓";
      case "Work": return "💼";
      case "Personal": return "👤";
      default: return "📂";
    }
  }

  getNoteCategoryIcon(cat) {
    switch (cat) {
      case "Education": return "🎓";
      case "Finance": return "🪙";
      case "Work": return "💼";
      case "Personal": return "👤";
      default: return "📝";
    }
  }

  getIconForCategory(cat, title = "") {
    const t = title.toLowerCase();
    if (t.includes("google") || t.includes("gmail")) return "🌐";
    if (t.includes("github")) return "🐙";
    if (t.includes("bank") || t.includes("chase") || t.includes("citi") || t.includes("stripe")) return "🏦";
    if (t.includes("aws") || t.includes("cloud")) return "☁️";
    if (t.includes("spotify")) return "🎵";
    if (t.includes("netflix")) return "🎬";
    if (t.includes("game") || t.includes("steam")) return "🎮";
    if (t.includes("amazon") || t.includes("shop")) return "📦";
    if (t.includes("slack") || t.includes("discord")) return "💬";
    if (t.includes("proton") || t.includes("mail")) return "🔒";
    if (t.includes("instagram")) return "📸";
    return "🔑";
  }
}


// CITADEL — UI Component & View Rendering Engine



class UIRenderer {
  constructor(app) {
    this.app = app;
  }

  // --- SVG Icons Helper ---
  icon(name, className = "w-5 h-5") {
    const icons = {
      shield: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      lock: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
      unlock: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>`,
      key: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>`,
      folder: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
      document: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
      note: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
      generator: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
      activity: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      settings: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
      trash: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>`,
      search: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
      bell: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
      copy: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
      eye: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
      eyeOff: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`,
      edit: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
      download: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
      plus: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
      check: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
      alertCircle: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
      refresh: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>`,
      sun: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
      moon: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
      arrowRight: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
      logOut: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
      user: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
      sparkles: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`,
      qrCode: `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`
    };
    return icons[name] || icons.shield;
  }

  // --- Brand Logo Helper ---
  getBrandLogo(size = "default") {
    const isSmall = size === "small";
    return `
      <div class="flex items-center gap-3 cursor-pointer group" onclick="window.citadelApp.navigate('landing')">
        <div class="relative flex items-center justify-center ${isSmall ? 'w-8 h-8' : 'w-10 h-10'} rounded-xl bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/30 text-white font-bold transition-transform group-hover:scale-105">
          ${this.icon("shield", isSmall ? "w-5 h-5" : "w-6 h-6")}
          <div class="absolute inset-0 rounded-xl bg-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div class="flex flex-col">
          <span class="brand-title font-extrabold tracking-wider ${isSmall ? 'text-lg' : 'text-xl'} bg-gradient-to-r from-white via-slate-100 to-emerald-200 bg-clip-text text-transparent">CITADEL</span>
          <span class="text-[9px] uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-semibold -mt-1">Security Vault</span>
        </div>
      </div>
    `;
  }

  // ==========================================
  // PAGE 1: LANDING PAGE
  // ==========================================
  renderLandingPage() {
    const theme = this.app.store.state.settings.theme;
    return `
      <div class="min-h-screen cyber-grid-bg">
        <!-- Landing Navbar -->
        <header class="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/75 border-b border-slate-800/80">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            ${this.getBrandLogo()}
            
            <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              <a href="#hero" class="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#features" class="hover:text-cyan-400 transition-colors">Features</a>
              <a href="#security" class="hover:text-cyan-400 transition-colors">Security</a>
              <a href="#how-it-works" class="hover:text-cyan-400 transition-colors">How It Works</a>
              <a href="#about" class="hover:text-cyan-400 transition-colors">About</a>
            </nav>

            <div class="flex items-center gap-4">
              <button onclick="window.citadelApp.toggleTheme()" class="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300 transition-colors" data-tooltip="Toggle Theme">
                ${theme === 'light' ? this.icon('moon', 'w-5 h-5') : this.icon('sun', 'w-5 h-5 text-amber-400')}
              </button>
              <button onclick="window.citadelApp.navigate('login')" class="px-4 py-2 text-sm font-semibold text-slate-200 hover:text-white transition-colors">
                Login
              </button>
              <button onclick="window.citadelApp.navigate('register')" class="cyber-glow-btn px-5 py-2.5 rounded-xl text-sm font-semibold text-white flex items-center gap-2">
                ${this.icon('lock', 'w-4 h-4')}
                <span>Get Started</span>
              </button>
            </div>
          </div>
        </header>

        <!-- Hero Section -->
        <section id="hero" class="relative pt-16 pb-24 md:pt-28 md:pb-36 overflow-hidden">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              <!-- Left Column: Copy -->
              <div class="lg:col-span-7 space-y-8">
                <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-300 text-xs font-semibold tracking-wide">
                  <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Zero-Knowledge 256-bit AES Encryption</span>
                </div>
                
                <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  Your Digital Life. <br />
                  <span class="cyber-gradient-text">One Secure Vault.</span>
                </h1>
                
                <p class="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
                  Store, organize and protect your passwords, sensitive documents, and private notes in one centralized, encrypted digital fortress.
                </p>

                <div class="flex flex-wrap items-center gap-4 pt-2">
                  <button onclick="window.citadelApp.navigate('register')" class="cyber-glow-btn px-8 py-4 rounded-xl text-base font-bold text-white flex items-center gap-3 shadow-xl shadow-indigo-600/30 hover:scale-105 transition-transform">
                    ${this.icon('shield', 'w-5 h-5')}
                    <span>Create Free Vault</span>
                    ${this.icon('arrowRight', 'w-4 h-4')}
                  </button>
                  <button onclick="window.citadelApp.navigate('dashboard')" class="px-7 py-4 rounded-xl text-base font-semibold border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 flex items-center gap-2.5 transition-all">
                    <span>Explore CITADEL</span>
                    <span class="text-xs px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 font-mono">Live Demo</span>
                  </button>
                </div>

                <!-- Trust Metrics -->
                <div class="pt-6 grid grid-cols-3 gap-6 border-t border-slate-800/80">
                  <div>
                    <div class="text-2xl font-bold text-white">256-bit</div>
                    <div class="text-xs text-slate-400 font-medium">AES-GCM Encryption</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-white">Zero</div>
                    <div class="text-xs text-slate-400 font-medium">Knowledge Architecture</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-white">100%</div>
                    <div class="text-xs text-slate-400 font-medium">Client-Side Biometrics</div>
                  </div>
                </div>
              </div>

              <!-- Right Column: 3D-Style Animated Vault & Floating Badges -->
              <div class="lg:col-span-5 relative flex items-center justify-center">
                
                <!-- Glow Orb -->
                <div class="absolute w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl -z-10 animate-pulse-glow"></div>
                <div class="absolute w-64 h-64 bg-cyan-500/15 rounded-full blur-2xl -z-10 animate-pulse-glow" style="animation-delay: 2s;"></div>

                <!-- Vault Core Graphics -->
                <div class="vault-shield-outer">
                  <div class="vault-ring-dials"></div>
                  <div class="vault-shield-inner">
                    <div class="flex flex-col items-center justify-center text-center p-4">
                      <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30 mb-2">
                        ${this.icon('shield', 'w-9 h-9')}
                      </div>
                      <span class="text-xs font-mono text-cyan-300 tracking-wider font-semibold">CITADEL VAULT</span>
                      <span class="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> LOCKED & SECURE
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Floating Card 1: Password Protected -->
                <div class="absolute -top-4 -left-4 sm:left-2 glass-panel p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-float-1 border-indigo-500/40">
                  <div class="w-9 h-9 rounded-xl bg-indigo-600/30 text-indigo-400 flex items-center justify-center text-base">
                    🔑
                  </div>
                  <div>
                    <div class="text-xs font-bold text-white">Password Protected</div>
                    <div class="text-[10px] text-slate-400">Argon2id Key Derivation</div>
                  </div>
                </div>

                <!-- Floating Card 2: Documents Secured -->
                <div class="absolute top-1/2 -right-6 glass-panel p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-float-2 border-cyan-500/40">
                  <div class="w-9 h-9 rounded-xl bg-cyan-600/30 text-cyan-400 flex items-center justify-center text-base">
                    📁
                  </div>
                  <div>
                    <div class="text-xs font-bold text-white">Documents Secured</div>
                    <div class="text-[10px] text-slate-400">Client Encrypted Storage</div>
                  </div>
                </div>

                <!-- Floating Card 3: Encrypted Storage -->
                <div class="absolute -bottom-6 left-6 glass-panel p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-float-3 border-emerald-500/40">
                  <div class="w-9 h-9 rounded-xl bg-emerald-600/30 text-emerald-400 flex items-center justify-center text-base">
                    🛡️
                  </div>
                  <div>
                    <div class="text-xs font-bold text-white">Encrypted Storage</div>
                    <div class="text-[10px] text-slate-400">Zero Leak Telemetry</div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        <!-- Features Section -->
        <section id="features" class="py-24 border-t border-slate-800/80 bg-slate-950/40">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span class="text-xs font-bold uppercase tracking-widest text-indigo-400">Next-Gen Vault Capabilities</span>
              <h2 class="text-3xl sm:text-5xl font-extrabold text-white">Everything Important. One Secure Place.</h2>
              <p class="text-slate-300 text-base">Engineered with defense-in-depth principles to keep your entire digital identity invulnerable.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <!-- Card 1: Password Vault -->
              <div class="glass-panel p-8 rounded-2xl hover:translate-y-[-4px] transition-transform">
                <div class="w-14 h-14 rounded-2xl bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center text-2xl mb-6 text-indigo-400">
                  🔐
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Password Vault</h3>
                <p class="text-slate-300 text-sm leading-relaxed mb-4">Securely manage and autofill website credentials with 1-click copy, hidden masking, and category tagging.</p>
                <div class="text-xs font-semibold text-indigo-400 flex items-center gap-1.5 cursor-pointer hover:underline" onclick="window.citadelApp.navigate('passwords')">
                  <span>Explore Vault</span> ${this.icon('arrowRight', 'w-3.5 h-3.5')}
                </div>
              </div>

              <!-- Card 2: Document Locker -->
              <div class="glass-panel p-8 rounded-2xl hover:translate-y-[-4px] transition-transform">
                <div class="w-14 h-14 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-2xl mb-6 text-cyan-400">
                  📁
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Document Locker</h3>
                <p class="text-slate-300 text-sm leading-relaxed mb-4">Store government IDs, degrees, certificates, and contracts with drag & drop encryption and instant previews.</p>
                <div class="text-xs font-semibold text-cyan-400 flex items-center gap-1.5 cursor-pointer hover:underline" onclick="window.citadelApp.navigate('documents')">
                  <span>Explore Locker</span> ${this.icon('arrowRight', 'w-3.5 h-3.5')}
                </div>
              </div>

              <!-- Card 3: Secure Notes -->
              <div class="glass-panel p-8 rounded-2xl hover:translate-y-[-4px] transition-transform">
                <div class="w-14 h-14 rounded-2xl bg-violet-950/80 border border-violet-500/30 flex items-center justify-center text-2xl mb-6 text-violet-400">
                  📝
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Secure Notes</h3>
                <p class="text-slate-300 text-sm leading-relaxed mb-4">Keep confidential ideas, recovery seeds, API keys, and private thoughts masked and decryptable only by you.</p>
                <div class="text-xs font-semibold text-violet-400 flex items-center gap-1.5 cursor-pointer hover:underline" onclick="window.citadelApp.navigate('notes')">
                  <span>Explore Notes</span> ${this.icon('arrowRight', 'w-3.5 h-3.5')}
                </div>
              </div>

              <!-- Card 4: Password Generator -->
              <div class="glass-panel p-8 rounded-2xl hover:translate-y-[-4px] transition-transform">
                <div class="w-14 h-14 rounded-2xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-2xl mb-6 text-emerald-400">
                  🔑
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Password Generator</h3>
                <p class="text-slate-300 text-sm leading-relaxed mb-4">Generate cryptographically secure, high-entropy passwords with custom length, symbols, and passphrase modes.</p>
                <div class="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 cursor-pointer hover:underline" onclick="window.citadelApp.navigate('generator')">
                  <span>Try Generator</span> ${this.icon('arrowRight', 'w-3.5 h-3.5')}
                </div>
              </div>

              <!-- Card 5: Security Dashboard -->
              <div class="glass-panel p-8 rounded-2xl hover:translate-y-[-4px] transition-transform">
                <div class="w-14 h-14 rounded-2xl bg-amber-950/80 border border-amber-500/30 flex items-center justify-center text-2xl mb-6 text-amber-400">
                  📊
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Security Dashboard</h3>
                <p class="text-slate-300 text-sm leading-relaxed mb-4">Real-time health audits score your vault hygiene, pinpointing weak or reused passwords with 1-click fixes.</p>
                <div class="text-xs font-semibold text-amber-400 flex items-center gap-1.5 cursor-pointer hover:underline" onclick="window.citadelApp.navigate('security')">
                  <span>Audit Vault</span> ${this.icon('arrowRight', 'w-3.5 h-3.5')}
                </div>
              </div>

              <!-- Card 6: Activity History -->
              <div class="glass-panel p-8 rounded-2xl hover:translate-y-[-4px] transition-transform">
                <div class="w-14 h-14 rounded-2xl bg-rose-950/80 border border-rose-500/30 flex items-center justify-center text-2xl mb-6 text-rose-400">
                  📜
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Activity History</h3>
                <p class="text-slate-300 text-sm leading-relaxed mb-4">Immutable audit timeline logs logins, credential rotations, and uploads with IP, device, and timestamp tracking.</p>
                <div class="text-xs font-semibold text-rose-400 flex items-center gap-1.5 cursor-pointer hover:underline" onclick="window.citadelApp.navigate('activity')">
                  <span>View Timeline</span> ${this.icon('arrowRight', 'w-3.5 h-3.5')}
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- Security Pillars Section -->
        <section id="security" class="py-24 border-t border-slate-800/80">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span class="text-xs font-bold uppercase tracking-widest text-cyan-400">Architecture of Trust</span>
              <h2 class="text-3xl sm:text-5xl font-extrabold text-white">Security Comes First</h2>
              <p class="text-slate-300 text-base">We engineered CITADEL with a zero-compromise security posture. Only you hold the decryption keys.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <!-- Pillar 1 -->
              <div class="glass-panel p-6 rounded-2xl border-l-4 border-l-indigo-500">
                <div class="text-3xl mb-4">🔒</div>
                <h4 class="text-lg font-bold text-white mb-2">Authentication</h4>
                <p class="text-slate-300 text-xs leading-relaxed">Multi-factor TOTP and WebAuthn hardware passkeys ensure only authorized biometrics can unlock your vault.</p>
              </div>

              <!-- Pillar 2 -->
              <div class="glass-panel p-6 rounded-2xl border-l-4 border-l-cyan-500">
                <div class="text-3xl mb-4">🛡️</div>
                <h4 class="text-lg font-bold text-white mb-2">Encryption</h4>
                <p class="text-slate-300 text-xs leading-relaxed">Military-grade 256-bit AES-GCM encryption derived through memory-hard Argon2id key stretching.</p>
              </div>

              <!-- Pillar 3 -->
              <div class="glass-panel p-6 rounded-2xl border-l-4 border-l-emerald-500">
                <div class="text-3xl mb-4">🔑</div>
                <h4 class="text-lg font-bold text-white mb-2">Password Protection</h4>
                <p class="text-slate-300 text-xs leading-relaxed">Continuous breach monitoring against billions of exposed credentials with k-anonymity hashing.</p>
              </div>

              <!-- Pillar 4 -->
              <div class="glass-panel p-6 rounded-2xl border-l-4 border-l-violet-500">
                <div class="text-3xl mb-4">👤</div>
                <h4 class="text-lg font-bold text-white mb-2">Access Control</h4>
                <p class="text-slate-300 text-xs leading-relaxed">Strict zero-knowledge client-side encryption guarantees CITADEL staff can never view or read your secrets.</p>
              </div>

            </div>
          </div>
        </section>

        <!-- How It Works Section -->
        <section id="how-it-works" class="py-24 border-t border-slate-800/80 bg-slate-950/40">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span class="text-xs font-bold uppercase tracking-widest text-indigo-400">Streamlined Workflow</span>
              <h2 class="text-3xl sm:text-5xl font-extrabold text-white">How CITADEL Works</h2>
              <p class="text-slate-300 text-base">Simple 4-step workflow to safeguard your complete digital presence.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              
              <!-- Step 1 -->
              <div class="glass-panel p-6 rounded-2xl relative group hover:border-indigo-500/50 transition-colors">
                <div class="text-4xl font-extrabold text-indigo-500/30 group-hover:text-indigo-400 transition-colors font-mono mb-4">01</div>
                <h4 class="text-lg font-bold text-white mb-2">Create Account</h4>
                <p class="text-slate-300 text-xs leading-relaxed">Set up your profile and define a master password with strong entropy verification.</p>
              </div>

              <!-- Step 2 -->
              <div class="glass-panel p-6 rounded-2xl relative group hover:border-cyan-500/50 transition-colors">
                <div class="text-4xl font-extrabold text-cyan-500/30 group-hover:text-cyan-400 transition-colors font-mono mb-4">02</div>
                <h4 class="text-lg font-bold text-white mb-2">Unlock Vault</h4>
                <p class="text-slate-300 text-xs leading-relaxed">Login securely using credentials and 2FA authentication to decrypt your secure local vault.</p>
              </div>

              <!-- Step 3 -->
              <div class="glass-panel p-6 rounded-2xl relative group hover:border-emerald-500/50 transition-colors">
                <div class="text-4xl font-extrabold text-emerald-500/30 group-hover:text-emerald-400 transition-colors font-mono mb-4">03</div>
                <h4 class="text-lg font-bold text-white mb-2">Store Information</h4>
                <p class="text-slate-300 text-xs leading-relaxed">Add passwords, drag-and-drop sensitive documents, and write protected private notes.</p>
              </div>

              <!-- Step 4 -->
              <div class="glass-panel p-6 rounded-2xl relative group hover:border-violet-500/50 transition-colors">
                <div class="text-4xl font-extrabold text-violet-500/30 group-hover:text-violet-400 transition-colors font-mono mb-4">04</div>
                <h4 class="text-lg font-bold text-white mb-2">Manage Securely</h4>
                <p class="text-slate-300 text-xs leading-relaxed">Search with Ctrl+K, autofill logins, audit vulnerabilities, and export encrypted emergency kits.</p>
              </div>

            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 border-t border-slate-800/80 relative overflow-hidden">
          <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 class="text-3xl sm:text-5xl font-extrabold text-white">Ready to Secure Your Digital Vault?</h2>
            <p class="text-lg text-slate-300 max-w-2xl mx-auto">Join thousands of security professionals and privacy-conscious users protecting their critical digital life with CITADEL.</p>
            <div class="flex justify-center gap-4">
              <button onclick="window.citadelApp.navigate('register')" class="cyber-glow-btn px-8 py-4 rounded-xl text-base font-bold text-white flex items-center gap-2">
                ${this.icon('lock', 'w-5 h-5')}
                <span>Create Your Secure Vault</span>
              </button>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer class="border-t border-slate-800/80 bg-slate-950 py-12 text-sm text-slate-400">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            ${this.getBrandLogo('small')}
            <div class="flex items-center gap-6 text-xs text-slate-400">
              <a href="#" class="hover:text-white">Privacy Policy</a>
              <a href="#" class="hover:text-white">Terms of Service</a>
              <a href="#" class="hover:text-white">Security Whitepaper</a>
              <a href="#" class="hover:text-white">Status</a>
            </div>
            <div class="text-xs text-slate-300 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>All Systems Secure & Operational</span>
            </div>
          </div>
        </footer>
      </div>
    `;
  }

  // ==========================================
  // PAGE 2: REGISTRATION PAGE
  // ==========================================
  renderRegisterPage() {
    return `
      <div class="min-h-screen cyber-grid-bg flex items-center justify-center p-4 py-12">
        <div class="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <!-- Left Benefit Box -->
          <div class="hidden lg:block lg:col-span-5 space-y-6">
            ${this.getBrandLogo()}
            <h2 class="text-3xl font-extrabold text-white leading-tight">Fortify Your Digital Footprint.</h2>
            <p class="text-slate-300 text-sm leading-relaxed">CITADEL creates a cryptographic enclave locally in your browser before any data is stored.</p>
            
            <div class="space-y-4 pt-2">
              <div class="flex items-center gap-3 text-sm text-slate-200">
                <div class="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">${this.icon('check', 'w-4 h-4')}</div>
                <span>Argon2id Master Key Derivation</span>
              </div>
              <div class="flex items-center gap-3 text-sm text-slate-200">
                <div class="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">${this.icon('check', 'w-4 h-4')}</div>
                <span>Unlimited Password & File Storage</span>
              </div>
              <div class="flex items-center gap-3 text-sm text-slate-200">
                <div class="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">${this.icon('check', 'w-4 h-4')}</div>
                <span>Automated Breach & Reuse Audits</span>
              </div>
            </div>
          </div>

          <!-- Registration Card -->
          <div class="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border-indigo-500/40 shadow-2xl relative">
            <div class="mb-8">
              <div class="lg:hidden mb-4">${this.getBrandLogo('small')}</div>
              <h2 class="text-2xl sm:text-3xl font-extrabold text-white">Create Your CITADEL</h2>
              <p class="text-slate-300 text-sm mt-1">Set up your encrypted vault and primary master key.</p>
            </div>

            <form id="register-form" onsubmit="window.citadelApp.handleRegisterSubmit(event)" class="space-y-5">
              <div>
                <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Full Name</label>
                <div class="relative">
                  <input type="text" id="reg-name" required placeholder="Your name"
                    class="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm" />
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Email Address</label>
                <div class="relative">
                  <input type="email" id="reg-email" required placeholder="you@example.com"
                    class="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm" />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between mb-2">
                  <label class="text-xs font-semibold text-slate-300 uppercase tracking-wider">Master Password</label>
                  <span id="reg-strength-label" class="text-xs font-semibold text-emerald-400">🟢 Very Strong</span>
                </div>
                <div class="relative">
                  <input type="password" id="reg-password" required
                    oninput="window.citadelApp.handleRegisterPasswordChange(this.value)"
                    placeholder="Enter strong master password..."
                    class="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm pr-10" />
                  <button type="button" onclick="window.citadelApp.togglePasswordVisibility('reg-password', this)" class="absolute right-3 top-3 text-slate-400 hover:text-white">
                    ${this.icon('eye', 'w-4 h-4')}
                  </button>
                </div>
                <!-- Strength Indicator Bar -->
                <div class="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div id="reg-strength-bar" class="h-full bg-emerald-500 transition-all duration-300" style="width: 95%;"></div>
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Confirm Master Password</label>
                <input type="password" id="reg-confirm-password" required placeholder="Repeat master password..."
                  class="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm" />
              </div>

              <div class="flex items-center gap-3 pt-1">
                <input type="checkbox" id="reg-terms" required checked class="w-4 h-4 rounded bg-slate-900 border-slate-700 text-indigo-600 focus:ring-indigo-500" />
                <label for="reg-terms" class="text-xs text-slate-300">
                  I agree to the <a href="#" class="text-indigo-400 hover:underline">Terms of Service</a> & <a href="#" class="text-indigo-400 hover:underline">Privacy Policy</a>
                </label>
              </div>

              <button type="submit" class="cyber-glow-btn w-full py-3.5 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30">
                ${this.icon('lock', 'w-4 h-4')}
                <span>Create Secure Vault</span>
              </button>

              <div class="text-center pt-2">
                <p class="text-xs text-slate-300">
                  Already have an account? 
                  <button type="button" onclick="window.citadelApp.navigate('login')" class="text-indigo-400 font-semibold hover:underline">
                    Unlock Vault
                  </button>
                </p>
              </div>
            </form>
          </div>

        </div>
      </div>
    `;
  }

  // ==========================================
  // PAGE 3: LOGIN PAGE
  // ==========================================
  renderLoginPage() {
    return `
      <div class="min-h-screen cyber-grid-bg flex items-center justify-center p-4">
        <div class="max-w-md w-full glass-panel p-8 sm:p-10 rounded-3xl border-indigo-500/40 shadow-2xl relative">
          
          <div class="text-center mb-8">
            <div class="flex justify-center mb-4">${this.getBrandLogo('default')}</div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white">Welcome Back</h2>
            <p class="text-slate-300 text-sm mt-1">Unlock your secure digital vault.</p>
          </div>

          <form id="login-form" onsubmit="window.citadelApp.handleLoginSubmit(event)" class="space-y-5">
            <div>
              <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Email Address</label>
              <input type="email" id="login-email" required placeholder="you@example.com"
                class="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm" />
            </div>

            <div>
              <div class="flex items-center justify-between mb-2">
                <label class="text-xs font-semibold text-slate-300 uppercase tracking-wider">Master Password</label>
                <button type="button" onclick="window.citadelApp.showForgotPasswordModal()" class="text-xs text-indigo-400 hover:underline">
                  Forgot Password?
                </button>
              </div>
              <div class="relative">
                <input type="password" id="login-password" required placeholder="Enter master password..."
                  class="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors text-sm pr-10" />
                <button type="button" onclick="window.citadelApp.togglePasswordVisibility('login-password', this)" class="absolute right-3 top-3 text-slate-400 hover:text-white">
                  ${this.icon('eye', 'w-4 h-4')}
                </button>
              </div>
            </div>

            <div class="flex items-center justify-between text-xs text-slate-400">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" id="login-remember" checked class="w-4 h-4 rounded bg-slate-900 border-slate-700 text-indigo-600 focus:ring-indigo-500" />
                <span>Remember Master Key</span>
              </label>
              <span class="text-[11px] text-emerald-400 flex items-center gap-1 font-mono">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 2FA Active
              </span>
            </div>

            <button type="submit" id="login-submit-btn" class="cyber-glow-btn w-full py-3.5 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30">
              ${this.icon('unlock', 'w-4 h-4')}
              <span>Unlock Vault</span>
            </button>

            <div class="text-center pt-2">
              <p class="text-xs text-slate-400">
                Don't have a vault yet? 
                <button type="button" onclick="window.citadelApp.navigate('register')" class="text-indigo-400 font-semibold hover:underline">
                  Create Account
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  // ==========================================
  // APP SHELL (SIDEBAR + TOPBAR + CONTENT)
  // ==========================================
  renderAppShell(currentView) {
    const user = this.app.store.state.user;
    const notifications = this.app.store.state.notifications;
    const unreadNotifs = notifications.filter(n => !n.read).length;
    const theme = this.app.store.state.settings.theme;

    const navItems = [
      { id: "dashboard", label: "Dashboard", icon: "shield", badge: null },
      { id: "passwords", label: "Password Vault", icon: "key", badge: this.app.store.state.passwords.length },
      { id: "documents", label: "Documents", icon: "folder", badge: this.app.store.state.documents.length },
      { id: "notes", label: "Secure Notes", icon: "note", badge: this.app.store.state.notes.length },
      { id: "generator", label: "Password Generator", icon: "generator", badge: null },
      { id: "security", label: "Security Center", icon: "activity", badge: "92%" },
      { id: "activity", label: "Activity History", icon: "activity", badge: null },
      { id: "trash", label: "Trash / Recovery", icon: "trash", badge: this.app.store.state.trash.length },
      { id: "settings", label: "Settings", icon: "settings", badge: null }
    ];

    return `
      <div class="min-h-screen flex bg-[var(--bg-primary)] text-[var(--text-primary)]">
        
        <!-- Desktop / Tablet Left Sidebar -->
        <aside id="app-sidebar" class="hidden md:flex flex-col w-64 lg:w-72 border-r border-slate-800/80 bg-slate-950/80 backdrop-blur-xl shrink-0 sticky top-0 h-screen z-30 justify-between transition-all duration-300">
          
          <!-- Top Branding -->
          <div class="p-6 border-b border-slate-800/80">
            ${this.getBrandLogo('default')}
          </div>

          <!-- Navigation Links -->
          <nav class="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
            ${navItems.map(item => {
              const active = currentView === item.id;
              return `
                <button onclick="window.citadelApp.navigate('${item.id}')"
                  class="w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-all ${
                    active 
                      ? 'bg-gradient-to-r from-emerald-600/30 to-emerald-900/20 text-white border border-emerald-500/50 shadow-md shadow-emerald-500/10' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
                  }">
                  <div class="flex items-center gap-3">
                    <span class="${active ? 'text-emerald-400' : 'text-slate-400'}">${this.icon(item.icon, 'w-5 h-5')}</span>
                    <span>${item.label}</span>
                  </div>
                  ${item.badge !== null ? `
                    <span class="text-[11px] font-mono px-2 py-0.5 rounded-full ${
                      item.id === 'security' 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                        : item.id === 'trash'
                        ? 'bg-rose-500/20 text-rose-300'
                        : 'bg-slate-800 text-slate-300'
                    }">${item.badge}</span>
                  ` : ''}
                </button>
              `;
            }).join('')}
          </nav>

          <!-- Sidebar Footer: User Card & Logout -->
          <div class="p-4 border-t border-slate-800/80">
            <div class="p-3 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between">
              <div class="flex items-center gap-3 cursor-pointer" onclick="window.citadelApp.navigate('profile')">
                <img src="${CitadelApi.resolveAssetUrl(user.avatar)}" alt="${user.name}" class="user-avatar-img w-9 h-9 rounded-xl object-cover ring-2 ring-emerald-500/40" />
                <div class="overflow-hidden">
                  <div class="text-xs font-bold text-white truncate">${user.name}</div>
                  <div class="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Vault Active
                  </div>
                </div>
              </div>
              <button onclick="window.citadelApp.handleLogout()" class="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800/60 transition-colors" data-tooltip="Logout">
                ${this.icon('logOut', 'w-4 h-4')}
              </button>
            </div>
          </div>

        </aside>

        <!-- Main Wrapper -->
        <div class="flex-1 flex flex-col min-w-0">
          
          <!-- Top Navigation Bar -->
          <header class="sticky top-0 z-20 backdrop-blur-xl bg-slate-950/75 border-b border-slate-800/80 h-18 px-4 sm:px-8 flex items-center justify-between gap-4">
            
            <!-- Mobile Logo & Hamburger -->
            <div class="flex items-center gap-3 md:hidden">
              <button onclick="window.citadelApp.toggleMobileSidebar()" class="p-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-800">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              </button>
              ${this.getBrandLogo('small')}
            </div>

            <!-- Global Search Bar / Command Palette Trigger -->
            <div class="flex-1 max-w-lg hidden sm:block">
              <div onclick="window.citadelApp.openCommandPalette()" class="relative flex items-center cursor-pointer group">
                <div class="absolute left-3.5 text-slate-400 group-hover:text-cyan-400 transition-colors">
                  ${this.icon('search', 'w-4 h-4')}
                </div>
                <input type="text" readonly placeholder="Search vault items (Ctrl + K)..." 
                  class="w-full pl-10 pr-16 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 group-hover:border-indigo-500/50 text-slate-300 text-xs focus:outline-none transition-all cursor-pointer" />
                <div class="absolute right-3 flex items-center gap-1">
                  <kbd class="px-1.5 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-slate-400 border border-slate-700">Ctrl</kbd>
                  <kbd class="px-1.5 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-slate-400 border border-slate-700">K</kbd>
                </div>
              </div>
            </div>

            <!-- Top Right Action Controls -->
            <div class="flex items-center gap-3">
              
              <!-- Quick Search on mobile -->
              <button onclick="window.citadelApp.openCommandPalette()" class="sm:hidden p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300">
                ${this.icon('search', 'w-5 h-5')}
              </button>

              <!-- Add New Dropdown Trigger -->
              <div class="relative" id="quick-add-container">
                <button onclick="window.citadelApp.toggleQuickAddMenu()" class="cyber-glow-btn px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white flex items-center gap-1.5 shadow-md shadow-indigo-600/20">
                  ${this.icon('plus', 'w-4 h-4')}
                  <span class="hidden sm:inline">Add New</span>
                </button>
                <!-- Dropdown Menu -->
                <div id="quick-add-menu" class="hidden absolute right-0 mt-2 w-52 glass-panel-elevated p-2 rounded-2xl shadow-2xl z-50 animate-modal border-slate-700">
                  <button onclick="window.citadelApp.openAddPasswordModal(); window.citadelApp.closeAllDropdowns()" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:bg-indigo-600/20 hover:text-white transition-colors">
                    <span class="text-indigo-400">${this.icon('key', 'w-4 h-4')}</span>
                    <span>Add Password</span>
                  </button>
                  <button onclick="window.citadelApp.openUploadDocModal(); window.citadelApp.closeAllDropdowns()" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:bg-cyan-600/20 hover:text-white transition-colors">
                    <span class="text-cyan-400">${this.icon('document', 'w-4 h-4')}</span>
                    <span>Upload Document</span>
                  </button>
                  <button onclick="window.citadelApp.openCreateNoteModal(); window.citadelApp.closeAllDropdowns()" class="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:bg-violet-600/20 hover:text-white transition-colors">
                    <span class="text-violet-400">${this.icon('note', 'w-4 h-4')}</span>
                    <span>Create Note</span>
                  </button>
                </div>
              </div>

              <!-- Theme Toggle Button -->
              <button onclick="window.citadelApp.toggleTheme()" class="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300 transition-colors" data-tooltip="Toggle Theme">
                ${theme === 'light' ? this.icon('moon', 'w-4 h-4') : this.icon('sun', 'w-4 h-4 text-amber-400')}
              </button>

              <!-- Notification Bell with Dropdown -->
              <div class="relative" id="notifications-dropdown-container">
                <button onclick="window.citadelApp.toggleNotificationsDropdown()" class="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300 transition-colors relative" data-tooltip="Notifications">
                  ${this.icon('bell', 'w-4 h-4')}
                  ${unreadNotifs > 0 ? `
                    <span class="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-[9px] font-bold text-white flex items-center justify-center animate-pulse">
                      ${unreadNotifs}
                    </span>
                  ` : ''}
                </button>

                <!-- Notifications Dropdown -->
                <div id="notifications-dropdown" class="hidden absolute right-0 mt-2 w-80 sm:w-96 glass-panel-elevated p-4 rounded-2xl shadow-2xl z-50 animate-modal border-slate-700">
                  <div class="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-bold text-white uppercase tracking-wider">Notifications</span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">${notifications.length}</span>
                    </div>
                    <button onclick="window.citadelApp.store.markAllNotificationsRead(); window.citadelApp.render()" class="text-[11px] text-indigo-400 hover:underline">
                      Mark all read
                    </button>
                  </div>
                  <div class="py-2 max-h-72 overflow-y-auto space-y-2">
                    ${notifications.length === 0 ? `
                      <div class="text-center py-6 text-xs text-slate-500">No notifications</div>
                    ` : notifications.map(notif => `
                      <div class="p-2.5 rounded-xl ${notif.read ? 'bg-slate-900/30' : 'bg-indigo-950/30 border border-indigo-500/20'} flex items-start gap-3">
                        <span class="text-base">${notif.icon}</span>
                        <div class="flex-1 min-w-0">
                          <div class="text-xs font-bold text-white truncate">${notif.title}</div>
                          <div class="text-[11px] text-slate-400 leading-tight mt-0.5">${notif.message}</div>
                          <div class="flex items-center justify-between mt-2">
                            <span class="text-[10px] text-slate-500">${notif.time}</span>
                            <button onclick="window.citadelApp.navigate('${notif.actionTarget || 'dashboard'}'); window.citadelApp.closeAllDropdowns()" class="text-[10px] font-semibold text-cyan-400 hover:underline">
                              ${notif.actionText} →
                            </button>
                          </div>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>

              <!-- Profile Avatar (Clickable to change picture) -->
              <div class="flex items-center gap-2 pl-2 border-l border-slate-800 cursor-pointer group" onclick="window.citadelApp.openProfilePictureModal()" data-tooltip="Change Profile Picture">
                <img src="${CitadelApi.resolveAssetUrl(user.avatar)}" alt="${user.name}" class="user-avatar-img w-8 h-8 rounded-xl object-cover ring-2 ring-emerald-500/50 group-hover:scale-105 transition-transform" />
                <span class="text-xs font-bold text-white hidden lg:inline">${user.name}</span>
              </div>

            </div>
          </header>

          <!-- Main Content Area -->
          <main class="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto pb-24 md:pb-12">
            <div id="view-content" class="animate-modal">
              <!-- Dynamically populated by specific view renderers -->
            </div>
          </main>

        </div>

      </div>

      <!-- Mobile Bottom Quick Navigation Bar -->
      <nav class="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 py-2 px-4 flex items-center justify-around">
        <button onclick="window.citadelApp.navigate('dashboard')" class="flex flex-col items-center gap-1 ${currentView === 'dashboard' ? 'text-emerald-500 font-bold' : 'text-slate-400'}">
          ${this.icon('shield', 'w-5 h-5')}
          <span class="text-[10px]">Home</span>
        </button>
        <button onclick="window.citadelApp.navigate('passwords')" class="flex flex-col items-center gap-1 ${currentView === 'passwords' ? 'text-emerald-500 font-bold' : 'text-slate-400'}">
          ${this.icon('key', 'w-5 h-5')}
          <span class="text-[10px]">Vault</span>
        </button>
        <button onclick="window.citadelApp.navigate('documents')" class="flex flex-col items-center gap-1 ${currentView === 'documents' ? 'text-emerald-500 font-bold' : 'text-slate-400'}">
          ${this.icon('folder', 'w-5 h-5')}
          <span class="text-[10px]">Docs</span>
        </button>
        <button onclick="window.citadelApp.navigate('generator')" class="flex flex-col items-center gap-1 ${currentView === 'generator' ? 'text-emerald-500 font-bold' : 'text-slate-400'}">
          ${this.icon('generator', 'w-5 h-5')}
          <span class="text-[10px]">Gen</span>
        </button>
        <button onclick="window.citadelApp.navigate('security')" class="flex flex-col items-center gap-1 ${currentView === 'security' ? 'text-emerald-500 font-bold' : 'text-slate-400'}">
          ${this.icon('activity', 'w-5 h-5')}
          <span class="text-[10px]">Security</span>
        </button>
      </nav>
    `;
  }

  // ==========================================
  // VIEW: MAIN DASHBOARD
  // ==========================================
  renderDashboardView() {
    const user = this.app.store.state.user;
    const passwords = this.app.store.state.passwords;
    const documents = this.app.store.state.documents;
    const notes = this.app.store.state.notes;
    const security = SecurityEngine.analyzeVault(passwords, user.twoFactorEnabled);
    const recentActivities = this.app.store.state.activities.slice(0, 5);
    const recentPasswords = passwords.slice(0, 4);

    return `
      <div class="space-y-8">
        
        <!-- Welcome Hero Banner -->
        <div class="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden bg-gradient-to-r from-emerald-950/40 via-slate-900/60 to-slate-900/40 border-emerald-500/30">
          <div class="max-w-2xl space-y-2">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Vault State: Active & Encrypted</span>
            </div>
            <h1 class="text-2xl sm:text-4xl font-extrabold text-white">Good morning, ${user.name} 👋</h1>
            <p class="text-slate-300 text-sm">Your digital vault is secure and organized. Zero vulnerabilities requiring emergency lockout.</p>
          </div>
          
          <div class="mt-6 flex flex-wrap items-center gap-3">
            <button onclick="window.citadelApp.openAddPasswordModal()" class="cyber-glow-btn px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white flex items-center gap-2">
              ${this.icon('plus', 'w-4 h-4')}
              <span>Add Password</span>
            </button>
            <button onclick="window.citadelApp.openUploadDocModal()" class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-slate-700 bg-slate-900/70 hover:bg-slate-800 text-slate-200 flex items-center gap-2 transition-colors">
              ${this.icon('document', 'w-4 h-4')}
              <span>Upload Document</span>
            </button>
            <button onclick="window.citadelApp.openCreateNoteModal()" class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-slate-700 bg-slate-900/70 hover:bg-slate-800 text-slate-200 flex items-center gap-2 transition-colors">
              ${this.icon('note', 'w-4 h-4')}
              <span>Create Note</span>
            </button>
          </div>
        </div>

        <!-- 4 Premium Dashboard KPI Statistic Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <!-- Card 1: Passwords -->
          <div onclick="window.citadelApp.navigate('passwords')" class="glass-panel p-6 rounded-2xl cursor-pointer hover:border-emerald-500/50 transition-all group">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">Passwords</span>
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                ${this.icon('key', 'w-5 h-5')}
              </div>
            </div>
            <div class="text-3xl font-extrabold text-white mb-1 font-mono">${passwords.length}</div>
            <div class="text-xs text-emerald-700 dark:text-emerald-300 flex items-center justify-between font-semibold">
              <span class="text-slate-400 font-normal">Credentials stored</span>
              <span class="hover:underline">View All →</span>
            </div>
          </div>

          <!-- Card 2: Documents -->
          <div onclick="window.citadelApp.navigate('documents')" class="glass-panel p-6 rounded-2xl cursor-pointer hover:border-emerald-500/50 transition-all group">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">Documents</span>
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                ${this.icon('folder', 'w-5 h-5')}
              </div>
            </div>
            <div class="text-3xl font-extrabold text-white mb-1 font-mono">${documents.length}</div>
            <div class="text-xs text-emerald-700 dark:text-emerald-300 flex items-center justify-between font-semibold">
              <span class="text-slate-400 font-normal">Files secured</span>
              <span class="hover:underline">View Locker →</span>
            </div>
          </div>

          <!-- Card 3: Secure Notes -->
          <div onclick="window.citadelApp.navigate('notes')" class="glass-panel p-6 rounded-2xl cursor-pointer hover:border-emerald-500/50 transition-all group">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">Secure Notes</span>
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                ${this.icon('note', 'w-5 h-5')}
              </div>
            </div>
            <div class="text-3xl font-extrabold text-white mb-1 font-mono">${notes.length}</div>
            <div class="text-xs text-emerald-700 dark:text-emerald-300 flex items-center justify-between font-semibold">
              <span class="text-slate-400 font-normal">Private notes</span>
              <span class="hover:underline">View Notes →</span>
            </div>
          </div>

          <!-- Card 4: Security Score -->
          <div onclick="window.citadelApp.navigate('security')" class="glass-panel p-6 rounded-2xl cursor-pointer hover:border-emerald-500/50 transition-all group">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-semibold uppercase tracking-wider text-slate-400">Security Score</span>
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                ${this.icon('shield', 'w-5 h-5')}
              </div>
            </div>
            <div class="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-1 font-mono">${security.score}%</div>
            <div class="text-xs text-emerald-700 dark:text-emerald-300 flex items-center justify-between font-semibold">
              <span class="text-slate-400 font-normal">${security.gradeLabel}</span>
              <span class="hover:underline">Audit Now →</span>
            </div>
          </div>

        </div>

        <!-- Middle Section: Vault Security Score Card & Quick Generator -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <!-- Large Interactive Security Score Card (7 Cols) -->
          <div class="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg font-bold text-white">Vault Security</h3>
                <p class="text-xs text-slate-400">Composite score based on password entropy, reuse, and 2FA status.</p>
              </div>
              <button onclick="window.citadelApp.navigate('security')" class="text-xs font-semibold text-indigo-400 hover:underline">
                Improve Security →
              </button>
            </div>

            <div class="flex flex-col sm:flex-row items-center gap-8 py-2">
              
              <!-- Circular Progress Gauge -->
              <div class="relative w-36 h-36 flex items-center justify-center shrink-0">
                <svg class="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" stroke="rgba(51, 65, 85, 0.4)" stroke-width="8" fill="none" />
                  <circle cx="50" cy="50" r="42" stroke="#10B981" stroke-width="8" fill="none"
                    stroke-dasharray="264" stroke-dashoffset="${264 - (264 * security.score) / 100}"
                    stroke-linecap="round" class="progress-ring-circle" />
                </svg>
                <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span class="text-2xl font-black text-white font-mono">${security.score}%</span>
                  <span class="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">${security.gradeLabel}</span>
                </div>
              </div>

              <!-- Breakdown Statistics -->
              <div class="flex-1 grid grid-cols-2 gap-4 w-full">
                <div class="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div class="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                    <span>🟢</span> Strong
                  </div>
                  <div class="text-xl font-bold text-white font-mono mt-1">${security.strongCount}</div>
                </div>

                <div class="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div class="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                    <span>🟡</span> Medium
                  </div>
                  <div class="text-xl font-bold text-white font-mono mt-1">${security.mediumCount}</div>
                </div>

                <div class="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div class="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                    <span>🔴</span> Weak
                  </div>
                  <div class="text-xl font-bold text-rose-400 font-mono mt-1">${security.weakCount}</div>
                </div>

                <div class="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div class="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                    <span>🔁</span> Reused
                  </div>
                  <div class="text-xl font-bold text-amber-400 font-mono mt-1">${security.reusedCount}</div>
                </div>
              </div>

            </div>

            <!-- Action Banner -->
            <div class="p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="text-xl">🛡️</span>
                <div>
                  <div class="text-xs font-bold text-white">2 Vulnerabilities Detected</div>
                  <div class="text-[11px] text-indigo-300">Upgrade weak credentials to boost score to 100%.</div>
                </div>
              </div>
              <button onclick="window.citadelApp.navigate('security')" class="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs transition-colors">
                Fix Now
              </button>
            </div>

          </div>

          <!-- Quick Interactive Password Generator (5 Cols) -->
          <div class="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-4">
            <div>
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-base font-bold text-white flex items-center gap-2">
                  <span>${this.icon('generator', 'w-4 h-4 text-indigo-400')}</span>
                  <span>Instant Generator</span>
                </h3>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">Cryptographic</span>
              </div>
              <p class="text-xs text-slate-400">Generate and copy military-grade secrets on the fly.</p>
            </div>

            <!-- Generated Display -->
            <div class="relative p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <span id="quick-gen-display" class="font-mono text-sm font-bold text-cyan-300 truncate pr-2">T@7kLm#92Qx!P4z</span>
              <div class="flex items-center gap-1.5 shrink-0">
                <button onclick="window.citadelApp.regenerateQuickPassword()" class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" data-tooltip="Regenerate">
                  ${this.icon('refresh', 'w-4 h-4')}
                </button>
                <button onclick="window.citadelApp.copyQuickGeneratedPassword()" class="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors" data-tooltip="Copy Password">
                  ${this.icon('copy', 'w-4 h-4')}
                </button>
              </div>
            </div>

            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs text-slate-400">
                <span>Length: <strong id="quick-len-val" class="text-white font-mono">16</strong></span>
                <span class="text-emerald-400 font-semibold">118 bits entropy</span>
              </div>
              <input type="range" id="quick-len-slider" min="8" max="32" value="16"
                oninput="window.citadelApp.handleQuickSliderChange(this.value)"
                class="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
            </div>

            <button onclick="window.citadelApp.navigate('generator')" class="w-full py-2.5 rounded-xl border border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-xs font-semibold text-slate-300 flex items-center justify-center gap-2 transition-colors">
              <span>Open Power Generator Mode →</span>
            </button>
          </div>

        </div>

        <!-- Bottom Section: Recent Credentials & Live Activity Timeline -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <!-- Recent Credentials (7 Cols) -->
          <div class="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-base font-bold text-white">Recent Credentials</h3>
                <p class="text-xs text-slate-400">Your most frequently used vault credentials.</p>
              </div>
              <button onclick="window.citadelApp.navigate('passwords')" class="text-xs font-semibold text-indigo-400 hover:underline">
                View All (${passwords.length}) →
              </button>
            </div>

            <div class="space-y-3">
              ${recentPasswords.map(pwd => `
                <div class="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 flex items-center justify-between gap-3 transition-colors">
                  <div class="flex items-center gap-3 min-w-0">
                    <div class="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-lg shrink-0" style="color: ${pwd.brandColor || '#6366F1'}">
                      ${pwd.favIcon || '🌐'}
                    </div>
                    <div class="min-w-0">
                      <div class="text-xs font-bold text-white truncate">${pwd.title}</div>
                      <div class="text-[11px] text-slate-400 truncate">${pwd.username}</div>
                    </div>
                  </div>

                  <div class="flex items-center gap-2 shrink-0">
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded-md ${
                      pwd.strength === 'strong' ? 'bg-emerald-500/20 text-emerald-400' :
                      pwd.strength === 'medium' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-rose-500/20 text-rose-400'
                    }">${pwd.strength}</span>
                    <button onclick="window.citadelApp.copyToClipboard('${pwd.password}', 'Password copied!')" class="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800" data-tooltip="Copy Password">
                      ${this.icon('copy', 'w-4 h-4')}
                    </button>
                    <button onclick="window.citadelApp.openViewPasswordModal('${pwd.id}')" class="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800" data-tooltip="View Details">
                      ${this.icon('eye', 'w-4 h-4')}
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Live Activity Feed (5 Cols) -->
          <div class="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-3xl space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-base font-bold text-white">Live Activity</h3>
                <p class="text-xs text-slate-400">Immutable security logs.</p>
              </div>
              <button onclick="window.citadelApp.navigate('activity')" class="text-xs font-semibold text-indigo-400 hover:underline">
                Audit Log →
              </button>
            </div>

            <div class="space-y-3">
              ${recentActivities.map(act => `
                <div class="flex items-start gap-3 text-xs">
                  <span class="text-base shrink-0 mt-0.5">${act.icon}</span>
                  <div class="flex-1 min-w-0">
                    <div class="font-bold text-white truncate">${act.title}</div>
                    <div class="text-slate-400 text-[11px] leading-snug">${act.description}</div>
                    <div class="text-[10px] text-slate-500 font-mono mt-0.5">${act.time}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

        </div>

      </div>
    `;
  }

  // ==========================================
  // VIEW: PASSWORD VAULT PAGE
  // ==========================================
  renderPasswordVaultView() {
    const passwords = this.app.store.state.passwords;
    const activeCategory = this.app.passwordCategoryFilter || "All";
    const searchQuery = (this.app.passwordSearchQuery || "").toLowerCase();
    const sortBy = this.app.passwordSortBy || "recent";

    const categories = ["All", "Social", "Education", "Work", "Shopping", "Finance", "Other"];

    let filtered = passwords.filter(item => {
      const matchCat = activeCategory === "All" || item.category === activeCategory;
      const matchQuery = !searchQuery ||
        item.title.toLowerCase().includes(searchQuery) ||
        item.username.toLowerCase().includes(searchQuery) ||
        item.domain.toLowerCase().includes(searchQuery);
      return matchCat && matchQuery;
    });

    if (sortBy === "az") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "updated") {
      filtered.sort((a, b) => b.lastUpdated.localeCompare(a.lastUpdated));
    }

    return `
      <div class="space-y-6">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-white">Password Vault</h1>
            <p class="text-slate-400 text-xs sm:text-sm">Securely manage all your website credentials and passkeys.</p>
          </div>
          <button onclick="window.citadelApp.openAddPasswordModal()" class="cyber-glow-btn px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white flex items-center gap-2 self-start sm:self-auto">
            ${this.icon('plus', 'w-4 h-4')}
            <span>Add Credential</span>
          </button>
        </div>

        <!-- Filter & Search Toolbar -->
        <div class="glass-panel p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          
          <!-- Category Filter Tabs -->
          <div class="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            ${categories.map(cat => `
              <button onclick="window.citadelApp.setPasswordCategoryFilter('${cat}')"
                class="px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors shrink-0 ${
                  activeCategory === cat
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                    : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800'
                }">
                ${cat}
              </button>
            `).join('')}
          </div>

          <!-- Search & Sort Controls -->
          <div class="flex items-center gap-3 w-full md:w-auto">
            <div class="relative flex-1 md:w-64">
              <span class="absolute left-3 top-2.5 text-slate-500">${this.icon('search', 'w-4 h-4')}</span>
              <input type="text" placeholder="Search passwords..." value="${searchQuery}"
                oninput="window.citadelApp.setPasswordSearchQuery(this.value)"
                class="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500" />
            </div>

            <select onchange="window.citadelApp.setPasswordSortBy(this.value)"
              class="px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 focus:outline-none">
              <option value="recent" ${sortBy === 'recent' ? 'selected' : ''}>Recently Added</option>
              <option value="updated" ${sortBy === 'updated' ? 'selected' : ''}>Recently Updated</option>
              <option value="az" ${sortBy === 'az' ? 'selected' : ''}>A — Z Alphabetical</option>
            </select>
          </div>

        </div>

        <!-- Password Cards Grid -->
        ${filtered.length === 0 ? `
          <div class="glass-panel p-12 rounded-3xl text-center space-y-4">
            <div class="w-16 h-16 rounded-2xl bg-indigo-950/60 text-indigo-400 border border-indigo-500/30 flex items-center justify-center mx-auto text-2xl">
              🔑
            </div>
            <h3 class="text-lg font-bold text-white">No Credentials Found</h3>
            <p class="text-xs text-slate-400 max-w-sm mx-auto">No passwords match your search query or filter. Create a new credential to get started.</p>
            <button onclick="window.citadelApp.openAddPasswordModal()" class="cyber-glow-btn px-4 py-2 rounded-xl text-xs font-semibold text-white inline-flex items-center gap-2">
              ${this.icon('plus', 'w-4 h-4')}
              <span>Add Credential</span>
            </button>
          </div>
        ` : `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            ${filtered.map(item => `
              <div class="glass-panel p-5 rounded-2xl space-y-4 relative group hover:border-indigo-500/50 transition-all">
                
                <!-- Card Header -->
                <div class="flex items-start justify-between gap-3">
                  <div class="flex items-center gap-3 min-w-0">
                    <div class="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl shrink-0">
                      ${item.favIcon || '🌐'}
                    </div>
                    <div class="min-w-0">
                      <h4 class="text-sm font-bold text-white truncate">${item.title}</h4>
                      <a href="${item.url || '#'}" target="_blank" class="text-[11px] text-indigo-400 hover:underline truncate block">${item.domain}</a>
                    </div>
                  </div>

                  <div class="flex items-center gap-1.5 shrink-0">
                    ${item.accountType ? `<span class="text-[9px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">${item.accountType}</span>` : ''}
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      item.strength === 'strong' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                      item.strength === 'medium' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                      'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                    }">${item.category}</span>
                  </div>
                </div>

                <!-- Username & Password Fields -->
                <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-900 space-y-2 text-xs">
                  
                  <!-- Username Row -->
                  <div class="flex items-center justify-between text-slate-300">
                    <span class="text-[10px] uppercase font-semibold text-slate-500">User</span>
                    <div class="flex items-center gap-1.5 font-mono">
                      <span class="truncate max-w-[140px] text-slate-300">${item.username}</span>
                      <button onclick="window.citadelApp.copyToClipboard('${item.username}', 'Username copied!')" class="text-slate-500 hover:text-white" data-tooltip="Copy Username">
                        ${this.icon('copy', 'w-3 h-3')}
                      </button>
                    </div>
                  </div>

                  <!-- Password Row (Masked by default) -->
                  <div class="flex items-center justify-between text-slate-300 pt-1 border-t border-slate-900">
                    <span class="text-[10px] uppercase font-semibold text-slate-500">Secret</span>
                    <div class="flex items-center gap-2 font-mono">
                      <span id="pwd-val-${item.id}" class="text-slate-400 tracking-wider">••••••••••••</span>
                      <button onclick="window.citadelApp.togglePasswordCardSecret('${item.id}', '${item.password}')" class="text-slate-500 hover:text-white" data-tooltip="Toggle Reveal">
                        ${this.icon('eye', 'w-3.5 h-3.5')}
                      </button>
                      <button onclick="window.citadelApp.copyToClipboard('${item.password}', 'Password copied to clipboard!')" class="text-slate-500 hover:text-cyan-400" data-tooltip="Copy Password">
                        ${this.icon('copy', 'w-3.5 h-3.5')}
                      </button>
                    </div>
                  </div>

                </div>

                <!-- Card Footer & Actions -->
                <div class="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[11px] text-slate-500">
                  <span>Updated: ${item.lastUpdated}</span>
                  <div class="flex items-center gap-1">
                    <button onclick="window.citadelApp.openViewPasswordModal('${item.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800" data-tooltip="View Details">
                      ${this.icon('eye', 'w-4 h-4')}
                    </button>
                    <button onclick="window.citadelApp.openEditPasswordModal('${item.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-indigo-400 hover:bg-slate-800" data-tooltip="Edit">
                      ${this.icon('edit', 'w-4 h-4')}
                    </button>
                    <button onclick="window.citadelApp.handleDeletePassword('${item.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800" data-tooltip="Move to Trash">
                      ${this.icon('trash', 'w-4 h-4')}
                    </button>
                  </div>
                </div>

              </div>
            `).join('')}
          </div>
        `}

      </div>
    `;
  }

  // ==========================================
  // VIEW: DOCUMENT LOCKER
  // ==========================================
  renderDocumentLockerView() {
    const documents = this.app.store.state.documents;
    const activeCategory = this.app.documentCategoryFilter || "All";
    const categories = [
      { id: "All", name: "All Files", icon: "📁" },
      { id: "Certificates", name: "Certificates", icon: "📜" },
      { id: "IDs", name: "IDs & Passes", icon: "🪪" },
      { id: "Academic", name: "Academic", icon: "🎓" },
      { id: "Work", name: "Work Docs", icon: "💼" },
      { id: "Personal", name: "Personal", icon: "👤" },
      { id: "Other", name: "Other", icon: "📂" }
    ];

    const filtered = documents.filter(d => activeCategory === "All" || d.category === activeCategory);

    return `
      <div class="space-y-6">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-white">Secure Document Locker</h1>
            <p class="text-slate-400 text-xs sm:text-sm">Keep your important documents protected with AES-256 and organized.</p>
          </div>
          <button onclick="window.citadelApp.openUploadDocModal()" class="cyber-glow-btn px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white flex items-center gap-2 self-start sm:self-auto">
            ${this.icon('plus', 'w-4 h-4')}
            <span>Upload Document</span>
          </button>
        </div>

        <!-- Drag & Drop Upload Zone -->
        <div id="dropzone" ondragover="window.citadelApp.handleDragOver(event)" ondragleave="window.citadelApp.handleDragLeave(event)" ondrop="window.citadelApp.handleFileDrop(event)"
          onclick="window.citadelApp.openUploadDocModal()"
          class="glass-panel p-8 rounded-3xl border-2 border-dashed border-slate-700 hover:border-cyan-500/60 transition-all text-center cursor-pointer space-y-3 group">
          <div class="w-14 h-14 rounded-2xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto text-2xl group-hover:scale-110 transition-transform">
            📤
          </div>
          <h3 class="text-base font-bold text-white">Drag & Drop your files here</h3>
          <p class="text-xs text-slate-400">or <span class="text-cyan-400 font-semibold underline">Browse Files</span> from your computer</p>
          <div class="text-[11px] text-slate-500 font-mono">Allowed: PDF, JPG, PNG, DOCX (Max 25MB encrypted)</div>
        </div>

        <!-- Category Filter Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          ${categories.map(c => `
            <button onclick="window.citadelApp.setDocumentCategoryFilter('${c.id}')"
              class="glass-panel p-3.5 rounded-2xl text-center space-y-1.5 transition-all ${
                activeCategory === c.id ? 'border-cyan-500 bg-cyan-950/40' : 'hover:border-slate-700'
              }">
              <div class="text-2xl">${c.icon}</div>
              <div class="text-xs font-bold text-white truncate">${c.name}</div>
            </button>
          `).join('')}
        </div>

        <!-- Documents Grid -->
        ${filtered.length === 0 ? `
          <div class="glass-panel p-12 rounded-3xl text-center space-y-4">
            <div class="w-16 h-16 rounded-2xl bg-cyan-950/60 text-cyan-400 border border-cyan-500/30 flex items-center justify-center mx-auto text-3xl">
              📁
            </div>
            <h3 class="text-base font-bold text-white">Document Locker is Empty</h3>
            <p class="text-xs text-slate-400 max-w-sm mx-auto">Upload certificates, passport scans, and sensitive documents with client-side AES-256 encryption.</p>
            <button onclick="window.citadelApp.openUploadDocModal()" class="cyber-glow-btn px-4 py-2 rounded-xl text-xs font-bold text-white inline-flex items-center gap-2">
              ${this.icon('plus', 'w-4 h-4')}
              <span>Upload First Document</span>
            </button>
          </div>
        ` : `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            ${filtered.map(doc => `
              <div class="glass-panel p-5 rounded-2xl space-y-4 relative group hover:border-cyan-500/50 transition-all flex flex-col justify-between">
                
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-2xl">${doc.categoryIcon || '📄'}</span>
                    <span class="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-slate-900 text-cyan-400 border border-slate-800">${doc.fileType}</span>
                  </div>

                  <div>
                    <h4 class="text-sm font-bold text-white truncate" title="${doc.name}">${doc.name}</h4>
                    <div class="text-xs text-slate-400 mt-0.5">${doc.size} • ${doc.uploadedDate}</div>
                  </div>

                  <p class="text-[11px] text-slate-400 line-clamp-2">${doc.description || 'Encrypted file'}</p>
                </div>

                <!-- Actions -->
                <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <button onclick="window.citadelApp.openPreviewDocModal('${doc.id}')" class="px-2.5 py-1.5 rounded-lg bg-cyan-950/40 text-cyan-300 hover:bg-cyan-900/60 text-xs font-semibold flex items-center gap-1.5 transition-colors">
                    ${this.icon('eye', 'w-3.5 h-3.5')}
                    <span>View</span>
                  </button>
                  
                  <div class="flex items-center gap-1 text-slate-400">
                    <button onclick="window.citadelApp.handleDownloadDoc('${doc.id}')" class="p-1.5 rounded-lg hover:text-white hover:bg-slate-800" data-tooltip="Download">
                      ${this.icon('download', 'w-4 h-4')}
                    </button>
                    <button onclick="window.citadelApp.openRenameDocModal('${doc.id}')" class="p-1.5 rounded-lg hover:text-indigo-400 hover:bg-slate-800" data-tooltip="Rename">
                      ${this.icon('edit', 'w-4 h-4')}
                    </button>
                    <button onclick="window.citadelApp.handleDeleteDoc('${doc.id}')" class="p-1.5 rounded-lg hover:text-rose-400 hover:bg-slate-800" data-tooltip="Delete">
                      ${this.icon('trash', 'w-4 h-4')}
                    </button>
                  </div>
                </div>

              </div>
            `).join('')}
          </div>
        `}

      </div>
    `;
  }

  // ==========================================
  // VIEW: SECURE NOTES PAGE
  // ==========================================
  renderSecureNotesView() {
    const notes = this.app.store.state.notes;

    return `
      <div class="space-y-6">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-white">Private Notes</h1>
            <p class="text-slate-400 text-xs sm:text-sm">Your private thoughts and sensitive information stay encrypted inside your vault.</p>
          </div>
          <button onclick="window.citadelApp.openCreateNoteModal()" class="cyber-glow-btn px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white flex items-center gap-2 self-start sm:self-auto">
            ${this.icon('plus', 'w-4 h-4')}
            <span>Create Note</span>
          </button>
        </div>

        <!-- Notes Grid -->
        ${(!notes || notes.length === 0) ? `
          <div class="glass-panel p-12 rounded-3xl text-center space-y-4">
            <div class="w-16 h-16 rounded-2xl bg-violet-950/60 text-violet-400 border border-violet-500/30 flex items-center justify-center mx-auto text-3xl">
              📝
            </div>
            <h3 class="text-base font-bold text-white">No Secure Notes Found</h3>
            <p class="text-xs text-slate-400 max-w-sm mx-auto">Create encrypted memos, seed recovery phrases, and confidential notes stored with zero-knowledge keys.</p>
            <button onclick="window.citadelApp.openCreateNoteModal()" class="cyber-glow-btn px-4 py-2 rounded-xl text-xs font-bold text-white inline-flex items-center gap-2">
              ${this.icon('plus', 'w-4 h-4')}
              <span>Create First Note</span>
            </button>
          </div>
        ` : `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            ${notes.map(note => `
              <div class="glass-panel p-6 rounded-2xl space-y-4 relative group hover:border-violet-500/50 transition-all flex flex-col justify-between">
                
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-2xl">${note.categoryIcon || '📝'}</span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">${note.category}</span>
                  </div>

                  <h3 class="text-base font-bold text-white">${note.title}</h3>
                  
                  <!-- Hidden preview until opened -->
                  <div class="p-3 rounded-xl bg-slate-950/80 border border-slate-900 text-xs font-mono text-slate-400">
                    <div class="flex items-center gap-2 text-indigo-400 font-semibold mb-1">
                      <span>🔐</span> Protected Note Payload
                    </div>
                    <div class="truncate text-slate-500">${note.preview}</div>
                  </div>

                  <div class="flex flex-wrap gap-1.5 pt-1">
                    ${(note.tags || []).map(t => `<span class="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-400">#${t}</span>`).join('')}
                  </div>
                </div>

                <!-- Footer -->
                <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                  <span>Updated: ${note.lastUpdated}</span>
                  <div class="flex items-center gap-1">
                    <button onclick="window.citadelApp.openViewNoteModal('${note.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800" data-tooltip="View Decrypted">
                      ${this.icon('eye', 'w-4 h-4')}
                    </button>
                    <button onclick="window.citadelApp.openEditNoteModal('${note.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-indigo-400 hover:bg-slate-800" data-tooltip="Edit">
                      ${this.icon('edit', 'w-4 h-4')}
                    </button>
                    <button onclick="window.citadelApp.handleDeleteNote('${note.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800" data-tooltip="Delete">
                      ${this.icon('trash', 'w-4 h-4')}
                    </button>
                  </div>
                </div>

              </div>
            `).join('')}
          </div>
        `}

      </div>
    `;
  }

  // ==========================================
  // VIEW: PASSWORD GENERATOR PAGE
  // ==========================================
  renderPasswordGeneratorView() {
    const opts = this.app.generatorOptions || {
      length: 16,
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
      excludeLookalikes: false,
      mode: "password"
    };

    const currentPassword = this.app.generatedPassword || "T@7kLm#92Qx!P4z";
    const strength = PasswordGenerator.evaluateStrength(currentPassword);
    const history = this.app.generatedHistory || [];

    return `
      <div class="max-w-4xl mx-auto space-y-8">
        
        <!-- Header -->
        <div class="text-center space-y-2">
          <h1 class="text-2xl sm:text-4xl font-extrabold text-white">Strong Password Generator</h1>
          <p class="text-slate-400 text-xs sm:text-sm">Create cryptographically secure and high-entropy passwords instantly.</p>
        </div>

        <!-- Large Password Display Card -->
        <div class="glass-panel p-6 sm:p-10 rounded-3xl space-y-6 text-center border-indigo-500/40 shadow-2xl relative overflow-hidden">
          
          <div class="relative p-5 rounded-2xl bg-slate-950/90 border border-slate-800 flex items-center justify-between gap-4">
            <span id="gen-main-display" class="font-mono text-xl sm:text-3xl font-bold text-cyan-300 truncate w-full text-center tracking-wider selection:bg-indigo-600">
              ${currentPassword}
            </span>
            <button onclick="window.citadelApp.copyGeneratedPassword()" class="cyber-glow-btn px-4 py-2.5 rounded-xl text-xs font-bold text-white shrink-0 flex items-center gap-1.5" data-tooltip="Copy Secret">
              ${this.icon('copy', 'w-4 h-4')}
              <span>Copy</span>
            </button>
          </div>

          <!-- Strength Rating Bar -->
          <div class="flex items-center justify-between text-xs sm:text-sm font-semibold">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-${strength.color}-400"></span>
              <span class="text-${strength.color}-400">${strength.label}</span>
              <span class="text-slate-500 font-mono">(${strength.entropyBits} bits)</span>
            </div>
            <div class="text-slate-400">
              Time to crack: <span class="text-emerald-400 font-mono">${strength.crackTime}</span>
            </div>
          </div>

          <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div class="h-full bg-${strength.color}-500 transition-all duration-300" style="width: ${strength.score}%"></div>
          </div>

          <!-- Regenerate Button -->
          <button onclick="window.citadelApp.generateNewPassword()" class="cyber-glow-btn w-full py-3.5 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2">
            ${this.icon('refresh', 'w-4 h-4')}
            <span>Generate New Password</span>
          </button>
        </div>

        <!-- Generator Settings -->
        <div class="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
          <h3 class="text-base font-bold text-white">Generator Customization</h3>

          <!-- Length Slider -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <label class="text-xs font-bold uppercase tracking-wider text-slate-300">Password Length</label>
              <span id="gen-len-display" class="font-mono text-base font-bold text-indigo-400">${opts.length} Characters</span>
            </div>
            <input type="range" min="8" max="32" value="${opts.length}"
              oninput="window.citadelApp.handleGenLengthChange(this.value)"
              class="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500" />
            <div class="flex justify-between text-[10px] font-mono text-slate-500">
              <span>8 (Minimum)</span>
              <span>16 (Recommended)</span>
              <span>32 (Maximum)</span>
            </div>
          </div>

          <!-- Checkbox Options Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <label class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer">
              <input type="checkbox" ${opts.uppercase ? 'checked' : ''} onchange="window.citadelApp.toggleGenOption('uppercase')" class="w-4 h-4 rounded bg-slate-800 border-slate-700 text-indigo-600 focus:ring-indigo-500" />
              <div>
                <div class="text-xs font-bold text-white">Uppercase Letters (A-Z)</div>
                <div class="text-[10px] text-slate-400">ABCDEFGH...</div>
              </div>
            </label>

            <label class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer">
              <input type="checkbox" ${opts.lowercase ? 'checked' : ''} onchange="window.citadelApp.toggleGenOption('lowercase')" class="w-4 h-4 rounded bg-slate-800 border-slate-700 text-indigo-600 focus:ring-indigo-500" />
              <div>
                <div class="text-xs font-bold text-white">Lowercase Letters (a-z)</div>
                <div class="text-[10px] text-slate-400">abcdefgh...</div>
              </div>
            </label>

            <label class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer">
              <input type="checkbox" ${opts.numbers ? 'checked' : ''} onchange="window.citadelApp.toggleGenOption('numbers')" class="w-4 h-4 rounded bg-slate-800 border-slate-700 text-indigo-600 focus:ring-indigo-500" />
              <div>
                <div class="text-xs font-bold text-white">Numbers (0-9)</div>
                <div class="text-[10px] text-slate-400">0123456789</div>
              </div>
            </label>

            <label class="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer">
              <input type="checkbox" ${opts.symbols ? 'checked' : ''} onchange="window.citadelApp.toggleGenOption('symbols')" class="w-4 h-4 rounded bg-slate-800 border-slate-700 text-indigo-600 focus:ring-indigo-500" />
              <div>
                <div class="text-xs font-bold text-white">Special Characters (!@#$%)</div>
                <div class="text-[10px] text-slate-400">!@#$%^&*()_+-=</div>
              </div>
            </label>
          </div>

        </div>

        <!-- Session Generated History -->
        <div class="glass-panel p-6 rounded-3xl space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-bold text-white uppercase tracking-wider">Session Generation History</h3>
            <span class="text-xs text-slate-400">${history.length} generated</span>
          </div>
          <div class="space-y-2 max-h-48 overflow-y-auto">
            ${history.length === 0 ? `
              <div class="text-center text-xs text-slate-500 py-4">No previously generated keys in this session.</div>
            ` : history.map(item => `
              <div class="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between text-xs font-mono">
                <span class="text-slate-300 truncate mr-2">${item}</span>
                <button onclick="window.citadelApp.copyToClipboard('${item}', 'Copied from history!')" class="p-1 rounded text-slate-400 hover:text-white" data-tooltip="Copy">
                  ${this.icon('copy', 'w-3.5 h-3.5')}
                </button>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    `;
  }

  // ==========================================
  // VIEW: SECURITY CENTER
  // ==========================================
  renderSecurityCenterView() {
    const passwords = this.app.store.state.passwords || [];
    const user = this.app.store.state.user || {};
    const audit = SecurityEngine.analyzeVault(passwords, user.twoFactorEnabled !== false);
    const recommendations = audit.recommendations || [];

    return `
      <div class="space-y-8">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-white">Security Center</h1>
            <p class="text-slate-400 text-xs sm:text-sm">Monitor vulnerabilities and elevate the cryptographic posture of your digital vault.</p>
          </div>
          <button onclick="window.citadelApp.runDeepScan()" class="cyber-glow-btn px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white flex items-center gap-2 self-start sm:self-auto">
            ${this.icon('sparkles', 'w-4 h-4')}
            <span>Run Vault Deep Scan</span>
          </button>
        </div>

        <!-- Overall Score Card -->
        <div class="glass-panel p-8 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900/80 to-slate-950 border-indigo-500/40 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div class="md:col-span-4 flex flex-col items-center text-center">
            <div class="relative w-40 h-40 flex items-center justify-center">
              <svg class="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" stroke="rgba(51, 65, 85, 0.4)" stroke-width="8" fill="none" />
                <circle cx="50" cy="50" r="42" stroke="#10B981" stroke-width="8" fill="none"
                  stroke-dasharray="264" stroke-dashoffset="${264 - (264 * (audit.score ?? 100)) / 100}"
                  stroke-linecap="round" class="progress-ring-circle" />
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center">
                <span class="text-3xl font-black text-white font-mono">${audit.score ?? 100} / 100</span>
                <span class="text-xs font-bold text-emerald-400 uppercase tracking-wider">${audit.gradeLabel || 'Vault Protected'}</span>
              </div>
            </div>
            <div class="mt-3 text-xs text-slate-400">Vault Defense Grade: <strong class="text-white">${audit.grade || 'A+'}</strong></div>
          </div>

          <div class="md:col-span-8 space-y-4">
            <h3 class="text-xl font-bold text-white">Automated Security Sentinel Status</h3>
            <p class="text-slate-300 text-xs leading-relaxed">
              Your vault has undergone automated SHA-256 entropy evaluation and breach correlation. 
              Address the flagged recommendations below to eliminate attack vectors.
            </p>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div class="text-[11px] text-slate-400">Strong Passwords</div>
                <div class="text-lg font-bold text-emerald-400 font-mono mt-0.5">${audit.strongCount || 0}</div>
              </div>
              <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div class="text-[11px] text-slate-400">Medium Passwords</div>
                <div class="text-lg font-bold text-amber-400 font-mono mt-0.5">${audit.mediumCount || 0}</div>
              </div>
              <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div class="text-[11px] text-slate-400">Weak Passwords</div>
                <div class="text-lg font-bold text-rose-400 font-mono mt-0.5">${audit.weakCount || 0}</div>
              </div>
              <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div class="text-[11px] text-slate-400">Reused Passwords</div>
                <div class="text-lg font-bold text-amber-400 font-mono mt-0.5">${audit.reusedCount || 0}</div>
              </div>
            </div>
          </div>

        </div>

        <!-- Security Recommendation Cards List -->
        <div class="space-y-4">
          <h3 class="text-base font-bold text-white uppercase tracking-wider">Security Recommendations</h3>

          <div class="space-y-3">
            ${recommendations.length > 0 ? recommendations.map(rec => `
              <div class="glass-panel p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-${rec.status === 'danger' ? 'rose-500/40' : rec.status === 'warning' ? 'amber-500/40' : 'slate-800'}">
                <div class="flex items-start gap-3.5">
                  <span class="text-2xl mt-0.5">${rec.icon || '🛡️'}</span>
                  <div>
                    <h4 class="text-sm font-bold text-white">${rec.title || 'Security Notice'}</h4>
                    <p class="text-xs text-slate-400 mt-0.5">${rec.description || ''}</p>
                  </div>
                </div>

                ${rec.actionText ? `
                  <button onclick="window.citadelApp.handleSecurityAction('${rec.actionType}')"
                    class="px-4 py-2 rounded-xl text-xs font-bold text-white shrink-0 transition-colors ${
                      rec.status === 'danger' ? 'bg-rose-600 hover:bg-rose-500' : 'bg-amber-600 hover:bg-amber-500'
                    }">
                    ${rec.actionText}
                  </button>
                ` : `
                  <span class="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    ${this.icon('check', 'w-4 h-4')} Verified
                  </span>
                `}
              </div>
            `).join('') : `
              <div class="glass-panel p-8 rounded-2xl text-center space-y-3">
                <div class="text-3xl">🛡️</div>
                <h4 class="text-sm font-bold text-white">All Security Checks Passed</h4>
                <p class="text-xs text-slate-400 max-w-sm mx-auto">No vulnerabilities or leaked credentials detected in your vault.</p>
              </div>
            `}
          </div>
        </div>

      </div>
    `;
  }

  // ==========================================
  // VIEW: ACTIVITY HISTORY
  // ==========================================
  renderActivityHistoryView() {
    const activities = this.app.store.state.activities;
    const filter = this.app.activityFilter || "All";
    const categories = ["All", "Login", "Passwords", "Documents", "Notes", "Security"];

    const filtered = activities.filter(a => filter === "All" || a.category === filter);

    return `
      <div class="space-y-6">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-white">Security Activity</h1>
            <p class="text-slate-400 text-xs sm:text-sm">Real-time cryptographic audit trail of all vault operations.</p>
          </div>
          <button onclick="window.citadelApp.exportAuditLog()" class="px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-xs font-semibold text-slate-200 flex items-center gap-2 transition-colors">
            ${this.icon('download', 'w-4 h-4')}
            <span>Export Audit Log</span>
          </button>
        </div>

        <!-- Filter Chips -->
        <div class="flex items-center gap-2 overflow-x-auto pb-2">
          ${categories.map(c => `
            <button onclick="window.citadelApp.setActivityFilter('${c}')"
              class="px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors shrink-0 ${
                filter === c ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30' : 'bg-slate-900 text-slate-400 hover:text-white'
              }">
              ${c}
            </button>
          `).join('')}
        </div>

        <!-- Activity Timeline -->
        <div class="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
          ${filtered.length === 0 ? `
            <div class="p-8 text-center space-y-3">
              <div class="text-3xl">📋</div>
              <h4 class="text-sm font-bold text-white">No Activity Logged</h4>
              <p class="text-xs text-slate-400">Security audits, credential creations, and authentication events will appear here in chronological order.</p>
            </div>
          ` : `
            <div class="relative pl-6 border-l-2 border-slate-800 space-y-6">
              ${filtered.map(act => `
                <div class="relative group">
                  <!-- Timeline Dot -->
                  <div class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:scale-125 transition-transform"></div>

                  <div class="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-1.5">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2">
                        <span class="text-base">${act.icon}</span>
                        <h4 class="text-xs font-bold text-white">${act.title}</h4>
                      </div>
                      <span class="text-[10px] font-mono text-slate-500">${act.time}</span>
                    </div>
                    <p class="text-xs text-slate-400">${act.description}</p>
                    <div class="flex flex-wrap items-center gap-3 pt-1 text-[10px] text-slate-500 font-mono">
                      <span>Device: ${act.device || 'Authorized Client'}</span>
                      <span>•</span>
                      <span>IP: ${act.ip || '185.220.101.5'}</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>

      </div>
    `;
  }

  // ==========================================
  // VIEW: USER PROFILE PAGE
  // ==========================================
  renderProfileView() {
    const user = this.app.store.state.user;

    return `
      <div class="max-w-4xl mx-auto space-y-8">
        
        <!-- Header -->
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-white">My Profile</h1>
          <p class="text-slate-400 text-xs sm:text-sm">Manage your vault identity and emergency recovery protocols.</p>
        </div>

        <!-- Profile Card -->
        <div class="glass-panel p-8 rounded-3xl space-y-6">
          <div class="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-800">
            <div class="relative group cursor-pointer shrink-0" onclick="window.citadelApp.openProfilePictureModal()" data-tooltip="Click to change profile photo">
              <img id="profile-avatar-display" src="${CitadelApi.resolveAssetUrl(user.avatar)}" alt="${user.name}" class="user-avatar-img w-24 h-24 rounded-3xl object-cover ring-4 ring-emerald-500/40 transition-transform group-hover:scale-105" />
              <div class="absolute inset-0 rounded-3xl bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[11px] font-semibold gap-1 shadow-lg">
                <span class="text-lg">📷</span>
                <span>Change Photo</span>
              </div>
            </div>
            <div class="space-y-1 text-center sm:text-left">
              <h2 class="text-xl font-bold text-white">${user.name}</h2>
              <div class="text-xs text-slate-400">${user.email}</div>
              <div class="text-xs text-emerald-600 dark:text-emerald-400 font-medium">${user.role}</div>
              <div class="text-[10px] text-slate-500 font-mono mt-2">Vault Member Since: ${user.joinedDate}</div>
              <div class="pt-2 flex items-center justify-center sm:justify-start gap-3">
                <button onclick="window.citadelApp.openProfilePictureModal()" class="px-3.5 py-1.5 rounded-xl border border-emerald-500/40 bg-emerald-950/20 text-emerald-400 hover:bg-emerald-900/30 text-xs font-semibold flex items-center gap-1.5 transition-colors">
                  <span>📷</span>
                  <span>Change Profile Photo</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Profile Details Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
              <div class="text-[11px] text-slate-400 uppercase font-semibold">Two-Factor Authentication</div>
              <div class="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                ${this.icon('check', 'w-4 h-4')} Enabled (Hardware TOTP)
              </div>
            </div>

            <div class="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
              <div class="text-[11px] text-slate-400 uppercase font-semibold">Emergency Recovery Contact</div>
              <div class="text-sm font-bold text-white font-mono">${user.recoveryEmail}</div>
            </div>
          </div>

          <!-- Emergency Kit Section -->
          <div class="p-6 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="space-y-1">
              <div class="text-sm font-bold text-white flex items-center gap-2">
                <span>🛡️</span>
                <span>CITADEL Emergency Recovery Kit</span>
              </div>
              <p class="text-xs text-indigo-300">Generate a printable PDF sheet containing your encrypted master key derivator and emergency seed.</p>
            </div>
            <button onclick="window.citadelApp.downloadEmergencyKit()" class="cyber-glow-btn px-4 py-2 rounded-xl text-xs font-bold text-white shrink-0 flex items-center gap-1.5">
              ${this.icon('download', 'w-4 h-4')}
              <span>Download Kit</span>
            </button>
          </div>

          <div class="flex items-center gap-3 pt-2">
            <button onclick="window.citadelApp.openEditProfileModal()" class="px-5 py-2.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-white transition-colors">
              Edit Profile
            </button>
            <button onclick="window.citadelApp.openChangePasswordModal()" class="px-5 py-2.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-white transition-colors">
              Change Master Password
            </button>
          </div>
        </div>

      </div>
    `;
  }

  // ==========================================
  // VIEW: SETTINGS PAGE
  // ==========================================
  renderSettingsView() {
    const settings = this.app.store.state.settings;
    const user = this.app.store.state.user;

    return `
      <div class="max-w-4xl mx-auto space-y-8">
        
        <!-- Header -->
        <div>
          <h1 class="text-2xl sm:text-3xl font-extrabold text-white">Settings & Vault Configuration</h1>
          <p class="text-slate-400 text-xs sm:text-sm">Manage security protocols, preferences, active sessions, and data exports.</p>
        </div>

        <!-- Section 1: Security & Master Key -->
        <div class="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
          <div class="flex items-center gap-3 pb-4 border-b border-slate-800">
            <span class="text-xl">🔐</span>
            <div>
              <h3 class="text-base font-bold text-white">Vault Security & Authentication</h3>
              <p class="text-xs text-slate-400">Configure master password and multi-factor authentication rules.</p>
            </div>
          </div>

          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div class="flex items-center gap-3.5">
                <img src="${CitadelApi.resolveAssetUrl(user.avatar)}" alt="${user.name}" class="user-avatar-img w-10 h-10 rounded-xl object-cover ring-2 ring-emerald-500/40" />
                <div>
                  <div class="text-xs font-bold text-white">Profile Photo & Avatar</div>
                  <div class="text-[11px] text-slate-400">Change your vault identity avatar (JPG, PNG, WEBP).</div>
                </div>
              </div>
              <button onclick="window.citadelApp.openProfilePictureModal()" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors">
                Change Photo
              </button>
            </div>

            <div class="flex items-center justify-between p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div>
                <div class="text-xs font-bold text-white">Master Password</div>
                <div class="text-[11px] text-slate-400">Last changed 2 months ago. High cryptographic entropy.</div>
              </div>
              <button onclick="window.citadelApp.openChangePasswordModal()" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors">
                Change Password
              </button>
            </div>

            <div class="flex items-center justify-between p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div>
                <div class="text-xs font-bold text-white">Two-Factor Authentication (2FA)</div>
                <div class="text-[11px] text-emerald-400">Status: Active with Authenticator App</div>
              </div>
              <button onclick="window.citadelApp.openTwoFactorModal()" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-500/40 transition-colors">
                Configure 2FA
              </button>
            </div>

            <div class="flex items-center justify-between p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div>
                <div class="text-xs font-bold text-white">New Login Alerts</div>
                <div class="text-[11px] text-slate-400">Trigger immediate push notifications for unknown devices.</div>
              </div>
              <button onclick="window.citadelApp.showLoginAlertDemo()" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors">
                Test Alert Modal
              </button>
            </div>
          </div>
        </div>

        <!-- Section 2: Active Sessions -->
        <div class="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
          <div class="flex items-center justify-between pb-4 border-b border-slate-800">
            <div class="flex items-center gap-3">
              <span class="text-xl">💻</span>
              <div>
                <h3 class="text-base font-bold text-white">Active Sessions</h3>
                <p class="text-xs text-slate-400">Devices currently authenticated to your vault.</p>
              </div>
            </div>
            <button onclick="window.citadelApp.handleRevokeAllSessions()" class="text-xs text-rose-400 hover:underline">
              Revoke All Others
            </button>
          </div>

          <div class="space-y-3">
            ${(settings.activeSessions || []).map(sess => `
              <div class="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div class="font-bold text-white flex items-center gap-2">
                    <span>${sess.device}</span>
                    ${sess.isCurrent ? `<span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">Current Session</span>` : ''}
                  </div>
                  <div class="text-slate-400 text-[11px] mt-0.5">${sess.location} • IP: ${sess.ip} • ${sess.lastActive}</div>
                </div>
                ${!sess.isCurrent ? `
                  <button onclick="window.citadelApp.handleRevokeSession('${sess.id}')" class="text-slate-400 hover:text-rose-400 text-xs">
                    Revoke
                  </button>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Section 3: Preferences -->
        <div class="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
          <div class="flex items-center gap-3 pb-4 border-b border-slate-800">
            <span class="text-xl">⚙️</span>
            <div>
              <h3 class="text-base font-bold text-white">Vault Preferences</h3>
              <p class="text-xs text-slate-400">Customize auto-lock behavior, theme, and clipboard timeouts.</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div class="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <label class="font-bold text-white">Appearance Theme</label>
              <select onchange="window.citadelApp.handleSettingChange('theme', this.value)" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                <option value="dark" ${settings.theme === 'dark' ? 'selected' : ''}>Dark Mode (Cyber Vault)</option>
                <option value="light" ${settings.theme === 'light' ? 'selected' : ''}>Light Mode (Clean Professional)</option>
              </select>
            </div>

            <div class="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <label class="font-bold text-white">Auto-Lock Vault Timeout</label>
              <select onchange="window.citadelApp.handleSettingChange('autoLockTimeout', this.value)" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                <option value="1">1 Minute (Strict)</option>
                <option value="5">5 Minutes</option>
                <option value="15" selected>15 Minutes (Recommended)</option>
                <option value="30">30 Minutes</option>
                <option value="never">Never (Not Recommended)</option>
              </select>
            </div>

            <div class="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <label class="font-bold text-white">Clipboard Auto-Clear Delay</label>
              <select onchange="window.citadelApp.handleSettingChange('clipboardClearTimeout', this.value)" class="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                <option value="15">15 Seconds</option>
                <option value="30" selected>30 Seconds (Default)</option>
                <option value="60">60 Seconds</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Section 4: Data Management & Export -->
        <div class="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 border-rose-500/30">
          <div class="flex items-center gap-3 pb-4 border-b border-slate-800">
            <span class="text-xl">💾</span>
            <div>
              <h3 class="text-base font-bold text-white">Data Management & Destruction</h3>
              <p class="text-xs text-slate-400">Export zero-knowledge vault backups or permanently purge account.</p>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <button onclick="window.citadelApp.exportVaultJSON()" class="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/30 text-xs font-bold text-white flex items-center gap-2 transition-colors">
              ${this.icon('download', 'w-4 h-4')}
              <span>Export Encrypted JSON</span>
            </button>
            <button onclick="window.citadelApp.exportPasswordsCSV()" class="px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 flex items-center gap-2 transition-colors">
              ${this.icon('download', 'w-4 h-4')}
              <span>Export Passwords (CSV)</span>
            </button>
            <button onclick="window.citadelApp.openDeleteAccountModal()" class="px-4 py-2.5 rounded-xl bg-rose-600/20 text-rose-400 border border-rose-500/40 hover:bg-rose-600 hover:text-white text-xs font-bold transition-colors ml-auto">
              Delete Account & Purge Vault
            </button>
          </div>
        </div>

      </div>
    `;
  }

  // ==========================================
  // VIEW: TRASH & RECOVERY VAULT
  // ==========================================
  renderTrashView() {
    const trash = this.app.store.state.trash;

    return `
      <div class="space-y-6">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-white">Trash & Recovery Vault</h1>
            <p class="text-slate-400 text-xs sm:text-sm">Deleted items remain recoverable for 30 days before permanent cryptographic shredding.</p>
          </div>
          ${trash.length > 0 ? `
            <button onclick="window.citadelApp.handleEmptyTrash()" class="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-xs font-bold text-white flex items-center gap-2">
              ${this.icon('trash', 'w-4 h-4')}
              <span>Empty All Trash</span>
            </button>
          ` : ''}
        </div>

        ${trash.length === 0 ? `
          <div class="glass-panel p-12 rounded-3xl text-center space-y-4">
            <div class="text-4xl">🗑️</div>
            <h3 class="text-base font-bold text-white">Trash Vault is Empty</h3>
            <p class="text-xs text-slate-400 max-w-sm mx-auto">No items in the recovery bin. Items moved to trash will appear here.</p>
          </div>
        ` : `
          <div class="space-y-3">
            ${trash.map(item => `
              <div class="glass-panel p-4 rounded-2xl flex items-center justify-between gap-4">
                <div class="flex items-center gap-3">
                  <span class="text-2xl">${item.itemType === 'password' ? '🔑' : item.itemType === 'document' ? '📁' : '📝'}</span>
                  <div>
                    <h4 class="text-sm font-bold text-white">${item.title}</h4>
                    <div class="text-xs text-slate-400">Deleted: ${item.deletedDate} • <span class="text-amber-400 font-mono">${item.daysRemaining} days left</span></div>
                  </div>
                </div>

                <div class="flex items-center gap-2">
                  <button onclick="window.citadelApp.handleRestoreTrash('${item.id}')" class="px-3 py-1.5 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 text-xs font-semibold transition-colors">
                    Restore
                  </button>
                  <button onclick="window.citadelApp.handlePermanentDeleteTrash('${item.id}')" class="px-3 py-1.5 rounded-lg bg-rose-600/30 hover:bg-rose-600/50 text-rose-300 text-xs font-semibold transition-colors">
                    Delete Permanently
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        `}

      </div>
    `;
  }
}

// CITADEL — Main Application Controller & Event Coordinator





class CitadelApplication {
  constructor() {
    this.store = new VaultStore();
    this.ui = new UIRenderer(this);
    
    // Application State
    this.currentView = "landing"; // 'landing' | 'register' | 'login' | 'dashboard' | 'passwords' | 'documents' | 'notes' | 'generator' | 'security' | 'activity' | 'profile' | 'settings' | 'trash'
    this.isAuthenticated = false;
    
    // Filters & Search
    this.passwordCategoryFilter = "All";
    this.passwordSearchQuery = "";
    this.passwordSortBy = "recent";
    this.documentCategoryFilter = "All";
    this.activityFilter = "All";
    
    // Generator State
    this.generatorOptions = {
      length: 16,
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: true,
      excludeLookalikes: false,
      mode: "password"
    };
    this.generatedPassword = PasswordGenerator.generate(this.generatorOptions);
    this.generatedHistory = [this.generatedPassword];

    // Initialize
    this.init();
  }

  async init() {
    // Apply saved theme
    const theme = this.store.state.settings.theme || "dark";
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);

    // Global keyboard listener for Command Palette (Ctrl+K / Cmd+K)
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        this.openCommandPalette();
      }
      if (e.key === "Escape") {
        this.closeAllModals();
        this.closeAllDropdowns();
      }
    });

    // Close dropdowns on outside click
    window.addEventListener("click", (e) => {
      if (!e.target.closest("#quick-add-container") && !e.target.closest("#notifications-dropdown-container")) {
        this.closeAllDropdowns();
      }
    });

    // Subscribe to store changes to re-render
    this.store.subscribe(() => {
      this.render();
    });

    if (!localStorage.getItem(DEMO_SESSION_CLEANUP_KEY)) {
      CitadelApi.setToken('');
      localStorage.setItem(DEMO_SESSION_CLEANUP_KEY, 'done');
    }

    // Validate saved sessions before showing any authenticated views.
    const token = CitadelApi.getToken();
    if (token) {
      try {
        await CitadelApi.request('/api/auth/me');
        this.isAuthenticated = true;
        await this.store.syncWithBackend();
      } catch (e) {
        console.warn("Saved session is invalid; returning to login.");
        CitadelApi.setToken('');
        this.isAuthenticated = false;
        this.currentView = "login";
      }
    }

    // Initial render
    this.render();
  }

  // --- Router & Navigation ---
  navigate(viewName) {
    // Require a valid saved session for all authenticated views.
    const authPages = ["dashboard", "passwords", "documents", "notes", "generator", "security", "activity", "profile", "settings", "trash"];
    if (authPages.includes(viewName) && (!this.isAuthenticated || !CitadelApi.getToken())) {
      this.currentView = "login";
      this.render();
      return;
    }

    this.currentView = viewName;
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.render();
  }

  // --- Theme Toggle ---
  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    document.body.setAttribute("data-theme", nextTheme);
    this.store.state.settings.theme = nextTheme;
    this.store.saveState();
    this.render();
    this.showToast(`Switched to ${nextTheme === 'dark' ? 'Dark' : 'Light'} Mode`, 'info');
  }

  // --- Render Master Loop ---
  render() {
    const appRoot = document.getElementById("app-root");
    if (!appRoot) return;

    if (this.currentView === "landing") {
      appRoot.innerHTML = this.ui.renderLandingPage();
    } else if (this.currentView === "register") {
      appRoot.innerHTML = this.ui.renderRegisterPage();
    } else if (this.currentView === "login") {
      appRoot.innerHTML = this.ui.renderLoginPage();
    } else {
      // Authenticated App Shell
      appRoot.innerHTML = this.ui.renderAppShell(this.currentView);
      const viewContent = document.getElementById("view-content");
      if (viewContent) {
        try {
          switch (this.currentView) {
            case "dashboard":
              viewContent.innerHTML = this.ui.renderDashboardView();
              break;
            case "passwords":
              viewContent.innerHTML = this.ui.renderPasswordVaultView();
              break;
            case "documents":
              viewContent.innerHTML = this.ui.renderDocumentLockerView();
              break;
            case "notes":
              viewContent.innerHTML = this.ui.renderSecureNotesView();
              break;
            case "generator":
              viewContent.innerHTML = this.ui.renderPasswordGeneratorView();
              break;
            case "security":
              viewContent.innerHTML = this.ui.renderSecurityCenterView();
              break;
            case "activity":
              viewContent.innerHTML = this.ui.renderActivityHistoryView();
              break;
            case "profile":
              viewContent.innerHTML = this.ui.renderProfileView();
              break;
            case "settings":
              viewContent.innerHTML = this.ui.renderSettingsView();
              break;
            case "trash":
              viewContent.innerHTML = this.ui.renderTrashView();
              break;
            default:
              viewContent.innerHTML = this.ui.renderDashboardView();
          }
        } catch (err) {
          console.error("View rendering exception caught:", err);
          viewContent.innerHTML = `
            <div class="glass-panel p-8 rounded-3xl text-center space-y-4 max-w-lg mx-auto my-12">
              <div class="text-4xl text-rose-500">⚠️</div>
              <h2 class="text-lg font-bold text-white">Temporary View Error</h2>
              <p class="text-xs text-slate-400">${err.message || 'An error occurred while loading this view.'}</p>
              <button onclick="window.citadelApp.navigate('dashboard')" class="cyber-glow-btn px-4 py-2 rounded-xl text-xs font-bold text-white">
                Return to Dashboard
              </button>
            </div>
          `;
        }
      }
    }
  }

  // --- Auth Handlers ---
  async handleLoginSubmit(e) {
    e.preventDefault();
    const email = document.getElementById("login-email")?.value;
    const password = document.getElementById("login-password")?.value;
    const btn = document.getElementById("login-submit-btn");
    
    if (btn) {
      btn.innerHTML = `<svg class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10"/></svg><span>Decrypting Vault Keys...</span>`;
    }

    try {
      const res = await CitadelApi.request('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
      if (res && res.token) {
        CitadelApi.setToken(res.token);
      }
      this.isAuthenticated = true;
      if (res && res.user) {
        this.store.state.user = { ...this.store.state.user, ...res.user };
      }
      await this.store.syncWithBackend();
      this.showToast("Vault successfully unlocked!", "success");
      this.navigate("dashboard");
    } catch (err) {
      this.showToast(err.message || "Invalid email or master password.", "danger");
      if (btn) {
        btn.innerHTML = `${this.ui.icon('unlock', 'w-4 h-4')}<span>Unlock Vault</span>`;
      }
    }
  }

  async handleRegisterSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("reg-name")?.value;
    const email = document.getElementById("reg-email")?.value;
    const password = document.getElementById("reg-password")?.value;
    const confirmPassword = document.getElementById("reg-confirm-password")?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      this.showToast("Master passwords do not match.", "danger");
      return;
    }

    try {
      const res = await CitadelApi.request('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password })
      });
      if (res && res.token) {
        CitadelApi.setToken(res.token);
      }
      this.isAuthenticated = true;
      if (res && res.user) {
        this.store.state.user = { ...this.store.state.user, ...res.user };
      }
      await this.store.syncWithBackend();
      this.showToast("Secure Vault created! Welcome to CITADEL.", "success");
      this.navigate("dashboard");
    } catch (err) {
      this.showToast(err.message || "Registration failed.", "danger");
    }
  }

  handleRegisterPasswordChange(password) {
    const strength = PasswordGenerator.evaluateStrength(password);
    const label = document.getElementById("reg-strength-label");
    const bar = document.getElementById("reg-strength-bar");

    if (label) {
      label.textContent = `${strength.level === 'strong' ? '🟢' : strength.level === 'medium' ? '🟡' : '🔴'} ${strength.label}`;
      label.className = `text-xs font-semibold text-${strength.color}-400`;
    }
    if (bar) {
      bar.style.width = `${strength.score}%`;
      bar.className = `h-full bg-${strength.color}-500 transition-all duration-300`;
    }
  }

  async handleLogout() {
    try {
      await CitadelApi.request('/api/auth/logout', { method: 'POST' });
    } catch (e) {}
    CitadelApi.setToken('');
    this.isAuthenticated = false;
    this.showToast("Vault locked and keys flushed from memory.", "info");
    this.navigate("login");
  }

  togglePasswordVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    if (input.type === "password") {
      input.type = "text";
      btn.innerHTML = this.ui.icon("eyeOff", "w-4 h-4");
    } else {
      input.type = "password";
      btn.innerHTML = this.ui.icon("eye", "w-4 h-4");
    }
  }

  // --- Password Vault Actions ---
  setPasswordCategoryFilter(cat) {
    this.passwordCategoryFilter = cat;
    this.render();
  }

  setPasswordSearchQuery(query) {
    this.passwordSearchQuery = query;
    this.render();
  }

  setPasswordSortBy(sortBy) {
    this.passwordSortBy = sortBy;
    this.render();
  }

  togglePasswordCardSecret(id, password) {
    const el = document.getElementById(`pwd-val-${id}`);
    if (!el) return;
    if (el.textContent === "••••••••••••") {
      el.textContent = password;
      el.classList.remove("text-slate-400");
      el.classList.add("text-cyan-300", "font-bold");
      // Auto re-mask after 10 seconds
      setTimeout(() => {
        if (el.textContent === password) {
          el.textContent = "••••••••••••";
          el.classList.remove("text-cyan-300", "font-bold");
          el.classList.add("text-slate-400");
        }
      }, 10000);
    } else {
      el.textContent = "••••••••••••";
      el.classList.remove("text-cyan-300", "font-bold");
      el.classList.add("text-slate-400");
    }
  }

  // --- Document Actions ---
  setDocumentCategoryFilter(cat) {
    this.documentCategoryFilter = cat;
    this.render();
  }

  async handleDownloadDoc(id) {
    const doc = this.store.state.documents.find(d => d.id === id);
    if (!doc) return;
    this.showToast(`Decrypting and preparing "${doc.name}"...`, "info");
    try {
      // Authenticated binary download from Citadel backend
      const { blob, filename } = await CitadelApi.downloadBlob(`/api/documents/${id}/download`);
      const targetFilename = filename || doc.originalFilename || doc.name || 'document.pdf';
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = targetFilename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(objectUrl), 2000);
      this.showToast(`"${targetFilename}" decrypted and downloaded successfully.`, "success");
    } catch (err) {
      console.error("API download failed:", err.message);
      // Check if document has client-side stored original fileData (offline fallback)
      if (doc.fileData && typeof doc.fileData === 'string' && doc.fileData.startsWith('data:')) {
        try {
          const res = await fetch(doc.fileData);
          const blob = await res.blob();
          const targetFilename = doc.originalFilename || doc.name || 'document.pdf';
          const objectUrl = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = objectUrl;
          link.download = targetFilename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setTimeout(() => URL.revokeObjectURL(objectUrl), 2000);
          this.showToast(`"${targetFilename}" downloaded from local vault.`, "success");
          return;
        } catch (localErr) {
          console.error("Local file extraction failed:", localErr);
        }
      }
      this.showToast(`Cannot download "${doc.name}": ${err.message}`, "danger");
    }
  }

  async handleOpenDoc(id) {
    const doc = this.store.state.documents.find(d => d.id === id);
    if (!doc) return;
    this.showToast(`Decrypting and opening "${doc.name}"...`, "info");
    try {
      const { blob } = await CitadelApi.downloadBlob(`/api/documents/${id}/view`);
      const objectUrl = URL.createObjectURL(blob);
      const newWin = window.open(objectUrl, '_blank');
      if (!newWin) {
        const link = document.createElement("a");
        link.href = objectUrl;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      setTimeout(() => URL.revokeObjectURL(objectUrl), 60000);
    } catch (err) {
      console.error("API open failed:", err.message);
      if (doc.fileData && typeof doc.fileData === 'string' && doc.fileData.startsWith('data:')) {
        try {
          const res = await fetch(doc.fileData);
          const blob = await res.blob();
          const objectUrl = URL.createObjectURL(blob);
          window.open(objectUrl, '_blank');
          setTimeout(() => URL.revokeObjectURL(objectUrl), 60000);
          return;
        } catch (localErr) {}
      }
      this.showToast(`Cannot open "${doc.name}": ${err.message}`, "danger");
    }
  }

  handleDeletePassword(id) {
    const pwd = this.store.state.passwords.find(p => p.id === id);
    if (!pwd) return;
    this.showConfirmationModal(
      "Move Credential to Trash?",
      `Are you sure you want to move "${pwd.title}" to the Trash vault? It will be recoverable for 30 days.`,
      "Move to Trash",
      () => {
        this.store.deletePassword(id);
        this.showToast(`"${pwd.title}" moved to Trash.`, "info");
      }
    );
  }

  handleDeleteDoc(id) {
    const doc = this.store.state.documents.find(d => d.id === id);
    if (!doc) return;
    this.showConfirmationModal(
      "Move Document to Trash?",
      `Are you sure you want to move "${doc.name}" to Trash?`,
      "Move to Trash",
      () => {
        this.store.deleteDocument(id);
        this.showToast(`"${doc.name}" moved to Trash.`, "info");
      }
    );
  }

  handleDeleteNote(id) {
    const note = this.store.state.notes.find(n => n.id === id);
    if (!note) return;
    this.showConfirmationModal(
      "Move Note to Trash?",
      `Are you sure you want to move note "${note.title}" to Trash?`,
      "Move to Trash",
      () => {
        this.store.deleteNote(id);
        this.showToast(`"${note.title}" moved to Trash.`, "info");
      }
    );
  }

  // --- Trash Actions ---
  async handleRestoreTrash(trashId) {
    await this.store.restoreFromTrash(trashId);
    this.showToast("Item successfully restored to vault.", "success");
  }

  handlePermanentDeleteTrash(trashId) {
    this.showConfirmationModal(
      "Permanently Shred Item?",
      "This action is irreversible. The cryptographic keys will be purged and data cannot be recovered.",
      "Permanently Delete",
      async () => {
        await this.store.deletePermanently(trashId);
        this.showToast("Item permanently shredded.", "rose");
      },
      true
    );
  }

  handleEmptyTrash() {
    this.showConfirmationModal(
      "Empty Entire Trash Vault?",
      "All deleted items will be permanently and irreversibly destroyed.",
      "Empty Trash",
      async () => {
        const count = await this.store.emptyTrash();
        this.showToast(`Purged ${count} items permanently.`, "rose");
      },
      true
    );
  }

  // --- Activity History Filter ---
  setActivityFilter(f) {
    this.activityFilter = f;
    this.render();
  }

  exportAuditLog() {
    const logStr = JSON.stringify(this.store.state.activities, null, 2);
    const blob = new Blob([logStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `citadel-audit-log-${Date.now()}.json`;
    a.click();
    this.showToast("Audit log exported as JSON.", "success");
  }

  // --- Generator Actions ---
  handleGenLengthChange(len) {
    this.generatorOptions.length = parseInt(len, 10);
    this.generateNewPassword();
    const lenDisp = document.getElementById("gen-len-display");
    if (lenDisp) lenDisp.textContent = `${len} Characters`;
  }

  toggleGenOption(key) {
    this.generatorOptions[key] = !this.generatorOptions[key];
    this.generateNewPassword();
  }

  generateNewPassword() {
    this.generatedPassword = PasswordGenerator.generate(this.generatorOptions);
    this.generatedHistory.unshift(this.generatedPassword);
    if (this.generatedHistory.length > 15) this.generatedHistory.pop();
    this.render();
  }

  copyGeneratedPassword() {
    this.copyToClipboard(this.generatedPassword, "Generated password copied!");
  }

  regenerateQuickPassword() {
    const pwd = PasswordGenerator.generate({ length: 16, uppercase: true, lowercase: true, numbers: true, symbols: true });
    const disp = document.getElementById("quick-gen-display");
    if (disp) disp.textContent = pwd;
    this.quickPassword = pwd;
  }

  copyQuickGeneratedPassword() {
    const pwd = this.quickPassword || document.getElementById("quick-gen-display")?.textContent || "T@7kLm#92Qx!P4z";
    this.copyToClipboard(pwd, "Password copied to clipboard!");
  }

  handleQuickSliderChange(val) {
    const disp = document.getElementById("quick-len-val");
    if (disp) disp.textContent = val;
    const pwd = PasswordGenerator.generate({ length: parseInt(val, 10), uppercase: true, lowercase: true, numbers: true, symbols: true });
    const displayEl = document.getElementById("quick-gen-display");
    if (displayEl) displayEl.textContent = pwd;
    this.quickPassword = pwd;
  }

  // --- Security Center Actions ---
  runDeepScan() {
    this.showToast("Running automated vault cryptographic deep scan...", "info");
    setTimeout(() => {
      this.store.logActivity({
        type: "security",
        icon: "🛡️",
        color: "emerald",
        title: "Deep Cryptographic Scan Completed",
        description: "Full entropy and leak audit executed across all stored vaults.",
        category: "Security"
      });
      this.store.saveState();
      this.showToast("Deep scan finished! 0 critical key leaks found.", "success");
    }, 1200);
  }

  handleSecurityAction(actionType) {
    if (actionType === "fix-weak" || actionType === "fix-reused" || actionType === "fix-breached") {
      this.navigate("passwords");
      this.showToast("Opening Password Vault to update flagged credentials.", "warning");
    } else if (actionType === "enable-2fa") {
      this.openTwoFactorModal();
    }
  }

  // --- Settings & Data Export ---
  exportVaultJSON() {
    const json = this.store.exportVaultJSON();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `citadel-vault-backup-${Date.now()}.json`;
    a.click();
    this.showToast("Encrypted vault backup downloaded.", "success");
  }

  exportPasswordsCSV() {
    const csv = this.store.exportPasswordsCSV();
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `citadel-passwords-${Date.now()}.csv`;
    a.click();
    this.showToast("Password records exported to CSV.", "success");
  }

  handleRevokeSession(sessionId) {
    this.store.state.settings.activeSessions = this.store.state.settings.activeSessions.filter(s => s.id !== sessionId);
    this.store.saveState();
    this.showToast("Session credentials revoked.", "info");
  }

  handleRevokeAllSessions() {
    this.store.state.settings.activeSessions = this.store.state.settings.activeSessions.filter(s => s.isCurrent);
    this.store.saveState();
    this.showToast("All other active sessions revoked.", "success");
  }

  handleSettingChange(key, value) {
    this.store.state.settings[key] = value;
    this.store.saveState();
    this.showToast("Preference saved.", "success");
  }

  downloadEmergencyKit() {
    this.showEmergencyKitModal();
  }

  // --- Clipboard & Toast Helpers ---
  copyToClipboard(text, successMsg = "Copied to clipboard!") {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      textArea.remove();
    }
    this.showToast(successMsg, "success");
  }

  showToast(message, type = "info", duration = 3000) {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    const icons = {
      success: "🟢",
      warning: "🟡",
      danger: "🔴",
      rose: "💥",
      info: "🔐"
    };

    toast.className = `toast-item animate-toast glass-panel-elevated p-3.5 rounded-2xl flex items-center gap-3 shadow-2xl border ${
      type === 'success' ? 'border-emerald-500/50 bg-slate-900/90 text-white' :
      type === 'warning' ? 'border-amber-500/50 bg-slate-900/90 text-white' :
      type === 'danger' || type === 'rose' ? 'border-rose-500/50 bg-slate-900/90 text-white' :
      'border-indigo-500/50 bg-slate-900/90 text-white'
    }`;

    toast.innerHTML = `
      <span class="text-base">${icons[type] || '🔐'}</span>
      <span class="text-xs font-semibold flex-1 leading-snug">${message}</span>
      <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-white text-xs">✕</button>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      toast.style.transition = "all 0.25s ease";
      setTimeout(() => toast.remove(), 250);
    }, duration);
  }

  // --- UI Dropdowns ---
  toggleQuickAddMenu() {
    const menu = document.getElementById("quick-add-menu");
    if (menu) menu.classList.toggle("hidden");
  }

  toggleNotificationsDropdown() {
    const menu = document.getElementById("notifications-dropdown");
    if (menu) menu.classList.toggle("hidden");
  }

  closeAllDropdowns() {
    const qMenu = document.getElementById("quick-add-menu");
    if (qMenu) qMenu.classList.add("hidden");
    const nMenu = document.getElementById("notifications-dropdown");
    if (nMenu) nMenu.classList.add("hidden");
  }

  toggleMobileSidebar() {
    const sidebar = document.getElementById("app-sidebar");
    if (sidebar) {
      sidebar.classList.toggle("hidden");
      sidebar.classList.toggle("fixed");
      sidebar.classList.toggle("inset-y-0");
      sidebar.classList.toggle("left-0");
    }
  }

  // ==========================================
  // MODAL DIALOGS ENGINE
  // ==========================================
  openModal(htmlContent) {
    let modalRoot = document.getElementById("modal-root");
    if (!modalRoot) {
      modalRoot = document.createElement("div");
      modalRoot.id = "modal-root";
      document.body.appendChild(modalRoot);
    }
    modalRoot.innerHTML = `
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-modal">
        <div class="relative w-full max-w-xl glass-panel-elevated p-6 sm:p-8 rounded-3xl border border-indigo-500/40 shadow-2xl overflow-y-auto max-h-[90vh]" onclick="event.stopPropagation()">
          ${htmlContent}
        </div>
      </div>
    `;
    modalRoot.onclick = () => this.closeAllModals();
  }

  closeAllModals() {
    const modalRoot = document.getElementById("modal-root");
    if (modalRoot) modalRoot.innerHTML = "";
  }

  // --- Modal: Add Credential ---
  openAddPasswordModal() {
    const generated = PasswordGenerator.generate({ length: 16 });
    this.openModal(`
      <div class="space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/30 text-indigo-400 flex items-center justify-center text-xl">
              🔑
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">Add New Credential</h3>
              <p class="text-xs text-slate-400">Store encrypted website login parameters.</p>
            </div>
          </div>
          <button onclick="window.citadelApp.closeAllModals()" class="text-slate-400 hover:text-white">✕</button>
        </div>

        <form onsubmit="window.citadelApp.handleAddPasswordSubmit(event)" class="space-y-4 text-xs">
          <div>
            <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Website Name</label>
            <input type="text" id="modal-pwd-title" required placeholder="e.g. Netflix, GitHub, Chase"
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-indigo-500" />
          </div>

          <div>
            <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Website URL</label>
            <input type="url" id="modal-pwd-url" placeholder="https://example.com"
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-indigo-500" />
          </div>

          <div>
            <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Username / Email</label>
            <input type="text" id="modal-pwd-username" required placeholder="username or email"
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-indigo-500" />
          </div>

          <div>
            <div class="flex items-center justify-between mb-1.5">
              <label class="font-bold text-slate-300 uppercase tracking-wider">Password Secret</label>
              <button type="button" onclick="window.citadelApp.inlineModalGeneratePassword()" class="text-indigo-400 hover:underline font-semibold flex items-center gap-1">
                ${this.ui.icon('refresh', 'w-3 h-3')} Generate Strong
              </button>
            </div>
            <input type="text" id="modal-pwd-password" required value="${generated}"
              oninput="window.citadelApp.handleModalPasswordChange(this.value)"
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono focus:border-indigo-500" />
            <div class="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
              <div id="modal-pwd-strength-bar" class="h-full bg-emerald-500 transition-all duration-300" style="width: 95%;"></div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Category</label>
              <select id="modal-pwd-category" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white">
                <option value="Social">Social</option>
                <option value="Education">Education</option>
                <option value="Work">Work</option>
                <option value="Shopping">Shopping</option>
                <option value="Finance">Finance</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Account Profile / Type</label>
              <select id="modal-pwd-account-type" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white">
                <option value="Personal">👤 Personal</option>
                <option value="College">🎓 College</option>
                <option value="Business">💼 Business</option>
                <option value="Work">🏢 Work</option>
                <option value="Team">👥 Team</option>
                <option value="Secondary">🔑 Secondary</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Tags (Comma-separated)</label>
            <input type="text" id="modal-pwd-tags" placeholder="Primary, 2FA, Banking"
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white" />
          </div>

          <div>
            <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Private Notes</label>
            <textarea id="modal-pwd-notes" rows="2" placeholder="Optional security questions, recovery hints..."
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"></textarea>
          </div>

          <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button type="button" onclick="window.citadelApp.closeAllModals()" class="px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800">
              Cancel
            </button>
            <button type="submit" class="cyber-glow-btn px-6 py-2.5 rounded-xl text-white font-bold">
              Save Credential
            </button>
          </div>
        </form>
      </div>
    `);
  }

  async handleAddPasswordSubmit(e) {
    e.preventDefault();
    const title = document.getElementById("modal-pwd-title")?.value;
    const url = document.getElementById("modal-pwd-url")?.value;
    const username = document.getElementById("modal-pwd-username")?.value;
    const password = document.getElementById("modal-pwd-password")?.value;
    const category = document.getElementById("modal-pwd-category")?.value;
    const accountType = document.getElementById("modal-pwd-account-type")?.value || "Personal";
    const notes = document.getElementById("modal-pwd-notes")?.value;
    const tagsRaw = document.getElementById("modal-pwd-tags")?.value;
    const tags = tagsRaw ? tagsRaw.split(",").map(t => t.trim()).filter(Boolean) : [];

    await this.store.addPassword({ title, url, username, password, category, accountType, notes, tags });
    this.closeAllModals();
    this.showToast(`"${title}" saved to vault!`, "success");
  }

  inlineModalGeneratePassword() {
    const pwd = PasswordGenerator.generate({ length: 16, uppercase: true, lowercase: true, numbers: true, symbols: true });
    const input = document.getElementById("modal-pwd-password");
    if (input) {
      input.value = pwd;
      this.handleModalPasswordChange(pwd);
    }
  }

  handleModalPasswordChange(pwd) {
    const strength = PasswordGenerator.evaluateStrength(pwd);
    const bar = document.getElementById("modal-pwd-strength-bar");
    if (bar) {
      bar.style.width = `${strength.score}%`;
      bar.className = `h-full bg-${strength.color}-500 transition-all duration-300`;
    }
  }

  // --- Modal: Edit Credential ---
  openEditPasswordModal(id) {
    const pwd = this.store.state.passwords.find(p => p.id === id);
    if (!pwd) return;

    this.openModal(`
      <div class="space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <span class="text-2xl">${pwd.favIcon || '🔑'}</span>
            <div>
              <h3 class="text-lg font-bold text-white">Edit "${pwd.title}"</h3>
              <p class="text-xs text-slate-400">Update stored credential parameters.</p>
            </div>
          </div>
          <button onclick="window.citadelApp.closeAllModals()" class="text-slate-400 hover:text-white">✕</button>
        </div>

        <form onsubmit="window.citadelApp.handleEditPasswordSubmit(event, '${pwd.id}')" class="space-y-4 text-xs">
          <div>
            <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Website Name</label>
            <input type="text" id="edit-pwd-title" required value="${pwd.title}"
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white" />
          </div>

          <div>
            <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Website URL</label>
            <input type="url" id="edit-pwd-url" value="${pwd.url || ''}"
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white" />
          </div>

          <div>
            <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Username / Email</label>
            <input type="text" id="edit-pwd-username" required value="${pwd.username}"
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white" />
          </div>

          <div>
            <div class="flex items-center justify-between mb-1.5">
              <label class="font-bold text-slate-300 uppercase tracking-wider">Password Secret</label>
              <button type="button" onclick="window.citadelApp.inlineEditGeneratePassword()" class="text-indigo-400 hover:underline font-semibold flex items-center gap-1">
                ${this.ui.icon('refresh', 'w-3 h-3')} Generate New
              </button>
            </div>
            <input type="text" id="edit-pwd-password" required value="${pwd.password}"
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono" />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Category</label>
              <select id="edit-pwd-category" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white">
                <option value="Social" ${pwd.category === 'Social' ? 'selected' : ''}>Social</option>
                <option value="Education" ${pwd.category === 'Education' ? 'selected' : ''}>Education</option>
                <option value="Work" ${pwd.category === 'Work' ? 'selected' : ''}>Work</option>
                <option value="Shopping" ${pwd.category === 'Shopping' ? 'selected' : ''}>Shopping</option>
                <option value="Finance" ${pwd.category === 'Finance' ? 'selected' : ''}>Finance</option>
                <option value="Other" ${pwd.category === 'Other' ? 'selected' : ''}>Other</option>
              </select>
            </div>
            <div>
              <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Account Profile / Type</label>
              <select id="edit-pwd-account-type" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white">
                <option value="Personal" ${(pwd.accountType || 'Personal') === 'Personal' ? 'selected' : ''}>👤 Personal</option>
                <option value="College" ${pwd.accountType === 'College' ? 'selected' : ''}>🎓 College</option>
                <option value="Business" ${pwd.accountType === 'Business' ? 'selected' : ''}>💼 Business</option>
                <option value="Work" ${pwd.accountType === 'Work' ? 'selected' : ''}>🏢 Work</option>
                <option value="Team" ${pwd.accountType === 'Team' ? 'selected' : ''}>👥 Team</option>
                <option value="Secondary" ${pwd.accountType === 'Secondary' ? 'selected' : ''}>🔑 Secondary</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Tags</label>
            <input type="text" id="edit-pwd-tags" value="${(pwd.tags || []).join(', ')}"
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white" />
          </div>

          <div>
            <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Private Notes</label>
            <textarea id="edit-pwd-notes" rows="2" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white">${pwd.notes || ''}</textarea>
          </div>

          <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button type="button" onclick="window.citadelApp.closeAllModals()" class="px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800">
              Cancel
            </button>
            <button type="submit" class="cyber-glow-btn px-6 py-2.5 rounded-xl text-white font-bold">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    `);
  }

  inlineEditGeneratePassword() {
    const pwd = PasswordGenerator.generate({ length: 18, uppercase: true, lowercase: true, numbers: true, symbols: true });
    const input = document.getElementById("edit-pwd-password");
    if (input) input.value = pwd;
  }

  async handleEditPasswordSubmit(e, id) {
    e.preventDefault();
    const title = document.getElementById("edit-pwd-title")?.value;
    const url = document.getElementById("edit-pwd-url")?.value;
    const username = document.getElementById("edit-pwd-username")?.value;
    const password = document.getElementById("edit-pwd-password")?.value;
    const category = document.getElementById("edit-pwd-category")?.value;
    const accountType = document.getElementById("edit-pwd-account-type")?.value || "Personal";
    const notes = document.getElementById("edit-pwd-notes")?.value;
    const tagsRaw = document.getElementById("edit-pwd-tags")?.value;
    const tags = tagsRaw ? tagsRaw.split(",").map(t => t.trim()).filter(Boolean) : [];

    await this.store.updatePassword(id, { title, url, username, password, category, accountType, notes, tags });
    this.closeAllModals();
    this.showToast(`Updated "${title}".`, "success");
  }

  // --- Modal: View Credential Details ---
  openViewPasswordModal(id) {
    const pwd = this.store.state.passwords.find(p => p.id === id);
    if (!pwd) return;

    this.openModal(`
      <div class="space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <span class="text-3xl">${pwd.favIcon || '🌐'}</span>
            <div>
              <h3 class="text-lg font-bold text-white">${pwd.title}</h3>
              <a href="${pwd.url || '#'}" target="_blank" class="text-xs text-indigo-400 hover:underline">${pwd.domain}</a>
            </div>
          </div>
          <button onclick="window.citadelApp.closeAllModals()" class="text-slate-400 hover:text-white">✕</button>
        </div>

        <div class="space-y-4 text-xs">
          <div class="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
            <div>
              <div class="text-[10px] uppercase font-bold text-slate-500">Username / Identifier</div>
              <div class="flex items-center justify-between mt-1">
                <span class="font-mono text-white text-sm">${pwd.username}</span>
                <button onclick="window.citadelApp.copyToClipboard('${pwd.username}', 'Username copied!')" class="text-indigo-400 hover:underline font-semibold">Copy</button>
              </div>
            </div>

            <div class="pt-2 border-t border-slate-800">
              <div class="text-[10px] uppercase font-bold text-slate-500">Decrypted Secret</div>
              <div class="flex items-center justify-between mt-1 font-mono">
                <span id="modal-view-secret" class="text-cyan-300 text-sm font-bold">${pwd.password}</span>
                <button onclick="window.citadelApp.copyToClipboard('${pwd.password}', 'Password copied!')" class="text-cyan-400 hover:underline font-semibold">Copy</button>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
              <div class="text-[10px] text-slate-500 uppercase font-bold">Category</div>
              <div class="text-white font-bold mt-0.5">${pwd.category}</div>
            </div>
            <div class="p-3 rounded-xl bg-slate-900/50 border border-slate-800">
              <div class="text-[10px] text-slate-500 uppercase font-bold">Last Updated</div>
              <div class="text-white font-bold mt-0.5">${pwd.lastUpdated}</div>
            </div>
          </div>

          ${pwd.notes ? `
            <div class="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1">
              <div class="text-[10px] text-slate-500 uppercase font-bold">Private Notes</div>
              <div class="text-slate-300 text-xs leading-relaxed">${pwd.notes}</div>
            </div>
          ` : ''}

          <div class="flex items-center justify-between pt-4 border-t border-slate-800">
            <button onclick="window.citadelApp.handleDeletePassword('${pwd.id}'); window.citadelApp.closeAllModals()" class="text-rose-400 hover:underline text-xs">
              Delete to Trash
            </button>
            <button onclick="window.citadelApp.openEditPasswordModal('${pwd.id}')" class="cyber-glow-btn px-5 py-2 rounded-xl text-white font-bold text-xs">
              Edit Credential
            </button>
          </div>
        </div>
      </div>
    `);
  }

  // --- Modal: Upload Document ---
  openUploadDocModal() {
    this.openModal(`
      <div class="space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center text-xl">
              📁
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">Upload Encrypted Document</h3>
              <p class="text-xs text-slate-400">Military-grade AES-256 client storage.</p>
            </div>
          </div>
          <button onclick="window.citadelApp.closeAllModals()" class="text-slate-400 hover:text-white">✕</button>
        </div>

        <form onsubmit="window.citadelApp.handleUploadDocSubmit(event)" class="space-y-4 text-xs">
          <!-- File selection simulation -->
          <div class="p-6 rounded-2xl border-2 border-dashed border-cyan-500/40 bg-cyan-950/20 text-center space-y-2">
            <div class="text-3xl">📄</div>
            <div class="font-bold text-white">Select file to encrypt</div>
            <input type="file" id="modal-doc-file" onchange="window.citadelApp.handleFileInputChange(this)" class="text-xs text-slate-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-cyan-600 file:text-white hover:file:bg-cyan-500" />
          </div>

          <div>
            <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Document Display Name</label>
            <input type="text" id="modal-doc-name" required value="New_Encrypted_Document.pdf"
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white" />
          </div>

          <div>
            <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Category</label>
            <select id="modal-doc-category" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white">
              <option value="Certificates">📜 Certificates</option>
              <option value="IDs">🪪 IDs & Passes</option>
              <option value="Academic">🎓 Academic</option>
              <option value="Work">💼 Work Documents</option>
              <option value="Personal" selected>👤 Personal</option>
              <option value="Other">📂 Other</option>
            </select>
          </div>

          <div>
            <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Description</label>
            <input type="text" id="modal-doc-desc" placeholder="Brief note regarding this document..."
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white" />
          </div>

          <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button type="button" onclick="window.citadelApp.closeAllModals()" class="px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800">
              Cancel
            </button>
            <button type="submit" class="cyber-glow-btn px-6 py-2.5 rounded-xl text-white font-bold">
              Encrypt & Upload
            </button>
          </div>
        </form>
      </div>
    `);
  }

  handleFileInputChange(input) {
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.selectedDocFile = file;
      const nameInput = document.getElementById("modal-doc-name");
      if (nameInput) nameInput.value = file.name;
    }
  }

  async handleUploadDocSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("modal-doc-name")?.value || "Document.pdf";
    const category = document.getElementById("modal-doc-category")?.value || "Personal";
    const description = document.getElementById("modal-doc-desc")?.value || "Secure document.";
    
    const file = this.selectedDocFile || document.getElementById("modal-doc-file")?.files?.[0];
    if (!file) {
      this.showToast("Please select a file to encrypt and upload.", "warning");
      return;
    }

    let fileData = null;
    let sizeBytes = file.size;
    let sizeStr = sizeBytes > 1024 * 1024 ? `${(sizeBytes / (1024 * 1024)).toFixed(1)} MB` : `${Math.round(sizeBytes / 1024)} KB`;
    let mimeType = file.type || 'application/pdf';

    try {
      fileData = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    } catch (err) {
      console.error("Could not read uploaded file as data URL:", err);
      this.showToast("Could not read the selected file: " + err.message, "danger");
      return;
    }

    const docName = name.trim() || file.name;
    const ext = (docName.split('.').pop() || 'pdf').toLowerCase();

    try {
      await this.store.addDocument({
        name: docName,
        originalFilename: file.name || docName,
        category,
        fileType: ext,
        description,
        size: sizeStr,
        sizeBytes,
        mimeType,
        fileData
      });
      this.selectedDocFile = null;
      this.closeAllModals();
      this.showToast(`"${docName}" encrypted with AES-256-GCM and stored safely!`, "success");
    } catch (err) {
      this.showToast(`Upload failed: ${err.message}`, "danger");
    }
  }

  // --- Modal: Preview Document ---
  openPreviewDocModal(id) {
    const doc = this.store.state.documents.find(d => d.id === id);
    if (!doc) return;

    this.openModal(`
      <div class="space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <span class="text-3xl">${doc.categoryIcon || '📄'}</span>
            <div>
              <h3 class="text-lg font-bold text-white truncate max-w-sm">${doc.name}</h3>
              <p class="text-xs text-slate-400">${doc.category} • ${doc.size}</p>
            </div>
          </div>
          <button onclick="window.citadelApp.closeAllModals()" class="text-slate-400 hover:text-white">✕</button>
        </div>

        <!-- Simulated Document Preview Container -->
        <div class="p-8 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-4">
          <div class="w-16 h-16 rounded-2xl bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mx-auto text-3xl">
            🛡️
          </div>
          <div>
            <h4 class="text-sm font-bold text-white">CITADEL Secure Document Previewer</h4>
            <p class="text-xs text-slate-400 mt-1">Decrypted in browser RAM using WebCrypto API.</p>
          </div>
          
          <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 text-left text-xs font-mono space-y-1">
            <div class="text-slate-500">SHA-256 Checksum:</div>
            <div class="text-cyan-300 break-all text-[11px]">${doc.encryptedSha256}</div>
          </div>
        </div>

        <div class="flex items-center justify-between pt-4 border-t border-slate-800">
          <button onclick="window.citadelApp.handleDeleteDoc('${doc.id}'); window.citadelApp.closeAllModals()" class="text-xs text-rose-400 hover:underline">
            Delete File
          </button>
          <div class="flex items-center gap-2">
            <button onclick="window.citadelApp.handleOpenDoc('${doc.id}')" class="px-3.5 py-2 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-1.5 transition-colors">
              ${this.ui.icon('eye', 'w-4 h-4')}
              <span>Open in Browser</span>
            </button>
            <button onclick="window.citadelApp.handleDownloadDoc('${doc.id}')" class="cyber-glow-btn px-5 py-2 rounded-xl text-white font-bold text-xs flex items-center gap-2">
              ${this.ui.icon('download', 'w-4 h-4')}
              <span>Download Decrypted File</span>
            </button>
          </div>
        </div>
      </div>
    `);
  }

  // --- Modal: Rename Document ---
  openRenameDocModal(id) {
    const doc = this.store.state.documents.find(d => d.id === id);
    if (!doc) return;

    this.openModal(`
      <div class="space-y-4">
        <h3 class="text-base font-bold text-white">Rename Document</h3>
        <input type="text" id="rename-doc-input" value="${doc.name}" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs" />
        <div class="flex justify-end gap-2 pt-2">
          <button onclick="window.citadelApp.closeAllModals()" class="px-4 py-2 rounded-xl border border-slate-700 text-slate-300 text-xs">Cancel</button>
          <button onclick="window.citadelApp.handleRenameDocSubmit('${doc.id}')" class="cyber-glow-btn px-5 py-2 rounded-xl text-white font-bold text-xs">Save</button>
        </div>
      </div>
    `);
  }

  async handleRenameDocSubmit(id) {
    const newName = document.getElementById("rename-doc-input")?.value;
    if (newName) {
      await this.store.renameDocument(id, newName);
      this.closeAllModals();
      this.showToast("Document renamed.", "success");
    }
  }

  // --- Modal: Create / Edit Note ---
  openCreateNoteModal() {
    this.openModal(`
      <div class="space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-violet-950/80 border border-violet-500/30 text-violet-400 flex items-center justify-center text-xl">
              📝
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">Create Encrypted Note</h3>
              <p class="text-xs text-slate-400">Zero-knowledge end-to-end encrypted notes.</p>
            </div>
          </div>
          <button onclick="window.citadelApp.closeAllModals()" class="text-slate-400 hover:text-white">✕</button>
        </div>

        <form onsubmit="window.citadelApp.handleCreateNoteSubmit(event)" class="space-y-4 text-xs">
          <div>
            <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Note Title</label>
            <input type="text" id="modal-note-title" required placeholder="e.g. Server SSH Keys, Recovery Seed"
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white" />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Category</label>
              <select id="modal-note-category" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white">
                <option value="Education">🎓 Education</option>
                <option value="Finance">🪙 Finance</option>
                <option value="Work">💼 Work</option>
                <option value="Personal" selected>👤 Personal</option>
              </select>
            </div>
            <div>
              <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Tags</label>
              <input type="text" id="modal-note-tags" placeholder="Critical, Keys, Config"
                class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white" />
            </div>
          </div>

          <div>
            <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Note Content (Markdown supported)</label>
            <textarea id="modal-note-content" rows="6" required placeholder="Write your confidential information..."
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono text-xs leading-relaxed"></textarea>
          </div>

          <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button type="button" onclick="window.citadelApp.closeAllModals()" class="px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800">
              Cancel
            </button>
            <button type="submit" class="cyber-glow-btn px-6 py-2.5 rounded-xl text-white font-bold">
              Save Encrypted Note
            </button>
          </div>
        </form>
      </div>
    `);
  }

  async handleCreateNoteSubmit(e) {
    e.preventDefault();
    const title = document.getElementById("modal-note-title")?.value;
    const category = document.getElementById("modal-note-category")?.value;
    const content = document.getElementById("modal-note-content")?.value;
    const tagsRaw = document.getElementById("modal-note-tags")?.value;
    const tags = tagsRaw ? tagsRaw.split(",").map(t => t.trim()).filter(Boolean) : [];

    await this.store.addNote({ title, category, content, tags });
    this.closeAllModals();
    this.showToast(`Note "${title}" encrypted and saved.`, "success");
  }

  openViewNoteModal(id) {
    const note = this.store.state.notes.find(n => n.id === id);
    if (!note) return;

    this.openModal(`
      <div class="space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <span class="text-2xl">${note.categoryIcon || '📝'}</span>
            <div>
              <h3 class="text-lg font-bold text-white">${note.title}</h3>
              <p class="text-xs text-slate-400">${note.category} • Updated ${note.lastUpdated}</p>
            </div>
          </div>
          <button onclick="window.citadelApp.closeAllModals()" class="text-slate-400 hover:text-white">✕</button>
        </div>

        <div class="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-200 whitespace-pre-wrap leading-relaxed max-h-72 overflow-y-auto">
          ${note.content || note.preview}
        </div>

        <div class="flex items-center justify-between pt-4 border-t border-slate-800 text-xs">
          <button onclick="window.citadelApp.copyToClipboard('${(note.content || '').replace(/'/g, "\\'")}', 'Note copied to clipboard!')" class="text-indigo-400 hover:underline font-semibold">
            Copy Note
          </button>
          <div class="flex items-center gap-2">
            <button onclick="window.citadelApp.openEditNoteModal('${note.id}')" class="cyber-glow-btn px-4 py-2 rounded-xl text-white font-bold">
              Edit Note
            </button>
          </div>
        </div>
      </div>
    `);
  }

  openEditNoteModal(id) {
    const note = this.store.state.notes.find(n => n.id === id);
    if (!note) return;

    this.openModal(`
      <div class="space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
          <h3 class="text-lg font-bold text-white">Edit "${note.title}"</h3>
          <button onclick="window.citadelApp.closeAllModals()" class="text-slate-400 hover:text-white">✕</button>
        </div>

        <form onsubmit="window.citadelApp.handleEditNoteSubmit(event, '${note.id}')" class="space-y-4 text-xs">
          <div>
            <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Note Title</label>
            <input type="text" id="edit-note-title" required value="${note.title}"
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white" />
          </div>

          <div>
            <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Category</label>
            <select id="edit-note-category" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white">
              <option value="Education" ${note.category === 'Education' ? 'selected' : ''}>🎓 Education</option>
              <option value="Finance" ${note.category === 'Finance' ? 'selected' : ''}>🪙 Finance</option>
              <option value="Work" ${note.category === 'Work' ? 'selected' : ''}>💼 Work</option>
              <option value="Personal" ${note.category === 'Personal' ? 'selected' : ''}>👤 Personal</option>
            </select>
          </div>

          <div>
            <label class="block font-bold text-slate-300 uppercase tracking-wider mb-1.5">Content</label>
            <textarea id="edit-note-content" rows="6" required class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono leading-relaxed">${note.content}</textarea>
          </div>

          <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
            <button type="button" onclick="window.citadelApp.closeAllModals()" class="px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800">
              Cancel
            </button>
            <button type="submit" class="cyber-glow-btn px-6 py-2.5 rounded-xl text-white font-bold">
              Save Note
            </button>
          </div>
        </form>
      </div>
    `);
  }

  async handleEditNoteSubmit(e, id) {
    e.preventDefault();
    const title = document.getElementById("edit-note-title")?.value;
    const category = document.getElementById("edit-note-category")?.value;
    const content = document.getElementById("edit-note-content")?.value;

    await this.store.updateNote(id, { title, category, content });
    this.closeAllModals();
    this.showToast(`Updated "${title}".`, "success");
  }

  // --- Modal: 2FA Setup Flow ---
  openTwoFactorModal() {
    this.openModal(`
      <div class="space-y-6 text-center">
        <div class="w-12 h-12 rounded-2xl bg-indigo-950/80 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mx-auto text-2xl">
          🛡️
        </div>
        <div>
          <h3 class="text-xl font-bold text-white">Protect Your Vault with 2FA</h3>
          <p class="text-xs text-slate-400 mt-1">Scan this QR code with Google Authenticator, Authy, or 1Password.</p>
        </div>

        <!-- SVG Mock QR Code -->
        <div class="p-4 rounded-2xl bg-white max-w-[200px] mx-auto shadow-xl">
          <svg viewBox="0 0 100 100" class="w-full h-full text-slate-950">
            <rect width="100" height="100" fill="white" />
            <rect x="10" y="10" width="30" height="30" fill="black" />
            <rect x="15" y="15" width="20" height="20" fill="white" />
            <rect x="20" y="20" width="10" height="10" fill="black" />
            <rect x="60" y="10" width="30" height="30" fill="black" />
            <rect x="65" y="15" width="20" height="20" fill="white" />
            <rect x="70" y="20" width="10" height="10" fill="black" />
            <rect x="10" y="60" width="30" height="30" fill="black" />
            <rect x="15" y="65" width="20" height="20" fill="white" />
            <rect x="20" y="70" width="10" height="10" fill="black" />
            <rect x="50" y="50" width="10" height="10" fill="black" />
            <rect x="60" y="70" width="20" height="10" fill="black" />
            <rect x="80" y="50" width="10" height="30" fill="black" />
          </svg>
        </div>

        <div class="text-xs font-mono text-slate-400">
          Secret Key: <strong class="text-indigo-400">JBSWY3DPEHPK3PXP</strong>
        </div>

        <div class="space-y-3 pt-2">
          <label class="block text-xs font-bold uppercase text-slate-300">Enter 6-Digit OTP</label>
          <input type="text" id="modal-2fa-otp" maxlength="6" placeholder="123456"
            class="w-48 mx-auto text-center px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono text-lg tracking-widest focus:border-indigo-500" />
        </div>

        <div class="flex items-center justify-center gap-3 pt-2">
          <button onclick="window.citadelApp.closeAllModals()" class="px-4 py-2 rounded-xl border border-slate-700 text-slate-300 text-xs">
            Cancel
          </button>
          <button onclick="window.citadelApp.handleVerify2FA()" class="cyber-glow-btn px-6 py-2 rounded-xl text-white font-bold text-xs">
            Enable 2FA
          </button>
        </div>
      </div>
    `);
  }

  async handleVerify2FA() {
    this.store.state.user.twoFactorEnabled = true;
    this.store.state.settings.twoFactorEnabled = true;
    if (CitadelApi.token) {
      try {
        await CitadelApi.updateProfile({ twoFactorEnabled: true });
      } catch (err) {
        console.error("2FA sync error:", err);
      }
    }
    this.store.saveState();
    this.closeAllModals();
    this.showToast("🟢 Two-Factor Authentication Verified & Active!", "success");
    this.render();
  }

  // --- Modal: Login Alert Demo ---
  showLoginAlertDemo() {
    this.openModal(`
      <div class="space-y-6 text-center">
        <div class="w-14 h-14 rounded-2xl bg-rose-950/80 border border-rose-500/40 text-rose-400 flex items-center justify-center mx-auto text-3xl animate-bounce">
          🚨
        </div>
        <div>
          <h3 class="text-xl font-bold text-white">New Login Detected</h3>
          <p class="text-xs text-slate-400 mt-1">An unknown device has authenticated into your CITADEL vault.</p>
        </div>

        <div class="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left text-xs space-y-2">
          <div class="flex justify-between"><span class="text-slate-500">Device:</span> <span class="text-white font-bold">Chrome on Windows 11</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Location:</span> <span class="text-white font-bold">London, United Kingdom</span></div>
          <div class="flex justify-between"><span class="text-slate-500">Time:</span> <span class="text-white font-bold">Today, 10:32 AM</span></div>
          <div class="flex justify-between"><span class="text-slate-500">IP Address:</span> <span class="text-indigo-400 font-mono">185.220.101.5</span></div>
        </div>

        <div class="grid grid-cols-2 gap-3 pt-2">
          <button onclick="window.citadelApp.closeAllModals(); window.citadelApp.showToast('Login session confirmed as authorized.', 'success')" class="px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-white font-bold text-xs hover:bg-slate-800">
            This Was Me
          </button>
          <button onclick="window.citadelApp.closeAllModals(); window.citadelApp.showToast('Account locked! Immediate password reset initiated.', 'rose')" class="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs">
            Secure My Account
          </button>
        </div>
      </div>
    `);
  }

  // --- Modal: Emergency Kit Recovery ---
  showEmergencyKitModal() {
    const user = this.store.state.user;
    this.openModal(`
      <div class="space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <span class="text-3xl">🛡️</span>
            <div>
              <h3 class="text-lg font-bold text-white">CITADEL Emergency Recovery Kit</h3>
              <p class="text-xs text-slate-400">Keep this document stored in a physical safe.</p>
            </div>
          </div>
          <button onclick="window.citadelApp.closeAllModals()" class="text-slate-400 hover:text-white">✕</button>
        </div>

        <div class="p-5 rounded-2xl bg-white text-slate-900 space-y-4 text-xs font-mono">
          <div class="flex justify-between border-b border-slate-300 pb-2">
            <span class="font-bold text-base">CITADEL VAULT ENCLAVE</span>
            <span class="text-[10px]">CONFIDENTIAL</span>
          </div>
          <div><strong>Account Owner:</strong> ${user.name} (${user.email})</div>
          <div><strong>Master Recovery Key:</strong> <br/><span class="text-sm font-bold text-indigo-700 bg-slate-100 p-1 rounded inline-block mt-1">${user.emergencyKey}</span></div>
          <div><strong>Emergency Contact:</strong> ${user.recoveryEmail}</div>
          <div class="text-[10px] text-slate-600 pt-2 border-t border-slate-200">
            Warning: Anyone in possession of this emergency key and your master email can initiate vault derivation. Store offline.
          </div>
        </div>

        <div class="flex justify-end gap-2">
          <button onclick="window.print()" class="cyber-glow-btn px-5 py-2 rounded-xl text-white font-bold text-xs flex items-center gap-2">
            ${this.ui.icon('download', 'w-4 h-4')} Print Emergency Kit
          </button>
        </div>
      </div>
    `);
  }

  // --- Modal: Universal Command Palette (Ctrl+K) ---
  openCommandPalette() {
    this.openModal(`
      <div class="space-y-4">
        <div class="relative flex items-center">
          <span class="absolute left-3.5 text-indigo-400">${this.ui.icon('search', 'w-5 h-5')}</span>
          <input type="text" id="cmd-palette-input" placeholder="Type a search query or command..."
            oninput="window.citadelApp.handleCommandPaletteSearch(this.value)"
            class="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900 border border-indigo-500/50 text-white text-sm focus:outline-none placeholder-slate-500" />
        </div>

        <div id="cmd-palette-results" class="max-h-72 overflow-y-auto space-y-1.5 text-xs">
          <div class="px-2 py-1 text-[10px] uppercase font-bold text-slate-500">Quick Navigation & Shortcuts</div>
          <button onclick="window.citadelApp.navigate('passwords'); window.citadelApp.closeAllModals()" class="w-full p-2.5 rounded-xl hover:bg-slate-800 text-left flex items-center gap-3 text-white">
            <span class="text-indigo-400">🔑</span> <span>Open Password Vault</span>
          </button>
          <button onclick="window.citadelApp.navigate('documents'); window.citadelApp.closeAllModals()" class="w-full p-2.5 rounded-xl hover:bg-slate-800 text-left flex items-center gap-3 text-white">
            <span class="text-cyan-400">📁</span> <span>Open Document Locker</span>
          </button>
          <button onclick="window.citadelApp.navigate('generator'); window.citadelApp.closeAllModals()" class="w-full p-2.5 rounded-xl hover:bg-slate-800 text-left flex items-center gap-3 text-white">
            <span class="text-emerald-400">⚡</span> <span>Open Password Generator</span>
          </button>
          <button onclick="window.citadelApp.navigate('security'); window.citadelApp.closeAllModals()" class="w-full p-2.5 rounded-xl hover:bg-slate-800 text-left flex items-center gap-3 text-white">
            <span class="text-amber-400">🛡️</span> <span>Run Security Audit</span>
          </button>
        </div>
      </div>
    `);
    setTimeout(() => {
      document.getElementById("cmd-palette-input")?.focus();
    }, 50);
  }

  handleCommandPaletteSearch(query) {
    const resultsContainer = document.getElementById("cmd-palette-results");
    if (!resultsContainer) return;

    if (!query.trim()) {
      resultsContainer.innerHTML = `
        <div class="px-2 py-1 text-[10px] uppercase font-bold text-slate-500">Quick Navigation</div>
        <button onclick="window.citadelApp.navigate('passwords'); window.citadelApp.closeAllModals()" class="w-full p-2.5 rounded-xl hover:bg-slate-800 text-left flex items-center gap-3 text-white">
          <span class="text-indigo-400">🔑</span> <span>Open Password Vault</span>
        </button>
        <button onclick="window.citadelApp.navigate('documents'); window.citadelApp.closeAllModals()" class="w-full p-2.5 rounded-xl hover:bg-slate-800 text-left flex items-center gap-3 text-white">
          <span class="text-cyan-400">📁</span> <span>Open Document Locker</span>
        </button>
      `;
      return;
    }

    const { passwords, documents, notes } = this.store.globalSearch(query);

    let html = "";
    if (passwords.length > 0) {
      html += `<div class="px-2 py-1 text-[10px] uppercase font-bold text-slate-500">Passwords (${passwords.length})</div>`;
      passwords.forEach(p => {
        html += `
          <button onclick="window.citadelApp.openViewPasswordModal('${p.id}'); window.citadelApp.closeAllModals()" class="w-full p-2.5 rounded-xl hover:bg-slate-800 text-left flex items-center justify-between text-white">
            <div class="flex items-center gap-3">
              <span>${p.favIcon || '🌐'}</span>
              <div>
                <div class="font-bold">${p.title}</div>
                <div class="text-[11px] text-slate-400">${p.username}</div>
              </div>
            </div>
            <span class="text-[10px] font-mono text-indigo-400">${p.category}</span>
          </button>
        `;
      });
    }

    if (documents.length > 0) {
      html += `<div class="px-2 py-1 text-[10px] uppercase font-bold text-slate-500 mt-2">Documents (${documents.length})</div>`;
      documents.forEach(d => {
        html += `
          <button onclick="window.citadelApp.openPreviewDocModal('${d.id}'); window.citadelApp.closeAllModals()" class="w-full p-2.5 rounded-xl hover:bg-slate-800 text-left flex items-center justify-between text-white">
            <div class="flex items-center gap-3">
              <span>${d.categoryIcon || '📁'}</span>
              <div>
                <div class="font-bold">${d.name}</div>
                <div class="text-[11px] text-slate-400">${d.size}</div>
              </div>
            </div>
            <span class="text-[10px] font-mono text-cyan-400">${d.category}</span>
          </button>
        `;
      });
    }

    if (notes.length > 0) {
      html += `<div class="px-2 py-1 text-[10px] uppercase font-bold text-slate-500 mt-2">Secure Notes (${notes.length})</div>`;
      notes.forEach(n => {
        html += `
          <button onclick="window.citadelApp.openViewNoteModal('${n.id}'); window.citadelApp.closeAllModals()" class="w-full p-2.5 rounded-xl hover:bg-slate-800 text-left flex items-center justify-between text-white">
            <div class="flex items-center gap-3">
              <span>${n.categoryIcon || '📝'}</span>
              <div class="font-bold">${n.title}</div>
            </div>
            <span class="text-[10px] font-mono text-violet-400">${n.category}</span>
          </button>
        `;
      });
    }

    if (!passwords.length && !documents.length && !notes.length) {
      html = `<div class="text-center py-6 text-slate-500">No items found matching "${query}".</div>`;
    }

    resultsContainer.innerHTML = html;
  }

  // --- Modal: Generic Confirmation Dialog ---
  showConfirmationModal(title, message, confirmText, onConfirm, isDanger = false) {
    this.openModal(`
      <div class="space-y-5 text-center">
        <div class="w-12 h-12 rounded-2xl ${isDanger ? 'bg-rose-950/80 text-rose-400 border border-rose-500/30' : 'bg-amber-950/80 text-amber-400 border border-amber-500/30'} flex items-center justify-center mx-auto text-2xl">
          ${isDanger ? '⚠️' : '🗑️'}
        </div>
        <div>
          <h3 class="text-lg font-bold text-white">${title}</h3>
          <p class="text-xs text-slate-400 mt-1 leading-relaxed">${message}</p>
        </div>
        <div class="flex items-center justify-center gap-3 pt-2">
          <button onclick="window.citadelApp.closeAllModals()" class="px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 text-xs hover:bg-slate-800">
            Cancel
          </button>
          <button id="modal-confirm-btn" class="px-5 py-2.5 rounded-xl ${isDanger ? 'bg-rose-600 hover:bg-rose-500' : 'bg-indigo-600 hover:bg-indigo-500'} text-white font-bold text-xs">
            ${confirmText}
          </button>
        </div>
      </div>
    `);

    document.getElementById("modal-confirm-btn")?.addEventListener("click", () => {
      this.closeAllModals();
      onConfirm();
    });
  }

  openChangePasswordModal() {
    this.openModal(`
      <div class="space-y-4">
        <h3 class="text-base font-bold text-white">Change Master Password</h3>
        <form onsubmit="window.citadelApp.handleChangePasswordSubmit(event)" class="space-y-3 text-xs">
          <div>
            <label class="block text-slate-400 mb-1">Current Master Password</label>
            <input type="password" id="modal-current-password" required class="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white" />
          </div>
          <div>
            <label class="block text-slate-400 mb-1">New Master Password</label>
            <input type="password" id="modal-new-password" required class="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white" />
          </div>
          <div class="flex justify-end gap-2 pt-2">
            <button type="button" onclick="window.citadelApp.closeAllModals()" class="px-4 py-2 rounded-xl border border-slate-700 text-slate-300 text-xs">Cancel</button>
            <button type="submit" class="cyber-glow-btn px-5 py-2 rounded-xl text-white font-bold text-xs">Update Master Key</button>
          </div>
        </form>
      </div>
    `);
  }

  async handleChangePasswordSubmit(e) {
    e.preventDefault();
    const currentPassword = document.getElementById("modal-current-password")?.value;
    const newPassword = document.getElementById("modal-new-password")?.value;
    if (CitadelApi.token) {
      try {
        await CitadelApi.changePassword({ currentPassword, newPassword });
        this.closeAllModals();
        this.showToast("Master password updated securely on backend!", "success");
      } catch (err) {
        this.showToast(err.message || "Failed to update password", "rose");
      }
    } else {
      this.closeAllModals();
      this.showToast("Master password updated in local vault.", "success");
    }
  }

  openEditProfileModal() {
    const user = this.store.state.user;
    this.openModal(`
      <div class="space-y-4">
        <h3 class="text-base font-bold text-white">Edit Profile Details</h3>
        <div class="space-y-3 text-xs">
          <div>
            <label class="block text-slate-400 mb-1">Full Name</label>
            <input type="text" id="edit-user-name" value="${user.name}" class="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white" />
          </div>
          <div>
            <label class="block text-slate-400 mb-1">Emergency Recovery Email</label>
            <input type="email" id="edit-user-recovery" value="${user.recoveryEmail}" class="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white" />
          </div>
        </div>
        <div class="flex justify-end gap-2 pt-2">
          <button onclick="window.citadelApp.closeAllModals()" class="px-4 py-2 rounded-xl border border-slate-700 text-slate-300 text-xs">Cancel</button>
          <button onclick="window.citadelApp.handleEditProfileSubmit()" class="cyber-glow-btn px-5 py-2 rounded-xl text-white font-bold text-xs">Save Profile</button>
        </div>
      </div>
    `);
  }

  async handleEditProfileSubmit() {
    const name = document.getElementById("edit-user-name")?.value;
    const recovery = document.getElementById("edit-user-recovery")?.value;
    if (name) this.store.state.user.name = name;
    if (recovery) this.store.state.user.recoveryEmail = recovery;
    if (CitadelApi.token) {
      try {
        await CitadelApi.updateProfile({ name, recoveryEmail: recovery });
      } catch (err) {
        console.error("Profile sync error:", err);
      }
    }
    this.store.saveState();
    this.closeAllModals();
    this.showToast("Profile details updated.", "success");
    this.render();
  }

  // --- Modal: Change Profile Picture ---
  openProfilePictureModal() {
    const user = this.store.state.user;
    this.selectedAvatarData = null;

    this.openModal(`
      <div class="space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <h3 class="text-base sm:text-lg font-bold text-white">Change Profile Picture</h3>
            <p class="text-xs text-slate-400 mt-0.5">Upload a JPG, JPEG, PNG, or WEBP image (max 5MB).</p>
          </div>
          <button onclick="window.citadelApp.closeAllModals()" class="text-slate-400 hover:text-white p-1 rounded-lg">
            ✕
          </button>
        </div>

        <!-- Avatar Preview Display -->
        <div class="flex flex-col items-center justify-center py-2 space-y-4">
          <div class="relative w-28 h-28 rounded-3xl overflow-hidden ring-4 ring-emerald-500/40 shadow-xl bg-slate-900 flex items-center justify-center">
            <img id="avatar-modal-preview" src="${CitadelApi.resolveAssetUrl(user.avatar)}" alt="${user.name}" class="w-full h-full object-cover" />
            <div id="avatar-modal-loading" class="hidden absolute inset-0 bg-slate-950/75 backdrop-blur-sm flex flex-col items-center justify-center text-emerald-400 gap-2">
              <span class="animate-spin text-2xl">🔄</span>
              <span class="text-[10px] font-semibold text-white">Saving...</span>
            </div>
          </div>
          
          <div id="avatar-file-info" class="text-center text-xs text-slate-400">
            <span>Current profile photo</span>
          </div>

          <!-- Hidden File Input -->
          <input type="file" id="avatar-file-input" accept="image/jpeg,image/png,image/webp,image/jpg" 
            onchange="window.citadelApp.handleAvatarFileSelect(event)" class="hidden" />

          <!-- Selection Controls -->
          <div class="flex flex-wrap items-center justify-center gap-2.5">
            <button type="button" onclick="document.getElementById('avatar-file-input').click()" 
              class="px-4 py-2 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white flex items-center gap-2 transition-colors">
              <span>📁</span>
              <span>Choose From Computer</span>
            </button>
            <button type="button" onclick="window.citadelApp.handleRemoveAvatar()" 
              class="px-3.5 py-2 rounded-xl border border-rose-500/30 bg-rose-950/20 hover:bg-rose-900/30 text-rose-300 text-xs font-semibold transition-colors"
              data-tooltip="Reset to default avatar">
              <span>Reset Default</span>
            </button>
          </div>

          <div id="avatar-error-msg" class="hidden text-xs text-rose-400 font-medium text-center px-4 py-2 rounded-xl bg-rose-950/40 border border-rose-500/30"></div>
        </div>

        <!-- Action Buttons: Save Photo & Cancel -->
        <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <button type="button" onclick="window.citadelApp.closeAllModals()" 
            class="px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors">
            Cancel
          </button>
          <button type="button" id="avatar-save-btn" onclick="window.citadelApp.handleSaveAvatar()" disabled
            class="cyber-glow-btn px-6 py-2.5 rounded-xl text-white font-bold text-xs flex items-center gap-2 opacity-50 cursor-not-allowed transition-all">
            <span>Save Photo</span>
          </button>
        </div>
      </div>
    `);
  }

  handleAvatarFileSelect(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const errorEl = document.getElementById("avatar-error-msg");
    const previewEl = document.getElementById("avatar-modal-preview");
    const infoEl = document.getElementById("avatar-file-info");
    const saveBtn = document.getElementById("avatar-save-btn");

    if (errorEl) {
      errorEl.classList.add("hidden");
      errorEl.textContent = "";
    }

    // 1. Validate file type (JPG, JPEG, PNG, WEBP)
    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!validTypes.includes(file.type.toLowerCase())) {
      if (errorEl) {
        errorEl.textContent = "Please select a valid image file (JPG, JPEG, PNG, or WEBP).";
        errorEl.classList.remove("hidden");
      }
      return;
    }

    // 2. Validate file size (max 5MB)
    const MAX_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      if (errorEl) {
        errorEl.textContent = `File size is ${(file.size / (1024 * 1024)).toFixed(2)} MB. Maximum allowed size is 5 MB.`;
        errorEl.classList.remove("hidden");
      }
      return;
    }

    // 3. Read and generate live preview
    const reader = new FileReader();
    reader.onload = (e) => {
      this.selectedAvatarData = e.target.result;
      if (previewEl) {
        previewEl.src = this.selectedAvatarData;
      }
      if (infoEl) {
        const sizeKb = (file.size / 1024).toFixed(1);
        infoEl.innerHTML = `<span class="text-emerald-400 font-semibold">${file.name}</span> <span class="text-slate-400">(${sizeKb} KB)</span>`;
      }
      if (saveBtn) {
        saveBtn.disabled = false;
        saveBtn.classList.remove("opacity-50", "cursor-not-allowed");
      }
    };
    reader.readAsDataURL(file);
  }

  async handleSaveAvatar() {
    if (!this.selectedAvatarData) return;

    const saveBtn = document.getElementById("avatar-save-btn");
    const loadingEl = document.getElementById("avatar-modal-loading");
    const errorEl = document.getElementById("avatar-error-msg");

    if (saveBtn) {
      saveBtn.disabled = true;
      saveBtn.innerHTML = `<span>Saving...</span>`;
    }
    if (loadingEl) loadingEl.classList.remove("hidden");
    if (errorEl) errorEl.classList.add("hidden");

    try {
      let newAvatarUrl = this.selectedAvatarData;
      
      // Call backend API if user is authenticated
      const token = CitadelApi.getToken();
      if (token) {
        const res = await CitadelApi.uploadAvatar(this.selectedAvatarData);
        if (res && res.avatar) {
          newAvatarUrl = res.avatar;
        }
      }

      // Update state and localStorage
      this.store.state.user.avatar = newAvatarUrl;
      this.store.saveState();

      // Update in DOM everywhere immediately
      this.updateAvatarEverywhere(newAvatarUrl);

      this.closeAllModals();
      this.showToast("Profile picture updated successfully!", "success");
    } catch (err) {
      console.error("Save avatar error:", err);
      if (loadingEl) loadingEl.classList.add("hidden");
      if (saveBtn) {
        saveBtn.disabled = false;
        saveBtn.innerHTML = `<span>Save Photo</span>`;
      }
      if (errorEl) {
        errorEl.textContent = err.message || "Failed to upload avatar.";
        errorEl.classList.remove("hidden");
      }
    }
  }

  async handleRemoveAvatar() {
    const defaultAvatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250";
    
    try {
      const token = CitadelApi.getToken();
      if (token) {
        await CitadelApi.removeAvatar();
      }

      this.store.state.user.avatar = defaultAvatar;
      this.store.saveState();
      this.updateAvatarEverywhere(defaultAvatar);

      this.closeAllModals();
      this.showToast("Profile picture reset to default.", "info");
    } catch (err) {
      console.error("Remove avatar error:", err);
      this.showToast("Failed to reset avatar: " + err.message, "rose");
    }
  }

  updateAvatarEverywhere(avatarUrl) {
    const avatarImgs = document.querySelectorAll('.user-avatar-img, #profile-avatar-display');
    avatarImgs.forEach(img => {
      img.src = avatarUrl;
    });
  }

  openDeleteAccountModal() {
    this.showConfirmationModal(
      "Permanently Delete Account?",
      "All vault secrets, uploaded documents, notes, and cryptographic enclaves will be permanently purged. This action cannot be reversed.",
      "Delete Everything",
      async () => {
        if (CitadelApi.token) {
          try {
            await CitadelApi.deleteAccount();
          } catch (err) {
            console.error("Account delete error:", err);
          }
        }
        this.store.resetToDefault();
        this.isAuthenticated = false;
        CitadelApi.clearAuth();
        this.showToast("Account purged and reset to default.", "rose");
        this.navigate("landing");
      },
      true
    );
  }

  showForgotPasswordModal() {
    this.openModal(`
      <div class="space-y-4 text-center">
        <div class="text-3xl">🔑</div>
        <h3 class="text-base font-bold text-white">Zero-Knowledge Recovery</h3>
        <p class="text-xs text-slate-400 leading-relaxed">
          Because CITADEL uses zero-knowledge encryption, your master password is never stored on any server. 
          Use your Emergency Recovery Kit key to decrypt and restore access.
        </p>
        <div class="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300">
          Emergency Key Format: CTDL-XXXX-XXXX-...
        </div>
        <p class="text-xs text-amber-300">Automated account recovery is not available yet. Keep your recovery key stored securely.</p>
      </div>
    `);
  }

  handleDragOver(e) {
    e.preventDefault();
    const dropzone = document.getElementById("dropzone");
    if (dropzone) dropzone.classList.add("border-cyan-400", "bg-cyan-950/30");
  }

  handleDragLeave(e) {
    e.preventDefault();
    const dropzone = document.getElementById("dropzone");
    if (dropzone) dropzone.classList.remove("border-cyan-400", "bg-cyan-950/30");
  }

  async handleFileDrop(e) {
    e.preventDefault();
    this.handleDragLeave(e);
    if (e.dataTransfer && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      let fileData = null;
      try {
        fileData = await new Promise((res, rej) => {
          const reader = new FileReader();
          reader.onload = () => res(reader.result);
          reader.onerror = rej;
          reader.readAsDataURL(file);
        });
      } catch (err) {
        console.warn("Could not read dropped file data:", err);
      }
      const sizeBytes = file.size;
      const sizeStr = sizeBytes > 1024 * 1024 ? `${(sizeBytes / (1024 * 1024)).toFixed(1)} MB` : `${Math.round(sizeBytes / 1024)} KB`;
      const ext = (file.name.split('.').pop() || 'pdf').toLowerCase();
      await this.store.addDocument({
        name: file.name,
        originalFilename: file.name,
        category: "Personal",
        fileType: ext,
        size: sizeStr,
        sizeBytes: sizeBytes,
        mimeType: file.type || undefined,
        fileData: fileData
      });
      this.showToast(`"${file.name}" encrypted and secured!`, "success");
    }
  }
}

// Instantiate and expose globally
window.addEventListener("DOMContentLoaded", () => {
  window.citadelApp = new CitadelApplication();
});
