import styled from "styled-components";

import { light_colors } from "@/theme/base/light-color";

export const stylesText = {
    Error: styled.p`
        color: ${light_colors.warning.main};
        font-size: 1.3rem;
    `,

    MainText: styled.p`
        font-size: 1.6rem;
        font-weight: 400;
    `,
    CapText: styled.h5`
        font-size: 2rem;
        font-weight: 700;
    `,
    BodyBig: styled.h4`
        font-size: 3.5rem;

        @media ${(props) => props.theme.breakpoint.xxl} {
            font-size: 3.5rem;
        }
        @media ${(props) => props.theme.breakpoint.xl} {
            font-size: 3rem;
        }
        @media ${(props) => props.theme.breakpoint.lg} {
            font-size: 2.7rem;
        }
        @media ${(props) => props.theme.breakpoint.md} {
            font-size: 2.3rem;
        }
        @media ${(props) => props.theme.breakpoint.sm} {
            font-size: 1.6rem;
        }
        @media ${(props) => props.theme.breakpoint.xs} {
            font-size: 1.7rem;
        }
    `,
};
