import React from "react";
import styled from "styled-components";

import { ASSETS } from "@/assets";

export interface CardNameGameProps {}

const { FRAME } = ASSETS.IMAGE_URL;

const CardNameGame: React.FC<CardNameGameProps> = () => {
    return (
        <Style.Wrapper>
            <img src={FRAME.FRAME_GAME_NAME} />
            {/* text */}
            <Style.Inner>
                <h4>CARO</h4>
            </Style.Inner>
        </Style.Wrapper>
    );
};

export default CardNameGame;

const Style = {
    Wrapper: styled.div`
        position: relative;
        cursor: pointer;
        :hover {
            transform: translateY(-3px) scale(1.01);
        }
    `,

    Inner: styled.div`
        position: absolute;
        top: 1rem;
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 20%;
    `,
};
