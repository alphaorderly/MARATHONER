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

const languageAtom = atomWithStorage<string | null>(
    'language',
    null,
    createJSONStorage(() => ({
        getItem,
        setItem,
        removeItem,
        clearAll,
    })),
);

export default languageAtom;
