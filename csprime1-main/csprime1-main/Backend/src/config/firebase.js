const admin = require('firebase-admin');
const fs = require('fs');
const env = require('./env');

let db = null;
let auth = null;

const initializeFirebase = () => {
  if (db && auth) {
    return { db, auth };
  }

  try {
    const hasCredentials = Boolean(
      env.FIREBASE_PROJECT_ID ||
      env.FIREBASE_CLIENT_EMAIL ||
      env.FIREBASE_PRIVATE_KEY ||
      env.SERVICE_ACCOUNT_PATH
    );

    if (!hasCredentials) {
      return { db: null, auth: null };
    }

    let serviceAccount = env.SERVICE_ACCOUNT || null;

    if (env.SERVICE_ACCOUNT_PATH) {
      const serviceAccountPath = require('path').resolve(process.cwd(), env.SERVICE_ACCOUNT_PATH);
      const raw = fs.readFileSync(serviceAccountPath, 'utf8');
      serviceAccount = JSON.parse(raw);
    }

    if (!serviceAccount && env.FIREBASE_CLIENT_EMAIL && env.FIREBASE_PRIVATE_KEY) {
      serviceAccount = {
        project_id: env.FIREBASE_PROJECT_ID,
        client_email: env.FIREBASE_CLIENT_EMAIL,
        private_key: env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      };
    }

    if (!admin.apps.length) {
      admin.initializeApp(
        serviceAccount
          ? {
              credential: admin.credential.cert(serviceAccount),
              projectId: serviceAccount.project_id || env.FIREBASE_PROJECT_ID,
            }
          : { projectId: env.FIREBASE_PROJECT_ID }
      );
    }

    db = admin.firestore();
    auth = admin.auth();
    return { db, auth };
  } catch (error) {
    console.error('Firebase initialization failed:', error.message);
    return { db: null, auth: null };
  }
};

module.exports = {
  ...initializeFirebase(),
  initializeFirebase,
};
