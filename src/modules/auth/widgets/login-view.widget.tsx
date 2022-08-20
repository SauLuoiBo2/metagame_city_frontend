import { Button, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { CustomInput } from "@/components";
import { PATH } from "@/router/pathname";
import { Styles } from "@/theme";

import ViewAuthCom from "../components/view-auth.com";

export interface LoginViewWidgetProps {}

const LoginViewWidget: React.FC<LoginViewWidgetProps> = () => {
    const navigate = useNavigate();

    return (
        <ViewAuthCom title={"LOGIN"}>
            <CustomInput placeholder='User name' />
            <CustomInput placeholder='Email' />
            <CustomInput placeholder='Phone number' />
            <CustomInput placeholder='Password' />
            <CustomInput placeholder='Confirm password' />
            <Styles.Button.Basic>LOGIN</Styles.Button.Basic>
            <Stack>
                <Button onClick={() => navigate("/" + PATH.AUTH_PATH.LOGIN)}>Forgot Password</Button>
            </Stack>

            <Styles.Button.Basic style={{ backgroundColor: "transparent", border: "solid 2px white" }}>
                CREATE ACCOUNT
            </Styles.Button.Basic>
        </ViewAuthCom>
    );
};

export default LoginViewWidget;
