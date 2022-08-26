/* eslint-disable react/no-unescaped-entities */
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import { useQueryAuth } from "@/api";

import ViewAuthCom from "../components/view-auth.com";

export interface ActivationPageProps {}

export const ActivationPage: React.FC<ActivationPageProps> = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [params, setParams] = useSearchParams();
    const { sendActivation } = useQueryAuth();
    const { mutate } = sendActivation();
    const refParams = params.get("code");
    const url = window.location.href;
    function handleCoppy() {
        navigator.clipboard.writeText(url);
        toast.info("Copied link activation");
    }

    useEffect(() => {
        if (refParams) {
            const data = {
                code: refParams,
            };
            mutate(data);
        }
    }, [refParams]);
    return (
        <ViewAuthCom title={"ACTIVATION"}>
            <Box width='100%'>
                <Stack width='100%' spacing={1}>
                    <p>Thank you for your registration!</p>
                    <p>Please confirm your email by click on the button below!</p>

                    <p>If that doesn't work, copy and paste the following link in your browser:</p>
                    <Stack direction={"row"} alignItems='center' py={2}>
                        <p className='ellipsis' style={{ color: "orange" }}>
                            {url}
                        </p>
                        <ContentCopyIcon sx={{ cursor: "pointer" }} onClick={handleCoppy} />
                    </Stack>

                    <p>Thank and best regards,</p>
                    <h3>Metagame City</h3>
                </Stack>
            </Box>
        </ViewAuthCom>
    );
};
