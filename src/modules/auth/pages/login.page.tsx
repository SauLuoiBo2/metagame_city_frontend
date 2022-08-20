import React from "react";

import LoginViewWidget from "../widgets/login-view.widget";
import LogoLayoutAuthWidget from "../widgets/logo-layout-auth.widget";

export interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = () => {
    return (
        <LogoLayoutAuthWidget>
            <LoginViewWidget />
        </LogoLayoutAuthWidget>
    );
};
