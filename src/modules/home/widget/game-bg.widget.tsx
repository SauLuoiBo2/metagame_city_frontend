import React from "react";
import styled from "styled-components";

import { ASSETS } from "@/assets";

import { GameCardCom } from "../components";

export interface GameBgWidgetProps {}

const { IMAGE_URL } = ASSETS;

export const GameBgWidget: React.FC<GameBgWidgetProps> = () => {
    return (
        <Style.Wrapper>
            <Style.Inner>
                <GameCardCom />
            </Style.Inner>
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.section`
        background-image: url(${IMAGE_URL.BG.BG_1});
    `,

    Inner: styled.div.attrs({
        className: "app_container",
    })`
        /* height: 100vh; */
        min-height: 50vh;
        padding: 20vh 0;
    `,
};
