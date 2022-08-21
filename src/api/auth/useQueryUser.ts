import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { QUERY_KEY } from "@/config";
import { UserProps } from "@/models";
import { ApiResponseData } from "@/models/api.model";

import { userApi } from "./api";

export function useQueryUser() {
    function useMutationUserUpdate() {
        return useMutation<ApiResponseData, AxiosError, any>((body) => userApi().updateProfile(body), {});
    }

    function useGetUser() {
        return useQuery<ApiResponseData<UserProps>, AxiosError>([QUERY_KEY.USER.PROFILE_KEY], () =>
            userApi().getProfile()
        );
    }

    return { useMutationUserUpdate, useGetUser };
}
