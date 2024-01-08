import request from 'supertest';
import app from '../../app';

let id;

test('POST', async () => {
  const result = await request(app).post('/user/').send({ name: 'Ivan', surname: 'Ostapenko', email: 'Vaniy@mail.com', pwd: 'Vanit23455' });
  id = result.body[0].id;

  expect(result.statusCode).toBe(200);
  expect(result.body.length).toBeGreaterThan(0);
});

test('GET', async () => {
  const result = await request(app).get('/user');

  expect(result.statusCode).toBe(200);
  expect(result.body.length).toBeGreaterThan(0);
});

test('getUserById', async () => {
  const result = await request(app).get(`/user/${id}`);

  expect(result.statusCode).toBe(200);
  expect(result.body.length).toBe(1);
});

test('PUT', async () => {
  const result = await request(app).put(`/user/${id}`).send({ name: 'Vaniy', surname: 'Ostapenko', email: 'Jsudtfk@mail.com', pwd: 'Hcssk346' });

  expect(result.statusCode).toBe(200);
  expect(result.body.length).toBe(1);
});

test('DELETE', async () => {
  const result = await request(app).delete(`/user/${id}`);

  expect(result.statusCode).toBe(200);
  expect(result.body.length).toBe(1);
});
