import { Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { ICONS_URL } from "@/assets/icons";
import { IMAGE_URL } from "@/assets/images";
import { CustomIconButton, CustomInput, FrameTableCom } from "@/components";
import { supportErrorFormik } from "@/libs";
import { PATH } from "@/router/pathname";
import { Styles } from "@/theme";

import { useFormUpdateAccount } from "../hook/useFormUpdateAccount";

export interface AccountInforWidgetProps {}

export const AccountInforWidget: React.FC<AccountInforWidgetProps> = () => {
    const navigate = useNavigate();

    const { user, formik } = useFormUpdateAccount();
    return (
        <FrameTableCom imgFrame={IMAGE_URL.FRAME.FRAME_ACCOUNT}>
            <Stack mx={1} width={"80%"} alignItems={"center"} spacing={2}>
                <h3>ACCOUNT</h3>
                <CustomInput
                    placeholder='User name'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={supportErrorFormik(formik, "username")}
                />
                <CustomInput placeholder='Email' value={user?.email} disabled />
                <CustomInput placeholder='Phone number' />
                <CustomInput placeholder='Password' />
                <CustomInput placeholder='Confirm password' />

                <Stack pt={10} width='100%' direction={"row"} justifyContent={"space-between"}>
                    <Styles.Button.Basic style={{ maxWidth: "15rem" }}>Save</Styles.Button.Basic>
                    <CustomIconButton
                        onClick={() => navigate("/" + PATH.AUTH_PATH.LOGIN)}
                        icon={ICONS_URL.BUTTON.BACK_AUTH}
                    />
                </Stack>
            </Stack>
        </FrameTableCom>
    );
};
