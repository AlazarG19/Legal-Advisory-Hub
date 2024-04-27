import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryDocuments = () => {
  const { categoryName } = useParams(); // Get the URL parameter
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    console.log("Category changed to:", categoryName); // Debugging log
    if (categoryName) {
      // Guard against undefined
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

  return (
    <div>
      <h2>{categoryName ? `${categoryName} Documents` : "Documents"}</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Path</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc._id}>
              <td>{doc.title}</td>
              <td>{doc.description}</td>
              <td>{doc.path}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryDocuments;
