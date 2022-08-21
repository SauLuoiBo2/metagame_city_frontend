import { ReferralDtoProps } from "@/models";

export function checkIsAffiliate(referral: ReferralDtoProps | undefined) {
    if (referral === undefined) {
        return false;
    }
    if (referral.level > 1 || referral.isBuy) {
        return true;
    } else {
        return false;
    }
}
