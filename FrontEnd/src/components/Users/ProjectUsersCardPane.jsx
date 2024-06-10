import React, { useEffect, useState } from 'react';
import '../../../public/assets/css/style.bundle.css'
import Pagination from './Pagination';
import UserCard from './UserCard';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../Navigation';
import DetailSideBar from './DetailSideBar';
import axios from "axios";
const ProjectUsersCardPane = () => {
    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/login')

    };
    const [users, setUsers] = useState([]);

    const [olduser, setOldUser] = useState([])

    const [selectedcategory, setSelectedCategory] = useState("")
    const navigate = useNavigate();

    const onCategoryClicked = (category) => {
        console.log(olduser)
        console.log("clickedcategory", category)
        setSelectedCategory(category)
        let filtereddata = olduser.filter(user => user.Details[0].category === category);
        console.log(filtereddata)
        setUsers(filtereddata)
    }

    useEffect(() => {
        axios.get('http://localhost:3000/getFreelancers')
            .then(result => {
                console.log(result.data);
                const filteredUsers = result.data.filter(user => user.userType === "freelancer");
                setUsers(filteredUsers);
                setOldUser(filteredUsers);
            });
    }, []);
    return (
        <>
            <div id="kt_project_users_card_pane" className="tab-pane fade show active">
                <Navigation />
                {/* <div className="row mt-5 col-md-12">
                    <div className="col-2">
                        <div className="card card-flush h-xl-100" style={{ minWidth: "220px", boxShadow: "3px 1px 16px rgba(136, 136, 136, 0.14) 3px 1px 16px" }}>
                            <div className="card-header pt-7">
                                <h3 className="card-title align-items-start flex-column">
                                    <span className="card-label fw-bold text-dark">Categories</span>
                                    <span className="text-gray-400 mt-1 fw-semibold fs-6">10 Categories So far</span>
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className="hover-scroll-overlay-y pe-6 me-n6" style={{ height: "74vh" }}>
                                    <div onClick={() => { onCategoryClicked("criminal") }} className={selectedcategory == "criminal" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                        <div className="d-flex flex-stack mb-3">
                                            <div className="me-3">

                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Criminal</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={() => { onCategoryClicked("family") }} className={selectedcategory == "family" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                        <div className="d-flex flex-stack mb-3">
                                            <div className="me-3">

                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Family</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={() => { onCategoryClicked("employement") }} className={selectedcategory == "employement" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                        <div className="d-flex flex-stack mb-3">
                                            <div className="me-3">

                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Employement</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={() => { onCategoryClicked("contract") }} className={selectedcategory == "contract" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                        <div className="d-flex flex-stack mb-3">
                                            <div className="me-3">

                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Contract</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={() => { onCategoryClicked("intellectual") }} className={selectedcategory == "intellectual" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                        <div className="d-flex flex-stack mb-3">
                                            <div className="me-3">

                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Intellectual Property</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={() => { onCategoryClicked("constitutional") }} className={selectedcategory == "constitutional" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                        <div className="d-flex flex-stack mb-3">
                                            <div className="me-3">

                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Constitutional</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={() => { onCategoryClicked("administrative") }} className={selectedcategory == "administrative" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                        <div className="d-flex flex-stack mb-3">
                                            <div className="me-3">

                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Administrative</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={() => { onCategoryClicked("realestate") }} className={selectedcategory == "realestate" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                        <div className="d-flex flex-stack mb-3">
                                            <div className="me-3">

                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Real Estate</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div onClick={() => { onCategoryClicked("tort") }} className={selectedcategory == "tort" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                        <div className="d-flex flex-stack mb-3">
                                            <div className="me-3">

                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Tort</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-10 row mt-5'>

                        <UserCard users={users} />
                    </div>
                </div> */}
                {/* <Pagination /> */}
                {/* <!--begin::Main--> */}
                <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
                    {/* <!--begin::Content wrapper--> */}
                    <div class="d-flex flex-column flex-column-fluid">
                        {/* <!--begin::Toolbar--> */}
                        <div id="kt_app_toolbar" class="app-toolbar py-3 py-lg-6">
                            {/* <!--begin::Toolbar container--> */}
                            <div id="kt_app_toolbar_container" class="app-container container-xxl d-flex flex-stack">
                                {/* <!--begin::Page title--> */}
                                <div class="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                                    {/* <!--begin::Title--> */}
                                    <h1
                                        class="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                                        Legal Experts</h1>
                                    {/* <!--end::Title--> */}
                                    {/* <!--begin::Breadcrumb--> */}
                                    <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                                        {/* <!--begin::Item--> */}
                                        <li class="breadcrumb-item text-muted">
                                            <a href="../../demo1/dist/index.html"
                                                class="text-muted text-hover-primary">Home</a>
                                        </li>
                                        {/* <!--end::Item--> */}
                                        {/* <!--begin::Item--> */}
                                        <li class="breadcrumb-item">
                                            <span class="bullet bg-gray-400 w-5px h-2px"></span>
                                        </li>
                                        {/* <!--end::Item--> */}
                                        {/* <!--begin::Item--> */}
                                        <li class="breadcrumb-item text-muted">Legal Experts</li>
                                        {/* <!--end::Item--> */}
                                    </ul>
                                    {/* <!--end::Breadcrumb--> */}
                                </div>
                                {/* <!--end::Page title--> */}
                            </div>
                            {/* <!--end::Toolbar container--> */}
                        </div>
                        {/* <!--end::Toolbar--> */}
                        {/* <!--begin::Content--> */}
                        <div id="kt_app_content" class="app-content flex-column-fluid" style={{}}>
                            {/* <!--begin::Content container--> */}
                            <div id="kt_app_content_container" class="app-container container-xxl">
                                {/* <!--begin::Social - Followers --> */}
                                <div class="d-flex flex-row">
                                    {/* <!--begin::Start sidebar--> */}
                                    <div class="d-lg-flex flex-column flex-lg-row-auto w-lg-325px" data-kt-drawer="true"
                                        style={{ minWidth: "220px", boxShadow: "3px 1px 16px rgba(136, 136, 136, 0.14) 3px 1px 16px" }}>
                                        <div className="card card-flush h-xl-100" style={{ boxShadow: "3px 1px 16px rgba(136, 136, 136, 0.14) 3px 1px 16px" }}>
                                            <div className="card-header pt-7">
                                                <h3 className="card-title align-items-start flex-column">
                                                    <span className="card-label fw-bold text-dark">Categories</span>
                                                    <span className="text-gray-400 mt-1 fw-semibold fs-6">10 Categories So far</span>
                                                </h3>
                                            </div>
                                            <div className="card-body">
                                                <div className="hover-scroll-overlay-y pe-6 me-n6" style={{ height: "74vh" }}>
                                                    <div onClick={() => { onCategoryClicked("criminal") }} className={selectedcategory == "criminal" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                                        <div className="d-flex flex-stack mb-3">
                                                            <div className="me-3">

                                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Criminal</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div onClick={() => { onCategoryClicked("family") }} className={selectedcategory == "family" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                                        <div className="d-flex flex-stack mb-3">
                                                            <div className="me-3">

                                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Family</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div onClick={() => { onCategoryClicked("employement") }} className={selectedcategory == "employement" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                                        <div className="d-flex flex-stack mb-3">
                                                            <div className="me-3">

                                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Employement</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div onClick={() => { onCategoryClicked("contract") }} className={selectedcategory == "contract" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                                        <div className="d-flex flex-stack mb-3">
                                                            <div className="me-3">

                                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Contract</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div onClick={() => { onCategoryClicked("intellectual") }} className={selectedcategory == "intellectual" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                                        <div className="d-flex flex-stack mb-3">
                                                            <div className="me-3">

                                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Intellectual Property</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div onClick={() => { onCategoryClicked("constitutional") }} className={selectedcategory == "constitutional" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                                        <div className="d-flex flex-stack mb-3">
                                                            <div className="me-3">

                                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Constitutional</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div onClick={() => { onCategoryClicked("administrative") }} className={selectedcategory == "administrative" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                                        <div className="d-flex flex-stack mb-3">
                                                            <div className="me-3">

                                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Administrative</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div onClick={() => { onCategoryClicked("realestate") }} className={selectedcategory == "realestate" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                                        <div className="d-flex flex-stack mb-3">
                                                            <div className="me-3">

                                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Real Estate</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div onClick={() => { onCategoryClicked("tort") }} className={selectedcategory == "tort" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                                        <div className="d-flex flex-stack mb-3">
                                                            <div className="me-3">

                                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Tort</a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!--end::Start sidebar--> */}
                                    {/* <!--begin::Content--> */}
                                    <div class="w-100 flex-lg-row-fluid mx-lg-13" >
                                        {/* <!--begin::Followers toolbar--> */}
                                        <div class="d-flex flex-wrap flex-stack mb-6">
                                            {/* <!--begin::Title--> */}
                                            <h3 class="text-gray-800 fw-bold my-2">Total Legal Experts
                                                <span class="fs-6 text-gray-400 fw-semibold ms-1">({users.length})</span>
                                            </h3>
                                            {/* <!--end::Title--> */}

                                        </div>
                                        {/* <!--end::Followers toolbar--> */}
                                        {/* <!--begin::Row--> */}
                                        <div class="row g-6 mb-6 g-xl-9 mb-xl-9">
                                            {/* <!--begin::Followers--> */}
                                            {/* <!--begin::Col--> */}

                                            <UserCard users={users} />
                                            {/* <!--end::Col--> */}
                                            {/* <!--end::Followers--> */}
                                        </div>
                                        {/* <!--end::Row--> */}
                                    </div>
                                    {/* <!--end::Content--> */}
                                </div>
                                {/* <!--end::Social - Followers--> */}
                            </div>
                            {/* <!--end::Content container--> */}
                        </div>
                        {/* <!--end::Content--> */}
                    </div>
                    {/* <!--end::Content wrapper--> */}
                    {/* <!--begin::Footer--> */}
                    <div id="kt_app_footer" class="app-footer">
                        {/* <!--begin::Footer container--> */}
                        <div
                            class="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
                            {/* <!--begin::Copyright--> */}
                            <div class="text-dark order-2 order-md-1">
                                <span class="text-muted fw-semibold me-1">2023&copy;</span>
                                <a href="https://keenthemes.com" target="_blank"
                                    class="text-gray-800 text-hover-primary">Keenthemes</a>
                            </div>
                            {/* <!--end::Copyright--> */}
                            {/* <!--begin::Menu--> */}
                            <ul class="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                                <li class="menu-item">
                                    <a href="https://keenthemes.com" target="_blank" class="menu-link px-2">About</a>
                                </li>
                                <li class="menu-item">
                                    <a href="https://devs.keenthemes.com" target="_blank"
                                        class="menu-link px-2">Support</a>
                                </li>
                                <li class="menu-item">
                                    <a href="https://themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/"
                                        target="_blank" class="menu-link px-2">Purchase</a>
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
        </>
    );
};

export default ProjectUsersCardPane;
