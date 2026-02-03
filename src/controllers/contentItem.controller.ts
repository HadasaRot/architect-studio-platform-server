import { Request, Response } from "express";
import {
    createContentItem,
    getContentItemsByGroup,
} from "../services/contentItem.service";

// POST /groups/:groupId/items
export async function createContentItemController(
    req: Request,
    res: Response
) {
    try {
        const { groupId } = req.params;
        const { type, fileUrl, description } = req.body;

        const item = await createContentItem({
            groupId,
            type,
            fileUrl,
            description,
        });

        res.status(201).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create content item" });
    }
}

// GET /groups/:groupId/items
export async function getContentItemsByGroupController(
    req: Request,
    res: Response
) {
    try {
        const { groupId } = req.params;

        const items = await getContentItemsByGroup(groupId);

        res.json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch content items" });
    }
}
