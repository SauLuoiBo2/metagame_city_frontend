import { useFormik } from "formik";
import * as Yup from "yup";

import { useQueryUser } from "@/api";
import { yupChema } from "@/libs";

const { username, email } = yupChema;

const validationSchema = Yup.object().shape({
    username,
});

export function useFormUsername() {
    const { useGetUser, useUpdateUsername } = useQueryUser();

    const updateUsername = useUpdateUsername();
    const { data } = useGetUser();

    const user = data?.data;

    const formik = useFormik({
        initialValues: { username: user?.username || "" },
        validationSchema,
        onSubmit: (values) => {
            updateUsername.mutate(values);
        },
        validateOnChange: false,
    });

    return { formik, user };
}
const validationSchemaEmail = Yup.object().shape({
    email,
});

export function useFormEmail() {
    const { useUpdateEmail } = useQueryUser();

    const updateEmail = useUpdateEmail();

    const formik = useFormik({
        initialValues: { email: "" },
        validationSchema: validationSchemaEmail,
        onSubmit: (values) => {
            updateEmail.mutate(values);
        },
        validateOnChange: false,
    });

    return { formik };
}
