const testimonialService = require('../services/testimonialService');
const { successResponse } = require('../utils/response');

const getTestimonials = async (req, res, next) => {
  try {
    const testimonials = await testimonialService.getTestimonials();
    return successResponse(res, testimonials, 'Testimonials retrieved successfully');
  } catch (error) {
    return next(error);
  }
};

module.exports = { getTestimonials };
