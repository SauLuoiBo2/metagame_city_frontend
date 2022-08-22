import React from "react";
import { useMediaQuery } from "usehooks-ts";

import { IMAGE_URL } from "@/assets/images";
import { FrameTableCom } from "@/components";

export interface ListHistoryWidgetProps {}

export const ListHistoryWidget: React.FC<ListHistoryWidgetProps> = () => {
    const isPC = useMediaQuery("(min-width: 768px)");
    return (
        <FrameTableCom
            maxWidth={"80rem"}
            imgFrame={isPC ? IMAGE_URL.FRAME.FRAME_VICTORY : IMAGE_URL.FRAME.FRAME_VICTORY_VER}
            imgTitle={IMAGE_URL.TITLE.TITLE_HISTORY}
        >
            ListHistoryWidget
        </FrameTableCom>
    );
};
