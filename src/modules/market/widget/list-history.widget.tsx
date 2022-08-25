import { Box, Stack } from "@mui/material";
import React from "react";
import { useMediaQuery } from "usehooks-ts";

import { IMAGE_URL } from "@/assets/images";
import { FrameTableCom } from "@/components";
import { Styles } from "@/theme";
import { CustomColumnTableProps, CustomTable } from "@/widgets/table/custom-table";

export interface ListHistoryWidgetProps {}

const columns: CustomColumnTableProps[] = [
    { id: "age", label: "Age", width: "20%" },

    {
        id: "from",
        label: "From",
        width: "30%",
        align: "left",
    },
    {
        id: "to",
        label: "To",
        width: "30%",
        align: "left",
    },
    {
        id: "quantity",
        label: "Quantity",
        width: "25%",
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
];

interface Data {
    age: string;
    from: string;
    to: string;
    quantity: number;
}

function createData(age: string, from: string, to: string, quantity: number): Data {
    return { age, from, to, quantity };
}

const rows = [
    createData("08/12/2022", "hi@gmail.com", "hi@gmail.com", 24),
    createData("08/12/2022", "hi@gmail.com", "hi@gmail.com", 24),
    createData("08/12/2022", "hi@gmail.com", "hi@gmail.com", 24),
    createData("08/12/2022", "hi@gmail.com", "hi@gmail.com", 24),
    createData("08/12/2022", "hi@gmail.com", "hi@gmail.com", 24),
    createData("08/12/2022", "hi@gmail.com", "hi@gmail.com", 24),
    createData("08/12/2022", "hi@gmail.com", "hi@gmail.com", 24),
    createData("08/12/2022", "hi@gmail.com", "hi@gmail.com", 24),
    createData("08/12/2022", "hi@gmail.com", "hi@gmail.com", 24),
    createData("08/12/2022", "hi@gmail.com", "hi@gmail.com", 24),
    createData("08/12/2022", "hi@gmail.com", "hi@gmail.com", 24),
    createData("08/12/2022", "hi@gmail.com", "hi@gmail.com", 24),
];

export const ListHistoryWidget: React.FC<ListHistoryWidgetProps> = () => {
    const isPC = useMediaQuery("(min-width: 768px)");

    return (
        <>
            <FrameTableCom
                maxWidth={"80rem"}
                imgFrame={isPC ? IMAGE_URL.FRAME.FRAME_VICTORY : IMAGE_URL.FRAME.FRAME_VICTORY_VER}
                imgTitle={IMAGE_URL.TITLE.TITLE_HISTORY}
            >
                <Box width={"80%"}>
                    <CustomTable columns={columns} rows={rows} minWidth={400} />
                </Box>
            </FrameTableCom>
        </>
    );
};
