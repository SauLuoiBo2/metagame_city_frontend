import { Grid } from "@mui/material";
import React, { PropsWithChildren } from "react";

import { Styles } from "@/theme";

import LogoRegister from "../components/logo-register";

export interface LogoLayoutAuthWidgetProps extends PropsWithChildren {}

const LogoLayoutAuthWidget: React.FC<LogoLayoutAuthWidgetProps> = ({ children }) => {
    return (
        <>
            <Grid container rowSpacing={4}>
                <Grid item xs={12} md={6} lg={7}>
                    <Styles.Position.Center>
                        <LogoRegister />
                    </Styles.Position.Center>
                </Grid>

                <Grid item xs={12} md={6} lg={5}>
                    <Styles.Position.Center>{children}</Styles.Position.Center>
                </Grid>
            </Grid>
        </>
    );
};

export default LogoLayoutAuthWidget;
