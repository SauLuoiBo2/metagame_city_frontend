import CheckIcon from "@mui/icons-material/Check";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, Stack } from "@mui/material";
import moment from "moment";
import React from "react";
import { toast } from "react-toastify";

import { useQueryAffiliate, useQueryUser } from "@/api";
import { ENV, QUERY_KEY } from "@/config";
import { useQueryInvalidate } from "@/hooks/query";
import { PATH } from "@/router/pathname";
import { CustomColumnTableProps, CustomTable } from "@/widgets/table/custom-table";

import { ViewFrameList } from "../view/view-frame-list";

export interface ListAffliateWidgetProps {}

const columns: CustomColumnTableProps[] = [
    { id: "no", label: "", width: "10%" },

    {
        id: "email",
        label: "Email",
        width: "25%",
        align: "left",
    },
    {
        id: "username",
        label: "Username",
        width: "25%",
        align: "center",
    },
    {
        id: "level",
        label: "Vip",
        width: "20%",
        align: "left",
        format: (value: number) => (
            <Stack direction={"row"} alignItems='center' justifyContent={"center"} spacing={1}>
                {value > 0 ? <CheckIcon sx={{ color: "white", fontSize: "30px" }} /> : null}
            </Stack>
        ),
    },
    {
        id: "created",
        label: "Time",
        width: "20%",
        align: "left",
        format: (value: any) => <>{moment(value).format("YYYY-MM-DD HH:mm:ss")}</>,
    },
];

export const ListAffliateWidget: React.FC<ListAffliateWidgetProps> = () => {
    const { useGetListMember } = useQueryAffiliate();

    const { data: list, isLoading } = useGetListMember();
    const { useGetUserReferral } = useQueryUser();
    const { data: referral } = useGetUserReferral();

    const url = ENV.API.BASE_URL + "/" + PATH.AUTH_PATH.REGISTER + "?ref=" + referral?.data?.refCode;

    function handleCoppy() {
        navigator.clipboard.writeText(url);
        toast.info("Copied link affiliate");
    }
    useQueryInvalidate(QUERY_KEY.USER.PROFILE_REFERRAL_KEY);
    useQueryInvalidate(QUERY_KEY.AFFILIATE.LIST_MEMBERS);

    return (
        <ViewFrameList title='List members'>
            <Box width={"100%"}>
                <CustomTable columns={columns} rows={list?.data || []} minWidth={600} isLoading={isLoading} />
            </Box>
            <Stack width={"100%"} direction='row' alignItems={"center"} spacing={2} pt={5}>
                <p className='ellipsis'>
                    Share: <span style={{ opacity: 0.8 }}>{url}</span>{" "}
                </p>
                <ContentCopyIcon sx={{ cursor: "pointer" }} onClick={handleCoppy} />
            </Stack>
        </ViewFrameList>
    );
};
