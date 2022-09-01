import CopyAllIcon from "@mui/icons-material/CopyAll";
import { Box, Button, Grid, Stack } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";

import { useQueryUser } from "@/api";
import { IMAGE_URL } from "@/assets/images";
import { CustomInput, FrameTableCom } from "@/components";
import { supportErrorFormik } from "@/libs";
import { useBearStore } from "@/store/useBearStore";
import { Styles } from "@/theme";
import { light_colors } from "@/theme/base/light-color";

import { useFormVerifyGoogle } from "../hook/useFormVerifyGg";

export interface ItemGgCodeComProps {}

export const ItemGgCodeCom: React.FC<ItemGgCodeComProps> = () => {
    return (
        <Grid xs={12} width='100%'>
            <Grid container width='100%' minWidth={400} rowGap={2} columnSpacing={1}>
                <Grid item xs={3}>
                    <h5>2KA:</h5>
                </Grid>
                <Grid item xs={7}>
                    <StatusGgCode />
                </Grid>
                <Grid item xs={2}>
                    <ButtonGgCode />
                    {/* <p onClick={handleCall}>{call || "change"}</p> */}
                </Grid>
            </Grid>
        </Grid>
    );
};

const StatusGgCode = () => {
    return <div>dsad</div>;
};

const ButtonGgCode = () => {
    const { modalOnOpen } = useBearStore();
    function handleOpen() {
        modalOnOpen(ModalView);
    }
    return <Button onClick={handleOpen}>dsadas</Button>;
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
