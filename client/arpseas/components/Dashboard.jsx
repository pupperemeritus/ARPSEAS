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
            "id": ["http://arxiv.org/abs/1608.07166v1"],
            "updated": ["2016-08-25T14:24:38Z"],
            "published": ["2016-08-25T14:24:38Z"],
            "title": ["The Pegasus Tiles: an aperiodic pair of tiles"],
            "author": [
                {
                    name: ["Chaim Goodman-Strauss"],
                },
            ],
            "link": [
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
                        "term": "math.CO",
                        "scheme": "http://arxiv.org/schemas/atom",
                    },
                },
            ],
            "category": [
                {
                    $: {
                        term: "math.CO",
                        scheme: "http://arxiv.org/schemas/atom",
                    },
                },
            ],
            "abstract":
                "The Pegasus tiles are an aperiodic pair of tiles with tip to tip matching rules first drawn in 1996 We present them here",
        },
    ];

    return (
        <>
            <div className="text-white w-full h-max grid-container grid grid-cols-10 grid-rows-2 gap-1">
                <div className="grid-item bg-black p-4 col-span-2 row-span-1 rounded-bl-md rounded-br-md">
                    <h3 className="text-2xl font-semibold mb-2">Saved</h3>
                    <ul>
                        {savedItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.url}
                                    passHref
                                    legacyBehavior>
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
                <div className="grid-item bg-inherit  p-4 col-span-6 row-span-2">
                    <h3 className="text-center text-4xl font-semibold mb-2">
                        Find your paper here..
                    </h3>
                    <SearchBar />
                    <div className="max-h-96 overflow-y-auto">
                        <SearchResult data={pub} />
                    </div>
                </div>
                <div className="grid-item bg-black  p-4 col-span-2 row-span-2 rounded-bl-xl rounded-br-xl">
                    <h3 className="text-4xl font-semibold mb-2">History</h3>
                    <ul>
                        {histItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="grid-item bg-black  p-4 col-span-2 row-span-1 rounded-md ">
                    <h3 className="text-2xl font-semibold mb-2">Groups</h3>
                    <ul>
                        {groupItems.map((item, index) => (
                            <Link
                                href={`/groups/${item.name}`}
                                key={index}
                                groupName={item}>
                                <li key={index}>{item.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
