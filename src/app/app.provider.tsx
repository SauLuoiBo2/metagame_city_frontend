import React from "react";

import { ToastProvider } from "@/config";
import { ModalProvider } from "@/modules/comcom";
import { SplashAppLayout } from "@/widgets";

export interface AppProviderProps {}

const AppProvider: React.FC<AppProviderProps> = () => {
    return (
        <>
            <SplashAppLayout />
            <ModalProvider />
            <ToastProvider />
        </>
    );
};

export default AppProvider;
