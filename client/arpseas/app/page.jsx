"use client";
import React, { Suspense, useContext, useEffect } from "react";
import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";
// import Login from "@/components/Login";
import { AuthContext } from "@/components/AuthContext";
import Hero from "@/components/Hero";
import Link from "next/link";
import { useRouter } from "next/navigation";
const loading = () => (
    <div className="flex justify-center w-min mx-auto text-6xl items-center justify-center gap-4 px-8 py-4 my-40 glass h-min">
        <h2 className="py-4 text-3xl text-center shimmerb text-bblue-200">
            Loading...
        </h2>
    </div>
);
export default function Home() {
    const { isLoggedIn, login, logout } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
        if (isLoggedIn) {
            router.push('/user');
        }
    }, [isLoggedIn]);

    return (
        <Suspense fallback={loading()}>
            <div className="h-screen w-screen">
                {isLoggedIn ? (
                    <>
                        <header className="absolute top-0 left-0 right-0 bg-transparent z-20 p-4 text-white ">
                            <span className="text-4xl">arpseas</span>
                            <span className=""></span>

                        </header>
                        <Dashboard />
                    </>
                ) : (
                    <>
                        <Hero />
                    </>
                )}
            </div>
        </Suspense>
    );
}