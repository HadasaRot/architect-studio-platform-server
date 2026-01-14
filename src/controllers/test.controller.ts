import { Request, Response, NextFunction } from "express";
import { prismaTest } from "../services/prismaTest.service";

export async function testPrismaController(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const result = await prismaTest();
        res.json(result);
    } catch (error) {
        next(error);
    }
}
