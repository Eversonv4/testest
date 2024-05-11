import { Tutor } from "./src/entities/Tutor";
import { Pet } from "./src/entities/Pet";

module.exports = {
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: true,
  entities: [Tutor, Pet],
};
