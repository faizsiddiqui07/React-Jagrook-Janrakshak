import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="p-4 bg-white shadow-sm">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-12 p-3 border border-slate-300 bg-slate-100 rounded-l-md outline-none"
        />
        <button
          className="w-12 h-12 flex justify-center items-center bg-red-600 hover:bg-red-700 text-white rounded-r-md"
          aria-label="Search"
        >
          <AiOutlineSearch className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Search;
