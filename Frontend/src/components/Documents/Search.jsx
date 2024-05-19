import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="d-flex align-items-center justify-content-between position-relative my-1">
      <form onSubmit={handleSearch} className="d-flex align-items-center">
        <input
          type="text"
          placeholder="Search document..."
          value={searchTerm}
          onChange={handleInputChange}
          className="border-0 form-control form-control-solid w-250px mr-2"
        />
        <button type="submit" className="btn btn-primary btn-sm">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
