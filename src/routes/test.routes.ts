import { Router } from "express";
import { testPrismaController } from "../controllers/test.controller";

const router = Router();

router.get("/prisma-test", testPrismaController);

export default router;
