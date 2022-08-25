import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

import { QUERY_KEY } from "@/config";
import { ApiResponseData } from "@/models/api.model";
import { FinanceSendStarDtoProps } from "@/models/finance.model";

import { useFinanceApi } from "./useFinanceApi";

export const useQueryFinance = () => {
    const financeApi = useFinanceApi();

    function useGetStar() {
        return useQuery<ApiResponseData<any>, AxiosError>([QUERY_KEY.FINANCS.STAR], () => financeApi.getStar());
    }

    const { data } = useGetStar();

    function useSendStar() {
        return useMutation<ApiResponseData<any>, AxiosError, FinanceSendStarDtoProps>(
            (body) => financeApi.sendStar(body),
            {
                onSuccess: (data) => {
                    const status: any = data.status;

                    if (status === "error") {
                        toast.error("error");
                        return;
                    }
                },
            }
        );
    }

    return { useGetStar, useSendStar, data };
};
