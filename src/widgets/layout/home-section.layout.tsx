import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export interface HomeSectionLayoutProps extends PropsWithChildren {
    bg_url?: any;
}

export const HomeSectionLayout: React.FC<HomeSectionLayoutProps> = ({ bg_url, children }) => {
    return (
        <Style.Wrapper bg_url={bg_url}>
            <Style.Inner>{children}</Style.Inner>
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.section<HomeSectionLayoutProps>`
        background-image: ${({ bg_url }) => `url(${bg_url})`};
        background-repeat: no-repeat;
        background-size: cover;
    `,

    Inner: styled.div.attrs({
        className: "app_container",
    })`
        /* height: 100vh; */
        min-height: 50vh;

        padding: 25rem 0;
    `,
};
