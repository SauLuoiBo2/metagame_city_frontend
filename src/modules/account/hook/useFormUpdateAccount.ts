import { useFormik } from "formik";
import * as Yup from "yup";

import { useQueryUser } from "@/api";
import { yupChema } from "@/libs";
import { formatDifferenceBetweenTwoObj } from "@/utils";

const { username, password, passwordConfirm, passwordCurrent } = yupChema;

const validationSchemaUsername = Yup.object().shape({
    username,
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
    const { useGetUser, useMutationUserUpdate, useGetUserBalance } = useQueryUser();
    const { data } = useGetUser();

    const { data: balanceData } = useGetUserBalance();

    const user = data?.data;
    const balance = balanceData?.data;

    const mutationUserUpdate = useMutationUserUpdate();

    const initialValues = {
        ...user,
    };
    const formik = useFormik({
        initialValues,
        validationSchema: validationSchemaUsername,
        onSubmit: (values) => {
            const dataPost = formatDifferenceBetweenTwoObj(values, initialValues);
            mutationUserUpdate.mutate(dataPost);
        },
        validateOnChange: false,
    });

    const formikPassword = useFormik({
        initialValues: initialValuesPassword,
        validationSchema: validationSchemaPassword,
        onSubmit: (values) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { passwordConfirm, ...dataSent } = values;
            mutationUserUpdate.mutate(dataSent);
        },
        validateOnChange: false,
    });

    return { formik, formikPassword, mutationUserUpdate, user, balance };
}
