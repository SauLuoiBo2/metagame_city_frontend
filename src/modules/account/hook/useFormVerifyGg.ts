import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";

import { useQueryUser } from "@/api";
import { yupChema } from "@/libs";

import { GoogleVerifyProps } from "./../../../models/user-model";

const { codeVerifyGoogle } = yupChema;

const validationSchema = Yup.object().shape({
    code: codeVerifyGoogle,
});

export function useFormVerifyGoogle() {
    const { useGetGoogle, useSendVerifyGoogle } = useQueryUser();
    const { data } = useGetGoogle();
    const sendVerifyGoogle = useSendVerifyGoogle();

    const gg = data?.data;

    useEffect(() => {
        formik.setValues({ otpUrl: gg?.otpUrl || "", tfaSecret: gg?.tfaSecret || "", code: "" });
    }, [gg]);

    const formik = useFormik<GoogleVerifyProps>({
        initialValues: { otpUrl: gg?.otpUrl || "", tfaSecret: gg?.tfaSecret || "", code: "" },
        validationSchema,
        onSubmit: (values) => {
            sendVerifyGoogle.mutate(values);
        },
        validateOnChange: false,
    });

    return { formik, sendVerifyGoogle };
}
