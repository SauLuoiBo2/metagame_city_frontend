import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { QUERY_KEY } from "@/config";
import { ApiResponseData } from "@/models/api.model";

import { useAffiliateApi } from "./useAffiliateApi";

export function useQueryAffiliate() {
    const affiliateApi = useAffiliateApi();
    function useGetListCommission() {
        return useQuery<ApiResponseData<any>, AxiosError>([QUERY_KEY.AFFILIATE.LIST_HISTOTRY], () =>
            affiliateApi.getListHistories()
        );
    }

    function useGetListMember() {
        return useQuery<ApiResponseData<any>, AxiosError>([QUERY_KEY.AFFILIATE.LIST_MEMBERS], () =>
            affiliateApi.getListMembers()
        );
    }

    function useBuyVip() {
        return useMutation<ApiResponseData, AxiosError, any>([QUERY_KEY.AFFILIATE.LIST_MEMBERS], () =>
            affiliateApi.buyVip()
        );
    }

    return { useGetListCommission, useGetListMember, useBuyVip };
}
