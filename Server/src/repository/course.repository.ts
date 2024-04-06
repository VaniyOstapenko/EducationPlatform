import pool from '../db';
import { iCourses } from '../interfaces/interfaces';

async function getAllCourseDB(): Promise<iCourses[]> {
  const client = await pool.connect();
  const sql = `select * from courses`;
  const data = (await client.query(sql)).rows;
  client.release();
  return data;
}

async function getCourseByIdDB(id: number): Promise<iCourses[]> {
  const client = await pool.connect();
  const sql = `select * from courses where id =$1`;
  const data = (await client.query(sql, [id])).rows;
  client.release();
  return data;
}

async function createCourseDB(course: string, description: string): Promise<iCourses[]> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = `insert into courses(course, description) values($1, $2) returning *`;
    const data = (await client.query(sql, [course, description])).rows;
    await client.query('COMMIT');

    return data;
  } catch (error: any) {
    await client.query('ROLLBACK');
    console.log(`createCourse: ${error.message}`);

    return [];
  } finally {
    client.release();
  }
}

async function updateCourseDB(id: number, course: string, description: string): Promise<iCourses[]> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = `update courses set course = $1, description =$2 where id = $3 returning *`;
    const data = (await client.query(sql, [course, description, id])).rows;
    await client.query('COMMIT');

    return data;
  } catch (error: any) {
    await client.query('ROLLBACK');
    console.log(`updateCourse: ${error.message}`);

    return [];
  } finally {
    client.release();
  }
}

async function deleteCourseDB(id: number): Promise<iCourses[]> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = `delete from courses where id = $1 returning *`;
    const data = (await client.query(sql, [id])).rows;
    await client.query('COMMIT');

    return data;
  } catch (error: any) {
    await client.query('ROLLBACK');
    console.log(`deleteCourse: ${error.message}`);

    return [];
  } finally {
    client.release();
  }
}

export { getAllCourseDB, getCourseByIdDB, createCourseDB, updateCourseDB, deleteCourseDB };
