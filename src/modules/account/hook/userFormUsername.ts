import { useFormik } from "formik";
import * as Yup from "yup";

import { useQueryUser } from "@/api";
import { yupChema } from "@/libs";

const { username } = yupChema;

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
        validationSchema: validationSchema,
        onSubmit: (values) => {
            updateUsername.mutate(values);
        },
        validateOnChange: false,
    });

    // const formikPassword = useFormik({
    //     initialValues: initialValuesPassword,
    //     validationSchema: validationSchemaPassword,
    //     onSubmit: (values) => {
    //         // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //         const { passwordConfirm, ...dataSent } = values;
    //         mutationUserUpdate.mutate(dataSent);
    //     },
    //     validateOnChange: false,
    // });

    return { formik, user };
}
