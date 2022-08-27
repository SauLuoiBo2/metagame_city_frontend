import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { QUERY_KEY } from "@/config";
import { ReferralCommission } from "@/models";
import { ApiResponseData } from "@/models/api.model";
import { ModalBuySuccess } from "@/modules/affiliate/widget/modal-buy-success";
import { useBearStore } from "@/store/useBearStore";

import { useAffiliateApi } from "./useAffiliateApi";

export function useQueryAffiliate() {
    const affiliateApi = useAffiliateApi();
    const queryClient = useQueryClient();

    const { modalOnOpen } = useBearStore();
    //
    function useGetListCommission() {
        return useQuery<ApiResponseData<ReferralCommission[]>, AxiosError>([QUERY_KEY.AFFILIATE.LIST_HISTOTRY], () =>
            affiliateApi.getListHistories()
        );
    }

    function useGetListMember() {
        return useQuery<ApiResponseData<any>, AxiosError>([QUERY_KEY.AFFILIATE.LIST_MEMBERS], () =>
            affiliateApi.getListMembers()
        );
    }

    function useBuyVip() {
        return useMutation<ApiResponseData, AxiosError, any>(
            [QUERY_KEY.AFFILIATE.LIST_MEMBERS],
            () => affiliateApi.buyVip(),
            {
                onSuccess: () => {
                    queryClient.refetchQueries([QUERY_KEY.USER.PROFILE_REFERRAL_KEY]);
                    queryClient.refetchQueries([QUERY_KEY.FINANCS.STAR]);
                    queryClient.refetchQueries([QUERY_KEY.USER.PROFILE_BALANCE_KEY]);
                    modalOnOpen(ModalBuySuccess);
                },
            }
        );
    }

    return { useGetListCommission, useGetListMember, useBuyVip };
}
