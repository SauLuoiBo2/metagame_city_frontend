import * as Yup from "yup";

export function supportErrorFormik(formik: any, name: any): string | undefined {
    const text = formik.errors?.[name] && formik.touched?.[name] ? formik.errors?.[name] : "";
    return text;
}

export const yupChema = {
    username: Yup.string().required("loi username").max(100, "loi username").nullable(),
    email: Yup.string().email("loi email").required("loi email").max(100, "loi email").nullable(),
    password: Yup.string().required("loi password").max(32, "loi password").nullable(),
    passwordConfirm: Yup.string()
        .required("loi password")
        .oneOf([Yup.ref("password"), null], "loi password"),
};
