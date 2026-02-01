import { Router } from "express";
import { createClient, getClientById } from "../controllers/clients.controller";
import { listClientProjects, } from '../controllers/client-projects.controller';

const router = Router();

router.post("/", createClient);
router.get("/:id", getClientById);
router.get("/:clientId/projects", listClientProjects);

export default router;
