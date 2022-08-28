import React, { PropsWithChildren } from "react";
import styled from "styled-components";

import { IMAGE_URL } from "@/assets/images";
import { Styles } from "@/theme";

export interface FrameTableComProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
    imgTitle?: any;
    imgFrame?: any;
    maxWidth?: string;
    isAuth?: boolean;
}

export const FrameTableCom: React.FC<FrameTableComProps> = ({
    children,
    imgTitle,
    imgFrame,
    maxWidth,
    isAuth,
    ...props
}) => {
    return (
        <Style.Wrapper isImgTitle={imgTitle} imgBg={imgFrame} maxWidth={maxWidth} isAuth={isAuth} {...props}>
            {/* content */}
            <Style.Inner className='hidden_scroll'>
                <Styles.Position.Center>{children}</Styles.Position.Center>
            </Style.Inner>
            {/* title */}
            <Style.Title>{imgTitle && <img className='wrapper-img' src={imgTitle} />}</Style.Title>
        </Style.Wrapper>
    );
};

interface StyleProps {
    isImgTitle?: boolean;
    imgBg?: any;
    maxWidth?: string;
    isAuth?: boolean;
}

const Style = {
    Wrapper: styled.div<StyleProps>`
        position: relative;
        background-image: ${({ imgBg }) => `url(${imgBg || IMAGE_URL.FRAME.FRAME_VICTORY})`};
        background-repeat: no-repeat;
        background-size: 100% 100%, cover;
        background-position: center;
        padding: ${({ isAuth }) => (isAuth ? "7rem 0" : "10rem 0")};
        margin-top: ${({ isImgTitle }) => (isImgTitle ? "10%" : null)};
        display: flex;
        align-items: center;
        min-height: 40rem;
        width: 100%;
        max-width: ${({ maxWidth }) => maxWidth || null};

        @media ${(props) => props.theme.breakpoint.md} {
            padding: 5rem 0;
            min-height: 30rem;
        }

        .wrapper-img {
            width: 100%;
        }
    `,

    Inner: styled.div`
        /* position: absolute;
        top: 0; */
        width: 100%;
        height: 100%;
        min-height: 25rem;
        overflow: hidden;
    `,
    Title: styled.div`
        position: absolute;

        top: -10%;
        display: flex;
        justify-content: center;
        width: 100%;

        img {
            max-width: 30%;

            @media ${(props) => props.theme.breakpoint.md} {
                max-width: 50%;
            }
        }
    `,
};
