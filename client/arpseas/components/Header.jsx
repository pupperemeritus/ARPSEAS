import React from "react";
import Image from "next/image";
const Navbar = () => {
    return (
        <nav className="">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Image
                                className="h-8 w-8"
                                src="/arpseaslogocropped.png"
                                width={540}
                                height={540}
                                alt="Logo"
                            />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a
                                    href="/user"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Home
                                </a>
                                <a
                                    href="/about"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    About
                                </a>
                                <a
                                    href="/contact"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const Header = () => {
    return (
        <header className="bg-black border-b border-white">
            <span>
                {" "}
                <h1 className="pt-2 w-full text-4xl text-center font-bold text-">
                    arpseas
                </h1>
            </span>
            <span>
                <Navbar />
            </span>
        </header>
    );
};

export default Header;
