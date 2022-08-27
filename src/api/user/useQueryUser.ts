import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { QUERY_KEY } from "@/config";
import { BalanceDtoProps, ReferralDtoProps, UserProps } from "@/models";
import { ApiResponseData } from "@/models/api.model";
import { usePersistStore } from "@/store/useBearStore";

import { useUserApi } from "./useUserApi";

export function useQueryUser() {
    const userApi = useUserApi();
    const { auth } = usePersistStore();

    const { access_token } = auth;

    function useMutationUserUpdate() {
        return useMutation<ApiResponseData, AxiosError, any>((body) => userApi.updateProfile(body), {});
    }

    function useGetUser() {
        return useQuery<ApiResponseData<UserProps>, AxiosError>(
            [QUERY_KEY.USER.PROFILE_KEY],
            () => userApi.getProfile(),
            {
                enabled: !!access_token,
            }
        );
    }

    const { data: user } = useGetUser();

    function useGetUserBalance() {
        return useQuery<ApiResponseData<BalanceDtoProps>, AxiosError>(
            [QUERY_KEY.USER.PROFILE_BALANCE_KEY],
            () => userApi.getBalance(),
            {
                enabled: !!access_token,
            }
        );
    }

    function useGetUserReferral() {
        return useQuery<ApiResponseData<ReferralDtoProps>, AxiosError>(
            [QUERY_KEY.USER.PROFILE_REFERRAL_KEY],
            () => userApi.getReferral(),
            {
                enabled: !!access_token,
            }
        );
    }

    return { useMutationUserUpdate, useGetUserBalance, useGetUser, useGetUserReferral, user };
}
