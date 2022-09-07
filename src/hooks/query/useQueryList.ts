import { useEffect, useState } from "react";

export interface PreQuery {
    page: number;
    size: number;
}

export function useQueryList(totalData?: number) {
    const [page, setPage] = useState<number>(1);
    const [size, setSize] = useState<number>(10);
    const [total, setTotal] = useState<number>(totalData || 1);

    function nextPage() {
        setPage(page + 1);
    }

    function prePage() {
        if (page === 1) {
            return;
        } else {
            setPage(page - 1);
        }
    }

    function goPage(p: number) {
        if (p > total || p < 1) {
            return;
        } else {
            setPage(p);
        }
    }

    const query = {
        page,
        size,
    };

    useEffect(() => {
        setPage(1);
    }, [size]);

    useEffect(() => {
        setTotal(totalData || 1);
    }, [totalData]);

    return { nextPage, prePage, query, setSize, goPage };
}
