import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const UpdateDocument = ({ documentId, onUpdate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [show, setShow] = useState(true);
  const [category, setCategory] = useState("");

  const handleOptionChange = (event) => {
    setCategory(event.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleClose = () => setShow(false);

  useEffect(() => {
    // Fetch the document data based on the documentId
    const fetchDocument = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5005/Docs/${documentId}`
        );
        const { title, description, category } = response.data;
        setTitle(title);
        setDescription(description);
        setCategory(category);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDocument();
  }, [documentId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedDocument = {
        title,
        description,
        category,
      };

      await axios.put(
        `http://localhost:5005/Docs/${documentId}`,
        updatedDocument
      );

      // Call the onUpdate callback to notify the parent component about the update
      onUpdate();

      // Update the component state with the new document data
      const updatedDocumentData = {
        ...updatedDocument,
        _id: documentId,
      };
      setTitle(updatedDocument.title);
      setDescription(updatedDocument.description);
      setCategory(updatedDocument.category);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <form onSubmit={handleUpdate}>
            <div>
              <label className=" form-label mb-3">Document Title</label>
              <input
                type="text"
                className="form-control form-control-lg form-control-solid"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label className=" form-label mb-3">Document Description</label>
              <textarea
                type="text"
                className="form-control form-control-lg form-control-solid"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div class="mb-10">
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
            <br />
            <br />
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </form>
        </Modal.Body>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal>
    </>
  );
};

export default UpdateDocument;
