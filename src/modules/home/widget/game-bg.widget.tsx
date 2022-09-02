import { Stack } from "@mui/material";
import React from "react";

import { ASSETS } from "@/assets";
import { HomeSectionLayout } from "@/widgets";

import CardGame from "../components/card-game";
import { CardGameProps } from "../components/card-game";

export interface GameBgWidgetProps extends CardGameProps {
    bgImg?: any;
    isTop?: boolean;
}

const { IMAGE_URL } = ASSETS;

export const GameBgWidget: React.FC<GameBgWidgetProps> = ({ isLeft, name, icon, bgImg, linkGame, isTop }) => {
    return (
        <HomeSectionLayout bg_url={bgImg || IMAGE_URL.BG.BG_1}>
            <Stack
                width='100%'
                direction={"row"}
                justifyContent={isLeft ? "flex-start" : "flex-end"}
                pt={{ xs: isTop ? 10 : 0, lg: isTop ? 15 : 0 }}
            >
                <CardGame name={name} icon={icon} linkGame={linkGame} isLeft={isLeft} />
            </Stack>
        </HomeSectionLayout>
    );
};
