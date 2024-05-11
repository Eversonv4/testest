import { Router } from "express";
import {
  getTutors,
  createTutor,
  updateTutor,
  deleteTutor,
} from "../controllers/TutorControllers";

const router = Router();

router.get("/tutors", getTutors);
router.post("/tutor", createTutor);
router.put("/tutor/:id", updateTutor);
router.delete("/tutor/:id", deleteTutor);

export default router;
