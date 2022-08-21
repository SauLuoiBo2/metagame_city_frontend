import React from "react";

import { useQueryUser } from "@/api";
import { IMAGE_URL } from "@/assets/images";
import { FrameTableCom } from "@/components";
import MaxWidthCenterView from "@/components/views/position/max-width-center";

export interface ListAffliateWidgetProps {}

export const ListAffliateWidget: React.FC<ListAffliateWidgetProps> = () => {
    const { useGetUserReferral } = useQueryUser();

    const { data } = useGetUserReferral();
    return (
        <MaxWidthCenterView maxWidth='800px'>
            <FrameTableCom imgTitle={IMAGE_URL.TITLE.TITLE_AFILIATE}>dsadas</FrameTableCom>
        </MaxWidthCenterView>
    );
};
