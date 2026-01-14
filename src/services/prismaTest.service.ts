import { getPrisma } from "../prisma/client";

export async function prismaTest() {
    const prisma = getPrisma();

    const client = await prisma.client.create({
        data: {
            displayName: "Test Client",
        },
    });

    const foundClient = await prisma.client.findUnique({
        where: { id: client.id },
    });

    return foundClient;
}
