import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "@/src/app/ui/acme-logo";

export default function SideNav() {
    return (
        <nav
            className="relative flex w-full flex-nowrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild lg:flex-wrap lg:justify-start lg:py-4"
            data-twe-navbar-ref>
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <button
                    className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
                    type="button"
                    data-twe-collapse-init
                    data-twe-target="#navbarSupportedContent8"
                    aria-controls="navbarSupportedContent8"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span
                        className="[&>svg]:w-7 [&>svg]:stroke-black/50">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor">
                            <path
                                fill-rule="evenodd"
                                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                clip-rule="evenodd" />
                        </svg>
                    </span>
                </button>

                <div
                    className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
                    data-twe-nav-item-ref>
                    <a
                        className="text-black lg:px-2"
                        aria-current="page"
                        href="#"
                        data-twe-nav-link-ref
                    >Home</a>
                </div>

                <div
                    className="!visible mt-2 hidden flex-grow basis-[100%] items-center justify-center lg:mt-0 lg:!flex lg:basis-auto"
                    id="navbarSupportedContent8"
                    data-twe-collapse-item>
                    <ul
                        className="list-style-none flex flex-col ps-0 lg:mt-1 lg:flex-row"
                        data-twe-navbar-nav-ref>
                        {/* <li
                            className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
                            data-twe-nav-item-ref>
                            <a
                                className="text-black lg:px-2"
                                aria-current="page"
                                href="#"
                                data-twe-nav-link-ref
                            >Home</a>
                        </li> */}
                        <li
                            className="flex item-center mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                            data-twe-nav-item-ref>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 inline-block ms-1">
                                <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                                <path fill-rule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clip-rule="evenodd" />
                            </svg>
                            <a
                                className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none lg:px-2"
                                href="#"
                                data-twe-nav-link-ref
                            >All Smartphones</a>
                        </li>
                        <li
                            className="flex item-center mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                            data-twe-nav-item-ref>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 inline-block ms-1">
                                <path d="M16.5 7.5h-9v9h9v-9Z" />
                                <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z" clip-rule="evenodd" />
                            </svg>
                            <a
                                className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none lg:px-2"
                                href="#"
                                data-twe-nav-link-ref
                            >Best Processor</a>
                        </li>
                        <li
                            className="flex item-center mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                            data-twe-nav-item-ref>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 inline-block ms-1">
                                <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                                <path fill-rule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                            </svg>
                            <a
                                className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none lg:px-2"
                                href="#"
                                data-twe-nav-link-ref
                            >Best Camera</a>

                        </li>
                        {/* <li
                            className="flex item-center mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                            data-twe-nav-item-ref>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 inline-block ms-1">
                                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                            </svg>

                            <a
                                className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none lg:px-2"
                                href="#"
                                data-twe-nav-link-ref
                            >Do The Quiz</a>
                        </li> */}
                    </ul>
                </div>
                <div
                    className="flex item-center mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                    data-twe-nav-item-ref>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 inline-block ms-1">
                        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                        <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                    </svg>

                    <a
                        className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none lg:px-2"
                        href="#"
                        data-twe-nav-link-ref
                    >Do The Quiz</a>
                </div>
            </div>
        </nav>
    );
}