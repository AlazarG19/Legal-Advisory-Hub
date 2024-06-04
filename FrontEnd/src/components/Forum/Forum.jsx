import React, { useState, useEffect } from 'react';
import AddQuestionModal from "./Elements/AddQuestionModal"
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import IndividualQuestion from './IndividualQuestion';
import Navigation from '../Navigation';

function Forum() {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);
    const [searchText, setSearchText] = useState('');
    const categories = [
        'Criminal',
        'Civil',
        'Family',
        'Employment',
        'Contract',
        'Intellectual Property',
        'Constitutional',
        'Administrative',
        'Real Estate',
        'Tort',
    ];



    useEffect(() => {
        console.log('http://localhost:3000/api/questions/')
        fetch('http://localhost:3000/api/questions/').then(res => res.json()).then(result => {
            setPosts(result)
            setFilteredPosts(result)
            setTotalPages(Math.ceil(result.length / postsPerPage))
            console.log(JSON.stringify(result))
        }).catch((error) => {
            console.log(error)
        });
    }, [postsPerPage])

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }
    const handleCategory = (category) => {
        // e.preventDefault();
        const filteredResults = posts.filter(post => post.category == category);
        setFilteredPosts(filteredResults);
        console.log(filteredPosts)
        setCurrentPage(1);
        setTotalPages(Math.ceil(filteredResults.length / postsPerPage));
    };
    const handleSearch = (e) => {
        // e.preventDefault();
        const filteredResults = posts.filter(post => post.title.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredPosts(filteredResults);
        setCurrentPage(1);
        setTotalPages(Math.ceil(filteredResults.length / postsPerPage));
    };

    const handleAskQuestion = () => {
        // Handle ask question functionality here
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
            <Navigation />
            {/* <!--begin::Page--> */}
            <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
                {/* <!--begin::Wrapper--> */}
                <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
                    {/* <!--begin::Main--> */}
                    <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                        {/* <!--begin::Content wrapper--> */}
                        <div className="d-flex flex-column flex-column-fluid">
                            {/* <!--begin::Content--> */}
                            <div id="kt_app_content" className="app-content flex-column-fluid">
                                {/* <!--begin::Content container--> */}
                                <div id="kt_app_content_container" className="app-container container-xxl">
                                    {/* <!--begin::Social - Feeds --> */}
                                    <div className="d-flex flex-row">
                                        <div
                                            className="d-lg-flex flex-column flex-lg-row-auto w-lg-325px"
                                            data-kt-drawer="true"
                                            data-kt-drawer-name="end-sidebar"
                                            data-kt-drawer-activate="{default: true, lg: false}"
                                            data-kt-drawer-overlay="true"
                                            data-kt-drawer-width="{default:'200px', '250px': '300px'}"
                                            data-kt-drawer-direction="end"
                                            data-kt-drawer-toggle="#kt_social_end_sidebar_toggle"
                                        >
                                            <div className="card mb-5 mb-xl-8">
                                                <div className="card-header border-0 pt-5">
                                                    <h3 className="card-title align-items-start flex-column">
                                                        <span className="card-label fw-bold text-dark">Categories</span>
                                                        <span className="text-muted mt-1 fw-semibold fs-7">Recommended Topics</span>
                                                    </h3>
                                                </div>

                                                <div className="card-body pt-2">
                                                    {categories.map((item, index) => (
                                                        <div key={index}>
                                                            <div className="d-flex flex-stack py-3">
                                                                <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                                                                    <div className="flex-grow-1 me-3">
                                                                        <a className="text-gray-800 text-hover-primary fs-6 fw-bold "  >{item}</a>
                                                                    </div>
                                                                    <a
                                                                        onClick={() => handleCategory(item)}
                                                                        href="#"
                                                                        className="btn btn-sm btn-light fs-8 fw-bold"
                                                                    >
                                                                        {'-'}
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            {index !== categories.length - 1 && (
                                                                <div className="separator separator-dashed my-4"></div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--begin::Content--> */}
                                        <div className="w-100 flex-lg-row-fluid mx-lg-13">
                                            {/* <!--begin::Main form--> */}
                                            <>

                                                <Row className="mt-5">
                                                    <Col className="mx-auto">
                                                        <InputGroup className="mb-3">
                                                            <FormControl
                                                                placeholder="Search for questions"
                                                                value={searchText}
                                                                onChange={(e) => setSearchText(e.target.value)}
                                                            />
                                                            <Button variant="primary" onClick={handleSearch}>Search</Button>
                                                        </InputGroup>
                                                        <AddQuestionModal />
                                                    </Col>
                                                </Row>
                                            </>
                                            {/* <!--end::Main form--> */}
                                            {/* <!--begin::Posts--> */}
                                            <div className="mb-10" id="kt_social_feeds_posts">
  {currentPosts.filter(item => !item.reported).map((item, index) => (
    <IndividualQuestion Question={item} key={index} />
  ))}
</div>
                                            {/* <!--end::Posts--> */}
                                            {/* <!--begin::Pagination--> */}
                                            <div className="d-flex justify-content-center mb-5">
                                                <nav aria-label="Page navigation">
                                                    <ul className="pagination">
                                                        {[...Array(totalPages).keys()].map((page) => (
                                                            <li className={`page-item ${currentPage === page + 1 ? 'active' : ''}`} key={page}>
                                                                <a className="page-link" href="#" onClick={() => handlePageChange(page + 1)}>
                                                                    {page + 1}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </nav>
                                            </div>
                                            {/* <!--end::Pagination--> */}
                                        </div>
                                        {/* <!--end::Content--> */}
                                    </div >
                                    {/* <!--end::Social - Feeds--> */}
                                </div >
                                {/* <!--end::Content container--> */}
                            </div >
                            {/* <!--end::Content--> */}
                        </div >
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
                    </div >
                    {/* <!--end:::Main--> */}
                </div >
                {/* <!--end::Wrapper--> */}
            </div >
        </div >
    )
}

export default Forum