import "reflect-metadata";
// import express from "express";
const express = require("express");
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


// import { AppDataSource } from "./data-source"
// import { User } from "./entity/User"

// AppDataSource.initialize().then(async () => {

//     console.log("Inserting a new user into the database...")
//     const user = new User()
//     user.firstName = "Timber"
//     user.lastName = "Saw"
//     user.age = 25
//     await AppDataSource.manager.save(user)
//     console.log("Saved a new user with id: " + user.id)

//     console.log("Loading users from the database...")
//     const users = await AppDataSource.manager.find(User)
//     console.log("Loaded users: ", users)

//     console.log("Here you can setup and run express / fastify / any other framework.")

// }).catch(error => console.log(error))
