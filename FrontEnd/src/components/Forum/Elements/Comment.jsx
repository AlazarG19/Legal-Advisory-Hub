import React from 'react';
import VoteButtons from './voteButton';

function Comment() {
  return (
    <>
      {/* <!--begin::Comment--> */}
      <div className="d-flex pt-6">
        {/* <!--begin::Avatar--> */}
        <div className="symbol symbol-45px me-5">
          <img src="/assets/media/avatars/300-13.jpg" alt="" />
        </div>
        {/* <!--end::Avatar--> */}
        {/* <!--begin::Wrapper--> */}
        <div className="d-flex flex-column flex-row-fluid">
          {/* <!--begin::Info--> */}
          <div className="d-flex align-items-center flex-wrap mb-0">
            {/* <!--begin::Name--> */}
            <a href="#" className="text-gray-800 text-hover-primary fw-bold me-6">
              Mr. Anderson
            </a>
            {/* <!--end::Name--> */}
            {/* <!--begin::Date--> */}
            <span className="text-gray-400 fw-semibold fs-7 me-5">1 Day ago</span>
            {/* <!--end::Date--> */}
          </div>
          {/* <!--end::Info--> */}
          {/* <!--begin::Text--> */}
          <span className="text-gray-800 fs-7 fw-normal pt-1">
            Long before you sit down to put the digital pen to paper, you need to make sure you
            have the right tools and a comfortable workspace. Happy writing!
          </span>
          {/* <!--end::Text--> */}
          {/* <!--begin::VoteButtons--> */}
          <div className="d-flex align-items-center mt-3">
            <VoteButtons />
          </div>
          {/* <!--end::VoteButtons--> */}
          {/* <!--begin::Reply--> */}
          <a href="#" className="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">
            Reply
          </a>
          {/* <!--end::Reply--> */}
        </div>
        {/* <!--end::Wrapper--> */}
      </div>
      {/* <!--end::Comment--> */}
    </>
  );
}

export default Comment;