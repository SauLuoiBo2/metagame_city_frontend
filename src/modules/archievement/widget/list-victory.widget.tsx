import { Box, Stack } from "@mui/material";
import React from "react";

import { ICONS_URL } from "@/assets/icons";
import { IMAGE_URL } from "@/assets/images";
import { FrameTableCom } from "@/components";
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
        id: "isWin",
        label: "Win",
        width: "25%",
        align: "center",
        format: (value: boolean) => (
            <Stack>{value && <Styles.ImgIcon.LikeStar src={ICONS_URL.HEADER.CUP} style={{ height: "20px" }} />}</Stack>
        ),
    },
    {
        id: "quantity",
        label: "Quantity",
        width: "20%",
        align: "left",
        format: (value: number) => (
            <Stack direction={"row"} alignItems='center' spacing={1}>
                <h3>{value}</h3>
                <span>
                    <Styles.ImgIcon.Star />
                </span>
            </Stack>
        ),
    },
    {
        id: "time",
        label: "Time",
        width: "20%",
        align: "left",
    },
];

interface Data {
    game: string;
    isWin: boolean;
    quantity: number;
    time: string;
}

function createData(game: string, isWin: boolean, quantity: number, time: string): Data {
    return { game, isWin, quantity, time };
}

const rows = [
    createData("Caro", true, 24, "9h30 12/08/2022"),
    createData("Caro", false, 24, "9h30 12/08/2022"),
    createData("Caro", true, 24, "9h30 12/08/2022"),
    createData("Caro", true, 24, "9h30 12/08/2022"),
    createData("Caro", true, 24, "9h30 12/08/2022"),
    createData("Caro", true, 24, "9h30 12/08/2022"),
    createData("Caro", true, 24, "9h30 12/08/2022"),
    createData("Caro", true, 24, "9h30 12/08/2022"),
    createData("Caro", true, 24, "9h30 12/08/2022"),
    createData("Caro", true, 24, "9h30 12/08/2022"),
    createData("Caro", true, 24, "9h30 12/08/2022"),
    createData("Caro", true, 24, "9h30 12/08/2022"),
];

const ListVictoryWidget: React.FC<ListVictoryWidgetProps> = () => {
    return (
        <>
            <FrameTableCom imgTitle={IMAGE_URL.TITLE.TITLE_VICTORY} maxWidth={"80rem"}>
                <Box width={"80%"}>
                    <CustomTable columns={columns} rows={rows} minWidth={400} maxHeight={600} />
                </Box>
            </FrameTableCom>
        </>
    );
};

export default ListVictoryWidget;
