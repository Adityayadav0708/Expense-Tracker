import React from "react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar-group input-group">
      {/* Search expense */}
      <h2>Search Expense</h2>
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
