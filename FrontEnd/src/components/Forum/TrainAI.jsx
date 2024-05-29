import React, { useState, useRef } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import LoadingModal from './Elements/LoadingModal';
import Navigation from '../Navigation';

function TrainAI() {
  const [files, setFiles] = useState([]);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  const handleUpload = () => {
    // Implement your upload logic here
    console.log('Uploading files:', files);
    setShowLoadingModal(true);

    // Simulate a loading process
    setTimeout(() => {
      setShowLoadingModal(false);
    }, 3000);
  };

  const handleDropzoneClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <Navigation />
      {/* <!--begin::Media--> */}
      <div className="card card-flush py-4">
        {/* <!--begin::Card header--> */}
        <div className="card-header">
          <div className="card-title">
            <h2>Media</h2>
          </div>
        </div>
        {/* <!--end::Card header--> */}
        {/* <!--begin::Card body--> */}
        <div className="card-body pt-0">
          {/* <!--begin::Input group--> */}
          <div className="fv-row mb-2">
            {/* <!--begin::Dropzone--> */}
            <div className="dropzone" id="kt_ecommerce_add_product_media" onClick={handleDropzoneClick}>
              {/* <!--begin::Message--> */}
              <div className="dz-message needsclick">
                {/* <!--begin::Icon--> */}
                <i className="bi bi-file-earmark-arrow-up text-primary fs-3x"></i>
                {/* <!--end::Icon--> */}
                {/* <!--begin::Info--> */}
                <div className="ms-4">
                  <h3 className="fs-5 fw-bold text-gray-900 mb-1">Drop files here or click to upload.</h3>
                  <span className="fs-7 fw-semibold text-gray-400">Upload up to 10 files</span>
                  {/* Display selected file names */}
                  {files.length > 0 && (
                    <div className="mt-2">
                      <span className="fw-semibold text-gray-700">Selected files:</span>
                      <ul className="list-unstyled mb-0">
                        {files.map((file, index) => (
                          <li key={index}>{file.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {/* <!--end::Info--> */}
              </div>
              {/* <!--end::Message--> */}
              {/* <!--begin::Input--> */}
              <input type="file" className="dz-input" multiple ref={fileInputRef} onChange={handleFileUpload} style={{ display: 'none' }} />
              {/* <!--end::Input--> */}
              {/* <!--begin::Actions--> */}

              {/* <!--end::Actions--> */}
            </div>
            {/* <!--end::Dropzone--> */}
          </div>
          {/* <!--end::Input group--> */}
          {/* <!--begin::Description--> */}
          <div className="text-muted fs-7">Set the product media gallery.</div>
          {/* <!--end::Description--> */}

          <div className="dz-actions">
            <button className="btn btn-primary" onClick={handleUpload}>
              Train AI
            </button>
          </div>
        </div>
        {/* <!--end::Card body--> */}
      </div>
      {/* <!--end::Media--> */}

      {/* Render the loading modal if showLoadingModal is true */}
      {showLoadingModal && <LoadingModal />}
    </>
  );
}

export default TrainAI;