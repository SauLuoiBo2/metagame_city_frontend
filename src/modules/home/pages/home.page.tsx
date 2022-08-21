import React from "react";

import { IMAGE_URL } from "@/assets/images";
import { getStoredAuth } from "@/libs";

import { GameBgWidget } from "../widget";
import FooterHomeWidget from "../widget/footer-home.widget";

export interface HomePageProps {}

const linkHome = "https://game.metagamecity.net/";

export const HomePage: React.FC<HomePageProps> = () => {
    const token = getStoredAuth();
    return (
        <>
            <GameBgWidget name='CARO' linkGame={linkHome + "caro" + "?token=" + token?.access_token} />
            <GameBgWidget
                linkGame={linkHome + "pacman" + "?token=" + token?.access_token}
                bgImg={IMAGE_URL.BG.BG_2}
                name='PACMAN'
                icon={IMAGE_URL.GAME.GAME_PACMAN}
            />
            <FooterHomeWidget />
        </>
    );
};
