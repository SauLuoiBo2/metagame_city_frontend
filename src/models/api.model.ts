export interface ApiResponseData<T = any> {
    status: string;
    message: string;
    data?: T;
}

export interface RequestListProps {
    page?: number;
    size?: number;
}

export interface ResposeListProps<T = any> {
    list: T[];
    total: number;
}

export interface ApiResponseListData<D> extends ApiResponseData<ResposeListProps<D>> {}
