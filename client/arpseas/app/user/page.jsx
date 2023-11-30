import React from "react";
import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";
const Dashboardcomp = () => {

    return (
 <div className="h-screen w-screen">
{/* <header className=" bg-gray-800 p-4 text-white ">
       <span className="text-4xl">arpseas</span> 
    </header> */}
    <Header/>
            <Dashboard/>
        </div>
    )
}
export default Dashboardcomp