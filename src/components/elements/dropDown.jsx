import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Example() {
    return (
        <div className="w-56">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        전체보기
                        <KeyboardArrowDownIcon className="ml-5 -mr-1 h-5 w-5" aria-hidden="true" />
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
                    <Menu.Items className="absolute left-[.625rem] mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                        <div className="px-1 pt-[.625rem]">
                            <Menu.Item>
                                <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-[#AAAAAA] hover:text-[#000] hover:font-bold">
                                    전체보기
                                </button>
                            </Menu.Item>
                            <Menu.Item>
                                <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-[#AAAAAA] hover:text-[#000] hover:font-bold">
                                    SKIN CARE
                                </button>
                            </Menu.Item>
                        </div>
                        <div className="px-1">
                            <Menu.Item>
                                <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-[#AAAAAA] hover:text-[#000] hover:font-bold">
                                    MAKE UP
                                </button>
                            </Menu.Item>
                            <Menu.Item>
                                <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-[#AAAAAA] hover:text-[#000] hover:font-bold">
                                    BODY & HAIR
                                </button>
                            </Menu.Item>
                        </div>
                        <div className="px-1">
                            <Menu.Item>
                                <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-[#AAAAAA] hover:text-[#000] hover:font-bold">
                                    PERUME
                                </button>
                            </Menu.Item>
                        </div>
                        <div className="px-1">
                            <Menu.Item>
                                <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-[#AAAAAA] hover:text-[#000] hover:font-bold">
                                    MEN
                                </button>
                            </Menu.Item>
                        </div>
                        <div className="px-1 pb-[.625rem]">
                            <Menu.Item>
                                <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-[#AAAAAA] hover:text-[#000] hover:font-bold">
                                    ACCESSORY
                                </button>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}
export function FullSelect() {
    return (
        <div className="mx-[20px] w-full border border-gray-600 mx-auto">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        전체보기
                        <KeyboardArrowDownIcon className="ml-5 -mr-1 h-5 w-5" aria-hidden="true" />
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
                    <Menu.Items className="absolute left-[.625rem] mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                        <div className="px-1 pt-[.625rem]">
                            <Menu.Item>
                                <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-[#AAAAAA] hover:text-[#000] hover:font-bold">
                                    전체보기
                                </button>
                            </Menu.Item>
                            <Menu.Item>
                                <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-[#AAAAAA] hover:text-[#000] hover:font-bold">
                                    SKIN CARE
                                </button>
                            </Menu.Item>
                        </div>
                        <div className="px-1">
                            <Menu.Item>
                                <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-[#AAAAAA] hover:text-[#000] hover:font-bold">
                                    MAKE UP
                                </button>
                            </Menu.Item>
                            <Menu.Item>
                                <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-[#AAAAAA] hover:text-[#000] hover:font-bold">
                                    BODY & HAIR
                                </button>
                            </Menu.Item>
                        </div>
                        <div className="px-1">
                            <Menu.Item>
                                <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-[#AAAAAA] hover:text-[#000] hover:font-bold">
                                    PERUME
                                </button>
                            </Menu.Item>
                        </div>
                        <div className="px-1">
                            <Menu.Item>
                                <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-[#AAAAAA] hover:text-[#000] hover:font-bold">
                                    MEN
                                </button>
                            </Menu.Item>
                        </div>
                        <div className="px-1 pb-[.625rem]">
                            <Menu.Item>
                                <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-[#AAAAAA] hover:text-[#000] hover:font-bold">
                                    ACCESSORY
                                </button>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}
