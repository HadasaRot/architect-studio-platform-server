import { Request, Response } from 'express';
import * as ClientsService from '../services/clients.service';

export const createClient = async (req: Request, res: Response) => {
    const { displayName } = req.body;
    if (!displayName || typeof displayName !== 'string') {
        return res.status(400).json({ error: 'Invalid displayName' });
    }
    try {
        const client = await ClientsService.createClient(displayName);
        return res.status(201).json(client);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to create client' });
    }
};

export const getClientById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const client = await ClientsService.getClientById(id);
        if (!client) {
            return res.status(404).json({ error: 'Client not found' });
        }
        return res.status(200).json(client);
    } catch (error) {
        return res.status(500).json({ error: 'Failed to retrieve client' });
    }
};