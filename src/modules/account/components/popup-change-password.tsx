import { Box, Stack } from "@mui/material";
import React from "react";

import { IMAGE_URL } from "@/assets/images";
import { CustomButton, CustomInput, FrameTableCom } from "@/components";
import { supportErrorFormik } from "@/libs";
import { Styles } from "@/theme";

import { useFormChangePassword } from "../hook/useFormChangePassword";

export interface PopupChangePasswordProps {}

export const PopupChangePassword: React.FC<PopupChangePasswordProps> = () => {
    const { formik, changePassword } = useFormChangePassword();

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
                    <Stack spacing={2} mt={4} component='form' onSubmit={formik.handleSubmit}>
                        <CustomInput
                            name='password'
                            title='Current password'
                            type={"password"}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={supportErrorFormik(formik, "password")}
                        />
                        <CustomInput
                            name='newPassword'
                            title='New password'
                            type={"password"}
                            value={formik.values.newPassword}
                            onChange={formik.handleChange}
                            error={supportErrorFormik(formik, "newPassword")}
                        />
                        <CustomInput
                            name='confirmPassword'
                            title='Confirm password'
                            type={"password"}
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            error={supportErrorFormik(formik, "confirmPassword")}
                        />
                        <CustomButton
                            type='submit'
                            isLoading={changePassword?.isLoading}
                            // onClick={() => formikPassword.handleSubmit()}
                        >
                            SAVE
                        </CustomButton>
                    </Stack>
                </Stack>
            </FrameTableCom>
        </Box>
    );
};
