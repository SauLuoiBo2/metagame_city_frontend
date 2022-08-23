import React, { PropsWithChildren } from "react";
import styled from "styled-components";

import { IMAGE_URL } from "@/assets/images";

export interface FrameBgProps extends PropsWithChildren {
    imgFrame?: any;
}

export const FrameBg: React.FC<FrameBgProps> = () => {
    return <Style.Wrapper></Style.Wrapper>;
};

const Style = {
    Wrapper: styled.div<FrameBgProps>`
        position: relative;
        background-image: ${({ imgFrame }) => `url(${imgFrame || IMAGE_URL.FRAME.FRAME_VICTORY})`};
        background-repeat: no-repeat;
        background-size: 100% 100%, cover;
        background-position: center;
        padding: 10rem 0;
        display: flex;
        align-items: center;
        min-height: 40rem;
        width: 100%;
    `,
};
