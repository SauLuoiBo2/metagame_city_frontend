import { Grid } from "@mui/material";
import React, { PropsWithChildren } from "react";

import { Styles } from "@/theme";

export interface GridItemHalfProps extends PropsWithChildren {}

export const GridItemHalf: React.FC<GridItemHalfProps> = ({ children }) => {
    return (
        <Grid item xs={6}>
            <Styles.Position.Center>{children}</Styles.Position.Center>
        </Grid>
    );
};

export const GridItemHalfFull: React.FC<GridItemHalfProps> = ({ children }) => {
    return (
        <Grid item xs={12} md={6}>
            <Styles.Position.Center>{children}</Styles.Position.Center>
        </Grid>
    );
};
