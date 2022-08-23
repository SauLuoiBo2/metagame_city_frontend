import { Stack } from "@mui/material";
import React from "react";

import { useQueryUser } from "@/api";
import { ICONS_URL } from "@/assets/icons";
import { IMAGE_URL } from "@/assets/images";
import { CustomIconButton } from "@/components";
import { FrameBg } from "@/components/frame/frame-bg";
import { Styles } from "@/theme";

import { useLogout } from "../hook/useLogout";

export interface ModalAccountProps {}

export const ModalAccount: React.FC<ModalAccountProps> = () => {
    const { useGetUser } = useQueryUser();
    const { data } = useGetUser();
    const { onLogout } = useLogout();

    return (
        <FrameBg imgFrame={IMAGE_URL.FRAME.FRAME_GIVE}>
            <Stack>
                <Styles.Text.MainText className='text_align_center'>{data?.data?.username}</Styles.Text.MainText>
                <Styles.Text.MainText className='text_align_center'>{data?.data?.email}</Styles.Text.MainText>
                <Stack alignItems={"flex-end"} mt={6}>
                    {" "}
                    <CustomIconButton icon={ICONS_URL.BUTTON.EXIT} onClick={onLogout} />
                </Stack>
            </Stack>
        </FrameBg>
    );
};
