export interface IAsset {
    token: string;
    name: string;
    image: string;
    decimal: number;
    status: boolean;
    contract: string;
    contractAbi: string;
    network: string; //bsc, eth...
    created: Date;
    updated: Date;
}

export interface IChain {
    chain: string; //btc, bep20, erc20
    chainId: string; //chain id
    alias: string; //BTC, ETH, BSC, TRX
    name: string; //Binance smart chain, Tron Network,
    image: string;
    txUrl: string;
    blockUrl: string;
    addressUrl: string;
    addressRegex: string;
    created: Date;
    updated: Date;
}

export interface IAssetDetail {
    address: string;
    addressUrl: string; // "https://bscscan.com/address/"; ==> link check dia chi vi
    blockUrl: string; //"https://bscscan.com/block/"; ==> link check block
    contract: string; // "0x55d398326f99059ff775485246999027b3197955";
    contractAbi: string; //"";
    decimal: number; // 18;
    id: number; //2;
    chainId: string;
    image: string; //"usdt.png";
    name: string; //"Tether USDT";
    network: string; //"BSC";
    networkImage: string; //"bnb.png";
    networkName: string; //"BNB Smart chain (BEP20)";
    status: boolean; // true;
    token: string; //"usdt";
    txUrl: string; // "https://bscscan.com/tx/"; => link check giao dich - transaction
    isBase: boolean;
}
