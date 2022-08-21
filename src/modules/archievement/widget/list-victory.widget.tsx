import { Stack } from "@mui/material";
import React from "react";

import { useQueryGameApi } from "@/api";
import { IMAGE_URL } from "@/assets/images";
import { FrameTableCom } from "@/components";

export interface ListVictoryWidgetProps {}

const ListVictoryWidget: React.FC<ListVictoryWidgetProps> = () => {
    const { useGetListVictory } = useQueryGameApi();

    const { data } = useGetListVictory();
    console.log(data);
    return (
        <>
            <FrameTableCom imgTitle={IMAGE_URL.TITLE.TITLE_VICTORY}>
                <Stack></Stack>
            </FrameTableCom>
        </>
    );
};

export default ListVictoryWidget;
