import { getStoredAuth } from "@/libs";

const linkHome = "https://game.metagamecity.net/";
const linkReact = "https://metagamecity.net/";

export function getLinkGame(name: string) {
    const token = getStoredAuth();

    const link = name ? linkHome : linkReact;
    return link + name + "?token=" + token?.access_token;
}
