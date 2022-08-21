import { memo } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import { useQueryUser } from "@/api";
import { SplashAppLayout } from "@/widgets/layout";

import { PATH } from "../pathname";
import { appRoute, authRoute, errorRoute } from "../routes";

const { ERROR_PATH, MAIN_PATH } = PATH;

const Router = memo(() => {
    const { useGetUser } = useQueryUser();

    const { data } = useGetUser();

    const isLogin = data?.data ? true : false;
    return useRoutes([
        {
            path: MAIN_PATH.PUBLIC,
            element: <SplashAppLayout />,
            children: [appRoute(isLogin), authRoute(isLogin), errorRoute()],
        },
        {
            path: MAIN_PATH.ALL,
            element: <Navigate to={"/" + ERROR_PATH.ERROR_404} />,
        },
    ]);
});

export const RoutesProvider = memo(() => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
});
