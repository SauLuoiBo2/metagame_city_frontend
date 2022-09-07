import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { QUERY_KEY } from "@/config";
import { MemberDto, PayAffiliateDto } from "@/models";
import { ApiResponseData, ApiResponseListData } from "@/models/api.model";
import { ModalBuySuccess } from "@/modules/affiliate/widget/modal-buy-success";
import { useBearStore } from "@/store/useBearStore";

import { useAffiliateApi } from "./useAffiliateApi";

export function useQueryAffiliate() {
    const affiliateApi = useAffiliateApi();
    const queryClient = useQueryClient();

    const { modalOnOpen } = useBearStore();
    //
    function useGetListCommission() {
        return useQuery<ApiResponseListData<PayAffiliateDto>, ApiResponseData>(
            [QUERY_KEY.AFFILIATE.LIST_HISTOTRY],
            () => affiliateApi.getListHistories()
        );
    }

    function useGetListMember() {
        return useQuery<ApiResponseListData<MemberDto>, ApiResponseData>([QUERY_KEY.AFFILIATE.LIST_MEMBERS], () =>
            affiliateApi.getListMembers()
        );
    }

    function useBuyVip() {
        return useMutation<ApiResponseData, ApiResponseData, any>(
            [QUERY_KEY.AFFILIATE.LIST_MEMBERS],
            () => affiliateApi.buyVip(),
            {
                onSuccess: () => {
                    queryClient.refetchQueries([QUERY_KEY.USER.PROFILE_REFERRAL_KEY]);
                    queryClient.refetchQueries([QUERY_KEY.FINANCS.STAR]);
                    queryClient.refetchQueries([QUERY_KEY.USER.PROFILE_BALANCE_KEY]);
                    modalOnOpen(ModalBuySuccess);
                },
                onError: (data) => {
                    toast.error(data?.data?.message);
                },
            }
        );
    }

    return { useGetListCommission, useGetListMember, useBuyVip };
}
