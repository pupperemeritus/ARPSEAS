import React from "react";

const Group = ({ name, userId, items }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>User ID: {userId}</p>
            <ul>
                {items.map((item) => (
                    <li key={item._id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Group;
