import { useFormik } from "formik";
import * as Yup from "yup";

import { useQueryAuth } from "@/api";
import { yupChema } from "@/libs";

const initialValues = {
    username: "",
    password: "",
};

const initialCode = {
    code: "",
};

const { username, password, codeVerifyGoogle } = yupChema;

const validationSchema = Yup.object().shape({
    username,
    password,
});

const validationSchemaGoogle = Yup.object().shape({
    code: codeVerifyGoogle,
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

    const formikGoogle = useFormik({
        initialValues: initialCode,
        validationSchema: validationSchemaGoogle,
        onSubmit: (values) => {
            const data = { ...formik.values, code: values.code };
            mutationLogin.mutate(data);
        },
        validateOnChange: false,
    });

    return { formik, mutationLogin, formikGoogle };
}
