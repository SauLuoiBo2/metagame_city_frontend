import React from "react";

import RegisterViewWidget from "../widgets/register-view.widget";

export interface RegisterPageProps {}

export const RegisterPage: React.FC<RegisterPageProps> = () => {
    return (
        <>
            <RegisterViewWidget />
        </>
    );
};
