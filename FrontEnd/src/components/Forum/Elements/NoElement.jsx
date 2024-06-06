import React from 'react';

const NoElementFound = ({ elementName }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <i className="bi bi-dash-circle-fill text-danger fs-1"></i>
      <h2 className="text-danger mt-4">There is no {elementName} found</h2>
    </div>
  );
};

export default NoElementFound;