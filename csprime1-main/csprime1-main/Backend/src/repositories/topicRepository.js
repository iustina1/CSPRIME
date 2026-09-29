const { topics, modules } = require('../data/sampleData');
const { initializeFirebase } = require('../config/firebase');

const getTopics = async () => {
  const { db } = initializeFirebase();
  if (!db || process.env.NODE_ENV === 'test') return topics;

  const snapshot = await db.collection('topics').get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const getModulesByTopic = async (topicId) => {
  const { db } = initializeFirebase();
  if (db && process.env.NODE_ENV !== 'test') {
    const snapshot = await db.collection('modules').where('topicIds', 'array-contains', topicId).get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }

  return modules.filter((module) => module.topicIds.includes(topicId));
};

module.exports = {
  getTopics,
  getModulesByTopic,
};
