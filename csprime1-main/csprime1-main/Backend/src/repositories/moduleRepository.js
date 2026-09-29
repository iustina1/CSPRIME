const { initializeFirebase } = require('../config/firebase');
const { modules } = require('../data/sampleData');

const getModules = async (filters = {}) => {
  const { db } = initializeFirebase();

  if (!db || process.env.NODE_ENV === 'test') {
    return modules.filter((module) => {
      const matches = {};
      if (filters.year && module.year !== Number(filters.year)) matches.year = false;
      if (filters.semester && module.semester !== Number(filters.semester)) matches.semester = false;
      if (filters.topicId && !module.topicIds.includes(filters.topicId)) matches.topicId = false;
      return Object.keys(matches).length === 0;
    });
  }

  let query = db.collection('modules');

  if (filters.year) {
    query = query.where('year', '==', Number(filters.year));
  }

  if (filters.semester) {
    query = query.where('semester', '==', Number(filters.semester));
  }

  if (filters.topicId) {
    query = query.where('topicIds', 'array-contains', filters.topicId);
  }

  const snapshot = await query.get();

  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const getModuleById = async (moduleId) => {
  const { db } = initializeFirebase();

  if (!db || process.env.NODE_ENV === 'test') {
    return modules.find((module) => module.id === moduleId || module.code === moduleId) || null;
  }

  const doc = await db.collection('modules').doc(moduleId).get();
  if (!doc.exists) {
    return null;
  }

  return { id: doc.id, ...doc.data() };
};

module.exports = {
  getModules,
  getModuleById,
};
