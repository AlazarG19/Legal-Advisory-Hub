import Header from "../../Header";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteDoc from "./DeleteDoc";
import BackButton from "./BackButton";
const CategoryDocuments = () => {
  const { categoryName } = useParams();
  const [selectedDocumentId, setSelectedDocumentId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const navigate = useNavigate();

  const handleDropdownUpdate = (documentId) => {
    navigate(`/docs/edit/${documentId}`);
  };
  const handleDropdownDelete = (documentId) => {
    setSelectedDocumentId(documentId);
    setShowConfirmation(true);
  };

  useEffect(() => {
    if (categoryName) {
      fetchDocuments(categoryName);
    }
  }, [categoryName]);

  const fetchDocuments = async (category) => {
    try {
      const response = await axios.get("http://localhost:5005/Docs");
      const data = response.data.data;

      if (!Array.isArray(data)) {
        console.error("Expected an array of documents but received:", data);
        return;
      }

      const filteredDocuments = data.filter(
        (doc) =>
          doc.category && doc.category.toLowerCase() === category.toLowerCase()
      );

      setDocuments(filteredDocuments);
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };
  const handleDropDownView = async (doc) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5005/${doc.path}`, {
        responseType: "blob",
      });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      window.open(url);

      setLoading(false);
    } catch (error) {
      console.error("Error reading document:", error);
      setLoading(false);
    }
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDocuments = documents.filter((doc) =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="">
      <Header />

      <div className="app-wrapper m-9 flex-row-fluid" id="kt_app_wrapper">
        <div class="card-body">
          <div class="card-title">
            <div className="d-flex align-items-center justify-content-between ">
              <BackButton />
              <div className="d-flex align-items-center justify-content-between position-relative my-1">
                <span className="svg-icon svg-icon-1 position-absolute ms-6">
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
                  data-kt-filemanager-table-filter="search"
                  className="form-control form-control-solid w-250px ps-15"
                  placeholder="Search Files & Folders"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
          </div>
          {loading}
          <h2 class="text-muted  text-center">{categoryName} Documents</h2>

          <table
            id="kt_file_manager_list"
            data-kt-filemanager-table="files"
            className="table align-middle table-row-dashed fs-6 gy-5"
          >
            <thead>
              <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                <th className="min-w-250px">Document </th>
                <th className="min-w-250px">Title</th>
                <th className="min-w-125px">Last Modified</th>
                <th className="w-125px"></th>
              </tr>
            </thead>
            <tbody className="fw-semibold text-gray-600 m-9">
              {filteredDocuments.map((doc) => {
                const filePath = doc.path;
                const fileName = filePath.substring(
                  filePath.lastIndexOf("\\") + 1
                );
                return (
                  <tr className="mb-6" key={doc._id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="svg-icon svg-icon-2x svg-icon-primary me-4">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
                              fill="currentColor"
                            />
                            <path
                              d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>

                        <a
                          href="#"
                          className="text-gray-800 text-hover-primary"
                        >
                          {fileName}
                        </a>
                      </div>
                    </td>
                    <td>{doc.title}</td>
                    <td>{doc.updatedAt}</td>

                    <td class="text-end">
                      <div class="d-flex justify-content-end">
                        <div class="ms-2">
                          <Dropdown>
                            <Dropdown.Toggle variant="light">
                              <span class="svg-icon svg-icon-5 m-0">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    x="10"
                                    y="10"
                                    width="4"
                                    height="4"
                                    rx="2"
                                    fill="currentColor"
                                  />
                                  <rect
                                    x="17"
                                    y="10"
                                    width="4"
                                    height="4"
                                    rx="2"
                                    fill="currentColor"
                                  />
                                  <rect
                                    x="3"
                                    y="10"
                                    width="4"
                                    height="4"
                                    rx="2"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item
                                onClick={() => handleDropdownUpdate(doc._id)}
                              >
                                Update
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => handleDropdownDelete(doc._id)}
                              >
                                Delete
                              </Dropdown.Item>
                              <Dropdown.Item
                                onClick={() => handleDropDownView(doc)}
                              >
                                View
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {showConfirmation && <DeleteDoc documentId={selectedDocumentId} />}
        </div>
      </div>
    </div>
  );
};

export default CategoryDocuments;
