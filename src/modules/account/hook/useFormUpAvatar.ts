import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

import { useQueryUser } from "@/api";

// import { convertBase64ToBlob } from "@/libs";
import { useInputUpload } from "./useInputUpload";

export function convertBase64ToBlob(imageData: any, formikSet?: any, name?: string, setState?: any) {
    const url = imageData;
    fetch(url)
        .then((res) => res.blob())
        .then((blob) => {
            const file = new File([blob], "image.png", { type: "image/png" });
            formikSet(name, file);
        });

    setState(imageData);
}

export const useFormUpAvatar = () => {
    // const query = queryProfile.querySignUpMore();
    const { useUpPhotoUser } = useQueryUser();
    const upPhotoUser = useUpPhotoUser();
    const upload = useInputUpload();

    const [image, setImage] = useState<any>(null);

    const validationSchema = Yup.object().shape({
        avatar: Yup.mixed().required("avatar is required"),
    });

    const formik = useFormik({
        initialValues: {
            avatar: undefined,
        },
        validationSchema,
        onSubmit: (values) => {
            upPhotoUser.mutate(values);
        },
    });

    const formikChangeImage = (imageData: any) => {
        convertBase64ToBlob(imageData, formik.setFieldValue, "avatar", setImage);
    };

    return { formik, upPhotoUser, upload, formikChangeImage, image };
};
