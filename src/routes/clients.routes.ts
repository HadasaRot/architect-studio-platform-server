import { Router } from "express";
import { createClient, getClientByID } from "../controllers/clients.controller";

const router = Router();

router.get("/", createClient);
router.get("/:id", getClientByID);

export default router;
