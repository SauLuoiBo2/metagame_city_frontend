import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

import { QUERY_KEY } from "@/config";
import { BalanceDtoProps, ReferralDtoProps, UserProps, UserUpdateProps } from "@/models";
import { ApiResponseData } from "@/models/api.model";
import { useBearStore, usePersistStore } from "@/store/useBearStore";

import { useUserApi } from "./useUserApi";

export function useQueryUser() {
    const userApi = useUserApi();
    const { auth } = usePersistStore();
    const { modalOnClose } = useBearStore();

    const { access_token } = auth;

    function useMutationUserUpdate() {
        return useMutation<ApiResponseData, AxiosError, UserUpdateProps>((body) => userApi.updateProfile(body), {
            onSuccess: (data) => {
                toast.success(data?.message);
                modalOnClose();
            },
        });
    }

    function useGetUser() {
        return useQuery<ApiResponseData<UserProps>, AxiosError>(
            [QUERY_KEY.USER.PROFILE_KEY],
            () => userApi.getProfile(),
            {
                enabled: !!access_token,
                onSuccess: (data) => {
                    toast.success(data?.message);
                },
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
