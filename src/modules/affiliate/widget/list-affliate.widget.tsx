import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, Stack } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

import { useQueryAffiliate, useQueryUser } from "@/api";
import { IMAGE_URL } from "@/assets/images";
// import { FrameTableCom } from "@/components";
import MaxWidthCenterView from "@/components/views/position/max-width-center";
import { ENV } from "@/config";
import { PATH } from "@/router/pathname";
import { Styles } from "@/theme";
import { CustomColumnTableProps, CustomTable } from "@/widgets/table/custom-table";

export interface ListAffliateWidgetProps {}

const columns: CustomColumnTableProps[] = [
    { id: "no", label: "", width: "10%" },

    {
        id: "from",
        label: "Name",
        width: "25%",
        align: "left",
    },
    {
        id: "time",
        label: "Age",
        width: "25%",
        align: "left",
    },
    {
        id: "amount",
        label: "Quantity",
        width: "20%",
        align: "left",
        format: (value: number) => (
            <Stack direction={"row"} alignItems='center' spacing={1}>
                <h3>{value}</h3>
                <span>
                    <Styles.ImgIcon.Star />
                </span>
            </Stack>
        ),
    },
    {
        id: "type",
        label: "Stype",
        width: "20%",
        align: "left",
    },
];

export const ListAffliateWidget: React.FC<ListAffliateWidgetProps> = () => {
    const { useGetListCommission } = useQueryAffiliate();
    const { data: list } = useGetListCommission();
    const { referral } = useQueryUser();

    const url = ENV.API.BASE_URL + "/" + PATH.AUTH_PATH.REGISTER + "?ref=" + referral?.data?.refCode;

    function handleCoppy() {
        navigator.clipboard.writeText(url);
        toast.info("Copied link affiliate");
    }
    return (
        <MaxWidthCenterView maxWidth='800px'>
            <Style.Title>
                <img src={IMAGE_URL.TITLE.TITLE_AFILIATE} />
                <Style.InnerTitle>
                    <div className='inner'>
                        <Stack direction={"row"} justifyContent='center' width='100%'>
                            <p className='ellipsis'>{url}</p>
                            <ContentCopyIcon sx={{ cursor: "pointer" }} onClick={handleCoppy} />
                        </Stack>
                    </div>
                </Style.InnerTitle>
            </Style.Title>
            <Style.Wrapper>
                {/* content */}
                <Style.Inner className='hidden_scroll'>
                    <Stack width='100%' height={"100%"} alignItems='center' justifyContent={"flex-start"}>
                        {" "}
                        <Box width={"80%"}>
                            <CustomTable columns={columns} rows={list?.data || []} minWidth={400} />
                        </Box>
                    </Stack>
                </Style.Inner>
                {/* title */}
            </Style.Wrapper>
            {/* <FrameTableCom imgTitle={IMAGE_URL.TITLE.TITLE_AFILIATE}>
            </FrameTableCom> */}
        </MaxWidthCenterView>
    );
};

interface StyleProps {
    isImgTitle?: boolean;
    imgBg?: any;
    maxWidth?: string;
}

const Style = {
    Wrapper: styled.div<StyleProps>`
        position: relative;
        background-image: ${({ imgBg }) => `url(${imgBg || IMAGE_URL.FRAME.FRAME_VICTORY})`};
        background-repeat: no-repeat;
        background-size: 100% 100%, cover;
        background-position: center;
        padding: 10rem 0;
        margin-top: ${({ isImgTitle }) => (isImgTitle ? "10%" : null)};
        display: flex;
        align-items: center;
        min-height: 40rem;
        width: 100%;
        max-width: ${({ maxWidth }) => maxWidth || null};

        @media ${(props) => props.theme.breakpoint.md} {
            padding: 5rem 0;
            min-height: 30rem;
        }

        img {
            width: 100%;
        }
    `,

    Inner: styled.div`
        /* position: absolute;
        top: 0; */
        width: 100%;
        height: 100%;
        min-height: 25rem;
    `,
    Title: styled.div`
        position: relative;

        display: flex;
        justify-content: center;
        width: 100%;
        transform: translateY(2rem);

        img {
            max-width: 30%;

            @media ${(props) => props.theme.breakpoint.md} {
                max-width: 50%;
            }
        }
    `,
    InnerTitle: styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .inner {
            max-width: 20rem;
            width: 40%;
        }
    `,
};
