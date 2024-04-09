import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import RichText from "../RichText"

function Component() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("add-question");
  const [question, setQuestion] = useState("");
  const [questionCategory, setQuestionCategory] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postCategory, setPostCategory] = useState("");

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleQuestionCategoryChange = (e) => {
    setQuestionCategory(e.target.value);
  };

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const handlePostCategoryChange = (e) => {
    setPostCategory(e.target.value);
  };

  const handleAddQuestion = () => {
    // Perform add question logic here
    console.log("Question:", question);
    console.log("Category:", questionCategory);
    handleCloseModal();
  };

  const handlePost = () => {
    // Perform post logic here
    console.log("Post Content:", postContent);
    console.log("Category:", postCategory);
    handleCloseModal();
  };

  return (
    <>
      <Button variant = 'secondary' onClick={handleButtonClick}>Ask a Question </Button>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Ask Question or Create post </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "add-question" ? "active" : ""}`}
                onClick={() => handleTabClick("add-question")}
              >
                Add Question
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "create-post" ? "active" : ""}`}
                onClick={() => handleTabClick("create-post")}
              >
                Create Post
              </button>
            </li>
          </ul>

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
                  <option value="Category 1">Category 1</option>
                  <option value="Category 2">Category 2</option>
                  <option value="Category 3">Category 3</option>
                </select>
                
                {/* <RichText/> */}

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

            {activeTab === "create-post" && (
              <div className="tab-pane fade show active">
                <select
                  className="form-control mb-2 form-control-sm"
                  style={{ width: "100%", height: "40px" }}
                  value={postCategory}
                  onChange={handlePostCategoryChange}
                >
                  <option value="">Select a category</option>
                  <option value="Category 1">Category 1</option>
                  <option value="Category 2">Category 2</option>
                  <option value="Category 3">Category 3</option>
                </select>
                
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter your post content"
                  style={{ width: "100%", height: "80px" }}
                  value={postContent}
                  onChange={handlePostContentChange}
                />

                <div className="d-flex justify-content-end">
                  <Button variant="secondary"className="mr-2" onClick={handleCloseModal}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={handlePost}>
                    Create Post
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