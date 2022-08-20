import { Grid, Stack } from "@mui/material";
import React from "react";

import { ICONS_URL } from "@/assets/icons";
import { IMAGE_URL } from "@/assets/images";
import { FrameTableCom, GridItemHalf, GridItemHalfFull } from "@/components";

import ItemNftValueCom from "../components/item-nft-value.com";

export interface ListMarketWidgetProps {}

export const ListMarketWidget: React.FC<ListMarketWidgetProps> = () => {
    return (
        <>
            <FrameTableCom imgFrame={IMAGE_URL.FRAME.FRAME_NFT}>
                <Grid
                    container
                    columnSpacing={2}
                    rowSpacing={1}
                    mx={"10%"}
                    sx={{ overflowY: "auto", maxHeight: "70%" }}
                >
                    <GridItemHalfFull>
                        <ItemNftValueCom icon={ICONS_URL.BUTTON.DOWNLOAD} />
                    </GridItemHalfFull>
                    <GridItemHalfFull>
                        <ItemNftValueCom icon={ICONS_URL.HEADER.COMUNICATE} />
                    </GridItemHalfFull>
                    <GridItemHalfFull>
                        <ItemNftValueCom icon={ICONS_URL.BUTTON.GIVE} />
                    </GridItemHalfFull>
                    <GridItemHalfFull>
                        <ItemNftValueCom icon={ICONS_URL.HEADER.CUP} />
                    </GridItemHalfFull>

                    <Grid item xs={12}>
                        <Stack sx={{ borderTop: "solid gray 2px" }} mx={"10%"} />
                    </Grid>

                    {/* boottmm */}
                    <GridItemHalfFull>
                        <ItemNftValueCom>
                            <h3>Total : 12000</h3>
                        </ItemNftValueCom>
                    </GridItemHalfFull>
                    <GridItemHalfFull>
                        <ItemNftValueCom>
                            <h3>Total NFT: 12000</h3>
                        </ItemNftValueCom>
                    </GridItemHalfFull>
                </Grid>
            </FrameTableCom>
        </>
    );
};
