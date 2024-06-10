import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ErrorModal = ({ documentId }) => {
  const [showConfirmation, setShowConfirmation] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigateTo = useNavigate();
  const currentUrl = window.location.href;
  const handleConfirmError = async () => {
    console.log("finished")
    setShowConfirmation(false);

  };

  const handleCancelError = () => {
    console.log("finished")
    setShowConfirmation(false);
  };

  return (
    <>
      <Modal show={showConfirmation} onHide={handleCancelError} centered>
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">Operation Failed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <p>Your operation was not completed successfully.</p>
          </div>
        </Modal.Body>
        <Modal.Footer className="w-100 justify-content-center" >
          <Button
            variant="danger"
            onClick={handleConfirmError}
            disabled={loading}

          >
            {loading ? "Going Back..." : "Go Back"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ErrorModal;
