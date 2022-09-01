export const ApiUrl = {
    auth: {
        login_url: "auth/login",
        register_url: "auth/register",
        activation_url: "auth/activation",
        resend_email_url: "auth/resendEmail",
        forgot_password_url: "auth/forgotPassword",
        reset_password_url: "auth/resetPassword",
    },

    auth_wallet: {
        sign_message: "auth/signMessage",
        wallet_login: "auth/walletLogin",
    },

    chain: {
        asset: "asset",
    },
    user: {
        user_url: "user",
        user_update_photo_url: "user/avatar",
        user_balance_url: "user/balance",
        user_update_url: "user/profile",
        user_referral_url: "user/referral",
        gg_setup: "user/gg-setup",
    },
    game: {
        games_url: "games",
        games_victory_url: "games/victory",
    },
    finance: {
        star_url: "finance/star",
        send_star_url: "finance/sendStar",
    },
    affiliate: {
        affiliate_commission_url: "affiliate/commission",
        affiliate_members_url: "affiliate/members",
        affiliate_buyVip_url: "affiliate/buyVip",
    },
    assets: {
        assets_list_url: "asset",
    },
};
