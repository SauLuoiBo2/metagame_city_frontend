import { Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import { IMAGE_URL } from "@/assets/images";
import { FrameTableCom } from "@/components";
import { PATH } from "@/router/pathname";
import { useBearStore } from "@/store/useBearStore";
import { Styles } from "@/theme";

export interface ModalBuySuccessProps {}
const styleStack = {
    sx: { overflowY: "auto", maxHeight: "60%", width: "100%", padding: "0 20%" },
    alignItems: "center",
    spacing: 2,
};
export const ModalBuySuccess: React.FC<ModalBuySuccessProps> = () => {
    const navigate = useNavigate();
    const { modalOnClose } = useBearStore();

    function handleClose() {
        modalOnClose();
        navigate(PATH.MAIN_PATH.AFFILIATE);
    }
    return (
        <FrameTableCom imgFrame={IMAGE_URL.FRAME.FRAME_GIVE}>
            <Stack {...styleStack}>
                <p className='text_medium text_align_center'>You have successfully registered Affiliate</p>

                <Stack sx={{ borderTop: "gray 2px solid" }} width={"100%"}>
                    <Styles.Button.Basic onClick={handleClose} style={{ marginTop: "2rem" }}>
                        Return to Affiliate
                    </Styles.Button.Basic>
                </Stack>
            </Stack>
        </FrameTableCom>
    );
};
