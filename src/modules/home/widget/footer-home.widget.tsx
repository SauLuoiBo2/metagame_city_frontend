import React from "react";
import styled from "styled-components";

import { ASSETS } from "@/assets";
import { CustomIconButton } from "@/components";
import { HomeSectionLayout } from "@/widgets";

import { config } from "../config";

export interface FooterHomeWidgetProps {}

const FooterHomeWidget: React.FC<FooterHomeWidgetProps> = () => {
    return (
        <HomeSectionLayout bg_url={ASSETS.IMAGE_URL.BG.BG_7} style={{ padding: "5rem 0", minHeight: "fit-content" }}>
            <Style.Wrapper>
                <Style.TextWrapper>
                    <h1>METAGAMECITY</h1>
                </Style.TextWrapper>

                <Style.IconsWrapper>
                    {config.footer.map((item, i) => {
                        return <CustomIconButton icon={item.icon} key={i} styleImg={{ height: "90px" }} />;
                    })}
                </Style.IconsWrapper>
            </Style.Wrapper>
        </HomeSectionLayout>
    );
};

export default FooterHomeWidget;

const Style = {
    Wrapper: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `,

    TextWrapper: styled.div`
        margin-bottom: 3rem;
        opacity: 0.15;
        text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.06);
    `,

    IconsWrapper: styled.div`
        display: flex;
        justify-content: space-around;
        gap: 5rem;
        flex-wrap: wrap;
    `,
};
