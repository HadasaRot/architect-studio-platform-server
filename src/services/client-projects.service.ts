import { prisma } from "../prisma/client";

interface createClientProjectInput {
    clientid: string;
    title: string;
    status?: string;
}

export async function createClientProjectService({ clientid, title, status }: createClientProjectInput) {
    const client = await prisma.client.findUnique({
        where: { id: clientid },
    });
    if (!client) {
        const error = new Error('Client not found');
        error.statusCode = 404;
        throw error;
    }
    const projectStatus = status ?? ClientProjectStatus.PLANNING;
    if (!Object.values(ClientProjectStatus).includes(projectStatus)) {
        const error = new Error('Invalid project status');
        error.statusCode = 400;
        throw error;
    }