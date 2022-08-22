import { Button, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { CustomInput } from "@/components";
import { supportErrorFormik } from "@/libs";
import { PATH } from "@/router/pathname";
import { Styles } from "@/theme";

import ViewAuthCom from "../components/view-auth.com";
import { useFormLogin } from "../hooks/useFormLogin";

export interface LoginViewWidgetProps {}

const LoginViewWidget: React.FC<LoginViewWidgetProps> = () => {
    const navigate = useNavigate();
    const { formik } = useFormLogin();

    return (
        <ViewAuthCom title={"LOGIN"}>
            <Stack spacing={3} width={"100%"} alignItems={"center"} component={"form"} onSubmit={formik.handleSubmit}>
                <CustomInput
                    name='username'
                    type={"email"}
                    placeholder='Email'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={supportErrorFormik(formik, "username")}
                />

                <CustomInput
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={supportErrorFormik(formik, "password")}
                />
                <Styles.Button.Basic type='submit'>LOGIN</Styles.Button.Basic>
                <Stack>
                    <Button onClick={() => navigate("/" + PATH.AUTH_PATH.LOGIN)}>Forgot Password</Button>
                </Stack>
            </Stack>

            <Styles.Button.Basic
                onClick={() => navigate("/" + PATH.AUTH_PATH.REGISTER)}
                style={{ backgroundColor: "transparent", border: "solid 2px white" }}
            >
                CREATE ACCOUNT
            </Styles.Button.Basic>
        </ViewAuthCom>
    );
};

export default LoginViewWidget;
