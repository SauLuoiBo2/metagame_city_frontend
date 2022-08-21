import { useFormik } from "formik";
import * as Yup from "yup";

import { useQueryAuth } from "@/api";
import { yupChema } from "@/libs";

const initialValues = {
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
    referral: "",
};

const { username, password, email, passwordConfirm } = yupChema;

const validationSchema = Yup.object().shape({
    username,
    password,
    email,
    passwordConfirm,
});

export function useFormRegister() {
    const { useMutationRegister } = useQueryAuth();
    const { mutate } = useMutationRegister();
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            mutate(values);
        },
        validateOnChange: false,
    });

    return { formik, useMutationRegister };
}
