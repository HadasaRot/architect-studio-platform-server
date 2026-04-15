import { Request, Response, NextFunction } from 'express';

export function mockAuthMiddleware(
    req: Request,
    _res: Response,
    next: NextFunction
) {
    req.user = {
        id: '1',
        role: 'CLIENT',
        clientId: 'd63936c9-e084-4afe-aa98-837dafdf0a80',
    };
    next();
}
