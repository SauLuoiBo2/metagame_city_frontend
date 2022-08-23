import { Stack } from "@mui/material";
import React from "react";

import { useQueryGames } from "@/api";
import { IMAGE_URL } from "@/assets/images";
import { FrameTableCom } from "@/components";

export interface ListVictoryWidgetProps {}

const ListVictoryWidget: React.FC<ListVictoryWidgetProps> = () => {
    const { useGetListVictory } = useQueryGames();
    const { data } = useGetListVictory();
    return (
        <>
            <FrameTableCom imgTitle={IMAGE_URL.TITLE.TITLE_VICTORY} maxWidth={"80rem"}>
                <Stack></Stack>
            </FrameTableCom>
        </>
    );
};

export default ListVictoryWidget;
