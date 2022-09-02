import CopyAllIcon from "@mui/icons-material/CopyAll";
import { Box, Button, Grid, Stack } from "@mui/material";
import Switch from "@mui/material/Switch";
import React from "react";
import { toast } from "react-toastify";

import { useQueryUser } from "@/api";
import { IMAGE_URL } from "@/assets/images";
import { CustomInput, CustomInputProps, FrameTableCom } from "@/components";
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

    const { formik } = useFormChangeGoogle();
    const { handleChange, handleSubmit } = formik;

    return (
        <Grid xs={12} width='100%'>
            <Grid container width='100%' minWidth={400} rowGap={2} columnSpacing={1}>
                <Grid item xs={3}>
                    <h5>2KA:</h5>
                </Grid>
                <Grid item xs={7}>
                    <StatusGgCode
                        {...propsData}
                        onChange={handleChange}
                        error={supportErrorFormik(formik, "code")}
                        value={formik.values.code}
                    />
                </Grid>
                <Grid item xs={2}>
                    <ButtonGgCode {...propsData} onSubmit={handleSubmit} />
                    {/* <p onClick={handleCall}>{call || "change"}</p> */}
                </Grid>
            </Grid>
        </Grid>
    );
};

interface ItemProps extends CustomInputProps {
    isInstalled: boolean;

    onSubmit?: any;
}

const StatusGgCode: React.FC<ItemProps> = ({ isInstalled, ...props }) => {
    return <>{isInstalled ? <p>Chua set up</p> : <CustomInput name='code' placeholder='Google Code' {...props} />}</>;
};

const ButtonGgCode: React.FC<ItemProps> = ({ isInstalled, onSubmit }) => {
    const { modalOnOpen } = useBearStore();

    function handleOpen() {
        modalOnOpen(ModalView);
    }
    const { useGetUser } = useQueryUser();

    const { data: user } = useGetUser();

    const isTfa = user?.data?.tfa === "ON" ? true : false;
    function handleChange() {
        onSubmit();
    }

    return (
        <>
            {isInstalled ? (
                <Button onClick={handleOpen} variant='contained' sx={{ px: 0 }}>
                    SetUp
                </Button>
            ) : (
                <Switch checked={isTfa} onChange={handleChange} />
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
    const { formik } = useFormVerifyGoogle();
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
                        Submit
                    </Button>
                </Stack>
            </FrameTableCom>
        </Box>
    );
};
