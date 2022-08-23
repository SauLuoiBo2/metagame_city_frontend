export interface WalletLoginDto {
    address: string;
    message: string;
    signMessage: string;
}

export interface WalletLoginProps {
    signMessage: string;
}
