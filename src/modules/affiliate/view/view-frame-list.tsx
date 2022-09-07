import { Box, Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

import { IMAGE_URL } from "@/assets/images";
// import { FrameTableCom } from "@/components";
import MaxWidthCenterView from "@/components/views/position/max-width-center";

export interface ViewFrameListProps extends PropsWithChildren {
    title?: string;
}

export const ViewFrameList: React.FC<ViewFrameListProps> = ({ children, title }) => {
    return (
        <MaxWidthCenterView maxWidth='800px'>
            <Style.Title>
                <img src={IMAGE_URL.TITLE.TITLE_AFILIATE} />
                <Style.InnerTitle>
                    <div className='inner'>
                        <Stack direction={"row"} justifyContent='center' width='100%'>
                            <p className='ellipsis'>{title}</p>
                        </Stack>
                    </div>
                </Style.InnerTitle>
            </Style.Title>
            <Style.Wrapper>
                <Stack width='100%' height={"100%"} alignItems='center' justifyContent={"space-between"}>
                    <Box width={"80%"}>{children}</Box>
                </Stack>
            </Style.Wrapper>
        </MaxWidthCenterView>
    );
};

interface StyleProps {
    isImgTitle?: boolean;
    imgBg?: any;
    maxWidth?: string;
}

const Style = {
    Wrapper: styled.div<StyleProps>`
        position: relative;
        background-image: ${({ imgBg }) => `url(${imgBg || IMAGE_URL.FRAME.FRAME_VICTORY})`};
        background-repeat: no-repeat;
        background-size: 100% 100%, cover;
        background-position: center;
        /* padding: 10rem 0; */
        margin-top: ${({ isImgTitle }) => (isImgTitle ? "10%" : null)};
        display: flex;
        padding-top: 4rem;
        align-items: flex-start;
        min-height: 40rem;
        height: fit-content;
        width: 100%;
        max-width: ${({ maxWidth }) => maxWidth || null};

        /* @media ${(props) => props.theme.breakpoint.md} {
            padding: 5rem 0;
            min-height: 30rem;
        } */

        img {
            width: 100%;
        }
    `,

    Inner: styled.div`
        /* position: absolute;
        top: 0; */
        width: 100%;
        height: 100%;
        min-height: 100%;
    `,
    Title: styled.div`
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: center;
        width: 100%;
        transform: translateY(2rem);

        img {
            max-width: 30%;

            @media ${(props) => props.theme.breakpoint.md} {
                max-width: 50%;
            }
        }
    `,
    InnerTitle: styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .inner {
            max-width: 20rem;
            width: 40%;
        }
    `,
};
