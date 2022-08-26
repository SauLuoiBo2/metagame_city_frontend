import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

import { Styles } from "@/theme";

export interface LayoutIntroSelectComProps extends PropsWithChildren {
    title?: string;
    isClose?: boolean;
}

export const LayoutIntroSelectCom: React.FC<LayoutIntroSelectComProps> = ({ title, children, isClose }) => {
    const navigate = useNavigate();
    return (
        <Stack alignItems={"flex-start"} spacing={2}>
            <Stack width={"100%"} direction='row' justifyContent={"space-between"} alignItems='center'>
                <Styles.Text.CapText>{title}</Styles.Text.CapText>
                {isClose && (
                    <>
                        <HighlightOffIcon sx={{ fontSize: "25px", cursor: "pointer" }} onClick={() => navigate("/")} />
                    </>
                )}
            </Stack>

            <Stack width='100%'>{children}</Stack>
        </Stack>
    );
};
