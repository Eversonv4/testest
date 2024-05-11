import { Router } from "express";
import { petController } from "../controllers/PetController";

const router = Router();

router.post("/pet/:tutorId", petController.createPet);
router.put("/pet/:petId/tutor/:tutorId", petController.updatePet);
router.delete("/pet/:petId/tutor/:tutorId", petController.deletePet);

export default router;
