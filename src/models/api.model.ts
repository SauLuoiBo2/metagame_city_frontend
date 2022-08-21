export interface ApiResponseData<T = any> {
    status: string;
    message: string;
    data?: T;
}
