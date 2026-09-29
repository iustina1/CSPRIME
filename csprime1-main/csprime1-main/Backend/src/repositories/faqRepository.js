const { faqs } = require('../data/sampleData');
const { initializeFirebase } = require('../config/firebase');

const getFaqs = async () => {
  const { db } = initializeFirebase();
  if (db && process.env.NODE_ENV !== 'test') {
    const snapshot = await db.collection('faqs').orderBy('order', 'asc').get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }

  return [...faqs].sort((a, b) => (a.order || 0) - (b.order || 0));
};

module.exports = { getFaqs };
