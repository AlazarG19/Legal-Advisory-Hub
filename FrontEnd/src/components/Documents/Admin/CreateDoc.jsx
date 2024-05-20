import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

function CreateDoc() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigateTo = useNavigate();

  const handleOptionChange = (event) => {
    setCategory(event.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSaveDocument = async () => {
    try {
      setLoading(true);

      if (title.trim() === "" || description.trim() === "" || file === null) {
        setErrorMessage("Please fill all fields");
        setLoading(false);
        return;
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("pdf", file);

      await axios.post("http://localhost:3000/Docs", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setLoading(false);
      setSuccessMessage("Document created successfully");
      navigateTo("/docdb/documents");
      console.log("Document created successfully");

      // Reset form fields
      setTitle("");
      setDescription("");
      setCategory("");
      setFile(null);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setErrorMessage("Error creating document");
      console.log("Error creating document");
    }
  };

  const handleCloseModal = () => {
    setShow(false);
    setTitle("");
    setDescription("");
    setCategory("");
    setFile(null);
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleOpenModal = () => {
    setShow(true);
  };

  return (
    <>
      <Button variant="primary" onClick={handleOpenModal}>
        Create New Document
      </Button>

      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Document</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="alert alert-success" role="alert">
              {successMessage}
            </div>
          )}
          <div>
            <label className="required form-label mb-3">Document Title</label>
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="required form-label mb-3">
              Document Description
            </label>
            <textarea
              type="text"
              className="form-control form-control-lg form-control-solid"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label className="required fw-semibold fs-6 mb-5">
              Upload file
            </label>
            <input
              className="form-control form-control-lg mb-5"
              id="formFileLg"
              type="file"
              onChange={handleFileChange}
            />
          </div>
          <div class="mb-10">
            <label class="required fw-semibold fs-6 mb-5">Choose Folder</label>

            <div class="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="Criminal"
                onChange={handleOptionChange}
              />
              <label class="fw-bold text-gray-800 " for="flexRadioDefault1">
                Criminal
              </label>
            </div>

            <div class="separator separator-dashed my-5"></div>

            <div class="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="Civil"
                onChange={handleOptionChange}
              />
              <label class="fw-bold text-gray-800 " for="flexRadioDefault1">
                Civil
              </label>
            </div>

            <div class="separator separator-dashed my-5"></div>

            <div class="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="Intellectual Property"
                onChange={handleOptionChange}
              />
              <label class="fw-bold text-gray-800 " for="flexRadioDefault1">
                Intellectual Property
              </label>
            </div>

            <div class="separator separator-dashed my-5"></div>
            <div class="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="Constitutional"
                onChange={handleOptionChange}
              />
              <label class="fw-bold text-gray-800 " for="flexRadioDefault1">
                Constitutional
              </label>
            </div>

            <div class="separator separator-dashed my-5"></div>
            <div class="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="Family"
                onChange={handleOptionChange}
              />
              <label class="fw-bold text-gray-800 " for="flexRadioDefault1">
                Family
              </label>
            </div>
            <div class="separator separator-dashed my-5"></div>
            <div class="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="Employement"
                onChange={handleOptionChange}
              />
              <label class="fw-bold text-gray-800 " for="flexRadioDefault1">
                Employement
              </label>
            </div>
            <div class="separator separator-dashed my-5"></div>
            <div class="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="Contract"
                onChange={handleOptionChange}
              />
              <label class="fw-bold text-gray-800 " for="flexRadioDefault1">
                Contract
              </label>
            </div>
            <div class="separator separator-dashed my-5"></div>
            <div class="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="Administrative"
                onChange={handleOptionChange}
              />
              <label class="fw-bold text-gray-800 " for="flexRadioDefault1">
                Administrative
              </label>
            </div>
            <div class="separator separator-dashed my-5"></div>
            <div class="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="Real state"
                onChange={handleOptionChange}
              />
              <label class="fw-bold text-gray-800 " for="flexRadioDefault1">
                Real state
              </label>
            </div>
            <div class="separator separator-dashed my-5"></div>
            <div class="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="Tort"
                onChange={handleOptionChange}
              />
              <label class="fw-bold text-gray-800 " for="flexRadioDefault1">
                Tort
              </label>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveDocument}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateDoc;
