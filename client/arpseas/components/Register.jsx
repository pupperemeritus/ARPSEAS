"use client";
import React, { useState } from "react";
import axios from "axios";
import { redirect } from "next/navigation";
import Sanitize from "./santizeInput";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid/";
import https from "https";
import { useRouter } from "next/navigation";

const agent = new https.Agent({ rejectUnauthorized: false });

function Register() {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleRegister();
        }
    };

    const handleRegister = async () => {
        setError(null); // Reset any previous errors
        // Make the API call to register the user
        const user = {
            username: username,
            email: email,
            password: password,
        };
        const response = await axios
            .post(process.env.NEXT_PUBLIC_api_url + "register", user, {
                httpsAgent: agent,
            })
            .then(() => {
                router.push("/");
            })
            .catch((error) => {
                console.log(error);
                setError(
                    error.response?.data ??
                        "An error occurred during registration"
                );
            });
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-4rem)] py-0 mx-auto my-0 justify-items-center forms">
            <form className="w-4/5 px-6 py-3 border-none lg:w-2/5 md:w-3/5 glass">
                <h2 className="py-4 text-3xl text-center shimmerb text-bblue-200">
                    Register
                </h2>
                <div>
                    <label className="my-1 text-xl text-bblue-200 ">
                        Username:
                    </label>
                    <input
                        type="email"
                        value={username}
                        className="w-full px-4 py-2 my-1 border rounded-lg shadow-md outline-none form-control bg-void border-bgold-200"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label className="my-1 text-xl text-bblue-200 ">
                        Email:
                    </label>
                    <input
                        type="email"
                        value={email}
                        className="w-full px-4 py-2 my-1 border rounded-lg shadow-md outline-none form-control bg-void border-bgold-200"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex-row justify-between">
                    <div className="h-10 justify-center w-full ">
                        <label className="text-xl text-bblue-200">
                            Password:
                        </label>
                        <div className="flex justify-center w-full h-full border rounded-lg shadow-md form-control bg-void border-bgold-200">
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
                                    <EyeIcon className="w-6 h-5 text-gray-500" />
                                ) : (
                                    <EyeOffIcon className="w-6 h-5 text-gray-500" />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center w-full my-8">
                        <button
                            type="button"
                            className="px-4 py-2 my-2 text-xl font-bold duration-300 border rounded-lg cursor-pointer text-bblue-200 border-bgold-200 hover:text-bgold-200"
                            onClick={handleRegister}>
                            Register
                        </button>
                    </div>
                </div>
                {error && <div className="text-red-500">{error}</div>}
            </form>
        </div>
    );
}

export default Register;
