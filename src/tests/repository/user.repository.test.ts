import { getAllUsersDB, getUserByIdDB, updateUserDB, deleteUserDB } from '../../repository/user.repository';

const client = {
  query: jest.fn(),
};

jest.mock('pg', () => {
  const pool = { connect: jest.fn(() => client) };
  return { Pool: jest.fn(() => pool) };
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('test getAllUsersDb function', () => {
  test('return success', async () => {
    client.query.mockResolvedValue({ rows: [{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'Ostapenko@mail.com', pwd: 'Vaniy3420' }] });
    const result = await getAllUsersDB();
    expect(client.query).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result).toHaveLength(1);
    expect(result).toEqual([{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'Ostapenko@mail.com', pwd: 'Vaniy3420' }]);
    expect(result[0].name).toBe('Ivan');
  });
});

describe('test getUserByIdDB function', () => {
  test('return success', async () => {
    client.query.mockResolvedValue({ rows: [{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'Ostapenko@mail.com', pwd: 'Vaniy3420' }] });
    const result = await getUserByIdDB(1);
    expect(client.query).toHaveBeenCalled();
    expect(result[0].surname).toBe('Ostapenko');
    expect(result.length).toBe(1);
    expect(result).toEqual([{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'Ostapenko@mail.com', pwd: 'Vaniy3420' }]);
  });
});

describe('test updateUserDB function', () => {
  test('return success', async () => {
    client.query.mockResolvedValue({ rows: [{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'Ostapenko@mail.com', pwd: 'Vaniy3420' }] });
    const result = await updateUserDB(1, 'Ivan', 'Ostapenko', 'Ostapenko@mail.com', 'Vaniy3420');
    expect(client.query).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Ivan');
    expect(result).toEqual([{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'Ostapenko@mail.com', pwd: 'Vaniy3420' }]);
  });
});

describe('test deleteUserDB function', () => {
  test('return success', async () => {
    client.query.mockResolvedValue({ rows: [{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'Ostapenko@mail.com', pwd: 'Vaniy3420' }] });
    const result = await deleteUserDB(1);
    expect(client.query).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result).toHaveLength(1);
    expect(result).toEqual([{ id: 1, name: 'Ivan', surname: 'Ostapenko', email: 'Ostapenko@mail.com', pwd: 'Vaniy3420' }]);
  });
});
