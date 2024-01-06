import { getAllCourseDB, getCourseByIdDB, createCourseDB, deleteCourseDB, updateCourseDB } from '../../repository/course.repository';

const mClient = {
  query: jest.fn(),
};

jest.mock('pg', () => {
  const pool = { connect: jest.fn(() => mClient) };
  return { Pool: jest.fn(() => pool) };
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('test getAllCourseDb function', () => {
  test('should return success', async () => {
    mClient.query.mockResolvedValue({ rows: [{ id: 1, course: 'TS' }] });
    const result = await getAllCourseDB();
    expect(mClient.query).toHaveBeenCalled();
    expect(result).toEqual([{ id: 1, course: 'TS' }]);
    expect(result.length).toBe(1);
    expect(result[0].id).toBe(1);
    expect(result[0].course).toBe('TS');
  });
});

describe('test getCourseByIdDB function', () => {
  test('should return success', async () => {
    mClient.query.mockResolvedValue({ rows: [{ id: 1, course: 'TS' }] });
    const result = await getCourseByIdDB(1);
    expect(mClient.query).toHaveBeenCalled();
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
    expect(result).toEqual([{ id: 1, course: 'TS' }]);
  });
});

describe('test createCourseDB function', () => {
  test('should return success', async () => {
    mClient.query.mockResolvedValue({ rows: [{ id: 1, course: 'TS' }] });
    const result = await createCourseDB('TS');
    expect(mClient.query).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result).toHaveLength(1);
    expect(result).toEqual([{ id: 1, course: 'TS' }]);
  });
});

describe('test updateCourseDB', () => {
  test('should return success', async () => {
    mClient.query.mockResolvedValue({ rows: [{ id: 1, course: 'TS' }] });
    const result = await updateCourseDB(1, 'TS');
    expect(mClient.query).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result).toHaveLength(1);
    expect(result).toEqual([{ id: 1, course: 'TS' }]);
  });
});

describe('test deleteCourseDB', () => {
  test('should return success', async () => {
    mClient.query.mockResolvedValue({ rows: [{ id: 1, course: 'TS' }] });
    const result = await deleteCourseDB(1);
    expect(mClient.query).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result).toHaveLength(1);
    expect(result).toEqual([{ id: 1, course: 'TS' }]);
  });
});
