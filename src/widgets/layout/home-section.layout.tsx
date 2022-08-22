import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export interface HomeSectionLayoutProps extends PropsWithChildren, React.HtmlHTMLAttributes<HTMLDivElement> {
    bg_url?: any;
    isAlone?: boolean;
}

export const HomeSectionLayout: React.FC<HomeSectionLayoutProps> = ({ isAlone, bg_url, children, ...props }) => {
    return (
        <Style.Wrapper bg_url={bg_url} isAlone={isAlone}>
            <Style.Inner className='app_container' {...props}>
                {children}
            </Style.Inner>
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.section<HomeSectionLayoutProps>`
        background-image: ${({ bg_url }) => `url(${bg_url})`};
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        min-height: ${({ isAlone }) => (isAlone ? "100vh" : null)};
    `,

    Inner: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        /* height: 100vh; */
        min-height: 50vh;

        padding-top: 20rem;
        padding-bottom: 20rem;
        @media ${(props) => props.theme.breakpoint.md} {
            padding-top: 10rem;
            padding-bottom: 5rem;
            min-height: fit-content;
        }
    `,
};
