import React from "react";
import Lottie, { EventListener } from "react-lottie";

import { optionsLottie } from "./config";

export interface CustomLottieProps {
    eventListeners?: ReadonlyArray<EventListener>;
}

export const SplashLottieSettingGear: React.FC<CustomLottieProps> = ({ eventListeners }) => {
    return (
        <>
            <Lottie options={optionsLottie.settingGear} isClickToPauseDisabled eventListeners={eventListeners} />
        </>
    );
};

export const SplashLottieErrorDoodle: React.FC<CustomLottieProps> = ({ eventListeners }) => {
    return (
        <>
            <Lottie options={optionsLottie.errorDoodle} isClickToPauseDisabled eventListeners={eventListeners} />
        </>
    );
};

export const SplashLottieLoading: React.FC<CustomLottieProps> = ({ eventListeners }) => {
    return (
        <div style={{ maxWidth: "90rem" }}>
            <Lottie options={optionsLottie.loadingRocket} isClickToPauseDisabled eventListeners={eventListeners} />
        </div>
    );
};

export const ButtonLottieLoading: React.FC<CustomLottieProps> = ({ eventListeners }) => {
    return (
        <div style={{ maxWidth: "10rem" }}>
            <Lottie options={optionsLottie.loadingHearth} isClickToPauseDisabled eventListeners={eventListeners} />
        </div>
    );
};

export * from "./config";
