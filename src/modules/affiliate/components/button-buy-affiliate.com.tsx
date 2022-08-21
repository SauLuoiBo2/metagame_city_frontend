import React from "react";
import styled from "styled-components";

import { ICONS_URL } from "@/assets/icons";
import { Styles } from "@/theme";

export interface ButtonBuyAffiliateComProps {
    onBuy?: any;
}

const ButtonBuyAffiliateCom: React.FC<ButtonBuyAffiliateComProps> = ({ onBuy }) => {
    return (
        <Style.Wrapper>
            <p className='text_big'>
                1000{" "}
                <span>
                    <img src={ICONS_URL.BUTTON.STAR} style={{ width: "15px" }} />
                </span>
            </p>

            <Style.Button>
                <Styles.Button.Basic onClick={onBuy} style={{ height: "100%", width: "100%" }}>
                    BUY
                </Styles.Button.Basic>
            </Style.Button>
        </Style.Wrapper>
    );
};

export default ButtonBuyAffiliateCom;

const Style = {
    Wrapper: styled.div`
        position: relative;
        padding: 1rem 2rem;
        background: rgba(255, 255, 255, 0.3);
        border: 1px solid #ffffff;
        border-radius: 3rem;
        width: 100%;
        cursor: pointer;

        @media ${(props) => props.theme.breakpoint.md} {
            padding: 0.5rem;
        }
    `,
    Button: styled.div`
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 30%;
    `,
};
