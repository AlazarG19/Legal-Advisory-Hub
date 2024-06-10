import React, { useState, useEffect } from 'react';
// import CategoriesSection from './CategoriesSection'
import IndividualQuestion from './IndividualQuestion';
import AddAnswerModal from './Elements/AddAnswerModal';
import ReportModal from './Elements/ReportModal';
import { useParams } from 'react-router-dom';
import IndividualAnswer from './IndividualAnswer';
// import RelatedQuestions from './Elements/RelatedQuestions';
import { Container, Row, Col, Badge, Card, ListGroup } from 'react-bootstrap';
import { BsQuestionCircle, BsPencil, BsFillHandThumbsUpFill } from 'react-icons/bs';
import { BrowserRouter, Route, Link } from 'react-router-dom';


function Answers() {

    const { id } = useParams();
    const [Question, setQuestion] = useState([]);
    const [Answer, setAnswer] = useState([]);
    const [data, setData] = useState('');
    const [Questions, setQuestions] = useState([])
    const [upvoteCount, setUpvoteCount] = useState(0);
    const [numAns, setNumAns] = useState(0);
    const [hasUpvoted, setHasUpvoted] = useState(false);

    const handleUpvoteClick = () => {
        if (!hasUpvoted) {
            setUpvoteCount((prevCount) => prevCount + 1);
            setHasUpvoted(true);
        }
    };


    useEffect(() => {
        fetch(`http://localhost:3000/api/questions/${id}`).then(res => res.json()).then(result => {
            // result = result.filter(item => item.reported != true )
            setQuestion(result)
            console.log("This is for Question   ", result)
            console.log()
        }).catch((error) => {
            console.log(error)
        });
    }, [])
    useEffect(() => {
        // console.log(category)
        console.log(Question, "In quote")
        fetch(`http://localhost:3000/api/questions/category/${id}`)
            .then(res => res.json())
            .then(result => {
                // console.log(category)
                result = result.filter(item => item.reported !== true)
                // Limit the result to 5 items
                setQuestions(result.slice(0, 5))
                // console.log(category,"Category ")
                console.log("this is related squestion start")
                console.log(result.slice(0, 5))
                console.log("this is related squestion End")
            })
            .catch((error) => {
                console.log(error)
            });
    }, [])

    useEffect(() => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            setData(Question.category);
            // Update the component's state
        }, 2000);
        console.log(data, "Data visualization")
    }, []);


    useEffect(() => {
        fetch(`http://localhost:3000/api/answers/all/${id}`).then(res => res.json()).then(result => {

            result = result.filter(item => item.reported != true)
            setTimeout(() => {
                setAnswer(result)
                // Update the component's state
            }, 1000);
            console.log("This is for answer")
            console.log(JSON.stringify(result))
        }).catch((error) => {
            console.log(error)
        });
    }, [])
    const populateAnswers = () => {
        if (Answer.length > 0) {
            return Answer.map((answer, index) => {
                return (
                    <>
                        <IndividualAnswer Answer={answer} Feed={true} />
                    </>

                )
            })
        } else {
            return <h1>No Answers</h1>
        };
    }

    return (
        <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
            {/* <!--begin::Page--> */}
            <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
                {/* <!--begin::Wrapper--> */}
                <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">

                    {/* <!--begin::Main--> */}

                    <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                        {/* <!--begin::Content wrapper--> */}

                        <div className="d-flex flex flex-column-fluid">
                            {/* <!--begin::Content--> */}


                            <div id="kt_app_content" className="">
                                {/* <!--begin::Content container--> */}
                                {/* {Question.category} */}




                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3 ml-auto">





                                            <div className="card b">
                                                {/* <!--begin::Header--> */}
                                                <div className="card-header border-0">
                                                    <h3 className="card-title align-items-start flex-column">
                                                        <span className="card-label fw-bold text-dark">Related Questions</span>

                                                    </h3>
                                                </div>
                                                {/* <!--end::Header--> */}
                                                {/* <!--begin::Body--> */}

                                                {Questions.filter(item => item._id !== id).map((item, index) => {
                                                    return (
                                                        <div className="card-body" key={item._id}>
                                                            {/* <!--begin::Item--> */}
                                                            <div className="d-flex flex-stack">
                                                                {/* <!--begin::Symbol--> */}
                                                                {/* <!--end::Symbol--> */}
                                                                {/* <!--begin::Section--> */}
                                                                <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                                                                    {/* <!--begin:Author--> */}
                                                                    <div className="flex-grow-1 me-2">
                                                                        <Link className="text-gray-800 text-hover-primary fs-6 fw-bold" onClick={() => window.location.reload()} to={`/answers/${item._id}`}>{item.title}</Link></div>
                                                                    {/* <!--end:Author--> */}
                                                                </div>
                                                                {/* <!--end::Section--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Separator--> */}
                                                            <div className="separator separator-dashed"></div>
                                                            {/* <!--end::Separator--> */}
                                                            {/* <!--begin::Item--> */}
                                                            {/* <!--end::Item--> */}
                                                        </div>
                                                    );
                                                })}

                                                <div className="card-body">
                                                    {/* <!--begin::Item--> */}
                                                    <div className="d-flex flex-stack">
                                                        {/* <!--begin::Symbol--> */}
                                                        {/* <!--end::Symbol--> */}
                                                        {/* <!--begin::Section--> */}




                                                        {/* <!--end::Section--> */}
                                                    </div>
                                                    {/* <!--end::Item--> */}
                                                    {/* <!--begin::Separator--> */}
                                                    <div className="separator separator-dashed"></div>
                                                    {/* <!--end::Separator--> */}
                                                    {/* <!--begin::Item--> */}
                                                    {/* <!--end::Item--> */}
                                                </div>

                                                {/* <!--end::Body--> */}
                                            </div>


                                        </div>
                                        <div className="col">


                                            <div id="kt_app_content_container" className="app-container container-xxl">
                                                {/* <!--begin::Social - Feeds --> */}

                                                <div className="d-flex flex-row">
                                                    {/* <!--begin::Content--> */}
                                                    <div className="w-100 flex-lg-row-fluid mx-lg-13">
                                                        {/* <!--begin::Main form--> */}

                                                        {/* <!--end::Main form--> */}
                                                        {/* <!--begin::Posts--> */}
                                                        <div className="card mb-3 border-primary shadow-lg">
                                                            <div className="card-body">
                                                                <div className="d-flex align-items-center mb-3">
                                                                    <div className="bg-primary p-2 rounded-circle me-2">
                                                                        <BsQuestionCircle className="text-white fs-4" />
                                                                    </div>
                                                                    <h5 className="card-title mb-0 text-primary fw-bold">Question</h5>
                                                                </div>
                                                                <h6 className="card-title fw-bold p-0 text-dark">{Question.title}</h6>
                                                                <p className="card-text">
                                                                    <span className="text-primary fw-bold">{Answer.length}</span> Answers · <span className="text-primary fw-bold">{Question.category}</span>
                                                                </p>
                                                            </div>
                                                            <div className="card-footer bg-white border-top-0 d-flex justify-content-between align-items-center">
                                                                <div className="ms-auto">
                                                                    <ReportModal reportType="question" Content={Question} />
                                                                </div>
                                                            </div>
                                                            <div className="border-bottom border-primary"></div>
                                                        </div>
                                                        <div className="mt-5">
                                                            <h5 className="fw-bold text-primary">The following are answers for the question: -</h5>
                                                            <hr className="border-primary" />
                                                        </div>

                                                        {populateAnswers()}
                                                        {/* <!--end::Posts--> */}
                                                    </div>
                                                    {/* <!--end::Content--> */}

                                                </div>
                                                {/* <!--end::Social - Feeds--> */}
                                            </div>
                                            {/* <!--end::Content container--> */}
                                        </div>
                                    </div>
                                </div>



                            </div>
                            {/* <!--end::Content--> */}
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
                    {/* <!--end:::Main--> */}
                </div>
                {/* <!--end::Wrapper--> */}
            </div>
            {/* <!--end::Page--> */}
        </div>
    )
}

export default Answers