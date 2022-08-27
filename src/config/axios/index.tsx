import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import querySting from "query-string";
import { toast } from "react-toastify";

import { useLogout } from "@/hooks/auth";
import { usePersistStore } from "@/store/useBearStore";

import { ENV } from "../env";

const { API_ENDPOINT, API_TIMEOUT, BASE_URL } = ENV.API;

const axiosClient = axios.create({
    baseURL: API_ENDPOINT,
    timeout: API_TIMEOUT,
    headers: {
        Accept: "application/json",
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        responseEncoding: "utf8",
        responseType: "json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": BASE_URL || "*",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "X-Application": "web app",
        "X-Version": "1.0.1",
    },
    paramsSerializer: (params) => querySting.stringify(params),
});

export const useRequest = () => {
    const { auth } = usePersistStore();
    // const navigate = useNavigate();
    const { onLogout } = useLogout();
    if (auth.access_token) {
        axiosClient.defaults.headers.common.Authorization = "Bearer " + auth.access_token;
    } else {
        axiosClient.defaults.headers.common.Authorization = "";
    }

    function request(options: AxiosRequestConfig) {
        const onSuccess = (response: AxiosResponse) => {
            // logger.debug('Response API:', response?.data);
            return response?.data;
        };
        const onError = async (error: AxiosError<any, any>) => {
            if (error.response?.status === 401) {
                toast.error(error?.response?.data?.message.toString());
                onLogout();
            }
            // logger.debug('Axios Options:', options);
            // optionally catch errors and add additional logging here
            await Promise.reject({
                statusCode: error.status,
                message: error.message,
                statusText: error?.response?.statusText,
                status: error?.response?.status,
                data: error?.response?.data,
            });
        };
        return axiosClient(options).then(onSuccess).catch(onError);
    }
    return { request };
};

// axiosClient.interceptors.response.use(
//   (response) => {
//     if (response && response.data) {
//       return response.data;
//     }
//     return response;
//   },
//   async (error) => {
//     // Handle errors
//     throw error;
//   }
// );

// axiosClient.interceptors.request.use(
//     async (config) => {
//         // Handle token here ...

//         // config.headers["Access-Control-Allow-Methods"] =
//         //   "GET, PUT, POST, DELETE, OPTIONS";

//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

export default axiosClient;
