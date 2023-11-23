"use client";
import React, { Suspense, useContext } from "react";
import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";
import Login from "@/components/Login";
import { AuthContext } from "@/components/AuthContext";

const loading = () => (
    <div className="layer1 flex justify-center w-min mx-auto text-6xl items-center justify-center gap-4 px-8 py-4 my-40 glass h-min">
        <h2 className="py-4 text-3xl text-center shimmerb text-bblue-200">
            Loading...
        </h2>
    </div>
);
export default function Home() {
    const { isLoggedIn, login, logout } = useContext(AuthContext);
    return (
        <Suspense fallback={loading()}>
            <div className="spacer h-screen w-screen">
                {isLoggedIn ? (
                    <>
                        <Header />
                        <Dashboard />
                    </>
                ) : (
                    <Login />
                )}
            </div>
        </Suspense>
    );
}
