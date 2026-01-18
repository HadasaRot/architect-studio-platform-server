import { Request, Response } from 'express';

export const createClient = async (req: Request, res: Response) => {
    return res.status(501).json({ message: 'Not implemented' });
};

export const getClientById = async (req: Request, res: Response) => {
    return res.status(501).json({ message: 'Not implemented' });
};