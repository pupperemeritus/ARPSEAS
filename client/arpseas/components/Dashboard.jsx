"use client";
import React from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

const Dashboard = () => {
    const savedItems = [
        {
            title: "Item 1",
            url: "https://www.google.com/",
        },
        {
            title: "Item 2",
            url: "https://www.google.com/",
        },
        {
            title: "Item 3",
            url: "https://www.google.com/",
        },
    ];
    const groupItems = [
        { id: 1, name: "Group 1" },
        { id: 2, name: "Group 2" },
        { id: 3, name: "Group 3" },
    ]; // Replace with your actual saved items data
    const histItems = ["Item 1", "Item 2", "Item 3"]; // Replace with your actual saved items data

    const pub = [
        {
            id: ["http://arxiv.org/abs/1608.07166v1"],
            updated: ["2016-08-25T14:24:38Z"],
            published: ["2016-08-25T14:24:38Z"],
            title: ["The Pegasus Tiles: an aperiodic pair of tiles"],
            author: [
                {
                    name: ["Chaim Goodman-Strauss"],
                },
            ],
            link: [
                {
                    $: {
                        href: "http://arxiv.org/abs/1608.07166v1",
                        rel: "alternate",
                        type: "text/html",
                    },
                },
                {
                    $: {
                        title: "pdf",
                        href: "http://arxiv.org/pdf/1608.07166v1",
                        rel: "related",
                        type: "application/pdf",
                    },
                },
            ],
            "arxiv:primary_category": [
                {
                    $: {
                        "xmlns:arxiv": "http://arxiv.org/schemas/atom",
                        term: "math.CO",
                        scheme: "http://arxiv.org/schemas/atom",
                    },
                },
            ],
            category: [
                {
                    $: {
                        term: "math.CO",
                        scheme: "http://arxiv.org/schemas/atom",
                    },
                },
            ],
            abstract:
                "The Pegasus tiles are an aperiodic pair of tiles with tip to tip matching rules first drawn in 1996 We present them here",
        },
    ];

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
                                        className="text-gray-300 "
                                    >
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

                    <div className="px-5 py-3 bg-gray-900 shadow-lg rounded-xl w-60">
                        <h3 className="mb-2 text-2xl font-semibold text-blue-500">
                            Groups
                        </h3>
                        <ul>
                            {groupItems.map((item, index) => (
                                <Link
                                    href={`/groups/${item.name}`}
                                    key={index}
                                    groupName={item}
                                    className="text-gray-300 "
                                >
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
                            {histItems.map((item, index) => (
                                <li key={index} className="text-gray-300 ">
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
                        <SearchResult data={pub} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
