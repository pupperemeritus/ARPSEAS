import React, { useState, useRef, useEffect } from "react";

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="black"
    className="bi bi-search"
    viewBox="0 0 16 16"
  >
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
  </svg>
);

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const buttonRef = useRef(null);

  const handleSearch = () => {
    // Add your search logic here
    console.log("Searching for:", searchQuery);
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
      <div className="flex justify-center items-center">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className=" my-6 pl-8 pr-3  py-2 rounded-full text-sm font-medium bg-gray-300 text-gray-700 w-96" // Adjust the width here
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon />
          </div>
        </div>
        <button
          ref={buttonRef}
          onClick={handleToggleOptions}
          className="ml-2 px-4 py-2 rounded-full bg-gray-300 text-gray-700 font-medium"
        >
          Options
        </button>
      </div>
      {showOptions && (
        <div
          className="absolute mt-2 border rounded-md shadow-md"
          style={{ width: buttonRef.current.offsetWidth }}
        >
          <ul className="list-none p-0">
            {options.map((option) => (
              <li key={option} className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SearchBar;
