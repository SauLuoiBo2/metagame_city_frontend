import { useRequest } from "@/config";
import { RequestListProps } from "@/models/api.model";

import { ApiUrl } from "../apiUrl";

// auth
const { affiliate_commission_url, affiliate_members_url, affiliate_buyVip_url } = ApiUrl.affiliate;

export function useAffiliateApi() {
    const { request } = useRequest();
    function getListHistories(params?: RequestListProps) {
        return request({ url: affiliate_commission_url, method: "GET", params });
    }

    function getListMembers(params?: RequestListProps) {
        return request({ url: affiliate_members_url, method: "GET", params });
    }

    function buyVip() {
        return request({ url: affiliate_buyVip_url, method: "POST" });
    }

    return { getListHistories, getListMembers, buyVip };
}
