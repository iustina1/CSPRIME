const { errorResponse } = require('../utils/response');

const notFoundHandler = (req, res) => {
  return errorResponse(res, { statusCode: 404, message: 'Resource not found', code: 'NOT_FOUND' });
};

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  const statusCode = err.statusCode || 500;
  const message = err.isOperational ? err.message : 'Internal server error';

  console.error('[ERROR]', {
    method: req.method,
    url: req.originalUrl,
    statusCode,
    message,
  });

  return errorResponse(res, {
    statusCode,
    message,
    code: err.code || 'INTERNAL_SERVER_ERROR',
  });
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
