import { Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { IMAGE_URL } from "@/assets/images";
import { CustomIconButton } from "@/components";
import { PATH } from "@/router/pathname";
import { Styles } from "@/theme";

import { LayoutIntroSelectCom } from "../../components/layout-intro-select-com";

export interface SelectLoginWidgetProps {}

const { LOGIN, REGISTER, WALLET } = PATH.AUTH_PATH;

const buttons = [
    {
        name: "Sign in",
        link: LOGIN,
    },
    {
        name: "Register",
        link: REGISTER,
    },
    {
        name: "Connect wallet",
        link: WALLET,
    },
];

export const SelectLoginWidget: React.FC<SelectLoginWidgetProps> = () => {
    const navigate = useNavigate();
    return (
        <LayoutIntroSelectCom>
            <Stack spacing={2}>
                {buttons.map((item, i) => {
                    return (
                        <CustomIconButton
                            onClick={() => navigate("/" + item.link)}
                            key={i}
                            icon={IMAGE_URL.FRAME.FRAME_BUTTON_LOGIN}
                        >
                            <Styles.Text.BodyBig>{item.name}</Styles.Text.BodyBig>
                        </CustomIconButton>
                    );
                })}
            </Stack>
        </LayoutIntroSelectCom>
    );
};
