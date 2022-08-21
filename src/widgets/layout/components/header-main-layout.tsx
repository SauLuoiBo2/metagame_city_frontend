import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useQueryUser } from "@/api";
import { ASSETS } from "@/assets";
import { PATH } from "@/router/pathname";
import { AUTH_PATH } from "@/router/pathname/auth.path";
import { Styles } from "@/theme";

export interface HeaderMainLayoutProps {}

const { MAIN_PATH } = PATH;

const { HEADER } = ASSETS.ICONS_URL;

const HeaderMainLayout: React.FC<HeaderMainLayoutProps> = () => {
    const { useGetUser } = useQueryUser();

    const { data } = useGetUser();

    const linkLogin = data ? "/" + MAIN_PATH.ACCOUNT : "/" + AUTH_PATH.LOGIN;

    return (
        <Style.Header>
            <Style.Wrapper className='app_container'>
                {/* background */}
                <Style.Img src={ASSETS.IMAGE_URL.BG.HEADER} />
                {/* content */}

                <Style.Inner>
                    <Style.IconWrapper>
                        <NavLink icon={HEADER.CUP} to={"/" + MAIN_PATH.CUP} />
                        <NavLink icon={HEADER.BOX} to={"/" + MAIN_PATH.MARKET} />
                        <Style.NavLink to='/'>
                            <img src={HEADER.HOME} style={{ height: "40%" }} />
                        </Style.NavLink>
                        <NavLink icon={HEADER.COMUNICATE} to={"/" + MAIN_PATH.AFFILIATE} />
                    </Style.IconWrapper>

                    <Style.NavLink to={linkLogin}>
                        <img src={ASSETS.IMAGE_URL.FRAME.FRAME_USER} />
                        <Style.Inner>
                            <Styles.Position.Center style={{ transform: "translateY(0.5rem)" }}>
                                <p className='text_big' style={{ color: "white" }}>
                                    {data?.data?.username ? data?.data?.username : "login"}
                                </p>
                            </Styles.Position.Center>
                        </Style.Inner>
                    </Style.NavLink>
                </Style.Inner>
            </Style.Wrapper>
        </Style.Header>
    );
};

export default HeaderMainLayout;

interface NavLinkProps {
    icon: any;
    to?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ icon, to }) => {
    return (
        <Style.NavLink to={to || "/"}>
            <img src={icon} />
        </Style.NavLink>
    );
};

const Style = {
    Header: styled.header`
        position: relative;
        width: 100%;
        z-index: 10;
    `,

    Wrapper: styled.div`
        margin-top: 1rem;
        position: relative;
    `,

    Img: styled.img`
        width: 100%;
    `,

    Inner: styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transform: translateY(-0.5rem);
        padding: 0 10%;
    `,

    IconWrapper: styled.div`
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 3%;
    `,

    NavLink: styled(Link)`
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        :hover {
            transform: translateY(-3px);
        }
        img {
            height: 25%;
        }
    `,
};
