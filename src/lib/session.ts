import { writable, type Writable } from 'svelte/store';

type User = {
    email?: string | null;
    displayName?: string | null;
    photoURL?: string | null;
    uid?: string | null;
    accessToken?: string | null;
};

export type SessionState = {
    user: User | null;
    loggedIn?: boolean;
    isAdmin?: boolean;
};

export const session = <Writable<SessionState>>writable();