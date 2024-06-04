import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function ReviewModal({ reportType, Content }) {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState([]);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (reportType === "comment") {
      fetch(`http://localhost:3000/api/comments/${Content.reportedObjectId}`)
        .then(res => res.json())
        .then(result => {
          setContent(result);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (reportType === "question") {
      fetch(`http://localhost:3000/api/questions/${Content.reportedObjectId}`)
        .then(res => res.json())
        .then(result => {
          setContent(result);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (reportType === "answer") {
      fetch(`http://localhost:3000/api/answers/${Content.reportedObjectId}`)
        .then(res => res.json())
        .then(result => {
          setContent(result);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };







  const handleResolve = async (isHidden) => {
    console.log(Content._id)
    const reporturl = "http://localhost:3000/api/forumreport/"; // Replace with your API endpoint for updating reports
  
    const updatedReportData = {
      resolved: true,
    };

  
    try {
      const response = await fetch(`${reporturl}${Content._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedReportData),
      });
  
      if (!response.ok) {
        throw new Error('Request failed');
      }
  
      const updatedReport = await response.json();
      // Update the report object in your state or component
      // setReport(updatedReport);
      // Perform any other necessary actions after the update
    } catch (error) {
      // Handle the error here
      console.error(error);
    }


    // console.log(Content._id)


    if (reportType === "comment") {
      const objurl = "http://localhost:3000/api/comments/"; // Replace with your API endpoint for updating reports
      console.log("Comment ID", Content.reportedObjectId)
      const updatedData = {
        reported: isHidden,
      };
  
    
      try {
        const response = await fetch(`${objurl}${Content.reportedObjectId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData),
        });
        // console.log("Comment")
        // console.log(response)
        if (!response.ok) {
          throw new Error('Request failed');
        }
      } catch (error) {
        console.error(error);
      }
  
    } else if (reportType === "question") {
      const objurl = "http://localhost:3000/api/questions/"; // Replace with your API endpoint for updating reports

      const updatedData = {
        reported: isHidden,
      };
  
    
      try {
        const response = await fetch(`${objurl}${Content.reportedObjectId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData),
        });
    
        if (!response.ok) {
          throw new Error('Request failed');
        }
      } catch (error) {
        console.error(error);
      }  
    
    
    } else if (reportType === "answer") {
      const objurl = "http://localhost:3000/api/answers/"; // Replace with your API endpoint for updating reports

      const updatedData = {
        reported: isHidden,
      };
  
    
      try {
        const response = await fetch(`${objurl}${Content.reportedObjectId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedData),
        });
    
        if (!response.ok) {
          throw new Error('Request failed');
        }
      }catch (error) {
        console.error(error);
      }  
    }

    
    // Perform the necessary actions to resolve the reported content
    // and hide the post if the "Hide Post" checkbox is checked
    console.log('Resolving reported content, isHidden:', isHidden);
    setShowModal(false);
  };

  const renderContent = () => {
    if (reportType === "comment") {
      return (
        <>
          <p>Comment Body</p>
          <p>{content.body}</p>
        </>
      );
    } else if (reportType === "question") {
      return (
        <>
          <p>Question Title</p>
          <p>{content.title}</p>
        </>
      );
    } else if (reportType === "answer") {
      return (
        <>
          <p>Answer Body</p>
          <p>{content.body}</p>
        </>
      );
    }
  };

  return (
    <>
      <button className="btn btn-sm btn-danger" onClick={handleButtonClick}>
        Review
      </button>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Review the {reportType}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {renderContent()}
          <Form.Check
            type="checkbox"
            id="hide-post-checkbox"
            label="Hide Post"
            checked={isHidden}
            onChange={() => setIsHidden(!isHidden)}
          />
          <div className="d-flex justify-content-end mt-3">
            <Button variant="secondary" className="mr-2" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => handleResolve(isHidden)}>
              Resolve
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ReviewModal;