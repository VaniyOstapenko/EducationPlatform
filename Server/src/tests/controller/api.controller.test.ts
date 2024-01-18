import request from 'supertest';
import app from '../../app';

test('POST registrationUser', async () => {
  let result = await request(app).post('/api/reg/').send({ name: 'Ivan', surname: 'Ostapenko', email: 'Kalivan2945@mail.com', pwd: 'john2435' });

  expect(result.statusCode).toBe(200);
  expect(result.body.length).toBeGreaterThan(0);
});

test('POST authUser', async () => {
  const result = await request(app).post('/api/auth/').send({ email: 'Kalivan2945@mail.com', pwd: 'john2435' });

  expect(result.statusCode).toBe(200);
  expect(result.body.length).toBeGreaterThan(0);
});
