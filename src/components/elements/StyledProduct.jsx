import tw, { styled } from "twin.macro";
import * as React from "react";
import Slider from "react-slick";
import { BrowserView, MobileView, isBrowser } from "react-device-detect";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

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

const ProductRow = tw.div`
    flex justify-between
`;
{
    /*  */
}

const product_settings = {
    customPaging: function (i) {
        return (
            <div>
                <a />
            </div>
        );
    },
    dots: true,
    infinite: true,
    slidesToShow: isBrowser ? 4 : 1,
    slidesToScroll: isBrowser ? 4 : 1,
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
    centerMode: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    centerMode: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const review_settings = {
    customPaging: function (i) {
        return (
            <div>
                <a />
            </div>
        );
    },
    dots: true,
    infinite: isBrowser ? false : true,
    centerMode: isBrowser ? false : true,
    variableWidth: isBrowser ? false : true,
    slidesToShow: isBrowser ? 4 : 1,
    slidesToScroll: isBrowser ? 4 : 1,
};

const exhibition_settings = {
    customPaging: function (i) {
        return (
            <div>
                <a />
            </div>
        );
    },
    dots: true,
    // infinite: true,
    // centerMode: true,
    // variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const Exhibition = styled(Slider)`
    .flex {
        display: flex !important;
    }

    .slick-list {
        width: 100vw;
        margin-left: calc(-50vw + 50%);
    }
    .slick-track {
        display: flex;
    }
    .slick-slide {
    }
    .slick-slide div {
        outline: none;
    }
    .slick-slide img {
        /* width: 100%; */
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

const Review = styled(Slider)`
    .flex {
        display: flex !important;
    }
    .slick-track {
        display: flex;
    }
    .slick-slide {
        padding: 0 2em;
    }
    .slick-slide div {
        outline: none;
    }
    .slick-slide img {
        /* width: 100%; */
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

const Repple = styled(Slider)`
    .flex {
        display: flex !important;
    }

    .slick-list {
        width: 100vw;
        margin-left: calc(-50vw + 50%);
    }
    .slick-track {
        display: flex;
    }
    .slick-slide {
        padding: 0 2em;
    }
    .slick-slide div {
        outline: none;
    }
    .slick-slide img {
        /* width: 100%; */
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

const Product = styled(Slider)`
    .slick-list {
        height: 400px;
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
    @media only screen and (max-width: 780px) {
        .slick-list {
            height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* .slick-slide {
            width: 200px !important;
        } */

        .slick-slide img {
            width: 200px;
        }
    }
`;

const Forman = styled(Slider)`
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

const ProductItem = (img) => {
    let imgURL = "/product/" + img.imgURL;
    let text_style =
        "flex w-[90%] " + (img.text_center !== "false" ? "justify-start items-center text-center" : "justify-start");

    return (
        <div className="flex flex-col items-center relative">
            <img src={imgURL} />
            <div className="absolute flex flex-col top-1 left-1 space-y-1">
                {img.isShowTopTag !== "false" && img.alarmTags !== undefined
                    ? img.alarmTags.map((alarm) => {
                          return (
                              <span
                                  className="rounded-full text-white text-sm px-3"
                                  style={{ backgroundColor: alarm.color }}
                              >
                                  {alarm.text}
                              </span>
                          );
                      })
                    : ""}
            </div>
            <div className="flex flex-col justify-end">
                <div className="flex flex-col items-center text-left transition-opacity pb-[2em] text-[0.825rem]">
                    <span className={text_style}>{img.imgTitle}</span>
                    <div className={text_style}>
                        <span className="text-green-500">{img.discount}%</span>
                        <span className="pl-[1em]">{img.price}원</span>
                        <span className="pl-[1em] text-gray-300 text-[0.625rem] flex items-end">({img.exchange})</span>
                    </div>
                    <div className={"mt-2 " + text_style}>
                        {img.tags.map((tag) => {
                            return (
                                <>
                                    {tag.type === "icon" ? (
                                        <div className="border border-gray-200 rounded-sm h-[20px] px-1 flex justify-center items-center mr-[5px]">
                                            {tag.text}
                                        </div>
                                    ) : (
                                        <div
                                            style={{ backgroundColor: tag.type }}
                                            className="text-white md:text-[10px] text-[6px] rounded-sm flex justify-center items-center h-[20px] md:px-3 px-[2px] mr-[5px]"
                                        >
                                            <span>{tag.text}</span>
                                        </div>
                                    )}
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

const AnimationProductItem = (img) => {
    let imgURL = "/product/" + img.imgURL;

    return (
        <div className="">
            <div
                style={{
                    backgroundImage: `url(${imgURL})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
                className="group flex flex-col justify-end transition-all ease-linear duration-300 hover:h-[25rem] hover:top-[-5rem] h-[18.225rem]"
            >
                <div className="flex flex-col items-center text-center transition-opacity duration-200 ease-in opacity-0 group-hover:opacity-100 pb-[2em] text-[0.825rem]">
                    <span className="inline-block w-[80%]">{img.imgTitle}</span>
                    <div className="flex justify-center w-[100%]">
                        <span className="text-green-500">{img.discount}%</span>
                        <span className="pl-[1em]">{img.price}원</span>
                        <span className="pl-[1em] text-gray-300 text-[0.625rem] flex items-end">({img.exchange})</span>
                    </div>
                    <div className="flex mt-2">
                        {img.tags.map((tag) => {
                            return (
                                <span
                                    style={{
                                        backgroundColor: `${tag.type}`,
                                        color: `${tag.type == "icon" ? "" : "white"}`,
                                    }}
                                    className={"flex items-center rounded-sm text-[0.525rem] pl-1 pr-1 mx-[.1em]"}
                                >
                                    {tag.text}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const WowProduct = React.forwardRef((props, ref) => {
    let { products } = props;

    return (
        <Product {...product_settings}>
            {products.map((x) => {
                return (
                    <div className="">
                        <AnimationProductItem isShowTopTag="false" {...x} />
                    </div>
                );
            })}
        </Product>
    );
});

export const FreeProduct = React.forwardRef((props, ref) => {
    let { products } = props;

    return (
        <Product {...product_settings}>
            {products.map((x) => {
                return (
                    <div className="">
                        <ProductItem isShowTopTag="false" {...x} />
                    </div>
                );
            })}
        </Product>
    );
});

export const ExhibitionProduct = React.forwardRef((props, ref) => {
    let { products } = props;

    return (
        <Exhibition {...exhibition_settings}>
            <div className="">
                <div className="relative">
                    <img src="plan/plan2.jpg" className="w-[100%] h-[100px]" />
                    <div className="absolute flex flex-col bottom-2 left-4 text-white">
                        <span className="text-[1rem]">기획전 타이틀이 노출되는 영역입니다.</span>
                        <span className="text-[0.425rem]">기획전 서브 타이틀 영역입니다.</span>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-[100%]">
                    <div className="flex justify-center w-[80%] mt-5">
                        <div className="w-[20%]">
                            <img src="images/product-img.jpg" alt="brand" />
                        </div>
                        <div className="w-[80%]">
                            <div className="space-y-[0.275rem] font-bold text-[13px]">
                                <div className="leading-4 tracking-tighter">
                                    <span>[이솝] 제라늄 리프 하이드레이팅 바디...</span>
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
                    <div className="flex justify-center w-[80%] mt-5">
                        <div className="w-[20%]">
                            <img src="images/product-img.jpg" alt="brand" />
                        </div>
                        <div className="w-[80%]">
                            <div className="space-y-[0.275rem] font-bold text-[13px]">
                                <div className="leading-4 tracking-tighter">
                                    <span>[이솝] 제라늄 리프 하이드레이팅 바디...</span>
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
            <div className="">
                <div className="relative">
                    <img src="plan/plan1.jpg" className="w-[100%] h-[100px]" />
                    <div className="absolute flex flex-col bottom-2 left-4 text-white">
                        <span className="text-[1rem]">기획전 타이틀이 노출되는 영역입니다.</span>
                        <span className="text-[0.425rem]">기획전 서브 타이틀 영역입니다.</span>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-[100%]">
                    <div className="flex justify-center w-[80%] mt-5">
                        <div className="w-[20%]">
                            <img src="images/product-img.jpg" alt="brand" />
                        </div>
                        <div className="w-[80%]">
                            <div className="space-y-[0.275rem] font-bold text-[13px]">
                                <div className="leading-4 tracking-tighter">
                                    <span>[이솝] 제라늄 리프 하이드레이팅 바디...</span>
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
                    <div className="flex justify-center w-[80%] mt-5">
                        <div className="w-[20%]">
                            <img src="images/product-img.jpg" alt="brand" />
                        </div>
                        <div className="w-[80%]">
                            <div className="space-y-[0.275rem] font-bold text-[13px]">
                                <div className="leading-4 tracking-tighter">
                                    <span>[이솝] 제라늄 리프 하이드레이팅 바디...</span>
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
        </Exhibition>
    );
});

export const FormanProduct = React.forwardRef((props, ref) => {
    let { products } = props;

    return (
        <Forman {...product_settings_slide}>
            {products.map((x) => {
                return (
                    <div className="">
                        <ProductItem isShowTopTag="false" {...x} />
                    </div>
                );
            })}
        </Forman>
    );
});

// {getProductImg(20).map((img) => {
//     let imgURL = "/product/" + img.imgURL;

//     return (
//         <div className="flex flex-col justify-end relative h-[100%]">
//             <img src={imgURL} className="w-[12rem]"></img>
//             <div className="absolute w-[100%] bottom-0 left-0 text-[0.625rem]">
//                 <div className="pb-[1em]">
//                     <span>han**** | 2022/03/25</span>
//                 </div>
//                 <Divider variant="fullWidth" />
//                 <div className="pt-[1em]">
//                     <span className="inline-block w-[100%] text-[0.925rem] font-bold">
//                         최애 향수!
//                     </span>
//                     <span className="inline-block pt-[1em]">
//                         리뷰글이 노출되는 영역입니다. 최대 두줄까지 노출됩니다. 리뷰글이 노출되는
//                         영역입니다 최대...
//                     </span>
//                 </div>
//             </div>
//         </div>
//     );
// })}

export const ReppleProduct = React.forwardRef((props, ref) => {
    let { products } = props;

    return (
        <>
            <BrowserView>
                <Repple {...repple_slide}>
                    {products.map((x) => {
                        let imgURL = "/product/" + x.imgURL;

                        return (
                            <div style={{ width: "27.25rem" }}>
                                <div
                                    style={{ display: "flex !important" }}
                                    className="flex flex-col justify-center items-center"
                                >
                                    <img src={imgURL} />
                                    <div className="flex flex-col justify-end w-[100%]">
                                        <div className="flex flex-col text-left pb-[2em] text-[0.825rem]">
                                            <span className="inline-block text-[0.825rem] font-bold">
                                                7월 래플 이벤트
                                            </span>
                                            <div className="flex justify-between items-center mt-1">
                                                <div className="w-[65%]">
                                                    <span>
                                                        두줄 노출 가능 최대 40자까지 입력 가능합니다. 내용을
                                                        입력해주세요!
                                                    </span>
                                                </div>
                                                <div className="ml-auto">
                                                    <ThemeProvider theme={theme}>
                                                        <Button
                                                            color="black"
                                                            variant="contained"
                                                            endIcon={<ArrowRightAltIcon />}
                                                        >
                                                            응모하기
                                                        </Button>
                                                    </ThemeProvider>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Repple>
            </BrowserView>
            <MobileView>
                <Repple {...repple_slide}>
                    {products.map((x) => {
                        return (
                            <div className="">
                                <ProductItem isShowTopTag="false" {...x} />
                            </div>
                        );
                    })}
                </Repple>
            </MobileView>
        </>
    );
});

export const ReviewProduct = React.forwardRef((props, ref) => {
    let { products } = props;

    return (
        <>
            <BrowserView>
                <Review {...review_settings}>
                    {products.map((x) => {
                        let imgURL = "/product/" + x.imgURL;

                        return (
                            <div className="flex flex-col justify-end relative h-[100%]">
                                <img src={imgURL} className="w-[12rem]" />
                                <div className="absolute w-[100%] bottom-0 left-0 text-[0.625rem]">
                                    <div className="pb-[1em]">
                                        <span>han**** | 2022/03/25</span>
                                    </div>
                                    <Divider variant="fullWidth" />
                                    <div className="pt-[1em]">
                                        <span className="inline-block w-[100%] text-[0.925rem] font-bold">
                                            최애 향수!
                                        </span>
                                        <span className="inline-block pt-[1em]">
                                            리뷰글이 노출되는 영역입니다. 최대 두줄까지 노출됩니다. 리뷰글이 노출되는
                                            영역입니다 최대...
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Review>
            </BrowserView>
            <MobileView>
                <Review {...review_settings}>
                    {products.map((x) => {
                        let imgURL = "/product/" + x.imgURL;

                        return (
                            <div className="flex flex-col justify-end relative h-[100%]">
                                <img src={imgURL} className="w-[12rem]" />
                                <div className="absolute w-[100%] bottom-0 left-0 text-[0.625rem]">
                                    <div className="pb-[1em]">
                                        <span>han**** | 2022/03/25</span>
                                    </div>
                                    <Divider variant="fullWidth" />
                                    <div className="pt-[1em]">
                                        <span className="inline-block w-[100%] text-[0.925rem] font-bold">
                                            최애 향수!
                                        </span>
                                        <span className="inline-block pt-[1em]">
                                            리뷰글이 노출되는 영역입니다. 최대 두줄까지 노출됩니다. 리뷰글이 노출되는
                                            영역입니다 최대...
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Review>
            </MobileView>
        </>
    );
});

export default function ProductWrap(props) {
    let { products, rowCnt } = props;
    let arr = [];

    for (let i = 0; i < products.length; i += rowCnt) {
        let arr2 = [];

        for (let y = i; y < i + rowCnt; y++) {
            let product = products[y];
            arr2.push(product);
        }

        arr.push(arr2);
    }

    return (
        <>
            {arr.map((x) => {
                // console.log(x);

                return (
                    <ProductRow>
                        {x.map((y) => {
                            // console.log(y);

                            return <ProductItem {...y} />;
                        })}
                    </ProductRow>
                );
            })}
        </>
    );
}
