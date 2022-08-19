import React from "react";
import { Navigate } from "react-router-dom";

import { MainLayout } from "@/widgets";

import { PATH } from "../pathname";

const HomePage = React.lazy(() => import("@/modules").then(({ HomePage }) => ({ default: HomePage })));
const ArchievementHomePage = React.lazy(() =>
    import("@/modules").then(({ ArchievementHomePage }) => ({ default: ArchievementHomePage }))
);

const MarketHomePage = React.lazy(() =>
    import("@/modules").then(({ MarketHomePage }) => ({ default: MarketHomePage }))
);

const { MAIN_PATH } = PATH;

export const appRoute = (isLoggedIn: boolean) => {
    return {
        path: MAIN_PATH.PUBLIC,
        element: isLoggedIn ? <MainLayout /> : <Navigate to='/login' />,
        children: [
            { path: MAIN_PATH.HOME, element: <HomePage /> },
            { path: MAIN_PATH.CUP, element: <ArchievementHomePage /> },
            { path: MAIN_PATH.MARKET, element: <MarketHomePage /> },
        ],
    };
};
