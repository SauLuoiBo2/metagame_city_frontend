import React from "react";

import { ConfirmRegisterWidget } from "../widgets/confirm-register-widget";

export interface ConfirmRegisterPageProps {}

export const ConfirmRegisterPage: React.FC<ConfirmRegisterPageProps> = () => {
    return (
        <>
            <ConfirmRegisterWidget />
        </>
    );
};
