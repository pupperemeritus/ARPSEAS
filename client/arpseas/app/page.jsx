"use client";
import React, { Suspense, useContext, useEffect } from "react";
import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";
import Login from "@/components/Login";
import Hero from "@/components/Hero";
import Link from "next/link";
import { useRouter } from "next/navigation";
const loading = () => (
    <div className="flex items-center justify-center gap-4 px-8 py-4 mx-auto my-40 text-6xl w-min glass h-min">
        <h2 className="py-4 text-3xl text-center shimmerb text-bblue-200">
            Loading...
        </h2>
    </div>
);
export default function Home() {
    const router = useRouter();

    // useEffect(() => {
    //     if (isLoggedIn) {
    //         router.push("/user");
    //     }
    // }, [isLoggedIn]);

    return (
        <Suspense fallback={loading()}>
            <div className="w-screen h-screen">
                {1 ? (
                    <>
                        <header className="absolute top-0 left-0 right-0 z-20 p-4 text-white bg-transparent ">
                            <span className="text-4xl">arpseas</span>
                            <span className=""></span>
                        </header>
                        <Dashboard />
                    </>
                ) : (
                    <>
                        <Hero />
                        <Login />
                    </>
                )}
            </div>
        </Suspense>
    );
}
