import { Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { IMAGE_URL } from "@/assets/images";
import { CustomButton, CustomInput, FrameTableCom } from "@/components";
import { supportErrorFormik } from "@/libs";

import { useFormGive } from "../hook";

export interface GiveStarWidgetProps {}

const styleStack = {
    sx: { overflowY: "auto", maxHeight: "60%", width: "100%" },
    mx: { xs: "10%", md: "20%" },
    pt: "10%",
    alignItems: "center",
    spacing: 2,
};

export const GiveStarWidget: React.FC<GiveStarWidgetProps> = () => {
    const { formik, sendStar, isInstalled } = useFormGive();
    const { isLoading } = sendStar;

    const navigate = useNavigate();

    function handleGotoSet() {
        navigate("/" + "account");
    }
    return (
        <FrameTableCom imgFrame={IMAGE_URL.FRAME.FRAME_GIVE}>
            <Stack {...styleStack} component={isInstalled ? "div" : "form"} onSubmit={formik.handleSubmit}>
                <CustomInput
                    name='receiver'
                    value={formik.values.receiver}
                    onChange={formik.handleChange}
                    error={supportErrorFormik(formik, "receiver")}
                    placeholder='Email/Username/Wallet'
                />
                <CustomInput
                    name='amount'
                    value={formik.values.amount}
                    onChange={formik.handleChange}
                    error={supportErrorFormik(formik, "amount")}
                    type={"number"}
                    placeholder='Amount'
                />
                <CustomInput
                    name='code'
                    value={formik.values.code}
                    onChange={formik.handleChange}
                    error={supportErrorFormik(formik, "code")}
                    placeholder='Google code'
                />
                <CustomInput
                    type={"password"}
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={supportErrorFormik(formik, "password")}
                    placeholder='Password'
                />

                <Stack sx={{ borderTop: "gray 2px solid" }} width={"100%"}>
                    {!isInstalled ? (
                        <CustomButton type='submit' isLoading={isLoading} style={{ marginTop: "2rem" }}>
                            GIVE
                        </CustomButton>
                    ) : (
                        <CustomButton type='button' style={{ marginTop: "2rem" }} onClick={handleGotoSet}>
                            SET 2FA
                        </CustomButton>
                    )}
                </Stack>
            </Stack>
        </FrameTableCom>
    );
};
