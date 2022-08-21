import { Box } from "@mui/material";
import React from "react";

import { useQueryFinance } from "@/api/finance/useQueryFinance";
import { IMAGE_URL } from "@/assets/images";
import { Styles } from "@/theme";
import { HomeSectionLayout } from "@/widgets";

import { AccountInforWidget } from "../widget/account-infor.widget";

export interface AccountHomePageProps {}

export const AccountHomePage: React.FC<AccountHomePageProps> = () => {
    const { useGetStar } = useQueryFinance();
    const { data } = useGetStar();
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
