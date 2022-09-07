import React from "react";

import { GetZustandType, SetZustandType } from "@/store/model";

export type ModalStateType = {
    isOpen: boolean;
    children: any;
};

export interface ModalStore {
    modal: ModalStateType;
    modalOnClose: () => void;
    modalOnOpen: (children: any) => void;
}

const modal: ModalStateType = {
    isOpen: false,
    children: null,
};

export const modalSlice: (set: SetZustandType, get: GetZustandType) => ModalStore = (set, get) => ({
    // color_theme: initialState,
    modal,
    modalOnClose: () => {
        set({ modal });
    },
    modalOnOpen: (children: React.ReactNode) => {
        set({ modal: { ...get().modal, children, isOpen: true } });
    },
});
