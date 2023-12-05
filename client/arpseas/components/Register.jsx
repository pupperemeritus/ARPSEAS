"use client";
import React, { useState } from "react";
import axios from "axios";
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
        setError(null);

        const user = {
            username: username,
            email: email,
            password: password,
        };

        try {
            const response = await axios.post(
                process.env.NEXT_PUBLIC_api_url + "register",
                user,
                {
                    httpsAgent: agent,
                }
            );

            console.log(response.data);
            router.push("/signin");
        } catch (error) {
            console.error(error);
            setError(
                error.response?.data ??
                    "An error occurred during registration. Please try again."
            );
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-4rem)] py-0 mx-auto my-0 justify-items-center forms">
            <form className="px-6 py-3 border rounded-lg shadow-lg border-emerald-300 bg-inherit">
                <h2 className="py-4 text-3xl font-bold text-center text-emerald-500">
                    Sign Up
                </h2>
                <div>
                    <label className="my-1 text-xl text-emerald-500">
                        Username:
                    </label>
                    <input
                        type="text"
                        value={username}
                        className="w-full px-4 py-2 my-1 bg-white border rounded-lg shadow-md outline-none form-control border-emerald-500"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label className="my-1 text-xl text-emerald-500">
                        Email:
                    </label>
                    <input
                        type="email"
                        value={email}
                        className="w-full px-4 py-2 my-1 bg-white border rounded-lg shadow-md outline-none form-control border-emerald-500"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="justify-center w-full h-10 my-3">
                    <label className="text-xl text-emerald-500">
                        Password:
                    </label>
                    <div className="flex justify-between w-full h-full bg-white border rounded-lg shadow-md form-control border-emerald-500">
                        <input
                            type={isPasswordVisible ? "text" : "password"}
                            value={password}
                            className="w-full px-4 py-2 bg-transparent outline-none"
                            onChange={(e) =>
                                setPassword(Sanitize(e.target.value))
                            }
                            onKeyDown={handleKeyPress}
                        />
                        <button
                            type="button"
                            className="text-xl text-white duration-300 border rounded-lg cursor-pointer bg-emerald-500 hover:bg-emerald-600"
                            onClick={() =>
                                setIsPasswordVisible(!isPasswordVisible)
                            }
                        >
                            {isPasswordVisible ? (
                                <EyeIcon className="w-6 h-5" />
                            ) : (
                                <EyeOffIcon className="w-6 h-5" />
                            )}
                        </button>
                    </div>
                </div>
                <div className="flex justify-center w-full my-4">
                    <button
                        type="button"
                        className="px-4 py-2 my-8 text-xl font-bold duration-300 border rounded-lg cursor-pointer text-emerald-500 border-emerald-500 hover:text-white hover:bg-emerald-500"
                        onClick={handleRegister}
                    >
                        Submit
                    </button>
                </div>
                {error && (
                    <div className="text-center text-red-500">{error}</div>
                )}
            </form>
        </div>
    );
}

export default Register;
