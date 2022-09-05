import React from "react";

import { LayoutIntroSelectCom } from "../../components/layout-intro-select-com";

export interface ChooseModelWidgetProps {}

// const options = [
//     { id: 1, label: "ETH Mainnet" },
//     { id: 2, label: "BNB Mainnet" },
// ];

export const ChooseModelWidget: React.FC<ChooseModelWidgetProps> = () => {
    return (
        <LayoutIntroSelectCom title='Select Network' isClose>
            {/* <CustomSelectNftCom options={options} placeholder='chon nen tang' /> */}
        </LayoutIntroSelectCom>
    );
};
