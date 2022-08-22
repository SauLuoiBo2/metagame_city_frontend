import * as setting_gear from "../json/102496-settings-gear.json";
import * as error_doodle from "../json/102573-s2s-error-page.json";
import * as loading_hearth from "../json/108591-heart-loading.json";
import * as loading_rocket from "../json/111529-rocket.json";

const options = {
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};
const settingGear = {
    animationData: setting_gear.default,
    ...options,
};

const errorDoodle = {
    animationData: error_doodle.default,
    ...options,
};

const loadingRocket = {
    animationData: loading_rocket.default,
    ...options,
};

const loadingHearth = {
    animationData: loading_hearth.default,
    ...options,
};
export const optionsLottie = {
    settingGear,
    errorDoodle,
    loadingRocket,
    loadingHearth,
};
