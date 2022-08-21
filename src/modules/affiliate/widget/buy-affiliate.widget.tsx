import { Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useQueryAffiliate } from "@/api";
import { useQueryUser } from "@/api";
import { IMAGE_URL } from "@/assets/images";
import { FrameTableCom } from "@/components";
import MaxWidthCenterView from "@/components/views/position/max-width-center";
import ItemNftValueCom from "@/modules/market/components/item-nft-value.com";
import { PATH } from "@/router/pathname";

import ButtonBuyAffiliateCom from "../components/button-buy-affiliate.com";
import { checkIsAffiliate } from "../function/checkIsAffiliate";

export interface BuyAffiliateWidgetProps {}

const styleStack = {
    sx: { overflowY: "auto", maxHeight: "60%", width: "100%", padding: "0 20%" },
    alignItems: "center",
    spacing: 2,
};

const BuyAffiliateWidget: React.FC<BuyAffiliateWidgetProps> = () => {
    const { useBuyVip } = useQueryAffiliate();
    const { mutate } = useBuyVip();
    function handleBuy() {
        mutate("");
    }

    const { useGetUserReferral } = useQueryUser();
    const navigate = useNavigate();
    const { data } = useGetUserReferral();

    const refferal = data?.data;

    useEffect(() => {
        if (checkIsAffiliate(refferal)) {
            navigate("/" + PATH.MAIN_PATH.AFFILIATE);
        }
    }, []);
    return (
        <MaxWidthCenterView maxWidth='600px'>
            <FrameTableCom imgFrame={IMAGE_URL.FRAME.FRAME_AFFLIATE}>
                <Stack {...styleStack}>
                    <h3 className='text_medium text_align_center'>
                        You need to buy business agency rights with 1000 stars to receive the following benefits
                    </h3>
                    <ItemNftValueCom>
                        <p className='text_medium text_align_center'>
                            You need to buy business agency rights with 1000 stars to receive the following benefits
                        </p>
                    </ItemNftValueCom>
                    <ItemNftValueCom>
                        <p className='text_medium text_align_center'>
                            Get IB income (1-10% of total volume) when you refer customers to play games
                        </p>
                    </ItemNftValueCom>
                    <Stack pt={2} width={"100%"}>
                        <ButtonBuyAffiliateCom onBuy={handleBuy} />
                    </Stack>
                </Stack>
            </FrameTableCom>
        </MaxWidthCenterView>
    );
};

export default BuyAffiliateWidget;
