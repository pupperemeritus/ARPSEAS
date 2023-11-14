import React from "react";

const ItemComponent = ({ item }) => {
    return (
        <div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.content}</p>
            <p>{item.abstract}</p>
            <p>{item.summary}</p>
            <p>{item.notes}</p>
            <p>{item.published}</p>
            <p>{item.updated}</p>
            <p>{item.author.name}</p>
            <p>{item.comment}</p>
            <p>{item.journal_ref}</p>
        </div>
    );
};

export default ItemComponent;
