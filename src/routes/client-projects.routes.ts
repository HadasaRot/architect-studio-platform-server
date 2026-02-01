import { Router } from "express";
import { createClientProject, getClientProjectById } from "../controllers/client-projects.controller";

const router = Router();

router.post("/", createClientProject);
router.get("/:id", getClientProjectById);

export default router;