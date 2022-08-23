import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { QUERY_KEY } from "@/config";
import { WalletLoginDto, WalletLoginProps } from "@/models";
import { ApiResponseData } from "@/models/api.model";

import { useApiChain } from "./useApiChain";

export function useQueryChain() {
    const apiChain = useApiChain();
    const { getDetailChain, getListChain } = apiChain;

    function useGetSignMessage() {
        return useQuery<ApiResponseData<WalletLoginProps>, AxiosError>(
            [QUERY_KEY.CHAIN.CHAIN_LIST],
            () => getListChain(),
            {}
        );
    }

    function usePostWalletLogin() {
        return useMutation<ApiResponseData<any>, AxiosError, string | number>((body) => getDetailChain(body));
    }

    return { useGetSignMessage, usePostWalletLogin };
}
