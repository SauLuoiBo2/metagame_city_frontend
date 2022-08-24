import { ASSETS } from "@/assets";
import { IMAGE_URL } from "@/assets/images";

const { SOCIAL } = ASSETS.ICONS_URL;

export const config = {
    footer: [
        {
            icon: SOCIAL.FB,
            link: "/",
        },
        {
            icon: SOCIAL.YT,
            link: "/",
        },
        {
            icon: SOCIAL.INTA,
            link: "/",
        },
        {
            icon: SOCIAL.TW,
            link: "/",
        },
        {
            icon: SOCIAL.TELE,
            link: "/",
        },
        {
            icon: SOCIAL.TIKTOK,
            link: "/",
        },
    ],
    game: [
        {
            name: "CARO",
            linkGame: "caro",
            icon: IMAGE_URL.GAME.GAME_CARO,
            bg: IMAGE_URL.BG.BG_1,
        },
        {
            name: "PACMAN",
            linkGame: "pacman",
            icon: IMAGE_URL.GAME.GAME_PACMAN,
            bg: IMAGE_URL.BG.BG_2,
        },
    ],
};
