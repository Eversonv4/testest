import { Router } from "express";
import {tutorController} from "../controllers/TutorControllers";

const router = Router();

router.get("/tutors", tutorController.getTutors);
router.post("/tutor", tutorController.createTutor);
router.put("/tutor/:id", tutorController.updateTutor);
router.delete("/tutor/:id", tutorController.deleteTutor);

export default router;
