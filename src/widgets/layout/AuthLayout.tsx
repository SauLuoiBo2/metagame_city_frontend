import React from "react";
import { Outlet } from "react-router-dom";

import { IMAGE_URL } from "@/assets/images";

import { HomeSectionLayout, SplashLottieLoading } from "..";

export interface AuthLayoutProps {}

export const AuthLayout: React.FC<AuthLayoutProps> = () => {
    return (
        <HomeSectionLayout bg_url={IMAGE_URL.BG.BG_1} isAlone>
            <React.Suspense fallback={<SplashLottieLoading />}>
                <Outlet />
            </React.Suspense>
        </HomeSectionLayout>
    );
};
