import { useFormik } from "formik";
import * as Yup from "yup";

import { useQueryAuth } from "@/api";
import { yupChema } from "@/libs";

const initialValues = {
    username: "",
    password: "",
};

const { email, password } = yupChema;

const validationSchema = Yup.object().shape({
    username: email,
    password,
});

export function useFormLogin() {
    const { useMutationLogin } = useQueryAuth();
    const { mutate } = useMutationLogin();
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            mutate(values);
        },
        validateOnChange: false,
    });

    return { formik, useMutationLogin };
}
