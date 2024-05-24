import React, { useState, useEffect } from 'react';
import CategoriesSection from './CategoriesSection'
import CreatePost from './CreatePost'
import IndividualPost from './IndividualPost'
import IndividualQuestion from './IndividualQuestion';


function Forum() {

    const [Post, setPost] = useState([]);

    useEffect(() => {
        console.log('http://localhost:8080/api/questions/')
        fetch('http://localhost:8080/api/questions/').then(res => res.json()).then(result => {
          setPost(result)
          console.log(JSON.stringify(result))
        }).catch((error) => {
          console.log(error)
        });
      }, [])
    return (
        <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
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
                                        <CategoriesSection />
                                        {/* <!--begin::Content--> */}
                                        <div className="w-100 flex-lg-row-fluid mx-lg-13">
                                            {/* <!--begin::Main form--> */}
                                            <CreatePost />
                                            {/* <!--end::Main form--> */}
                                            {/* <!--begin::Posts--> */}
                                            <div className="mb-10" id="kt_social_feeds_posts">
                                                {/* <!--begin::Post 1--> */}
                                                {Post.map((item, index) => (
                                                    <IndividualQuestion  Question={item} />
                                                ))}
                                                

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
                                    {/* <!--end::Social - Feeds--> */}
                                </div>
                                {/* <!--end::Content container--> */}
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

export default Forum