import { Router } from "express";
import { createPet, updatePet, deletePet } from "../controllers/PetController";

const router = Router();

router.post("/pet/:tutorId", createPet);
router.put("/pet/:petId/tutor/:tutorId", updatePet);
router.delete("/pet/:petId/tutor/:tutorId", deletePet);

export default router;
