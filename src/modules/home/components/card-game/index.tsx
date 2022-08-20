import React from "react";
import styled from "styled-components";

import { CardImageGame } from "./CardImageGame";
import CardNameGame from "./CardNameGame";

export interface CardGameProps {}

const CardGame: React.FC<CardGameProps> = () => {
    return (
        <Style.Wrapper>
            <CardImageGame />
            <CardNameGame />
        </Style.Wrapper>
    );
};

export default CardGame;

const Style = {
    Wrapper: styled.div`
        width: fit-content;
        display: flex;
        align-items: flex-end;
        transform: scale(1.5);
        transform-origin: left top;

        @media ${({ theme }) => theme.breakpoint.xl} {
            transform: scale(1.3);
        }

        @media ${(props) => props.theme.breakpoint.md} {
            flex-direction: column;
            align-items: center;
            transform: scale(1);
        }
    `,
};
