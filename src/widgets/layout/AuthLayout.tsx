import React from "react";
import { Outlet } from "react-router-dom";

import { IMAGE_URL } from "@/assets/images";
import LogoLayoutAuthWidget from "@/modules/auth/widgets/logo-layout-auth.widget";

import { HomeSectionLayout, SplashLottieLoading } from "..";

export interface AuthLayoutProps {}

export const AuthLayout: React.FC<AuthLayoutProps> = () => {
    return (
        <HomeSectionLayout bg_url={IMAGE_URL.BG.BG_1} isAlone>
            <LogoLayoutAuthWidget>
                <React.Suspense fallback={<SplashLottieLoading />}>
                    <Outlet />
                </React.Suspense>
            </LogoLayoutAuthWidget>
        </HomeSectionLayout>
    );
};
