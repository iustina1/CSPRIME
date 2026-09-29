const { ApiError } = require('../utils/ApiError');
const analyticsRepository = require('../repositories/analyticsRepository');
const moduleRepository = require('../repositories/moduleRepository');

const getModuleAnalytics = async (moduleId) => {
  if (!moduleId || typeof moduleId !== 'string' || !moduleId.trim()) {
    throw new ApiError('Module id is required', 400, 'INVALID_MODULE_ID');
  }

  const module = await moduleRepository.getModuleById(moduleId.trim());
  if (!module) {
    throw new ApiError('Module not found', 404, 'MODULE_NOT_FOUND');
  }

  const analytics = await analyticsRepository.getAnalyticsByModuleId(moduleId.trim());
  if (!analytics) {
    throw new ApiError('Analytics not found for this module', 404, 'ANALYTICS_NOT_FOUND');
  }

  return analytics;
};

module.exports = {
  getModuleAnalytics,
};
