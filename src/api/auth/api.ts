import { request } from "@/config";
import {
    ActivationAccountProps,
    LoginProps,
    RegisterProps,
    ResendEmailProps,
    ResetPasswordProps,
    UserProps,
} from "@/models";
import { ApiResponseData } from "@/models/api.model";

import { ApiUrl } from "../apiUrl";

// auth
const { login_url, register_url, resend_email_url } = ApiUrl.auth;

export function authApi() {
    function signin(data: LoginProps) {
        return request({ url: login_url, method: "POST", data });
    }

    function register(data: RegisterProps) {
        return request({ url: register_url, method: "POST", data });
    }

    function activation(data: ActivationAccountProps) {
        return request({ url: register_url, method: "POST", data });
    }

    function resendEmail(data: ResendEmailProps) {
        return request({ url: resend_email_url, method: "POST", data });
    }

    function resetPassword(data: ResetPasswordProps) {
        return request({ url: resend_email_url, method: "POST", data });
    }

    return { signin, register, activation, resendEmail, resetPassword };
}

// user
const { user_url, user_balance_url, user_update_url } = ApiUrl.user;

export function userApi() {
    function getProfile(): Promise<ApiResponseData<UserProps>> {
        return request({ url: user_url, method: "GET" });
    }
    function getBalance() {
        return request({ url: user_balance_url, method: "GET" });
    }
    function updateProfile(data: any) {
        return request({ url: user_update_url, method: "POST", data });
    }

    return { getProfile, getBalance, updateProfile };
}
