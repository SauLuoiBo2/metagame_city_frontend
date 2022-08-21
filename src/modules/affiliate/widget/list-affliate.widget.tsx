import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useQueryUser } from "@/api";
import { IMAGE_URL } from "@/assets/images";
import { FrameTableCom } from "@/components";
import MaxWidthCenterView from "@/components/views/position/max-width-center";
import { PATH } from "@/router/pathname";

import { checkIsAffiliate } from "../function/checkIsAffiliate";

export interface ListAffliateWidgetProps {}

export const ListAffliateWidget: React.FC<ListAffliateWidgetProps> = () => {
    const { useGetUserReferral } = useQueryUser();
    const navigate = useNavigate();
    const { data } = useGetUserReferral();

    const refferal = data?.data;

    useEffect(() => {
        if (!checkIsAffiliate(refferal)) {
            navigate("/" + PATH.MAIN_PATH.AFFILIATE_BUY);
        }
    }, [refferal]);

    return (
        <MaxWidthCenterView maxWidth='800px'>
            <FrameTableCom imgTitle={IMAGE_URL.TITLE.TITLE_AFILIATE}>no data</FrameTableCom>
        </MaxWidthCenterView>
    );
};
