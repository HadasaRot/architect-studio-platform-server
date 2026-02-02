import { prisma } from "../prisma/client";

type CreateContentGroupInput = {
    projectId: string;
    title: string;
    order: number;
};

export async function createContentGroup({
    projectId,
    title,
    order,
}: CreateContentGroupInput) {
    return prisma.contentGroup.create({
        data: {
            clientProjectId: projectId,
            title,
            order,
        },
    });
}

export async function getContentGroupsByProject(projectId: string) {
    return prisma.contentGroup.findMany({
        where: {
            clientProjectId: projectId,
        },
        orderBy: {
            order: "asc",
        },
    });
}
