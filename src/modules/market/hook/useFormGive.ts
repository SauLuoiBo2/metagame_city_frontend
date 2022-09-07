import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";

import { useQueryUser } from "@/api";
import { useQueryFinance } from "@/api/finance/useQueryFinance";
import { yupChema } from "@/libs";

const initialValues = {
    receiver: "",
    amount: "",
    password: "",
    code: "",
};

const { username, password, codeVerifyGoogle } = yupChema;

const validationSchema = Yup.object().shape({
    receiver: username,
    amount: username,
    password,
    code: codeVerifyGoogle,
});

export function useFormGive() {
    const { useSendStar } = useQueryFinance();
    const sendStar = useSendStar();

    const { useGetUser } = useQueryUser();

    const { data: user } = useGetUser();
    const isInstalled = user?.data?.tfa === "" ? true : false;
    const isOnTfa = user?.data?.tfa === "ON" ? true : false;

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            sendStar.mutate(values);
        },
        validateOnChange: false,
    });

    useEffect(() => {
        formik.setValues(initialValues);
    }, [sendStar.isLoading]);

    return { formik, sendStar, isInstalled, isOnTfa };
}
