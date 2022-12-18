import React from "react";
import tw from "twin.macro";
import { MobileView, BrowserView } from "react-device-detect";
import StyledTitle from "../components/elements/StyledTitle";
import { FourPromotion } from "../components/elements/StyledButton";
import { EventContent } from "./event/EventContent";
import Pagination from "../components/elements/pagination";

const ButtonWrapMo = tw.div`
    w-full flex text-[.875rem] border-b border-[#d3d3d3] font-bold
`;
const ButtonMo = tw.button`
    flex-1 h-[44px]
`;
const GreenButtonMo = tw.button`
    flex-1 h-[44px] border-b-2 border-[#006655] text-[#006655]
`;
const event = () => {
    return (
        <>
            <BrowserView>
                <div className="w-[1280px] mx-auto">
                    <StyledTitle title="EVENT" subtitle="BYSUCO" />

                    {/* 콘텐츠 3개 * 4줄 */}
                    <div>
                        <EventContent />
                    </div>
                    {/* 페이지네이션 */}
                </div>
            </BrowserView>
            <MobileView>
                <StyledTitle title="EVENT" subtitle="BYSUCO" />
                <ButtonWrapMo>
                    <GreenButtonMo>프로모션</GreenButtonMo>
                    <ButtonMo>프로모션</ButtonMo>
                    <ButtonMo>프로모션</ButtonMo>
                    <ButtonMo>프로모션</ButtonMo>
                </ButtonWrapMo>
                <div className="w-[90%] mx-auto pb-[56px] md:pb-[0px]">
                    <EventContent />
                </div>
            </MobileView>
        </>
    );
};

export default event;
