import { Button, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { CustomInput } from "@/components";
import { supportErrorFormik } from "@/libs";
import { PATH } from "@/router/pathname";
import { Styles } from "@/theme";

import ViewAuthCom from "../components/view-auth.com";
import { useFormRegister } from "../hooks/useFormRegister";

export interface RegisterViewWidgetProps {}

const RegisterViewWidget: React.FC<RegisterViewWidgetProps> = () => {
    const navigate = useNavigate();

    const { formik, ref, isLoading } = useFormRegister();

    return (
        <ViewAuthCom title={"REGISTER"}>
            <Stack
                spacing={3}
                width={"100%"}
                alignItems={"center"}
                component={"form"}
                onSubmit={formik.handleSubmit}
                autoComplete='nope'
            >
                <CustomInput
                    name='username'
                    placeholder='User name'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={supportErrorFormik(formik, "username")}
                    autoComplete={"" + Math.random()}
                />
                <CustomInput
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={supportErrorFormik(formik, "email")}
                />
                <CustomInput
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={supportErrorFormik(formik, "password")}
                    autoComplete={"" + Math.random()}
                />
                <CustomInput
                    type='password'
                    name='passwordConfirm'
                    placeholder='Confirm password'
                    value={formik.values.passwordConfirm}
                    onChange={formik.handleChange}
                    error={supportErrorFormik(formik, "passwordConfirm")}
                />
                <CustomInput
                    disabled={ref ? true : false}
                    placeholder='Ref code'
                    name='referral'
                    value={formik.values.referral}
                    onChange={formik.handleChange}
                />
                <Styles.Button.Basic type='submit' disabled={isLoading}>
                    {isLoading ? "Loading..." : "REGISTER"}
                </Styles.Button.Basic>
            </Stack>

            <Stack>
                <Button onClick={() => navigate("/" + PATH.AUTH_PATH.LOGIN)}>Sign in</Button>
            </Stack>
        </ViewAuthCom>
    );
};

export default RegisterViewWidget;
