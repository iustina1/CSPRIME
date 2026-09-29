const { modules, topics, analytics, applications, skills, faqs, testimonials } = require('../src/data/sampleData');
const { initializeFirebase } = require('../src/config/firebase');

const seedData = { modules, topics, analytics, applications, skills, faqs, testimonials };

const main = async () => {
  if (process.env.NODE_ENV === 'production' && process.env.ALLOW_PRODUCTION_SEED !== 'true') {
    throw new Error('Production seeding is blocked. Set ALLOW_PRODUCTION_SEED=true only after confirming the target project.');
  }

  const { db } = initializeFirebase();
  if (!db) {
    throw new Error('Firebase is not configured. Check Backend/.env or SERVICE_ACCOUNT_PATH.');
  }

  for (const [collectionName, records] of Object.entries(seedData)) {
    const batch = db.batch();
    records.forEach((record) => {
      const { id, ...data } = record;
      const reference = db.collection(collectionName).doc(id);
      batch.set(reference, {
        ...data,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }, { merge: true });
    });
    await batch.commit();
    console.log(`Seeded ${records.length} records into ${collectionName}.`);
  }
};

main().catch((error) => {
  console.error('Seed failed:', error);
  process.exit(1);
});
