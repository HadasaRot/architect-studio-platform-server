import { prisma } from "../prisma/client";

export async function createClientProject(data: {
    clientId: string;
    title: string;
}) {
    return prisma.clientProject.create({
        data: {
            clientId: data.clientId,
            title: data.title,
            status: 'PLANNING',
        },
    });
}


export async function getClientProjectById(id: string) {
    return prisma.clientProject.findUnique({
        where: {
            id,
        },
    });
};

export async function listClientProjects(clientId: string) {
    console.log('clientId from params:', clientId);

    return prisma.clientProject.findMany({
        where: {
            clientId,
        },
    });
}