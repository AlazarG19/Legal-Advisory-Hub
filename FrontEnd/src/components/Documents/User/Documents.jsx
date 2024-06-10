import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../Header";
import CreateDoc from "../Admin/CreateDoc";
import Navigation from "../../Navigation"
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
    <div className="">
      <Navigation />
      {/* <Header /> */}
      {/* <!--begin::Toolbar--> */}
      <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
        {/* <!--begin::Toolbar container--> */}
        <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
          {/* <!--begin::Page title--> */}
          <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
            {/* <!--begin::Title--> */}
            <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">Document Database</h1>
            {/* <!--end::Title--> */}
            {/* <!--begin::Breadcrumb--> */}
            <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
              {/* <!--begin::Item--> */}
              <li className="breadcrumb-item text-muted">
                <a href="../../demo1/dist/index.html" className="text-muted text-hover-primary">Home</a>
              </li>
              {/* <!--end::Item--> */}
              {/* <!--begin::Item--> */}
              <li className="breadcrumb-item">
                <span className="bullet bg-gray-400 w-5px h-2px"></span>
              </li>
              {/* <!--end::Item--> */}
              {/* <!--begin::Item--> */}
              <li className="breadcrumb-item text-muted">Document Database</li>
              {/* <!--end::Item--> */}
            </ul>
            {/* <!--end::Breadcrumb--> */}
          </div>
          {/* <!--end::Page title--> */}
        </div>
        {/* <!--end::Toolbar container--> */}
      </div>
      {/* <!--end::Toolbar--> */}
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
              <Link to={`/docdb/category/${encodeURIComponent(category.name)}`}>
                <div className=" bg-light card-body d-flex justify-content-center text-center flex-column bg-white m-4 rounded p-5">
                  <div className="text-gray-800 text-hover-primary d-flex flex-column">
                    <div className="symbol symbol-100px mb-5">
                      <img
                        src="/assets/media/svg/files/folder-document.svg"
                        className="theme-light-show"
                        alt="Folder img"
                      />
                      <img
                        src="/assets/media/svg/files/folder-document-dark.svg"
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
