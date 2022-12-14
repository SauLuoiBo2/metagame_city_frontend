import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as Yup from "yup";

import { useQueryAuth } from "@/api";
import { getLocalStored, setLocalStored, yupChema } from "@/libs";

const { username, password, email, passwordConfirm } = yupChema;

const validationSchema = Yup.object().shape({
    username,
    password,
    email,
    passwordConfirm,
});

export function useFormRegister() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [params, setParams] = useSearchParams();

    const refParams = params.get("ref");

    const navigate = useNavigate();

    const ref = refParams || getLocalStored("ref");

    useEffect(() => {
        if (refParams) {
            setLocalStored("ref", refParams);
        }
    }, [refParams]);

    const initialValues = {
        email: "",
        username: "",
        password: "",
        passwordConfirm: "",
        referral: ref || "",
    };
    const { useMutationRegister } = useQueryAuth();
    const { mutate, isSuccess, data, isLoading } = useMutationRegister();

    useEffect(() => {
        if (isSuccess) {
            if (data.status === "error") {
                return;
            } else {
                navigate("confirm", { state: formik.values.email });
            }
        }
    }, [isSuccess]);
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            mutate(values);
        },
        validateOnChange: false,
    });

    return { formik, useMutationRegister, ref, isLoading };
}
