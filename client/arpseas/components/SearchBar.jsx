"use client";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
const SearchIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="black"
        className="bi bi-search"
        viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
    </svg>
);

const SearchBar = (setSearchResult) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [maxResults, setMaxResults] = useState(5);
    const [start, setStart] = useState(0);
    const [showOptions, setShowOptions] = useState(false);
    const buttonRef = useRef(null);

    const handleSearch = async () => {
        // Add your search logic here
        console.log("Searching for:", searchQuery);
        const searchRes = await axios.get(
            process.env.NEXT_PUBLIC_api_url + "search",
            {
                query: searchQuery,
                maxResults: maxResults,
                start: start,
            }
        );
        setSearchResult(searchRes.data);
    };

    const handleToggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleClickOutside = (event) => {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
            setShowOptions(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const options = ["Option 1", "Option 2", "Option 3"]; // Replace with your actual options

    return (
        <>
            <div className="flex flex-col ">
                <div className="flex items-center justify-center">
                    <div className="relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="py-2 pl-8 pr-3 my-6 text-sm font-medium text-gray-700 bg-gray-300 rounded-full w-96" // Adjust the width here
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <SearchIcon />
                        </div>
                    </div>
                    <button
                        ref={buttonRef}
                        onClick={handleSearch}
                        className="px-4 py-2 ml-2 font-medium text-gray-700 bg-gray-300 rounded-full">
                        Search
                    </button>
                </div>
                <div className="flex items-center justify-start gap-16 ">
                    <div>
                        <span className="text-gray-300 ">Max Results: </span>
                        <input
                            type="number"
                            value={maxResults}
                            onChange={(e) => setMaxResults(e.target.value)}
                            className="w-20 py-2 pl-8 pr-3 text-sm font-medium text-gray-700 bg-gray-300 rounded-full" // Adjust the width here
                        />
                    </div>
                    <div>
                        <span className="text-gray-300 ">Start: </span>
                        <input
                            type="number"
                            value={start}
                            onChange={(e) => setStart(e.target.value)}
                            className="w-20 py-2 pl-8 pr-3 text-sm font-medium text-gray-700 bg-gray-300 rounded-full" // Adjust the width here
                        />
                    </div>
                </div>
            </div>
            {/* {showOptions && (
                <div
                    className="absolute mt-2 border rounded-md shadow-md"
                    style={{ width: buttonRef.current.offsetWidth }}>
                    <ul className="p-0 list-none">
                        {options.map((option) => (
                            <li
                                key={option}
                                className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )} */}
        </>
    );
};

export default SearchBar;
