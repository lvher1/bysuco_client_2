// 타임세일,래플이벤트 PC
// 타임세일,래플이벤트,이벤트 Mobile

import { Fragment, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { BrowserView, MobileView } from "react-device-detect";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { ButtonBox } from "../../components/elements/StyledButton";
import BasicContent from "../../components/elements/StyledContent";
import Pagination from "../../components/elements/pagination";
import muiButton from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
// 타임세일 이미지 & 상품정보
const Row = tw.div`
   flex justify-center items-center space-x-[1.25rem] mb-[40px]
`;
const RowMo = tw.div`
   flex flex-col justify-center items-center
   space-y-[40px] mb-[3.125rem]
`;
const BuscoButton = styled(muiButton)`
    width: 120px;
    height: 42px;
    &:not(:disabled) {
        border-color: green !important;
        color: green !important;
    }
`;
// 기본 스타일 정의
const ContentList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: -0.05em;
`;
// 기본 상품 wrap
export default function EventContent2(props) {
    return (
        <ContentList>
            <div className="overflow-hidden w-[630px]">
                <img src={props.imgURL} alt="alt-image" className="w-[100%] h-[311px]" />
            </div>
            <div
                className={
                    "flex flex-col space-y-[5px] mt-[10px] " +
                    (props.align == "left" ? "text-left px-2" : "text-center")
                }
                style={{ marginTop: "40px" }}
            >
                <div className="font-bold text-[20px]">
                    <span>{props.title}</span>
                </div>
                <div className="text-[18px]">
                    <span>{props.subtitle}</span>
                </div>
            </div>
        </ContentList>
    );
}

// EVENT wrap
function EventContentEl(props) {
    return (
        <ContentList>
            <div className="overflow-hidden w-[412px]">
                <img src={props.imgURL} alt="alt-image" className="w-[100%] h-[310px]" />
            </div>
            <div className="flex flex-col space-y-[5px] text-center mt-[10px]">
                <div className="font-bold text-[14px]">
                    <span>{props.title}</span>
                </div>
                <div className="text-[11px]">
                    <p>{props.subtitle}</p>
                </div>
            </div>
        </ContentList>
    );
}

export function EventContent() {
    return (
        <>
            <BrowserView>
                <Stack direction="row" spacing={2} className="flex justify-center mb-[80px]">
                    <BuscoButton variant="outlined">프로모션#1</BuscoButton>
                    <BuscoButton variant="outlined" disabled>
                        프로모션#2
                    </BuscoButton>
                    <BuscoButton variant="outlined" disabled>
                        프로모션#3
                    </BuscoButton>
                    <BuscoButton variant="outlined" disabled>
                        프로모션#4
                    </BuscoButton>
                </Stack>
                <div className="flex justify-between items-center text-[14px] mb-[30px]">
                    <div>
                        총 <span className="text-[#006655]">45</span>개
                    </div>
                    {/* 드롭다운or셀렉트박스로 바꾸기 */}
                    <div>
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="flex justify-center items-center pt-[5px]">
                                    <span className="mx-[.625rem]">전체</span>
                                    <FontAwesomeIcon icon={faAngleDown} />
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
                                <Menu.Items className="flex flex-col px-2 py-2 absolute mt-[10px] right-0 w-[110px] origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-[14px]">
                                    <span>전체</span>
                                    <span className="py-2 text-gray-500">진행중 이벤트</span>
                                    <span className="text-gray-500">종료된 이벤트</span>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
                <Row>
                    <Link className="flex flex-col justify-center items-center" to={"detail"}>
                        <EventContentEl
                            title="최저가 PICK"
                            subtitle="바이슈코 에코 파우치 구매 시 인기 브랜드 샘플 5종(카테고리 별 택1)"
                            imgURL="images/alt-image.jpg"
                        />
                    </Link>
                    <Link className="flex flex-col justify-center items-center" to={"detail"}>
                        <EventContentEl
                            title="N월n일 래플이벤트"
                            subtitle="N일까지 응모하고 할인 받자"
                            imgURL="images/alt-image.jpg"
                        />
                    </Link>
                    <Link className="flex flex-col justify-center items-center" to={"detail"}>
                        <EventContentEl
                            title="N월n일 래플이벤트"
                            subtitle="N일까지 응모하고 할인 받자"
                            imgURL="images/alt-image.jpg"
                        />
                    </Link>
                </Row>
                <Row>
                    <Link className="flex flex-col justify-center items-center" to={"detail"}>
                        <EventContentEl
                            title="최저가 PICK"
                            subtitle="바이슈코 에코 파우치 구매 시 인기 브랜드 샘플 5종(카테고리 별 택1)"
                            imgURL="images/alt-image.jpg"
                        />
                    </Link>
                    <Link className="flex flex-col justify-center items-center" to={"detail"}>
                        <EventContentEl
                            title="N월n일 래플이벤트"
                            subtitle="N일까지 응모하고 할인 받자"
                            imgURL="images/alt-image.jpg"
                        />
                    </Link>
                    <Link className="flex flex-col justify-center items-center" to={"detail"}>
                        <EventContentEl
                            title="N월n일 래플이벤트"
                            subtitle="N일까지 응모하고 할인 받자"
                            imgURL="images/alt-image.jpg"
                        />
                    </Link>
                </Row>
                <Row>
                    <Link className="flex flex-col justify-center items-center" to={"detail"}>
                        <EventContentEl
                            title="최저가 PICK"
                            subtitle="바이슈코 에코 파우치 구매 시 인기 브랜드 샘플 5종(카테고리 별 택1)"
                            imgURL="images/alt-image.jpg"
                        />
                    </Link>
                    <Link className="flex flex-col justify-center items-center" to={"detail"}>
                        <EventContentEl
                            title="N월n일 래플이벤트"
                            subtitle="N일까지 응모하고 할인 받자"
                            imgURL="images/alt-image.jpg"
                        />
                    </Link>
                    <Link className="flex flex-col justify-center items-center" to={"detail"}>
                        <EventContentEl
                            title="N월n일 래플이벤트"
                            subtitle="N일까지 응모하고 할인 받자"
                            imgURL="images/alt-image.jpg"
                        />
                    </Link>
                </Row>
                <Row>
                    <Link className="flex flex-col justify-center items-center" to={"detail"}>
                        <EventContentEl
                            title="최저가 PICK"
                            subtitle="바이슈코 에코 파우치 구매 시 인기 브랜드 샘플 5종(카테고리 별 택1)"
                            imgURL="images/alt-image.jpg"
                        />
                    </Link>
                    <Link className="flex flex-col justify-center items-center" to={"detail"}>
                        <EventContentEl
                            title="N월n일 래플이벤트"
                            subtitle="N일까지 응모하고 할인 받자"
                            imgURL="images/alt-image.jpg"
                        />
                    </Link>
                    <Link className="flex flex-col justify-center items-center" to={"detail"}>
                        <EventContentEl
                            title="N월n일 래플이벤트"
                            subtitle="N일까지 응모하고 할인 받자"
                            imgURL="images/alt-image.jpg"
                        />
                    </Link>
                </Row>
                <Pagination />
            </BrowserView>
            <MobileView>
                <div className="flex justify-between items-center text-[14px] my-[30px]">
                    <div>
                        총 <span className="text-[#006655]">45</span>개
                    </div>
                    <div>
                        <button>
                            <span className="px-3">전체</span>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </button>
                    </div>
                </div>
                <RowMo>
                    <div className="flex flex-col justify-center items-center">
                        <BasicContent
                            title="최저가 PICK"
                            subtitle="바이슈코 에코 파우치 구매 시 인기 브랜드 샘플 5종 (카테고리 별 택1) 증정"
                            imgURL="images/t1.png"
                        />
                    </div>
                    <Link className="flex flex-col justify-center items-center" to={"detail"}>
                        <BasicContent
                            title="WOW! 무료배송"
                            subtitle="바이슈코 에코 파우치 구매 시 인기 브랜드 샘플 5종 (카테고리 별 택1) 증정"
                            imgURL="images/t1.png"
                        />
                    </Link>
                    <Link className="flex flex-col justify-center items-center" to={"detail"}>
                        <BasicContent
                            title="최저가 PICK"
                            subtitle="바이슈코 에코 파우치 구매 시 인기 브랜드 샘플 5종 (카테고리 별 택1) 증정"
                            imgURL="images/t1.png"
                        />
                    </Link>
                    <Link className="flex flex-col justify-center items-center" to={"detail"}>
                        <BasicContent
                            title="WOW! 무료배송"
                            subtitle="바이슈코 에코 파우치 구매 시 인기 브랜드 샘플 5종 (카테고리 별 택1) 증정"
                            imgURL="images/t1.png"
                        />
                    </Link>
                </RowMo>
                <Pagination />
            </MobileView>
        </>
    );
}
