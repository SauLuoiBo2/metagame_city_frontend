export interface ApiResponseData<T = any> {
    status: string;
    message: string;
    data?: T;
}

export interface RequestListProps {
    page?: number;
    size?: number;
}
