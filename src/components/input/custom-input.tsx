import React from "react";
import styled from "styled-components";

export interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const CustomInput: React.FC<CustomInputProps> = (props) => {
    return (
        <Style.Wrapper>
            <input {...props} />
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.div`
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.3);
        border: 1px solid #ffffff;
        border-radius: 3rem;
        width: 100%;

        @media ${(props) => props.theme.breakpoint.md} {
            padding: 0.5rem;
        }
    `,
};
