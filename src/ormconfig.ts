import { DataSource } from "typeorm";
import Entities from "./entities";
import Migrations from "./migrations";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  logging: true,
  entities: [...Entities],
  migrations: [...Migrations],
});
