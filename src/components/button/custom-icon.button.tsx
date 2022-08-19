import React from "react";
import styled from "styled-components";

export interface CustomIconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: any;
    text?: string;
    loading?: boolean;
}

export const CustomIconButton: React.FC<CustomIconButtonProps> = ({ icon, text, loading, ...props }) => {
    return (
        <Style.Wrapper {...props} disabled={loading}>
            <img src={icon} height='44px' />
            <Style.Inner className='color_main' style={{ fontSize: "11px", lineHeight: "13px" }}>
                {text}
            </Style.Inner>
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.button`
        display: flex;
        position: relative;
        align-items: center;
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
