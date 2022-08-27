import { Stack } from "@mui/material";
import React from "react";

import { ICONS_URL } from "@/assets/icons";
import { IMAGE_URL } from "@/assets/images";
import { CustomInput, FrameTableCom } from "@/components";
import { CustomSelectNftCom } from "@/modules/auth/components/custom-select-nft-com";
import { Styles } from "@/theme";

import ItemNftValueCom from "../components/item-nft-value.com";
export interface BuyStartWidgetProps {}

const styleStack = {
    sx: { overflowY: "auto", maxHeight: "60%", width: "100%" },
    mx: { xs: "10%", md: "20%" },
    pt: "10%",
    alignItems: "center",
    spacing: 2,
};

const options = [
    { id: 1, label: "ETH Mainnet" },
    { id: 2, label: "BNB Mainnet" },
];

export const BuyStartWidget: React.FC<BuyStartWidgetProps> = () => {
    return (
        <FrameTableCom imgFrame={IMAGE_URL.FRAME.FRAME_BUY}>
            <Stack {...styleStack} spacing={1}>
                <ItemNftValueCom>
                    <Styles.Position.Center>
                        <Stack direction={"row"} spacing={1}>
                            <Styles.Text.BodyBig>
                                <span>
                                    <Styles.ImgIcon.Star />{" "}
                                </span>
                                = 0.1 USDT
                            </Styles.Text.BodyBig>
                        </Stack>
                    </Styles.Position.Center>
                </ItemNftValueCom>

                <CustomSelectNftCom options={options} placeholder='chon nen tang' title='BNB Mainet' />
                <CustomSelectNftCom options={options} placeholder='network' title='Netword' />

                <CustomInput placeholder='Receive address' title='Receive address' value={"vi"} disabled />
                <CustomInput placeholder='Star amount' title='Star amount' />

                <div style={{ width: "100%" }}>
                    <Styles.Text.MainText style={{ textAlign: "end" }}>
                        {" "}
                        Min 1000{" "}
                        <span>
                            {" "}
                            <img src={ICONS_URL.BUTTON.STAR} style={{ width: "20px" }} />
                        </span>
                    </Styles.Text.MainText>
                </div>
                <Stack sx={{ borderTop: "gray 2px solid" }} width={"100%"}>
                    <Styles.Button.Basic style={{ marginTop: "2rem" }}>BUY</Styles.Button.Basic>
                </Stack>
            </Stack>
        </FrameTableCom>
    );
};
