import React from "react";

import { IMAGE_URL } from "@/assets/images";
import { HomeSectionLayout } from "@/widgets";

import { ListAffliateWidget } from "../widget";

export interface AffiliateHomePageProps {}

export const AffiliateHomePage: React.FC<AffiliateHomePageProps> = () => {
    return (
        <HomeSectionLayout bg_url={IMAGE_URL.BG.BG_MARKET}>
            <ListAffliateWidget />
        </HomeSectionLayout>
    );
};
