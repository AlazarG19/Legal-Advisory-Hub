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
      <div className="d-flex flex-wrap flex-stack mb-6 m-10 ps-15 pe-15 ">
        <h3 className="fw-bold my-2">
          Legal Documents
          <span className="fs-6 text-gray-400 fw-semibold ms-1">
            100+ resources
          </span>
        </h3>
        <Search onSearch={handleSearch} />
      </div>

      {searchTerm !== "" ? (
        <div className="row row-cols-1  row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
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
          <div className="" key={category}>
            <h1 className="fw-bold ms-7">{category}</h1>
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