import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { DB_USER, DB_HOST, DATABASE, DB_PASSWORD, DB_PORT } = process.env;

const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DATABASE,
  password: DB_PASSWORD,
  port: DB_PORT,
});

export default pool;
