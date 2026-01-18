
import { prisma } from '../prisma/client';
export const createClient = async (displayName: string) => {
    return prisma.client.create({
        data: {
            displayName,
        },
    });
};
export const getClientById = async (id: string) => {
    return prisma.client.findUnique({
        where: { id },
    });
};