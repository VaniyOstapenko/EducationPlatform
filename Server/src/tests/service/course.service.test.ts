import { createCourse, getAllCourse, getCourseById, updateCourse, deleteCourse } from '../../service/course.service';
import * as repository from '../../repository/course.repository';
import ExceptionType from '../../helper/exception';

describe('getAllCourse', () => {
  test('test_1', async () => {
    const repFunction = jest.spyOn(repository, 'getAllCourseDB');
    repFunction.mockResolvedValue([
      { id: 1, course: 'JS' },
      { id: 2, course: 'TS' },
    ]);
    const result = await getAllCourse();
    expect(repFunction).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[1].id).toBe(2);
    expect(result[0].course).toBe('JS');
    expect(result[1].course).toBe('TS');
    expect(result).toEqual([
      { id: 1, course: 'JS' },
      { id: 2, course: 'TS' },
    ]);
    expect(result).toHaveLength(2);
  });

  test('test_2', async () => {
    const repFunction = jest.spyOn(repository, 'getAllCourseDB');
    repFunction.mockResolvedValue([]);
    try {
      await getAllCourse();
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DATA_VALID_SERVICE_GET_ALL_COURSE);
    }
  });
});

describe('getCourseById', () => {
  test('success', async () => {
    const repFunction = jest.spyOn(repository, 'getCourseByIdDB');
    repFunction.mockResolvedValue([{ id: 1, course: 'TS' }]);
    const result = await getCourseById(1);
    expect(result[0].id).toBe(1);
    expect(repFunction).toHaveBeenCalled();
    expect(result).toHaveLength(1);
    expect(result).toEqual([{ id: 1, course: 'TS' }]);
  });

  test('error', async () => {
    const repFunction = jest.spyOn(repository, 'getAllCourseDB');
    repFunction.mockResolvedValue([]);
    try {
      await getCourseById(5);
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DATA_VALID_SERVICE_GET_COURSE_BY_ID);
    }
  });
});

describe('createCourse', () => {
  test('success', async () => {
    const repFunction = jest.spyOn(repository, 'createCourseDB');
    repFunction.mockResolvedValue([{ id: 1, course: 'TS' }]);
    const result = await createCourse('TS');
    expect(repFunction).toHaveBeenCalled();
    expect(result[0].course).toBe('TS');
    expect(result).toHaveLength(1);
    expect(result).toEqual([{ id: 1, course: 'TS' }]);
    expect(result.length).toBe(1);
  });

  test('error', async () => {
    const repFunction = jest.spyOn(repository, 'createCourseDB');
    repFunction.mockResolvedValue([]);
    try {
      await createCourse('TS');
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DATA_VALID_SERVICE_CREATE_COURSE);
    }
  });
});

describe('updateCourse', () => {
  test('success', async () => {
    const repFunction = jest.spyOn(repository, 'updateCourseDB');
    repFunction.mockResolvedValue([{ id: 1, course: 'TS' }]);
    const result = await updateCourse(1, 'TS');
    expect(repFunction).toHaveBeenCalled();
    expect(result[0].course).toBe('TS');
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
    expect(result).toEqual([{ id: 1, course: 'TS' }]);
  });

  test('error', async () => {
    const repFunction = jest.spyOn(repository, 'updateCourseDB');
    repFunction.mockResolvedValue([]);
    try {
      await updateCourse(1, 'TS');
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DATA_VALID_SERVICE_UPDATE_COURSE);
    }
  });
});

describe('deleteCourse', () => {
  test('success', async () => {
    const repFunction = jest.spyOn(repository, 'deleteCourseDB');
    repFunction.mockResolvedValue([{ id: 1, course: 'TS' }]);
    const result = await deleteCourse(1);
    expect(result[0].id).toBe(1);
    expect(result[0].course).toBe('TS');
    expect(result).toHaveLength(1);
    expect(result).toEqual([{ id: 1, course: 'TS' }]);
    expect(repFunction).toHaveBeenCalled();
  });

  test('error', async () => {
    const repFunction = jest.spyOn(repository, 'deleteCourseDB');
    repFunction.mockResolvedValue([]);
    try {
      await deleteCourse(1);
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DATA_VALID_SERVICE_DELETE_COURSE);
    }
  });
});
