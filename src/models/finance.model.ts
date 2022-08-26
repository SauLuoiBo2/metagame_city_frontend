export interface FinanceSendStarDtoProps {
    receiver: string;
    amount: number | string;
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

export interface HistoryMarketProps {
    from: string;
    to: string;
    amount: number;
    type: number; //1=> send,  2=> receive
    status: string;
    time: any;
}
