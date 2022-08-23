import React from "react";
import { Outlet } from "react-router-dom";

import { useScrollToTop } from "@/hooks/comcom";
import { Styles } from "@/theme";

import { SplashLottieSettingGear } from "../lottie";
import HeaderMainLayout from "./components/header-main-layout";
export interface MainLayoutProps {}
const { CenterApp } = Styles.Position;

export const MainLayout: React.FC<MainLayoutProps> = () => {
    useScrollToTop();

    return (
        <>
            <HeaderMainLayout />
            <main style={{ width: "100%" }}>
                <React.Suspense
                    fallback={
                        <CenterApp>
                            <div style={{ maxWidth: "900px" }}>
                                <SplashLottieSettingGear />
                            </div>
                        </CenterApp>
                    }
                >
                    <Outlet />
                </React.Suspense>
            </main>
        </>
    );
};
