const request = require('supertest');
const app = require('../app');

describe('CSPrime API', () => {
  test('GET /api/v1/modules returns success payload', async () => {
    const res = await request(app).get('/api/v1/modules');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  test('GET /api/v1/topics returns success payload', async () => {
    const res = await request(app).get('/api/v1/topics');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  test('GET /api/v1/faqs returns success payload', async () => {
    const res = await request(app).get('/api/v1/faqs');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  test('GET /api/v1/testimonials returns success payload', async () => {
    const res = await request(app).get('/api/v1/testimonials');
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  test('GET /api/v1/modules/invalid returns 404', async () => {
    const res = await request(app).get('/api/v1/modules/unknown-module-id');
    expect(res.statusCode).toBe(404);
  });

  test('allows localhost and 127.0.0.1 origins for browser requests', async () => {
    const origin = 'http://127.0.0.1:3000';
    const res = await request(app)
      .get('/api/v1/modules')
      .set('Origin', origin);

    expect(res.headers['access-control-allow-origin']).toBe(origin);
    expect(res.statusCode).toBe(200);
  });
});
