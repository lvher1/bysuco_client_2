import React from "react";
import styled from "styled-components";
import { BrowserView, MobileView } from "react-device-detect";
import tw from "twin.macro";
import NavSubmenu from "./navSubmenu";
import NavDropdown from "./navDropdown";
import { Link } from "react-router-dom";
import { width } from "tailwindcss-classnames";

const Nav = tw.div`
    flex justify-between items-center w-[80%] mx-auto h-[40px] text-[.875rem] text-white
`;
const Menu = tw.div`
    flex justify-start items-center w-[80%] space-x-8
`;
const Menuli = tw.div`
    md:text-[.475rem] flex w-[auto] justify-center items-center
`;
const Recentlyproduct = tw.div`
    flex justify-center items-center
`;

const MoNav = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    color: #fff;
    background-color: #006344;
    white-space: nowrap;
    overflow-x: auto;
    font-size: 14px;
    ::-webkit-scrollbar {
        width: 150px;
    }
    ::-webkit-scrollbar-track {
    }
    div {
        display: inline-block;
    }
`;

const nav = () => {
    return (
        <>
            <BrowserView>
                <div className="bg-myGreen w-full" style={{ height: "52px" }}>
                    <Nav className="relative" style={{ height: "auto", width: "1280px" }}>
                        <NavSubmenu></NavSubmenu>
                        {/* <Menu>
                            <Menuli>CATEGORY</Menuli>
                            <Menuli>
                                <Link to="/brand">BRAND</Link>
                            </Menuli>
                            <Menuli>
                                <Link to="/timesale">타임세일</Link>
                            </Menuli>
                            <Menuli>
                                <Link to="/rapple">래플이벤트</Link>
                            </Menuli>
                            <Menuli>
                                <Link to="/new">NEW</Link>
                            </Menuli>
                            <Menuli>
                                <Link to="/best">BEST</Link>
                            </Menuli>
                            <Menuli>
                                <Link to="/event">EVENT</Link>
                            </Menuli>
                            <Menuli>
                                <Link to="/community">COMMUNITY</Link>
                            </Menuli>
                            <Menuli>
                                <Link to="/byyou">ByYou</Link>
                            </Menuli>
                        </Menu> */}
                        <NavDropdown />
                    </Nav>
                </div>
            </BrowserView>
            {/* 모바일 Nav*/}
            <MobileView>
                <MoNav className="space-x-[20px] pt-3 px-5">
                    <div>
                        <Link to="/">HOME</Link>
                    </div>
                    <div>
                        <Link to="/shop">SHOP</Link>
                    </div>
                    <div>
                        <Link to="/brand">BRAND</Link>
                    </div>
                    <div>
                        <Link to="/timesale">타임세일</Link>
                    </div>
                    <div>
                        <Link to="/rapple">래플이벤트</Link>
                    </div>
                    <div>
                        <Link to="/new">NEW</Link>
                    </div>
                    <div>
                        <Link to="/best">BEST</Link>
                    </div>
                    <div>
                        <Link to="/event">EVENT</Link>
                    </div>
                    <div>
                        <Link to="community">COMMUNITY</Link>
                    </div>
                    <div>
                        <Link to="byyou">ByYou</Link>
                    </div>
                </MoNav>
                {/* PC Nav */}
            </MobileView>
        </>
    );
};

export default nav;
