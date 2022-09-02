import CopyAllIcon from "@mui/icons-material/CopyAll";
import { Box, Button, CircularProgress, Grid, Stack } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";

import { useQueryUser } from "@/api";
import { IMAGE_URL } from "@/assets/images";
import { CustomInput, FrameTableCom } from "@/components";
import { supportErrorFormik } from "@/libs";
import { useBearStore } from "@/store/useBearStore";
import { Styles } from "@/theme";
import { light_colors } from "@/theme/base/light-color";

import { useFormChangeGoogle, useFormVerifyGoogle } from "../hook/useFormVerifyGg";

export interface ItemGgCodeComProps {}

export const ItemGgCodeCom: React.FC<ItemGgCodeComProps> = () => {
    const { useGetUser } = useQueryUser();

    const { data: user } = useGetUser();
    const isInstalled = user?.data?.tfa === "" ? true : false;

    const propsData = {
        isInstalled,
    };

    return (
        <Grid xs={12} width='100%'>
            <Grid container width='100%' minWidth={400} rowGap={2} columnSpacing={1}>
                <Grid item xs={3}>
                    <h5>2FA:</h5>
                </Grid>
                <Grid item xs={7}>
                    <StatusGgCode {...propsData} />
                </Grid>
                <Grid item xs={2}>
                    <ButtonGgCode {...propsData} />
                    {/* <p onClick={handleCall}>{call || "change"}</p> */}
                </Grid>
            </Grid>
        </Grid>
    );
};

interface ItemProps {
    isInstalled: boolean;

    onSubmit?: any;
}

const StatusGgCode: React.FC<ItemProps> = ({ isInstalled }) => {
    const { useGetUser } = useQueryUser();

    const { data: user } = useGetUser();
    const status = user?.data?.tfa === "ON" ? "Active" : "No Active";
    return (
        <>
            {isInstalled ? (
                <p style={{ color: "gray" }}>Haven&apos;t setup 2FA code</p>
            ) : (
                <p style={{ color: user?.data?.tfa === "ON" ? "green" : "red" }}> {status}</p>
            )}
        </>
    );
};

const ButtonGgCode: React.FC<ItemProps> = ({ isInstalled }) => {
    const { modalOnOpen } = useBearStore();

    function handleOpen() {
        modalOnOpen(ModalView);
    }

    function handleChangeGoogle() {
        modalOnOpen(ModalChangeGoogle);
    }

    return (
        <>
            {isInstalled ? (
                <Button onClick={handleOpen} variant='text' sx={{ px: 0 }}>
                    SetUp
                </Button>
            ) : (
                <Button onClick={handleChangeGoogle} variant='text' sx={{ px: 0 }}>
                    Change
                </Button>
                // <Switch checked={isTfa} onChange={handleChange} />
            )}
        </>
    );
};

const ModalView = () => {
    const { useGetGoogle } = useQueryUser();
    const { data } = useGetGoogle();
    function onCopy() {
        navigator.clipboard.writeText(data?.data?.tfaSecret || "");

        toast.info("Copied 2FA code");
    }
    const { formik, sendVerifyGoogle } = useFormVerifyGoogle();
    return (
        <Box>
            <FrameTableCom isAuth imgFrame={IMAGE_URL.FRAME.FRAME_USER}>
                <Stack spacing={2} alignItems='center' component={"form"} onSubmit={formik.handleSubmit}>
                    <Styles.Text.CapText style={{ color: light_colors.primary.main }}>
                        Google Authenticator
                    </Styles.Text.CapText>
                    <img src={data?.data?.tfaImg} />
                    <CustomInput
                        title='Secret Key'
                        disabled
                        iconOnclick={onCopy}
                        value={data?.data?.tfaSecret}
                        icon={<CopyAllIcon sx={{ width: 20, height: 20, color: "white" }} />}
                    />
                    <CustomInput
                        title='2FA Code'
                        name='code'
                        placeholder='Code'
                        value={formik.values.code}
                        onChange={formik.handleChange}
                        error={supportErrorFormik(formik, "code")}
                    />

                    <Button type='submit' variant='contained'>
                        {sendVerifyGoogle.isLoading ? <CircularProgress /> : "Submit"}
                    </Button>
                </Stack>
            </FrameTableCom>
        </Box>
    );
};

const ModalChangeGoogle = () => {
    const { formik, sendChangeGoogle } = useFormChangeGoogle();
    const { handleChange, values, handleSubmit } = formik;

    const { user } = useQueryUser();

    const isActive = user?.data?.tfa === "ON" ? true : false;

    return (
        <Box>
            <FrameTableCom isAuth imgFrame={IMAGE_URL.FRAME.FRAME_USER}>
                <Stack spacing={4} alignItems='center' component={"form"} onSubmit={handleSubmit} width='70%'>
                    <Styles.Text.CapText style={{ color: isActive ? "green" : light_colors.primary.main }}>
                        Google active 2FA
                    </Styles.Text.CapText>
                    <CustomInput
                        name='code'
                        placeholder='2FA Code'
                        onChange={handleChange}
                        error={supportErrorFormik(formik, "code")}
                        value={values.code}
                    />
                    {sendChangeGoogle.isLoading ? (
                        <CircularProgress sx={{ color: "blue", fontSize: "2rem" }} />
                    ) : (
                        <Button type='submit' variant='contained'>
                            CHANGE
                        </Button>
                    )}
                </Stack>
            </FrameTableCom>
        </Box>
    );
};
