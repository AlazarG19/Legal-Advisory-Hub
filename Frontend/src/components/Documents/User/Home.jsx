import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../Header";
import DocsCard from "./DocsCard";
import docimg from "./assets/docimg.png";
const Home = () => {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5005/Docs")
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
    <div className="">
      <Header />
      <div
        className="bg-image d-flex justify-content-end   align-items-center"
        style={{
          backgroundImage: `url(${docimg})`,
          height: "400px",
        }}
      >
        <div className="d-flex flex-wrap  mb-6 m-10 ps-25 pe-25 w-50 ">
          <h1 className="fw-bold my-2 text-white display-lg-5  display-6 lh-base mb-20">
            A Vast Collection of Legal Documents at Your Fingertips
          </h1>
        </div>
      </div>

      <div className="">
        {loading ? <div>Loading...</div> : <DocsCard docs={docs} />}
      </div>
    </div>
  );
};

export default Home;
