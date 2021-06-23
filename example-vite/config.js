// console.log('fffff', process.env.NODE_ENV, import.meta.env)
export const {
  VITE_API_URL,
  VITE_REFRESH_URL,

  VITE_WS_URL, // ws://127.0.0.1:3001, wss://127.0.0.1:3001
  VITE_WS_MS,
  VITE_GQL_URI,
  VITE_GWS_URI,
  VITE_PWA_PN, // Webpush, FCM
  // NOT NEEDED... BACKEND DETERMINES VITE_USE_OTP, // GA, SMS, ''
  VITE_RECAPTCHA_KEY,
  // VITE_HTTPONLY_TOKEN = false, // true, // NOTUSED... replaced by VITE_WITH_CREDENTIALS
  VITE_WITH_CREDENTIALS = 'same-origin', // same-origin, include = cors

  VITE_SAML_URL,
  VITE_CALLBACK_URL,

  VITE_SSO_URL,

  VITE_INITAL_SECURE_PATH,
  BASE_URL // from vite.config.js base property
} = import.meta.env

// APP_VERSION: '0.0.0' // TBD Use package.json version

// PAGESIZE: process.env.VUE_APP_PAGESIZE || 4,
// PAGESIZE_OPTS: process.env.VUE_APP_PAGESIZE_OPTS && process.env.VUE_APP_PAGESIZE_OPTS.length ? JSON.parse(process.env.VUE_APP_PAGESIZE_OPTS) : [4, 8, 10],
