import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { ActivationAccountProps, LoginProps, RegisterProps, ResendEmailProps, UserDtoProps } from "@/models";
import { ApiResponseData } from "@/models/api.model";
import { usePersistStore } from "@/store/useBearStore";

import { useAuthApi } from "./api";

export function useQueryAuth() {
    const authApi = useAuthApi();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    function useMutationLogin() {
        const { authSetAccessToken } = usePersistStore();
        return useMutation<ApiResponseData<UserDtoProps>, ApiResponseData, LoginProps>((body) => authApi.signin(body), {
            onSuccess: async (data) => {
                await authSetAccessToken(data.data?.token || "");

                const status: any = data.status;

                if (status === "error") {
                    toast.error(data.message);
                    return;
                }

                if (status === "gg") {
                    toast.info("Google Authentication");
                    return;
                }
                navigate("/");
                queryClient.refetchQueries();
            },
        });
    }

    function useMutationRegister() {
        return useMutation<ApiResponseData, ApiResponseData, RegisterProps>((body) => authApi.register(body), {
            onSuccess: (data) => {
                // navigate("/login");
                toast.success(data.message);
            },
            onError: (data) => {
                toast.error(data?.data?.message);
            },
        });
    }

    function sendActivation() {
        return useMutation<ApiResponseData, ApiResponseData, ActivationAccountProps>(
            (body) => authApi.activation(body),
            {
                onSuccess: (data) => {
                    navigate("/login");
                    toast.success(data.message);
                },
                onError: (data) => {
                    toast.error(data?.data?.message);
                },
            }
        );
    }

    function sendForgotPassword() {
        return useMutation<ApiResponseData, ApiResponseData, ResendEmailProps>(
            (body) => authApi.sendEmailForgot(body),
            {
                onSuccess: (data) => {
                    if (data.status === "error") {
                        toast.error(data.message);
                    } else {
                        toast.success(data.message);
                    }
                },
                onError: (data) => {
                    toast.error(data?.data?.message);
                },
            }
        );
    }

    function sendEmailRegister() {
        return useMutation<ApiResponseData, ApiResponseData, ResendEmailProps>(
            (body) => authApi.resendEmailRegister(body),
            {
                onSuccess: (data) => {
                    if (data.status === "error") {
                        toast.error(data.message);
                    } else {
                        toast.success(data.message);
                    }
                },
                onError: (data) => {
                    toast.error(data?.data?.message);
                },
            }
        );
    }

    return { useMutationLogin, useMutationRegister, sendActivation, sendForgotPassword, sendEmailRegister };
}
