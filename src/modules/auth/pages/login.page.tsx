import React from "react";

import LoginViewWidget from "../widgets/login-view.widget";

export interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = () => {
    return (
        <>
            <LoginViewWidget />
        </>
    );
};
