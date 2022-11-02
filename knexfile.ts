import type { Knex } from "knex";

const client = "postgresql";

const connection = {
  host: process.env.DB_HOST || "host",
  database: process.env.POSTGRES_DB || "database",
  user: process.env.POSTGRES_USER || "username",
  password: process.env.POSTGRES_PASSWORD || "password",
};

const pool = { min: 2, max: 10 };

const migrations = { tableName: "knex_migrations" };

const config: { [key: string]: Knex.Config } = {
  development: { client, connection },

  staging: { client, connection, pool, migrations },

  production: { client, connection, pool, migrations },
};

module.exports = config;
