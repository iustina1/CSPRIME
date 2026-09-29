const testimonialRepository = require('../repositories/testimonialRepository');

const getTestimonials = async () => {
  return testimonialRepository.getTestimonials();
};

module.exports = {
  getTestimonials,
};
