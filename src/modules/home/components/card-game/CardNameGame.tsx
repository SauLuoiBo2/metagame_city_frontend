import React from "react";
import styled from "styled-components";

import { ASSETS } from "@/assets";

export interface CardNameGameProps {
    name?: string;
    isComing?: boolean;
}

const { FRAME } = ASSETS.IMAGE_URL;

const CardNameGame: React.FC<CardNameGameProps> = ({ name, isComing }) => {
    return (
        <Style.Wrapper>
            <img src={FRAME.FRAME_GAME_NAME} />
            {/* text */}
            <Style.Inner>
                <h4>{name || "CARO"}</h4>
                {isComing && <p style={{ fontSize: "10px" }}>coming soon</p>}
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
        flex-direction: column;
        align-items: center;
        padding-left: 20%;
        justify-content: center;
    `,
};
