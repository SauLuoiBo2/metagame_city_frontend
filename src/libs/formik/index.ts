import * as Yup from "yup";

export function supportErrorFormik(formik: any, name: any): string | undefined {
    const text = formik.errors?.[name] && formik.touched?.[name] ? formik.errors?.[name] : "";
    return text;
}

const regCode = /[0-9]{6}$/;

export const yupChema = {
    username: Yup.string().required("username is required").max(50, "username is max 100 word").nullable(),
    email: Yup.string()
        .email("email must match type email")
        .required("email is required")
        .max(100, "emaill is max 100 word")
        .nullable(),
    passwordCurrent: Yup.string()
        .required("current password is required")
        .max(32, " current password is max 32 word")
        .nullable(),
    password: Yup.string().required("password is required").max(32, "password is max 32 word").nullable(),

    newPassword: Yup.string().required("password is required").max(32, "password is max 32 word").nullable(),
    passwordConfirmNew: Yup.string()
        .required("confirm password is required")
        .oneOf([Yup.ref("passwordNew"), null], "confirm password not match new password"),
    confirmPassword: Yup.string()
        .required("confirm password is required")
        .oneOf([Yup.ref("newPassword"), null], "confirm password not match password"),
    codeVerifyGoogle: Yup.string()
        .required("code is required")
        .matches(regCode, "a verify google code is only number character anh exactly 6 character"),
};
