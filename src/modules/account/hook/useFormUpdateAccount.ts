import { useFormik } from "formik";
import * as Yup from "yup";

import { useQueryUser } from "@/api";
import { yupChema } from "@/libs";
import { formatDifferenceBetweenTwoObj } from "@/utils";

const { username } = yupChema;

const validationSchemaUsername = Yup.object().shape({
    username,
});

export function useFormUpdateAccount() {
    const { useGetUser, useMutationUserUpdate, useGetUserBalance } = useQueryUser();
    const { data } = useGetUser();

    const { data: balanceData } = useGetUserBalance();

    const user = data?.data;
    const balance = balanceData?.data;

    const { mutate } = useMutationUserUpdate();

    const initialValues = {
        ...user,
    };
    const formik = useFormik({
        initialValues,
        validationSchema: validationSchemaUsername,
        onSubmit: (values) => {
            const dataPost = formatDifferenceBetweenTwoObj(values, initialValues);
            mutate(dataPost);
        },
        validateOnChange: false,
    });

    return { formik, useMutationUserUpdate, user, balance };
}
