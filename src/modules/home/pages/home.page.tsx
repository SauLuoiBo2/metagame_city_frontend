import React from "react";

import { GameBgWidget } from "../widget";

export interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
    return (
        <>
            <GameBgWidget />
            <GameBgWidget />
            <GameBgWidget />
            <GameBgWidget />
        </>
    );
};
