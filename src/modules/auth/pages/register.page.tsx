import React from "react";

import LogoLayoutAuthWidget from "../widgets/logo-layout-auth.widget";
import RegisterViewWidget from "../widgets/register-view.widget";

export interface RegisterPageProps {}

export const RegisterPage: React.FC<RegisterPageProps> = () => {
    return (
        <>
            <RegisterViewWidget />
        </>
    );
};
