import { Avatar, Box, Divider, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useQueryUser } from "@/api";
import { ICONS_URL } from "@/assets/icons";
import { CustomIconButton } from "@/components";
import { useLogout } from "@/hooks/auth";
import { PATH } from "@/router/pathname";

export interface ButtonHeaderProfileProps {}

export const ButtonHeaderProfile: React.FC<ButtonHeaderProfileProps> = () => {
    const { user, balance } = useQueryUser();

    const navigate = useNavigate();

    const users = user?.data;
    const balanceData = balance?.data;

    const { onLogout } = useLogout();

    return (
        <Stack
            p={2}
            spacing={2}
            sx={{
                maxWidth: "90vw",
                position: "relative",
                width: "fit-content",
                minWidth: "35rem",
                border: "4px solid #FFFFFF",
                boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.04), 0px 8px 16px rgba(0, 0, 0, 0.08)",
                borderRadius: "3rem",
                background: "linear-gradient(90deg, #20B8F1 0%, #297AFF 100%)",
            }}
        >
            <Stack direction={"row"} justifyContent='space-between' alignItems={"center"} spacing={4}>
                {/* avatar */}
                <Stack
                    sx={{ cursor: "pointer" }}
                    direction={"row"}
                    alignItems={"center"}
                    spacing={2}
                    onClick={() => navigate(PATH.MAIN_PATH.ACCOUNT)}
                >
                    <Avatar
                        alt={users?.username}
                        src='/static/images/avatar/1.jpg'
                        sx={{ width: 70, height: 70, border: "2px solid #FFFFFF" }}
                    />
                    <Stack>
                        <h3 style={{ textOverflow: "ellipsis", wordBreak: "break-word" }}>{users?.username}</h3>
                        <p style={{ fontSize: "1.3rem", textOverflow: "ellipsis", wordBreak: "break-word" }}>
                            {users?.email}
                        </p>
                    </Stack>
                </Stack>
                {/* logout */}
                <CustomIconButton icon={ICONS_URL.BUTTON.LOGOUT} onClick={onLogout} />
            </Stack>
            <Divider sx={{ borderBottomWidth: "2px", borderColor: "white" }} />
            <Box>
                <h1>Total: {balanceData?.balance}</h1>
            </Box>
        </Stack>
    );
};
