import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import ReviewModal from './Elements/reviewModal';

function ManageReport() {


    function formatDateTime(dateTimeString) {
        const dateTime = new Date(dateTimeString);
        const options = { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: 'numeric', 
          minute: 'numeric',
          second: 'numeric',
          timeZone: 'UTC'
        };
      
        return dateTime.toLocaleString('en-US', options);
      }
    // const { id } = useParams();
    const [reports, setReport] = useState([]);
    


    useEffect(() => {
        fetch("http://localhost:3000/api/forumreport/").then(res => res.json()).then(result => {

            setReport(result)

            // console.log("This is for answer")
            // console.log(JSON.stringify(result))
        }).catch((error) => {
            console.log(error)
        });
    }, [])




    const populateReports = () => {
        if (reports.length > 0) {
            return reports.map((report, index) => {
                return (
                    <>
                        {/* { <!--begin::Table body--> } */}
                        <tbody className="text-gray-600 fw-semibold">
                            {/* <!--begin::Table row--> */}
                            <tr>
                                {/* <!--begin::Checkbox--> */}
                                <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                        <input className="form-check-input" type="checkbox" value="1" />
                                    </div>
                                </td>
                                {/* <!--end::Checkbox-->
                                                <!--begin::User=--> */}
                                <td className="d-flex align-items-center">

                                    <div className="d-flex flex-column">
                                        {/* <a href="../../demo1/dist/apps/user-management/users/view.html" className=""></a> */}
                                        <div className="badge badge-light fw-bold">{report.reportType}</div>
                                        {/* <Link to={`/mcomments/${report._id}`} className="text-gray-800 text-hover-primary mb-1"><div className="text-gray-800 text-hover-primary mb-1" dangerouslySetInnerHTML={{ __html: answer.body }} /></Link> */}
                                        {/* <span>smith@kpmg.com</span> */}
                                    </div>
                                    {/* <!--begin::User details--> */}
                                </td>
                                {/* <!--end::User=--> */}
                                {/* <!--begin::Role=--> */}
                                {/* <td>{question.category}</td> */}
                                {/* <!--end::Role=-->
                                                <!--begin::Last login=--> */}
                                {/* <td>
                                    <div className="badge badge-light fw-bold">{report._id}</div>
                                </td> */}
                                {/* <!--end::Last login=-->
                                                <!--begin::Two step=--> */}
                                <td><div className="form-check form-switch form-check-custom form-check-solid me-5">
                                    {formatDateTime(report.createdAt)}
                                    </div></td>
                                <td>{report.reason}</td>

                                <td>
                                    <div className="form-check form-switch form-check-custom form-check-solid me-5">
                                    <span
                                        key={index}
                                        className={`badge ${report.resolved ? 'text-success' : 'text-danger'} me-2`}
                                        >
                                        {report.resolved ? 'Resolved' : 'Not Resolved'}
                                        </span>
                                    </div>
                                </td>
                                {/* <!--begin::Joined-->
                                                <!--begin::Action=--> */}
                                <td className="text-end">

                                    {/* <!--begin::Close--> */}
                                    <div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-users-modal-action="close">
                                            <ReviewModal reportType={report.reportType} Content={report}/>
                                    </div>
                                    {/* <!--end::Close--> */}
                                    {/* <!--begin::Menu--> */}
                                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                            <a href="../../demo1/dist/apps/user-management/users/view.html" className="menu-link px-3">Edit</a>
                                        </div>
                                        {/* <!--end::Menu item-->
                                                        <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                    </div>
                                    {/* <!--end::Menu--> */}
                                </td>
                                {/* <!--end::Action=--> */}


                                {/* <!--begin::Joined-->
                                            
                                {/* <!--end::Action=--> */}
                            </tr>
                            {/* {/* <!--end::Table row--> */}
                        </tbody>
                        {/* <!--end::Table body--> */}

                    </>

                )
            })
        } else {
            return <h1>There are no reports from the forum</h1>
        };
    }


    return (
        <>
            <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                <Navigation />
                {/* <!--begin::Content wrapper--> */}
                <div classNameName="d-flex flex-column flex-column-fluid">
                    {/* <!--begin::Toolbar--> */}
                    <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
                        {/* <!--begin::Toolbar container--> */}
                        <div id="kt_app_toolbar_container" className="app-container container-xxl d-flex flex-stack">
                            {/* <!--begin::Page title--> */}
                            <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                                {/* <!--begin::Title--> */}
                                <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">Reports from the Forum</h1>
                                {/* <!--end::Title--> */}
                            </div>
                            {/* <!--end::Page title--> */}
                            {/* <!--begin::Actions--> */}

                            {/* <!--end::Actions--> */}
                        </div>
                        {/* <!--end::Toolbar container--> */}
                    </div>
                    {/* <!--end::Toolbar-->
                    <!--begin::Content--> */}
                    <div id="kt_app_content" className="app-content flex-column-fluid">
                        {/* <!--begin::Content container--> */}
                        <div id="kt_app_content_container" className="app-container container-xxl">
                            {/* <!--user::Card--> */}
                            <div className="card">
                                {/* <!--begin::Card header--> */}
                                <div className="card-header border-0 pt-6">
                                    {/* <!--begin::Card title--> */}
                                    <div className="card-title">
                                        {/* <!--begin::Search--> */}
                                        <div className="d-flex align-items-center position-relative my-1">
                                            {/* <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg--> */}
                                            <span className="svg-icon svg-icon-1 position-absolute ms-6">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                                                    <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                            {/* <!--end::Svg Icon--> */}
                                            <input type="text" data-kt-user-table-filter="search" className="form-control form-control-solid w-250px ps-14" placeholder="Search Reports" />
                                        </div>
                                        {/* <!--end::Search--> */}
                                    </div>
                                    {/* <!--begin::Card title--> */}
                                    {/* <!--begin::Card toolbar--> */}

                                </div>
                                {/* <!--end::Card header--> */}
                                {/* <!--begin::Card body--> */}
                                <div className="card-body py-4">
                                    {/* <!--begin::Table--> */}
                                    <table className="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_users">
                                        {/* <!--begin::Table head--> */}
                                        <thead>
                                            {/* <!--begin::Table row--> */}
                                            <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                                                <th className="w-10px pe-2">
                                                    <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                                        <input className="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_table_users .form-check-input" value="1" />
                                                    </div>
                                                </th>
                                                <th className="min-w-125px">Reported Content Type</th>
                                                {/* <th className="min-w-125px">Category</th> */}
                                                {/* <th className="min-w-125px">Content Id</th> */}
                                                {/* <th className="min-w-125px">Created At</th> */}
                                                <th className="min-w-125px">Reported On</th>
                                                <th className="min-w-125px">Reason</th>
                                                <th className="min-w-125px">Resolved</th>
                                                <th className="text-end min-w-100px">Actions</th>
                                            </tr>
                                            {/* <!--end::Table row--> */}
                                        </thead>
                                        {/* {/* <!--end::Table head--> */}
                                        {populateReports()}



                                    </table>
                                    {/* <!--end::Table--> */}
                                </div>
                                {/* <!--end::Card body--> */}
                            </div>
                            {/* <!--end::Card--> */}
                        </div>
                        {/* <!--end::Content container--> */}
                    </div>
                    {/* <!--end::Content--> */}
                </div>
                {/* <!--end::Content wrapper--> */}
            </div>
        </>
    )
}

export default ManageReport