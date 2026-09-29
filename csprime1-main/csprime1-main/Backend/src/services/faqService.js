const faqRepository = require('../repositories/faqRepository');

const getFaqs = async () => {
  return faqRepository.getFaqs();
};

module.exports = {
  getFaqs,
};
