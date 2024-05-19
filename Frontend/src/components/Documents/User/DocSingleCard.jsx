import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import PdfToImage from "./PdfToImage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaDownload, FaBookReader, FaEye } from "react-icons/fa";

const DocSingleCard = ({ doc }) => {
  const [loading, setLoading] = useState(false);
  const navigateTo = useNavigate();

  const handleReadDocument = async () => {
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

  const handleDownloadDoc = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5005/${doc.path}`, {
        responseType: "blob",
      });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const downloadLink = document.createElement("a");
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.setAttribute("download", "document.pdf");

      document.body.appendChild(downloadLink);
      downloadLink.click();

      document.body.removeChild(downloadLink);
      window.URL.revokeObjectURL(downloadLink.href);

      setLoading(false);
    } catch (error) {
      console.error("Error downloading document:", error);
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg px-4 py-4 position-relative">
      <Card className="m-4" style={{ width: "22rem" }}>
        {doc.path && <PdfToImage documentPath={doc.path} />}
        <div className="card-body d-flex flex-column ">
          <p className="fw-bolder fs-4">{doc.title}</p>

          <p className="text-primary fs-5">
            {doc.path.substring(doc.path.lastIndexOf("\\") + 1)}
          </p>

          <div className="d-flex justify-content-end  ">
            <FaBookReader
              size={24}
              className="text-primary me-8"
              onClick={handleReadDocument}
              disabled={loading}
            >
              {loading ? "Loading..." : "Read"}
            </FaBookReader>
            <FaDownload
              size={24}
              className="text-primary"
              onClick={handleDownloadDoc}
              disabled={loading}
            >
              {loading ? "Loading..." : "Download"}
            </FaDownload>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DocSingleCard;
