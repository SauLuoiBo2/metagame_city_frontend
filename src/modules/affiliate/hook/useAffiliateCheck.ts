import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useQueryUser } from "@/api";
import { PATH } from "@/router/pathname";

export function useAffiliateCheck() {
    const { useGetUserReferral } = useQueryUser();
    const { data } = useGetUserReferral();

    const navigate = useNavigate();

    const refferal = data?.data;

    useEffect(() => {
        if (refferal) {
            if (refferal.level > 1 || refferal.isBuy) {
                navigate("/" + PATH.MAIN_PATH.AFFILIATE);
            } else {
                navigate("/" + PATH.MAIN_PATH.AFFILIATE_BUY);
            }
        }
    }, [refferal]);
}
