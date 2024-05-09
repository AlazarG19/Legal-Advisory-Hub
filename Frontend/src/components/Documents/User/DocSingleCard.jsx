import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import PdfToImage from "./PdfToImage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BookSingleCard = ({ doc }) => {
  const [documentUrl, setDocumentUrl] = useState("");

  const navigateTo = useNavigate();
  useEffect(() => {
    getPdf();
  }, []);
  const getPdf = async () => {
    const result = await axios.get("http://localhost:5005/get-files");
    console.log(result.data.data);
    setAllImage(result.data.data);
  };
  const showPdf = (id) => {
    // window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
    setPdfFile(`http://localhost:5005/uploads/${id}`);
  };
  const handleRead = () => {
    navigateTo(`/read-pdf/${doc._id}`);
  };

  return (
    <div className="rounded-lg px-4 py-2 m-4 position-relative shadow-hover-xl">
      <Card style={{ width: "22rem" }}>
        {doc.path && <PdfToImage documentPath={doc.path} />}
        <Card.Body>
          <Card.Title>{doc.title}</Card.Title>
          <Card.Title>{doc._id}</Card.Title>
          <Card.Text>{doc.description}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link>download</Card.Link>
          <Card.Link onClick={() => showPdf(doc._id)}>read</Card.Link>
        </Card.Body>
      </Card>
      {documentUrl && (
        <iframe src={documentUrl} style={{ width: "100%", height: "500px" }} />
      )}
    </div>
  );
};

export default BookSingleCard;
