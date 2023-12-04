import React from "react";

const SearchResult = ({ data }) => {
    return (
        <div>
            {data.map((item) => (
                <div
                    key={item.id[0]}
                    className="px-8 py-4 mb-4 shadow-lg bg-[#444444] rounded-xl "
                >
                    <h2 className="mb-2 text-xl font-semibold text-emerald-300">
                        {item.title[0]}
                    </h2>
                    <p className="mb-2 text-gray-400 ">
                        Published: {item.published[0]}
                    </p>
                    <p className="mb-2 text-gray-400">
                        Author: {item.author[0].name[0]}
                    </p>
                    <p className="text-gray-200">{item.abstract}</p>
                    <div className="mt-2">
                        <a
                            href={
                                item.link.find((l) => l.$.title === "pdf").$
                                    .href
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Read PDF
                        </a>
                        <span className="mx-2">|</span>
                        <a
                            href={
                                item.link.find((l) => l.$.rel === "alternate").$
                                    .href
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            View on arXiv
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SearchResult;
