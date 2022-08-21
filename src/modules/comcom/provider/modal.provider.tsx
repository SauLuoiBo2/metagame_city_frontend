import React from "react";

import MuiModal from "@/components/modal/mui-Modal";
import { useBearStore } from "@/store/useBearStore";

export interface ModalProviderProps {}

const ModalProvider: React.FC<ModalProviderProps> = () => {
    const { modal, modalOnClose } = useBearStore();

    return (
        <MuiModal open={modal.isOpen} widthModal={400} onClose={modalOnClose}>
            {modal.children && <modal.children />}
        </MuiModal>
    );
};

export default ModalProvider;
