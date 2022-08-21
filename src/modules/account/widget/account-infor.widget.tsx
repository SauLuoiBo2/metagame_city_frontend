import { Stack } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";

import { ICONS_URL } from "@/assets/icons";
import { IMAGE_URL } from "@/assets/images";
import { CustomIconButton, CustomInput, FrameTableCom } from "@/components";
import { supportErrorFormik } from "@/libs";
import { usePersistStore } from "@/store/useBearStore";
import { Styles } from "@/theme";

import { useFormUpdateAccount } from "../hook/useFormUpdateAccount";

export interface AccountInforWidgetProps {}

export const AccountInforWidget: React.FC<AccountInforWidgetProps> = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { user, formik } = useFormUpdateAccount();

    const { authClear } = usePersistStore();

    function onLogout() {
        authClear();
        queryClient.clear();
        navigate("/");
    }

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
                <CustomInput
                    name='password'
                    placeholder='Password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={supportErrorFormik(formik, "password")}
                />
                <CustomInput
                    name='passwordConfirm'
                    placeholder='Confirm password'
                    value={formik.values.passwordConfirm}
                    onChange={formik.handleChange}
                    error={supportErrorFormik(formik, "passwordConfirm")}
                />

                <Stack pt={10} width='100%' direction={"row"} justifyContent={"space-between"}>
                    <Styles.Button.Basic onClick={() => formik.handleSubmit()} style={{ maxWidth: "15rem" }}>
                        Save
                    </Styles.Button.Basic>
                    <CustomIconButton onClick={onLogout} icon={ICONS_URL.BUTTON.BACK_AUTH} />
                </Stack>
            </Stack>
        </FrameTableCom>
    );
};
