const { ApiError } = require('../utils/ApiError');
const moduleRepository = require('../repositories/moduleRepository');

const getModules = async (filters = {}) => {
  const modules = await moduleRepository.getModules(filters);
  return modules;
};

const getModuleById = async (moduleId) => {
  if (!moduleId || typeof moduleId !== 'string' || !moduleId.trim()) {
    throw new ApiError('Module id is required', 400, 'INVALID_MODULE_ID');
  }

  const module = await moduleRepository.getModuleById(moduleId.trim());
  if (!module) {
    throw new ApiError('Module not found', 404, 'MODULE_NOT_FOUND');
  }

  return module;
};

module.exports = {
  getModules,
  getModuleById,
};
