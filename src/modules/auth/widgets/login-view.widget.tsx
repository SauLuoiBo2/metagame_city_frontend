import { Button, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useQueryUser } from "@/api/auth/useQueryUser";
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
    const { useGetUser } = useQueryUser();
    const { data } = useGetUser();

    console.log(data?.data?.avatar);
    return (
        <ViewAuthCom title={"LOGIN"}>
            <CustomInput
                name='username'
                type={"email"}
                placeholder='Email'
                value={formik.values.username}
                onChange={formik.handleChange}
                error={supportErrorFormik(formik, "username")}
            />

            <CustomInput
                name='password'
                placeholder='Password'
                value={formik.values.password}
                onChange={formik.handleChange}
                error={supportErrorFormik(formik, "password")}
            />
            <Styles.Button.Basic onClick={() => formik.handleSubmit()}>LOGIN</Styles.Button.Basic>
            <Stack>
                <Button onClick={() => navigate("/" + PATH.AUTH_PATH.LOGIN)}>Forgot Password</Button>
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
