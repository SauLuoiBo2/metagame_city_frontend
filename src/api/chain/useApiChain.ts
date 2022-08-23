import { useRequest } from "@/config";

import { ApiUrl } from "../apiUrl";

// auth
const { asset } = ApiUrl.chain;

export function useApiChain() {
    const { request } = useRequest();
    function getListChain() {
        return request({ url: asset, method: "GET" });
    }

    function getDetailChain(id: string | number) {
        return request({ url: asset + "/" + id, method: "GET" });
    }

    return { getListChain, getDetailChain };
}
