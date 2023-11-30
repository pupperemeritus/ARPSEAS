import React, { useState } from "react";

const SearchBar = ({ savedItems, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Filter saved items based on the search query
    const filteredItems = savedItems.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Pass the filtered items to the parent component
    onSearch(filteredItems);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search items..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};


const SavedItemsList = () => {
    const savedItems = [
        { id: 1, title: "Item 1", description: "Description 1" },
        { id: 2, title: "Item 2", description: "Description 2" },
        { id: 3, title: "Item 3", description: "Description 3" },
    ]
  return (
    <div>
      <h2>Saved Items</h2>
      {savedItems.length > 0 ? (
        <ul>
          {savedItems.map((item) => (
            <li key={item.id}>
              {/* Render your item details here */}
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items saved.</p>
      )}
    </div>
  );
};

export default SavedItemsList;
