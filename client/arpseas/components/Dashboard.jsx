"use client";
import React, { useState } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import useFetchItems from "./useItem";
import useFetchGroups from "./useGroup";
import useFetchHistory from "./useHistory";

const Dashboard = () => {
    const { savedItems, loading, error } = useFetchItems();
    const { groups, loading1, error1 } = useFetchGroups();
    const { history, loading2, error2 } = useFetchHistory();
    const { searchResult, setSearchResult } = useState([
        {
            "id": [""],
            "updated": [""],
            "published": [""],
            "title": [""],
            "author": [{}],
            "link": [{}],
            "arxiv:primary_category": [{}],
            "category": [{}],
            "abstract": "",
        },
    ]);
    return (
        <>
            {/* <div className="grid w-full grid-cols-10 grid-rows-2 gap-1 text-white h-max grid-container spacer layer2">
                <div className="col-span-2 row-span-1 p-4 bg-black grid-item rounded-bl-md rounded-br-md">
                    <h3 className="mb-2 text-2xl font-semibold">Saved</h3>
                    <ul>
                        {savedItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.url} passHref legacyBehavior>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.title}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-span-6 row-span-2 p-4 grid-item bg-inherit">
                    <h3 className="mb-2 text-4xl font-semibold text-center">
                        Find your paper here..
                    </h3>
                    <SearchBar />
                    <div className="overflow-y-auto max-h-96">
                        <SearchResult data={pub} />
                    </div>
                </div>
                <div className="col-span-2 row-span-2 p-4 bg-black grid-item rounded-bl-xl rounded-br-xl">
                    <h3 className="mb-2 text-4xl font-semibold">History</h3>
                    <ul>
                        {histItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-span-2 row-span-1 p-4 bg-black rounded-md grid-item ">
                    <h3 className="mb-2 text-2xl font-semibold">Groups</h3>
                    <ul>
                        {groupItems.map((item, index) => (
                            <Link
                                href={`/groups/${item.name}`}
                                key={index}
                                groupName={item}
                            >
                                <li key={index}>{item.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div> */}

            <div className="flex w-screen spacer layer2">
                <div className=" w-[35%] flex flex-col items-start pl-10 pt-8 gap-4 ">
                    <div className="px-5 py-3 bg-gray-900 shadow-lg rounded-xl w-60">
                        <h3 className="mb-2 text-2xl font-semibold text-blue-500 ">
                            Saved
                        </h3>
                        <ul>
                            {savedItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.url}
                                        passHref
                                        legacyBehavior
                                        className="text-gray-300 ">
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            {item.title}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="px-5 py-3 bg-gray-900 shadow-lg rounded-xl w-60">
                        <h3 className="mb-2 text-2xl font-semibold text-blue-500">
                            Groups
                        </h3>
                        <ul>
                            {groups.map((item, index) => (
                                <Link
                                    href={`/groups/${item.name}`}
                                    key={index}
                                    groupName={item}
                                    className="text-gray-300 ">
                                    <li key={index}>{item.name}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>

                    <div className="px-5 py-3 bg-gray-900 shadow-lg rounded-xl w-60">
                        <h3 className="mb-2 text-2xl font-semibold text-blue-500">
                            History
                        </h3>
                        <ul>
                            {history.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-gray-300 ">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center pt-4">
                    <h3 className="mb-2 text-4xl font-semibold text-center">
                        Find your paper here..
                    </h3>
                    <SearchBar />
                    <div className="mt-4 overflow-y-auto max-h-96">
                        <SearchResult data={searchResult} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
