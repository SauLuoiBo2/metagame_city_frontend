import { Stack } from "@mui/material";
import React from "react";

import { ConnectWalletWidget } from "../widgets/connect-wallet/connect-wallet-widget";

export interface ConnectWalletPageProps {}

export const ConnectWalletPage: React.FC<ConnectWalletPageProps> = () => {
    return (
        <Stack spacing={5}>
            {/* <ChooseModelWidget /> */}
            <ConnectWalletWidget />
        </Stack>
    );
};
