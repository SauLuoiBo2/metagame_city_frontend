import { Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";

import { Styles } from "@/theme";
import { light_colors } from "@/theme/base/light-color";

export interface CustomInputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    error?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({ error, ...props }) => {
    return (
        <Stack width='100%'>
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
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.3);
        border-color: ${({ isError }) => (isError ? light_colors.warning.main : "#ffffff")} !important;
        border: 1px solid;
        border-radius: 3rem;
        width: 100%;

        @media ${(props) => props.theme.breakpoint.md} {
            padding: 0.5rem;
        }
    `,
};
