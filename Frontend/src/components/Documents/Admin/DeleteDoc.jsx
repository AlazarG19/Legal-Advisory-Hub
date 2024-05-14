import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

const DeleteDoc = ({ documentId }) => {
  const [showConfirmation, setShowConfirmation] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleConfirmDelete = async () => {
    try {
      setLoading(true);

      if (!documentId) {
        console.error("Invalid document ID");
        return;
      }

      await axios.delete(`http://localhost:5005/Docs/${documentId}`);

      setLoading(false);
      setShowConfirmation(false);
      console.log("Document deleted successfully");
      window.location.reload();
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
          <Modal.Title>Delete Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this document?</Modal.Body>
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

export default DeleteDoc;
