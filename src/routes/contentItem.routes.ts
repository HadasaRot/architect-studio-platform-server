import { Router } from "express";
import {
    createContentItemController,
    getContentItemsByGroupController,
} from "../controllers/contentItem.controller";

const router = Router();

router.post(
    "/groups/:groupId/items",
    createContentItemController
);

router.get(
    "/groups/:groupId/items",
    getContentItemsByGroupController
);

export default router;
