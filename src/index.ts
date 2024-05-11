import express from "express";
import "reflect-metadata";
import { config } from "dotenv";
import TutorRoutes from "./routes/TutorRoutes";
import PetRoutes from "./routes/PetRoutes";
import { createConnection } from "typeorm";
config();
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/tutor", TutorRoutes);
app.use("/", PetRoutes);

createConnection()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
