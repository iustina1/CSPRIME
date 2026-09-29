const express = require('express');
const topicController = require('../controllers/topicController');
const { validate, topicIdSchema } = require('../middleware/validationMiddleware');

const router = express.Router();

router.get('/', topicController.getTopics);
router.get('/:topicId/modules', validate(topicIdSchema, 'params'), topicController.getModulesByTopic);

module.exports = router;
