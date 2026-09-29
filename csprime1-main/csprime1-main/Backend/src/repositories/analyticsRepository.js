const { analytics, applications, skills, modules } = require('../data/sampleData');
const { initializeFirebase } = require('../config/firebase');

const getAnalyticsByModuleId = async (moduleId) => {
  const { db } = initializeFirebase();
  if (db && process.env.NODE_ENV !== 'test') {
    const analyticsSnapshot = await db.collection('analytics').where('foundationModuleId', '==', moduleId).limit(1).get();
    if (analyticsSnapshot.empty) return null;

    const record = analyticsSnapshot.docs[0].data();
    const moduleIds = [moduleId, ...(record.relatedModuleIds || [])];
    const [moduleSnapshot, applicationSnapshot, skillSnapshot] = await Promise.all([
      Promise.all(moduleIds.map((id) => db.collection('modules').doc(id).get())),
      Promise.all((record.applicationIds || []).map((id) => db.collection('applications').doc(id).get())),
      Promise.all((record.skillIds || []).map((id) => db.collection('skills').doc(id).get())),
    ]);

    const moduleRecords = moduleSnapshot.filter((doc) => doc.exists).map((doc) => ({ id: doc.id, ...doc.data() }));
    return {
      foundationModule: moduleRecords.find((item) => item.id === moduleId) || null,
      advancedModules: moduleRecords.filter((item) => item.id !== moduleId).map(({ id, name, code }) => ({ id, name, code })),
      applications: applicationSnapshot.filter((doc) => doc.exists).map((doc) => ({ id: doc.id, ...doc.data() })),
      skills: skillSnapshot.filter((doc) => doc.exists).map((doc) => ({ id: doc.id, ...doc.data() })),
    };
  }

  const record = analytics.find((item) => item.foundationModuleId === moduleId);
  if (!record) return null;

  const foundationModule = modules.find((module) => module.id === moduleId || module.code === moduleId) || null;

  const advancedModules = modules.filter((module) => record.relatedModuleIds.includes(module.id || module.code));
  const relatedApplications = applications.filter((item) => record.applicationIds.includes(item.id));
  const relatedSkills = skills.filter((item) => record.skillIds.includes(item.id));

  return {
    foundationModule: foundationModule ? { id: foundationModule.id, name: foundationModule.name, code: foundationModule.code } : null,
    advancedModules: advancedModules.map((module) => ({ id: module.id, name: module.name, code: module.code })),
    applications: relatedApplications,
    skills: relatedSkills,
  };
};

module.exports = {
  getAnalyticsByModuleId,
};
