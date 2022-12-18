import tw, { styled } from "twin.macro";
import { BrandContent } from "../components/elements/StyledContent";
import { BrowserView, MobileView } from "react-device-detect";
import StyledTitle from "../components/elements/StyledTitle";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "../components/elements/pagination";
import { Fragment, useEffect, useRef, useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, Transition } from "@headlessui/react";
import ProductWrap from "../components/elements/StyledProduct";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

const products = [
    {
        imgURL: "product1.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#F4B46A", text: "관부가세 포함" },
        ],
    },
    {
        imgURL: "product2.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#F4B46A", text: "관부가세 포함" },
        ],
    },
    {
        imgURL: "product3.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#F4B46A", text: "관부가세 포함" },
        ],
    },
    {
        imgURL: "product4.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#F4B46A", text: "관부가세 포함" },
        ],
    },
    {
        imgURL: "product5.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#F4B46A", text: "관부가세 포함" },
        ],
    },
    {
        imgURL: "product6.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#F4B46A", text: "관부가세 포함" },
        ],
    },
    {
        imgURL: "product7.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#F4B46A", text: "관부가세 포함" },
        ],
    },
    {
        imgURL: "product8.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#F4B46A", text: "관부가세 포함" },
        ],
    },
];

const Row = tw.div`
    flex justify-center items-center space-x-[5px] mb-[5rem]
    lg:space-x-[10px] lg:mb-[40px]
`;
const Banner = tw.div`
    flex flex-col justify-end pl-[1.25rem] pb-[100px] text-[.8125rem]
    background-image[url('images/alt-image.jpg')] bg-cover
    w-full h-[10.625rem] lg:h-[15.625rem] lg:justify-center
`;
const Input = tw.input`
    placeholder:text-[.6875rem] placeholder:text-[#d3d3d3] pb-[.3125rem] w-full
`;

const Category = styled.div`
    & > span + span {
        padding-top: 16px;
    }
`;

let getProductImg = (num) => {
    let returnArr = [];

    for (let i = 0; i < num; i++) {
        let rNum = Math.floor(Math.random() * products.length);

        returnArr.push(products[rNum]);
    }

    return returnArr;
};

const shop = () => {
    return (
        <>
            <BrowserView>
                <div className="w-[1280px] mx-auto">
                    <StyledTitle title="BRAND" subtitle="BYSUCO" />
                    <div className="mt-[20px]">
                        <img src="/brand/branch.png" className="w-[100%] h-[315px]"></img>
                    </div>
                    <div className="flex mt-[100px]">
                        {/* 브랜드 리스트 */}
                        <div>
                            <div className="border-b-2 border-[#000] relative w-[9.375rem]">
                                <Input type="text" placeholder="브랜드를 입력해주세요" />
                                <div className="absolute right-0 bottom-[.3125rem]">
                                    <SearchIcon />
                                </div>
                            </div>
                            <div className="mt-[1.25rem] relative">
                                <ul className="space-y-2 text-[.6875rem] w-[9.375rem] h-[27.5rem] overflow-hidden border-r border-[#d3d3d3]">
                                    <li>전체보기</li>
                                    <li>ADDICTION[어딕션]</li>
                                    <li>AESOP[이솝]</li>
                                    <li>AVEDA[아베다]</li>
                                    <li>BIOTHERM[비오템]</li>
                                    <li>BYREDO[바이레도]</li>
                                    <li>CAUDALIE[꼬달리]</li>
                                    <li>CHANEL[샤넬]</li>
                                    <li>CHLOE[끌로에]</li>
                                    <li>CLARINS[클라랑스]</li>
                                    <li>
                                        CLEDEPEAU BEAUTE
                                        <br />
                                        [끌레드뽀 보떼]
                                    </li>
                                    <li>CLINIQUE[크리니크]</li>
                                    <li>CREED[크리드]</li>
                                    <li>DARPHN[달팡]</li>
                                    <li>DECORTE[데코르테]</li>
                                    <li>DIOR[디올]</li>
                                    <li>DIPTYQUE[딥티크]</li>
                                    <li>ADDICTION[어딕션]</li>
                                    <li>ADDICTION[어딕션]</li>
                                    <li>ADDICTION[어딕션]</li>
                                    <li>ADDICTION[어딕션]</li>
                                    <li>ADDICTION[어딕션]</li>
                                    <li>ADDICTION[어딕션]</li>
                                    <li>ADDICTION[어딕션]</li>
                                </ul>
                            </div>
                        </div>
                        {/* 상품목록 */}
                        <div className="w-full ml-[50px]">
                            <div className="flex justify-between items-center text-[14px]">
                                <div>
                                    총 <span className="text-[#006655]">58</span>개
                                </div>
                                <div>
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="flex justify-center items-center pt-[5px] text-[.75rem">
                                                <span className="mx-[.625rem]">후기갯수많은순</span>
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
                                            <Menu.Items className="absolute mt-[10px] right-0 w-[130px] origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-[14px]">
                                                <Category className="flex flex-col px-2 py-2 text-gray-500">
                                                    <span>추천순</span>
                                                    <span>신상품순</span>
                                                    <span>상품명순</span>
                                                    <span>높은가격순</span>
                                                    <span>판매량높은순</span>
                                                    <span className="text-black">후기갯수많은순</span>
                                                </Category>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                            <div className="space-y-[80px]">
                                <BrandContent />
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div>
                    <div className="w-[100%]">
                        <img src="/event.PNG" className="w-[100%]" />
                    </div>
                    <label
                        for="brandSelect"
                        className="flex w-[90%] mx-auto rounded-[3px] border border-[cecece] p-3 mt-[25px]"
                    >
                        <select id="brandSelect" className="w-[100%] appearance-none focus:outline-none">
                            <option>전체보기</option>
                        </select>
                        <div>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                    </label>
                    <div className="w-[90%] mx-auto flex justify-between items-center text-[14px] my-[30px]">
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
                    <div className="w-[90%] mx-auto pb-[56px] md:pb-[0px]">
                        <ProductWrap products={getProductImg(12)} rowCnt={2} />
                    </div>
                </div>
            </MobileView>
        </>
    );
};

export default shop;
