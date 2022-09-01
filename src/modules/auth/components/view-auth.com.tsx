import { Box, Grid, Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";

import { ICONS_URL } from "@/assets/icons";
import { IMAGE_URL } from "@/assets/images";
import { CustomIconButton, FrameTableCom } from "@/components";
import { PATH } from "@/router/pathname";
import { Styles } from "@/theme";

export interface ViewAuthComProps extends PropsWithChildren {
    title?: string;
}

const ViewAuthCom: React.FC<ViewAuthComProps> = ({ children, title }) => {
    const navigate = useNavigate();
    return (
        <Box width='100%' sx={{ maxWidth: 420 }}>
            <FrameTableCom isAuth imgFrame={IMAGE_URL.FRAME.FRAME_USER}>
                <Stack px={{ lg: 10, md: 8, xs: 8 }} spacing={3} width={"100%"} alignItems={"center"}>
                    {/* title */}
                    <Grid container>
                        <Grid item xs={2}>
                            <CustomIconButton
                                icon={ICONS_URL.BUTTON.BACK_AUTH}
                                onClick={() => navigate("/" + PATH.AUTH_PATH.INTRO)}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <Styles.Position.Center>
                                <Styles.Text.CapText style={{ textAlign: "center" }}>{title}</Styles.Text.CapText>
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
