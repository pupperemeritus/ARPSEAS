"use client";
import React, { Suspense, useContext, useEffect } from "react";
import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";
import Login from "@/components/Login";
import Hero from "@/components/Hero";
import Link from "next/link";
import Image from "next/image";
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
            <div className="w-screen h-screen spacer layer1">
                {1 ? (
                    <>
                        <Header />
                        {/* <Dashboard /> */}
                        <div className="flex justify-center w-screen ">
                            <h1 className="text-5xl text-emerald-300 mt-[20vh]">
                                {/* Research rabbit hole? We've got the map 🔍 */}
                                Because research shouldn't be a chore.
                            </h1>
                        </div>
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
