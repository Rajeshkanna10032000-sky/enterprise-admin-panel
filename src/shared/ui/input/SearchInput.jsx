import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchInput({
  placeholder = "Search...",
  value,
  onChange,
}) {
  return (
    <div className="search-container">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="search-input"
      />
    </div>
  );
}
