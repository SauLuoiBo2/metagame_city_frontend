import { Grid, Stack } from "@mui/material";
import React, { useState } from "react";

import { ICONS_URL } from "@/assets/icons";
import { IMAGE_URL } from "@/assets/images";
import { CustomInput, FrameTableCom } from "@/components";
// import { IAssetDetail } from "@/models/asset.model";
import { CustomSelectNftCom } from "@/modules/auth/components/custom-select-nft-com";
import { Styles } from "@/theme";

import ItemNftValueCom from "../components/item-nft-value.com";
import { useAssetBuy } from "../hook";
export interface BuyStartWidgetProps {}

const styleStack = {
    sx: { overflowY: "auto", maxHeight: "60%", width: "100%" },
    mx: { xs: "10%", md: "20%" },
    pt: "10%",
    alignItems: "center",
    spacing: 2,
};

export const BuyStartWidget: React.FC<BuyStartWidgetProps> = () => {
    const { listTokenOptions, listDetailTokenOptions, setQuery, handleSelectToken, addressId, token, handleBuyStar } =
        useAssetBuy();
    const [amount, setAmount] = useState(1000);

    function handleSetAmount(e: React.ChangeEvent<HTMLInputElement>) {
        const value = Number(e.target.value);
        if (value < 1000) {
            setAmount(1000);
        } else {
            setAmount(value);
        }
    }

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

                <CustomSelectNftCom
                    handleChange={(name: any, id: any) => setQuery(id)}
                    options={listTokenOptions}
                    placeholder='Select Coin'
                    title='Select coin'
                />
                <CustomSelectNftCom
                    value={addressId || undefined}
                    handleChange={handleSelectToken}
                    options={listDetailTokenOptions}
                    placeholder='Select Network'
                    title='Network'
                />

                <CustomInput placeholder='Receive address' title='Receive address' value={addressId || ""} disabled />
                <CustomInput
                    placeholder='Star amount'
                    title='Star amount'
                    type={"number"}
                    value={amount}
                    min={1000}
                    onChange={handleSetAmount}
                />

                <div style={{ width: "100%" }}>
                    <Grid container>
                        <Grid item xs={12} md={8}>
                            {token && (
                                <Styles.Text.MainText style={{ textAlign: "start" }}>
                                    You need {token?.price * 0.1 * amount} {token?.name}
                                </Styles.Text.MainText>
                            )}
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Styles.Text.MainText style={{ textAlign: "end" }}>
                                {" "}
                                Min 1000{" "}
                                <span>
                                    {" "}
                                    <img src={ICONS_URL.BUTTON.STAR} style={{ width: "20px" }} />
                                </span>
                            </Styles.Text.MainText>
                        </Grid>
                    </Grid>
                </div>
                <Stack sx={{ borderTop: "gray 2px solid" }} width={"100%"}>
                    <Styles.Button.Basic
                        disabled={amount < 1000}
                        onClick={() => handleBuyStar(amount)}
                        style={{ marginTop: "2rem" }}
                    >
                        BUY
                    </Styles.Button.Basic>
                </Stack>
            </Stack>
        </FrameTableCom>
    );
};
