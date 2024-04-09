import { getAllLessonsDB, createLessonsDB, getLessonsByIdDB, updateLessonsDB, deleteLessonsDB } from '../repository/lessons.repository';
import { iLessons } from '../interfaces/interfaces';
import ExceptionType from '../helper/exception';

async function getAllLessons(): Promise<iLessons[]> {
  const data = await getAllLessonsDB();
  if (!data.length) throw new Error(ExceptionType.DATA_VALID_SERVICE_GET_ALL_LESSONS);

  return data;
}

async function getLessonsById(course_id: number): Promise<iLessons[]> {
  const data = await getLessonsByIdDB(course_id);
  if (!data.length) throw new Error(ExceptionType.DATA_VALID_SERVICE_GET_LESSONS_BY_ID);

  return data;
}

async function createLessons(title: string, course_id: number): Promise<iLessons[]> {
  const data = await createLessonsDB(title, course_id);
  if (!data.length) throw new Error(ExceptionType.DATA_VALID_SERVICE_CREATE_LESSONS);

  return data;
}

async function updateLessons(id: number, title: string, course_id: number): Promise<iLessons[]> {
  const data = await updateLessonsDB(id, title, course_id);
  if (!data.length) throw new Error(ExceptionType.DATA_VALID_SERVICE_UPDATE_LESSONS);

  return data;
}

async function deleteLessons(id: number): Promise<iLessons[]> {
  const data = await deleteLessonsDB(id);
  if (!data.length) throw new Error(ExceptionType.DATA_VALID_SERVICE_DELETE_LESSONS);

  return data;
}

export { getAllLessons, createLessons, getLessonsById, updateLessons, deleteLessons };
