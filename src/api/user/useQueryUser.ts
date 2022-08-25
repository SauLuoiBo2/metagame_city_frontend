import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { QUERY_KEY } from "@/config";
import { BalanceDtoProps, ReferralDtoProps, UserProps } from "@/models";
import { ApiResponseData } from "@/models/api.model";

import { useUserApi } from "./useUserApi";

export function useQueryUser() {
    const userApi = useUserApi();

    function useMutationUserUpdate() {
        return useMutation<ApiResponseData, AxiosError, any>((body) => userApi.updateProfile(body), {});
    }

    function useGetUser() {
        return useQuery<ApiResponseData<UserProps>, AxiosError>([QUERY_KEY.USER.PROFILE_KEY], () =>
            userApi.getProfile()
        );
    }

    const { data: user } = useGetUser();

    function useGetUserBalance() {
        return useQuery<ApiResponseData<BalanceDtoProps>, AxiosError>([QUERY_KEY.USER.PROFILE_BALANCE_KEY], () =>
            userApi.getBalance()
        );
    }

    const { data: balance } = useGetUserBalance();

    function useGetUserReferral() {
        return useQuery<ApiResponseData<ReferralDtoProps>, AxiosError>([QUERY_KEY.USER.PROFILE_REFERRAL_KEY], () =>
            userApi.getReferral()
        );
    }

    const { data: referral } = useGetUserReferral();

    return { useMutationUserUpdate, useGetUserBalance, useGetUser, useGetUserReferral, balance, user, referral };
}
