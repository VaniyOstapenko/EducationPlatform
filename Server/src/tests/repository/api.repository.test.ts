import { getUserByEmailDB, registrationUserDB } from '../../repository/api.repository';

const client = {
  query: jest.fn(),
};

jest.mock('pg', () => {
  const pool = { connect: jest.fn(() => client) };
  return { Pool: jest.fn(() => pool) };
});

afterEach(() => {
  jest.clearAllMocks;
});

describe('test getUserByEmailDB function', () => {
  test('success', async () => {
    client.query.mockResolvedValue({ rows: [{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'Ost@mail.com', pwd: 'vasnf1234' }] });
    const result = await getUserByEmailDB('Ost@mail.com');
    expect(client.query).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].pwd).toBe('vasnf1234');
    expect(result.length).toBe(1);
    expect(result).toEqual([{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'Ost@mail.com', pwd: 'vasnf1234' }]);
  });
});

describe('test registrationUserDB function', () => {
  test('success', async () => {
    client.query.mockResolvedValue({ rows: [{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'Ost@mail.com', pwd: 'vasnf1234' }] });
    const result = await registrationUserDB('Ivan', 'Ostapenko', 'Ost@mail.com', 'vasnf1234');
    expect(client.query).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].pwd).toBe('vasnf1234');
    expect(result.length).toBe(1);
    expect(result).toEqual([{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'Ost@mail.com', pwd: 'vasnf1234' }]);
  });
});
