import { Stack } from "@mui/material";
import React from "react";

import { IMAGE_URL } from "@/assets/images";
import { FrameTableCom } from "@/components";
import MaxWidthCenterView from "@/components/views/position/max-width-center";
import ItemNftValueCom from "@/modules/market/components/item-nft-value.com";

import ButtonBuyAffiliateCom from "../components/button-buy-affiliate.com";

export interface BuyAffiliateWidgetProps {}

const styleStack = {
    sx: { overflowY: "auto", maxHeight: "60%", width: "100%", padding: "0 20%" },
    alignItems: "center",
    spacing: 2,
};

const BuyAffiliateWidget: React.FC<BuyAffiliateWidgetProps> = () => {
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
                        <ButtonBuyAffiliateCom onBuy={{}} />
                    </Stack>
                </Stack>
            </FrameTableCom>
        </MaxWidthCenterView>
    );
};

export default BuyAffiliateWidget;
