import { Router } from "express";
import { createClientProject, getClientProjectById } from "../controllers/clientProjects.controller";

const router = Router();

router.post("/", createClientProject);
router.get("/:id", getClientProjectById);

export default router;