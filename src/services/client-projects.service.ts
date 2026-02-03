import { prisma } from "../prisma/client";
import { AuthUser } from '../types/auth';
import { requireClientAccess } from '../utils/authorization';

export async function createClientProject(
    data: {
        clientId: string;
        title: string;
    },
    user: AuthUser
) {
    requireClientAccess(user, data.clientId);
    if (user.role !== 'ARCHITECT') {
        throw new Error('Forbidden: only architect can create projects');
    }

    return prisma.clientProject.create({
        data: {
            clientId: data.clientId,
            title: data.title,
            status: 'PLANNING',
        },
    });
}


export async function getClientProjectById(id: string, user: AuthUser) {
    const project = await prisma.clientProject.findUnique({
        where: {
            id,
        },
    });
    if (!project) {
        throw new Error('Client project not found');
    }
    requireClientAccess(user, project.clientId);
    return project;
};

export async function listClientProjects(clientId: string, user: AuthUser) {
    requireClientAccess(user, clientId);
    return prisma.clientProject.findMany({
        where: {
            clientId,
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
}