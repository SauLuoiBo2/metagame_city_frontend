import React from "react";

import { CustomSelectNftCom } from "../../components/custom-select-nft-com";
import { LayoutIntroSelectCom } from "../../components/layout-intro-select-com";

export interface ChooseModelWidgetProps {}

export const ChooseModelWidget: React.FC<ChooseModelWidgetProps> = () => {
    return (
        <LayoutIntroSelectCom title='Select Network'>
            <CustomSelectNftCom />
        </LayoutIntroSelectCom>
    );
};
