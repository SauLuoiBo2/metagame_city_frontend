import { useFormik } from "formik";
import * as Yup from "yup";

import { useQueryAuth } from "@/api";
import { yupChema } from "@/libs";

const initialValues = {
    username: "",
    password: "",
};

const { username, password } = yupChema;

const validationSchema = Yup.object().shape({
    username,
    password,
});

export function useFormLogin() {
    const { useMutationLogin } = useQueryAuth();
    const mutationLogin = useMutationLogin();

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            mutationLogin.mutate(values);
        },
        validateOnChange: false,
    });

    return { formik, mutationLogin };
}
