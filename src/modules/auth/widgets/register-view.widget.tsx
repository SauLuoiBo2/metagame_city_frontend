import { Button, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { CustomInput } from "@/components";
import { PATH } from "@/router/pathname";
import { Styles } from "@/theme";

import ViewAuthCom from "../components/view-auth.com";

export interface RegisterViewWidgetProps {}

const RegisterViewWidget: React.FC<RegisterViewWidgetProps> = () => {
    const navigate = useNavigate();
    return (
        <ViewAuthCom title={"REGISTER"}>
            <CustomInput placeholder='User name' />
            <CustomInput placeholder='Email' />
            <CustomInput placeholder='Phone number' />
            <CustomInput placeholder='Password' />
            <CustomInput placeholder='Confirm password' />
            <Styles.Button.Basic>REGISTER</Styles.Button.Basic>
            <Stack>
                <Button onClick={() => navigate("/" + PATH.AUTH_PATH.LOGIN)}>Sign in</Button>
            </Stack>
        </ViewAuthCom>
    );
};

export default RegisterViewWidget;
