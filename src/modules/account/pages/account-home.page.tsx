import { Box } from "@mui/material";
import React from "react";

import { IMAGE_URL } from "@/assets/images";
import { Styles } from "@/theme";
import { HomeSectionLayout } from "@/widgets";

import { AccountInforWidget } from "../widget/account-infor.widget";

export interface AccountHomePageProps {}

export const AccountHomePage: React.FC<AccountHomePageProps> = () => {
    return (
        <HomeSectionLayout bg_url={IMAGE_URL.BG.BG_MARKET}>
            <Styles.Position.Center>
                <Box sx={{ maxWidth: "90%", width: "600px" }}>
                    <AccountInforWidget />
                </Box>
            </Styles.Position.Center>
        </HomeSectionLayout>
    );
};
