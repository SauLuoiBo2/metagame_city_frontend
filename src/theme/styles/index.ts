import { stylesButtons } from "./button";
import { stylesContainer } from "./container";
import { stylesImgIcon } from "./img-icon";
import { stylesPositions } from "./positions";
import { stylesText } from "./text";

export const Styles = {
    Position: { ...stylesPositions },
    Button: { ...stylesButtons },
    Text: { ...stylesText },
    Container: { ...stylesContainer },
    ImgIcon: { ...stylesImgIcon },
};
