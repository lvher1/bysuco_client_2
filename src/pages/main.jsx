import React from "react";
import tw, { styled } from "twin.macro";
import { BrowserView, MobileView, isBrowser } from "react-device-detect";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StyledTitle from "../components/elements/StyledTitle";
import ProductWrap, {
    WowProduct,
    FreeProduct,
    FormanProduct,
    ReppleProduct,
    ReviewProduct,
    ExhibitionProduct,
} from "../components/elements/StyledProduct";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AddIcon from "@mui/icons-material/Add";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BasicContent from "../components/elements/StyledContent.jsx";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

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
    },
});
const Banner_Images = [
    { imgURL: "1.jpg", imgTitle: "SKIN CARE" },
    { imgURL: "2.jpg", imgTitle: "MAKE UP" },
    { imgURL: "3.jpg", imgTitle: "BODY & HAIR" },
];

const Banner_Images2 = [
    { imgURL: "i1.png", imgTitle: "SKIN CARE" },
    { imgURL: "i2.png", imgTitle: "MAKE UP" },
    { imgURL: "i3.png", imgTitle: "BODY & HAIR" },
    { imgURL: "i4.png", imgTitle: "BODY & HAIR" },
    { imgURL: "i5.png", imgTitle: "BODY & HAIR" },
    { imgURL: "i6.png", imgTitle: "BODY & HAIR" },
];

const categorys = [
    { imgURL: "q1.png", imgTitle: "SKIN CARE" },
    { imgURL: "q2.png", imgTitle: "MAKE UP" },
    { imgURL: "q3.png", imgTitle: "BODY & HAIR" },
    { imgURL: "q4.png", imgTitle: "PERFUME" },
    { imgURL: "q5.png", imgTitle: "MEN" },
    { imgURL: "q6.png", imgTitle: "ACCESSORY" },
];
const products = [
    {
        imgURL: "product1.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product2.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [
            { color: "#888888", text: "SALE" },
            { color: "#174f0c", text: "NEW" },
            { color: "#44c57e", text: "BEST" },
        ],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product3.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product4.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product5.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product6.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product7.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product8.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
];

const mproducts = [
    {
        imgURL: "product1.png",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product2.png",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [
            { color: "#888888", text: "SALE" },
            { color: "#174f0c", text: "NEW" },
            { color: "#44c57e", text: "BEST" },
        ],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product3.png",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product4.png",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product5.png",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product6.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product7.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product8.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
];

