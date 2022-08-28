import { ethers } from "ethers";
import { useEffect } from "react";

import { useQueryWallet } from "@/api";
import { useQueryUser } from "@/api";
import { useApiWallet } from "@/api/wallet/useApiWallet";
import { logger } from "@/libs";

import { useLogout } from "../auth";

const dataBinanceMainNet = [
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

const linkInstallMetamask = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn";

// hoook
export const useWallet = () => {
    const ethereum = window.ethereum;
    const { onLogout } = useLogout();
    const { user: data } = useQueryUser();
    const user = data?.data;

    const apiWallet = useApiWallet();
    const { getSignMessage } = apiWallet;

    // login
    const { usePostWalletLogin } = useQueryWallet();
    const { mutate } = usePostWalletLogin();

    const isEthereum = !ethereum;

    // onApp
    function useWalletOnApp() {
        useEffect(() => {
            // chạy global toàn app
            if (window.ethereum) {
                window.ethereum.on("accountsChanged", (accounts: any) => {
                    logger.info("account changed", accounts);
                    const wallet = user?.wallet;
                    if (wallet !== accounts[0]) {
                        onLogout();
                    }
                    //kiểm tra nếu user.wallet != accounts[0] (account đang active trên metamask ở index 0)
                    //thì cho user logout
                });
            }
        }, []);
    }

    // login by wallet
    const handleWalletLogin = async (address: string, message: string) => {
        try {
            logger.info("[handleWalletLogin]", address, message);

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner(address);
            const signMessage = await signer.signMessage(message);
            logger.info("sign by metamask", signMessage);

            const data = {
                address,
                message,
                signMessage,
            };
            mutate(data);
        } catch (error) {
            logger.error("error", error);
        }
        //handle

        // gui api /walletLogin voi data phia tren
    };

    const handleConnectWallet = () => {
        logger.info("handleConnectWallet", "handleConnectWallet");

        if (isEthereum) {
            window.open(linkInstallMetamask);
            return;
        }

        const chain = window.ethereum.chainId; //lấy chainid - mạng đang hiện hữu
        logger.info("chain", chain);

        const newProvider = new ethers.providers.Web3Provider(window.ethereum);
        logger.info("newProvider", newProvider);

        window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((accounts: any) => {
                logger.info("accounts", accounts);

                //địa chỉ ví đang active
                const address = accounts[0] as string;
                logger.info("wallet address", address);
                if (address) {
                    const params = { address };
                    getSignMessage(params)
                        .then((res) => {
                            logger.debug("query sign message", res);

                            if (res.data) {
                                logger.debug("login by wallet", res.data);
                                const message = res.data;
                                handleWalletLogin(address, message);
                            }
                        })
                        .catch((err) => {
                            logger.error("err", err);
                        });
                }
                // setConnButtonText("Wallet Connected");
                // setDefaultAccount(result[0]);
            })
            .catch((error: any) => {
                logger.error("err", error);

                // setErrorMessage(error.message);
            });
    };

    return { useWalletOnApp, handleWalletLogin, isEthereum, handleConnectWallet };
};

export async function handleAddBinanceMainNet() {
    const ethereum = window.ethereum;
    logger.info("window.ethereum", ethereum);

    const tx = await ethereum.request({ method: "wallet_addEthereumChain", params: dataBinanceMainNet }).catch();
    if (tx) {
        logger.info("window.ethereum", tx);
    }
}
