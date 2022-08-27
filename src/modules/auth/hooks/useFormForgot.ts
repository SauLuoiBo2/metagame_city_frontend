import { useFormik } from "formik";
import * as Yup from "yup";

import { useQueryAuth } from "@/api";
import { yupChema } from "@/libs";
import { TypeResendEmailEnum } from "@/models";

const initialValues = {
    email: "",
    type: TypeResendEmailEnum.FORGOT_PASSWORD,
};

const { email } = yupChema;

const validationSchema = Yup.object().shape({
    email,
});

export function useFormForgot() {
    const { sendForgotPassword } = useQueryAuth();
    const mutationForgot = sendForgotPassword();

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            mutationForgot.mutate(values);
        },
        validateOnChange: false,
    });

    return { formik, mutationForgot };
}
