import styled from "styled-components";

export const stylesButtons = {
    Basic: styled.button`
        width: 100%;
        background-color: #297aff;
        border-radius: 3rem;
        padding: 1.2rem 2.5rem;
        color: white;

        text-align: center;
        font-weight: 600;
        font-size: 1.6rem;

        &&:disabled {
            background-color: gray;
        }

        @media ${(props) => props.theme.breakpoint.md} {
            padding: 0.5rem 1.5rem;
        }
    `,
};
