import { Request, Response } from "express";
import { petService } from "../services/PetServices";

class PetController {
  async getPets(req: Request, res: Response) {
    try {
      const pets = await petService.getPets();
      return res.status(200).json(pets);
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
  
  async createPet(req: Request, res: Response) {
    try {
      const { name, species, carry, weight, dateOfBirth, tutorId } = req.body;
      const newPet = await petService.createPet(
        name,
        species,
        carry,
        weight,
        dateOfBirth,
        tutorId
      );
      return res.status(201).json(newPet);
    } catch (error) {
      return res.status(400).json({ message: "Bad request" });
    }
  }
  
  async updatePet(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const { name, species, carry, weight, dateOfBirth } = req.body;
      await petService.updatePet(id, name, species, carry, weight, dateOfBirth);
      return res.status(200).end();
    } catch (error) {
      return res.status(400).json({ message: "Bad request" });
    }
  }
  
  async deletePet(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await petService.deletePet(id);
      return res.status(200).end();
    } catch (error) {
      return res.status(400).json({ message: "Bad request" });
    }
  }
}

const petController = new PetController()

export {petController}