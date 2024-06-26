import React, { useEffect, useState } from 'react'
import MUIDataTable from "mui-datatables";
import { Checkbox, Hidden } from '@mui/material';
import Navbar from '../Navbar';
import Navigation from '../Navigation';
import FormTable from './FormTable';
import { useParams } from 'react-router';
const Index = () => {
    const catagory = useParams()
    const [selectedcategory, setSelectedCategory] = useState("")
    const [data, setData] = useState([])
    const [olddata, setOldData] = useState([])

    const columns2 = [
        {

            Header: 'Name',
            accessor: 'formname',


        },
        {

            Header: 'Category',
            accessor: 'category',


        },
        {

            Header: 'Description',
            accessor: 'formdescription',


        },
        {

            Header: 'Actions',
            accessor: 'formid',


        },
    ]
    const onRowClick = (e) => {
        console.log(e)
        let link = "http://localhost:5173/customform/" + e[0]
        window.location.href = link
    }
    const onCategoryClicked = (category) => {
        setSelectedCategory(category)
        let filtereddata = olddata.filter(form => form.category === category);
        setData(filtereddata)
        console.log(filtereddata)
    }
    const catagoryparams = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/api/forms`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("catagoryparams")
                console.log(catagoryparams.category)
                console.log("dataloaded")
                console.log(data)
                setOldData(data)
                console.log(catagoryparams != {})
                if (catagoryparams.category) {
                    setSelectedCategory(catagoryparams.catagory)
                    console.log("inside catagory params", catagoryparams == true)
                    console.log("before filter", data)
                    console.log("use effect", catagoryparams.catagory)
                    let filtereddata = data.filter(form => form.category === catagoryparams.catagory);
                    console.log(filtereddata)
                    setData(filtereddata)
                } else {
                    setData(data)

                }
            })
            .catch((error) => {
                // console.log("error while sending")
                console.error('Error:', error);
            });

    }, [])
    return (
        <>
            <Navigation />
            <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
                {/* <!--begin::Page--> */}
                <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
                    {/* <!--begin::Wrapper--> */}
                    <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">

                        {/* <!--begin::Main--> */}
                        <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                            {/* <!--begin::Content wrapper--> */}
                            <div className="d-flex flex-column flex-column-fluid">
                                {/* <!--begin::Toolbar--> */}
                                <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                                    {/* <!--begin::Toolbar container--> */}
                                    <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
                                        {/* <!--begin::Page title--> */}
                                        <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                                            {/* <!--begin::Title--> */}
                                            <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">Custom Template</h1>
                                            {/* <!--end::Title--> */}
                                            {/* <!--begin::Breadcrumb--> */}
                                            <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                                                {/* <!--begin::Item--> */}
                                                <li className="breadcrumb-item text-muted">
                                                    <a href="../../demo1/dist/index.html" className="text-muted text-hover-primary">Home</a>
                                                </li>
                                                {/* <!--end::Item--> */}
                                                {/* <!--begin::Item--> */}
                                                <li className="breadcrumb-item">
                                                    <span className="bullet bg-gray-400 w-5px h-2px"></span>
                                                </li>
                                                {/* <!--end::Item--> */}
                                                {/* <!--begin::Item--> */}
                                                <li className="breadcrumb-item text-muted">Custom Template</li>
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
                                <div id="kt_app_content" className="app-content flex-column-fluid">
                                    {/* <!--begin::Content container--> */}
                                    <div id="kt_app_content_container" className="app-container container-xxl">
                                        {/* <!--begin::Navbar--> */}
                                        <div className="card card-flush mb-9" id="kt_user_profile_panel">

                                            {/* <!--begin::Body--> */}
                                            <div className="card-body mt-n19">
                                                {/* <!--begin::Details--> */}
                                                <div className="mt-15">
                                                    {/* <!--begin::Info--> */}
                                                    <div className="d-flex flex-stack flex-wrap align-items-end">
                                                        {/* <!--begin::User--> */}
                                                        <div className="d-flex flex-column">
                                                            {/* <!--begin::Name--> */}
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div className="text-primary fs-2 fw-bolder me-1">Down Below You Can get the latest Templates</div>

                                                            </div>
                                                            {/* <!--end::Name--> */}
                                                        </div>
                                                        {/* <!--end::User--> */}
                                                    </div>
                                                    {/* <!--end::Info--> */}
                                                </div>
                                                {/* <!--end::Details--> */}
                                            </div>
                                        </div>
                                        {/* <!--end::Navbar--> */}
                                        {/* <!--begin::Row--> */}
                                        <div className="row gy-5 g-xl-10">
                                            {/* <!--begin::Col--> */}
                                            <div className="col-xl-4">
                                                {/* <!--begin::List widget 5--> */}
                                                <div className="card card-flush h-xl-100">
                                                    {/* <!--begin::Header--> */}
                                                    <div className="card-header pt-7">
                                                        {/* <!--begin::Title--> */}
                                                        <h3 className="card-title align-items-start flex-column">
                                                            <span className="card-label fw-bold text-dark">Categories</span>
                                                            <span className="text-gray-400 mt-1 fw-semibold fs-6">10 Categories So far</span>
                                                        </h3>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Header--> */}
                                                    {/* <!--begin::Body--> */}
                                                    <div className="card-body">
                                                        {/* <!--begin::Scroll--> */}
                                                        <div className="hover-scroll-overlay-y pe-6 me-n6" style={{ height: "415px" }}>
                                                            {/* <!--begin::Item--> */}
                                                            <div onClick={() => { onCategoryClicked("criminal") }} className={selectedcategory == "criminal" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                                                {/* <!--begin::Info--> */}
                                                                <div className="d-flex flex-stack mb-3">
                                                                    {/* <!--begin::Wrapper--> */}
                                                                    <div className="me-3">
                                                                        {/* <!--begin::Icon--> */}

                                                                        {/* <!--end::Icon--> */}
                                                                        {/* <!--begin::Title--> */}
                                                                        <a href="#" className="text-gray-800 text-hover-primary fw-bold">Criminal</a>
                                                                        {/* <!--end::Title--> */}
                                                                    </div>
                                                                    {/* <!--end::Wrapper--> */}
                                                                </div>
                                                                {/* <!--end::Info--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div onClick={() => { onCategoryClicked("family") }} className={selectedcategory == "family" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                                                {/* <!--begin::Info--> */}
                                                                <div className="d-flex flex-stack mb-3">
                                                                    {/* <!--begin::Wrapper--> */}
                                                                    <div className="me-3">
                                                                        {/* <!--begin::Icon--> */}

                                                                        {/* <!--end::Icon--> */}
                                                                        {/* <!--begin::Title--> */}
                                                                        <a href="#" className="text-gray-800 text-hover-primary fw-bold">Family</a>
                                                                        {/* <!--end::Title--> */}
                                                                    </div>
                                                                    {/* <!--end::Wrapper--> */}
                                                                </div>
                                                                {/* <!--end::Info--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div onClick={() => { onCategoryClicked("employement") }} className={selectedcategory == "employement" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                                                {/* <!--begin::Info--> */}
                                                                <div className="d-flex flex-stack mb-3">
                                                                    {/* <!--begin::Wrapper--> */}
                                                                    <div className="me-3">
                                                                        {/* <!--begin::Icon--> */}

                                                                        {/* <!--end::Icon--> */}
                                                                        {/* <!--begin::Title--> */}
                                                                        <a href="#" className="text-gray-800 text-hover-primary fw-bold">Employement</a>
                                                                        {/* <!--end::Title--> */}
                                                                    </div>
                                                                    {/* <!--end::Wrapper--> */}
                                                                </div>
                                                                {/* <!--end::Info--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div onClick={() => { onCategoryClicked("contract") }} className={selectedcategory == "contract" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                                                {/* <!--begin::Info--> */}
                                                                <div className="d-flex flex-stack mb-3">
                                                                    {/* <!--begin::Wrapper--> */}
                                                                    <div className="me-3">
                                                                        {/* <!--begin::Icon--> */}

                                                                        {/* <!--end::Icon--> */}
                                                                        {/* <!--begin::Title--> */}
                                                                        <a href="#" className="text-gray-800 text-hover-primary fw-bold">Contract</a>
                                                                        {/* <!--end::Title--> */}
                                                                    </div>
                                                                    {/* <!--end::Wrapper--> */}
                                                                </div>
                                                                {/* <!--end::Info--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div onClick={() => { onCategoryClicked("intellectual") }} className={selectedcategory == "intellectual" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                                                {/* <!--begin::Info--> */}
                                                                <div className="d-flex flex-stack mb-3">
                                                                    {/* <!--begin::Wrapper--> */}
                                                                    <div className="me-3">
                                                                        {/* <!--begin::Icon--> */}

                                                                        {/* <!--end::Icon--> */}
                                                                        {/* <!--begin::Title--> */}
                                                                        <a href="#" className="text-gray-800 text-hover-primary fw-bold">Intellectual Property</a>
                                                                        {/* <!--end::Title--> */}
                                                                    </div>
                                                                    {/* <!--end::Wrapper--> */}
                                                                </div>
                                                                {/* <!--end::Info--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div onClick={() => { onCategoryClicked("constitutional") }} className={selectedcategory == "constitutional" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                                                {/* <!--begin::Info--> */}
                                                                <div className="d-flex flex-stack mb-3">
                                                                    {/* <!--begin::Wrapper--> */}
                                                                    <div className="me-3">
                                                                        {/* <!--begin::Icon--> */}

                                                                        {/* <!--end::Icon--> */}
                                                                        {/* <!--begin::Title--> */}
                                                                        <a href="#" className="text-gray-800 text-hover-primary fw-bold">Constitutional</a>
                                                                        {/* <!--end::Title--> */}
                                                                    </div>
                                                                    {/* <!--end::Wrapper--> */}
                                                                </div>
                                                                {/* <!--end::Info--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div onClick={() => { onCategoryClicked("administrative") }} className={selectedcategory == "administrative" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                                                {/* <!--begin::Info--> */}
                                                                <div className="d-flex flex-stack mb-3">
                                                                    {/* <!--begin::Wrapper--> */}
                                                                    <div className="me-3">
                                                                        {/* <!--begin::Icon--> */}

                                                                        {/* <!--end::Icon--> */}
                                                                        {/* <!--begin::Title--> */}
                                                                        <a href="#" className="text-gray-800 text-hover-primary fw-bold">Administrative</a>
                                                                        {/* <!--end::Title--> */}
                                                                    </div>
                                                                    {/* <!--end::Wrapper--> */}
                                                                </div>
                                                                {/* <!--end::Info--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div onClick={() => { onCategoryClicked("realestate") }} className={selectedcategory == "realestate" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                                                {/* <!--begin::Info--> */}
                                                                <div className="d-flex flex-stack mb-3">
                                                                    {/* <!--begin::Wrapper--> */}
                                                                    <div className="me-3">
                                                                        {/* <!--begin::Icon--> */}

                                                                        {/* <!--end::Icon--> */}
                                                                        {/* <!--begin::Title--> */}
                                                                        <a href="#" className="text-gray-800 text-hover-primary fw-bold">Real Estate</a>
                                                                        {/* <!--end::Title--> */}
                                                                    </div>
                                                                    {/* <!--end::Wrapper--> */}
                                                                </div>
                                                                {/* <!--end::Info--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}
                                                            {/* <!--begin::Item--> */}
                                                            <div onClick={() => { onCategoryClicked("tort") }} className={selectedcategory == "tort" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                                                {/* <!--begin::Info--> */}
                                                                <div className="d-flex flex-stack mb-3">
                                                                    {/* <!--begin::Wrapper--> */}
                                                                    <div className="me-3">
                                                                        {/* <!--begin::Icon--> */}

                                                                        {/* <!--end::Icon--> */}
                                                                        {/* <!--begin::Title--> */}
                                                                        <a href="#" className="text-gray-800 text-hover-primary fw-bold">Tort</a>
                                                                        {/* <!--end::Title--> */}
                                                                    </div>
                                                                    {/* <!--end::Wrapper--> */}
                                                                </div>
                                                                {/* <!--end::Info--> */}
                                                            </div>
                                                            {/* <!--end::Item--> */}

                                                        </div>
                                                        {/* <!--end::Scroll--> */}
                                                    </div>
                                                    {/* <!--end::Body--> */}
                                                </div>
                                                {/* <!--end::List widget 5--> */}
                                            </div>
                                            {/* <!--end::Col--> */}
                                            {/* <!--begin::Col--> */}
                                            <div className="col-xl-8">
                                                {/* <!--begin::Table Widget 5--> */}
                                                <div className="card card-flush h-xl-100">
                                                    {/* <!--begin::Card header--> */}
                                                    <div className="card-header pt-7">
                                                        {/* <!--begin::Title--> */}
                                                        <h3 className="card-title align-items-start flex-column">
                                                            <span className="card-label fw-bold text-dark">List of Custom Templates</span>
                                                            <span className="text-gray-400 mt-1 fw-semibold fs-6">Total {data.length} Custom Template Available</span>
                                                        </h3>
                                                        {/* <!--end::Title--> */}
                                                    </div>
                                                    {/* <!--end::Card header--> */}
                                                    {/* <!--begin::Card body--> */}

                                                    <div className="card-body" style={{ overflow: "scroll" }}>
                                                        <FormTable columns={columns2} data={data} />
                                                    </div>
                                                    {/* <!--end::Card body--> */}
                                                </div>
                                                {/* <!--end::Table Widget 5--> */}
                                            </div>
                                            {/* <!--end::Col--> */}
                                        </div>
                                        {/* <!--end::Row--> */}
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
            </div >
        </>
    )
}

export default Index