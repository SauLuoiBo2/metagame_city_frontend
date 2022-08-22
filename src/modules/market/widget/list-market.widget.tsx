import { Grid, Stack } from "@mui/material";
import React from "react";

import { useQueryUser } from "@/api";
import { ICONS_URL } from "@/assets/icons";
import { IMAGE_URL } from "@/assets/images";
import { FrameTableCom, GridItemHalf } from "@/components";

import ItemNftValueCom from "../components/item-nft-value.com";

export interface ListMarketWidgetProps {}

export const ListMarketWidget: React.FC<ListMarketWidgetProps> = () => {
    const { useGetUserBalance } = useQueryUser();
    const { data } = useGetUserBalance();

    const banance = data?.data;

    return (
        <>
            <FrameTableCom imgFrame={IMAGE_URL.FRAME.FRAME_NFT} maxWidth={"80rem"}>
                <Grid
                    className='hidden_scroll'
                    container
                    columnSpacing={2}
                    rowSpacing={1}
                    mx={"10%"}
                    sx={{ overflowY: "auto", maxHeight: "70%" }}
                >
                    <GridItemHalf>
                        <ItemNftValueCom icon={ICONS_URL.BUTTON.DOWNLOAD} value={banance?.deposit} />
                    </GridItemHalf>
                    {/* deposit */}
                    <GridItemHalf>
                        <ItemNftValueCom icon={ICONS_URL.HEADER.COMUNICATE} value={banance?.affiliate} />
                    </GridItemHalf>
                    {/* affiliate */}
                    <GridItemHalf>
                        <ItemNftValueCom icon={ICONS_URL.BUTTON.GIVE} value={banance?.gift} />
                    </GridItemHalf>
                    {/* gift */}
                    <GridItemHalf>
                        <ItemNftValueCom icon={ICONS_URL.HEADER.CUP} value={banance?.bonus} />
                    </GridItemHalf>
                    {/* bonus */}

                    <Grid item xs={12}>
                        <Stack sx={{ borderTop: "solid gray 2px" }} mx={"10%"} />
                    </Grid>
                    {/* boottmm */}
                    <GridItemHalf>
                        <ItemNftValueCom>
                            <h3 className='text_big'>
                                Total{" "}
                                <span>
                                    <img src={ICONS_URL.BUTTON.STAR} style={{ width: "15px" }} />
                                </span>{" "}
                                : {banance?.balance}
                            </h3>
                        </ItemNftValueCom>
                        {/* balance */}
                    </GridItemHalf>
                    <GridItemHalf>
                        <ItemNftValueCom>
                            <h3 className='text_big'>Total NFT: 0</h3>
                        </ItemNftValueCom>
                    </GridItemHalf>
                </Grid>
            </FrameTableCom>
        </>
    );
};
