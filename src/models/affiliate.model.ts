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

export interface PayAffiliateDto {
    id: string;
    from: string; //user name
    amount: number;
    type: number; //1 - commission affiliate, 2 - Game commissions
    note: string; //Caro game, Bilard Game..... Affiliate
    status: "Success" | "Cancel" | "Pending";
    created: Date;
    updated: Date;
}

export interface MemberDto {
    email: string;
    username: string;
    refCode: string;
    parentId: string;
    members: number;
    vipMembers: number;
    f1Members: number;
    vipF1s: number;
    level: number; // ib level
    isBuy: boolean; //user mua agency or set by admin
    sales: number; //doanh so toan he thong
    created: Date;
    updated: Date;
}
