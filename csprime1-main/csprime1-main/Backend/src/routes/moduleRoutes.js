const express = require('express');
const moduleController = require('../controllers/moduleController');
const { validate, querySchema, moduleIdSchema } = require('../middleware/validationMiddleware');

const router = express.Router();

router.get('/', validate(querySchema, 'query'), moduleController.getModules);
router.get('/:moduleId', validate(moduleIdSchema, 'params'), moduleController.getModuleById);

module.exports = router;
