import React from "react";

import { config } from "../config";
import { getLinkGame } from "../function";
import { GameBgWidget } from "../widget";
import FooterHomeWidget from "../widget/footer-home.widget";

export interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
    return (
        <>
            {config.game.map((game, i) => {
                return (
                    <GameBgWidget
                        key={i}
                        bgImg={game.bg}
                        isLeft={i % 2 === 0}
                        {...game}
                        linkGame={getLinkGame(game.linkGame)}
                        isTop={i === 0}
                        isComing={game.isComing}
                    />
                );
            })}

            <FooterHomeWidget />
        </>
    );
};
