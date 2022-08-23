import { Backdrop, Box, Fade, Modal, ModalProps } from "@mui/material";
import React from "react";

export interface MuiModalProps extends ModalProps {
    widthModal?: string | number;
}

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 400,
    maxWidth: "90%",
    // bgcolor: "background.paper",
    // border: "2px solid #000",
    // boxShadow: 24,
    p: 2,
};

const MuiModal: React.FC<MuiModalProps> = ({ children, widthModal, ...props }) => {
    return (
        <Modal
            {...props}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={props.open}>
                <Box sx={style} width={widthModal || 400}>
                    {children}
                </Box>
            </Fade>
        </Modal>
    );
};

export default MuiModal;
