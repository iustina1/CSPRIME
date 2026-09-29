const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

const envFilePath = path.resolve(__dirname, '../../.env');
const rawEnvFile = fs.existsSync(envFilePath) ? fs.readFileSync(envFilePath, 'utf8').trim() : '';
let serviceAccount = null;

if (rawEnvFile.startsWith('{')) {
  try {
    serviceAccount = JSON.parse(rawEnvFile);
  } catch (error) {
    throw new Error(`Invalid Firebase service account JSON in ${envFilePath}`);
  }
} else {
  dotenv.config({ path: envFilePath });
}

dotenv.config();

module.exports = {
  PORT: Number(process.env.PORT || 5000),
  NODE_ENV: process.env.NODE_ENV || 'development',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000',
  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || serviceAccount?.project_id,
  FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL || serviceAccount?.client_email,
  FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY || serviceAccount?.private_key,
  SERVICE_ACCOUNT_PATH: process.env.SERVICE_ACCOUNT_PATH,
  SERVICE_ACCOUNT: serviceAccount,
};
