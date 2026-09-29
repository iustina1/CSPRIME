const successResponse = (res, data, message = 'Success', statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    data,
    message,
  });
};

const errorResponse = (res, error) => {
  const statusCode = error.statusCode || 500;
  const payload = {
    success: false,
    message: error.message || 'Something went wrong',
    error: {
      code: error.code || 'INTERNAL_SERVER_ERROR',
    },
  };

  return res.status(statusCode).json(payload);
};

module.exports = { successResponse, errorResponse };
