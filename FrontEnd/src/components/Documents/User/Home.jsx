import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../Header";
import DocsCard from "./DocsCard";

const Home = () => {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/Docs")
      .then((response) => {
        setDocs(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-light ">
      <Header />
      <div className="d-flex flex-wrap flex-stack mb-6 m-10 ps-15 pe-15 ">
        <h3 className="fw-bold my-2">
          Legal Documents
          <span className="fs-6 text-gray-400 fw-semibold ms-1">
            100+ resources
          </span>
        </h3>
      </div>
      <div className="">
        {loading ? <div>Loading...</div> : <DocsCard docs={docs} />}
      </div>
    </div>
  );
};

export default Home;
