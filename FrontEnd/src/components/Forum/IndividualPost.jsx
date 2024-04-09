import React from 'react'
import Vote from "../Forum/Elements/voteButton"
import Comment from './Elements/Comment'
import { Container, Row, Col, Badge, Card, ListGroup } from 'react-bootstrap';

import { Link } from 'react-router-dom';
function IndividualPost({Post, Feed}) {

    const renderPostContent = () => {
        if (Feed) {
          const words = Post.Content.split(' ');
          const limitedContent = words.slice(0, 25).join(' ');
          return (
            <div className="fs-6 fw-normal text-gray-700 mb-5">{limitedContent} ...<Link to={`/detail`}>View detail</Link> </div>
          );
        } else {
          return (
            <>
                <div className="fs-6 fw-normal text-gray-700 mb-5">{Post.Content}  </div>
                <Card.Body>
                <Card.Text className=" mb-4">
                    Category: <Badge variant="primary">{Post.Category}</Badge>
                </Card.Text>
                <Card.Link href="#" className="text-center">
                    <strong>Link to Experts </strong> {Post.expert}
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
                        <img src="/assets/media/avatars/300-4.jpg" className="" alt="" />
                    </div>
                    {/* <!--end::Avatar--> */}
                    {/* <!--begin::Info--> */}
                    <div className="flex-grow-1">
                        {/* <!--begin::Name--> */}
                        <a href="#" className="text-gray-800 text-hover-primary fs-4 fw-bold">{Post.Author}</a>
                        {/* <!--end::Name--> */}
                        {/* <!--begin::Date--> */}
                        <span className="text-gray-400 fw-semibold d-block">{Post.Date}</span>
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
                {renderPostContent()}
               
                {/* <!--end::Post content--> */}
                {/* <!--begin::Post media--> */}
                <div className="row g-7 h-250px h-md-375px">
                    {/* <!--begin::Col--> */}
                    <div className="col-6">
                        {/* <!--begin::Item--> */}
                        <a className="d-block card-rounded overlay h-100" data-fslightbox="lightbox-projects" href="">
                            {/* <!--begin::Image--> */}
                            <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-100" style={{ backgroundImage: `url(/assets/media/stock/600x600/img-23.jpg)` }}></div>
                            {/* <!--end::Image--> */}
                            {/* <!--begin::Action--> */}
                            <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                <i className="bi bi-eye-fill fs-3x text-white"></i>
                            </div>
                            {/* <!--end::Action--> */}
                        </a>
                        {/* <!--end::Item--> */}
                    </div>
                    {/* <!--end::Col--> */}
                    {/* <!--begin::Col--> */}
                    <div className="col-6">
                        {/* <!--begin::Row--> */}
                        <div className="row g-7 h-250px h-md-375px">
                            {/* <!--begin::Col--> */}
                            <div className="col-lg-12">
                                {/* <!--begin::Item--> */}
                                <a className="d-block card-rounded overlay h-100" data-fslightbox="lightbox-projects" href="">
                                    {/* <!--begin::Image--> */}
                                    <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-100" style={{ backgroundImage: `url(/assets/media/stock/600x600/img-22.jpg)` }}></div>
                                    {/* <!--end::Image--> */}
                                    {/* <!--begin::Action--> */}
                                    <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                        <i className="bi bi-eye-fill fs-3x text-white"></i>
                                    </div>
                                    {/* <!--end::Action--> */}
                                </a>
                                {/* <!--end::Item--> */}
                            </div>
                            {/* <!--end::Col--> */}
                            {/* <!--begin::Col--> */}
                            <div className="col-lg-12">
                                {/* <!--begin::Item--> */}
                                <a className="d-block card-rounded overlay h-100" data-fslightbox="lightbox-projects" href="">
                                    {/* <!--begin::Image--> */}
                                    <div className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-100" style={{ backgroundImage: `url(/assets/media/stock/600x600/img-21.jpg)` }}></div>
                                    {/* <!--end::Image--> */}
                                    {/* <!--begin::Action--> */}
                                    <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                        <i className="bi bi-eye-fill fs-3x text-white"></i>
                                    </div>
                                    {/* <!--end::Action--> */}
                                </a>
                                {/* <!--end::Item--> */}
                            </div>
                            {/* <!--end::Col--> */}
                        </div>
                        {/* <!--end::Row--> */}
                    </div>
                    {/* <!--end::Col--> */}
                </div>
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
                                <i className="bi bi-chat-square fs-2 me-1"></i>2 Comments</a>
                        </li>
                        {/* <!--end::Item--> */}
                        {/* <!--begin::Item--> */}
                        <li className="nav-item">
                            <a href="#" className="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4 me-1">
                                <i className="bi bi-hand-thumbs-up fs-2 me-1"></i>47k Likes</a>
                        </li>
                        {/* <!--end::Item--> */}
                        {/* <!--begin::Item--> */}
                        <li className="nav-item">
                            <a href="#" className="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4">
                                <i className="bi bi-bookmark fs-2 me-1"></i>900 Saves</a>
                        </li>
                        {/* <!--end::Item--> */}
                    </ul>
                    {/* <!--end::Nav--> */}
                    {/* <!--begin::Separator--> */}
                    <div className="separator separator-solid mb-1"></div>
                    {/* <!--end::Separator--> */}
                    {/* <!--begin::Comments--> */}
                    <div className="collapse show" id="kt_social_feeds_comments_1">
                       
                       <Comment/>
                    </div>
                    {/* <!--end::Collapse--> */}
                </div>
                {/* <!--end::Info--> */}
                {/* <!--begin::Comment form--> */}
                <div className="d-flex align-items-center">
                    {/* <!--begin::Author--> */}
                    <div className="symbol symbol-35px me-3">
                        <img src="/assets/media/avatars/300-3.jpg" alt="" />
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
            </div>
            {/* <!--end::Card footer--> */}
        </div>
    )
}

export default IndividualPost