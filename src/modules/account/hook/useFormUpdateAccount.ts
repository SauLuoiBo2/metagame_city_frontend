import { useFormik } from "formik";
import * as Yup from "yup";

import { useQueryUser } from "@/api";
import { yupChema } from "@/libs";

const { password, username, passwordConfirm } = yupChema;

const validationSchema = Yup.object().shape({
    username,
    password,
    passwordConfirm,
});

export function useFormUpdateAccount() {
    const { useGetUser, useMutationUserUpdate } = useQueryUser();
    const { data } = useGetUser();

    const user = data?.data;

    const { mutate } = useMutationUserUpdate();

    const initialValues = {
        username: user?.username,
        password: "",
        passwordConfirm: "",
    };
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            mutate(values);
        },
        validateOnChange: false,
    });

    return { formik, useMutationUserUpdate, user };
}
