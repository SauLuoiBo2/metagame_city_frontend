import { Box, Stack } from "@mui/material";
import moment from "moment";
import React from "react";

import { useQueryGames } from "@/api";
import { ICONS_URL } from "@/assets/icons";
import { IMAGE_URL } from "@/assets/images";
import { FrameTableCom } from "@/components";
import { QUERY_KEY } from "@/config";
import { useQueryInvalidate } from "@/hooks/query";
import { Styles } from "@/theme";
import { CustomColumnTableProps, CustomTable } from "@/widgets/table/custom-table";

export interface ListVictoryWidgetProps {}

const columns: CustomColumnTableProps[] = [
    { id: "no", label: "", width: "10%" },

    {
        id: "game",
        label: "Game",
        width: "25%",
        align: "left",
    },
    {
        id: "win",
        label: "Win",
        width: "25%",
        align: "center",
        format: (value: boolean) => (
            <Stack alignItems={"center"}>
                {value && <Styles.ImgIcon.LikeStar src={ICONS_URL.HEADER.CUP} style={{ height: "20px" }} />}
            </Stack>
        ),
    },
    {
        id: "amount",
        label: "Quantity",
        width: "20%",
        align: "right",
        format: (value: number) => (
            <Stack width='100%' direction={"row"} alignItems='center' justifyContent={"flex-end"} spacing={1}>
                <h3>{value || "-"}</h3>
                <span>{value ? <Styles.ImgIcon.Star /> : null}</span>
            </Stack>
        ),
    },
    {
        id: "time",
        label: "Time",
        width: "20%",
        align: "left",
        format: (value: any) => <>{moment(value).format("YYYY-MM-DD HH:mm:ss")}</>,
    },
];

const ListVictoryWidget: React.FC<ListVictoryWidgetProps> = () => {
    const { useGetListVictory } = useQueryGames();

    const { data, isLoading } = useGetListVictory();

    useQueryInvalidate(QUERY_KEY.GAMES.LIST_VICTORY);
    const list = data?.data || [];
    return (
        <>
            <FrameTableCom imgTitle={IMAGE_URL.TITLE.TITLE_VICTORY} maxWidth={"80rem"}>
                <Box width={"80%"}>
                    <CustomTable columns={columns} rows={list} minWidth={600} maxHeight={400} isLoading={isLoading} />
                </Box>
            </FrameTableCom>
        </>
    );
};

export default ListVictoryWidget;
