import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import NoElementFound from './Elements/NoElement';
import FormTable from './AnswersTable';
function ManageAnswer() {


    const columns = [
        {

            Header: 'ANSWER BODY',
            accessor: 'body',


        },
        {

            Header: 'AUTHOR',
            accessor: 'author',


        },
        {

            Header: 'UPVOTES',
            accessor: 'upvotes',


        },
        {

            Header: 'DOWNVOTES',
            accessor: 'downvotes',


        },
        {

            Header: 'PUBLISHED',
            accessor: 'reported',


        },
        {

            Header: 'ACTIONS',
            accessor: '_id',


        },
    ]


    const { id } = useParams();
    const [answers, setAnswers] = useState([]);
    // Delete a question from the API
    const deleteAnswer = async (id) => {
        try {
            await fetch(`http://localhost:3000/api/answers/${id}`, {
                method: 'DELETE',
            });
            // Remove the deleted question from the local state
            setAnswers(answers.filter((question) => question.id !== id));
        } catch (error) {
            console.error('Error deleting question:', error);
        }
    };

    useEffect(() => {
        fetch(`http://localhost:3000/api/answers/all/${id}`).then(res => res.json()).then(result => {

            setAnswers(result)
            console.log(result[0])

            // console.log("This is for answer")
            // console.log(JSON.stringify(result))
        }).catch((error) => {
            console.log(error)
        });
    }, [])


    const populateAnswers = () => {
        if (answers.length > 0) {
            return answers.map((answer, index) => {
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
                                        <Link to={`/mcomments/${answer._id}`} className="text-gray-800 text-hover-primary mb-1"><div className="text-gray-800 text-hover-primary mb-1" dangerouslySetInnerHTML={{ __html: answer.body }} /></Link>

                                        {/* <span>smith@kpmg.com</span> */}
                                    </div>
                                    {/* <!--begin::User details--> */}
                                </td>
                                {/* <!--end::User=--> */}
                                {/* <!--begin::Role=--> */}
                                {/* <td>{question.category}</td> */}
                                {/* <!--end::Role=-->
                                                <!--begin::Last login=--> */}
                                <td>
                                    <div className="badge badge-light fw-bold">{answer.author}</div>
                                </td>
                                {/* <!--end::Last login=-->
                                                <!--begin::Two step=--> */}
                                <td>{answer.upvotes}</td>
                                <td>{answer.downvotes}</td>

                                <td>
                                    <span
                                        className={`${answer.reported
                                                ? 'text-danger font-weight-bold'
                                                : 'text-success font-weight-bold'
                                            }`}
                                    >
                                        {answer.reported ? 'No' : 'Yes'}
                                    </span>
                                </td>
                                {/* <!--begin::Joined-->
                                                <!--begin::Action=--> */}
                                <td className="text-end">

                                    {/* <!--begin::Close--> */}
                                    <div className="btn btn-icon btn-sm btn-active-icon-primary" data-kt-users-modal-action="close">

                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => deleteAnswer(answer.id)}
                                        >
                                            Delete
                                        </button>
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
            return <NoElementFound elementName={"Answer"} />
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
                                <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">Question - Answer</h1>
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
                                        {/* <!--end::Search--> */}
                                    </div>
                                    {/* <!--begin::Card title--> */}
                                    {/* <!--begin::Card toolbar--> */}

                                </div>
                                {/* <!--end::Card header--> */}
                                {/* <!--begin::Card body--> */}
                                <div className="card-body py-4">
                                    <FormTable columns={columns} data={answers} />

                                    {/* <!--begin::Table--> */}
                                
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

export default ManageAnswer