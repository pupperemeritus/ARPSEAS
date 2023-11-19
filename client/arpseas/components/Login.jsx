"use client";

import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid/";
import React, { useState } from "react";
import https from "https";

import Sanitize from "./santizeInput";
const agent = new https.Agent({ rejectUnauthorized: false });
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleLogin();
        }
    };
    const handleLogin = async () => {
        setError(null); // Reset any previous errors
        setIsLoading(true); // Show loading indicator

        const user = await axios.post(
            process.env.NEXT_PUBLIC_api_url + "login",
            {
                email,
                password,
            },
            {
                httpsAgent: agent,
            }
        );
        if (user.status === 200) {
            // Login successful
            // Redirect the user to the dashboard or any other page
        } else {
            // Login failed
            setError("Invalid email or password");
        }
        setIsLoading(false); // Hide loading indicator
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-4rem)] py-0 mx-auto my-0 justify-items-center forms">
            <form className="w-4/5 px-6 py-3 border-none lg:w-2/5 md:w-3/5 glass bg-void">
                <h2 className="py-4 text-3xl text-center shimmerb text-bblue-200">
                    Login
                </h2>
                <div>
                    <label className="my-1 text-xl text-bblue-200 ">
                        Email:
                    </label>
                    <input
                        type="email"
                        value={email}
                        className="w-full px-4 py-2 my-1 border rounded-lg shadow-md outline-none form-control bg-void border-bgold-200"
                        onChange={(e) => setEmail(Sanitize(e.target.value))}
                    />
                </div>
                <div className="justify-center w-full my-3">
                    <label className="text-xl text-bblue-200">Password:</label>
                    <div className="flex justify-between w-full py-2 pl-4 pr-2 my-1 border rounded-lg shadow-md form-control bg-void border-bgold-200">
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            value={password}
                            className="w-full outline-none bg-void"
                            onChange={(e) =>
                                setPassword(Sanitize(e.target.value))
                            }
                            onKeyDown={handleKeyPress}
                        />
                        <button
                            type="button"
                            className="text-xl duration-300 border rounded-lg cursor-pointer bg-bblue-200 text-void border-bgold-200 hover:bg-bblue-300"
                            onClick={() =>
                                setIsPasswordVisible(!isPasswordVisible)
                            }>
                            {isPasswordVisible ? (
                                <EyeIcon className="w-6 h-5 text-white-500" />
                            ) : (
                                <EyeOffIcon className="w-6 h-5 text-white-500" />
                            )}
                        </button>
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    <button
                        type="button"
                        className="px-4 py-2 my-2 text-xl font-bold duration-300 border rounded-lg cursor-pointer text-bblue-200 border-bgold-200 hover:text-bgold-200"
                        onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
