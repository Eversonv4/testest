import "reflect-metadata";
import express from "express";
import { config } from "dotenv";
import TutorRoutes from "./routes/TutorRoutes";
import PetRoutes from "./routes/PetRoutes";
import { AppDataSource } from "./ormconfig";

config();

const port = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    app.use(express.json());

    app.use(TutorRoutes);
    app.use(PetRoutes);

    app.listen(port, () => console.log("It's working!"));
  })
  .catch((error) => console.log(error));