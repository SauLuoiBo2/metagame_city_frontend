import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useBoolean, useOnClickOutside } from "usehooks-ts";

import { Styles } from "@/theme";

export interface OptionProps {
    id: number | string;
    label: string;
}
export interface CustomSelectNftComProps {
    name?: string;
    handleChange?: any;
    options?: OptionProps[];
    value?: number | string;
    defaultValue?: number | string;
    placeholder?: string;
}

export const CustomSelectNftCom: React.FC<CustomSelectNftComProps> = ({
    defaultValue,
    name,
    handleChange,
    options,
    placeholder,
}) => {
    const [id, setId] = useState(defaultValue);
    const [label, setLabel] = useState<string | null>(null);
    const open = useBoolean();
    const ref: React.RefObject<HTMLDivElement> = useRef(null);

    useOnClickOutside(ref, open.setFalse);

    function onChange(i: number | string) {
        setId(i);
        if (handleChange) {
            handleChange(name, i);
        }
        open.setFalse();
    }

    useEffect(() => {
        const result = options?.find((word) => word.id === id);
        setLabel(result?.label ?? "");
    }, [id]);

    return (
        <Style.Total ref={ref}>
            <Style.Wrapper onClick={open.toggle}>
                <Styles.Text.MainText style={{ opacity: label ? null : "0.5" }}>
                    {label || placeholder}
                </Styles.Text.MainText>
            </Style.Wrapper>

            <Style.Option isOpen={open.value}>
                {options?.map((item, i) => {
                    return (
                        <Style.OptionItem key={i} onClick={() => onChange(item.id)}>
                            {item.label}
                        </Style.OptionItem>
                    );
                })}
            </Style.Option>
        </Style.Total>
    );
};

interface StyleProps {
    isOpen: boolean;
}

const Style = {
    Total: styled.div`
        position: relative;
        width: 100%;
        height: fit-content;
    `,
    Wrapper: styled.div`
        position: relative;
        width: 100%;
        min-height: 4rem;
        background: rgba(4, 4, 4, 0.3);
        border-radius: 3rem;
        cursor: pointer;
        border-color: white;
        border: 1px solid;
        display: flex;
        align-items: center;
        padding: 1rem;
    `,
    Option: styled.div<StyleProps>`
        padding: ${({ isOpen }) => (isOpen ? "1rem" : 0)};
        border-radius: 1rem;
        position: absolute;
        width: 100%;
        top: 5rem;
        height: ${({ isOpen }) => (isOpen ? null : 0)};
        max-height: 20rem;
        background: #080712;
        overflow: auto;
        z-index: 200;
    `,

    OptionItem: styled.div`
        width: 100%;
        height: 3rem;
        padding: 0.5rem;
        margin-bottom: 1rem;
        cursor: pointer;
        :hover {
            background: rgba(173, 227, 192, 0.28);
        }
    `,
};
