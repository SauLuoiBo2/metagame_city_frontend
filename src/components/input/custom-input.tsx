import { Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";

import { Styles } from "@/theme";
import { light_colors } from "@/theme/base/light-color";

export interface CustomInputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    error?: string;
    title?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({ error, title, ...props }) => {
    return (
        <Stack width='100%'>
            {title && <Styles.Text.MainText>{title}:</Styles.Text.MainText>}
            <Style.Wrapper isError={error ? true : false}>
                <input {...props} />
            </Style.Wrapper>
            {error && <Styles.Text.Error>{error}</Styles.Text.Error>}
        </Stack>
    );
};

interface StyleProps {
    isError?: boolean;
}

const Style = {
    Wrapper: styled.div<StyleProps>`
        position: relative;
        padding: 0.5rem 1.5rem;
        background: rgba(255, 255, 255, 0.3);
        border-color: ${({ isError }) => (isError ? light_colors.warning.main : "#ffffff")} !important;
        border: 1px solid;
        border-radius: 3rem;
        width: 100%;
        input: {
            width: 80%;
        }

        input:disabled {
            opacity: 0.8;
            color: #c8d482;
        }

        /* @media ${(props) => props.theme.breakpoint.md} {
            padding: 0.5rem;
        } */
    `,
};
