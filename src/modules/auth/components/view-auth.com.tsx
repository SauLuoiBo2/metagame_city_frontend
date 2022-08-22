import { Box, Grid, Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

import { ICONS_URL } from "@/assets/icons";
import { CustomIconButton, FrameTableCom } from "@/components";
import { Styles } from "@/theme";

export interface ViewAuthComProps extends PropsWithChildren {
    title?: string;
}

const ViewAuthCom: React.FC<ViewAuthComProps> = ({ children, title }) => {
    const navigate = useNavigate();
    return (
        <Box width='100%'>
            <FrameTableCom>
                <Stack pt={2} px={{ lg: 10, md: 8, xs: 5 }} spacing={3} width={"100%"} alignItems={"center"}>
                    {/* title */}
                    <Grid container>
                        <Grid item xs={2}>
                            <CustomIconButton icon={ICONS_URL.BUTTON.BACK_AUTH} onClick={() => navigate("/")} />
                        </Grid>
                        <Grid item xs={8}>
                            <Styles.Position.Center>
                                <h3 className='body_big'>{title}</h3>
                            </Styles.Position.Center>
                        </Grid>
                    </Grid>
                    {/* input    */}

                    {children}
                </Stack>
            </FrameTableCom>
        </Box>
    );
};

export default ViewAuthCom;
