import React from "react";

import { ASSETS } from "@/assets";
import { HomeSectionLayout } from "@/widgets";

import CardGame from "../components/card-game";
import { CardGameProps } from "../components/card-game";

export interface GameBgWidgetProps extends CardGameProps {
    bgImg?: any;
}

const { IMAGE_URL } = ASSETS;

export const GameBgWidget: React.FC<GameBgWidgetProps> = ({ name, icon, bgImg, linkGame }) => {
    return (
        <HomeSectionLayout bg_url={bgImg || IMAGE_URL.BG.BG_1}>
            <CardGame name={name} icon={icon} linkGame={linkGame} />
        </HomeSectionLayout>
    );
};