const rproducts = [
    {
        imgURL: "r1.png",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "r2.png",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [
            { color: "#888888", text: "SALE" },
            { color: "#174f0c", text: "NEW" },
            { color: "#44c57e", text: "BEST" },
        ],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "r3.png",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "r4.png",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product5.png",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product6.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product7.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
    {
        imgURL: "product8.jpg",
        imgTitle: "[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml",
        discount: "24",
        price: "169,900",
        exchange: 141.86,
        alarmTags: [{ color: "#888888", text: "SALE" }],
        tags: [
            { type: "icon", text: <SportsScoreIcon /> },
            { type: "#cd5b5b", text: "기한임박" },
            { type: "#F4B46A", text: "무료배송" },
        ],
    },
];

let getProductImg = (num) => {
    let returnArr = [];

    for (let i = 0; i < num; i++) {
        let rNum = Math.floor(Math.random() * products.length);

        returnArr.push(products[rNum]);
    }

    return returnArr;
};

let getProductmImg = (num) => {
    let returnArr = [];

    for (let i = 0; i < num; i++) {
        //let rNum = Math.floor(Math.random() * products.length);
        let rNum = i;

        returnArr.push(mproducts[rNum]);
    }

    return returnArr;
};

let getProductrImg = (num) => {
    let returnArr = [];

    for (let i = 0; i < num; i++) {
        //let rNum = Math.floor(Math.random() * products.length);
        let rNum = i;

        returnArr.push(rproducts[rNum]);
    }

    return returnArr;
};

const Banner = styled(Slider)`
    button {
        position: absolute;
        left: 0;
    }
    .slick-list {
        width: 100vw;
        margin-left: calc(-50vw + 50%);
    }
    .slick-track {
        display: flex;
    }
    .slick-slide div {
        outline: none;
    }
    .slick-slide div img {
        width: 1280px;
        height: 636px;
    }
    .slick-dots {
        display: flex !important;
    }
    .slick-dots li {
        width: 100%;
        border: 2px solid #f3f3f3;
        height: unset;
        margin: 0;
    }
    .slick-dots li.slick-active {
        border-color: #000;
    }

    @media only screen and (max-width: 780px) {
        display: flex;
        justify-content: center;

        .slick-dots {
            display: flex !important;
            width: 90%;
            bottom: 15px;
        }

        .slick-slide div {
            outline: none;
            height: 400px;
        }

        .slick-slide div img {
            height: 100%;
        }

        .slick-dots li {
            width: 80%;
            border: 2px solid #f3f3f3;
            height: unset;
            margin: 0;
        }

        .slick-dots li.slick-active {
            border-color: #000;
        }
    }
`;

const Event = styled(Slider)`
    button {
        position: absolute;
        left: 0;
    }
    .slick-list {
        width: 100vw;
        margin-left: calc(-50vw + 50%);
    }
    .slick-track {
        display: flex;
    }
    .slick-slide {
        height: 300px;
    }
    .slick-slide > div {
        height: 100%;
    }
    .slick-slide div {
        outline: none;
        height: 100%;
    }
    .slick-slide img {
        height: 100%;
    }
    .slick-dots {
        display: flex !important;
    }
    .slick-dots li {
        width: 100%;
        border: 2px solid #f3f3f3;
        height: unset;
        margin: 0;
    }
    .slick-dots li.slick-active {
        border-color: #000;
    }
`;

const BuscoButton = styled(Button)`
    &:not(:disabled) {
        border-color: green !important;
        color: green !important;
    }
`;
const Category = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em 0;
    & {
        > div {
            display: flex;
        }

        a {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100px;
            & > div {
            }
            & > div img {
                border-radius: 50%;
            }
            & > div span {
                font-size: 12px;
                font-weight: 700;
            }
        }
        a + a {
            margin-left: 1em;
        }
    }

    @media only screen and (max-width: 780px) {
        display: block;
        overflow: scroll;
        & {
            > div {
                justify-content: center;
                width: 180%;
            }

            a {
                float: left;
            }
        }
    }
`;

const Review = styled(Slider)`
    .slick-list {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .slick-slide {
        display: flex !important;
        align-items: center;
        justify-content: center;
    }
    .slick-track {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .slick-slide {
        /* height: 1 !important; */
    }
    .slick-slide > div {
        outline: none;
        display: flex;
        height: 100%;
        align-items: center;
        transition-property: all;
    }
    .slick-slide img {
        width: 100%;
    }
    .slick-dots {
        display: flex !important;
    }
    .slick-dots li {
        width: 100%;
        border: 2px solid #f3f3f3;
        height: unset;
        margin: 0;
    }
    .slick-dots li.slick-active {
        border-color: #000;
    }
`;

const TimeSaleSlide = styled(Slider)`
    .slick-list {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .slick-slide {
        display: flex !important;
        align-items: center;
        justify-content: center;
    }
    .slick-track {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .slick-slide {
        /* height: 1 !important; */
    }
    .slick-slide > div {
        outline: none;
        display: flex;
        height: 100%;
        align-items: center;
        transition-property: all;
    }
    .slick-slide img {
        width: 100%;
    }
    .slick-dots {
        display: flex !important;
    }
    .slick-dots li {
        width: 100%;
        border: 2px solid #f3f3f3;
        height: unset;
        margin: 0;
    }
    .slick-dots li.slick-active {
        border-color: #000;
    }

    .slick-arrow {
        display: none !important;
    }
`;

const settings = {
    customPaging: function (i) {
        return (
            <div>
                <a />
            </div>
        );
    },
    dots: isBrowser ? false : true,
    infinite: true,
    centerMode: isBrowser ? true : false,
    slidesToShow: isBrowser ? 1.175 : 1,
    slidesToScroll: 1,
    variableWidth: isBrowser ? true : false,
};

const event_settings = {
    customPaging: function (i) {
        return (
            <div>
                <a />
            </div>
        );
    },
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
};

const product_settings = {
    customPaging: function (i) {
        return (
            <div>
                <a />
            </div>
        );
    },
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
};

const revive_settings = {
    customPaging: function (i) {
        return (
            <div>
                <a />
            </div>
        );
    },
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    // swipeToSlide: true,
    // afterChange: function (index) {
    //     console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
    // },
};

const repple_slide = {
    customPaging: function (i) {
        return (
            <div>
                <a />
            </div>
        );
    },
    dots: true,
    infinite: true,
    centerMode: false,
    slidesToShow: 3,
    slidesToScroll: 1,
};

const timeSale_slide = {
    customPaging: function (i) {
        return (
            <div>
                <a />
            </div>
        );
    },
    dots: true,
    infinite: true,
    centerMode: false,
    slidesToShow: isBrowser ? 3 : 1,
    slidesToScroll: 1,
};

const product_settings_slide = {
    customPaging: function (i) {
        return (
            <div>
                <a />
            </div>
        );
    },
    className: "slider variable-width",
    dots: true,
    infinite: true,
    variableWidth: true,
    swipeToSlide: true,
    afterChange: function (index) {
        console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
    },
};

const TimeButton = tw.div`
    bg-[#006655] text-white font-bold flex justify-center items-center mx-2
    mt-[.9375rem] h-[30px] text-[.875rem] space-x-[.3125rem] mx-2
`;

const mainPage = () => {
    return (
        <>
            <div className="md:w-[1280px] w-[100%] mx-auto mb-[2em]">
                <Banner {...settings}>
                    {Banner_Images.map((img) => {
                        return (
                            <div>
                                <img src={`/slider/${img.imgURL}`} alt={`${img.imgTitle}`} />
                            </div>
                        );
                    })}
                </Banner>
            </div>
            <Category>
                <div>
                    {categorys.map((img) => {
                        return (
                            <a>
                                <div>
                                    <img src={`/category/${img.imgURL}`} alt="category" />
                                </div>
                                <div>
                                    <span>{img.imgTitle}</span>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </Category>
            <div className="md:w-[1280px] w-[90%] mx-auto mb-[2em]">
                <StyledTitle subtitle="FREE SHIPPING" title="WOW! 무료배송" isMore="true" />
                <WowProduct products={getProductImg(20)} text_center="false" />
            </div>
            <div className="md:w-[1280px] w-[90%] mx-auto pt-[4em]">
                <img src="/banner/중간배너1.png" className="w-[100%]"></img>
            </div>
            <div className="md:w-[1280px] w-[90%] mx-auto">
                <StyledTitle title="#For man" subtitle="BYSUCO" isMore="true" />
                <div className="flex justify-center">
                    <Stack direction="row" spacing={2}>
                        <BuscoButton variant="outlined">SKIN CARE</BuscoButton>
                        <BuscoButton variant="outlined" disabled>
                            PERFUME
                        </BuscoButton>
                        <BuscoButton variant="outlined" disabled>
                            BODY&HAIR
                        </BuscoButton>
                    </Stack>
                </div>
                <div>
                    <FormanProduct products={getProductImg(20)} text_center="true" />
                </div>
            </div>
            <div className="md:w-[1280px] w-[90%] mx-auto pt-[4em]">
                <img src="/banner/중간배너2.png" className="w-[100%]"></img>
            </div>
            <div className="md:w-[1280px] w-[90%] mx-auto">
                <StyledTitle title="래플 이벤트" subtitle="RAFFLE EVENT" isMore="true" />
                <div className="">
                    <ReppleProduct products={getProductImg(5)} text_center="true" />
                </div>
            </div>
            <div className="md:w-[1280px] w-[90%] mx-auto pt-[4em]">
                <img src="/banner/중간배너3.png" className="w-[100%]"></img>
            </div>
            <div className="md:w-[1280px] w-[90%] mx-auto">
                <StyledTitle title="BRAND PICK" subtitle="BYSUCO" isMore="false" />
                <div className="md:flex-row flex flex-col">
                    <div className="md:w-[50%] w-[100%]">
                        <img src="/brand/brand_big.png" className="h-[100%]"></img>
                    </div>
                    <div className="flex flex-col marker:w-[50%]">
                        <div className="md:flex hidden w-[4.25rem] ml-auto items-center text-[0.825rem] border-b-2 border-black">
                            <span>더보기</span>
                            <AddIcon className="ml-auto" sx={{ fontSize: "0.825rem" }} />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex mt-5">
                                <div className="flex items-center md:w-[20%] w-[30%]">
                                    <img src="images/product-img.jpg" alt="brand" />
                                </div>
                                <div className="md:w-[80%] w-[70%]">
                                    <div className="space-y-[15px] font-bold text-[13px]">
                                        <div className="leading-4 tracking-tighter">
                                            <span>[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml</span>
                                        </div>
                                        <div className="space-x-[10px]">
                                            <span className="text-[#21B586] text-[14px]">24%</span>
                                            <span className="text-[#37846C] text-[15px]">169,900원</span>
                                            <span className="text-[10px]">($141.83)</span>
                                        </div>
                                        <div className="flex">
                                            <div className="border border-gray-200 rounded-sm h-[20px] w-[30px] flex justify-center items-center mr-[5px]">
                                                <SportsScoreIcon />
                                            </div>
                                            <div className="text-white text-[10px] bg-[#F4B46A] rounded-sm flex justify-center items-center h-[20px] w-[80px]">
                                                <span>관부가세 포함</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-5">
                                <div className="flex items-center md:w-[20%] w-[30%]">
                                    <img src="images/product-img.jpg" alt="brand" />
                                </div>
                                <div className="md:w-[80%] w-[70%]">
                                    <div className="space-y-[15px] font-bold text-[13px]">
                                        <div className="leading-4 tracking-tighter">
                                            <span>[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml</span>
                                        </div>
                                        <div className="space-x-[10px]">
                                            <span className="text-[#21B586] text-[14px]">24%</span>
                                            <span className="text-[#37846C] text-[15px]">169,900원</span>
                                            <span className="text-[10px]">($141.83)</span>
                                        </div>
                                        <div className="flex">
                                            <div className="border border-gray-200 rounded-sm h-[20px] w-[30px] flex justify-center items-center mr-[5px]">
                                                <SportsScoreIcon />
                                            </div>
                                            <div className="text-white text-[10px] bg-[#F4B46A] rounded-sm flex justify-center items-center h-[20px] w-[80px]">
                                                <span>관부가세 포함</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-5">
                                <div className="flex items-center md:w-[20%] w-[30%]">
                                    <img src="images/product-img.jpg" alt="brand" />
                                </div>
                                <div className="md:w-[80%] w-[70%]">
                                    <div className="space-y-[15px] font-bold text-[13px]">
                                        <div className="leading-4 tracking-tighter">
                                            <span>[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml</span>
                                        </div>
                                        <div className="space-x-[10px]">
                                            <span className="text-[#21B586] text-[14px]">24%</span>
                                            <span className="text-[#37846C] text-[15px]">169,900원</span>
                                            <span className="text-[10px]">($141.83)</span>
                                        </div>
                                        <div className="flex">
                                            <div className="border border-gray-200 rounded-sm h-[20px] w-[30px] flex justify-center items-center mr-[5px]">
                                                <SportsScoreIcon />
                                            </div>
                                            <div className="text-white text-[10px] bg-[#F4B46A] rounded-sm flex justify-center items-center h-[20px] w-[80px]">
                                                <span>관부가세 포함</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-[1280px] w-[90%] mx-auto pt-[4em]">
                <img src="/banner/중간배너4최저가.png" className="w-[100%]"></img>
            </div>
            <div className="md:w-[1280px] w-[90%] mx-auto">
                <StyledTitle title="최저가 PICK" subtitle="LOWEST PRICE" isMore="true" />
                <div className="md:flex hidden">
                    <div className="w-[50%] mr-3">
                        <div className="flex justify-between rounded-sm bg-[#8b8b8b] p-5 text-white">
                            <div>
                                <span>
                                    유사한 고객님이
                                    <br />
                                    많이 구매했어요
                                </span>
                            </div>
                            <div className="flex w-[4.25rem] mt-auto ml-auto items-center text-[0.825rem] border-b-2 border-white">
                                <span>더보기</span>
                                <AddIcon className="ml-auto" sx={{ fontSize: "0.825rem" }} />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-[50%] mr-1">
                                <div className="flex-1 flex-col items-center justify-center">
                                    <div className="">
                                        <img src="images/product-img.jpg" alt="product-img" />
                                    </div>
                                    <div className="space-y-[15px] font-bold text-[13px]">
                                        <div className="leading-4 tracking-tighter">
                                            <span>[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml</span>
                                        </div>
                                        <div className="space-x-[10px]">
                                            <span className="text-[#21B586] text-[14px]">24%</span>
                                            <span className="text-[#37846C] text-[15px]">169,900원</span>
                                            <span className="text-[10px]">($141.83)</span>
                                        </div>
                                        <div className="flex">
                                            <div className="border border-gray-200 rounded-sm h-[20px] w-[30px] flex justify-center items-center mr-[5px]">
                                                <SportsScoreIcon />
                                            </div>
                                            <div className="text-white text-[10px] bg-[#F4B46A] rounded-sm flex justify-center items-center h-[20px] w-[80px]">
                                                <span>관부가세 포함</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[50%] ml-1">
                                <div className="flex-1 flex-col items-center justify-center">
                                    <div>
                                        <img src="images/product-img.jpg" alt="product-img" />
                                    </div>
                                    <div className="space-y-[15px] font-bold text-[13px]">
                                        <div className="leading-4 tracking-tighter">
                                            <span>[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml</span>
                                        </div>
                                        <div className="space-x-[10px]">
                                            <span className="text-[#21B586] text-[14px]">24%</span>
                                            <span className="text-[#37846C] text-[15px]">169,900원</span>
                                            <span className="text-[10px]">($141.83)</span>
                                        </div>
                                        <div className="flex">
                                            <div className="border border-gray-200 rounded-sm h-[20px] w-[30px] flex justify-center items-center mr-[5px]">
                                                <SportsScoreIcon />
                                            </div>
                                            <div className="text-white text-[10px] bg-[#F4B46A] rounded-sm flex justify-center items-center h-[20px] w-[80px]">
                                                <span>관부가세 포함</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Divider orientation="vertical" flexItem />
                    <div className="flex flex-col w-[50%] ml-3">
                        <div className="flex justify-between rounded-sm bg-[rgb(138,171,150)] p-5 text-white">
                            <div>
                                <span>
                                    유사한 고객님이
                                    <br />
                                    많이 구매했어요
                                </span>
                            </div>
                            <div className="flex w-[4.25rem] mt-auto ml-auto items-center text-[0.825rem] border-b-2 border-white">
                                <span>더보기</span>
                                <AddIcon className="ml-auto" sx={{ fontSize: "0.825rem" }} />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-[50%] mr-1">
                                <div className="flex-1 flex-col items-center justify-center">
                                    <div>
                                        <img src="images/product-img.jpg" alt="product-img" />
                                    </div>
                                    <div className="space-y-[15px] font-bold text-[13px]">
                                        <div className="leading-4 tracking-tighter">
                                            <span>[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml</span>
                                        </div>
                                        <div className="space-x-[10px]">
                                            <span className="text-[#21B586] text-[14px]">24%</span>
                                            <span className="text-[#37846C] text-[15px]">169,900원</span>
                                            <span className="text-[10px]">($141.83)</span>
                                        </div>
                                        <div className="flex">
                                            <div className="border border-gray-200 rounded-sm h-[20px] w-[30px] flex justify-center items-center mr-[5px]">
                                                <SportsScoreIcon />
                                            </div>
                                            <div className="text-white text-[10px] bg-[#F4B46A] rounded-sm flex justify-center items-center h-[20px] w-[80px]">
                                                <span>관부가세 포함</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[50%] ml-1">
                                <div className="flex-1 flex-col items-center justify-center">
                                    <div>
                                        <img src="images/product-img.jpg" alt="product-img" />
                                    </div>
                                    <div className="space-y-[15px] font-bold text-[13px]">
                                        <div className="leading-4 tracking-tighter">
                                            <span>[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml</span>
                                        </div>
                                        <div className="space-x-[10px]">
                                            <span className="text-[#21B586] text-[14px]">24%</span>
                                            <span className="text-[#37846C] text-[15px]">169,900원</span>
                                            <span className="text-[10px]">($141.83)</span>
                                        </div>
                                        <div className="flex">
                                            <div className="border border-gray-200 rounded-sm h-[20px] w-[30px] flex justify-center items-center mr-[5px]">
                                                <SportsScoreIcon />
                                            </div>
                                            <div className="text-white text-[10px] bg-[#F4B46A] rounded-sm flex justify-center items-center h-[20px] w-[80px]">
                                                <span>관부가세 포함</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:hidden flex flex-col mx-auto">
                <div className="w-[100%]">
                    <img src="/brand/brand1.jpg" className="h-[100%]" alt="banner" />
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col w-[50%]">
                        <div className="flex mt-5">
                            <div className="flex items-center w-[25%]">
                                <img src="images/product-img.jpg" alt="pick" />
                            </div>
                            <div className="w-[75%]">
                                <div className="space-y-1 font-bold text-[13px]">
                                    <div className="leading-2 tracking-tighter">
                                        <span>[이솝] 제라늄 리...</span>
                                    </div>
                                    <div className="space-x-[5px]">
                                        <span className="text-[#21B586] text-[14px]">24%</span>
                                        <span className=" text-[15px]">169,900원</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <div className="flex items-center w-[25%]">
                                <img src="images/product-img.jpg" alt="pick" />
                            </div>
                            <div className="w-[75%]">
                                <div className="space-y-1 font-bold text-[13px]">
                                    <div className="leading-2 tracking-tighter">
                                        <span>[이솝] 제라늄 리...</span>
                                    </div>
                                    <div className="space-x-[5px]">
                                        <span className="text-[#21B586] text-[14px]">24%</span>
                                        <span className=" text-[15px]">169,900원</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <div className="flex items-center w-[25%]">
                                <img src="images/product-img.jpg" alt="pick" />
                            </div>
                            <div className="w-[75%]">
                                <div className="space-y-1 font-bold text-[13px]">
                                    <div className="leading-2 tracking-tighter">
                                        <span>[이솝] 제라늄 리...</span>
                                    </div>
                                    <div className="space-x-[5px]">
                                        <span className="text-[#21B586] text-[14px]">24%</span>
                                        <span className=" text-[15px]">169,900원</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-[50%]">
                        <div className="flex mt-5">
                            <div className="flex items-center w-[25%]">
                                <img src="images/product-img.jpg" alt="pick" />
                            </div>
                            <div className="w-[75%]">
                                <div className="space-y-1 font-bold text-[13px]">
                                    <div className="leading-2 tracking-tighter">
                                        <span>[이솝] 제라늄 리...</span>
                                    </div>
                                    <div className="space-x-[5px]">
                                        <span className="text-[#21B586] text-[14px]">24%</span>
                                        <span className="text-[15px]">169,900원</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <div className="flex items-center w-[25%]">
                                <img src="images/product-img.jpg" alt="pick" />
                            </div>
                            <div className="w-[75%]">
                                <div className="space-y-1 font-bold text-[13px]">
                                    <div className="leading-2 tracking-tighter">
                                        <span>[이솝] 제라늄 리...</span>
                                    </div>
                                    <div className="space-x-[5px]">
                                        <span className="text-[#21B586] text-[14px]">24%</span>
                                        <span className="text-[15px]">169,900원</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <div className="flex items-center w-[25%]">
                                <img src="images/product-img.jpg" alt="pick" />
                            </div>
                            <div className="w-[75%]">
                                <div className="space-y-1 font-bold text-[13px]">
                                    <div className="leading-2 tracking-tighter">
                                        <span>[이솝] 제라늄 리...</span>
                                    </div>
                                    <div className="space-x-[5px]">
                                        <span className="text-[#21B586] text-[14px]">24%</span>
                                        <span className="text-[15px]">169,900원</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-[1280px] w-[90%] mx-auto pt-[4em]">
                <img src="/banner/중간배너5.png" className="w-[100%]"></img>
            </div>
            <div className="md:w-[1280px] w-[90%] mx-auto">
                <StyledTitle title="BEST REVIEW" subtitle="BYSUCO" isMore="true" />
                <ReviewProduct products={getProductImg(20)} text_center="true" />
            </div>
            <div className="md:w-[1280px] w-[90%] mx-auto pt-[4em]"></div>
            <div className="md:w-[1280px] w-[90%] mx-auto">
                <StyledTitle title="타임세일" subtitle="TIME SALE" isMore="true" />
                <div className="flex justify-center">
                    <Stack direction="row" spacing={2}>
                        <BuscoButton variant="outlined">진행중</BuscoButton>
                        <BuscoButton variant="outlined" disabled>
                            종료
                        </BuscoButton>
                    </Stack>
                </div>
                <div className="mt-10">
                    <TimeSaleSlide {...timeSale_slide}>
                        <div className="flex flex-col justify-center items-center">
                            <BasicContent
                                title="타임세일A"
                                subtitle="두줄 노출 가능 최대 60자까지 입력 가능합니다. 내용을 입력해주세요!"
                                imgURL="images/t1.png"
                                align="left"
                            />
                            <TimeButton>
                                <div>
                                    <AccessTimeIcon fontSize="8" />
                                </div>
                                <div>
                                    <span>12 : 34 : 56</span>
                                </div>
                            </TimeButton>
                        </div>
                        <div className="flex flex-col justify-start items-center">
                            <BasicContent
                                title="타임세일A"
                                subtitle="두줄 노출 가능 최대 60자까지 입력 가능합니다. 내용을 입력해주세요!"
                                imgURL="images/t1.png"
                                align="center"
                            />
                            <TimeButton>
                                <div>
                                    <AccessTimeIcon fontSize="8" />
                                </div>
                                <div>
                                    <span>12 : 34 : 56</span>
                                </div>
                            </TimeButton>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <BasicContent
                                title="타임세일A"
                                subtitle="두줄 노출 가능 최대 60자까지 입력 가능합니다. 내용을 입력해주세요!"
                                imgURL="images/t1.png"
                                align="left"
                            />
                            <TimeButton>
                                <div>
                                    <AccessTimeIcon fontSize="8" />
                                </div>
                                <div>
                                    <span>12 : 34 : 56</span>
                                </div>
                            </TimeButton>
                        </div>
                    </TimeSaleSlide>
                </div>
            </div>
            <div className="md:w-[1280px] w-[90%] mx-auto pt-[4em]"></div>
            <div className="md:w-[1280px] w-[90%] mx-auto">
                <StyledTitle title="BYSUCO 추천 기획전" subtitle="RECOMMENDED EXHIBITION" isMore="true" />
                <BrowserView>
                    <div className="flex h-[20rem]">
                        <div className="w-[50vw] ml-[calc(-50vw+50%)]">
                            <img src="plan/reco1.png" className="h-[100%] w-[100%]"></img>
                        </div>
                        <div className="flex flex-col justify-center w-[50%] pl-10">
                            <div className="flex flex-col">
                                <div className="flex">
                                    <div className="flex justify-center items-center w-[20%] border border-gray-200">
                                        <img src="images/product-img.jpg" />
                                    </div>
                                    <div className="flex items-center w-[80%] ml-5">
                                        <div className="space-y-[15px] font-bold text-[13px]">
                                            <div className="leading-4 tracking-tighter">
                                                <span>[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml</span>
                                            </div>
                                            <div className="space-x-[10px]">
                                                <span className="text-[#21B586] text-[14px]">24%</span>
                                                <span className="text-[#37846C] text-[15px]">169,900원</span>
                                                <span className="text-[10px]">($141.83)</span>
                                            </div>
                                            <div className="flex">
                                                <div className="border border-gray-200 rounded-sm h-[20px] w-[30px] flex justify-center items-center mr-[5px]">
                                                    <SportsScoreIcon />
                                                </div>
                                                <div className="text-white text-[10px] bg-[#F4B46A] rounded-sm flex justify-center items-center h-[20px] w-[80px]">
                                                    <span>관부가세 포함</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mt-5">
                                    <div className="flex justify-center items-center w-[20%] border border-gray-200">
                                        <img src="images/product-img.jpg" />
                                    </div>
                                    <div className="flex items-center w-[80%] ml-5">
                                        <div className="space-y-[15px] font-bold text-[13px]">
                                            <div className="leading-4 tracking-tighter">
                                                <span>[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml</span>
                                            </div>
                                            <div className="space-x-[10px]">
                                                <span className="text-[#21B586] text-[14px]">24%</span>
                                                <span className="text-[#37846C] text-[15px]">169,900원</span>
                                                <span className="text-[10px]">($141.83)</span>
                                            </div>
                                            <div className="flex">
                                                <div className="border border-gray-200 rounded-sm h-[20px] w-[30px] flex justify-center items-center mr-[5px]">
                                                    <SportsScoreIcon />
                                                </div>
                                                <div className="text-white text-[10px] bg-[#F4B46A] rounded-sm flex justify-center items-center h-[20px] w-[80px]">
                                                    <span>관부가세 포함</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Divider className="py-3" flexItem />
                    <div className="flex h-[20rem] mt-5">
                        <div className="flex flex-col justify-center w-[50%] pr-10">
                            <div className="flex flex-col items-end">
                                <div className="flex">
                                    <div className="flex justify-center items-center w-[20%] border border-gray-200">
                                        <img src="images/product-img.jpg" />
                                    </div>
                                    <div className="flex items-center w-[80%] ml-5">
                                        <div className="space-y-[15px] font-bold text-[13px]">
                                            <div className="leading-4 tracking-tighter">
                                                <span>[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml</span>
                                            </div>
                                            <div className="space-x-[10px]">
                                                <span className="text-[#21B586] text-[14px]">24%</span>
                                                <span className="text-[#37846C] text-[15px]">169,900원</span>
                                                <span className="text-[10px]">($141.83)</span>
                                            </div>
                                            <div className="flex">
                                                <div className="border border-gray-200 rounded-sm h-[20px] w-[30px] flex justify-center items-center mr-[5px]">
                                                    <SportsScoreIcon />
                                                </div>
                                                <div className="text-white text-[10px] bg-[#F4B46A] rounded-sm flex justify-center items-center h-[20px] w-[80px]">
                                                    <span>관부가세 포함</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex mt-5">
                                    <div className="flex justify-center items-center w-[20%] border border-gray-200">
                                        <img src="images/product-img.jpg" />
                                    </div>
                                    <div className="flex items-center w-[80%] ml-5">
                                        <div className="space-y-[15px] font-bold text-[13px]">
                                            <div className="leading-4 tracking-tighter">
                                                <span>[이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml</span>
                                            </div>
                                            <div className="space-x-[10px]">
                                                <span className="text-[#21B586] text-[14px]">24%</span>
                                                <span className="text-[#37846C] text-[15px]">169,900원</span>
                                                <span className="text-[10px]">($141.83)</span>
                                            </div>
                                            <div className="flex">
                                                <div className="border border-gray-200 rounded-sm h-[20px] w-[30px] flex justify-center items-center mr-[5px]">
                                                    <SportsScoreIcon />
                                                </div>
                                                <div className="text-white text-[10px] bg-[#F4B46A] rounded-sm flex justify-center items-center h-[20px] w-[80px]">
                                                    <span>관부가세 포함</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[50vw] mr-[calc(-50vw+50%)]">
                            <img src="plan/reco2.png" className="h-[100%] w-[100%]"></img>
                        </div>
                    </div>
                </BrowserView>
                <MobileView>
                    <ExhibitionProduct products={getProductImg(20)} text_center="true" />
                </MobileView>
            </div>
            <div className="md:w-[1280px] w-[90%] mx-auto pt-[4em]">
                <img src="/banner/중간배너6.png" className="w-[100%]"></img>
            </div>
            <div className="md:w-[1280px] w-[90%] mx-auto">
                <StyledTitle title="핫세일" subtitle="HOT SALE" isMore="true" />
                <BrowserView>
                    <ProductWrap products={getProductImg(12)} rowCnt={4} />
                </BrowserView>
                <MobileView>
                    <ProductWrap products={getProductImg(12)} rowCnt={2} />
                </MobileView>
            </div>
            <div className="md:w-[1280px] w-[90%] mx-auto pt-[4em]">
                <img src="/banner/중간배너7.png" className="w-[100%]"></img>
            </div>
            <div className="md:w-[1280px] w-[90%] mx-auto">
                <StyledTitle title="By You" subtitle="BYSUCO" isMore="false" />
                <div className="flex space-x-5">
                    <div className="relative w-[20%]">
                        <img src="buyyou/by1.PNG" className="w-[100%] rounded-lg" />
                        {/**
                            <div className="absolute flex items-center top-3 left-3">
                                <img src="buyyou/buyyouSumb.PNG" className="w-8 rounded-full border border-white" />
                                <span className="text-sm text-white ml-2">example.kr</span>
                            </div>
                             **/}
                    </div>
                    <div className="relative w-[20%]">
                        <img src="buyyou/by2.PNG" className="w-[100%] rounded-lg" />
                        {/**
                            <div className="absolute flex items-center top-3 left-3">
                                <img src="buyyou/buyyouSumb.PNG" className="w-8 rounded-full border border-white" />
                                <span className="text-sm text-white ml-2">example.kr</span>
                            </div>
                            **/}
                    </div>
                    <div className="relative w-[20%]">
                        <img src="buyyou/by3.PNG" className="w-[100%] rounded-lg" />
                        {/**
                             <div className="absolute flex items-center top-3 left-3">
                             <img src="buyyou/buyyouSumb.PNG" className="w-8 rounded-full border border-white" />
                             <span className="text-sm text-white ml-2">example.kr</span>
                             </div>
                             **/}
                    </div>
                    <div className="relative w-[20%]">
                        <img src="buyyou/by4.PNG" className="w-[100%] rounded-lg" />
                        {/**
                             <div className="absolute flex items-center top-3 left-3">
                             <img src="buyyou/buyyouSumb.PNG" className="w-8 rounded-full border border-white" />
                             <span className="text-sm text-white ml-2">example.kr</span>
                             </div>
                             **/}
                    </div>
                    <div className="relative w-[20%]">
                        <img src="buyyou/by5.PNG" className="w-[100%] rounded-lg" />
                        {/**
                             <div className="absolute flex items-center top-3 left-3">
                             <img src="buyyou/buyyouSumb.PNG" className="w-8 rounded-full border border-white" />
                             <span className="text-sm text-white ml-2">example.kr</span>
                             </div>
                             **/}
                    </div>
                </div>
            </div>
            <div className="w-[80%] mx-auto">
                <StyledTitle title="바이슈코 인스타그램" subtitle="INSTAGRAM" isMore="false" />
                <div className="flex flex-col justify-center items-center">
                    <span className="font-bold">@바이슈코</span>
                    <span className="text-gray-400 mt-2">#바이슈코 #100%정품 #직구 #프리미엄뷰티 #래플이벤트</span>
                </div>
                <Event {...event_settings}>
                    {Banner_Images2.map((img) => {
                        return (
                            <div style={{ width: "320px", height: "320px" }}>
                                <img src={`/slider/${img.imgURL}`} alt={`${img.imgTitle}`} />
                            </div>
                        );
                    })}
                </Event>
            </div>
        </>
    );
};

export default mainPage;
