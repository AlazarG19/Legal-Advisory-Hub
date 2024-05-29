import React from 'react';
import { Spinner } from 'react-bootstrap';

const UploaderAnimation = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100px' }}>
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p className="mt-2">Uploading...</p>
    </div>
  );
};

export default UploaderAnimation;