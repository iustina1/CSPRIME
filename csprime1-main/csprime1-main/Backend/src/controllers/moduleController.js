const moduleService = require('../services/moduleService');
const { successResponse, errorResponse } = require('../utils/response');

const getModules = async (req, res, next) => {
  try {
    const modules = await moduleService.getModules(req.query);
    return successResponse(res, modules, 'Modules retrieved successfully');
  } catch (error) {
    return next(error);
  }
};

const getModuleById = async (req, res, next) => {
  try {
    const module = await moduleService.getModuleById(req.params.moduleId);
    return successResponse(res, module, 'Module retrieved successfully');
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getModules,
  getModuleById,
};
