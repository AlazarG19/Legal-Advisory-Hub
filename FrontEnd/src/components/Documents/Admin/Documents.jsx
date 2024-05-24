import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../Header";
import CreateDoc from "./CreateDoc";

const Documents = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Docs");
      const data = response.data.data;

      if (!Array.isArray(data)) {
        console.error("Invalid data format:", data);
        return;
      }

      const groupedCategories = {};
      data.forEach((doc) => {
        const category = doc.category;
        if (!groupedCategories[category]) {
          groupedCategories[category] = [];
        }
        groupedCategories[category].push(doc);
      });

      const categoriesArray = Object.keys(groupedCategories).map(
        (category) => ({
          name: category,
          files: groupedCategories[category],
        })
      );

      setCategories(categoriesArray);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-light">
      <Header />
      <div className="d-flex flex-wrap flex-stack mb-6 m-10 ps-15 pe-15 ">
        <h3 className="fw-bold my-2">
          Legal Documents
          <span className="fs-6 text-gray-400 fw-semibold ms-1">
            100+ resources
          </span>
        </h3>

        <CreateDoc />
      </div>
      <div className="container ">
        <div className="row ">
          {categories.map((category) => (
            <div key={category.name} className="col-lg-3 col-md-4 col-sm-6 ">
              <Link to={`/category/${encodeURIComponent(category.name)}`}>
                <div className="card-body d-flex justify-content-center text-center flex-column bg-white m-4 rounded p-5">
                  <div className="text-gray-800 text-hover-primary d-flex flex-column">
                    <div className="symbol symbol-100px mb-5">
                      <img
                        src="assets/media/svg/files/folder-document.svg"
                        className="theme-light-show"
                        alt="Folder img"
                      />
                      <img
                        src="assets/media/svg/files/folder-document-dark.svg"
                        className="theme-dark-show"
                        alt=""
                      />
                    </div>
                    <div className="fs-5 fw-bold mb-2">{category.name}</div>
                  </div>
                  <div className="fs-7 fw-semibold text-gray-400">
                    {category.files.length} files
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
