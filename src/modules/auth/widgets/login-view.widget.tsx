import { Button, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBoolean } from "usehooks-ts";

import { CustomButton, CustomInput } from "@/components";
import { supportErrorFormik } from "@/libs";
import { PATH } from "@/router/pathname";
import { Styles } from "@/theme";

import ViewAuthCom from "../components/view-auth.com";
import { useFormLogin } from "../hooks/useFormLogin";

export interface LoginViewWidgetProps {}

const LoginViewWidget: React.FC<LoginViewWidgetProps> = () => {
    const navigate = useNavigate();
    const { formik, mutationLogin } = useFormLogin();
    const { isLoading, data, isSuccess } = mutationLogin;
    const codeModal = useBoolean();
    useEffect(() => {
        if (data?.status === "gg") {
            codeModal.setTrue();
        }
    }, [isSuccess]);

    return (
        <ViewAuthCom title={codeModal.value ? "Google Authentication" : "LOGIN"}>
            <Stack spacing={3} width={"100%"} alignItems={"center"} component={"form"} onSubmit={formik.handleSubmit}>
                {!codeModal.value && (
                    <CustomInput
                        name='username'
                        placeholder='Email/username/wallet'
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={supportErrorFormik(formik, "username")}
                    />
                )}

                {!codeModal.value && (
                    <CustomInput
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={supportErrorFormik(formik, "password")}
                    />
                )}

                {codeModal.value && (
                    <CustomInput
                        name='code'
                        placeholder='Code'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={supportErrorFormik(formik, "password")}
                    />
                )}
                <CustomButton type='submit' isLoading={isLoading}>
                    LOGIN
                </CustomButton>
                <Stack>
                    <Button onClick={() => navigate("/" + PATH.AUTH_PATH.FORGOT_PASSWORD)}>Forgot Password</Button>
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
