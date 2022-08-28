/* eslint-disable simple-import-sort/imports */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { QUERY_KEY } from "@/config";
import { WalletLoginDto } from "@/models";
import { ApiResponseData } from "@/models/api.model";
import { usePersistStore } from "@/store/useBearStore";
import { toast } from "react-toastify";

import { useApiWallet } from "./useApiWallet";
import { handleAddBinanceMainNet } from "@/hooks/wallet";

export function useQueryWallet() {
    const apiWallet = useApiWallet();
    const { getSignMessage, postWalletLogin } = apiWallet;
    const { authSetAccessToken } = usePersistStore();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    function useGetSignMessage(address: string) {
        const params = { address };
        return useQuery<ApiResponseData<WalletLoginDto>, ApiResponseData>(
            [QUERY_KEY.WALLET.WALLET_MESSAGE],
            () => getSignMessage(params),
            {}
        );
    }

    function usePostWalletLogin() {
        return useMutation<ApiResponseData<any>, ApiResponseData, WalletLoginDto>((body) => postWalletLogin(body), {
            onSuccess: async (data) => {
                await authSetAccessToken(data.data?.token || "");

                const status: any = data.status;

                if (status === "error") {
                    toast.error(data.message);
                    return;
                }
                handleAddBinanceMainNet();
                navigate("/");
                queryClient.refetchQueries();
            },
        });
    }

    return { useGetSignMessage, usePostWalletLogin };
}
