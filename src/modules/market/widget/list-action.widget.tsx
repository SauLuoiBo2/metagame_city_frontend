import { Grid } from "@mui/material";
import React from "react";
import { useBoolean } from "usehooks-ts";

import { ICONS_URL } from "@/assets/icons";
import { IMAGE_URL } from "@/assets/images";
import { FrameTableCom } from "@/components";
import LabelButon from "@/components/label/label-buton";
import MuiModal from "@/components/modal/mui-Modal";
import { useBearStore } from "@/store/useBearStore";
import { ButtonAction } from "@/widgets";

import { BuyStartWidget } from "./buy-start-widget";
import { GiveStarWidget } from "./give-star-widget";

export interface ListActionWidgetProps {}

export const ListActionWidget: React.FC<ListActionWidgetProps> = () => {
    return (
        <Grid container spacing={{ xs: 1, md: 2, lg: 4 }} maxWidth={"800px"} py={6}>
            <BuyModalView />
            <GiveModalView />
            <NftModalView />
        </Grid>
    );
};

const BuyModalView = () => {
    const open = useBoolean();

    return (
        <>
            <Grid item xs={4}>
                <ButtonAction onClick={open.setTrue}>
                    <LabelButon label='BUY' preIcon={ICONS_URL.BUTTON.STAR} />
                </ButtonAction>
            </Grid>

            <MuiModal open={open.value} onClose={open.setFalse} widthModal={600}>
                <BuyStartWidget />
            </MuiModal>
        </>
    );
};

const GiveModalView = () => {
    const { modalOnOpen } = useBearStore();

    return (
        <>
            <Grid item xs={4}>
                <ButtonAction onClick={() => modalOnOpen(GiveStarWidget)}>
                    <LabelButon label='GIVE' preIcon={ICONS_URL.BUTTON.STAR} />
                </ButtonAction>
            </Grid>
            {/* <MuiModal open={open.value} onClose={open.setFalse} widthModal={600}>
                <GiveStarWidget />
            </MuiModal> */}
        </>
    );
};

const NftModalView = () => {
    const open = useBoolean();

    return (
        <>
            <Grid item xs={4}>
                <ButtonAction onClick={open.setTrue}>
                    <LabelButon label='NFT' preIcon={ICONS_URL.BUTTON.NFT} />
                </ButtonAction>
            </Grid>

            <MuiModal open={open.value} onClose={open.setFalse} widthModal={600}>
                <FrameTableCom imgFrame={IMAGE_URL.FRAME.FRAME_MODAL_NFT}>
                    <h3>Coming soon</h3>
                </FrameTableCom>
            </MuiModal>
        </>
    );
};
