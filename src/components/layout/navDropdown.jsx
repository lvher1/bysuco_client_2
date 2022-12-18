import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tw, { styled } from "twin.macro";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
    palette: {
        anger: createColor("#F40B27"),
        apple: createColor("#5DBA40"),
        steelBlue: createColor("#5C76B7"),
        violet: createColor("#BC00A3"),
        black: createColor("#4d4d4d"),
        gray: createColor("#d3d3d3"),
    },
});

const ButtonMenu = styled(Button)`
    ${tw`border w-[48%] h-[30px] border-[#d3d3d3]`}
`;

export default function Example() {
    return (
        <div className="flex justify-end w-56 text-right">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="flex justify-center items-center pt-[5px] text-[.75rem] bg-myGreen font-medium text-white">
                        <div>
                            <img src="images/imgage.PNG" alt="image" />
                        </div>
                        <div>
                            <span className="mx-[.625rem]">최근본상품</span>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute z-10 right-0 w-72 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 h-[17.5rem] overflow-y-scroll">
                            <Menu.Item>
                                {({ active }) => (
                                    <button className="group flex w-full items-center rounded-md px-2 text-sm text-black tracking-tight">
                                        {/* 콘텐츠 */}
                                        <div className="flex space-x-[.9375rem] py-4 border-b">
                                            <div className="border rounded-md w-[3.125rem] h-[3.125rem] flex justify-center items-center">
                                                <img src="images/product.jpg" alt="image" />
                                            </div>
                                            <div className="w-[65%]">
                                                <div className="text-[.75rem] font-bold text-left leading-4">
                                                    [이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml
                                                </div>
                                                <div className="text-[.75rem] text-left">
                                                    <span className="text-[#09AD79] font-bold mr-[.625rem]">24%</span>
                                                    <span className="text-[#006344] font-bold mr-[.3125rem]">
                                                        169,900원
                                                    </span>
                                                    <span className="text-[#CECECE] text-[11px]">($141.83)</span>
                                                </div>
                                            </div>
                                            <div className="pr-[10px]">
                                                <button className="text-[#cecece]">X</button>
                                            </div>
                                        </div>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button className="group flex w-full items-center rounded-md px-2 text-sm text-black tracking-tight">
                                        {/* 콘텐츠 */}
                                        <div className="flex space-x-[.9375rem] py-4 border-b">
                                            <div className="border rounded-md w-[3.125rem] h-[3.125rem] flex justify-center items-center">
                                                <img src="images/product.jpg" alt="image" />
                                            </div>
                                            <div className="w-[65%]">
                                                <div className="text-[.75rem] font-bold text-left leading-4">
                                                    [이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml
                                                </div>
                                                <div className="text-[.75rem] text-left">
                                                    <span className="text-[#09AD79] font-bold mr-[.625rem]">24%</span>
                                                    <span className="text-[#006344] font-bold mr-[.3125rem]">
                                                        169,900원
                                                    </span>
                                                    <span className="text-[#CECECE] text-[11px]">($141.83)</span>
                                                </div>
                                            </div>
                                            <div className="pr-[10px]">
                                                <button className="text-[#cecece]">X</button>
                                            </div>
                                        </div>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button className="group flex w-full items-center rounded-md px-2 text-sm text-black tracking-tight">
                                        {/* 콘텐츠 */}
                                        <div className="flex space-x-[.9375rem] py-4 border-b">
                                            <div className="border rounded-md w-[3.125rem] h-[3.125rem] flex justify-center items-center">
                                                <img src="images/product.jpg" alt="image" />
                                            </div>
                                            <div className="w-[65%]">
                                                <div className="text-[.75rem] font-bold text-left leading-4">
                                                    [이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml
                                                </div>
                                                <div className="text-[.75rem] text-left">
                                                    <span className="text-[#09AD79] font-bold mr-[.625rem]">24%</span>
                                                    <span className="text-[#006344] font-bold mr-[.3125rem]">
                                                        169,900원
                                                    </span>
                                                    <span className="text-[#CECECE] text-[11px]">($141.83)</span>
                                                </div>
                                            </div>
                                            <div className="pr-[10px]">
                                                <button className="text-[#cecece]">X</button>
                                            </div>
                                        </div>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button className="group flex w-full items-center rounded-md px-2 text-sm text-black tracking-tight">
                                        {/* 콘텐츠 */}
                                        <div className="flex space-x-[.9375rem] py-4">
                                            <div className="border rounded-md w-[3.125rem] h-[3.125rem] flex justify-center items-center">
                                                <img src="images/product.jpg" alt="image" />
                                            </div>
                                            <div className="w-[65%]">
                                                <div className="text-[.75rem] font-bold text-left leading-4">
                                                    [이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml
                                                </div>
                                                <div className="text-[.75rem] text-left">
                                                    <span className="text-[#09AD79] font-bold mr-[.625rem]">24%</span>
                                                    <span className="text-[#006344] font-bold mr-[.3125rem]">
                                                        169,900원
                                                    </span>
                                                    <span className="text-[#CECECE] text-[11px]">($141.83)</span>
                                                </div>
                                            </div>
                                            <div className="pr-[10px]">
                                                <button className="text-[#cecece]">X</button>
                                            </div>
                                        </div>
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="bg-white h-12 flex items-center justify-center border-t">
                            <button className="group flex w-full justify-between items-center rounded-md px-1 py-1 text-sm">
                                <ThemeProvider theme={theme}>
                                    <ButtonMenu color="gray" variant="outlined">
                                        전체 삭제
                                    </ButtonMenu>
                                    <ButtonMenu color="gray" variant="outlined">
                                        닫기
                                    </ButtonMenu>
                                </ThemeProvider>
                            </button>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}
