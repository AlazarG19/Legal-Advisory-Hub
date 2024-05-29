import React, { useState, useEffect } from 'react';
import Vote from "../Forum/Elements/voteButton"
import Comment from './Elements/Comment'
import ReportModal from './Elements/ReportModal'
import AddAnswerModal from './Elements/AddAnswerModal'
import { Container, Row, Col, Badge, Card, ListGroup, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function IndividualQuestion({ Question }) {
  const [upvoteCount, setUpvoteCount] = useState(0);
  const [numAns, setNumAns] = useState(0);
  const [hasUpvoted, setHasUpvoted] = useState(false);

  const handleUpvoteClick = () => {
    if (!hasUpvoted) {
      setUpvoteCount((prevCount) => prevCount + 1);
      setHasUpvoted(true);
    }
  };

  const handleReportClick = () => {
    // Implement your report functionality here
    // e.g., send a report to your server, update the isReported state, etc.
    setIsReported(true);
    console.log('Question reported:', Question);
  };

  useEffect(() => {
    fetch(`http://localhost:3000/api/answers/all/${Question._id}`).then(res => res.json()).then(result => {
      setTimeout(() => {
        setNumAns(result.length);
      }, 1000);
    }).catch((error) => {
      console.log(error)
    });
  }, [])

  return (
    <div className="card card-flush">
      <div className="card-body">
        {/* <!--begin::Post content--> */}
        <div className="fs-4 font-weight-bold  text-gray-700">
          <i className="bi bi-question-circle-fill me-2" >   </i><strong>
            <Link to={`/answers/${Question._id}`}>{Question.title}</Link>{' '}
          </strong>{' '}
        </div>
        <div className="fs-8 font-weight-bold text-gray-700 text-right m-3"></div>
        <Container fluid>
          <Row>
            <Col className="q-text qu-dynamicFontSize--small qu-mt--small qu-color--gray_light qu-passColorToLinks text-right">
              <span className="q-text qu-bold">
                <Link to={`/answers/${Question._id}`}>{numAns} Answers</Link>
              </span>
              <span> · </span>
              <span>{Question.category}</span>
            </Col>
          </Row>
        </Container>
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
            <AddAnswerModal Question={Question} />
            {/* <!--end::Item--> */}
            {/* <!--begin::Item--> */}

            <li className="nav-item me-2">
              <span className={`nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-2 ${hasUpvoted ? 'text-primary' : ''}`}>
                {upvoteCount}
              </span>
            </li>

            <li className="nav-item">
              <a
                href="#"
                className={`nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-2 me-1 ${hasUpvoted ? 'text-primary' : ''}`}
                onClick={handleUpvoteClick}
              >
                <i className="bi bi-hand-thumbs-up"></i> Upvote
              </a>
            </li>

            {/* <!--end::Item--> */}
            {/* <!--begin::Item--> */}
            <li className="nav-item">
              <ReportModal Question={Question} />
            </li>


            {/* <!--end::Item--> */}
          </ul>
          {/* <!--end::Nav--> */}
          {/* <!--begin::Separator--> */}
          <div className="separator separator-solid mb-1"></div>
          {/* <!--end::Separator--> */}
          {/* <!--begin::Comments--> */}

          {/* <!--end::Collapse--> */}
        </div>
        {/* <!--end::Info--> */}
      </div>
      {/* <!--end::Card footer--> */}
    </div>
  );
}

export default IndividualQuestion;