import { useRequest } from "@/config";
import { UserProps } from "@/models";
import { ApiResponseData } from "@/models/api.model";

import { ApiUrl } from "../apiUrl";

const { user_url, user_balance_url, user_update_url, user_referral_url, user_update_photo_url } = ApiUrl.user;

export function useUserApi() {
    const { request } = useRequest();
    function getProfile(): Promise<ApiResponseData<UserProps>> {
        return request({ url: user_url, method: "GET" });
    }
    function getBalance() {
        return request({ url: user_balance_url, method: "GET" });
    }
    function getReferral() {
        return request({ url: user_referral_url, method: "GET" });
    }
    function updateProfile(data: any) {
        return request({ url: user_update_url, method: "POST", data });
    }

    function updateProfilePhoto(photo: any) {
        const data = new FormData();
        data.append("avatar", photo);
        return request({ url: user_update_photo_url, method: "POST", data });
    }

    return { getProfile, getBalance, updateProfile, getReferral, updateProfilePhoto };
}
