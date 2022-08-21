import { AuthStore, ThemeStore } from "../slices";
import { ModalStore } from "../slices/modal/modal.slice";

// ZustandStore

export interface ZustandStore extends ModalStore {}

export type SetZustandType = (
    partial: ZustandStore | Partial<ZustandStore> | ((state: ZustandStore) => ZustandStore | Partial<ZustandStore>),
    replace?: boolean | undefined
) => void;

export type GetZustandType = () => ZustandStore;

// PersistStore

export interface PersistStore extends ThemeStore, AuthStore {}

export type SetPersistType = (
    partial: PersistStore | Partial<PersistStore> | ((state: PersistStore) => PersistStore | Partial<PersistStore>),
    replace?: boolean | undefined
) => void;

export type GetPersistType = () => PersistStore;

export type PersistLocalType = {
    state: PersistStore;
};
