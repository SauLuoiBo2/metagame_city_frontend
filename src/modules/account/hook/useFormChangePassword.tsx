import { useFormik } from "formik";
import * as Yup from "yup";

import { useQueryAuth } from "@/api";
import { yupChema } from "@/libs";

const { password, confirmPassword, newPassword } = yupChema;

const validationSchema = Yup.object().shape({
    password,
    newPassword: newPassword,
    confirmPassword: confirmPassword,
});

const initialValues = {
    password: "",
    newPassword: "",
    confirmPassword: "",
};

export function useFormChangePassword() {
    const { useChangePassword } = useQueryAuth();

    const changePassword = useChangePassword();

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            changePassword.mutate(values);
        },
        validateOnChange: false,
    });

    return { formik, changePassword };
}
