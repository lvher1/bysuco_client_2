import React from "react";
import tw, { styled } from "twin.macro";
import AddIcon from "@mui/icons-material/Add";
import { BrowserView, MobileView } from "react-device-detect";

const TitleBox = tw.div`
    flex flex-col justify-center items-center
    w-full h-[7.375rem] md:h-[9.375rem] space-y-[.3125rem]
`;
const Subtitle = tw.div`
    md:text-[15px] text-[1.125rem] underline text-[#80A298]
`;
const Title = tw.div`
    text-[1.375rem] font-bold tracking-tighter
`;

const Title_WEB = styled.div.attrs({
    className: "flex w-[100%] relative items-center text-[1.375rem] font-bold tracking-tighter",
})`
    & {
        .title {
            margin: 0 auto;
            font-size: 36px;
        }
        .more {
            ${tw`flex w-[4.25rem] absolute right-1 items-center border-b-2 border-black`},
            & .span {
                font-size: 15px;
                font-weight: 600;
            }
        }
    }
`;

const StyledTitle = (props) => {
    const { title, subtitle } = props;
    return (
        <>
            <BrowserView>
                <TitleBox>
                    <Subtitle>{subtitle}</Subtitle>
                    <Title_WEB>
                        <span className="title">{title}</span>
                        {props.isMore == "true" ? (
                            <div className="more">
                                <span>더보기</span>
                                <AddIcon className="ml-auto" sx={{ fontSize: "0.825rem" }} />
                            </div>
                        ) : (
                            ""
                        )}
                    </Title_WEB>
                </TitleBox>
            </BrowserView>
            <MobileView>
                <TitleBox>
                    <Subtitle>{subtitle}</Subtitle>
                    <Title>{title}</Title>
                </TitleBox>
            </MobileView>
        </>
    );
};

export default StyledTitle;
