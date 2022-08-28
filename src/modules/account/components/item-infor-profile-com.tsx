import { Grid } from "@mui/material";
import React from "react";
import { useBoolean } from "usehooks-ts";

import { CustomButton, CustomInput, CustomInputProps } from "@/components";

export interface ItemInforProfileComProps extends CustomInputProps {
    titleDisplay?: string;
    call?: string;
    onSave?: any;
    isLoading?: boolean;
}

export const ItemInforProfileCom: React.FC<ItemInforProfileComProps> = ({
    title,
    call,
    onSave,
    isLoading,
    ...props
}) => {
    const open = useBoolean();
    return (
        <Grid xs={12} width='100%'>
            <Grid container width='100%' minWidth={400} rowGap={2} columnSpacing={1}>
                <Grid item xs={3}>
                    <p>{title}:</p>
                </Grid>
                <Grid item xs={7}>
                    <p>{props.defaultValue}</p>
                </Grid>
                <Grid item xs={2}>
                    <p onClick={open.toggle}>{call || "change"}</p>
                </Grid>
                {open.value && !call && (
                    <>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={7}>
                            <CustomInput {...props} />
                        </Grid>
                        <Grid item xs={2}>
                            <CustomButton
                                type='button'
                                isLoading={isLoading}
                                style={{ width: "100%", padding: "0.5rem 0" }}
                                onClick={onSave}
                            >
                                SAVE
                            </CustomButton>
                        </Grid>
                    </>
                )}
            </Grid>
        </Grid>
    );
};
