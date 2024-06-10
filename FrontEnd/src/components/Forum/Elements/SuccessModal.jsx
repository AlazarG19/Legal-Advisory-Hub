import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SuccessModal = ({message}) => {
  const [showConfirmation, setShowConfirmation] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleConfirmSuccess = async () => {
    console.log("finished")
    navigate(`/customforms`);

  };

  const handleSuccess = () => {
    console.log("finished")
    setShowConfirmation(false);
    navigate(`/customforms`);
  };

  return (
    <>
      <Modal show={showConfirmation} onHide={handleSuccess} centered>
        <Modal.Header closeButton>
        <Modal.Title className="w-100 text-center text-success">Complete!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <strong >{message}</strong>
          </div>
        </Modal.Body>
        <Modal.Footer className="w-100 justify-content-center" >
          <Button
            variant="success"
            onClick={handleConfirmSuccess}
            disabled={loading}

          >
            {loading ? "Finishing..." : "Finish"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SuccessModal;
