const faqService = require('../services/faqService');
const { successResponse } = require('../utils/response');

const getFaqs = async (req, res, next) => {
  try {
    const faqs = await faqService.getFaqs();
    return successResponse(res, faqs, 'FAQs retrieved successfully');
  } catch (error) {
    return next(error);
  }
};

module.exports = { getFaqs };
