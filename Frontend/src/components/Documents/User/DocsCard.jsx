import React, { useState } from "react";
import DocSingleCard from "./DocSingleCard";

const DocsCard = ({ Docs }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDocs, setFilteredDocs] = useState([]);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filteredDocs = Docs.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDocs(filteredDocs);
  };

  if (!Docs || Docs.length === 0) {
    return <div>No documents available.</div>; // Handle case when Docs is undefined or empty
  }

  return (
    <div className="container">
      {searchTerm !== "" ? (
        <div className="row row-cols-2 row-cols-lg-3 row-cols-xl-4">
          {filteredDocs.length > 0 ? (
            filteredDocs.map((item) => (
              <DocSingleCard key={item._id} Doc={item} />
            ))
          ) : (
            <div>No search results found.</div>
          )}
        </div>
      ) : (
        // Render Docs by title
        Object.entries(
          Docs.reduce((acc, curr) => {
            if (!acc[curr.title]) {
              acc[curr.title] = [];
            }
            acc[curr.title].push(curr);
            return acc;
          }, {})
        ).map(([title, DocsArray]) => (
          <div className="mb-4" key={title}>
            <h1>{title}</h1>
            <div className="row row-cols-2 row-cols-lg-3 row-cols-xl-4">
              {DocsArray.map((Doc) => (
                <DocSingleCard key={Doc._id} Doc={Doc} />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DocsCard;
