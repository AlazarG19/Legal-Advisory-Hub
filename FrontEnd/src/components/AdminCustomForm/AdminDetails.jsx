import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../Navigation';
import DeleteForm from './DeleteForm';
const Details = () => {

    const { id } = useParams();
    console.log(id)
    const [formdetail, setFormDetail] = useState({})
    const [data, setData] = useState([])
    const navigate = useNavigate();

    const [selectedDocumentId, setSelectedDocumentId] = useState(id);
    const [showConfirmation, setShowConfirmation] = useState(false);
    let onLinkClick = (link) => {
        navigate(link)

    }
    useEffect(() => {
        fetch(`http://localhost:3000/api/forms/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("dataloaded")
                console.log(data)
                setFormDetail({ formname: data[0]["formname"], formid: data[0]["formid"], formdescription: data[0]["formdescription"], category: data[0]["category"] })
                fetch(`http://localhost:3000/api/forms`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then((response) => response.json())
                    .then((data2) => {
                        let filtereddata = data2.filter(form => form.category === data[0]["category"] && form.formid != data[0]["formid"]);
                        console.log("dataloaded")
                        console.log(filtereddata)
                        setData(filtereddata)
                    })
                    .catch((error) => {
                        // console.log("error while sending")
                        console.error('Error:', error);
                    });
            })
            .catch((error) => {
                // console.log("error while sending") 
                console.error('Erro:', error);
            });
    }, [])

    const onEdit = () => {

        let link = "http://localhost:5173/customforms/edit/" + formdetail.formid
        window.location.href = link

    }
    const handleDropdownDelete = () => {
        setShowConfirmation(true);
    };
    return (
        <>
            <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
                <Navigation />
                {/* <!--begin::Toolbar--> */}
                <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                    {/* <!--begin::Toolbar container--> */}
                    <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
                        {/* <!--begin::Page title--> */}
                        <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                            {/* <!--begin::Title--> */}
                            <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">Custom Form</h1>
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
                                <li className="breadcrumb-item text-muted">Custom Form</li>
                                {/* <!--end::Item--> */}
                            </ul>
                            {/* <!--end::Breadcrumb--> */}
                        </div>
                        {/* <!--end::Page title--> */}
                    </div>
                    {/* <!--end::Toolbar container--> */}
                </div>
                {/* <!--end::Toolbar--> */}
                {/* <!--begin::Page--> */}
                <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
                    {/* <!--begin::Wrapper--> */}
                    <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">

                        {/* <!--begin::Main--> */}
                        <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
                            {/* <!--begin::Content wrapper--> */}
                            <div class="d-flex flex-column flex-column-fluid">
                                {/* <!--begin::Content--> */}
                                <div id="kt_app_content" class="app-content flex-column-fluid">
                                    {/* <!--begin::Content container--> */}
                                    <div id="kt_app_content_container" class="app-container container-xxl">

                                        {/* <!--begin::Row--> */}
                                        <div class="row g-6 g-xl-9">
                                            {/* <!--begin::Col--> */}
                                            <div class="col-lg-6">
                                                {/* <!--begin::Card--> */}
                                                <div class="card card-flush h-lg-100">
                                                    {/* <!--begin::Card header--> */}
                                                    <div class="card-header mt-6">
                                                        {/* <!--begin::Card title--> */}
                                                        <div class="card-title flex-column">
                                                            <h3 class="fw-bold mb-1 text-primary">Title : {formdetail["formname"]}</h3>
                                                        </div>
                                                        {/* <!--end::Card title--> */}
                                                    </div>
                                                    {/* <!--end::Card toolbar--> */}
                                                    {/* <!--begin::Card body--> */}
                                                    <div class="card-body d-flex flex-column p-9 pt-3 mb-9">
                                                        {/* <!--begin::Item--> */}
                                                        <div class="d-flex align-items-center mb-5">
                                                            {/* <!--begin::Details--> */}
                                                            <div class="fw-semibold">
                                                                <div class="fs-5 fw-bold text-gray-900 ">Category : {formdetail["category"]}</div>
                                                            </div>
                                                            {/* <!--end::Details--> */}
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                        {/* <!--begin::Item--> */}
                                                        <div class="d-flex align-items-center mb-5">
                                                            {/* <!--begin::Details--> */}
                                                            <div class="fw-semibold">
                                                                <div class="fs-5 fw-bold text-gray-900 "> {formdetail["formdescription"]}</div>
                                                            </div>
                                                            {/* <!--end::Details--> */}
                                                        </div>
                                                        {/* <!--end::Item--> */}
                                                    </div>
                                                    {/* <!--end::Card body--> */}
                                                    {/* <!--begin::Actions--> */}
                                                    <div className="d-flex ">
                                                        <button type="button" className="btn btn-lg btn-primary mx-10" onClick={onEdit} data-kt-element="settings-next">
                                                            <span className="indicator-label">Edit</span>
                                                        </button>
                                                        <button type="button" className="btn btn-lg btn-primary mx-10" onClick={() => { handleDropdownDelete(id) }} data-kt-element="settings-next">
                                                            <span className="indicator-label">Delete</span>
                                                        </button>
                                                    </div>
                                                    {/* <!--end::Actions--> */}
                                                </div>
                                                {/* <!--end::Card--> */}
                                            </div>
                                            {/* <!--end::Col--> */}
                                            {/* <!--begin::Col--> */}
                                            <div class="col-lg-6">
                                                {/* <!--begin::Card--> */}
                                                <div class="card card-flush h-lg-100">
                                                    {/* <!--begin::Card header--> */}
                                                    <div class="card-header mt-6">
                                                        {/* <!--begin::Card title--> */}
                                                        <div class="card-title flex-column">
                                                            <h3 class="fw-bold mb-1">Related Files</h3>
                                                            <div class="fs-6 text-gray-400">Total {data.length} fiels</div>
                                                        </div>
                                                        {/* <!--end::Card title--> */}
                                                        {/* <!--begin::Card toolbar--> */}
                                                        <div class="card-toolbar">
                                                            <button onClick={() => { window.location.href = "http://localhost:5173/customforms/edit/" + element.formid; window.location.reload(); }} class="btn btn-bg-light btn-active-color-primary btn-sm">View All</button>
                                                        </div>
                                                        {/* <!--end::Card toolbar--> */}
                                                    </div>
                                                    {/* <!--end::Card header--> */}
                                                    {/* <!--begin::Card body--> */}
                                                    <div class="card-body p-9 pt-3">
                                                        {/* <!--begin::Files--> */}
                                                        <div class="d-flex flex-column mb-9">
                                                            {
                                                                data.map((element) => {
                                                                    {/* <!--begin::File--> */ }
                                                                    return <div class="d-flex align-items-center mb-5">
                                                                        {/* <!--begin::Icon--> */}
                                                                        <div class="symbol symbol-30px me-5">
                                                                            <img alt="Icon" src="/assets/media/svg/files/doc.svg" />
                                                                        </div>
                                                                        {/* <!--end::Icon--> */}
                                                                        {/* <!--begin::Details--> */}
                                                                        <div class="fw-semibold">
                                                                            <button onClick={() => { onLinkClick("/customforms/" + element.formid) }} class="fs-6 fw-bold text-dark border-0 bg-white text-hover-primary" href="#">{element.formname}</button>

                                                                        </div>
                                                                        {/* <!--end::Details--> */}
                                                                    </div>
                                                                    {/* <!--end::File--> */ }
                                                                })
                                                            }
                                                        </div>
                                                        {/* <!--end::Files--> */}
                                                    </div>
                                                    {/* <!--end::Card body --> */}
                                                </div>
                                                {/* <!--end::Card--> */}
                                            </div>
                                            {/* <!--end::Col--> */}

                                        </div>
                                        {/* <!--end::Row--> */}
                                        {/* <!--end::Card--> */}
                                    </div>
                                    {/* <!--end::Content container--> */}
                                </div>
                                {/* <!--end::Content--> */}
                            </div>
                            {/* <!--end::Content wrapper--> */}
                            {/* <!--begin::Footer--> */}
                            <div id="kt_app_footer" class="app-footer">
                                {/* <!--begin::Footer container--> */}
                                <div class="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
                                    {/* <!--begin::Copyright--> */}
                                    <div class="text-dark order-2 order-md-1">
                                        <span class="text-muted fw-semibold me-1">2023&copy;</span>
                                        <a href="https://keenthemes.com" target="_blank" class="text-gray-800 text-hover-primary">Keenthemes</a>
                                    </div>
                                    {/* <!--end::Copyright--> */}
                                    {/* <!--begin::Menu--> */}
                                    <ul class="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                                        <li class="menu-item">
                                            <a href="https://keenthemes.com" target="_blank" class="menu-link px-2">About</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://devs.keenthemes.com" target="_blank" class="menu-link px-2">Support</a>
                                        </li>
                                        <li class="menu-item">
                                            <a href="https://themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/" target="_blank" class="menu-link px-2">Purchase</a>
                                        </li>
                                    </ul>
                                    {/* <!--end::Menu--> */}
                                </div>
                                {/* <!--end::Footer container--> */}
                            </div>
                            {/* <!--end::Footer--> */}
                        </div>
                        {/* <!--end:::Main--> */}
                        {showConfirmation && <DeleteForm documentId={selectedDocumentId} />}

                    </div>
                    {/* <!--end::Wrapper--> */}
                </div>
                {/* <!--end::Page--> */}
            </div >
        </>

    )
}

export default Details