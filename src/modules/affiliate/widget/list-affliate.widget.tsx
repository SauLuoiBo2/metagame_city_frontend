import { Box, Stack } from "@mui/material";
import React from "react";

import { IMAGE_URL } from "@/assets/images";
import { FrameTableCom } from "@/components";
import MaxWidthCenterView from "@/components/views/position/max-width-center";
import { Styles } from "@/theme";
import { CustomColumnTableProps, CustomTable } from "@/widgets/table/custom-table";

export interface ListAffliateWidgetProps {}

const columns: CustomColumnTableProps[] = [
    { id: "no", label: "", width: "10%" },

    {
        id: "name",
        label: "Name",
        width: "25%",
        align: "left",
    },
    {
        id: "age",
        label: "Age",
        width: "25%",
        align: "left",
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
        id: "stype",
        label: "Stype",
        width: "20%",
        align: "left",
    },
];

interface Data {
    name: string;
    age: string;
    quantity: number;
    stype: string;
}

function createData(name: string, age: string, quantity: number, stype: string): Data {
    return { name, age, quantity, stype };
}

const rows = [
    createData("08/12/2022", "hi@gmail.com", 24, "hi@gmail.com"),
    createData("08/12/2022", "hi@gmail.com", 24, "hi@gmail.com"),
    createData("08/12/2022", "hi@gmail.com", 24, "hi@gmail.com"),
    createData("08/12/2022", "hi@gmail.com", 24, "hi@gmail.com"),
    createData("08/12/2022", "hi@gmail.com", 24, "hi@gmail.com"),
    createData("08/12/2022", "hi@gmail.com", 24, "hi@gmail.com"),
];
export const ListAffliateWidget: React.FC<ListAffliateWidgetProps> = () => {
    return (
        <MaxWidthCenterView maxWidth='800px'>
            <FrameTableCom imgTitle={IMAGE_URL.TITLE.TITLE_AFILIATE}>
                <Box width={"80%"}>
                    <CustomTable columns={columns} rows={rows} minWidth={400} />
                </Box>
            </FrameTableCom>
        </MaxWidthCenterView>
    );
};
