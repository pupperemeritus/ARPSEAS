"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
const groups = [
    {
        id: 1,
        name: "Group 1",
        papers: [
            {
                id: 1,
                title: "Paper 1",
                author: "Author 1",
                notes: "Notes for Paper 1",
            },
            {
                id: 2,
                title: "Paper 2",
                author: "Author 2",
                notes: "Notes for Paper 2",
            },
        ],
    },
    {
        id: 2,
        name: "Group 2",
        papers: [
            {
                id: 3,
                title: "Paper 3",
                author: "Author 3",
                notes: "Notes for Paper 3",
            },
            {
                id: 4,
                title: "Paper 4",
                author: "Author 4",
                notes: "Notes for Paper 4",
            },
        ],
    },
];
const Groups = ({ groupName }) => {
    const router = useRouter();

    useEffect(() => {
        // Your logic to fetch and set the data for the specific group based on groupName
        const selectedGroup = groups.find((group) => group.name === groupName);

        if (!selectedGroup) {
            // Redirect to a default route or handle the case when the group is not found
            router.push("/" + groupName);
        }

        // Replace the following lines with your logic to use the selectedGroup data
        console.log("Selected Group:", selectedGroup);
    }, [groupName, router]);

    return <></>; // You can render your content here once you have the data for the selected group
};

export default Groups;
