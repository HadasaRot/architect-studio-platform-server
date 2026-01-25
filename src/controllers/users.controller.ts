import e, { Request, Response } from 'express';
import * as UsersService from '../services/users.service';

export const createUser = async (req: Request, res: Response) => {
    try {
        const { email, passwordHash, role, clientId } = req.body;

        const user = await UsersService.createUser(
            email,
            passwordHash,
            role,
            clientId
        );
        res.status(201).json(user);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to create user';
        res.status(400).json({ error: errorMessage });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await UsersService.getUserById(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to retrieve user';
        res.status(500).json({ error: errorMessage });
    }
};