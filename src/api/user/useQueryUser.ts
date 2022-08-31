import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
    const queryClient = useQueryClient();

    const { access_token } = auth;

    function useMutationUserUpdate() {
        return useMutation<ApiResponseData, ApiResponseData, UserUpdateProps>((body) => userApi.updateProfile(body), {
            onSuccess: (data) => {
                toast.success(data?.message);
                queryClient.refetchQueries([QUERY_KEY.USER.PROFILE_KEY]);
                modalOnClose();
            },
            onError: (data) => {
                toast.error(data?.data?.message);
            },
        });
    }

    function useUpPhotoUser() {
        return useMutation<ApiResponseData, ApiResponseData, any>((body) => userApi.updateProfilePhoto(body), {
            onSuccess: (data) => {
                toast.success(data?.message);
                queryClient.refetchQueries([QUERY_KEY.USER.PROFILE_KEY]);
            },
            onError: (data) => {
                toast.error(data?.data?.message);
            },
        });
    }

    function useGetUser() {
        return useQuery<ApiResponseData<UserProps>, ApiResponseData>(
            [QUERY_KEY.USER.PROFILE_KEY],
            () => userApi.getProfile(),
            {
                enabled: !!access_token,
            }
        );
    }

    const { data: user } = useGetUser();

    function useGetUserBalance() {
        return useQuery<ApiResponseData<BalanceDtoProps>, ApiResponseData>(
            [QUERY_KEY.USER.PROFILE_BALANCE_KEY],
            () => userApi.getBalance(),
            {
                enabled: !!access_token,
            }
        );
    }

    function useGetUserReferral() {
        return useQuery<ApiResponseData<ReferralDtoProps>, ApiResponseData>(
            [QUERY_KEY.USER.PROFILE_REFERRAL_KEY],
            () => userApi.getReferral(),
            {
                enabled: !!access_token,
            }
        );
    }

    return { useMutationUserUpdate, useGetUserBalance, useGetUser, useGetUserReferral, user, useUpPhotoUser };
}
