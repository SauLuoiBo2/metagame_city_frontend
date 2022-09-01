import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export function useQueryInvalidate(a: any) {
    const queryClient = useQueryClient();
    useEffect(() => {
        queryClient.invalidateQueries([a]);
    }, []);
}
