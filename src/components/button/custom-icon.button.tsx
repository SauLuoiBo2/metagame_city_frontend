import React from "react";
import styled from "styled-components";

export interface CustomIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: any;
    text?: React.ReactNode;
    loading?: boolean;
    styleImg?: React.CSSProperties;
}

export const CustomIconButton: React.FC<CustomIconButtonProps> = ({
    icon,
    text,
    loading,
    styleImg,
    children,
    ...props
}) => {
    return (
        <Style.Wrapper {...props} disabled={loading}>
            <img src={icon} style={styleImg} />
            <Style.Inner className='color_main' style={{ fontSize: "11px", lineHeight: "13px" }}>
                {text}
                {children}
            </Style.Inner>
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.button`
        display: flex;
        position: relative;
        align-items: center;
        width: fit-content;
        img {
            width: 100%;
        }
    `,

    Inner: styled.p`
        position: absolute;
        top: 0;
        width: 100%;
        padding: 0 10px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -1px;
    `,
};
