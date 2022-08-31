import { useEffect } from "react";
import { useBoolean } from "usehooks-ts";

export const useUploadAvatar = (imageUrl: any, handle?: any) => {
    const open = useBoolean();

    function handleOpen() {
        if (imageUrl) {
            open.setTrue();
        } else {
            if (handle) {
                handle();
            }
        }
    }

    useEffect(() => {
        if (imageUrl) {
            open.setFalse();
        }
    }, [imageUrl]);

    return { open, handleOpen };
};
