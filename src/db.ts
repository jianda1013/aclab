import { DataSource } from "typeorm";
import { Course } from "./entity/course";
import { Slides } from "./entity/slides";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: process.env.POSTGRES_USER || "user",
  password: process.env.POSTGRES_PASSWORD || "passwd",
  database: process.env.POSTGRES_DB || "db",
  synchronize: true,
  logging: false,
  entities: [Course, Slides],
  subscribers: [],
  migrations: [],
});

export default AppDataSource;
