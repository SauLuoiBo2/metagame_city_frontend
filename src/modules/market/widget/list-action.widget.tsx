import { Grid, Stack } from "@mui/material";
import React from "react";
import { useBoolean } from "usehooks-ts";

import { ICONS_URL } from "@/assets/icons";
import { IMAGE_URL } from "@/assets/images";
import { CustomInput, FrameTableCom, GridItemHalfFull } from "@/components";
import LabelButon from "@/components/label/label-buton";
import MuiModal from "@/components/modal/mui-Modal";
import { Styles } from "@/theme";
import { ButtonAction } from "@/widgets";

import ItemNftValueCom from "../components/item-nft-value.com";

export interface ListActionWidgetProps {}

export const ListActionWidget: React.FC<ListActionWidgetProps> = () => {
    return (
        <>
            <Stack maxWidth={"800px"} justifyContent={"space-around"} direction={"row"} flexWrap={"wrap"}>
                <Grid container>
                    <BuyModalView />
                    <GiveModalView />
                    <NftModalView />
                </Grid>
            </Stack>
        </>
    );
};

const styleStack = {
    sx: { overflowY: "auto", maxHeight: "60%", width: "100%", padding: "0 20%" },
    alignItems: "center",
    spacing: 2,
};
const BuyModalView = () => {
    const open = useBoolean();

    return (
        <>
            <Grid item xs={4}>
                <ButtonAction style={{ margin: "0 2rem" }} onClick={open.setTrue}>
                    <LabelButon label='BUY' preIcon={ICONS_URL.BUTTON.STAR} />
                </ButtonAction>
            </Grid>

            <MuiModal open={open.value} onClose={open.setFalse} widthModal={600}>
                <FrameTableCom imgFrame={IMAGE_URL.FRAME.FRAME_BUY}>
                    <Stack {...styleStack} spacing={1}>
                        <ItemNftValueCom>
                            <Styles.Position.Center>
                                <Stack direction={"row"} spacing={1}>
                                    <h3 className='text_big'>
                                        1
                                        <span>
                                            <img src={ICONS_URL.BUTTON.STAR} style={{ width: "20px" }} />
                                        </span>
                                        = 0.1USDT
                                    </h3>
                                </Stack>
                            </Styles.Position.Center>
                        </ItemNftValueCom>

                        <div style={{ width: "100%" }}>
                            <p style={{ textAlign: "end" }}> BNB Mainet</p>
                        </div>

                        <CustomInput placeholder='Amount' />
                        <div style={{ width: "100%" }}>
                            <p style={{ textAlign: "end" }}>
                                {" "}
                                Min 1000{" "}
                                <span>
                                    {" "}
                                    <img src={ICONS_URL.BUTTON.STAR} style={{ width: "20px" }} />
                                </span>
                            </p>
                        </div>
                        <Stack sx={{ borderTop: "gray 2px solid" }} width={"100%"}>
                            <Styles.Button.Basic style={{ marginTop: "2rem" }}>BUY</Styles.Button.Basic>
                        </Stack>
                    </Stack>
                </FrameTableCom>
            </MuiModal>
        </>
    );
};

const GiveModalView = () => {
    const open = useBoolean();

    return (
        <>
            <Grid item xs={4}>
                <ButtonAction style={{ margin: "0 2rem" }} onClick={open.setTrue}>
                    <LabelButon label='GIVE' preIcon={ICONS_URL.BUTTON.STAR} />
                </ButtonAction>
            </Grid>

            <MuiModal open={open.value} onClose={open.setFalse} widthModal={600}>
                <FrameTableCom imgFrame={IMAGE_URL.FRAME.FRAME_GIVE}>
                    <Stack {...styleStack}>
                        <CustomInput placeholder='Email' />
                        <CustomInput placeholder='Amount' />
                        <CustomInput placeholder='Password' />

                        <Stack sx={{ borderTop: "gray 2px solid" }} width={"100%"}>
                            <Styles.Button.Basic style={{ marginTop: "2rem" }}>GIVE</Styles.Button.Basic>
                        </Stack>
                    </Stack>
                </FrameTableCom>
            </MuiModal>
        </>
    );
};

const NftModalView = () => {
    const open = useBoolean();

    return (
        <>
            <Grid item xs={4}>
                <ButtonAction style={{ margin: "0 2rem" }} onClick={open.setTrue}>
                    <LabelButon label='NFT' preIcon={ICONS_URL.BUTTON.NFT} />
                </ButtonAction>
            </Grid>

            <MuiModal open={open.value} onClose={open.setFalse} widthModal={800}>
                <FrameTableCom imgFrame={IMAGE_URL.FRAME.FRAME_MODAL_NFT}>
                    <Grid
                        container
                        columnSpacing={2}
                        rowSpacing={1}
                        mx={"10%"}
                        sx={{ overflowY: "auto", maxHeight: "70%" }}
                    >
                        <GridItemHalfFull>
                            <ButtonAction>
                                <LabelButon title={"tai khoan nap"} label='24' aftIcon={ICONS_URL.BUTTON.STAR} />
                            </ButtonAction>
                        </GridItemHalfFull>
                        <GridItemHalfFull>
                            <ButtonAction style={{ margin: "0 2rem" }} onClick={open.setTrue}>
                                <LabelButon title={"tai khoan affiate"} label='24' aftIcon={ICONS_URL.BUTTON.STAR} />
                            </ButtonAction>
                        </GridItemHalfFull>
                        <GridItemHalfFull>
                            <ButtonAction />
                        </GridItemHalfFull>
                        <GridItemHalfFull>
                            <ButtonAction>
                                <LabelButon title={"tai khoan thuong"} label='24' aftIcon={ICONS_URL.BUTTON.STAR} />
                            </ButtonAction>
                        </GridItemHalfFull>
                        <Grid xs={12} borderBottom={"solid 2px gray"}>
                            <Stack my={2} />
                        </Grid>
                        <GridItemHalfFull>
                            <ButtonAction>
                                <LabelButon title={"tai khoan thuong"} label='24' aftIcon={ICONS_URL.BUTTON.STAR} />
                            </ButtonAction>
                        </GridItemHalfFull>
                        <GridItemHalfFull>
                            <ButtonAction>
                                <LabelButon title={"tai khoan thuong"} label='24' aftIcon={ICONS_URL.BUTTON.STAR} />
                            </ButtonAction>
                        </GridItemHalfFull>
                    </Grid>
                </FrameTableCom>
            </MuiModal>
        </>
    );
};
