import { getAllCourseDB, getCourseByIdDB } from '../repository/course.repository';
import { iCourses } from '../interfaces/interfaces';

async function getAllCourse(): Promise<iCourses[]> {
  const data = await getAllCourseDB();
  if (!data.length) throw new Error('no data');

  return data;
}

async function getCourseById(id: number): Promise<iCourses[]> {
  const data = await getCourseByIdDB(id);
  if (!data.length) throw new Error('no data');

  return data;
}

export { getAllCourse, getCourseById };
