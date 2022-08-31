import { useRef, useState } from "react";

import { checkTypeImage, MAX_SIZE_IMAGE } from "@/libs/file";

export const useInputUpload = (handle?: any) => {
    const [imgUrl, setImgUrl] = useState<any>(null);
    const hiddenFileInput: any = useRef(null);
    const handleClick = () => {
        hiddenFileInput.current.click();
    };

    const handleChange2 = (event: any) => {
        const fileUploaded = event.target.files[0];
        if (handle) {
            handle(fileUploaded);
        }
        setImgUrl(fileUploaded);
    };
    const handleChange = (event: any) => {
        const size = event.target.files[0].size;
        const type = event.target.files[0].type;

        const isJpgOrPng = checkTypeImage(type);

        if (!isJpgOrPng) {
            return alert("dsadads");
        }

        if (MAX_SIZE_IMAGE < size) {
            return alert("dsadads");
        } else {
            // formik.setFieldValue(event.target.name, event.target.files[0]);
            handleChange2(event);
            return;
        }
    };

    const handleReset = () => {
        setImgUrl(null);
    };

    return {
        imgUrl,
        handleClick,
        hiddenFileInput,
        handleChange,
        setImgUrl,
        handleReset,
    };
};
