"use client";

import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid/";
import React, { useState } from "react";
import axios from "axios";
import Sanitize from "./santizeInput";

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
    setError(null);
    setIsLoading(true);

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_api_url + "login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        // Login successful, redirect the user
        // You can add your redirection logic here
      }
    } catch (error) {
      setError("Invalid email or password");
    }

    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-4rem)] py-0 mx-auto my-0 justify-items-center forms">
      <form className=" px-6 py-3 border-none  bg-inherit">
        <h2 className="py-4 text-3xl text-center text-emerald-500 font-bold">
          Sign In
        </h2>
        <div>
          <label className="my-1 text-xl text-emerald-500">Email:</label>
          <input
            type="email"
            value={email}
            className="w-full px-4 py-2 my-1 border rounded-lg shadow-md outline-none form-control bg-white border-emerald-500"
            onChange={(e) => setEmail(Sanitize(e.target.value))}
          />
        </div>
        <div className="justify-center w-full my-3">
          <label className="text-xl text-emerald-500">Password:</label>
          <div className="flex justify-between w-full py-2 pl-4 pr-2 my-1 border rounded-lg shadow-md form-control bg-white border-emerald-500">
            <input
              type={isPasswordVisible ? "text" : "password"}
              value={password}
              className="w-full outline-none bg-transparent"
              onChange={(e) => setPassword(Sanitize(e.target.value))}
              onKeyDown={handleKeyPress}
            />
            <button
              type="button"
              className="text-xl duration-300 border rounded-lg cursor-pointer bg-emerald-500 text-white hover:bg-emerald-600"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? (
                <EyeIcon className="w-6 h-5" />
              ) : (
                <EyeOffIcon className="w-6 h-5" />
              )}
            </button>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <button
            type="button"
            className="px-4 py-2 my-2 text-xl font-bold duration-300 border rounded-lg cursor-pointer text-emerald-500 border-emerald-500 hover:text-white hover:bg-emerald-500"
            onClick={handleLogin}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </div>
        {error && (
          <div className="text-red-500 text-center mt-2">{error}</div>
        )}
      </form>
    </div>
  );
};

export default Login;
