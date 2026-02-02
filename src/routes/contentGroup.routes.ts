import { Router } from "express";
import {
    createContentGroupController,
    getContentGroupsByProjectController,
} from "../controllers/contentGroup.controller";

const router = Router();

router.post(
    "/:projectId/groups",
    createContentGroupController
);

router.get(
    "/:projectId/groups",
    getContentGroupsByProjectController
);

export default router;
