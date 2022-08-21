import React from "react";
import { Outlet } from "react-router-dom";

import { useScrollPostion, useScrollToTop } from "@/hooks/comcom";
import ModalProvider from "@/modules/comcom/provider/modal.provider";

// import { usePersistStore } from "@/store/useBearStore";
import HeaderMainLayout from "./components/header-main-layout";
export interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = () => {
    useScrollToTop();
    const scrollPosition = useScrollPostion();

    return (
        <>
            {scrollPosition < 100 && <HeaderMainLayout />}
            <main style={{ width: "100%" }}>
                <React.Suspense fallback={<div>loanding ...</div>}>
                    <Outlet />
                </React.Suspense>
            </main>
            <ModalProvider />
        </>
    );
};
