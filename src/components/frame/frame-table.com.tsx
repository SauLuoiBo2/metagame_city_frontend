import React, { PropsWithChildren } from "react";
import styled from "styled-components";

import { IMAGE_URL } from "@/assets/images";
import { Styles } from "@/theme";

export interface FrameTableComProps extends PropsWithChildren {
    imgTitle?: any;
    imgFrame?: any;
}

export const FrameTableCom: React.FC<FrameTableComProps> = ({ children, imgTitle, imgFrame }) => {
    return (
        <Style.Wrapper isImgTitle={imgTitle}>
            {/* background */}
            <img src={imgFrame || IMAGE_URL.FRAME.FRAME_VICTORY} />
            {/* content */}
            <Style.Inner>
                <Styles.Position.Center>{children}</Styles.Position.Center>
            </Style.Inner>
            {/* title */}
            <Style.Title>{imgTitle && <img src={imgTitle} />}</Style.Title>
        </Style.Wrapper>
    );
};

interface StyleProps {
    isImgTitle?: boolean;
}

const Style = {
    Wrapper: styled.section<StyleProps>`
        position: relative;
        margin-top: ${({ isImgTitle }) => (isImgTitle ? "10%" : null)};

        img {
            width: 100%;
        }
    `,

    Inner: styled.div`
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
    `,
    Title: styled.div`
        position: absolute;

        top: -10%;
        display: flex;
        justify-content: center;
        width: 100%;

        img {
            max-width: 30%;
        }
    `,
};
