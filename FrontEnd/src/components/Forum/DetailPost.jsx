
import React, { useState, useEffect } from 'react';
import Header from '../Header'
import CategoriesSection from './CategoriesSection'
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Badge, Card, ListGroup } from 'react-bootstrap';
import Comment from './Elements/Comment'
import ReportModal from './Elements/ReportModal';

function DetailPost() {
    const { id } = useParams();

    const [Answer, setAnswer] = useState([]);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [hasUpvoted, setHasUpvoted] = useState(false);
  
    const handleUpvoteClick = () => {
      if (!hasUpvoted) {
        setUpvoteCount((prevCount) => prevCount + 1);
        setHasUpvoted(true);
      }
    };
  
    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
      };


      const handleCommentSubmit = async() => {
        if (newComment.trim() !== '') {
            const commentData = { body: newComment, postId: id, author: "System User"};

          setComments([...comments, commentData ]);

            const url = 'http://localhost:8080/api/comments/'; // Replace with your API endpoint
          
            try {
              const response = await fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(commentData),
              });
          
              if (!response.ok) {
                throw new Error('Request failed');
              }
          
              const responseData = await response.json();
              // Process the response data here
              console.log(responseData);
            } catch (error) {
              // Handle the error here
              console.error(error);
            }
        
          setNewComment('');
        }
      };

      
    const populateComments= () => {
        if (comments.length > 0) {
            return comments.map((comment, index) => {
                return (
                    <>
                    <Comment comment={comment}/>
                    </>
                )
            })
        }else{
            return <h1>No Comments</h1>
        };
    
    

    }
    

    useEffect(() => {
        console.log('http://localhost:8080/api/questions/')
        fetch(`http://localhost:8080/api/answers/${id}`).then(res => res.json()).then(result => {
          setAnswer(result)
          console.log(JSON.stringify(result))
        }).catch((error) => {
          console.log(error)
        });
      }, [])

      useEffect(() => {
        console.log('http://localhost:8080/api/questions/')
        fetch(`http://localhost:8080/api/comments/all/${id}`).then(res => res.json()).then(result => {

          setTimeout(() => {
            setComments(result)
            // Update the component's state
          }, 1000);
          console.log("Commentsss", comments)
          console.log("Result Comment", result)
        }).catch((error) => {
          console.log(error)
        });
      }, [])
    

    return (
        <>
            {/* <!--begin::Main--> */}
            <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                {/* <!--begin::Content wrapper--> */}
                <div className="d-flex flex-column flex-column-fluid">
                    <div className="d-flex flex-row">
                        
                        {/* <!--begin::Content--> */}
                        <div className="w-100 flex-lg-row-fluid mx-lg-13">
                            {/* <!--begin::Main form--> */}
                            {/* <CreatePost /> */}
                            {/* <!--end::Main form--> */}
                            {/* <!--begin::Posts--> */}
                            <div className="mb-10" id="kt_social_feeds_posts">
                                {/* <!--begin::Post 1--> */}
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
                        <a href="#" className="text-gray-800 text-hover-primary fs-4 fw-bold">{Answer.author}</a>
                        {/* <!--end::Name--> */}
                        {/* <!--begin::Date--> */}
                        <span className="text-gray-400 fw-semibold d-block">{new Date(Answer.createdAt).toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
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
                <>
                <div className="fs-6 fw-normal text-gray-700 mb-5">{Answer.body}  </div>
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
                    <ul className="nav py-3 d-flex justify-content-around">
  <li className="nav-item">
    <a className="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary btn-active-light-primary fw-bold px-4 me-1 collapsible active" data-bs-toggle="collapse" href="#kt_social_feeds_comments_1">
      <i className="bi bi-chat-square fs-2 me-1"></i> {Comment.length} Comments
    </a>
  </li>
  <li className="nav-item">
    <a href="#" className="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4 me-1">
      <i className="bi bi-hand-thumbs-up fs-2 me-1"></i>{Answer.upvotes} Upvotes
    </a>
  </li>
  <li className="nav-item">
    <a href="#" className="nav-link btn btn-sm btn-color-gray-600 btn-active-color-primary fw-bold px-4 me-1">
      <i className="bi bi-hand-thumbs-down fs-2 me-1"></i>{Answer.downvotes} Downvotes
    </a>
  </li>
  <li className="nav-item">
    <ReportModal Question={Answer} />
  </li>
</ul>
                    {/* <!--end::Nav--> */}
                    {/* <!--begin::Separator--> */}
                    <div className="separator separator-solid mb-1"></div>
                    {/* <!--end::Separator--> */}
                    {/* <!--begin::Comments--> */}
                    <div className="collapse show" id="kt_social_feeds_comments_1">
                            {populateComments()}
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
                        <textarea type="text"   value={newComment} onChange={handleCommentChange}  className="form-control form-control-solid border ps-5" rows="1" name="search" defaultValue="" data-kt-autosize="true" placeholder="Write your comment.."></textarea>
                        {/* <!--end::Input--> */}
                        {/* <!--begin::Actions--> */}
                        <div className="position-absolute top-0 end-0 translate-middle-x mt-1 me-n14">
                            {/* <!--begin::Btn--> */}
                                    
                        <button  onClick={handleCommentSubmit}  className="btn btn-icon btn-sm btn-color-gray-500 btn-active-color-primary w-25px p-0">
                        <i className="bi bi-send fs-2"></i>
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

                            </div>
                            {/* <!--end::Posts--> */}
                            {/* <!--begin::Show more feeds--> */}
                            <div className="d-flex flex-center">
                                <a href="#" className="btn btn-primary fw-bold px-6" id="kt_social_feeds_more_posts_btn">
                                    {/* <!--begin::Indicator label--> */}
                                    <span className="indicator-label">Show more</span>
                                    {/* <!--end::Indicator label--> */}
                                    {/* <!--begin::Indicator progress--> */}
                                    <span className="indicator-progress">Please wait...
                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                    {/* <!--end::Indicator progress--> */}
                                </a>
                            </div>
                            {/* <!--end::Show more feeds--> */}
                        </div>
                        {/* <!--end::Content--> */}

                    </div>
                </div>
                {/* <!--end::Content wrapper--> */}
                {/* <!--begin::Footer--> */}
                <div id="kt_app_footer" className="app-footer">
                    {/* <!--begin::Footer container--> */}
                    <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
                        {/* <!--begin::Copyright--> */}
                        <div className="text-dark order-2 order-md-1">
                            <span className="text-muted fw-semibold me-1">2023&copy;</span>
                            <a href="https://keenthemes.com" target="_blank" className="text-gray-800 text-hover-primary">Keenthemes</a>
                        </div>
                        {/* <!--end::Copyright--> */}
                        {/* <!--begin::Menu--> */}
                        <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                            <li className="menu-item">
                                <a href="https://keenthemes.com" target="_blank" className="menu-link px-2">About</a>
                            </li>
                            <li className="menu-item">
                                <a href="https://devs.keenthemes.com" target="_blank" className="menu-link px-2">Support</a>
                            </li>
                            <li className="menu-item">
                                <a href="https://themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/" target="_blank" className="menu-link px-2">Purchase</a>
                            </li>
                        </ul>
                        {/* <!--end::Menu--> */}
                    </div>
                    {/* <!--end::Footer container--> */}
                </div>
                {/* <!--end::Footer--> */}
            </div>


        </>
    )
}

export default DetailPost