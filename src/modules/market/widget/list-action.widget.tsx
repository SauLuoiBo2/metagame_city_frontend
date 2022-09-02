import { Grid, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useBoolean } from "usehooks-ts";

import { ICONS_URL } from "@/assets/icons";
import { IMAGE_URL } from "@/assets/images";
import { CustomButton, CustomInput, FrameTableCom } from "@/components";
import LabelButon from "@/components/label/label-buton";
import MuiModal from "@/components/modal/mui-Modal";
import { supportErrorFormik } from "@/libs";
import { ButtonAction } from "@/widgets";

import { useFormGive } from "../hook";
import { BuyStartWidget } from "./buy-start-widget";

export interface ListActionWidgetProps {}

export const ListActionWidget: React.FC<ListActionWidgetProps> = () => {
    return (
        <Grid container spacing={{ xs: 1, md: 2, lg: 4 }} maxWidth={"800px"} pt={6}>
            <BuyModalView />
            <GiveModalView />
            <NftModalView />
        </Grid>
    );
};

const styleStack = {
    sx: { overflowY: "auto", maxHeight: "60%", width: "100%" },
    mx: { xs: "10%", md: "20%" },
    pt: "10%",
    alignItems: "center",
    spacing: 2,
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
    const open = useBoolean();
    const { formik, sendStar, isInstalled } = useFormGive();
    const { isLoading } = sendStar;

    const navigate = useNavigate();

    function handleGotoSet() {
        navigate("/" + "account");
    }
    return (
        <>
            <Grid item xs={4}>
                <ButtonAction onClick={open.setTrue}>
                    <LabelButon label='GIVE' preIcon={ICONS_URL.BUTTON.STAR} />
                </ButtonAction>
            </Grid>

            <MuiModal open={open.value} onClose={open.setFalse} widthModal={600}>
                <FrameTableCom imgFrame={IMAGE_URL.FRAME.FRAME_GIVE}>
                    <Stack {...styleStack} component={isInstalled ? "div" : "form"} onSubmit={formik.handleSubmit}>
                        <CustomInput
                            name='receiver'
                            value={formik.values.receiver}
                            onChange={formik.handleChange}
                            error={supportErrorFormik(formik, "receiver")}
                            placeholder='Email/Username/Wallet'
                        />
                        <CustomInput
                            name='amount'
                            value={formik.values.amount}
                            onChange={formik.handleChange}
                            error={supportErrorFormik(formik, "amount")}
                            type={"number"}
                            placeholder='Amount'
                        />
                        <CustomInput
                            name='code'
                            value={formik.values.code}
                            onChange={formik.handleChange}
                            error={supportErrorFormik(formik, "code")}
                            placeholder='Google code'
                        />
                        <CustomInput
                            type={"password"}
                            name='password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={supportErrorFormik(formik, "password")}
                            placeholder='Password'
                        />

                        <Stack sx={{ borderTop: "gray 2px solid" }} width={"100%"}>
                            {!isInstalled ? (
                                <CustomButton type='submit' isLoading={isLoading} style={{ marginTop: "2rem" }}>
                                    GIVE
                                </CustomButton>
                            ) : (
                                <CustomButton type='button' style={{ marginTop: "2rem" }} onClick={handleGotoSet}>
                                    SET 2FA
                                </CustomButton>
                            )}
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
                <ButtonAction onClick={open.setTrue}>
                    <LabelButon label='NFT' preIcon={ICONS_URL.BUTTON.NFT} />
                </ButtonAction>
            </Grid>

            <MuiModal open={open.value} onClose={open.setFalse} widthModal={800}>
                <FrameTableCom imgFrame={IMAGE_URL.FRAME.FRAME_MODAL_NFT}>
                    <h3>Coming soon</h3>
                    {/* <Grid
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
                    </Grid> */}
                </FrameTableCom>
            </MuiModal>
        </>
    );
};
