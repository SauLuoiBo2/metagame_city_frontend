import { getStoredAuth } from "@/libs";

const linkHome = "https://game.metagamecity.net/";

export function getLinkGame(name: string) {
    const token = getStoredAuth();
    return linkHome + name + "?token=" + token?.access_token;
}
