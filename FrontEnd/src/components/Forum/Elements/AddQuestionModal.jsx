import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Component() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("add-question");
  const [question, setQuestion] = useState("");
  const [questionCategory, setQuestionCategory] = useState("");

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  const handleQuestionCategoryChange = (e) => {
    setQuestionCategory(e.target.value);
  };

  const handlePostContentChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAddQuestion = async () => {
    console.log(question, questionCategory);
    const url = 'http://localhost:8080/api/questions/'; // Replace with your API endpoint
  
    const requestData = {
      title: question,
      category: questionCategory,
      body: "It has no body",
      author: "anonymous user"
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
    } catch (error) {
      // Handle the error here
      console.error(error);
    }

    handleCloseModal();
  };



  const handleAddQuestions = (event) => {
        // Perform add question logic here
        console.log("Question:", question);
        console.log("Category:", questionCategory);
        
        const formData = new FormData();

        // Update the formData object
        formData.append(
            'title',
            question
        );
        formData.append(
            'category',
            questionCategory
        );
        formData.append(
          'body',
          "It has no body"
      );
        formData.append(
          'author',
          "anonymous user"
      );
        
        fetch('http://localhost:8080/api/questions/', {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .catch((error) => {
                console.error('Error:', error);
            });
    
            handleCloseModal();
          }



  return (
    <>
      <Button variant = 'secondary' onClick={handleButtonClick}>Ask a Question </Button>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Ask Question </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="tab-content mt-3">
            {activeTab === "add-question" && (
                <div className="tab-pane fade show active">

                <select
                  className="form-control mb-2 form-control-sm"
                  style={{ width: "100%", height: "40px" }}
                  value={questionCategory}
                  onChange={handleQuestionCategoryChange}
                >
                  <option value="">Select a category</option>
                  <option value="Criminal">Criminal</option>
                  <option value="Civil">Civil</option>
                  <option value="Family">Family</option>
                  <option value="Employment">Employment</option>
                  <option value="Contract">Contract</option>
                  <option value="Intellectual Property">Intellectual Property</option>
                  <option value="Constitutional">Constitutional</option>
                  <option value="Administrative">Administrative</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Tort">Tort</option>

                </select>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="What is your question?"
                  style={{ width: "100%", height: "80px" }}
                  value={question}
                  onChange={handlePostContentChange}
                />
                

                <div className="d-flex justify-content-end">
                  <Button variant="secondary" className="mr-2" onClick={handleCloseModal}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={handleAddQuestion}>
                    Add Question
                  </Button>
                </div>
              </div>
            )}

          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Component;