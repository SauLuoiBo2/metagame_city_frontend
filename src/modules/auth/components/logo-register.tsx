import React from "react";
import styled from "styled-components";

import { IMAGE_URL } from "@/assets/images";

export interface LogoRegisterProps {}

const LogoRegister: React.FC<LogoRegisterProps> = () => {
    return <Style.Img src={IMAGE_URL.LOGO.LOGO_REGISTER} />;
};

export default LogoRegister;

const Style = {
    Img: styled.img`
        width: 50%;
        max-width: 100%;

        @media ${({ theme }) => theme.breakpoint.xl} {
            width: 60%;
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
