import React from "react";
import styled from "styled-components";

import { ASSETS } from "@/assets";

export interface CardNameGameProps {
    name?: string;
}

const { FRAME } = ASSETS.IMAGE_URL;

const CardNameGame: React.FC<CardNameGameProps> = ({ name }) => {
    return (
        <Style.Wrapper>
            <img src={FRAME.FRAME_GAME_NAME} />
            {/* text */}
            <Style.Inner>
                <h4>{name || "CARO"}</h4>
            </Style.Inner>
        </Style.Wrapper>
    );
};

export default CardNameGame;

const Style = {
    Wrapper: styled.div`
        position: relative;
        cursor: pointer;
        transform: scale(1.3);

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
