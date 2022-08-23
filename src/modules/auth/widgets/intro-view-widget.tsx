import React from "react";

import { LayoutIntroSelectCom, LayoutIntroSelectComProps } from "../components/layout-intro-select-com";

export interface IntroViewWidgetProps extends LayoutIntroSelectComProps {}

export const IntroViewWidget: React.FC<IntroViewWidgetProps> = ({ title }) => {
    return (
        <LayoutIntroSelectCom title={title}>
            <div>dsa</div>
        </LayoutIntroSelectCom>
    );
};
