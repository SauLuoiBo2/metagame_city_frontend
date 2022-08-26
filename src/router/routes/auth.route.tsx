import { lazy } from "react";
import { Navigate } from "react-router-dom";

import { AuthLayout } from "@/widgets";

import { PATH } from "../pathname";

const LoginPage = lazy(() => import("@/modules").then(({ LoginPage }) => ({ default: LoginPage })));
const RegisterPage = lazy(() => import("@/modules").then(({ RegisterPage }) => ({ default: RegisterPage })));
const IntroPage = lazy(() => import("@/modules").then(({ IntroPage }) => ({ default: IntroPage })));
const ConnectWalletPage = lazy(() =>
    import("@/modules").then(({ ConnectWalletPage }) => ({ default: ConnectWalletPage }))
);
const ActivationPage = lazy(() => import("@/modules").then(({ ActivationPage }) => ({ default: ActivationPage })));

const { AUTH_PATH, ACTIVE_PATH } = PATH;

export const authRoute = (isLoggedIn: boolean) => {
    return {
        path: "/",
        element: !isLoggedIn ? <AuthLayout /> : <Navigate to={"/"} />,
        children: [
            { path: "", element: <Navigate to={"/" + AUTH_PATH.INTRO} /> },
            { path: AUTH_PATH.LOGIN, element: <LoginPage /> },
            { path: AUTH_PATH.REGISTER, element: <RegisterPage /> },
            { path: AUTH_PATH.INTRO, element: <IntroPage /> },
            { path: AUTH_PATH.WALLET, element: <ConnectWalletPage /> },
            { path: ACTIVE_PATH.ACTIVATION, element: <ActivationPage /> },
        ],
    };
};
