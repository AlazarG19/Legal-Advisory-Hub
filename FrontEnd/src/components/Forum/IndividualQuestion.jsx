import React, { useState } from 'react';
import Vote from "../Forum/Elements/voteButton"
import Comment from './Elements/Comment'
import AddAnswerModal from './Elements/AddAnswerModal'
import { Container, Row, Col, Badge, Card, ListGroup } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function IndividualQuestion({ Question }) {
  const [upvoteCount, setUpvoteCount] = useState(0);

  const handleUpvoteClick = () => {
    // Increment the upvote count
    setUpvoteCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="card card-flush">
      {/* <!--begin::Card header--> */}
      <div className="card-header pt-9">
        {/* <!--begin::Author--> */}
        <div className="d-flex align-items-center">
          {/* <!--begin::Avatar--> */}

          {/* <!--end::Avatar--> */}
          {/* <!--begin::Info--> */}
          <div className="flex-grow-1">
            {/* <!--begin::Name--> */}

            {/* <!--begin::Date--> */}
            <span className="text-gray-400 fw-semibold d-block">
              {new Date(Question.createdAt).toLocaleString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
            {/* <!--end::Date--> */}
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
        {/* <!--begin::Post content--> */}
        <div className="fs-4 font-weight-bold  text-gray-700">
          <strong>
            {' '}
            <Link to={`/answers/${Question._id}`}>{Question.title}</Link>{' '}
          </strong>{' '}
        </div>
        <div className="fs-8 font-weight-bold text-gray-700 text-right m-3"></div>
        <Container fluid>
          <Row>
            <Col className="q-text qu-dynamicFontSize--small qu-mt--small qu-color--gray_light qu-passColorToLinks text-right">
              <span className="q-text qu-bold">
                <Link to={`/answers/${Question._id}`}>17 Answers</Link>
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

            <span>{upvoteCount}</span> {/* Display the upvote count */}

              <a
                href="#"
                className="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-2 me-1"
                onClick={handleUpvoteClick}
              >
                <i className="bi bi-hand-thumbs-up"></i> Upvote
              </a>

            {/* <!--end::Item--> */}
            {/* <!--begin::Item--> */}

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