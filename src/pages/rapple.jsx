import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import StyledTitle from "../components/elements/StyledTitle";
import Pagination from "../components/elements/pagination.jsx";
import { ButtonBox } from "../components/elements/StyledButton";
import { RappleContent } from "../components/elements/StyledContent.jsx";

const rapple = () => {
    return (
        <>
            <BrowserView>
                <div className="w-[1280px] mx-auto">
                    <StyledTitle title="래플 이벤트" subtitle="RAFFLE EVENT" />
                    <RappleContent />
                </div>
            </BrowserView>
            <MobileView>
                <div>
                    <StyledTitle title="래플 이벤트" subtitle="RAFFLE EVENT" />
                    <ButtonBox />
                    <div className="w-[90%] mx-auto pb-[56px] md:pb-[0px]">
                        <RappleContent />
                    </div>
                </div>
            </MobileView>
        </>
    );
};

export default rapple;
