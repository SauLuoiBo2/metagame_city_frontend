import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useQueryUser } from "@/api";
import { useQueryChain } from "@/api/chain/useQueryChain";
import { logger } from "@/libs";
import { AssetDetailProps } from "@/models/asset.model";
import { OptionProps } from "@/modules/auth/components/custom-select-nft-com";

function changeListTokenToOptions(listToken?: any, id?: any, label?: any) {
    const options: OptionProps[] = [];
    if (listToken) {
        listToken.forEach((item: any) => {
            const ha = {
                id: item[id],
                label: item[label],
            };
            options.push(ha);
        });
    }
    return options.concat();
}

export function useAssetBuy() {
    const { useGetUser } = useQueryUser();
    const { data: us } = useGetUser();
    const user = us?.data;
    const { useGetListChain, useGetDetailChain } = useQueryChain();
    const { data } = useGetListChain();
    const listToken = data?.data;
    const { setQuery, getQueryDetail, query } = useGetDetailChain();

    const [addressId, setAddressId] = useState<number | null>(null);

    const [token, setToken] = useState<AssetDetailProps | null>();

    const handleSelectToken = useCallback(
        (name: any, id: any) => {
            console.log(id, listDetailToken);

            setAddressId(id);
            const ha = listDetailToken?.find((item) => item.address === id);
            console.log(ha);

            setToken(ha);
        },
        [addressId]
    );

    useEffect(() => {
        setAddressId(null);
        setToken(null);
    }, [query]);

    const { data: dataTwo } = getQueryDetail;
    const listDetailToken = dataTwo?.data;

    const listTokenOptions = changeListTokenToOptions(listToken, "token", "name");
    const listDetailTokenOptions = changeListTokenToOptions(listDetailToken, "address", "networkName");

    const handleBuyStar = async (amount: number) => {
        if (!window.ethereum || !user?.wallet || !addressId) {
            return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const chainId = window.ethereum.chainId;
        console.log("chain ID: " + chainId);

        if (chainId !== token?.chainId) {
            //lam thao tac chuyen mang
            try {
                await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: token?.chainId }],
                });
            } catch (error) {
                logger.error("err", error);
                return;
            }
        }

        const payAmount = ethers.utils.parseEther(amount.toString());
        let transactionData: any = {
            from: user.wallet,
            to: token?.address,
            value: payAmount, // neu la token base cua mang thi thay data = value: payAmount
        };
        console.log(token);

        if (token) {
            if (!token?.isBase) {
                const contract = new ethers.Contract(token?.contract || "", token?.contractAbi, signer);
                // goi ham tao ra giao dich (transaction) - transfer(dia chi vi nhan, so tien)
                const transfer = await contract.approve(token.address, payAmount);
                const data = transfer.encodeABI();
                transactionData = {
                    from: user.wallet,
                    to: token.contract,
                    data, // neu la token base cua mang thi thay data = value: payAmount
                };
            }
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
                const link = token?.txUrl + hash;
                toast.success(link);
            }
        } catch (error) {
            logger.error("err", error);
        }
    };

    return { listTokenOptions, listDetailTokenOptions, setQuery, handleSelectToken, addressId, token, handleBuyStar };
}
