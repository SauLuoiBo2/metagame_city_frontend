import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { memo, PropsWithChildren } from "react";

import { convertMiliSeconds } from "@/utils";
export interface QueryProviderProps extends PropsWithChildren {}

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchIntervalInBackground: false,
            refetchOnReconnect: false,
            refetchOnMount: false,
            staleTime: convertMiliSeconds(10).getFromMinute(), // 10 minutes
            cacheTime: convertMiliSeconds(15).getFromMinute(), // 15 minutes
            retry: 0,
        },
    },
});

export const QueryProvider: React.FC<QueryProviderProps> = memo(({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
});
