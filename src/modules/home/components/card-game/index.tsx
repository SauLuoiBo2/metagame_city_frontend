import React, { useRef } from "react";
import styled from "styled-components";

import { CardImageGame } from "./CardImageGame";
import CardNameGame from "./CardNameGame";

export interface CardGameProps {
    name?: string;
    icon?: any;
    linkGame?: string;
    isLeft?: boolean;
}

// href='http://google.vn' target={"_blank"}
const CardGame: React.FC<CardGameProps> = ({ name, icon, linkGame, isLeft }) => {
    function onGame() {
        window.open(linkGame, "_blank", "noopener,noreferrer");
    }
    return (
        <Style.Wrapper isLeft={isLeft} onClick={onGame}>
            <CardImageGame icon={icon} />
            <Style.ButtonWrapper isLeft={isLeft}>
                <CardNameGame name={name} />
            </Style.ButtonWrapper>
        </Style.Wrapper>
    );
};

export default CardGame;

const Style = {
    Wrapper: styled.div<CardGameProps>`
        width: fit-content;
        display: flex;
        flex-direction: ${({ isLeft }) => (isLeft ? "row" : "row-reverse")};
        align-items: flex-end;
        transform: scale(1.5);
        transform-origin: ${({ isLeft }) => (isLeft ? "left top" : "right top")};
        color: white;

        @media ${({ theme }) => theme.breakpoint.xl} {
            transform: scale(1.3);
        }

        @media ${(props) => props.theme.breakpoint.md} {
            flex-direction: column;
            align-items: center;
            transform: scale(1);
        }
    `,
    ButtonWrapper: styled.div<CardGameProps>`
        @media ${(props) => props.theme.breakpoint.lg} {
            transform: none;
        }

        @media ${(props) => props.theme.breakpoint.md} {
            transform: ${({ isLeft }) => (isLeft ? " translateX(10rem)" : " translateX(-10rem)")};
        }
    `,
};
