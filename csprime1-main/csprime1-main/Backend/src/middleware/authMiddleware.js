const { ApiError } = require('../utils/ApiError');
const { auth } = require('../config/firebase');

const requireAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : null;

    if (!token) {
      throw new ApiError('Authentication token is required', 401, 'AUTH_TOKEN_REQUIRED');
    }

    if (!auth) {
      throw new ApiError('Firebase authentication is not configured', 503, 'FIREBASE_AUTH_UNAVAILABLE');
    }

    const decodedToken = await auth.verifyIdToken(token);
    req.user = {
      uid: decodedToken.uid,
      email: decodedToken.email || null,
      firebaseSignInProvider: decodedToken.firebase.sign_in_provider || null,
      role: 'student',
    };
    next();
  } catch (error) {
    const err = error instanceof ApiError ? error : new ApiError('Invalid or expired token', 401, 'INVALID_TOKEN');
    next(err);
  }
};

module.exports = { requireAuth };
