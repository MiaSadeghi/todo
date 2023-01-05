import { useState } from "react";
const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className="search-box">
      <span>
        <i className="fa-solid fa-magnifying-glass" />
      </span>
      <input
        type="text"
        placeholder="Search"
        onChange={handleSearchInput}
        value={searchInput}
        className="search-input"
      />
    </div>
  );
};

export default Search;
