import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const WarningModal = ({ id, close }) => {
  console.log(id)
  const [showConfirmation, setShowConfirmation] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleConfirmSuccess = async () => {
    console.log("finished")

    window.location.reload()

  };

  const handleSuccess = () => {
    console.log("finished")
    window.location.reload()
  };

  return (
    <>
      <Modal show={showConfirmation} onHide={handleSuccess} centered>
        <Modal.Header closeButton >
          <Modal.Title className="w-100 text-center">Are you Sure You Want to delete?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <p>This is an irreversible process.</p>
          </div>
        </Modal.Body>
        <Modal.Footer className="w-100 justify-content-center" >
          <Button
            variant="primary"
            onClick={close}


          >
            {"Cancel"}
          </Button>
          <Button
            variant="danger"
            onClick={handleConfirmSuccess}
            disabled={loading}

          >
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WarningModal;
