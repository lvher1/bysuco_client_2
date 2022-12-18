import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import StyledTitle from "../components/elements/StyledTitle";
import Pagination from "../components/elements/pagination.jsx";
import { TimeSaleContent, TimeSaleInfo } from "../components/elements/StyledContent.jsx";
import { ButtonBox } from "../components/elements/StyledButton";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

const timesale = () => {
    return (
        <>
            <BrowserView>
                <div className="w-[1280px] mx-auto">
                    <StyledTitle title="타임세일" subtitle="TIME SALE" />
                    <Routes>
                        <Route exact path="/" element={<TimeSaleContent />} />
                        <Route exact path="/detail" element={<TimeSaleInfo />} />
                    </Routes>
                </div>
            </BrowserView>
            <MobileView>
                <StyledTitle title="타임세일" subtitle="TIME SALE" />
                <ButtonBox />
                <div className="w-[90%] mx-auto pb-[56px] md:pb-[0px]">
                    <TimeSaleContent />
                </div>
            </MobileView>
        </>
    );
};

export default timesale;
