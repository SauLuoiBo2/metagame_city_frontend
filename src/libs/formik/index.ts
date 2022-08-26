import * as Yup from "yup";

export function supportErrorFormik(formik: any, name: any): string | undefined {
    const text = formik.errors?.[name] && formik.touched?.[name] ? formik.errors?.[name] : "";
    return text;
}

export const yupChema = {
    username: Yup.string().required("username is required").max(100, "username is max 100 word").nullable(),
    email: Yup.string()
        .email("email must match type email")
        .required("email is required")
        .max(100, "emaill is max 100 word")
        .nullable(),
    password: Yup.string().required("password is required").max(32, "password is max 32 word").nullable(),
    passwordConfirm: Yup.string()
        .required("password confirm is required")
        .oneOf([Yup.ref("password"), null], "password confirm not match password"),
};
