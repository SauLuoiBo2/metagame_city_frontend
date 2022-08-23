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
const AffiliateHomePage = React.lazy(() =>
    import("@/modules").then(({ AffiliateHomePage }) => ({ default: AffiliateHomePage }))
);

const AffiliateBuyPage = React.lazy(() =>
    import("@/modules").then(({ AffiateBuyPage }) => ({ default: AffiateBuyPage }))
);

const AccountHomePage = React.lazy(() =>
    import("@/modules").then(({ AccountHomePage }) => ({ default: AccountHomePage }))
);

const { MAIN_PATH, AUTH_PATH } = PATH;

export const appRoute = (isLoggedIn: boolean) => {
    return {
        path: "",
        element: isLoggedIn ? <MainLayout /> : <Navigate to={"/" + AUTH_PATH.INTRO} />,
        children: [
            { path: MAIN_PATH.HOME, element: <HomePage /> },
            { path: MAIN_PATH.CUP, element: <ArchievementHomePage /> },
            { path: MAIN_PATH.MARKET, element: <MarketHomePage /> },
            { path: MAIN_PATH.AFFILIATE, element: <AffiliateHomePage /> },
            { path: MAIN_PATH.AFFILIATE_BUY, element: <AffiliateBuyPage /> },
            { path: MAIN_PATH.ACCOUNT, element: <AccountHomePage /> },
        ],
    };
};
