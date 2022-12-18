import tw from "twin.macro";
import * as React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import styled from "styled-components";
import muiButton from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const CustomBtn = styled.button`
    border: 1px solid;
    font-weight: 700;
    width: ${(props) => props.width || "100px"};
    height: ${(props) => props.height || "30px"};
    bordercolor: ${(props) => props.borderColor || "#d3d3d3"};
    color: ${(props) => props.color || "#d3d3d3"};
`;
export default function CustomButton(props) {
    return (
        <div>
            <CustomBtn color={props.color} border-color={props.borderColor}>
                {props.name}
            </CustomBtn>
        </div>
    );
}

// 전체 진행중 종료
const ButtonWrap = tw.div`
    flex justify-center mb-[2.5rem] space-x-[.625rem]
`;
const ButtonWrapMo = tw.div`
    w-full flex text-[.875rem] border-b border-[#d3d3d3] font-bold
`;
const Button = tw.button`
    border border-[#d3d3d3] w-[120px] h-[42px] flex justify-center items-center 
    rounded-[.1875rem] text-[17px] text-[#d3d3d3] font-bold
`;
const ButtonMo = tw.button`
    flex-1 h-[44px]
`;
const GreenButton = tw.button`
    border w-[120px] h-[42px] flex justify-center items-center rounded-[.1875rem]
    text-[17px] font-bold text-[#006655] border-[#006655]
`;
const GreenButtonMo = tw.button`
    flex-1 h-[44px] border-b-2 border-[#006655] text-[#006655]
`;

const BuscoButton = styled(muiButton)`
    width: 120px;
    height: 42px;
    &:not(:disabled) {
        border-color: green !important;
        color: green !important;
    }
`;

export function ButtonBox() {
    return (
        <>
            <BrowserView>
                <Stack direction="row" spacing={2} className="flex justify-center mb-[80px]">
                    <BuscoButton variant="outlined">전체</BuscoButton>
                    <BuscoButton variant="outlined" disabled>
                        진행중
                    </BuscoButton>
                    <BuscoButton variant="outlined" disabled>
                        종료
                    </BuscoButton>
                </Stack>
            </BrowserView>
            <MobileView>
                <ButtonWrapMo>
                    <GreenButtonMo>전체</GreenButtonMo>
                    <ButtonMo>진행중</ButtonMo>
                    <ButtonMo>종료</ButtonMo>
                </ButtonWrapMo>
            </MobileView>
        </>
    );
}
// EVENT
export function FourPromotion() {
    return (
        <>
            <BrowserView>
                <ButtonWrap>
                    <GreenButton>프로모션#1</GreenButton>
                    <Button>프로모션#2</Button>
                    <Button>프로모션#3</Button>
                    <Button>프로모션#4</Button>
                </ButtonWrap>
            </BrowserView>
            <MobileView>
                <div>
                    <div />
                </div>
                {/* <ButtonWrapMo>
                    <GreenButtonMo>전체</GreenButtonMo>
                    <ButtonMo>진행중</ButtonMo>
                    <ButtonMo>종료</ButtonMo>
                </ButtonWrapMo> */}
            </MobileView>
        </>
    );
}
