import { Box, Stack } from "@mui/material";
import React from "react";

import { IMAGE_URL } from "@/assets/images";
import { CustomButton, CustomInput, FrameTableCom } from "@/components";
import { supportErrorFormik } from "@/libs";
import { Styles } from "@/theme";

import { useFormUpdateAccount } from "../hook/useFormUpdateAccount";

export interface PopupChangePasswordProps {}

export const PopupChangePassword: React.FC<PopupChangePasswordProps> = () => {
    const { formikPassword, mutationUserUpdate } = useFormUpdateAccount();

    // useEffect(() => {
    //     if (isSuccess) {
    //         modalOnClose();
    //     }
    // }, [isSuccess]);
    return (
        <Box maxWidth={400}>
            <FrameTableCom imgFrame={IMAGE_URL.FRAME.FRAME_USER} isAuth>
                <Stack px={{ xs: 5, sm: 6, md: 8 }}>
                    <Styles.Text.CapText style={{ textAlign: "center" }}>Change Password</Styles.Text.CapText>
                    <Stack spacing={2} mt={4}>
                        <CustomInput
                            name='passwordCurrent'
                            title='Current password'
                            type={"password"}
                            value={formikPassword.values.passwordCurrent}
                            onChange={formikPassword.handleChange}
                            error={supportErrorFormik(formikPassword, "passwordCurrent")}
                        />
                        <CustomInput
                            name='password'
                            title='New password'
                            type={"password"}
                            value={formikPassword.values.password}
                            onChange={formikPassword.handleChange}
                            error={supportErrorFormik(formikPassword, "password")}
                        />
                        <CustomInput
                            name='passwordConfirm'
                            title='Confirm password'
                            type={"password"}
                            value={formikPassword.values.passwordConfirm}
                            onChange={formikPassword.handleChange}
                            error={supportErrorFormik(formikPassword, "passwordConfirm")}
                        />
                        <CustomButton
                            type='button'
                            isLoading={mutationUserUpdate?.isLoading}
                            onClick={() => formikPassword.handleSubmit()}
                        >
                            SAVE
                        </CustomButton>
                    </Stack>
                </Stack>
            </FrameTableCom>
        </Box>
    );
};
