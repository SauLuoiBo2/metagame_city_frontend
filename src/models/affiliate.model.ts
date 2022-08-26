export interface ReferralDtoProps {
    uid: string;
    refCode: string;
    parentId: string;
    parents: any[];
    members: number;
    vipMembers: number;
    f1Members: number;
    vipF1s: number;
    level: number;
    isBuy: boolean;
    sales: number;
    created: Date;
    updated: Date;
}

export interface ReferralCommission {
    from: string; //username, email
    amount: number;
    type: number;
    time: number; //timestamp
}
