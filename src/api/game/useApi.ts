import { useRequest } from "@/config";
import { RequestListProps } from "@/models/api.model";

import { ApiUrl } from "../apiUrl";

// auth
const { games_url, games_victory_url } = ApiUrl.game;

export function useGameApi() {
    const { request } = useRequest();
    function getListGame() {
        return request({ url: games_url, method: "GET" });
    }

    function getListVitory(params?: RequestListProps) {
        return request({ url: games_victory_url, method: "GET", params });
    }

    return { getListGame, getListVitory };
}
