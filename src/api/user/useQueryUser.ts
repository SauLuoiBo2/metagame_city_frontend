import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { QUERY_KEY } from "@/config";
import {
    BalanceDtoProps,
    EmailProps,
    GoogleChangeProps,
    GoogleGetProps,
    ProfileProps,
    ReferralDtoProps,
    UsernameProps,
    UserProps,
} from "@/models";
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
        return useMutation<ApiResponseData, ApiResponseData, ProfileProps>((body) => userApi.updateProfile(body), {
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

    function useUpdateUsername() {
        return useMutation<ApiResponseData, ApiResponseData, UsernameProps>((body) => userApi.updateUsername(body), {
            onSuccess: (data) => {
                toast.success(data?.message);
                queryClient.refetchQueries([QUERY_KEY.USER.PROFILE_KEY]);
            },
            onError: (data) => {
                toast.error(data?.data?.message);
            },
        });
    }

    function useUpdateEmail() {
        return useMutation<ApiResponseData, ApiResponseData, EmailProps>((body) => userApi.updateEmail(body), {
            onSuccess: (data) => {
                toast.success(data?.message);
                queryClient.refetchQueries([QUERY_KEY.USER.PROFILE_KEY]);
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

    function useGetGoogle() {
        return useQuery<ApiResponseData<GoogleGetProps>, ApiResponseData>(
            [QUERY_KEY.USER.PROFILE_GOOGLE],
            () => userApi.getGoogle(),
            {
                enabled: !!access_token,
            }
        );
    }

    function useSendVerifyGoogle() {
        return useMutation<ApiResponseData, ApiResponseData, any>(
            [QUERY_KEY.USER.PROFILE_GOOGLE],
            (boby) => userApi.sendVerifyGoogle(boby),
            {
                onSuccess: (data) => {
                    toast.success(data?.message);
                    if (data.status === "success") {
                        modalOnClose();
                        queryClient.refetchQueries([QUERY_KEY.USER.PROFILE_KEY]);
                    }
                },
                onError: (data) => {
                    toast.error(data?.data?.message);
                },
            }
        );
    }

    function useSendChangeGoogle() {
        const { data: user } = useGetUser();
        return useMutation<ApiResponseData, ApiResponseData, GoogleChangeProps>(
            [QUERY_KEY.USER.PROFILE_GOOGLE],
            (payload) => userApi.sendChangeGoogle(payload),
            {
                onMutate() {
                    if (user) {
                        const data = user.data;
                        const tfa = user.data?.tfa;
                        const newTfa = tfa === "ON" ? "OFF" : "OFF";
                        const newData: ApiResponseData<UserProps> = { ...user, data: { ...data, tfa: newTfa } };
                        queryClient.setQueryData([QUERY_KEY.USER.PROFILE_KEY], newData);
                    }
                },
                onSuccess: (data) => {
                    toast.success(data?.message);
                    queryClient.refetchQueries([QUERY_KEY.USER.PROFILE_KEY]);
                },
                onError: (data) => {
                    toast.error(data?.data?.message);
                },
            }
        );
    }

    return {
        useSendChangeGoogle,
        useSendVerifyGoogle,
        useGetGoogle,
        useMutationUserUpdate,
        useGetUserBalance,
        useGetUser,
        useGetUserReferral,
        user,
        useUpPhotoUser,
        useUpdateEmail,
        useUpdateUsername,
    };
}
