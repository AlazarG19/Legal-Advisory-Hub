import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../Header";
import Search from "../Search";

const Documents = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5005/Docs");
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
    <div className="">
      <Header />
      <div className="d-flex flex-wrap flex-stack mb-6 m-8 ">
        <h3 className="fw-bold my-2">
          Legal Documents
          <span className="fs-6 text-gray-400 fw-semibold ms-1">
            100+ resources
          </span>
        </h3>

        <div className="d-flex my-2">
          <div className="d-flex align-items-center position-relative me-4">
            <span className="svg-icon svg-icon-3 position-absolute ms-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.5"
                  x="17.0365"
                  y="15.1223"
                  width="8.15546"
                  height="2"
                  rx="1"
                  transform="rotate(45 17.0365 15.1223)"
                  fill="currentColor"
                />
                <path
                  d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                  fill="currentColor"
                />
              </svg>
            </span>

            <input
              type="text"
              id="kt_filter_search"
              className="form-control form-control-sm border-body bg-body w-150px ps-10"
              placeholder="Search"
            />
          </div>

          <a
            href="../../demo1/dist/apps/file-manager/files.html"
            className="btn btn-primary btn-sm"
          >
            File Manager
          </a>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {categories.map((category) => (
            <div key={category.name} className="col-lg-3 col-md-4 col-sm-6">
              <Link to={`/category/${encodeURIComponent(category.name)}`}>
                <div className="card-body d-flex justify-content-center text-center flex-column ">
                  <div className="text-gray-800 text-hover-primary d-flex flex-column">
                    <div className="symbol symbol-175px mb-5">
                      <img
                        src="assets/media/svg/files/folder-document.svg"
                        className="theme-light-show"
                        alt=""
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
