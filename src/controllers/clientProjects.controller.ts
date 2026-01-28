import { Request, Response, NextFunction } from 'express';
import { createClientProjectService } from '../services/clientProjects.service';

export const createClientProject = async (
    req: Request,
    res: Response,
    next: NextFunction) => {
    try {
        const { clientid } = req.params;
        const { title, status } = req.body;
        if (!clientid) {
            return res.status(400).json({ error: 'Client ID is required' });
        }
        if (!title || typeof title !== 'string') {
            return res.status(400).json({ error: 'Invalid title' });
        }
        const project = await createClientProjectService({ clientid, title, status });
        // Logic to create a client project
        res.status(201).json(project);
    } catch (error) {
        next(error);
    }
};

