import { Avatar, Divider, Stack } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";

import { ICONS_URL } from "@/assets/icons";
import { IMAGE_URL } from "@/assets/images";
import { CustomIconButton, FrameTableCom } from "@/components";
import { supportErrorFormik } from "@/libs";
import { usePersistStore } from "@/store/useBearStore";
import { Styles } from "@/theme";

import { ItemInforProfileCom } from "../components";
import { useFormUpdateAccount } from "../hook/useFormUpdateAccount";

export interface AccountInforWidgetProps {}

export const AccountInforWidget: React.FC<AccountInforWidgetProps> = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { user, balance, formik, useMutationUserUpdate } = useFormUpdateAccount();
    const { isLoading } = useMutationUserUpdate();

    const { authClear } = usePersistStore();

    function onLogout() {
        authClear();
        queryClient.clear();
        navigate("/");
    }

    return (
        <FrameTableCom imgFrame={IMAGE_URL.FRAME.FRAME_ACCOUNT} style={{ marginTop: "4rem" }} isAuth>
            <Stack mx={1} width={"80%"} alignItems={"center"} spacing={2}>
                <h1 style={{ fontSize: "3rem" }}>ACCOUNT</h1>
                <Stack
                    direction={"row"}
                    justifyContent='space-between'
                    alignItems={"center"}
                    spacing={{ xs: 2, sm: 4 }}
                    width='100%'
                >
                    {/* avatar */}
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                        <Avatar
                            alt={user?.username}
                            src='/static/images/avatar/1.jpg'
                            sx={{
                                width: { xs: 65, sm: 70, md: 90 },
                                height: { xs: 65, sm: 70, md: 90 },
                                border: "2px solid #FFFFFF",
                            }}
                        />
                        <Stack>
                            <h3 style={{ textOverflow: "ellipsis", wordBreak: "break-word" }}>{user?.username}</h3>
                        </Stack>
                    </Stack>
                    {/* logout */}
                    <CustomIconButton icon={ICONS_URL.BUTTON.LOGOUT} onClick={onLogout} />
                </Stack>
                <Divider sx={{ borderBottomWidth: "2px", borderColor: "gray", width: "100%" }} />
                <Stack alignItems={"flex-start"} width='100%'>
                    {/* total */}
                    <h1 style={{ fontSize: "3rem" }}>
                        Total{" "}
                        <span>
                            <Styles.ImgIcon.Star style={{ width: "2.8rem", height: "2.8rem" }} />
                        </span>
                        : {balance?.balance}
                    </h1>
                    <Stack
                        className='custom_scroll'
                        pb={3}
                        alignItems={"flex-start"}
                        width='100%'
                        spacing={2}
                        mt={2}
                        sx={{ overflowX: "auto" }}
                    >
                        <ItemInforProfileCom
                            name='username'
                            title={"Username"}
                            placeholder='Username'
                            defaultValue={user?.username}
                            onChange={formik.handleChange}
                            value={formik.values.username}
                            error={supportErrorFormik(formik, "username")}
                            isLoading={isLoading}
                            onSave={formik.handleSubmit}
                        />
                        <ItemInforProfileCom title={"Email"} defaultValue={user?.email} />
                        <ItemInforProfileCom
                            title={"Wallet"}
                            defaultValue={user?.wallet || "Not connected to wallet"}
                            call='connect'
                        />
                        <ItemInforProfileCom title={"Password"} defaultValue={"**********"} call='Change' />
                    </Stack>
                </Stack>
            </Stack>
        </FrameTableCom>
    );
};
