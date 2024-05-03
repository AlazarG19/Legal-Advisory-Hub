import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const UpdateDocument = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const navigateTo = useNavigate();
  const [show, setShow] = useState(true);
  const { id } = useParams();

  const handleClose = () => setShow(false);

  const handleOptionChange = (event) => {
    setCategory(event.target.value);
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5005/Docs/${id}`)
      .then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setCategory(response.data.category);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please Chack console");
        console.log(error);
      });
  }, []);
  const handleUpdateBook = () => {
    const data = {
      title,
      description,
      category,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5005/Docs/${id}`, data)
      .then(() => {
        setLoading(false);
        console.log("document updated successfully");
        navigateTo(`/category/${category}`);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  const handleCloseModal = () => {
    navigateTo(`/category/${category}`);
  };
  return (
    <div>
      <Modal show={show} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Update Document</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
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
            <label class=" fw-semibold fs-6 mb-5">Choose Folder</label>

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
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleUpdateBook}>
                Save Changes
              </Button>
            </Modal.Footer>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UpdateDocument;
