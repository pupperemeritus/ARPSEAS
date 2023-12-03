import React from "react";

const SearchResult = ({ data }) => {
    return (
        <div>
            {data.map((item) => (
                <div
                    key={item.id[0]}
                    className="mb-4">
                    <h2 className="text-xl font-semibold">{item.title[0]}</h2>
                    <p className="text-gray-600 mb-2">
                        Published: {item.published[0]}
                    </p>
                    <p className="text-gray-600 mb-2">
                        Author: {item.author[0].name[0]}
                    </p>
                    <p className="text-gray-800">{item.abstract}</p>
                    <div className="mt-2">
                        <a
                            href={
                                item.link.find((l) => l.$.title === "pdf").$
                                    .href
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline">
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
                            className="text-blue-500 hover:underline">
                            View on arXiv
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SearchResult;
