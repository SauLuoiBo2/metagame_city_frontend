import { Stack } from "@mui/material";
import React, { PropsWithChildren, useCallback } from "react";
import styled from "styled-components";

import { IMAGE_URL } from "@/assets/images";
import { Styles } from "@/theme";

export interface ItemNftValueComProps extends PropsWithChildren {
    icon?: any;
    value?: number | undefined;
}

const ItemNftValueCom: React.FC<ItemNftValueComProps> = ({ children, icon, value }) => {
    const renderBasic = useCallback(() => {
        return (
            <Stack
                maxWidth={"100%"}
                width={"100%"}
                justifyContent={"flex-start"}
                direction={"row"}
                spacing={1}
                alignItems={"center"}
            >
                <Style.ImgLabel src={icon} />
                <Style.Content>
                    <Styles.Text.BodyBig>
                        {value || 0}
                        <span>
                            {" "}
                            <Styles.ImgIcon.Star />
                        </span>
                    </Styles.Text.BodyBig>

                    {/* <img src={ICONS_URL.BUTTON.STAR} style={{ width: "20%" }} /> */}
                </Style.Content>
            </Stack>
        );
    }, [value]);

    // ########################################

    return (
        <Styles.Container.BgFrameContainer
            imgFrame={IMAGE_URL.FRAME.FRAME_ITEM_NFT}
            style={{ overflow: "hidden", paddingRight: "0.2rem", paddingLeft: "0.2rem" }}
        >
            <Style.Inner>
                <Styles.Position.Center>{children ? children : renderBasic()}</Styles.Position.Center>
            </Style.Inner>
        </Styles.Container.BgFrameContainer>
    );
};

export default ItemNftValueCom;

const Style = {
    Wrapper: styled.div`
        position: relative;
    `,

    Inner: styled.div`
        /* position: absolute; */
        top: 0;
        width: 100%;
        height: 100%;
        padding-bottom: 6%;
        padding-left: 10%;
        padding-right: 10%;
        text-align: center;
    `,

    ImgLabel: styled.img`
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
        @media ${(props) => props.theme.breakpoint.sm} {
            width: 2rem !important;
            height: 2rem !important;
        }
    `,

    Content: styled.div`
        display: flex;
        align-items: center;
        padding-left: 1rem;
        border-left: solid 2px #15a0ff;
        gap: 1rem;
    `,
};
