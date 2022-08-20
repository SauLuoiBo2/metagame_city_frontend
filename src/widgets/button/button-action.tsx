import React from "react";
import styled from "styled-components";

import { IMAGE_URL } from "@/assets/images";
import { CustomIconButton, CustomIconButtonProps } from "@/components";

export const ButtonAction: React.FC<CustomIconButtonProps> = (props) => {
    return <Button icon={IMAGE_URL.FRAME.FRAME_BUTTON} {...props} />;
};

const Button = styled(CustomIconButton)`
    img {
        @media ${(props) => props.theme.breakpoint.md} {
            max-width: 20rem;
        }
    }
    /* img {
        @media ${({ theme }) => theme.breakpoint.xl} {
            width: 20rem;
        }

        @media ${(props) => props.theme.breakpoint.lg} {
            width: 17rem;
        }
        @media ${(props) => props.theme.breakpoint.md} {
            width: 15rem;
        }
        @media ${(props) => props.theme.breakpoint.sm} {
            width: 13rem;
        }
    } */
`;
