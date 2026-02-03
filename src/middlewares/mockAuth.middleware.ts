import { Request, Response, NextFunction } from 'express';

export function mockAuthMiddleware(
    req: Request,
    _res: Response,
    next: NextFunction
) {
    req.user = {
        id: 'mock-user-id',
        role: 'ARCHITECT', // החלף ל-CLIENT לבדיקות
        clientId: null,    // או UUID של לקוח
    };

    next();
}
