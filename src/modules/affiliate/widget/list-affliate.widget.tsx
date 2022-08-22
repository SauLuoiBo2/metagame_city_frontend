import React from "react";

import { IMAGE_URL } from "@/assets/images";
import { FrameTableCom } from "@/components";
import MaxWidthCenterView from "@/components/views/position/max-width-center";

export interface ListAffliateWidgetProps {}

export const ListAffliateWidget: React.FC<ListAffliateWidgetProps> = () => {
    return (
        <MaxWidthCenterView maxWidth='800px'>
            <FrameTableCom imgTitle={IMAGE_URL.TITLE.TITLE_AFILIATE}>no data</FrameTableCom>
        </MaxWidthCenterView>
    );
};
