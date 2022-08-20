import { Grid } from "@mui/material";
import React, { PropsWithChildren } from "react";

import { IMAGE_URL } from "@/assets/images";
import { Styles } from "@/theme";
import { HomeSectionLayout } from "@/widgets";

import LogoRegister from "../components/logo-register";

export interface LogoLayoutAuthWidgetProps extends PropsWithChildren {}

const LogoLayoutAuthWidget: React.FC<LogoLayoutAuthWidgetProps> = ({ children }) => {
    return (
        <HomeSectionLayout bg_url={IMAGE_URL.BG.BG_1}>
            <Grid container>
                <Grid item xs={12} md={6} lg={7}>
                    <Styles.Position.Center>
                        <LogoRegister />
                    </Styles.Position.Center>
                </Grid>

                <Grid item xs={12} md={6} lg={5}>
                    <Styles.Position.Center>{children}</Styles.Position.Center>
                </Grid>
            </Grid>
        </HomeSectionLayout>
    );
};

export default LogoLayoutAuthWidget;
