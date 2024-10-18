import {atomWithStorage, createJSONStorage} from 'jotai/utils';
import storage from '../MMKV/storage';

function getItem(key: string): string | null {
    const value = storage.getString(key);
    return value ? value : null;
}

function setItem(key: string, value: string): void {
    storage.set(key, value);
}

function removeItem(key: string): void {
    storage.delete(key);
}

function clearAll(): void {
    storage.clearAll();
}

type AuthAtomType = {
    accessToken: string | null;
    membershipId: string | null;
};

const authAtom = atomWithStorage<AuthAtomType>(
    'auth',
    {accessToken: null, membershipId: null},
    createJSONStorage<AuthAtomType>(() => ({
        getItem,
        setItem,
        removeItem,
        clearAll,
    })),
);

export default authAtom;
