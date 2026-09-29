const { ApiError } = require('../utils/ApiError');
const topicRepository = require('../repositories/topicRepository');

const getTopics = async () => {
  return topicRepository.getTopics();
};

const getModulesByTopic = async (topicId) => {
  if (!topicId || typeof topicId !== 'string' || !topicId.trim()) {
    throw new ApiError('Topic id is required', 400, 'INVALID_TOPIC_ID');
  }

  const modules = await topicRepository.getModulesByTopic(topicId.trim());
  return modules;
};

module.exports = {
  getTopics,
  getModulesByTopic,
};
