import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { BrowserView, MobileView } from "react-device-detect";
import tw, { styled } from "twin.macro";
import { Link } from "react-router-dom";

const Menu = tw.div`
    flex justify-start items-center space-x-8
`;
const Menuli = tw.div`
    lg:text-[0.875rem] md:text-[0.475rem] flex w-[auto] justify-center items-center
`;

// 데이터
const navigation = {
    categories: [
        {
            id: "category",
            name: "CATEGORY",
            sections: [
                {
                    id: "skincare",
                    name: "SKIN CARE",
                    items: [
                        { name: "클렌징", href: "#" },
                        { name: "스킨 토너", href: "#" },
                        { name: "에센스 세럼", href: "#" },
                        { name: "로션 크림 밤", href: "#" },
                        { name: "오일 미스트", href: "#" },
                        { name: "마스크 팩", href: "#" },
                    ],
                },
                {
                    id: "makeup",
                    name: "MAKE UP",
                    items: [
                        { name: "립", href: "#" },
                        { name: "쿠션", href: "#" },
                        { name: "선케어 베이스", href: "#" },
                        { name: "파운데이션 컨실러", href: "#" },
                        { name: "파우더 하이라이터", href: "#" },
                        { name: "브로우 아이라이너", href: "#" },
                    ],
                },
                {
                    id: "body&hair",
                    name: "BODY & HAIR",
                    items: [
                        { name: "바디케어", href: "#" },
                        { name: "바디로션", href: "#" },
                        { name: "헤어샴푸", href: "#" },
                        { name: "헤어케어", href: "#" },
                    ],
                },
                {
                    id: "perfume",
                    name: "PERFUME",
                    items: [
                        { name: "향수", href: "#" },
                        { name: "향초", href: "#" },
                        { name: "디퓨저", href: "#" },
                        { name: "미니어쳐", href: "#" },
                        { name: "시향지", href: "#" },
                    ],
                },
                {
                    id: "men",
                    name: "MEN",
                    items: [
                        { name: "스킨케어", href: "#" },
                        { name: "향수", href: "#" },
                        { name: "바디&헤어", href: "#" },
                    ],
                },
                {
                    id: "accessory",
                    name: "ACCESSORY",
                    items: [{ name: "악세사리", href: "#" }],
                },
                {
                    id: "community",
                    name: "COMMUNITY",
                    items: [
                        { name: "공지사항", href: "#" },
                        { name: "상품후기", href: "#" },
                        { name: "FAQ", href: "#" },
                        { name: "Q&A", href: "#" },
                        { name: "향수 추천", href: "#" },
                    ],
                },
            ],
        },
    ],
    pages: [
        { name: "BRAND", href: "/brand" },
        { name: "타임세일", href: "/timesale" },
        { name: "래플이벤트", href: "/rapple" },
        { name: "NEW", href: "/new" },
        { name: "BEST", href: "/best" },
        { name: "EVENT", href: "/event" },
        { name: "COMMUNITY", href: "/community" },
        { name: "ByYou", href: "/byyou" },
    ],
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <BrowserView>
                <Menu>
                    <div className="flex w-full h-[50px] items-center">
                        {/* Flyout menus */}
                        <Popover.Group className="z-10 block self-stretch">
                            <div className="flex h-full md:space-x-4 lg:space-x-10">
                                {navigation.categories.map((category) => (
                                    <Popover key={category.name} className="flex">
                                        {({ open }) => (
                                            <>
                                                <div className="relative flex">
                                                    <Popover.Button
                                                        className={classNames(
                                                            "lg:text-[0.875rem] md:text-[0.475rem] relative z-10 -mb-px flex items-center pt-px font-medium transition-colors duration-200 ease-out",
                                                        )}
                                                    >
                                                        {category.name}
                                                    </Popover.Button>
                                                </div>

                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-200"
                                                    enterFrom="opacity-0"
                                                    enterTo="opacity-100"
                                                    leave="transition ease-in duration-150"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    {/* 서브메뉴 - 서브타이틀 */}
                                                    <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                                        <div
                                                            className="absolute inset-0 top-1/2 bg-white shadow"
                                                            aria-hidden="true"
                                                        />
                                                        <div className="relative bg-white">
                                                            <div className="mx-auto px-10">
                                                                <div className="px-10 pt-[1.875rem] pb-[3.125rem]">
                                                                    <div className="flex justify-between">
                                                                        {category.sections.map((section) => (
                                                                            <div key={section.name}>
                                                                                <p
                                                                                    id={`${section.name}-heading`}
                                                                                    className="font-bold text-gray-900 border-b pb-5"
                                                                                >
                                                                                    {section.name}
                                                                                </p>
                                                                                <ul
                                                                                    role="list"
                                                                                    aria-labelledby={`${section.name}-heading`}
                                                                                    className="mt-10 space-y-5"
                                                                                >
                                                                                    {section.items.map((item) => (
                                                                                        <li
                                                                                            key={item.name}
                                                                                            className="flex"
                                                                                        >
                                                                                            <a
                                                                                                href={item.href}
                                                                                                className="hover:text-gray-800"
                                                                                            >
                                                                                                {item.name}
                                                                                            </a>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Popover.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Popover>
                                ))}

                                {navigation.pages.map((page) => (
                                    <Menuli>
                                        <Link key={page.name} to={page.href}>
                                            {page.name}
                                        </Link>
                                    </Menuli>
                                ))}
                            </div>
                        </Popover.Group>
                    </div>
                </Menu>
            </BrowserView>
        </>
    );
}
