import React from "react";
import styled from "styled-components";

export interface CustomSelectNftComProps {}

export const CustomSelectNftCom: React.FC<CustomSelectNftComProps> = () => {
    return (
        <Style.Wrapper>
            <select style={{ display: "none" }} />

            {/* <Style.Select>
                <option value='0'>Select car:</option>
                <option value='1'>Audi</option>
                <option value='2'>BMW</option>
                <option value='3'>Citroen</option>
            </Style.Select> */}
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.div`
        position: relative;
        width: 100%;

        min-height: 40px;

        background: rgba(4, 4, 4, 0.3);
        border-radius: 31.5px;
    `,
};
