import { Box, Stack } from "@mui/material";
import React from "react";
import { useMediaQuery } from "usehooks-ts";

import { useQueryFinance } from "@/api/finance/useQueryFinance";
import { IMAGE_URL } from "@/assets/images";
import { FrameTableCom } from "@/components";
import { Styles } from "@/theme";
import { CustomColumnTableProps, CustomTable } from "@/widgets/table/custom-table";

export interface ListHistoryWidgetProps {}

// star history
// [{
//     from: stringl
//     to: string;
//     amount: number;
//     type: 1, //1=> send,  2=> receive
//   status:string; "Success" | "Pending" | "Cancel"
//   time: Date | number
// }]

const columns: CustomColumnTableProps[] = [
    { id: "created", label: "Age", width: "20%" },

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
        id: "amount",
        label: "Quantity",
        width: "25%",
        align: "right",
        format: (value: number) => (
            <Stack direction={"row"} alignItems='center' justifyContent={"flex-end"} spacing={1}>
                <h3>{value}</h3>

                <span>
                    <Styles.ImgIcon.Star />
                </span>
            </Stack>
        ),
    },
];

export const ListHistoryWidget: React.FC<ListHistoryWidgetProps> = () => {
    const isPC = useMediaQuery("(min-width: 768px)");

    const { data: list } = useQueryFinance();

    return (
        <>
            <FrameTableCom
                maxWidth={"80rem"}
                imgFrame={isPC ? IMAGE_URL.FRAME.FRAME_VICTORY : IMAGE_URL.FRAME.FRAME_VICTORY_VER}
                imgTitle={IMAGE_URL.TITLE.TITLE_HISTORY}
            >
                <Box width={"80%"}>
                    <CustomTable columns={columns} rows={list?.data || []} minWidth={400} />
                </Box>
            </FrameTableCom>
        </>
    );
};
