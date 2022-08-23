import { Stack } from "@mui/material";
import React from "react";

import { ICONS_URL } from "@/assets/icons";
import { IMAGE_URL } from "@/assets/images";
import { CustomIconButton } from "@/components";
import { Styles } from "@/theme";

import { LayoutIntroSelectCom } from "../../components/layout-intro-select-com";

export interface ConnectWalletWidgetProps {}

const { METAMASK, WALLET_CONNECT, COINBASE } = ICONS_URL.SOCIAL;

const buttons = [
    {
        name: "METAMASK",
        icon: METAMASK,
    },
    {
        name: "WalletConnect",
        icon: COINBASE,
    },
    {
        name: "Coinbase Connect",
        icon: WALLET_CONNECT,
    },
];

export const ConnectWalletWidget: React.FC<ConnectWalletWidgetProps> = () => {
    return (
        <LayoutIntroSelectCom title='Choose Wallet'>
            <Stack>
                {buttons.map((item, i) => {
                    return (
                        <CustomIconButton key={i} icon={IMAGE_URL.FRAME.FRAME_BUTTON_LOGIN}>
                            <Stack direction={"row"} spacing={2} alignItems='center'>
                                <img src={item.icon} style={{ width: "50px" }} />
                                <Styles.Text.BodyBig>{item.name}</Styles.Text.BodyBig>
                            </Stack>
                        </CustomIconButton>
                    );
                })}
            </Stack>
        </LayoutIntroSelectCom>
    );
};
