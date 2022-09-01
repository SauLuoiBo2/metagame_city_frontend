export interface UsernameProps {
    username: string;
}

export interface EmailProps {
    email: string;
}

export interface ProfileProps {
    firstName?: string;
    lastName?: string;
    phone?: string;
    address?: string;
    city?: string;
    zipCode?: string;
    country?: string;
    username?: string;
    email?: string;
}

export interface GoogleGetProps {
    otpUrl: string;
    tfaImg: string;
    tfaSecret: string;
}

export interface GoogleVerifyProps {
    otpUrl: string;
    code: string;
    tfaSecret: string;
}
