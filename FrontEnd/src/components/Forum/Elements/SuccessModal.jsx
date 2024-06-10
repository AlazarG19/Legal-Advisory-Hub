import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const SuccessModal = ({ message }) => {
  const [showConfirmation, setShowConfirmation] = useState(true);

  const handleConfirmSuccess = () => {
    console.log("finished");
    setShowConfirmation(false);
  };

  const handleClose = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <Modal show={showConfirmation} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center text-success">Complete!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <strong>{message}</strong>
          </div>
        </Modal.Body>
        <Modal.Footer className="w-100 justify-content-center">
          <Button variant="success" onClick={handleConfirmSuccess}>
            Finish
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SuccessModal;