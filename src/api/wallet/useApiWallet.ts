import { useRequest } from "@/config";
import { WalletLoginDto, WalletSignProps } from "@/models/wallet-model";

import { ApiUrl } from "../apiUrl";

// auth
const { sign_message, wallet_login } = ApiUrl.auth_wallet;

export function useApiWallet() {
    const { request } = useRequest();
    function getSignMessage(params: WalletSignProps) {
        return request({ url: sign_message, method: "GET", params });
    }

    function postWalletLogin(data: WalletLoginDto) {
        return request({ url: wallet_login, method: "POST", data });
    }

    return { getSignMessage, postWalletLogin };
}
