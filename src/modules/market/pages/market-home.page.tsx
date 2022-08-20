import { Grid } from "@mui/material";
import React from "react";

import { IMAGE_URL } from "@/assets/images";
import { HomeSectionLayout } from "@/widgets";

import { ListActionWidget, ListHistoryWidget, ListMarketWidget } from "../widget";

export interface MarketHomePageProps {}

export const MarketHomePage: React.FC<MarketHomePageProps> = () => {
    return (
        <HomeSectionLayout bg_url={IMAGE_URL.BG.BG_MARKET}>
            <ListMarketWidget />
            <ListActionWidget />
            <ListHistoryWidget />
            <Grid container>
                <Grid item xs={8}>
                    dsadsa
                </Grid>
            </Grid>
        </HomeSectionLayout>
    );
};
