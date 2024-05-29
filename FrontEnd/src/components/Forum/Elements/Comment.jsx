import React, { useEffect, useState } from 'react';
import VoteButtons from './voteButton';

function Comment({ comment }) {
  const [img, setimg] = useState("")
  useEffect(() => {

    try {

      let profilePicture = comment.userDetails[0].profilePicture
      setimg("http://localhost:3000/uploads/profile/" + profilePicture)
    } catch (error) {
      setimg("")

    }
  }, [])

  return (
    <>
      {/* <!--begin::Comment--> */}
      <div className="d-flex pt-6">
        {/* <!--begin::Avatar--> */}
        <div className="symbol symbol-45px me-5">
          <img src={img} alt="" />
        </div>
        {/* <!--end::Avatar--> */}
        {/* <!--begin::Wrapper--> */}
        <div className="d-flex flex-column flex-row-fluid">
          {/* <!--begin::Info--> */}
          <div className="d-flex align-items-center flex-wrap mb-0">
            {/* <!--begin::Name--> */}
            <a href="#" className="text-gray-800 text-hover-primary fw-bold me-6">
              {comment.author}
            </a>
            {/* <!--end::Name--> */}
            {/* <!--begin::Date--> */}
            {/* <span className="text-gray-400 fw-semibold fs-7 me-5">1 Day ago</span> */}
            {/* <!--end::Date--> */}
          </div>
          {/* <!--end::Info--> */}
          {/* <!--begin::Text--> */}
          <span className="text-gray-800 fs-7 fw-normal pt-1">
            {comment.body}
          </span>
          {/* <!--end::Text--> */}
          {/* <!--begin::VoteButtons--> */}
          <div className="d-flex align-items-center">
            <VoteButtons />
            <a href="#" className="ms-auto text-gray-400 text-hover-primary fw-semibold fs-7">
              Reply
            </a>
            <hr className=" " /> {/* Add the separator */}
          </div>

          {/* <!--end::VoteButtons--> */}
          {/* <!--begin::Reply--> */}

          {/* <!--end::Reply--> */}
        </div>
        {/* <!--end::Wrapper--> */}
      </div>
      {/* <!--end::Comment--> */}

    </>
  );
}

export default Comment;