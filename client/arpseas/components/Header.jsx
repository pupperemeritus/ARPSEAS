import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
const Navbar = () => {
    const { data: session, status } = useSession();

    return (
        <nav className="">
            <div className="h-20 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    <div className="flex-shrink-0 ">
                        <Link
                            href="/"
                            className="flex items-center ">
                            <Image
                                className="w-10 h-10"
                                src="/arpseaslogocropped.png"
                                width={540}
                                height={540}
                                alt="Logo"
                            />

                            <h1 className="ml-2 text-4xl font-bold text-center text-">
                                arpseas
                            </h1>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center ml-10 space-x-4">
                            <a
                                href="/"
                                className="px-3 py-2 text-lg font-medium text-gray-300 duration-300 rounded-md hover:bg-gray-700 hover:text-white">
                                Home
                            </a>
                            {status === "authenticated" && (
                                <a
                                    href="/user"
                                    className="px-3 py-2 text-lg font-medium text-gray-300 duration-300 rounded-md hover:bg-gray-700 hover:text-white">
                                    Dashboard
                                </a>
                            )}
                            <a
                                href="/signin"
                                className="px-3 py-2 text-lg font-medium text-gray-300 duration-300 rounded-md hover:bg-gray-700 hover:text-white">
                                Login
                            </a>
                            <a
                                href="/signup"
                                className="px-3 py-2 text-lg font-medium text-gray-300 duration-300 rounded-md hover:bg-gray-700 hover:text-white">
                                Sign up
                            </a>
                            <button
                                onClick={signOut}
                                className="px-3 py-2 text-lg font-medium text-gray-300 duration-300 rounded-md hover:bg-gray-700 hover:text-white">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const Header = () => {
    return (
        <header className="bg-gray-900 shadow-xl border-emerald-300">
            <span></span>
            <span>
                <Navbar />
            </span>
        </header>
    );
};

export default Header;
