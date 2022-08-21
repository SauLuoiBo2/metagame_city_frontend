import React from "react";

import { ModalProvider } from "@/modules/comcom";
import { SplashAppLayout } from "@/widgets";

export interface AppProviderProps {}

const AppProvider: React.FC<AppProviderProps> = () => {
    return (
        <>
            <SplashAppLayout />
            <ModalProvider />
        </>
    );
};

export default AppProvider;
