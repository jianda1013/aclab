import { knex } from "knex";

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  },
  pool: { max: 10, min: 2 },
});

export default db;
