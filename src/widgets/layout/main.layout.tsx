import React from "react";
import { Outlet } from "react-router-dom";

import { useScrollToTop } from "@/hooks/comcom";

// import { usePersistStore } from "@/store/useBearStore";
import HeaderMainLayout from "./components/header-main-layout";
export interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = () => {
    // const { themeColorMode, themeColorOnToggle } = usePersistStore();
    useScrollToTop();
    return (
        <>
            {/* <header style={{ margin: "auto" }}>
                <div>{themeColorMode}</div>
                <button onClick={themeColorOnToggle}>thmeme</button>
            </header> */}
            <HeaderMainLayout />
            <main style={{ width: "100%" }}>
                <React.Suspense fallback={<div>loanding ...</div>}>
                    <Outlet />
                </React.Suspense>
            </main>
            <footer>footer</footer>
        </>
    );
};
