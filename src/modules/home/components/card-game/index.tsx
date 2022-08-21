import React from "react";
import styled from "styled-components";

import { CardImageGame } from "./CardImageGame";
import CardNameGame from "./CardNameGame";

export interface CardGameProps {
    name: string;
    icon?: any;
    linkGame?: string;
}

// href='http://google.vn' target={"_blank"}
const CardGame: React.FC<CardGameProps> = ({ name, icon, linkGame }) => {
    return (
        <Style.Wrapper href={linkGame} target={"_blank"}>
            <CardImageGame icon={icon} />
            <CardNameGame name={name} />
        </Style.Wrapper>
    );
};

export default CardGame;

const Style = {
    Wrapper: styled.a`
        width: fit-content;
        display: flex;
        align-items: flex-end;
        transform: scale(1.5);
        transform-origin: left top;
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
};
