const { successResponse } = require('../utils/response');

const getCurrentUser = async (req, res, next) => {
  try {
    const user = req.user || null;
    return successResponse(res, user, 'Authenticated user profile retrieved');
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getCurrentUser,
};
