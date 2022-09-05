import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export interface HomeSectionLayoutProps extends PropsWithChildren, React.HtmlHTMLAttributes<HTMLDivElement> {
    bg_url?: any;
    isAlone?: boolean;
    isAuth?: boolean;
}

export const HomeSectionLayout: React.FC<HomeSectionLayoutProps> = ({
    isAuth,
    isAlone,
    bg_url,
    children,
    ...props
}) => {
    return (
        <Style.Wrapper bg_url={bg_url} isAlone={isAlone}>
            <Style.Inner className='app_container' {...props} isAuth={isAuth}>
                {children}
            </Style.Inner>
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.section<HomeSectionLayoutProps>`
        width: 100%;
        background-image: ${({ bg_url }) => `url(${bg_url})`};
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        min-height: ${({ isAlone }) => (isAlone ? "100vh" : null)};
        padding-top: ${({ isAlone }) => (isAlone ? "10rem" : null)};

        @media ${(props) => props.theme.breakpoint.sm} {
            padding-top: ${({ isAlone }) => (isAlone ? "5rem" : null)};
        }
    `,

    Inner: styled.div<HomeSectionLayoutProps>`
        display: flex;
        flex-direction: column;
        align-items: center;
        /* height: 100vh; */
        min-height: ${({ isAuth }) => (isAuth ? "100vh" : "50vh")};
        justify-content: center;
        padding-top: ${({ isAuth }) => (isAuth ? "5rem" : "5rem")};
        padding-bottom: ${({ isAuth }) => (isAuth ? "5rem" : "20rem")};
        @media ${(props) => props.theme.breakpoint.md} {
            padding-top: 10rem;
            padding-bottom: 5rem;
            min-height: fit-content;
        }
    `,
};
