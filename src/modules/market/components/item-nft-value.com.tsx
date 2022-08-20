import { Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";

import { ICONS_URL } from "@/assets/icons";
import { IMAGE_URL } from "@/assets/images";
import { Styles } from "@/theme";

export interface ItemNftValueComProps extends PropsWithChildren {
    icon?: any;
    value?: number;
}

const ItemNftValueCom: React.FC<ItemNftValueComProps> = ({ children, icon, value }) => {
    function renderBasic() {
        return (
            <Stack
                px={{ xs: 1, sm: 2, md: 4 }}
                width={"100%"}
                justifyContent={"flex-start"}
                direction={"row"}
                spacing={1}
                alignItems={"center"}
            >
                <Style.ImgLabel>
                    <img src={icon} />
                </Style.ImgLabel>
                <Style.Content>
                    <h3 style={{ fontSize: "20px" }}>{value || 0}</h3>
                    <img src={ICONS_URL.BUTTON.STAR} style={{ width: "20px" }} />
                </Style.Content>
            </Stack>
        );
    }
    return (
        <Style.Wrapper>
            <img src={IMAGE_URL.FRAME.FRAME_ITEM_NFT} />

            <Style.Inner>
                <Styles.Position.Center>{children ? children : renderBasic()}</Styles.Position.Center>
            </Style.Inner>
        </Style.Wrapper>
    );
};

export default ItemNftValueCom;

const Style = {
    Wrapper: styled.div`
        position: relative;
    `,

    Inner: styled.div`
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        padding-bottom: 6%;
        padding-left: 10%;
        padding-right: 10%;
        text-align: center;
    `,

    ImgLabel: styled.div`
        img {
            width: 100%;
        }
        width: 15%;
        display: flex;
        align-items: center;
    `,

    Content: styled.div`
        display: flex;
        align-items: center;
        padding-left: 1rem;
        border-left: solid 2px #15a0ff;
        gap: 1rem;
    `,
};
