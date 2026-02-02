import { Request, Response } from "express";
import {
    createContentGroup,
    getContentGroupsByProject,
} from "../services/contentGroup.service";

// POST /projects/:projectId/groups
export async function createContentGroupController(
    req: Request,
    res: Response
) {
    try {
        const { projectId } = req.params;
        const { title, order } = req.body;

        const group = await createContentGroup({
            projectId,
            title,
            order,
        });

        res.status(201).json(group);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create content group" });
    }
}

// GET /projects/:projectId/groups
export async function getContentGroupsByProjectController(
    req: Request,
    res: Response
) {
    try {
        const { projectId } = req.params;

        const groups = await getContentGroupsByProject(projectId);

        res.json(groups);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to fetch content groups" });
    }
}
