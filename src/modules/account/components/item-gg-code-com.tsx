import { Grid } from "@mui/material";
import React from "react";

import { useQueryUser } from "@/api";

export interface ItemGgCodeComProps {}

export const ItemGgCodeCom: React.FC<ItemGgCodeComProps> = () => {
    const { useGetGoogle } = useQueryUser();
    const { data } = useGetGoogle();
    return (
        <Grid xs={12} width='100%'>
            <Grid container width='100%' minWidth={400} rowGap={2} columnSpacing={1}>
                <Grid item xs={3}>
                    <h5>2KA:</h5>
                </Grid>
                <Grid item xs={7}>
                    <StatusGgCode />
                </Grid>
                <Grid item xs={2}>
                    <ButtonGgCode />
                    {/* <p onClick={handleCall}>{call || "change"}</p> */}
                </Grid>
            </Grid>
        </Grid>
    );
};

const StatusGgCode = () => {
    return <div>dsad</div>;
};

const ButtonGgCode = () => {
    return <div>button</div>;
};
