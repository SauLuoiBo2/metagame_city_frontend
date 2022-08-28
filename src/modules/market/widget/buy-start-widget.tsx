import { Stack } from "@mui/material";
import { ethers } from "ethers";
import React, { useState } from "react";

import { useQueryUser } from "@/api";
import { ICONS_URL } from "@/assets/icons";
import { IMAGE_URL } from "@/assets/images";
import { CustomInput, FrameTableCom } from "@/components";
import { IAssetDetail } from "@/models/asset.model";
import { CustomSelectNftCom } from "@/modules/auth/components/custom-select-nft-com";
import { Styles } from "@/theme";

import ItemNftValueCom from "../components/item-nft-value.com";
export interface BuyStartWidgetProps {}

const styleStack = {
    sx: { overflowY: "auto", maxHeight: "60%", width: "100%" },
    mx: { xs: "10%", md: "20%" },
    pt: "10%",
    alignItems: "center",
    spacing: 2,
};

const options = [
    { id: 1, label: "ETH Mainnet" },
    { id: 2, label: "BNB Mainnet" },
];

export const BuyStartWidget: React.FC<BuyStartWidgetProps> = () => {
    // B.1 => get list asset (coin) tu serve
    // => hien thi len cho user chon
    const [assets, setAssets] = useState([]);
    const [assetDetails, setAssetDetails] = useState([]);
    const [assetSelected, setAssetSelected] = useState<IAssetDetail | null>(null);
    const [amount, setAmount] = useState<number>(0);
    const { useGetUser } = useQueryUser();
    const { data } = useGetUser();
    const user = data?.data;

    const handleBuyStar = async () => {
        if (!window.ethereum || !user?.wallet || !assetSelected) {
            return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const chainId = window.ethereum.chainId;

        if (chainId !== assetSelected.chainId) {
            //lam thao tac chuyen mang
            try {
                await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: assetSelected.chainId }],
                });
            } catch (error) {
                console.log(error);
                return;
            }
        }

        const payAmount = ethers.utils.parseEther(amount.toString());
        let transactionData: any = {
            from: user.wallet,
            to: assetSelected.address,
            value: payAmount, // neu la token base cua mang thi thay data = value: payAmount
        };

        if (!assetSelected.isBase) {
            const contract = new ethers.Contract(assetSelected.contract, assetSelected.contractAbi, signer);
            // goi ham tao ra giao dich (transaction) - transfer(dia chi vi nhan, so tien)
            const transfer = await contract.approve(assetSelected.address, payAmount);
            const data = transfer.encodeABI();
            transactionData = {
                from: user.wallet,
                to: assetSelected.contract,
                data, // neu la token base cua mang thi thay data = value: payAmount
            };
        }
        //#region chi danh cho gui token khac coin nền tảng BNB - ETH ()
        //create contract info

        //#endregion

        // thuc hien tao transaction

        try {
            const hash = await window.ethereum.request({
                method: "eth_sendTransaction",
                params: [transactionData],
            });
            if (hash) {
                //gán link
                const link = assetSelected.txUrl + hash;
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <FrameTableCom imgFrame={IMAGE_URL.FRAME.FRAME_BUY}>
            <Stack {...styleStack} spacing={1}>
                <ItemNftValueCom>
                    <Styles.Position.Center>
                        <Stack direction={"row"} spacing={1}>
                            <Styles.Text.BodyBig>
                                <span>
                                    <Styles.ImgIcon.Star />{" "}
                                </span>
                                = 0.1 USDT
                            </Styles.Text.BodyBig>
                        </Stack>
                    </Styles.Position.Center>
                </ItemNftValueCom>

                <CustomSelectNftCom options={assets} placeholder='Select Coin' title='BNB Mainet' />
                <CustomSelectNftCom options={options} placeholder='network' title='Netword' />

                <CustomInput placeholder='Receive address' title='Receive address' value={"vi"} disabled />
                <CustomInput placeholder='Star amount' title='Star amount' />

                <div style={{ width: "100%" }}>
                    <Styles.Text.MainText style={{ textAlign: "end" }}>
                        {" "}
                        Min 1000{" "}
                        <span>
                            {" "}
                            <img src={ICONS_URL.BUTTON.STAR} style={{ width: "20px" }} />
                        </span>
                    </Styles.Text.MainText>
                </div>
                <Stack sx={{ borderTop: "gray 2px solid" }} width={"100%"}>
                    <Styles.Button.Basic style={{ marginTop: "2rem" }}>BUY</Styles.Button.Basic>
                </Stack>
            </Stack>
        </FrameTableCom>
    );
};
