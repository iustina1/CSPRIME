const express = require('express');
const analyticsController = require('../controllers/analyticsController');
const { validate, moduleIdSchema } = require('../middleware/validationMiddleware');

const router = express.Router();

router.get('/module/:moduleId', validate(moduleIdSchema, 'params'), analyticsController.getModuleAnalytics);

module.exports = router;
