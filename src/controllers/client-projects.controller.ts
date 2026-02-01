import { Request, Response, NextFunction } from 'express';
import { createClientProjectService } from '../services/client-projects.service';

export const createClientProject = async (
    req: Request,
    res: Response
) => {
    return res.status(501).json({
        message: 'createClientProject not implemented',
    });
};

export const getClientProjectById = async (
    req: Request,
    res: Response
) => {
    return res.status(501).json({
        message: 'getClientProjectById not implemented',
    });
};
