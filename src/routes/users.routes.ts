import { Router } from "express";
import { createUser, getUserById } from "../controllers/users.controller";

const router = Router();
router.post("/", createUser);
router.get("/:id", getUserById);

export default router;