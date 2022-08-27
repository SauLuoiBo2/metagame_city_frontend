import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

import { QUERY_KEY } from "@/config";
import { ApiResponseData } from "@/models/api.model";
import { FinanceSendStarDtoProps, HistoryMarketProps } from "@/models/finance.model";

import { useFinanceApi } from "./useFinanceApi";

export const useQueryFinance = () => {
    const financeApi = useFinanceApi();
    const queryClient = useQueryClient();

    function useGetStar() {
        return useQuery<ApiResponseData<HistoryMarketProps[]>, AxiosError>([QUERY_KEY.FINANCS.STAR], () =>
            financeApi.getStar()
        );
    }

    const { data } = useGetStar();

    function useSendStar() {
        return useMutation<ApiResponseData<any>, AxiosError, FinanceSendStarDtoProps>(
            (body) => financeApi.sendStar(body),
            {
                onSuccess: (data) => {
                    const status: any = data.status;
                    if (status === "error") {
                        toast.error(data.message);
                        return;
                    } else {
                        toast.success(data.message);
                        queryClient.refetchQueries([QUERY_KEY.FINANCS.STAR]);
                        queryClient.refetchQueries([QUERY_KEY.USER.PROFILE_BALANCE_KEY]);

                        // QUERY_KEY.USER.PROFILE_BALANCE_KEY
                    }
                },
            }
        );
    }

    return { useGetStar, useSendStar, data };
};
