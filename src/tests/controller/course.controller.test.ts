import request from 'supertest';
import app from '../../app';

let id;

test('POST', async () => {
  const result = await request(app).post('/course/').send({ course: 'TS' });
  id = result.body[0].id;

  expect(result.statusCode).toBe(200);
  expect(result.body.length).toBe(1);
});

test('GET', async () => {
  const result = await request(app).get('/course/');

  expect(result.statusCode).toBe(200);
  expect(result.body.length).toBeGreaterThan(0);
});

test('getById', async () => {
  const result = await request(app).get(`/course/${1}`);

  expect(result.statusCode).toBe(200);
  expect(result.body.length).toBe(1);
});

test('PUT', async () => {
  const result = await request(app).put(`/course/${id}`).send({ course: 'JS' });

  expect(result.statusCode).toBe(200);
  expect(result.body).toHaveLength(1);
});

test('DELETE', async () => {
  const result = await request(app).delete(`/course/${id}`);

  expect(result.statusCode).toBe(200);
  expect(result.body.length).toBe(1);
});
