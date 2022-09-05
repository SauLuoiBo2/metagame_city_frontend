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
        {
            name: "FISH HUNTER",
            // linkGame: "pacman",
            icon: IMAGE_URL.GAME.GAME_FISH,
            bg: IMAGE_URL.BG.BG_3,
            isComing: true,
        },
        {
            name: "GOLD DIGGER",
            // linkGame: "COMMING SOON",
            icon: IMAGE_URL.GAME.GAME_GOLD,
            bg: IMAGE_URL.BG.BG_6,
            isComing: true,
        },
        {
            name: "CAR RACING",
            // linkGame: "pacman",
            icon: IMAGE_URL.GAME.GAME_CAR,
            bg: IMAGE_URL.BG.BG_5,
            isComing: true,
        },
        {
            name: "FUN SNAKE",
            // linkGame: "pacman",
            icon: IMAGE_URL.GAME.GAME_SNAKE,
            bg: IMAGE_URL.BG.BG_6,
            isComing: true,
        },
    ],
};
