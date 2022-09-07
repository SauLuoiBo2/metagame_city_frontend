import { Pagination, Stack } from "@mui/material";
import moment from "moment";
import React from "react";

import { useQueryAffiliate } from "@/api";
import { useQueryList } from "@/hooks/query/useQueryList";
import { Styles } from "@/theme";
import { CustomColumnTableProps, CustomTable } from "@/widgets/table/custom-table";

import { ViewFrameList } from "../view/view-frame-list";

export interface ListCommisionWidgetProps {}
const columns: CustomColumnTableProps[] = [
    { id: "no", label: "", width: "10%" },

    {
        id: "from",
        label: "From",
        width: "25%",
        align: "left",
    },
    {
        id: "amount",
        label: "Amount",
        width: "25%",
        align: "right",
        format: (value: number) => (
            <Stack width='100%' direction={"row"} alignItems='center' justifyContent={"flex-end"} spacing={1}>
                <h3>{value || "-"}</h3>
                <span>{value ? <Styles.ImgIcon.Star /> : null}</span>
            </Stack>
        ),
    },
    {
        id: "type",
        label: "Stype",
        width: "20%",
        align: "left",
        format: (value: number) => (
            <Stack direction={"row"} alignItems='center' justifyContent={"center"} spacing={1}>
                {value === 2 ? "game bonus" : "affiliate"}
            </Stack>
        ),
    },
    {
        id: "updated",
        label: "Time",
        width: "20%",
        align: "left",
        format: (value: any) => <>{moment(value).format("YYYY-MM-DD HH:mm:ss")}</>,
    },
];

export const ListCommisionWidget: React.FC<ListCommisionWidgetProps> = () => {
    const { useGetListCommission } = useQueryAffiliate();

    const { query, goPage } = useQueryList();
    const { data, isLoading } = useGetListCommission(query);

    const list = data?.data?.list;

    const total = data?.data?.total || 1;

    const totalPage = total / query.size + 1;
    return (
        <ViewFrameList title='List commission'>
            <Stack width={"100%"} spacing={1}>
                <CustomTable columns={columns} rows={list || []} minWidth={600} isLoading={isLoading} />
                <Stack width='100%' alignItems={"flex-end"}>
                    <Pagination
                        count={totalPage}
                        variant='outlined'
                        color='primary'
                        onChange={(e, value) => goPage(value)}
                    />
                </Stack>
            </Stack>
        </ViewFrameList>
    );
};
