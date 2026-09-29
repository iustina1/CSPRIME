const { testimonials } = require('../data/sampleData');
const { initializeFirebase } = require('../config/firebase');

const getTestimonials = async () => {
  const { db } = initializeFirebase();
  if (db && process.env.NODE_ENV !== 'test') {
    const snapshot = await db.collection('testimonials').orderBy('order', 'asc').get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }

  return [...testimonials].sort((a, b) => (a.order || 0) - (b.order || 0));
};

module.exports = { getTestimonials };
