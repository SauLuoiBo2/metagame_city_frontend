import React from "react";
import styled from "styled-components";

import { ASSETS } from "@/assets";

export interface CardGameProps {
    icon?: any;
}

const { FRAME, GAME } = ASSETS.IMAGE_URL;

export const CardImageGame: React.FC<CardGameProps> = ({ icon }) => {
    return (
        <Style.Wrapper>
            <img src={FRAME.FRAME_GAME_MOBILE} className='frame_game' />
            <Style.ImgWrapper>
                <img src={icon || GAME.GAME_CARO} className='img_game' />
                <div>
                    <h5>
                        METAGAME <br></br> CITY
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
            /* transform: translateY(-3px) scale(1.01); */

            .frame_game {
                transform: translateY(-1rem) rotate(180deg) scale(0.98);
            }
            .img_game {
                transform: scale(1.01);
            }
        }
    `,
    ImgWrapper: styled.div`
        position: absolute;
        height: 100%;
        right: 10%;
        top: -2%;
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
