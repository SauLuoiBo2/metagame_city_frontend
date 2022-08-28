/* eslint-disable simple-import-sort/imports */
import { Stack } from "@mui/material";
import React from "react";

import { ICONS_URL } from "@/assets/icons";
import { IMAGE_URL } from "@/assets/images";
import { CustomIconButton } from "@/components";
import { Styles } from "@/theme";

import { LayoutIntroSelectCom } from "../../components/layout-intro-select-com";

import { useWallet } from "@/hooks/wallet";

export interface ConnectWalletWidgetProps {}

const { METAMASK, WALLET_CONNECT, COINBASE } = ICONS_URL.SOCIAL;

const buttons = [
    {
        name: "METAMASK",
        icon: METAMASK,
        isInstall: false,
        isEthereum: "INSTALL",
    },
    {
        name: "COMING SOON",
        icon: COINBASE,
        isInstall: false,
        isEthereum: "",
    },
    {
        name: "COMING SOON",
        icon: WALLET_CONNECT,
        isInstall: false,
        isEthereum: "",
    },
];
declare global {
    interface Window {
        ethereum: any;
    }
}

export const ConnectWalletWidget: React.FC<ConnectWalletWidgetProps> = () => {
    const { useWalletOnApp, handleConnectWallet, isEthereum } = useWallet();
    useWalletOnApp();
    return (
        <LayoutIntroSelectCom title='Choose Wallet'>
            <Stack>
                {buttons.map((item, i) => {
                    return (
                        <CustomIconButton key={i} icon={IMAGE_URL.FRAME.FRAME_BUTTON_LOGIN}>
                            <Stack direction={"row"} spacing={2} alignItems='center' onClick={handleConnectWallet}>
                                <img src={item.icon} style={{ width: "50px" }} />
                                <Styles.Text.BodyBig>
                                    {!isEthereum ? item.name : item.isEthereum + " " + item.name}
                                </Styles.Text.BodyBig>
                            </Stack>
                        </CustomIconButton>
                    );
                })}
            </Stack>
        </LayoutIntroSelectCom>
    );
};
