import { PrismaClient } from "../generated/prisma";

export let prisma: PrismaClient;

export function getPrisma() {
    if (!prisma) {
        prisma = new PrismaClient();
    }
    return prisma;
}
