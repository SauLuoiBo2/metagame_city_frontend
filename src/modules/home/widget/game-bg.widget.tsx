import React from "react";

import { ASSETS } from "@/assets";
import { HomeSectionLayout } from "@/widgets";

import CardGame from "../components/card-game";

export interface GameBgWidgetProps {}

const { IMAGE_URL } = ASSETS;

export const GameBgWidget: React.FC<GameBgWidgetProps> = () => {
    return (
        <HomeSectionLayout bg_url={IMAGE_URL.BG.BG_1}>
            <CardGame />
        </HomeSectionLayout>
    );
};
