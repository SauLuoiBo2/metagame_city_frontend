import { useFormik } from "formik";
import * as Yup from "yup";

import { useQueryFinance } from "@/api/finance/useQueryFinance";
import { yupChema } from "@/libs";

const initialValues = {
    receiver: "",
    amount: "",
    password: "",
};

const { username, password } = yupChema;

const validationSchema = Yup.object().shape({
    receiver: username,
    amount: username,
    password,
});

export function useFormGive() {
    const { useSendStar } = useQueryFinance();
    const sendStar = useSendStar();

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            sendStar.mutate(values);
        },
        validateOnChange: false,
    });

    return { formik, sendStar };
}
