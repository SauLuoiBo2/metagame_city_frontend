import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { QUERY_KEY } from "@/config";
import { WalletLoginDto, WalletLoginProps } from "@/models";
import { ApiResponseData } from "@/models/api.model";

import { useApiWallet } from "./useApiWallet";

export function useQueryWallet() {
    const apiWallet = useApiWallet();
    const { getSignMessage, postWalletLogin } = apiWallet;

    function useGetSignMessage() {
        return useQuery<ApiResponseData<WalletLoginProps>, AxiosError>(
            [QUERY_KEY.WALLET.WALLET_MESSAGE],
            () => getSignMessage(),
            {}
        );
    }

    function usePostWalletLogin() {
        return useMutation<ApiResponseData<WalletLoginProps>, AxiosError, WalletLoginDto>((body) =>
            postWalletLogin(body)
        );
    }

    return { useGetSignMessage, usePostWalletLogin };
}
