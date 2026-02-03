import { AuthUser } from '../types/auth';

export function requireArchitect(user: AuthUser) {
    if (user.role !== 'ARCHITECT') {
        throw new Error('Forbidden: architect only');
    }
}

export function requireClientAccess(
    user: AuthUser,
    clientId: string
) {
    if (user.role === 'ARCHITECT') return;

    if (user.clientId !== clientId) {
        throw new Error('Forbidden: client access denied');
    }
}
