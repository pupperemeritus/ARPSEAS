import React, { useState } from "react";
import axios from "axios";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleRegister();
        }
    };

    const handleRegister = async () => {
        setError(null); // Reset any previous errors
        setIsLoading(true); // Show loading indicator

        // Make the API call to register the user
        try {
            const response = await axios.post(
                String(process.env.NEXT_PUBLIC_api_url) + "/register",
                {
                    email,
                    password,
                }
            );

            if (response.status === 200) {
                // Registration successful
                // Redirect the user to the dashboard or any other page
            } else {
                // Registration failed
                setError(response.data.message);
            }
        } catch (error) {
            console.error(error);
            setError("An error occurred during registration");
        }

        setIsLoading(false); // Hide loading indicator
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-4rem)] py-0 mx-auto my-0 justify-items-center">
            <form className="w-4/5 px-6 py-3 border-none lg:w-2/5 md:w-3/5 glass">
                <h2 className="py-4 text-3xl text-center shimmerb text-bblue-200">
                    Register
                </h2>
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
                <div className="justify-center w-full my-3 ">
                    <label className="text-xl text-bblue-200">Password:</label>
                    <div className="flex justify-between w-full py-2 pl-4 pr-2 my-1 border rounded-lg shadow-md form-control bg-void border-bgold-200">
                        <input
                            type="password"
                            value={password}
                            className="w-full outline-none bg-void"
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                    </div>
                </div>
                <div className="flex justify-center w-full">
                    <button
                        type="button"
                        className="px-4 py-2 my-2 text-xl font-bold duration-300 border rounded-lg cursor-pointer text-bblue-200 border-bgold-200 hover:text-bgold-200"
                        onClick={handleRegister}>
                        Register
                    </button>
                </div>
                {error && <div className="text-red-500">{error}</div>}
            </form>
        </div>
    );
}

export default Register;
