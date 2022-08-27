import { Stack } from "@mui/material";
import React from "react";

import { CustomButton, CustomInput } from "@/components";
import { supportErrorFormik } from "@/libs";

import ViewAuthCom from "../components/view-auth.com";
import { useFormForgot } from "../hooks/useFormForgot";

export interface ForgotViewWidgetProps {}

export const ForgotViewWidget: React.FC<ForgotViewWidgetProps> = () => {
    const { formik, mutationForgot } = useFormForgot();
    const { isLoading } = mutationForgot;

    return (
        <ViewAuthCom title={"FORGOT PASSWORD"}>
            <Stack>
                <p>If you forgot or change password!</p>

                <Stack py={2} spacing={3} component={"form"} onSubmit={formik.handleSubmit}>
                    <Stack>
                        <p>Enter your email:</p>
                        <CustomInput
                            placeholder='Your email'
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={supportErrorFormik(formik, "email")}
                        />
                    </Stack>

                    <CustomButton type='submit' isLoading={isLoading}>
                        SEND
                    </CustomButton>
                </Stack>
            </Stack>
        </ViewAuthCom>
    );
};
