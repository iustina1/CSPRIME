const topicService = require('../services/topicService');
const { successResponse } = require('../utils/response');

const getTopics = async (req, res, next) => {
  try {
    const topics = await topicService.getTopics();
    return successResponse(res, topics, 'Topics retrieved successfully');
  } catch (error) {
    return next(error);
  }
};

const getModulesByTopic = async (req, res, next) => {
  try {
    const modules = await topicService.getModulesByTopic(req.params.topicId);
    return successResponse(res, modules, 'Modules for topic retrieved successfully');
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getTopics,
  getModulesByTopic,
};
