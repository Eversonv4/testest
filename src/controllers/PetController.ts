import { Request, Response } from "express";
import { PetService } from "../services/PetServices";

const petService = new PetService();

export async function getPets(req: Request, res: Response) {
  try {
    const pets = await petService.getPets();
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createPet(req: Request, res: Response) {
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
    res.status(201).json(newPet);
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
}

export async function updatePet(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const { name, species, carry, weight, dateOfBirth } = req.body;
    await petService.updatePet(id, name, species, carry, weight, dateOfBirth);
    res.status(200).end();
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
}

export async function deletePet(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    await petService.deletePet(id);
    res.status(200).end();
  } catch (error) {
    res.status(400).json({ message: "Bad request" });
  }
}
