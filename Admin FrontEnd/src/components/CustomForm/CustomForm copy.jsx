import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux'
import { editstatement } from '../../../../FrontEnd/src/redux/Reducers/sectionreducer';
uuidv4();
import store from '../../redux/Store';
const CustomButton = () => <span className="octicon octicon-star" >this</span>;
const insertStar = () => {
    const cursorPosition = this.quill.getSelection().index;
    console.log(cursorPosition)
    this.quill.insertText(cursorPosition, '_____');
    this.quill.setSelection(cursorPosition + 6);
    // const state = store.getState()
    // console.log(state.sections)

    // const updatedSections = Array(state.sections.value)
    // console.log("updates", updatedSections);
    // console.log("updates", updatedSections[0]);
    // updatedSections.pop()
    // console.log("updated new", updatedSections)
    // store.dispatch(editstatement({ section: updatedSections }))

}
const CustomToolbar = () => (
    <div id="toolbar">
        <select
            className="ql-header"
            defaultValue={''}
            onChange={(e) => e.persist()}
        >
            <option value="1"></option>
            <option value="2"></option>
            <option selected></option>
        </select>

        <button className="ql-bold"></button>
        <button className="ql-header"></button>
        <button className="ql-bold"></button>
        <button className="ql-italic"></button>
        <button className="ql-underline"></button>
        <button className="ql-strike"></button>
        <button className="ql-blockquote"></button>
        <button className="ql-list">li</button>
        <button className="ql-bullet">ol</button>
        <button className="ql-indent">tab</button>
        <select className="ql-color">
            <option value="red"></option>
            <option value="green"></option>
            <option value="blue"></option>
            <option value="orange"></option>
            <option value="violet"></option>
            <option value="#d0d1d2"></option>
            <option selected></option>
        </select>

        <button className="ql-insertStar">
            <CustomButton />
        </button>
    </div>
);
function CustomForm() {
    const reduxsections = useSelector((state) => state.sections.value)
    console.log(reduxsections)
    const dispatch = useDispatch()
    const [value, setValue] = useState('');
    const [sections, setsections] = useState([])

    const [question, setquestion] = useState("")
    // const handleSubmit = async () => {
    //     const updatedSections = sections;
    //     console.log("prevsection", sections)
    //     console.log("prevsection2", updatedSections)
    //     updatedSections.pop()
    //     let finalsection = [...updatedSections,
    //     {
    //         id: uuidv4(),
    //         question: question,
    //         statement: statement
    //     }]
    //     setsections([...updatedSections,
    //     {
    //         id: uuidv4(),
    //         question: question,
    //         statement: statement
    //     }])
    //     let body = { section: finalsection }

    //     fetch(`http://localhost:8080/api/forms`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(body)
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log("Successfully sent")
    //         })
    //         .catch((error) => {
    //             console.log("error while sending")
    //             console.error('Error:', error);
    //         });
    // }
    let modules = {
        toolbar: {
            container: '#toolbar',
            handlers: {
                insertStar: insertStar,
            },
        }
    }
    let formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]
    const handleSubmit = () => {

    }
    const handleAddSection = () => {
        const updatedSections = sections;
        console.log(sections)
        console.log("what i want", {
            position: 0,
            question: question
        })
        setsections([...updatedSections,
        {
            position: 0,
            question: question,
        }])
        setquestion("")
        console.log(sections)
        console.log("execute edit statement")
        dispatch(editstatement({ section: sections }))

    }
    const handleRemoveSection = () => {
        console.log(sections)
        const updatedSections = [...sections];
        updatedSections.pop(); // Remove the last message
        setsections(updatedSections);
    }
    const handleSubmitQuestions = () => {

    }
    console.log("section length", sections.length)
    console.log("final section", sections)
    return (

        <div className="d-flex flex-column flex-root app-root" id="kt_app_root">

            {/* <!--begin::Stepper--> */}
            <div className="stepper stepper-links d-flex flex-column flex-lg-row" id="kt_modal_create_project_stepper">
                {/* <!--begin::Container--> */}
                <div className="flex-column flex-lg-row-auto">

                    <div className="">
                        <button onClick={handleAddSection} type="button" className="btn btn-lg btn-primary" data-kt-element="settings-next">
                            <span className="indicator-label">Add New Section</span>
                        </button>
                        <button onClick={handleRemoveSection} type="button" className="btn btn-lg btn-primary" data-kt-element="settings-next">
                            <span className="indicator-label">Remove  Section</span>
                        </button>
                        {/* <!--begin::Form--> */}
                        <form className="mx-auto " noValidate="novalidate" id="kt_modal_create_project_form" method="post">
                            {
                                sections.map((section, index) => {
                                    return <>

                                        {
                                            index == sections.length - 1 || sections.length == 1 ?
                                                (
                                                    < div className="current pb-15" data-kt-stepper-element="content">
                                                        {/* <!--begin::Wrapper--> */}
                                                        <div className="">
                                                            {/* <!--begin::Heading--> */}
                                                            <div className="pb-12">
                                                                {/* <!--begin::Title--> */}
                                                                <h1 className="fw-bold text-dark">Section end</h1>
                                                                {/* <!--end::Title--> */}
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
                                                            {/* <!--begin::Actions--> */}
                                                            {/* <div className="d-flex flex-stack">
            <button onClick={handleSubmit} type="button" className="btn btn-lg btn-primary" data-kt-element="settings-next">
                <span className="indicator-label">Submit</span>
            </button>
        </div> */}
                                                            {/* <!--end::Actions--> */}
                                                        </div>
                                                        {/* <!--end::Wrapper--> */}
                                                    </div >


                                                ) :
                                                (<div className="current pb-15" data-kt-stepper-element="content">

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
                                                            <input disabled type="text" className="form-control form-control" placeholder="Enter Project Name" value={section.question} name="settings_name" />
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
                                                </div>
                                                )
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
                </div>
                <div className="flex-column flex-lg-row-auto ms-lg-5 ms-xl-5">
                    <CustomToolbar />
                    <ReactQuill theme="snow"
                        modules={modules}
                        formats={formats} value={value} onChange={setValue} /> ;
                </div>
                {/* <!--begin::Container--> */}
            </div>
            {/* <!--end::Stepper--> */}
        </div >
    )
}

export default CustomForm