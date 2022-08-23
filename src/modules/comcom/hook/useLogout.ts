import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { useBearStore, usePersistStore } from "@/store/useBearStore";
export const useLogout = () => {
    const { authClear } = usePersistStore();
    const { modalOnClose } = useBearStore();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    function onLogout() {
        authClear();
        queryClient.clear();
        navigate("/");
        modalOnClose();
    }

    return { onLogout };
};
