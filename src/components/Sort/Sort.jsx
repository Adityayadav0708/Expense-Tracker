import React from "react";

function Sort({ sortBy, setSortBy }) {
  return (
    <div className="sort-group input-group">
      {/* Sort expenses */}
      <h2>Sort Expenses</h2>
      <select 
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="lowToHigh">Amount (Low to High)</option>
        <option value="highToLow">Amount (High to Low)</option>
        <option value="newest">Date (Newest to Oldest)</option>
        <option value="oldest">Date (Oldest to Newest)</option>
        <option value="aToZ">Title A -Z </option>
        <option value="zToA">Title Z - A</option>
      </select>
    </div>
  );
}

export default Sort;
