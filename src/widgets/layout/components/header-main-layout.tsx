import { Box, Stack } from "@mui/material";
import React, { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useBoolean, useOnClickOutside } from "usehooks-ts";

import { ASSETS } from "@/assets";
import { PATH } from "@/router/pathname";
import { Styles } from "@/theme";

import { ButtonHeaderProfile } from "./button-header-profile";

export interface HeaderMainLayoutProps {}

const { MAIN_PATH } = PATH;

const { HEADER } = ASSETS.ICONS_URL;

const HeaderMainLayout: React.FC<HeaderMainLayoutProps> = () => {
    const ref = useRef(null);
    const { pathname } = useLocation();

    const open = useBoolean();
    useOnClickOutside(ref, open.setFalse);

    return (
        <Style.Header>
            <Style.Wrapper className='app_container'>
                <Styles.Container.BgFrameContainer imgFrame={ASSETS.IMAGE_URL.BG.HEADER}>
                    <Style.Inner>
                        <Style.IconWrapper>
                            <NavLinkS icon={HEADER.CUP} icon_2={HEADER.ACTIVE_CUP} to={"/" + MAIN_PATH.CUP} />
                            <NavLinkS icon={HEADER.BOX} icon_2={HEADER.ACTIVE_BOX} to={"/" + MAIN_PATH.MARKET} />
                            <Style.NavLink to='/'>
                                {({ isActive }) =>
                                    isActive ? (
                                        <Styles.ImgIcon.Basic
                                            src={HEADER.HOME}
                                            style={{ transform: "scale(1.5)", transformOrigin: "center" }}
                                        />
                                    ) : (
                                        <Styles.ImgIcon.Basic
                                            src={HEADER.HOME}
                                            style={{ transform: "scale(1.4)", transformOrigin: "center" }}
                                        />
                                    )
                                }
                            </Style.NavLink>
                            <NavLinkS
                                icon={HEADER.COMUNICATE}
                                icon_2={HEADER.ACTIVE_COMUNICATE}
                                to={"/" + MAIN_PATH.AFFILIATE}
                            />
                            <Box sx={{ position: "relative" }} ref={ref}>
                                <Stack onClick={open.toggle} sx={{ cursor: "pointer" }} justifyContent={"flex-end"}>
                                    {pathname === "/account" ? (
                                        <Styles.ImgIcon.Basic src={HEADER.ACTIVE_PROFILE} />
                                    ) : (
                                        <Styles.ImgIcon.Basic src={HEADER.PROFILE} />
                                    )}
                                </Stack>
                                {/* modal */}
                                {open.value && (
                                    <Box sx={{ position: "absolute", right: "-2.5rem", top: "5.5rem", zIndex: 500 }}>
                                        <ButtonHeaderProfile />
                                    </Box>
                                )}
                            </Box>
                        </Style.IconWrapper>
                    </Style.Inner>
                </Styles.Container.BgFrameContainer>
            </Style.Wrapper>
        </Style.Header>
    );
};

export default HeaderMainLayout;

interface NavLinkProps {
    icon: any;
    icon_2: any;
    to?: string;
    isActive?: boolean;
}

const NavLinkS: React.FC<NavLinkProps> = ({ icon, icon_2, to }) => {
    return (
        <Style.NavLink to={to || "/"}>
            {({ isActive }) => (isActive ? <Styles.ImgIcon.Basic src={icon_2} /> : <Styles.ImgIcon.Basic src={icon} />)}
        </Style.NavLink>
    );
};

const Style = {
    Header: styled.header`
        position: fixed;
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
        /* position: absolute; */
        width: 100%;
        height: 100%;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transform: translateY(-0.5rem);
        padding: 4rem 15%;

        @media ${(props) => props.theme.breakpoint.md} {
            padding: 2rem 10%;
        }
    `,

    IconWrapper: styled.div`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* padding-right: 3%; */
    `,

    NavLink: styled(NavLink)`
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;

        :hover {
            transform: translateY(-3px) scale(1.05);
        }
    `,
};
