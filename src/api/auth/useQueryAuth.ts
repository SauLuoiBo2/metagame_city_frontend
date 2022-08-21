import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import { LoginProps, RegisterProps, UserDtoProps } from "@/models";
import { ApiResponseData } from "@/models/api.model";
import { usePersistStore } from "@/store/useBearStore";

import { authApi } from "./api";

export function useQueryAuth() {
    const navigate = useNavigate();
    function useMutationLogin() {
        const { authSetAccessToken } = usePersistStore();
        return useMutation<ApiResponseData<UserDtoProps>, AxiosError, LoginProps>((body) => authApi().signin(body), {
            onSuccess: async (data) => {
                await authSetAccessToken(data.data?.token || "");
            },
        });
    }

    function useMutationRegister() {
        return useMutation<ApiResponseData, AxiosError, RegisterProps>((body) => authApi().register(body), {
            onSuccess: () => {
                navigate("/login");
            },
        });
    }

    return { useMutationLogin, useMutationRegister };
}
