import { getAllLessonsDB, createLessonsDB, getLessonsByIdDB, updateLessonsDB, deleteLessonsDB } from '../repository/lessons.repository';
import { iLessons } from '../interfaces/interfaces';

async function getAllLessons(): Promise<iLessons[]> {
  const data = await getAllLessonsDB();
  if (!data.length) throw new Error('method get empty');

  return data;
}

async function getLessonsById(course_id: number): Promise<iLessons[]> {
  const data = await getLessonsByIdDB(course_id);
  if (!data.length) throw new Error('method getById empty');

  return data;
}

async function createLessons(title: string, course_id: number): Promise<iLessons[]> {
  const data = await createLessonsDB(title, course_id);
  if (!data.length) throw new Error('method post empty');

  return data;
}

async function updateLessons(id: number, title: string, course_id: number): Promise<iLessons[]> {
  const data = await updateLessonsDB(id, title, course_id);
  if (!data.length) throw new Error('method put empty');

  return data;
}

async function deleteLessons(id: number): Promise<iLessons[]> {
  const data = await deleteLessonsDB(id);
  if (!data.length) throw new Error('method delete empty');

  return data;
}

export { getAllLessons, createLessons, getLessonsById, updateLessons, deleteLessons };
