import React from "react";
import styled from "styled-components";

import { ASSETS } from "@/assets";

export interface CardGameProps {}

const { FRAME, GAME } = ASSETS.IMAGE_URL;

export const CardImageGame: React.FC<CardGameProps> = () => {
    return (
        <Style.Wrapper>
            <img src={FRAME.FRAME_GAME_PC} />
            <Style.ImgWrapper>
                <img src={GAME.GAME_CARO} />
                <div>
                    <h5>
                        METAGAME <br></br> GAME
                    </h5>
                </div>
            </Style.ImgWrapper>
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.div`
        display: flex;
        position: relative;
        width: fit-content;

        cursor: pointer;
        :hover {
            transform: translateY(-3px) scale(1.01);
        }
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

        div {
            position: absolute;
            bottom: 20%;

            h5 {
                text-align: center;
            }
        }
    `,
};
