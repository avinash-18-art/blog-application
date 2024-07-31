const request = require('supertest');
const app = require('../server'); // Make sure to export your express app

describe('User Registration', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password: '123456'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('token');
  });
});
