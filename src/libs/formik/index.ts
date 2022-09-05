import * as Yup from "yup";

export function supportErrorFormik(formik: any, name: any): string | undefined {
    const text = formik.errors?.[name] && formik.touched?.[name] ? formik.errors?.[name] : "";
    return text;
}

const regCode = /[0-9]{6}$/;

export const yupChema = {
    username: Yup.string().required("Username is required").max(50, "Username is max 100 word").nullable(),
    email: Yup.string()
        .email("Email must match type email")
        .required("Email is required")
        .max(100, "Email is max 100 word")
        .nullable(),
    passwordCurrent: Yup.string()
        .required("Current password is required")
        .max(32, " Current password is max 32 word")
        .nullable(),
    password: Yup.string().required("Password is required").max(32, "Password is max 32 word").nullable(),

    newPassword: Yup.string().required("Password is required").max(32, "Password is max 32 word").nullable(),
    passwordConfirmNew: Yup.string()
        .required("Confirm password is required")
        .oneOf([Yup.ref("passwordNew"), null], "Confirm password not match new password"),
    confirmPassword: Yup.string()
        .required("Confirm password is required")
        .oneOf([Yup.ref("newPassword"), null], "Confirm password not match password"),
    passwordConfirm: Yup.string()
        .required("Confirm password is required")
        .oneOf([Yup.ref("password"), null], "Confirm password not match password"),
    codeVerifyGoogle: Yup.string()
        .required("Code is required")
        .matches(regCode, "A verify google code is only number character anh exactly 6 character"),
};
