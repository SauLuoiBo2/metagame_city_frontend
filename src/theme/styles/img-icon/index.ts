import styled from "styled-components";

import { ICONS_URL } from "@/assets/icons";

interface ImgIconStyle {
    sizeXXL?: number;
    sizeXL?: number;
    sizeMD?: number;
    sizeSM?: number;
    sizeXS?: number;
}

export const stylesImgIcon = {
    Basic: styled.img`
        width: 5rem !important;
        height: 5rem !important;
        @media ${(props) => props.theme.breakpoint.lg} {
            width: 4rem !important;
            height: 4rem !important;
        }
        @media ${(props) => props.theme.breakpoint.md} {
            width: 3rem !important;
            height: 3rem !important;
        }
    `,
    Star: styled.img.attrs({
        src: ICONS_URL.BUTTON.STAR,
    })`
        width: 2.5rem;
        height: 2.5rem;
        @media ${(props) => props.theme.breakpoint.lg} {
            width: 1.8rem;
            height: 1.8rem;
        }
        @media ${(props) => props.theme.breakpoint.sm} {
            width: 1.5rem;
            height: 1.5rem;
        }
    `,

    LikeStar: styled.img`
        width: 2.5rem !important;
        height: 2.5rem !important;
        @media ${(props) => props.theme.breakpoint.lg} {
            width: 1.8rem !important;
            height: 1.8 !important;
        }
        @media ${(props) => props.theme.breakpoint.sm} {
            width: 1.5rem !important;
            height: 1.5rem !important;
        }
    `,

    Custom: styled.img<ImgIconStyle>`
        --size-xxl: ${({ sizeXXL }) => `${sizeXXL}px !important`};
        --size-xl: ${({ sizeXL }) => `${sizeXL}px !important`};

        --size-md: ${({ sizeMD }) => `${sizeMD}px !important`};

        --size-sm: ${({ sizeSM }) => `${sizeSM}px !important`};

        --size-xs: ${({ sizeXS }) => `${sizeXS}px !important`};

        @media ${(props) => props.theme.breakpoint.xxl} {
            width: var(--size-xxl);
            height: var(--size-xxl);
        }
        @media ${(props) => props.theme.breakpoint.xl} {
            width: var(--size-xl);
            height: var(--size-xl);
        }
        @media ${(props) => props.theme.breakpoint.lg} {
            width: var(--size-lg);
            width: var(--size-lg);
        }
        @media ${(props) => props.theme.breakpoint.md} {
            width: var(--size-md);
            height: var(--size-md);
        }
        @media ${(props) => props.theme.breakpoint.sm} {
            width: var(--size-sm);
            height: var(--size-sm);
        }
        @media ${(props) => props.theme.breakpoint.xs} {
            width: var(--size-xs);
            height: var(--size-xs);
        }
    `,
};
