/* eslint-disable simple-import-sort/imports */
import { Stack } from "@mui/material";
import React, { useEffect } from "react";

import { ICONS_URL } from "@/assets/icons";
import { IMAGE_URL } from "@/assets/images";
import { CustomIconButton } from "@/components";
import { Styles } from "@/theme";

import { LayoutIntroSelectCom } from "../../components/layout-intro-select-com";
import { ethers } from "ethers";
import { useApiWallet } from "@/api/wallet/useApiWallet";
import { useQueryWallet } from "@/api";

export interface ConnectWalletWidgetProps {}

const { METAMASK, WALLET_CONNECT, COINBASE } = ICONS_URL.SOCIAL;

const buttons = [
    {
        name: "METAMASK",
        icon: METAMASK,
        isInstall: false,
    },
    {
        name: "Coinbase Connect",
        icon: COINBASE,
        isInstall: false,
    },
    {
        name: "WalletConnect",
        icon: WALLET_CONNECT,
        isInstall: false,
    },
];
declare global {
    interface Window {
        ethereum: any;
    }
}

export const ConnectWalletWidget: React.FC<ConnectWalletWidgetProps> = () => {
    const ethereum = window.ethereum;
    if (!ethereum) {
        buttons[0].name = "INSTALL METAMASK";
    }

    const apiWallet = useApiWallet();
    const { getSignMessage } = apiWallet;

    const { usePostWalletLogin } = useQueryWallet();
    const { mutate, isSuccess } = usePostWalletLogin();

    useEffect(() => {
        // chạy global toàn app
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts: any) => {
                console.log("account changed", accounts);

                //kiểm tra nếu user.wallet != accounts[0] (account đang active trên metamask ở index 0)
                //thì cho user logout
            });

            window.ethereum.on("chainChanged", (chainId: string) => {
                console.log("account network changed", chainId);
                // Handle the new chain.
                // Correctly handling chain changes can be complicated.
                // We recommend reloading the page unless you have good reason not to.
                window.location.reload();
            });
        }
    }, []);

    const handleConnectWallet = () => {
        console.log("[handleConnectWallet]");
        if (!ethereum) {
            window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn");
            return;
        }

        const chain = window.ethereum.chainId; //lấy chainid - mạng đang hiện hữu
        console.log(chain);

        const newProvider = new ethers.providers.Web3Provider(window.ethereum);
        console.log(newProvider);

        window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((accounts: any) => {
                console.log(accounts);
                //địa chỉ ví đang active
                const address = accounts[0] as string;
                if (address) {
                    const params = { address };
                    getSignMessage(params)
                        .then((res) => {
                            console.log(res);
                            if (res.data) {
                                console.log("goi ham login = wallet");

                                const message = res.data;
                                handleWalletLogin(address, message);
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
                // setConnButtonText("Wallet Connected");
                // setDefaultAccount(result[0]);
            })
            .catch((error: any) => {
                console.log(error);

                // setErrorMessage(error.message);
            });
    };

    const handleWalletLogin = async (address: string, message: string) => {
        try {
            console.log("[handleWalletLogin]", address, message);

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner(address);
            const signMessage = await signer.signMessage(message);
            console.log("sign by metamask", signMessage);
            const data = {
                address,
                message,
                signMessage,
            };
            mutate(data);
        } catch (error) {
            console.log(error);
        }
        //handle

        // gui api /walletLogin voi data phia tren
    };

    useEffect(() => {
        if (isSuccess) {
            handleAddBinanceMainNet();
        }
    }, [isSuccess]);

    const handleAddBinanceMainNet = async () => {
        const data = [
            {
                chainId: "0x38",
                chainName: "Binance Smart Chain (BSC)",
                nativeCurrency: {
                    name: "BNB",
                    symbol: "BNB",
                    decimals: 18,
                },
                rpcUrls: ["https://bsc-dataseed.binance.org/"],
                blockExplorerUrls: ["https://bscscan.com/"],
            },
        ];
        const tx = await window.ethereum.request({ method: "wallet_addEthereumChain", params: data }).catch();
        if (tx) {
            console.log(tx);
        }
    };

    return (
        <LayoutIntroSelectCom title='Choose Wallet'>
            <Stack>
                {buttons.map((item, i) => {
                    return (
                        <CustomIconButton key={i} icon={IMAGE_URL.FRAME.FRAME_BUTTON_LOGIN}>
                            <Stack direction={"row"} spacing={2} alignItems='center' onClick={handleConnectWallet}>
                                <img src={item.icon} style={{ width: "50px" }} />
                                <Styles.Text.BodyBig>{item.name}</Styles.Text.BodyBig>
                            </Stack>
                        </CustomIconButton>
                    );
                })}
            </Stack>
        </LayoutIntroSelectCom>
    );
};
