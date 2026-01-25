import e from "express";
import { prisma } from "../prisma/client";

export async function createUser(email: string,
    passwordHash: string,
    role: 'ARCHITECT' | 'CLIENT',
    clientId?: string) {
    if (clientId) {
        const client = await prisma.client.findUnique({
            where: { id: clientId },
        });

        if (!client) {
            throw new Error('Client not found');
        }

        return prisma.user.create({
            data: {
                email,
                passwordHash,
                role,
                clientId: clientId ?? null,
            },
        });
    }
}

export async function getUserById(id: string) {
    return prisma.user.findUnique({
        where: { id },
    });
}