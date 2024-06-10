import React, { useState, useEffect } from 'react';
import Vote from "../Forum/Elements/voteButton"
import Comment from './Elements/Comment'
import ReportModal from './Elements/ReportModal';
import { Container, Row, Col, Badge, Card, ListGroup } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function IndividualAnswer({ Answer, Feed }) {
  const [Comment, setComment] = useState("");
  const [Vote, setVote] = useState();
  const [img, setimg] = useState("")
  const [upvoteCount, setUpvoteCount] = useState(3);
  const [downvoteCount, setDownvoteCount] = useState(Answer.downvotes);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [hasDownvoted, setHasDownvoted] = useState(false);

  const handleUpvoteClick = async () => {
    if (!hasUpvoted) {
      try {
        // Update the vote count on the user interface
        setUpvoteCount((prevCount) => prevCount + 1);
        setHasUpvoted(true);

        // Send a request to the server to update the vote count in the database
        const response = await fetch(`http://localhost:3000/api/answers/upvote/${Answer._id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ voteCount: upvoteCount + 1 })
        });

        if (response.ok) {
          console.log('Upvote successful!');
        } else {
          console.error('Failed to upvote.');
          // Revert the vote count on the user interface
          setUpvoteCount((prevCount) => prevCount - 1);
          setHasUpvoted(false);
        }
      } catch (error) {
        console.error('Error upvoting:', error);
        // Revert the vote count on the user interface
        setUpvoteCount((prevCount) => prevCount - 1);
        setHasUpvoted(false);
      }
    } else {
      setUpvoteCount((prevCount) => prevCount - 1);
      setHasUpvoted(false);
    }
  };

  const handleDownvoteClick = async () => {
    if (!hasDownvoted) {
      try {
        // Update the vote count on the user interface
        setDownvoteCount((prevCount) => prevCount + 1);
        setHasDownvoted(true);

        // Send a request to the server to update the vote count in the database
        const response = await fetch(`http://localhost:3000/api/answers/downvote/${Answer._id}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ voteCount: downvoteCount + 1 })
        });

        if (response.ok) {
          console.log('Downvote successful!');
        } else {
          console.error('Failed to downvote.');
          // Revert the vote count on the user interface
          setDownvoteCount((prevCount) => prevCount - 1);
          setHasDownvoted(false);
        }
      } catch (error) {
        console.error('Error downvoting:', error);
        // Revert the vote count on the user interface
        setDownvoteCount((prevCount) => prevCount - 1);
        setHasDownvoted(false);
      }
    } else {
      setDownvoteCount((prevCount) => prevCount - 1);
      setHasDownvoted(false);
    }
  };

  useEffect(() => {
    try {
      let profilePicture = Answer.userDetails[0].profilePicture
      setimg("http://localhost:3000/uploads/profile/" + profilePicture)
    } catch (error) {
      setimg("")
    }
    fetch(`http://localhost:3000/api/comments/all/${Answer._id}`).then(res => res.json()).then(result => {
      setComment(result)
    }).catch((error) => {
      console.log(error)
    });
  }, [])

  const comment = () => {
    if (Feed) {
      return (
        <></>
      );
    } else {
      return (
        <>
          {/* <!--begin::Comment form--> */}
          <div className="d-flex align-items-center">
            {/* <!--begin::Author--> */}
            <div className="symbol symbol-35px me-3">
              <img src={img} alt="" />
            </div>
            {/* <!--end::Author--> */}
            {/* <!--begin::Input group--> */}
            <div className="position-relative w-100">
              {/* <!--begin::Input--> */}
              <textarea type="text" className="form-control form-control-solid border ps-5" rows="1" name="search" defaultValue="" data-kt-autosize="true" placeholder="Write your comment.."></textarea>
              {/* <!--end::Input--> */}
              {/* <!--begin::Actions--> */}
              <div className="position-absolute top-0 end-0 translate-middle-x mt-1 me-n14">
                {/* <!--begin::Btn--> */}
                <button className="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                  <i className="fonticon-attach fs-2"></i>
                </button>
                {/* <!--end::Btn--> */}
                {/* <!--begin::Btn--> */}
                <button className="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                  <i className="fonticon-smile fs-2"></i>
                </button>
                {/* <!--end::Btn--> */}
                {/* <!--begin::Btn--> */}
                <button className="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                  <i className="fonticon-gallery fs-2"></i>
                </button>
                {/* <!--end::Btn--> */}
                {/* <!--begin::Btn--> */}
                <button className="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                  <i className="fonticon-location fs-2"></i>
                </button>
                {/* <!--end::Btn--> */}
              </div>
              {/* <!--end::Actions--> */}
            </div>
            {/* <!--end::Input group--> */}
          </div>
          {/* <!--end::Comment form--> */}
        </>
      );
    }
  }

  const renderComment = () => {
    if (Feed) {
      return (
        <></>
      );
    } else {
      return (
        <>
          <Comment />
        </>
      );
    }
  }

  const renderPostContent = () => {
    if (Feed) {
      const words = Answer.body.split(' ');

      const limitedContent = words.slice(0, 25).join(' ');
      return (
        <>
          <div className="fs-6 fw-normal text-gray-700 mb-5" dangerouslySetInnerHTML={{ __html: limitedContent }} />
          <Link to={`/detail/${Answer._id}`}>View detail</Link>

        </>
      );
    } else {
      return (
        <>
          <div className="fs-6 fw-normal text-gray-700 mb-5" dangerouslySetInnerHTML={{ __html: Answer.body }} />

          <Card.Body>
            <Card.Text className=" mb-4">
              Category: <Badge variant="primary">{Answer.Category}</Badge>
            </Card.Text>
            <Card.Link href="#" className="text-center">
              <strong>Link to Experts </strong> {Answer.expert}
            </Card.Link>
            <Card.Link href="#" className="text-center">
              <strong>Related Documents </strong>
            </Card.Link>
          </Card.Body>
        </>
      );
    }
  }

  return (
    <div className="card card-flush mb-10">
      {/* <!--begin::Card header--> */}
      <div className="card-header pt-9">
        {/* <!--begin::Author--> */}
        <div className="d-flex align-items-center">
          {/* <!--begin::Avatar--> */}
          <div className="symbol symbol-50px me-5">
            <img src={img} className="" alt="" />
          </div>
          {/* <!--end::Avatar--> */}
          {/* <!--begin::Info--> */}
          <div className="flex-grow-1">
            {/* <!--begin::Name--> */}
            <a href="#" className="text-gray-800 text-hover-primary fs-4 fw-bold">{Answer.author}</a>
          </div>
          {/* <!--end::Info--> */}
        </div>
        {/* <!--end::Author--> */}
        {/* <!--begin::Card toolbar--> */}

        {/* <!--end::Card toolbar--> */}
      </div>
      {/* <!--end::Card header--> */}
      {/* <!--begin::Card body--> */}
      <div className="card-body">
        {/* <!--begin::Answer content--> */}
        {renderPostContent()}

        {/* <!--end::Post content--> */}
        {/* <!--begin::Post media--> */}

        {/* <!--end::Post media--> */}
      </div>
      {/* <!--end::Card body--> */}
      {/* <!--begin::Card footer--> */}
      <div className="card-footer pt-0">
        {/* <!--begin::Info--> */}
        <div className="mb-6">
          {/* <!--begin::Separator--> */}
          <div className="separator separator-solid"></div>
          {/* <!--end::Separator--> */}
          {/* <!--begin::Nav--> */}
          <ul className="nav py-3">
            {/* <!--begin::Item--> */}
            <li className="nav-item">
              <a className="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary btn-active-light-primary fw-bold px-4 me-1 collapsible active" data-bs-toggle="collapse" href="#kt_social_feeds_comments_1">
                <i className="bi bi-chat-square fs-2 me-1"></i> {Comment.length}  Comments</a>
            </li>
            {/* <!--end::Item--> */}
            {/* <!--begin::Item--> */}
            <li className="nav-item">
              <a href="#" className="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4 me-1">
                <i className="bi bi-hand-thumbs-up fs-2 me-1" onClick={handleUpvoteClick}></i>{upvoteCount} Upvotes</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4 me-1">
                <i className="bi bi-hand-thumbs-down fs-2 me-1" onClick={handleDownvoteClick}></i>{downvoteCount}  Downvotes</a>
            </li>
            <li className="nav-item">
              <ReportModal reportType="answer" Content={Answer} />
            </li>
          </ul>
          {/* <!--end::Nav--> */}
          {/* <!--begin::Separator--> */}
          <div className="separator separator-solid mb-1"></div>
          {/* <!--end::Separator--> */}
          {/* <!--begin::Comments--> */}
          <div className="collapse show" id="kt_social_feeds_comments_1">
            {renderComment()}

          </div>
          {/* <!--end::Collapse--> */}
        </div>
        {comment()}
        {/* <!--end::Info--> */}

      </div>
      {/* <!--end::Card footer--> */}
    </div>
  )
}

export default IndividualAnswer;