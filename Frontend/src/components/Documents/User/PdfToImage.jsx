import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PdfToImage({ documentPath }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    convertToImage();
  }, [documentPath]);

  const convertToImage = async () => {
    const response = await fetch(`http://localhost:5005/${path}`);
    const pdfData = await response.arrayBuffer();
    const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 0.5 });
    const canvas = document.createElement("canvas");
    const canvasContext = canvas.getContext("2d");
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    await page.render({ canvasContext, viewport }).promise;
    const imageData = canvas.toDataURL("image/png");
    setImage(imageData);
  };

  return <img src={image} alt="Document Thumbnail" />;
}

export default PdfToImage;
