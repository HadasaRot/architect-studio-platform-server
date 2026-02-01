import { Request, Response, NextFunction } from 'express';
import * as clientProjectService from '../services/client-projects.service';

export const createClientProject = async (
    req: Request,
    res: Response
) => {
    await clientProjectService.createClientProject({
        clientId: '',
        name: '',
    });

    return res.status(501).json({
        message: 'createClientProject not implemented',
    });
};

export const getClientProjectById = async (
    req: Request,
    res: Response
) => {
    await clientProjectService.getClientProjectById('');

    return res.status(501).json({
        message: 'getClientProjectById not implemented',
    });
};
