import React from "react";

function Filter({ searchCategory, setSearchCategory }) {
  return (
    <div className="filter-group input-group">
      {/* Search by category */}
      <h2>Search by Category</h2>
      <select 
        value={searchCategory}
        onChange={(e) => setSearchCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
      </select>
    </div>
  );
}

export default Filter;
