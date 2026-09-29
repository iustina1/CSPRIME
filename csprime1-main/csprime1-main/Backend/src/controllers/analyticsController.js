const analyticsService = require('../services/analyticsService');
const { successResponse } = require('../utils/response');

const getModuleAnalytics = async (req, res, next) => {
  try {
    const analytics = await analyticsService.getModuleAnalytics(req.params.moduleId);
    return successResponse(res, analytics, 'Analytics retrieved successfully');
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getModuleAnalytics,
};
