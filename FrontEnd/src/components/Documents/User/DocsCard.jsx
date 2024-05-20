import React, { useState } from "react";
import DocSingleCard from "./DocSingleCard";
import Search from "../Search";

const DocsCard = ({ docs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDocs, setfilteredDocs] = useState([]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filteredDocs = docs.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setfilteredDocs(filteredDocs);
  };

  return (
    <div className="">
      <Search onSearch={handleSearch} />
      {searchTerm !== "" ? (
        <div className="grid grid-cols-sm-2 grid-cols-lg-3 grid-cols-xl-4">
          {filteredDocs.length > 0 ? (
            filteredDocs.map((item) => (
              <DocSingleCard key={item._id} doc={item} />
            ))
          ) : (
            <div>No search results found.</div>
          )}
        </div>
      ) : (
        // Render books by title
        Object.entries(
          docs.reduce((acc, curr) => {
            if (!acc[curr.category]) {
              acc[curr.category] = [];
            }
            acc[curr.category].push(curr);
            return acc;
          }, {})
        ).map(([category, docsArray]) => (
          <div className="" key={category}>
            <h1>{category}</h1>
            <div className="d-flex flex-wrap  align-items-center">
              {docsArray.map((doc) => (
                <DocSingleCard key={doc._id} doc={doc} />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DocsCard;
