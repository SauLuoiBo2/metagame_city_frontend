import { useFormik } from "formik";
import * as Yup from "yup";

import { useQueryUser } from "@/api";
import { yupChema } from "@/libs";
import { formatDifferenceBetweenTwoObj } from "@/utils";

const { username, password, passwordConfirm, passwordCurrent, email } = yupChema;

const validationSchemaUsername = Yup.object().shape({
    username,
});

const validationSchemaEmail = Yup.object().shape({
    email,
});

const validationSchemaPassword = Yup.object().shape({
    passwordCurrent,
    password,
    passwordConfirm,
});

const initialValuesPassword = {
    passwordCurrent: "",
    password: "",
    passwordConfirm: "",
};

export function useFormUpdateAccount() {
    const { useGetUser, useMutationUserUpdate, useGetUserBalance, useUpdateEmail, useUpdateUsername } = useQueryUser();
    const { data } = useGetUser();

    const { data: balanceData } = useGetUserBalance();

    const user = data?.data;
    const balance = balanceData?.data;

    const mutationUserUpdate = useMutationUserUpdate();

    const formikUsername = useFormik({
        initialValues: { username: "" },
        validationSchema: validationSchemaUsername,
        onSubmit: (values) => {
            useUpdateUsername().mutate(values);
        },
        validateOnChange: false,
    });

    const formikEmail = useFormik({
        initialValues: { email: "" },
        validationSchema: validationSchemaEmail,
        onSubmit: (values) => {
            useUpdateEmail().mutate(values);
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

    return { formikUsername, formikEmail, mutationUserUpdate, user, balance };
}
