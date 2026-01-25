
import { prisma } from "../prisma/client";

export async function createClient(displayName: string) {
    return prisma.client.create({
        data: {
            displayName,
        },
    });
};
export async function getClientById(id: string) {
    return prisma.client.findUnique({
        where: { id },
    });
};
