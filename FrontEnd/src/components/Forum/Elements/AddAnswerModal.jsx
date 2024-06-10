
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import RichText from "../RichText";
import { useNavigate } from 'react-router-dom';

function AnswerModal({ Question }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [Answerbody, setAnswerbody] = useState("");

  const handleInputSubmit = (inputValue) => {
    console.log('Received input:', inputValue);
    setAnswerbody(inputValue);

    console.log('Question Id:', Question._id);
    // Do something with the input value in the parent component
  };

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddAnswer = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const url = 'http://localhost:3000/api/answers/'; // Replace with your API endpoint

    const requestData = {
      questionId: Question._id,
      body: Answerbody,
      author: "System User",
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const responseData = await response.json();
      // Process the response data here
      console.log(responseData);

      // Navigate to the desired route after successful submission
      navigate('/'); // Replace '/your-desired-route' with the actual route you want to navigate to
    } catch (error) {
      // Handle the error here
      console.error(error);
    }

    handleCloseModal();
  };

  return (
    <>
      <li className="nav-item">
        <a
          onClick={handleButtonClick}
          className="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary btn-active-light-primary fw-bold px-4 me-1 collapsible active"
          data-bs-toggle="collapse"
          href="#kt_social_feeds_comments_1"
        >
          <i className="bi bi-pencil-fill"></i> Answer
        </a>
      </li>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add an Answer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Question: {Question.title}</p>
          <RichText onEditorChange={handleInputSubmit} />

          <div className="d-flex justify-content-end mt-3">
            <Button variant="secondary" className="mr-2" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleAddAnswer}>
              Add Answer
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AnswerModal;