import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { Button, Modal, Alert } from "react-bootstrap";

function CreateDoc() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

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
        enqueueSnackbar("Please fill all fields", { variant: "error" });
        return;
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("pdf", file);

      await axios.post("http://localhost:5005/Docs", formData, {});

      setLoading(false);
      enqueueSnackbar("Document created successfully", { variant: "success" });
      navigate("/documents");
      console.log("Document created successfully");
    } catch (error) {
      console.error(error);
      setLoading(false);
      enqueueSnackbar("Error creating document", { variant: "error" });
      console.log("Error creating document");
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create New Document
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Document</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <form
            class="mx-auto w-100 mw-600px pt-15 pb-10"
            novalidate="novalidate"
            id="kt_modal_create_campaign_stepper_form"
          >
            <div class="current" data-kt-stepper-element="content">
              <div class="w-100">
                <div class="mb-10 fv-row">
                  <label class="required form-label mb-3">Document Title</label>

                  <input
                    type="text"
                    class="form-control form-control-lg form-control-solid"
                    name="campaign_name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div class="mb-10 fv-row">
                  <label class="required form-label mb-3">
                    Document Description
                  </label>
                  <textarea
                    type="text"
                    class="form-control form-control-lg form-control-solid"
                    name="campaign_name"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div>
                  <div class="w-100">
                    <div class="pb-10 pb-lg-12">
                      <label class="required form-label mb-3">
                        Upload file
                      </label>
                    </div>
                    <div>
                      <input
                        class="form-control form-control-lg mb-5"
                        id="formFileLg"
                        type="file"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-10">
                  <label class="required fw-semibold fs-6 mb-5">
                    Choose Folder
                  </label>

                  <div class="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      value="Criminal"
                      onChange={handleOptionChange}
                    />
                    <label
                      class="fw-bold text-gray-800 "
                      for="flexRadioDefault1"
                    >
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
                    <label
                      class="fw-bold text-gray-800 "
                      for="flexRadioDefault1"
                    >
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
                    <label
                      class="fw-bold text-gray-800 "
                      for="flexRadioDefault1"
                    >
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
                    <label
                      class="fw-bold text-gray-800 "
                      for="flexRadioDefault1"
                    >
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
                    <label
                      class="fw-bold text-gray-800 "
                      for="flexRadioDefault1"
                    >
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
                    <label
                      class="fw-bold text-gray-800 "
                      for="flexRadioDefault1"
                    >
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
                    <label
                      class="fw-bold text-gray-800 "
                      for="flexRadioDefault1"
                    >
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
                    <label
                      class="fw-bold text-gray-800 "
                      for="flexRadioDefault1"
                    >
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
                    <label
                      class="fw-bold text-gray-800 "
                      for="flexRadioDefault1"
                    >
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
                    <label
                      class="fw-bold text-gray-800 "
                      for="flexRadioDefault1"
                    >
                      Tort
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <div className=" m-4 d-flex justify-content-cente">
          <Button variant="primary" onClick={handleSaveDocument}>
            Save
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default CreateDoc;
