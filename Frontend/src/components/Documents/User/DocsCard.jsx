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
    <div className="m-4">
      <Search onSearch={handleSearch} />
      {searchTerm !== "" ? (
        <div className="row row-cols-1 w-sm-100 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          {filteredDocs.length > 0 ? (
            filteredDocs.map((item) => (
              <div className="col" key={item._id}>
                <DocSingleCard doc={item} />
              </div>
            ))
          ) : (
            <div className="col">No search results found.</div>
          )}
        </div>
      ) : (
        Object.entries(
          docs.reduce((acc, curr) => {
            if (!acc[curr.category]) {
              acc[curr.category] = [];
            }
            acc[curr.category].push(curr);
            return acc;
          }, {})
        ).map(([category, docsArray]) => (
          <div className="mt-4" key={category}>
            <h1 className="fw-bold">{category}</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
              {docsArray.map((doc) => (
                <div className="col" key={doc._id}>
                  <DocSingleCard doc={doc} />
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DocsCard;
