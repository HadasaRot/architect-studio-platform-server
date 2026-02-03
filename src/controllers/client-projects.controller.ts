import { Request, Response, NextFunction } from 'express';
import * as clientProjectService from '../services/client-projects.service';

export const createClientProject = async (
    req: Request,
    res: Response
) => {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const { clientId, title } = req.body;
    const project = await clientProjectService.createClientProject({
        clientId,
        title,
    }, user);

    return res.status(201).json({
        message: 'Client project created successfully',
        project,
    });
};

export const getClientProjectById = async (
    req: Request,
    res: Response
) => {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const { id } = req.params;
    const project = await clientProjectService.getClientProjectById(id, user);

    if (!project) {
        return res.status(404).json({
            message: 'Client project not found',
        });
    }

    return res.status(501).json({
        message: 'getClientProjectById not implemented',
    });
};

export const listClientProjects = async (
    req: Request,
    res: Response
) => {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const { clientId } = req.params;
    const projects = await clientProjectService.listClientProjects(clientId, user);

    return res.status(200).json({
        message: 'Client projects retrieved successfully',
        projects,
    });
};
