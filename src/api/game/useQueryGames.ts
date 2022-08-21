import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { QUERY_KEY } from "@/config";
import { UserProps } from "@/models";
import { ApiResponseData } from "@/models/api.model";

import { useGameApi } from "./useApi";

export function useQueryGameApi() {
    const gamesApi = useGameApi();

    // function useMutationUserUpdate() {
    //     return useMutation<ApiResponseData, AxiosError, any>((body) => gamesApi.updateProfile(body), {});
    // }
    function useGetListGames() {
        return useQuery<ApiResponseData<UserProps>, AxiosError>([QUERY_KEY.GAMES.LIST_GAME], () =>
            gamesApi.getListGame()
        );
    }

    function useGetListVictory() {
        return useQuery<ApiResponseData<UserProps>, AxiosError>([QUERY_KEY.GAMES.LIST_VICTORY], () =>
            gamesApi.getListVitory()
        );
    }

    return { useGetListGames, useGetListVictory };
}
