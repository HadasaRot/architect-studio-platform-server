export type AuthUser = {
    id: string;
    role: 'ARCHITECT' | 'CLIENT';
    clientId: string | null;
};
