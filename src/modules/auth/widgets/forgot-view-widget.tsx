import { Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { CustomButton, CustomInput } from "@/components";
import { supportErrorFormik } from "@/libs";
import { PATH } from "@/router/pathname";

import ViewAuthCom from "../components/view-auth.com";
import { useFormForgot } from "../hooks/useFormForgot";

export interface ForgotViewWidgetProps {}

const textFirth = "If you forgot or change password!";
const textSuccess = "We sent email reset your password to your inbox mail, please check your email!!!!";

export const ForgotViewWidget: React.FC<ForgotViewWidgetProps> = () => {
    const { formik, mutationForgot } = useFormForgot();
    const { isLoading, isSuccess } = mutationForgot;
    const navigate = useNavigate();

    return (
        <ViewAuthCom title={"FORGOT PASSWORD"}>
            <Stack>
                <p>{isSuccess ? textSuccess : textFirth}</p>

                {!isSuccess && (
                    <Stack py={2} spacing={3} component={"form"} onSubmit={formik.handleSubmit}>
                        <Stack spacing={2}>
                            <p>Enter your email:</p>
                            <CustomInput
                                placeholder='Your email'
                                name='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={supportErrorFormik(formik, "email")}
                            />
                            <CustomButton type='submit' isLoading={isLoading}>
                                SEND
                            </CustomButton>
                        </Stack>
                    </Stack>
                )}
                {isSuccess && (
                    <CustomButton onClick={() => navigate("/" + PATH.AUTH_PATH.LOGIN)}>RETURN TO LOGIN</CustomButton>
                )}
            </Stack>
        </ViewAuthCom>
    );
};
