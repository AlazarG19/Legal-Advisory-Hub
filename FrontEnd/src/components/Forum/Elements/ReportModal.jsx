import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ReportModal = ({ reportType, Content }) => {
  const [show, setShow] = useState(false);
  const [inappropriateContent, setInappropriateContent] = useState('');
  const [reportReason, setReportReason] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can send the report information to your server or perform any other necessary actions
    console.log('Report reason:', reportReason);
    console.log('Inappropriate content:', inappropriateContent);
    handleClose();
  };

  const commonReportIssues = [
    'Spam or Irrelevant Content',
    'Hate Speech or Discrimination',
    'Sensitive or Explicit Content',
    'Copyright Infringement',
    'Harassment or Bullying',
    'False or Misleading Information',
  ];



  const handleAddReport = async () => {
    

    const url = 'http://localhost:3000/api/forumreport/'; // Replace with your API endpoint

    const requestData = {
      reportType:reportType,
			reportedObjectId:Content._id,
			reportedBy:JSON.parse(sessionStorage.getItem('user'))[0]["_id"],
      reason:reportReason,
      resolved: false
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
      handleCloseModal();
    } catch (error) {
      // Handle the error here
      console.error(error);
    }
  };


  return (
    <>
      <a
        className={`nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-2 me-1 }`}
        onClick={handleShow}
      >
        <i className="bi bi-flag">   
        Report</i>
      </a>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Report Content</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formReportReason">
              <Form.Label>Why are you reporting this content?</Form.Label>
              <Form.Control
                as="select"
                value={reportReason}
                onChange={(e) => setReportReason(e.target.value)}
              >
                <option value="">Select a reason</option>
                {commonReportIssues.map((issue, index) => (
                  <option key={index} value={issue}>
                    {issue}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formInappropriateContent">
              <Form.Label>Describe the inappropriate content (optional):</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={inappropriateContent}
                onChange={(e) => setInappropriateContent(e.target.value)}
                placeholder="Describe the inappropriate content..."
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleAddReport}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReportModal;