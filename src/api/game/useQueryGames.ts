import { useQuery } from "@tanstack/react-query";

import { QUERY_KEY } from "@/config";
import { GameHistoryProps, UserProps } from "@/models";
import { ApiResponseData } from "@/models/api.model";

import { useGameApi } from "./useApi";

export function useQueryGames() {
    const gamesApi = useGameApi();

    function useGetListGames() {
        return useQuery<ApiResponseData<UserProps>, ApiResponseData>([QUERY_KEY.GAMES.LIST_GAME], () =>
            gamesApi.getListGame()
        );
    }

    function useGetListVictory() {
        return useQuery<ApiResponseData<GameHistoryProps[]>, ApiResponseData>([QUERY_KEY.GAMES.LIST_VICTORY], () =>
            gamesApi.getListVitory()
        );
    }

    return { useGetListGames, useGetListVictory };
}
