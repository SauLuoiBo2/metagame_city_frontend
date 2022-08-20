import React from "react";

import { IMAGE_URL } from "@/assets/images";
import { FrameTableCom } from "@/components";

export interface ListHistoryWidgetProps {}

export const ListHistoryWidget: React.FC<ListHistoryWidgetProps> = () => {
    return <FrameTableCom imgTitle={IMAGE_URL.TITLE.TITLE_HISTORY}>ListHistoryWidget</FrameTableCom>;
};
