import React from "react";
import Header from "../components/header.jsx";
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";
import { BrowserView, MobileView } from "react-device-detect";

const page = () => {
    return (
        <>
            <BrowserView>
                <div>
                    <div />
                </div>
            </BrowserView>
            <MobileView>
                {/* 이안에 헤더 푸터 x */}
                <div>
                    <div />
                </div>
            </MobileView>
        </>
    );
};

export default page;
