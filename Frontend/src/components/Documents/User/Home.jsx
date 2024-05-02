import React, { useEffect, useState } from "react";
import axios from "axios";

import DocsCard from "./DocsCard";

const Home = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5005/Docs")
      .then((response) => {
        setDocs(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
      </div>

      <DocsCard docs={docs} />
    </div>
  );
};

export default Home;
