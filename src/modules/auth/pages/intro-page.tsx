import React from "react";

import { SelectLoginWidget } from "../widgets/intro/select-login-widget";

export interface IntroPageProps {}

export const IntroPage: React.FC<IntroPageProps> = () => {
    return (
        <>
            <SelectLoginWidget />
        </>
    );
};
