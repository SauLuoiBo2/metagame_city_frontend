import { ErrorMainPage } from "@/modules/error";
import { MainLayout } from "@/widgets";

import { PATH } from "../pathname";

const { ERROR_PATH } = PATH;

export const publicRoute = () => {
    return {
        path: ERROR_PATH.ERROR_404,
        element: <MainLayout />,
        children: [
            {
                path: "",
                element: <ErrorMainPage />,
            },
        ],
    };
};
