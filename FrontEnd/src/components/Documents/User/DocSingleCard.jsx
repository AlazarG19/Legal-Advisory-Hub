import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import PdfToImage from "./PdfToImage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DocSingleCard = ({ doc }) => {
  const [loading, setLoading] = useState(false);
  const navigateTo = useNavigate();

  const handleReadDocument = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3000/${doc.path}`, {
        responseType: "blob", // Important for downloading files
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
      const response = await axios.get(`http://localhost:3000/${doc.path}`, {
        responseType: "blob", // Important for downloading files
      });
      const blob = new Blob([response.data], { type: "application/pdf" });

      // Create a temporary anchor element
      const downloadLink = document.createElement("a");
      downloadLink.href = window.URL.createObjectURL(blob);

      // Set the file name for the download
      downloadLink.setAttribute("download", "document.pdf");

      // Append the anchor to the body and click it programmatically
      document.body.appendChild(downloadLink);
      downloadLink.click();

      // Clean up
      document.body.removeChild(downloadLink);
      window.URL.revokeObjectURL(downloadLink.href);

      setLoading(false);
    } catch (error) {
      console.error("Error downloading document:", error);
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg px-4 py-2 m-4 position-relative shadow-hover-xl">
      <Card style={{ width: "22rem" }}>
        {doc.path && <PdfToImage documentPath={doc.path} />}
        <Card.Body>
          <Card.Title>{doc.title}</Card.Title>
          <Card.Title>{doc.path}</Card.Title>
          <Card.Text>{doc.description}</Card.Text>
        </Card.Body>
        <Card.Body>
          <button onClick={handleReadDocument} disabled={loading}>
            {loading ? "Loading..." : "Read"}
          </button>
          <button onClick={handleDownloadDoc} disabled={loading}>
            {loading ? "Loading..." : "download"}
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DocSingleCard;
