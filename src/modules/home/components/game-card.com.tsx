import React from "react";
import styled from "styled-components";

import { ASSETS } from "@/assets";

export interface GameCardComProps {}

const { FRAME, GAME } = ASSETS.IMAGE_URL;

export const GameCardCom: React.FC<GameCardComProps> = () => {
    return (
        <Style.Wrapper>
            <img src={FRAME.FRAME_GAME_PC} />

            <Style.ImgWrapper>
                <img src={GAME.GAME_CARO} />
            </Style.ImgWrapper>
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.div`
        display: flex;
        position: relative;
        width: fit-content;
    `,
    ImgWrapper: styled.div`
        position: absolute;
        height: 100%;
        right: 7%;
        top: 2%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 78%;
        }
    `,
};
