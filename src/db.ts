import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "educational_platform",
  password: "Vaniy122994",
  port: "5432",
});

export default pool;
