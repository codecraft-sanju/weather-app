import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input);
      setInput("");
    }
  };

  return (
    <div className="w-full max-w-md flex items-center space-x-2">
      <input
        type="text"
        placeholder="Enter city name"
        className="w-full px-4 py-2 rounded-md text-black"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button
        className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-800 transition"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
