import React from 'react';

const LoadingModal = () => {
  return (
    <div
      className="modal fade show"
      id="loadingModal"
      tabIndex="-1"
      aria-labelledby="loadingModalLabel"
      aria-hidden="true"
      style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <h5 className="mt-3">Training AI...</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;