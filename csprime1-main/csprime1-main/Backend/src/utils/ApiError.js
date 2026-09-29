class ApiError extends Error {
  constructor(message, statusCode = 500, code = 'INTERNAL_SERVER_ERROR', isOperational = true) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = isOperational;
  }
}

module.exports = { ApiError };
