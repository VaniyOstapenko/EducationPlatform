import { getAllCourseDB, getCourseByIdDB, createCourseDB, updateCourseDB, deleteCourseDB } from '../repository/course.repository';
import { iCourses } from '../interfaces/interfaces';
import ExceptionType from '../helper/exception';

async function getAllCourse(): Promise<iCourses[]> {
  const data = await getAllCourseDB();
  if (!data.length) throw new Error(ExceptionType.DATA_VALID_SERVICE_GET_ALL_COURSE);

  return data;
}

async function getCourseById(id: number): Promise<iCourses[]> {
  const data = await getCourseByIdDB(id);
  if (!data.length) throw new Error(ExceptionType.DATA_VALID_SERVICE_GET_COURSE_BY_ID);

  return data;
}

async function createCourse(course: string): Promise<iCourses[]> {
  const data = await createCourseDB(course);
  if (!data.length) throw new Error(ExceptionType.DATA_VALID_SERVICE_CREATE_COURSE);

  return data;
}

async function updateCourse(id: number, course: string): Promise<iCourses[]> {
  const data = await updateCourseDB(id, course);
  if (!data.length) throw new Error(ExceptionType.DATA_VALID_SERVICE_UPDATE_COURSE);

  return data;
}

async function deleteCourse(id: number): Promise<iCourses[]> {
  const data = await deleteCourseDB(id);
  if (!data.length) throw new Error(ExceptionType.DATA_VALID_SERVICE_DELETE_COURSE);

  return data;
}

export { getAllCourse, getCourseById, createCourse, updateCourse, deleteCourse };
