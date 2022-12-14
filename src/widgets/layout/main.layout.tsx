import React from "react";
import { Outlet } from "react-router-dom";

import { useScrollToTop } from "@/hooks/comcom";
import { useWallet } from "@/hooks/wallet";
import { Styles } from "@/theme";

import { SplashLottieSettingGear } from "../lottie";
import HeaderMainLayout from "./components/header-main-layout";
export interface MainLayoutProps {}
const { CenterApp } = Styles.Position;

export const MainLayout: React.FC<MainLayoutProps> = () => {
    useScrollToTop();
    const { useWalletOnApp } = useWallet();
    useWalletOnApp();
    return (
        <>
            <HeaderMainLayout />
            <main style={{ width: "100%", background: "black" }}>
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
