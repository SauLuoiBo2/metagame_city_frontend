import { Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";

import { IMAGE_URL } from "@/assets/images";

export interface LogoRegisterProps {}

const LogoRegister: React.FC<LogoRegisterProps> = () => {
    return (
        <Stack alignItems={"center"} width='100%'>
            <Style.Img src={IMAGE_URL.LOGO.LOGO_REGISTER} />
        </Stack>
    );
};

export default LogoRegister;

const Style = {
    Img: styled.img`
        width: 80%;
        max-width: 100%;

        @media ${({ theme }) => theme.breakpoint.xl} {
            width: 75%;
        }

        @media ${(props) => props.theme.breakpoint.lg} {
            width: 70%;
        }
        @media ${(props) => props.theme.breakpoint.md} {
            width: 80%;
        }
        @media ${(props) => props.theme.breakpoint.sm} {
            width: 90%;
        }
    `,
};
