import React from "react";

import { IMAGE_URL } from "@/assets/images";
import { HomeSectionLayout } from "@/widgets";

import ListVictoryWidget from "../widget/list-victory.widget";

export interface ArchievementHomePageProps {}

export const ArchievementHomePage: React.FC<ArchievementHomePageProps> = () => {
    return (
        <HomeSectionLayout bg_url={IMAGE_URL.BG.BG_1}>
            <ListVictoryWidget />
            <ListVictoryWidget />
            <ListVictoryWidget />
        </HomeSectionLayout>
    );
};
