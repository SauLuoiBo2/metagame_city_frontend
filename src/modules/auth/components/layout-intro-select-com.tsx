import { Stack } from "@mui/material";
import React, { PropsWithChildren } from "react";

import { Styles } from "@/theme";

export interface LayoutIntroSelectComProps extends PropsWithChildren {
    title?: string;
}

export const LayoutIntroSelectCom: React.FC<LayoutIntroSelectComProps> = ({ title, children }) => {
    return (
        <Stack alignItems={"flex-start"} spacing={2}>
            <Styles.Text.CapText>{title}</Styles.Text.CapText>
            <Stack width='100%'>{children}</Stack>
        </Stack>
    );
};
