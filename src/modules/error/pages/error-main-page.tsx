import React from "react";

import { Styles } from "@/theme";
import { SplashLottieErrorDoodle } from "@/widgets";

export interface ErrorMainPageProps {}

export const ErrorMainPage: React.FC<ErrorMainPageProps> = () => {
    return (
        <Styles.Position.Center>
            <div style={{ maxWidth: "90rem", height: "100vh", minHeight: "60rem" }}>
                <SplashLottieErrorDoodle />
            </div>
        </Styles.Position.Center>
    );
};
