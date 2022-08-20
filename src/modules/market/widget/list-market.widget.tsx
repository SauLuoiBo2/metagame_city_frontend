import { Grid, Stack } from "@mui/material";
import React from "react";

import { ICONS_URL } from "@/assets/icons";
import { IMAGE_URL } from "@/assets/images";
import { FrameTableCom, GridItemHalf } from "@/components";

import ItemNftValueCom from "../components/item-nft-value.com";

export interface ListMarketWidgetProps {}

export const ListMarketWidget: React.FC<ListMarketWidgetProps> = () => {
    return (
        <>
            <FrameTableCom imgFrame={IMAGE_URL.FRAME.FRAME_NFT}>
                <Grid
                    className='hidden_scroll'
                    container
                    columnSpacing={2}
                    rowSpacing={1}
                    mx={"10%"}
                    sx={{ overflowY: "auto", maxHeight: "70%" }}
                >
                    <GridItemHalf>
                        <ItemNftValueCom icon={ICONS_URL.BUTTON.DOWNLOAD} />
                    </GridItemHalf>
                    <GridItemHalf>
                        <ItemNftValueCom icon={ICONS_URL.HEADER.COMUNICATE} />
                    </GridItemHalf>
                    <GridItemHalf>
                        <ItemNftValueCom icon={ICONS_URL.BUTTON.GIVE} />
                    </GridItemHalf>
                    <GridItemHalf>
                        <ItemNftValueCom icon={ICONS_URL.HEADER.CUP} />
                    </GridItemHalf>

                    <Grid item xs={12}>
                        <Stack sx={{ borderTop: "solid gray 2px" }} mx={"10%"} />
                    </Grid>
                    {/* boottmm */}
                    <GridItemHalf>
                        <ItemNftValueCom>
                            <h3 className='text_big'>Total : 12000</h3>
                        </ItemNftValueCom>
                    </GridItemHalf>
                    <GridItemHalf>
                        <ItemNftValueCom>
                            <h3 className='text_big'>Total NFT: 12000</h3>
                        </ItemNftValueCom>
                    </GridItemHalf>
                </Grid>
            </FrameTableCom>
        </>
    );
};
