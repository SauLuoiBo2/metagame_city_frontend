import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { usePersistStore } from "@/store/useBearStore";

export function useLogout() {
    const queryClient = useQueryClient();
    const { authClear } = usePersistStore();
    const navigate = useNavigate();

    function onLogout() {
        authClear();
        queryClient.clear();
        navigate("/");
    }

    return { onLogout };
}
