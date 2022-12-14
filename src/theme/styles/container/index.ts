import styled from "styled-components";

import { IMAGE_URL } from "@/assets/images";

export interface BgFrameContainerProps {
    imgFrame?: any;
}

export const stylesContainer = {
    AppContainer: styled.div``,

    BgFrameContainer: styled.div<BgFrameContainerProps>`
        position: relative;
        background-image: ${({ imgFrame }) => `url(${imgFrame || IMAGE_URL.FRAME.FRAME_VICTORY})`};
        background-repeat: no-repeat;
        background-size: 100% 100%, cover;
        background-position: center;
        display: flex;
        align-items: center;
        width: 100%;
        height: fit-content;
        padding: 2rem 0;
    `,
};
