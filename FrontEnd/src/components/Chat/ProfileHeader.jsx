import React from 'react';

const ProfileHeader = ({name}) => {
    return (
        <>
        <div className="card-header pe-5" id="kt_drawer_chat_messenger_header">
      <div className="card-title">
        <div className="d-flex justify-content-center flex-column me-3">
          <a
            href="#"
            className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1"
          >
            {name}
          </a>
          <div className="mb-0 lh-1">
            <span className="badge badge-success badge-circle w-10px h-10px me-1" />
            <span className="fs-7 fw-semibold text-muted">Active</span>
          </div>
        </div>
      </div>
 
    </div>
        </>
    );
}

export default ProfileHeader;
