export interface FinanceSendStarDtoProps {
    receiver: string;
    amount: number;
    password: string;
}

export interface BalanceDtoProps {
    uid: string;
    balance: number;
    deposit: number;
    gift: number;
    affiliate: number;
    bonus: number;
    freeze: number;
    totalDeposit: number;
    totalWithdraw: number;
    totalReceive: number;
    totalSend: number;
    gameRound: number;
    gameWin: number;
    gameLose: number;
    gameRaw: number;
    earned: number;
    totalBonus: number;
    totalAgency: number;
    created: Date;
    updated: Date;
}
