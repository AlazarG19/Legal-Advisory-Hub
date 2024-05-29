import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
uuidv4();
function CustomForm() {
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [sections, setsections] = useState([{
        id: uuidv4(),
        question: "",
        statement: ""
    }])
    const [question, setquestion] = useState("")
    const [statement, setstatement] = useState("")
    const handleSubmit = () => {
        let body = { section: { question: input1, statement: input2 } }

        fetch(`http://localhost:8080/api/forms`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Successfully sent")
            })
            .catch((error) => {
                console.log("error while sending")
                console.error('Error:', error);
            });
    }
    const handleAddSection = () => {
        const updatedSections = [...sections];
        updatedSections.pop(); // Remove the last message
        setsections(updatedSections);
        console.log(sections)
        setsections([...sections, {
            id: uuidv4(),
            question: "",
            statement: ""
        }])
    }
    const handleRemoveSection = () => {
        console.log(sections)
        const updatedSections = [...sections];
        updatedSections.pop(); // Remove the last message
        setsections(updatedSections);
    }
    const handleSubmitQuestions = () => {

    }
    return (

        <div className="d-flex flex-column flex-root app-root" id="kt_app_root">

            {/* <!--begin::Stepper--> */}
            <div className="stepper stepper-links d-flex flex-column" id="kt_modal_create_project_stepper">
                {/* <!--begin::Container--> */}
                <div className="container">
                    <button onClick={handleAddSection} type="button" className="btn btn-lg btn-primary" data-kt-element="settings-next">
                        <span className="indicator-label">Add New Section</span>
                    </button>
                    <button onClick={handleRemoveSection} type="button" className="btn btn-lg btn-primary" data-kt-element="settings-next">
                        <span className="indicator-label">Remove  Section</span>
                    </button>
                    {/* <!--begin::Form--> */}
                    <form className="mx-auto w-100 mw-600px pt-15 pb-10" noValidate="novalidate" id="kt_modal_create_project_form" method="post">
                        {
                            sections.map((section, index) => {
                                return <>

                                    {
                                        index == sections.length - 1 && sections.length != 1 ?
                                            (

                                                < div className="current pb-15" data-kt-stepper-element="content">
                                                    {/* <!--begin::Wrapper--> */}
                                                    <div className="w-100">
                                                        {/* <!--begin::Heading--> */}
                                                        <div className="pb-12">
                                                            {/* <!--begin::Title--> */}
                                                            <h1 className="fw-bold text-dark">Section end</h1>
                                                            {/* <!--end::Title--> */}
                                                            {/* <!--begin::Description--> */}
                                                            {/* <!--end::Description--> */}
                                                        </div>
                                                        {/* <!--end::Heading--> */}
                                                        {/* <!--begin::Input group--> */}
                                                        <div className="fv-row mb-8">
                                                            {/* <!--begin::Label--> */}
                                                            <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                                                                <span className="required">Question {index + 1}</span>
                                                                <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify project name"></i>
                                                            </label>
                                                            {/* <!--end::Label--> */}
                                                            {/* <!--begin::Input--> */}
                                                            <input type="text" className="form-control form-control-solid" placeholder="Enter Project Name" value={question} onChange={(e) => { setquestion(e.target.value) }} name="settings_name" />
                                                            {/* <!--end::Input--> */}
                                                        </div>
                                                        {/* <!--end::Input group--> */}
                                                        {/* <!--begin::Input group--> */}
                                                        <div className="fv-row mb-8">
                                                            {/* <!--begin::Label--> */}
                                                            <label className="required fs-6 fw-semibold mb-2">Statement</label>
                                                            {/* <!--end::Label--> */}
                                                            {/* <!--begin::Input--> */}
                                                            <textarea className="form-control form-control-solid" rows="3" placeholder="" value={statement} onChange={(e) => { setstatement(e.target.value) }} name="settings_description"></textarea>
                                                            {/* <!--end::Input--> */}
                                                        </div>
                                                        {/* <!--end::Input group--> */}
                                                        {/* <!--begin::Actions--> */}
                                                        {/* <div className="d-flex flex-stack">
            <button onClick={handleSubmit} type="button" className="btn btn-lg btn-primary" data-kt-element="settings-next">
                <span className="indicator-label">Submit</span>
            </button>
        </div> */}
                                                        {/* <!--end::Actions--> */}
                                                    </div>
                                                    {/* <!--end::Wrapper--> */}
                                                </div >) :
                                            (

                                                <div className="current pb-15" data-kt-stepper-element="content">

                                                    {/* <!--begin::Wrapper--> */}
                                                    <div className="w-100">
                                                        {/* <!--begin::Heading--> */}
                                                        <div className="pb-12">
                                                            {/* <!--begin::Title--> */}
                                                            <h1 className="fw-bold text-dark">Section </h1>
                                                            {/* <!--end::Title--> */}
                                                            {/* <!--begin::Description--> */}
                                                            {/* <!--end::Description--> */}
                                                        </div>
                                                        {/* <!--end::Heading--> */}
                                                        {/* <!--begin::Input group--> */}
                                                        <div className="fv-row mb-8">
                                                            {/* <!--begin::Label--> */}
                                                            <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                                                                <span className="required">Question {index + 1}</span>
                                                                <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify project name"></i>
                                                            </label>
                                                            {/* <!--end::Label--> */}
                                                            {/* <!--begin::Input--> */}
                                                            <input disabled type="text" className="form-control form-control" placeholder="Enter Project Name" value={input1} onChange={(e) => { setInput1(e.target.value) }} name="settings_name" />
                                                            {/* <!--end::Input--> */}
                                                        </div>
                                                        {/* <!--end::Input group--> */}
                                                        {/* <!--begin::Input group--> */}
                                                        <div className="fv-row mb-8">
                                                            {/* <!--begin::Label--> */}
                                                            <label className="required fs-6 fw-semibold mb-2">Project Description</label>
                                                            {/* <!--end::Label--> */}
                                                            {/* <!--begin::Input--> */}
                                                            <textarea className="form-control form-control-solid" rows="3" placeholder="" value={input2} onChange={(e) => { setInput2(e.target.value) }} name="settings_description"></textarea>
                                                            {/* <!--end::Input--> */}
                                                        </div>
                                                        {/* <!--end::Input group--> */}
                                                        {/* <!--begin::Actions--> */}
                                                        {/* <div className="d-flex flex-stack">
            <button onClick={handleSubmit} type="button" className="btn btn-lg btn-primary" data-kt-element="settings-next">
                <span className="indicator-label">Submit</span>
            </button>
        </div> */}
                                                        {/* <!--end::Actions--> */}
                                                    </div>
                                                    {/* <!--end::Wrapper--> */}
                                                </div>)
                                    }
                                </>
                                {/* <!--begin::Settings--> */ }

                                {/* <!--end::Settings--> */ }
                            })
                        }
                        {/* <!--begin::Actions--> */}
                        <div className="d-flex flex-stack">
                            <button onClick={handleSubmit} type="button" className="btn btn-lg btn-primary" data-kt-element="settings-next">
                                <span className="indicator-label">Submit</span>
                            </button>
                        </div>
                        {/* <!--end::Actions--> */}


                    </form>
                    {/* <!--end::Form--> */}
                </div>
                {/* <!--begin::Container--> */}
            </div>
            {/* <!--end::Stepper--> */}
        </div >
    )
}

export default CustomForm