import React from "react";

import { IMAGE_URL } from "@/assets/images";
import { HomeSectionLayout } from "@/widgets";

import { useAffiliateCheck } from "../hook";
import { ListAffliateWidget } from "../widget";
import { ListCommisionWidget } from "../widget/list-commision-widget";

export interface AffiliateHomePageProps {}

export const AffiliateHomePage: React.FC<AffiliateHomePageProps> = () => {
    useAffiliateCheck();

    return (
        <HomeSectionLayout bg_url={IMAGE_URL.BG.BG_MARKET} isAlone>
            <ListAffliateWidget />
            <ListCommisionWidget />
        </HomeSectionLayout>
    );
};
