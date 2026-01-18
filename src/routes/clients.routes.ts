import { Router } from "express";
import { createClient, getClientById } from "../controllers/clients.controller";

const router = Router();

router.get("/", createClient);
router.get("/:id", getClientById);

export default router;
