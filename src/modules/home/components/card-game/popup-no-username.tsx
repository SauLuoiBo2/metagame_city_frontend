import { Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { IMAGE_URL } from "@/assets/images";
import { FrameTableCom } from "@/components";
import { PATH } from "@/router/pathname";
import { useBearStore } from "@/store/useBearStore";
import { Styles } from "@/theme";

export interface PopupNoUsernameProps {}
const styleStack = {
    sx: { overflowY: "auto", maxHeight: "60%", width: "100%", padding: "0 20%" },
    alignItems: "center",
    spacing: 2,
};

export const PopupNoUsername: React.FC<PopupNoUsernameProps> = () => {
    const navigate = useNavigate();
    const { modalOnClose } = useBearStore();
    function handleClose() {
        modalOnClose();
        navigate(PATH.MAIN_PATH.ACCOUNT);
    }

    return (
        <FrameTableCom imgFrame={IMAGE_URL.FRAME.FRAME_USER}>
            <Stack {...styleStack}>
                <p className='text_medium text_align_center'>To play our games, please set username account!!!</p>

                <Stack sx={{ borderTop: "gray 2px solid" }} width={"100%"}>
                    <Styles.Button.Basic onClick={handleClose} style={{ marginTop: "2rem" }}>
                        Go to set username
                    </Styles.Button.Basic>
                </Stack>
            </Stack>
        </FrameTableCom>
    );
};
