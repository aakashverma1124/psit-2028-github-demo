const request = require('supertest');
const app = require('../src/app');

describe('Task routes', () => {
  it('creates and lists tasks', async () => {
    const createResponse = await request(app)
      .post('/api/tasks')
      .send({ title: 'Learn GitHub' })
      .expect(201);

    expect(createResponse.body).toHaveProperty('id');
    expect(createResponse.body.title).toBe('Learn GitHub');

    const listResponse = await request(app).get('/api/tasks').expect(200);
    expect(Array.isArray(listResponse.body)).toBe(true);
    expect(listResponse.body.length).toBeGreaterThanOrEqual(1);
  });

  it('returns 404 for unknown task', async () => {
    await request(app).get('/api/tasks/non-existent-id').expect(404);
  });
});

