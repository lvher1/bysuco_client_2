import React from "react";
import tw from "twin.macro";
import { BrowserView, MobileView } from "react-device-detect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = tw.div`
    flex w-[1280px] mx-auto items-center justify-between h-[5.625rem]
`;

const Logo = tw.div`
    
`;
const Searchinput = tw.div`
    flex w-[32.5rem] h-[2.5rem] justify-center items-center border-b-[2px] border-black
`;
const IconBox = tw.div`
    flex justify-center items-center space-x-[1.5625rem]
`;

const header = () => {
    return (
        <>
            <BrowserView>
                <Header>
                    <Logo>
                        <Link to={"/"}>
                            <img src="images/logo.png" alt="logo" />
                        </Link>
                    </Logo>
                    <Searchinput>
                        <input
                            type="text"
                            placeholder="검색어를 입력해주세요"
                            className="w-[100%] placeholder:text-xs"
                            style={{ width: "525px", height: "38px" }}
                        />
                    </Searchinput>
                    <IconBox>
                        <div>
                            <a href="#">LOGIN</a>
                        </div>
                        <div>
                            <span>|</span>
                        </div>
                        <div>
                            <a href="#">JOIN</a>
                        </div>
                        <div>
                            <a href="#" className="ml-[10px]">
                                <FontAwesomeIcon icon={faUser} size="xl" />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <FontAwesomeIcon icon={faCartShopping} size="xl" />
                            </a>
                        </div>
                    </IconBox>
                </Header>
            </BrowserView>
            {/* 모바일헤더 */}
            <MobileView>
                <div className="py-2 px-5">
                    <div className="mx-auto flex justify-between items-center">
                        <div className="relative w-11/12">
                            <input
                                type="text"
                                placeholder="바이슈코 타임세일!"
                                className="w-full bg-[#F5F5F5] rounded-[1.25rem] h-[2.5rem] pl-[40px]
                                placeholder:text-xs"
                            />
                            <div className="absolute top-2 left-4">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400" />
                            </div>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                    </div>
                </div>
            </MobileView>
        </>
    );
};

export default header;
