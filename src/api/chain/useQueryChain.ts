import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { QUERY_KEY } from "@/config";
import { ApiResponseData } from "@/models/api.model";
import { AssetDetailProps, AssetProps } from "@/models/asset.model";

import { useApiChain } from "./useApiChain";

export function useQueryChain() {
    const apiChain = useApiChain();
    const { getDetailChain, getListChain } = apiChain;

    function useGetListChain() {
        return useQuery<ApiResponseData<AssetProps[]>, ApiResponseData>(
            [QUERY_KEY.CHAIN.CHAIN_LIST],
            () => getListChain(),
            {}
        );
    }

    function useGetDetailChain() {
        const [query, setQuery] = useState(null);

        const getQueryDetail = useQuery<ApiResponseData<AssetDetailProps[]>, ApiResponseData>(
            [QUERY_KEY.CHAIN.CHAIN_DETAIL, query],
            () => getDetailChain(query || 0),
            {
                enabled: !!query,
            }
        );

        return { getQueryDetail, setQuery, query };
    }

    return { useGetListChain, useGetDetailChain };
}
