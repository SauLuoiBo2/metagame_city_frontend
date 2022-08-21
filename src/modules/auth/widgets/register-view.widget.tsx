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

    const { formik } = useFormRegister();
    return (
        <ViewAuthCom title={"REGISTER"}>
            <CustomInput
                name='username'
                placeholder='User name'
                value={formik.values.username}
                onChange={formik.handleChange}
                error={supportErrorFormik(formik, "username")}
            />
            <CustomInput
                type='email'
                name='email'
                placeholder='Email'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={supportErrorFormik(formik, "email")}
            />
            <CustomInput placeholder='Phone number' />
            <CustomInput
                type='password'
                name='password'
                placeholder='Password'
                value={formik.values.password}
                onChange={formik.handleChange}
                error={supportErrorFormik(formik, "password")}
            />
            <CustomInput
                type='password'
                name='passwordConfirm'
                placeholder='Confirm password'
                value={formik.values.passwordConfirm}
                onChange={formik.handleChange}
                error={supportErrorFormik(formik, "passwordConfirm")}
            />
            <Styles.Button.Basic onClick={() => formik.handleSubmit()}>REGISTER</Styles.Button.Basic>
            <Stack>
                <Button onClick={() => navigate("/" + PATH.AUTH_PATH.LOGIN)}>Sign in</Button>
            </Stack>
        </ViewAuthCom>
    );
};

export default RegisterViewWidget;
