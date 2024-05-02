import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
const DeleteDoc = async (documentId) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirmDelete = async () => {
    console.error("Invalid document");
    try {
      setLoading(true);

      // Perform any necessary validation checks on the documentId parameter
      if (!documentId) {
        enqueueSnackbar("Invalid document ID", { variant: "error" });
        console.error("Invalid document");
        return;
      }

      await axios.delete(`http://localhost:5005/Docs/${documentId}`);

      setLoading(false);
      enqueueSnackbar("Document deleted successfully", { variant: "success" });
      navigate("/documents");
      console.log("Document deleted successfully");
    } catch (error) {
      console.error(error);
      setLoading(false);
      enqueueSnackbar("Error deleting document", { variant: "error" });
      console.log("Error deleting document");
    } finally {
      setShowConfirmation(false);
    }
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <Button variant="danger" onClick={() => setShowConfirmation(true)}>
        Delete Document
      </Button>

      <Modal show={showConfirmation} onHide={handleCancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this document?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic-button">
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
          <Dropdown.Item href="#/action-1">Update</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={handleConfirmDelete}>
            Delete
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">View</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DeleteDoc;
