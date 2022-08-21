import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { QUERY_KEY } from "@/config";
import { BalanceDtoProps, UserProps } from "@/models";
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

    function useGetUserBalance() {
        return useQuery<ApiResponseData<BalanceDtoProps>, AxiosError>([QUERY_KEY.USER.PROFILE_BALANCE_KEY], () =>
            userApi.getBalance()
        );
    }

    function useGetUserReferral() {
        return useQuery<ApiResponseData<BalanceDtoProps>, AxiosError>([QUERY_KEY.USER.PROFILE_REFERRAL_KEY], () =>
            userApi.getReferral()
        );
    }

    return { useMutationUserUpdate, useGetUserBalance, useGetUser, useGetUserReferral };
}
