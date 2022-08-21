import { useRequest } from "@/config";
import { FinanceSendStarDtoProps } from "@/models/finance.model";

import { ApiUrl } from "../apiUrl";

// auth
const { star_url, send_star_url } = ApiUrl.finance;

export function useFinanceApi() {
    const { request } = useRequest();
    function getStar() {
        return request({ url: star_url, method: "GET" });
    }

    function sendStar(data: FinanceSendStarDtoProps) {
        return request({ url: send_star_url, method: "POST", data });
    }

    return { getStar, sendStar };
}
