import { Avatar, Divider, Stack } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useBoolean } from "usehooks-ts";

import { ICONS_URL } from "@/assets/icons";
import { IMAGE_URL } from "@/assets/images";
import { CustomIconButton, FrameTableCom } from "@/components";
import MuiModal from "@/components/modal/mui-Modal";
import { supportErrorFormik } from "@/libs";
import { useBearStore, usePersistStore } from "@/store/useBearStore";
import { Styles } from "@/theme";

import { ItemInforProfileCom, PopupChangePassword } from "../components";
import { ItemGgCodeCom } from "../components/item-gg-code-com";
import { UpdateAvatar } from "../components/UpdateAvatar";
import { useFormUpdateAccount } from "../hook/useFormUpdateAccount";
import { useFormEmail, useFormUsername } from "../hook/userFormUsername";

export interface AccountInforWidgetProps {}
export const uploadImgConfig = "image/png, image/gif, image/jpeg, image/jpg, image/heic";

export const AccountInforWidget: React.FC<AccountInforWidgetProps> = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { modalOnOpen } = useBearStore();

    const { user, balance } = useFormUpdateAccount();

    const { authClear } = usePersistStore();

    function onLogout() {
        authClear();
        queryClient.clear();
        navigate("/");
    }

    const open = useBoolean();

    const { formik: formikUsername, updateUsername } = useFormUsername();
    const { formik: formikEmail, updateEmail } = useFormEmail();

    return (
        <>
            <MuiModal open={open.value} onClose={open.setFalse}>
                <UpdateAvatar />
            </MuiModal>

            <FrameTableCom imgFrame={IMAGE_URL.FRAME.FRAME_ACCOUNT} style={{ marginTop: "4rem" }} isAuth>
                <Stack mx={1} width={"80%"} alignItems={"center"} spacing={2}>
                    <h1 style={{ fontSize: "3rem" }}>ACCOUNT</h1>
                    <Stack
                        justifyContent='space-between'
                        alignItems={"flex-start"}
                        spacing={{ xs: 2, sm: 4 }}
                        width='100%'
                    >
                        {/* avatar */}
                        <Stack
                            width='100%'
                            direction={{ xs: "column", sm: "row" }}
                            alignItems={"flex-start"}
                            spacing={2}
                        >
                            <Stack>
                                <Avatar
                                    alt={user?.username}
                                    src={user?.avatar}
                                    sx={{
                                        width: { xs: 65, sm: 70, md: 90 },
                                        height: { xs: 65, sm: 70, md: 90 },
                                        border: "2px solid #FFFFFF",
                                        cursor: "pointer",
                                    }}
                                    onClick={open.setTrue}
                                />
                            </Stack>

                            <Stack
                                direction={"row"}
                                width='100%'
                                justifyContent='space-between'
                                alignItems={"flex-start"}
                            >
                                <Stack alignItems={"flex-start"}>
                                    <h3 style={{ textOverflow: "ellipsis", wordBreak: "break-word" }}>
                                        {user?.username}
                                    </h3>
                                    <p style={{ textOverflow: "ellipsis", wordBreak: "break-word" }}>{user?.email}</p>
                                </Stack>
                                <CustomIconButton icon={ICONS_URL.BUTTON.LOGOUT} onClick={onLogout} />
                            </Stack>
                        </Stack>
                        {/* logout */}
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
                            {!user?.username && (
                                <ItemInforProfileCom
                                    isNoButton={!!user?.username}
                                    name='username'
                                    title={"Username"}
                                    placeholder='Username'
                                    defaultValue={user?.username}
                                    onChange={formikUsername.handleChange}
                                    value={formikUsername.values.username}
                                    error={supportErrorFormik(formikUsername, "username")}
                                    isLoading={updateUsername.isLoading}
                                    onSave={formikUsername.handleSubmit}
                                />
                            )}

                            {!user?.email && (
                                <ItemInforProfileCom
                                    name='email'
                                    isNoButton={!!user?.email}
                                    title={"Email"}
                                    defaultValue={user?.email}
                                    onChange={formikEmail.handleChange}
                                    value={formikEmail.values.email}
                                    isLoading={updateEmail.isLoading}
                                    error={supportErrorFormik(formikEmail, "email")}
                                    onSave={formikEmail.handleSubmit}
                                />
                            )}

                            <ItemInforProfileCom
                                isNoButton
                                title={"Wallet"}
                                defaultValue={user?.wallet || "Not connected to wallet"}
                                call='connect'
                            />
                            <ItemInforProfileCom
                                onCall={() => modalOnOpen(PopupChangePassword)}
                                title={"Password"}
                                defaultValue={"**********"}
                                call='Change'
                            />
                            <ItemGgCodeCom />
                        </Stack>
                    </Stack>
                </Stack>
            </FrameTableCom>
            {/* modal */}
        </>
    );
};
