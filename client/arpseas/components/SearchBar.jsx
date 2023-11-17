import React, { useState } from "react";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        // Add your search logic here
        console.log("Searching for:", searchQuery);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <Image
                            className="h-8 w-8"
                            src="/arpseaslogo.png"
                            width={540}
                            height={540}
                            alt="Logo"
                        />
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {/* Add your search bar input here */}
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="px-3 py-2 rounded-md text-sm font-medium bg-gray-300 text-gray-700"
                                placeholder="Search..."
                            />
                            <button
                                onClick={handleSearch}
                                className="px-3 py-2 rounded-md text-sm font-medium bg-gray-300 text-gray-700 hover:bg-gray-700 hover:text-white">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
