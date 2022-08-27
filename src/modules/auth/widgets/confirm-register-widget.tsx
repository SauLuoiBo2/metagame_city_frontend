import { Stack } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useQueryAuth } from "@/api";
import { CustomButton, CustomInput } from "@/components";
import { TypeResendEmailEnum } from "@/models";

import ViewAuthCom from "../components/view-auth.com";

export interface ConfirmRegisterWidgetProps {}

export const ConfirmRegisterWidget: React.FC<ConfirmRegisterWidgetProps> = () => {
    const { sendEmailRegister } = useQueryAuth();

    const { mutate, isLoading } = sendEmailRegister();

    const { state }: any = useLocation();

    const navigate = useNavigate();

    const body = {
        email: state,
        type: TypeResendEmailEnum.RESEND_EMAIL,
    };

    return (
        <ViewAuthCom title={"Congratulations!"}>
            <Stack>
                <p>
                    Thanks you for register MetacityGame account, we have send email confim to your inbox email, please
                    open mail and confirm that
                </p>

                <Stack py={2} spacing={3}>
                    <Stack>
                        <p>Your email:</p>
                        <CustomInput disabled placeholder='Your email' name='email' value={state} />
                    </Stack>

                    <CustomButton isLoading={isLoading} onClick={() => mutate(body)}>
                        RESEND
                    </CustomButton>

                    <CustomButton style={{ backgroundColor: "orange" }} onClick={() => navigate("/login")}>
                        RETURN TO LOGIN
                    </CustomButton>
                </Stack>
            </Stack>
        </ViewAuthCom>
    );
};
