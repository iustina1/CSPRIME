const { ApiError } = require('../utils/ApiError');

const getUserProfile = async (decodedToken) => {
  if (!decodedToken || !decodedToken.uid) {
    throw new ApiError('Authenticated user is required', 401, 'USER_REQUIRED');
  }

  return {
    uid: decodedToken.uid,
    email: decodedToken.email || null,
    role: 'student',
  };
};

module.exports = {
  getUserProfile,
};
