import { Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";

export interface MaxWidthCenterViewProps extends PropsWithChildren {
    maxWidth?: string;
}

const MaxWidthCenterView: React.FC<MaxWidthCenterViewProps> = ({ maxWidth, children }) => {
    return (
        <Stack alignItems='center' justifyContent={"center"} width='100%'>
            <div style={{ maxWidth, width: "100%" }}>{children} </div>
        </Stack>
    );
};

export default MaxWidthCenterView;
