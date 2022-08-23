import React from "react";
import styled from "styled-components";

import { Styles } from "@/theme";

export interface LabelButonProps {
    title?: string;
    label?: React.ReactNode;
    preIcon?: any;
    aftIcon?: any;
}

const LabelButon: React.FC<LabelButonProps> = ({ title, preIcon, aftIcon, label }) => {
    return (
        <Style.Wrapper>
            {title && <p>{title}</p>}
            <Style.Inner>
                {preIcon && <Styles.ImgIcon.Basic src={preIcon} />}
                {label && <Styles.Text.BodyBig>{label}</Styles.Text.BodyBig>}
                {aftIcon && <Styles.ImgIcon.Basic src={aftIcon} />}
            </Style.Inner>
        </Style.Wrapper>
    );
};

export default LabelButon;

const Style = {
    Wrapper: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
    Inner: styled.div`
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;

        img {
            width: 30px !important;

            @media ${(props) => props.theme.breakpoint.md} {
                width: 20px !important;
            }
        }
    `,
};
