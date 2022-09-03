import { useRequest } from "@/config";
import {
    ActivationAccountProps,
    ChangePasswordProps,
    LoginProps,
    RegisterProps,
    ResendEmailProps,
    ResetPasswordProps,
} from "@/models";

import { ApiUrl } from "../apiUrl";

// auth
const { login_url, register_url, forgot_password_url, activation_url, resend_email_url, change_password_url } =
    ApiUrl.auth;

export function useAuthApi() {
    const { request } = useRequest();
    function signin(data: LoginProps) {
        return request({ url: login_url, method: "POST", data });
    }

    function register(data: RegisterProps) {
        return request({ url: register_url, method: "POST", data });
    }

    function activation(data: ActivationAccountProps) {
        return request({ url: activation_url, method: "POST", data });
    }

    function sendEmailForgot(data: ResendEmailProps) {
        return request({ url: forgot_password_url, method: "POST", data });
    }

    function resendEmailRegister(data: ResendEmailProps) {
        return request({ url: resend_email_url, method: "POST", data });
    }

    function resetPassword(data: ResetPasswordProps) {
        return request({ url: forgot_password_url, method: "POST", data });
    }

    function changePassword(data: ChangePasswordProps) {
        return request({ url: change_password_url, method: "POST", data });
    }

    return { changePassword, signin, register, activation, sendEmailForgot, resetPassword, resendEmailRegister };
}
