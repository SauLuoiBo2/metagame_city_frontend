import React from "react";

import { ForgotViewWidget } from "../widgets/forgot-view-widget";

export interface ForgotPasswordPageProps {}

export const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = () => {
    return (
        <>
            <ForgotViewWidget />
        </>
    );
};
