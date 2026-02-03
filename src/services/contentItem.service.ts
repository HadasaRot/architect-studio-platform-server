import { prisma } from "../prisma/client";
import { ContentItemType } from "../generated/prisma";

type CreateContentItemInput = {
    groupId: string;
    type: ContentItemType;
    fileUrl?: string;
    description?: string;
};

export async function createContentItem({
    groupId,
    type,
    fileUrl,
    description,
}: CreateContentItemInput) {
    return prisma.contentItem.create({
        data: {
            contentGroupId: groupId,
            type,
            fileUrl,
            description,
        },
    });
}

export async function getContentItemsByGroup(groupId: string) {
    return prisma.contentItem.findMany({
        where: {
            contentGroupId: groupId,
        },
    });
}
