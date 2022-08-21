import React from "react";

import { IMAGE_URL } from "@/assets/images";
import { HomeSectionLayout } from "@/widgets";

import BuyAffiliateWidget from "../widget/buy-affiliate.widget";
export interface AffiateBuyPageProps {}

export const AffiateBuyPage: React.FC<AffiateBuyPageProps> = () => {
    return (
        <HomeSectionLayout bg_url={IMAGE_URL.BG.BG_MARKET}>
            <BuyAffiliateWidget />
        </HomeSectionLayout>
    );
};
