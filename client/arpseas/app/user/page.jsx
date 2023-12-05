"use client";
import React from "react";
import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboardcomp = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    if (status !== "authenticated") {
        console.log(status);
        router.push("/");
    }
    return (
        <div className="h-screen w-screen">
            <div>
                <Header />
                <Dashboard />
            </div>
        </div>
    );
};
export default Dashboardcomp;
