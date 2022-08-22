import CircularProgress from "@mui/material/CircularProgress";
import React, { PropsWithChildren } from "react";

import { Styles } from "@/theme";

export interface CustomButtonProps extends PropsWithChildren, React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ isLoading, children, ...props }) => {
    return (
        <Styles.Button.Basic disabled={isLoading} style={{ minHeight: "22px", width: "100%" }} {...props}>
            {isLoading ? (
                <Styles.Position.Center>
                    <CircularProgress size={20} />
                </Styles.Position.Center>
            ) : (
                children
            )}
        </Styles.Button.Basic>
    );
};
