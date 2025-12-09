const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('returns status 200 and a message', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('message', 'Simple Node.js CI app is running');
  });
});

describe('GET /health', () => {
  it('returns status 200 and ok status', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('status', 'ok');
  });
});
