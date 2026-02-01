import { Request, Response, NextFunction } from 'express';
import * as clientProjectService from '../services/client-projects.service';

export const createClientProject = async (
    req: Request,
    res: Response
) => {
    const { clientId, title } = req.body;
    const project = await clientProjectService.createClientProject({
        clientId,
        title,
    });

    return res.status(201).json({
        message: 'Client project created successfully',
        project,
    });
};

export const getClientProjectById = async (
    req: Request,
    res: Response
) => {
    const { id } = req.params;
    const project = await clientProjectService.getClientProjectById(id);

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
    const { clientId } = req.params;
    const projects = await clientProjectService.listClientProjects(clientId);

    return res.status(200).json({
        message: 'Client projects retrieved successfully',
        projects,
    });
};
