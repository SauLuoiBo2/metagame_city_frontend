import { useRequest } from "@/config";
import { WalletLoginDto } from "@/models/wallet-model";

import { ApiUrl } from "../apiUrl";

// auth
const { sign_message, wallet_login } = ApiUrl.auth_wallet;

export function useApiWallet() {
    const { request } = useRequest();
    function getSignMessage() {
        return request({ url: sign_message, method: "GET" });
    }

    function postWalletLogin(params?: WalletLoginDto) {
        return request({ url: wallet_login, method: "GET", params });
    }

    return { getSignMessage, postWalletLogin };
}
