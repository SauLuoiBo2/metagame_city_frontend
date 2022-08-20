import React from "react";

import { GameBgWidget } from "../widget";
import FooterHomeWidget from "../widget/footer-home.widget";

export interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
    return (
        <>
            <GameBgWidget />
            <GameBgWidget />
            <FooterHomeWidget />
        </>
    );
};
