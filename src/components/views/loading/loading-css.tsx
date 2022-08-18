import React from "react";
import styled from "styled-components";

import { Styles } from "@/theme";

export interface LoadingCssTypeProps {
    colorLoading?: string;
    loading?: LoadingCssEnum;
}

function getDivElement(number: number) {
    const arr = new Array(number);
    return arr.map((_item, i) => {
        return <div key={i} />;
    });
}

const COLOR_DEFAULT = "#fff";

export enum LoadingCssEnum {
    SPIN_LINE = 0,
    SPIN_DOT = 1,
    SPIN_CIRCLE = 2,
}

// spin line
export const LoadingCssSpinLine: React.FC<LoadingCssTypeProps> = (props) => {
    return (
        <Style.LoadingCssSpinLine {...props}>
            <div className='lds-spinner'>{getDivElement(12)}</div>
        </Style.LoadingCssSpinLine>
    );
};

// spin dot line
export const LoadingCssDotLine: React.FC<LoadingCssTypeProps> = (props) => {
    return (
        <Style.LoadingCssDotLine {...props}>
            <div className='lds-ellipsis'>{getDivElement(4)}</div>
        </Style.LoadingCssDotLine>
    );
};

// spin cirle
export const LoadingCssCircle: React.FC<LoadingCssTypeProps> = (props) => {
    return (
        <Style.LoadingCssCircle {...props}>
            <div className='lds-ellipsis'>{getDivElement(2)}</div>
        </Style.LoadingCssCircle>
    );
};

export function renderLoadingCss(loading: LoadingCssEnum, colorLoading?: string) {
    switch (loading) {
        case LoadingCssEnum.SPIN_LINE:
            return <LoadingCssSpinLine colorLoading={colorLoading} />;
        case LoadingCssEnum.SPIN_DOT:
            return <LoadingCssDotLine colorLoading={colorLoading} />;
        case LoadingCssEnum.SPIN_CIRCLE:
            return <LoadingCssCircle colorLoading={colorLoading} />;
    }
}

export const LoadingCssView: React.FC<LoadingCssTypeProps> = ({ loading, colorLoading }) => {
    return (
        <Styles.Position.Center>
            {renderLoadingCss(loading || LoadingCssEnum.SPIN_LINE, colorLoading)}
        </Styles.Position.Center>
    );
};

const Style = {
    LoadingCssSpinLine: styled.div<LoadingCssTypeProps>`
        lds-spinner {
            display: inline-block;
            position: relative;
            width: 80px;
            height: 80px;
        }
        .lds-spinner div {
            transform-origin: 40px 40px;
            animation: lds-spinner 1.2s linear infinite;
        }
        .lds-spinner div:after {
            content: " ";
            display: block;
            position: absolute;
            top: 3px;
            left: 37px;
            width: 6px;
            height: 18px;
            border-radius: 20%;
            background: ${(p) => p.colorLoading || COLOR_DEFAULT};
        }
        .lds-spinner div:nth-child(1) {
            transform: rotate(0deg);
            animation-delay: -1.1s;
        }
        .lds-spinner div:nth-child(2) {
            transform: rotate(30deg);
            animation-delay: -1s;
        }
        .lds-spinner div:nth-child(3) {
            transform: rotate(60deg);
            animation-delay: -0.9s;
        }
        .lds-spinner div:nth-child(4) {
            transform: rotate(90deg);
            animation-delay: -0.8s;
        }
        .lds-spinner div:nth-child(5) {
            transform: rotate(120deg);
            animation-delay: -0.7s;
        }
        .lds-spinner div:nth-child(6) {
            transform: rotate(150deg);
            animation-delay: -0.6s;
        }
        .lds-spinner div:nth-child(7) {
            transform: rotate(180deg);
            animation-delay: -0.5s;
        }
        .lds-spinner div:nth-child(8) {
            transform: rotate(210deg);
            animation-delay: -0.4s;
        }
        .lds-spinner div:nth-child(9) {
            transform: rotate(240deg);
            animation-delay: -0.3s;
        }
        .lds-spinner div:nth-child(10) {
            transform: rotate(270deg);
            animation-delay: -0.2s;
        }
        .lds-spinner div:nth-child(11) {
            transform: rotate(300deg);
            animation-delay: -0.1s;
        }
        .lds-spinner div:nth-child(12) {
            transform: rotate(330deg);
            animation-delay: 0s;
        }
        @keyframes lds-spinner {
            0% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }
    `,
    LoadingCssDotLine: styled.div<LoadingCssTypeProps>`
        .lds-ellipsis {
            display: inline-block;
            position: relative;
            width: 80px;
            height: 80px;
        }
        .lds-ellipsis div {
            position: absolute;
            top: 33px;
            width: 13px;
            height: 13px;
            border-radius: 50%;
            background: ${(p) => p.colorLoading || COLOR_DEFAULT};
            animation-timing-function: cubic-bezier(0, 1, 1, 0);
        }
        .lds-ellipsis div:nth-child(1) {
            left: 8px;
            animation: lds-ellipsis1 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(2) {
            left: 8px;
            animation: lds-ellipsis2 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(3) {
            left: 32px;
            animation: lds-ellipsis2 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(4) {
            left: 56px;
            animation: lds-ellipsis3 0.6s infinite;
        }
        @keyframes lds-ellipsis1 {
            0% {
                transform: scale(0);
            }
            100% {
                transform: scale(1);
            }
        }
        @keyframes lds-ellipsis3 {
            0% {
                transform: scale(1);
            }
            100% {
                transform: scale(0);
            }
        }
        @keyframes lds-ellipsis2 {
            0% {
                transform: translate(0, 0);
            }
            100% {
                transform: translate(24px, 0);
            }
        }
    `,
    LoadingCssCircle: styled.div<LoadingCssTypeProps>`
        .lds-ripple {
            display: inline-block;
            position: relative;
            width: 80px;
            height: 80px;
        }
        .lds-ripple div {
            position: absolute;
            border-color: ${(p) => p.colorLoading || COLOR_DEFAULT};
            border: 4px solid;
            opacity: 1;
            border-radius: 50%;
            animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
        .lds-ripple div:nth-child(2) {
            animation-delay: -0.5s;
        }
        @keyframes lds-ripple {
            0% {
                top: 36px;
                left: 36px;
                width: 0;
                height: 0;
                opacity: 0;
            }
            4.9% {
                top: 36px;
                left: 36px;
                width: 0;
                height: 0;
                opacity: 0;
            }
            5% {
                top: 36px;
                left: 36px;
                width: 0;
                height: 0;
                opacity: 1;
            }
            100% {
                top: 0px;
                left: 0px;
                width: 72px;
                height: 72px;
                opacity: 0;
            }
        }
    `,
};
