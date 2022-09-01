import { useRequest } from "@/config";
import { EmailProps, ProfileProps, UsernameProps, UserProps } from "@/models";
import { ApiResponseData } from "@/models/api.model";

import { ApiUrl } from "../apiUrl";

const {
    gg_change_url,
    gg_verify_url,
    user_url,
    user_balance_url,
    user_update_url,
    user_referral_url,
    user_update_photo_url,
    gg_setup_url,
} = ApiUrl.user;

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
    function updateProfile(data: ProfileProps) {
        return request({ url: user_update_url, method: "POST", data });
    }

    function updateUsername(data: UsernameProps) {
        return request({ url: user_update_url, method: "POST", data });
    }

    function updateEmail(data: EmailProps) {
        return request({ url: user_update_url, method: "POST", data });
    }

    function updateProfilePhoto(photo: any) {
        const data = new FormData();
        data.append("avatar", photo);
        return request({ url: user_update_photo_url, method: "POST", data });
    }

    function getGoogle() {
        return request({ url: gg_setup_url, method: "GET" });
    }
    function sendVerifyGoogle(data: any) {
        return request({ url: gg_verify_url, method: "POST", data });
    }

    function sendChangeGoogle() {
        return request({ url: gg_change_url, method: "POST" });
    }

    return {
        sendChangeGoogle,
        sendVerifyGoogle,
        updateUsername,
        updateEmail,
        getGoogle,
        getProfile,
        getBalance,
        updateProfile,
        getReferral,
        updateProfilePhoto,
    };
}
