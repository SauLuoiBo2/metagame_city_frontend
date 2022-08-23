import React, { PropsWithChildren } from "react";
import styled from "styled-components";

import { IMAGE_URL } from "@/assets/images";
import { Styles } from "@/theme";

export interface FrameBgProps extends PropsWithChildren {
    imgFrame?: any;
}

export const FrameBg: React.FC<FrameBgProps> = ({ children }) => {
    return (
        <Style.Wrapper>
            <Style.Inner>{children}</Style.Inner>
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.div<FrameBgProps>`
        position: relative;
        background-image: ${({ imgFrame }) => `url(${imgFrame || IMAGE_URL.FRAME.FRAME_VICTORY})`};
        background-repeat: no-repeat;
        background-size: 100% 100%, cover;
        background-position: center;
        padding: 3rem 0;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        min-height: 20rem;
        width: 100%;
    `,
    Inner: styled.div`
        min-height: 100%;
    `,
};
