import pool from '../db';
import { iCourses } from '../interfaces/interfaces';

async function getAllCourseDB(): Promise<iCourses[]> {
  const client = await pool.connect();
  const sql = `select * from courses`;
  const data = (await client.query(sql)).rows;

  return data;
}

async function getCourseByIdDB(id: number): Promise<iCourses[]> {
  const client = await pool.connect();
  const sql = `select * from courses where id =$1`;
  const data = (await client.query(sql, [id])).rows;

  return data;
}

export { getAllCourseDB, getCourseByIdDB };
