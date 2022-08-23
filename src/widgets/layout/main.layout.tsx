import React from "react";
import { Outlet } from "react-router-dom";

import { useScrollToTop } from "@/hooks/comcom";

import HeaderMainLayout from "./components/header-main-layout";
export interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = () => {
    useScrollToTop();

    return (
        <>
            <HeaderMainLayout />
            <main style={{ width: "100%" }}>
                <React.Suspense fallback={<div>loanding ...</div>}>
                    <Outlet />
                </React.Suspense>
            </main>
        </>
    );
};
