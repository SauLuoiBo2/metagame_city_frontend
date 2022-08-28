export enum RoleUserEnum {
    ADMIN = "ADMIN",
    USER = "USER",
    NON = "",
}

// login
export interface LoginProps {
    username: string;
    password: string;
    code?: string;
}

// register
export interface RegisterProps extends LoginProps {
    email: string;
    referral?: string;
}

// activation

export interface ActivationAccountProps {
    // email: string;
    code: string;
}

// forgot

export enum TypeResendEmailEnum {
    FORGOT_PASSWORD = 1,
    RESEND_EMAIL = 2,
}
export interface ResendEmailProps {
    email: string;
    type: TypeResendEmailEnum;
}

export interface ResetPasswordProps {
    code: string;
    password: string;
    confrimPassword: string;
}

// user

export interface UserDtoProps {
    token: string;
    user: UserProps;
}

export interface UserProps {
    uid?: string;
    username?: string;
    email?: string;
    wallet?: string;
    avatar?: string;
    profile?: any;
    refCode?: string;
    parentId?: string;
    tfa?: string;
    tfaImg?: string;
    status?: string;
    signMessage?: string;
    created?: Date;
    updated?: Date;
}

export interface UserUpdateProps extends UserProps {
    confirmPassword?: string;
}
