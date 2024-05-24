import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteForm = ({ documentId }) => {
  const [showConfirmation, setShowConfirmation] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigateTo = useNavigate();
  const currentUrl = window.location.href;
  const handleConfirmDelete = async () => {
    try {
      setLoading(true);

      // Perform any necessary validation checks on the selectedDocumentId
      fetch(`http://localhost:3000/api/forms/delete/${documentId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("dataloaded")
          console.log(data)

          let link = "http://localhost:5173/customforms"
          setLoading(false);
          setShowConfirmation(false);
          console.log("Document deleted successfully");
          window.location.href = "http://localhost:5173/customforms"
        })
        .catch((error) => {
          // console.log("error while sending") 
          window.location.reload();
          console.error('Erro:', error);
        });
      // window.location.href = link
    } catch (error) {
      console.error(error);
      setLoading(false);
      console.log(error.message);
    } finally {
      setShowConfirmation(false);
    }
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <Modal show={showConfirmation} onHide={handleCancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this Form?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={handleConfirmDelete}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteForm;
