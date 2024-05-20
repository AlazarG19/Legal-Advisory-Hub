import React, { useEffect, useRef, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux'
import { editadminstatement } from '../../redux/Reducers/adminsectionreducer';
uuidv4();
import store from '../../redux/Store';
const CustomButton = () => <span className="octicon octicon-star" >BLANK SPACE</span>;
const CustomRemoveButton = () => <span className="octicon octicon-remove" >REMOVE BLANK SPACE</span>;
function insertStar() {
    const state = store.getState()
    const oldadminsections = Array.from(state.adminsections.value)
    const cursorPosition = this.quill.getSelection().index;

    let mainString = this.quill.getText().substring(0, this.quill.getSelection().index)
    let regex = new RegExp("________", "g");
    // Use the match method to find all matches of the substring in the main string
    let occurrences = (mainString.match(regex) || []).length;
    console.log("occurences", occurrences)
    let test = [...oldadminsections]
    console.log("test before", test)
    test.splice(occurrences, 0, {
        id: uuidv4(),
        questionNumber: oldadminsections.length,
        questions: ""
    })
    console.log("test after", test)

    this.quill.insertText(cursorPosition, '________');
    this.quill.setSelection(cursorPosition + 8);


    const updatedadminsections = [...oldadminsections,
    {
        id: uuidv4(),
        questionNumber: oldadminsections.length,
        questions: ""
    }]
    console.log("updatedadminsections", updatedadminsections)
    store.dispatch(editadminstatement({ adminsection: test }))
}
function removeStar() {
    const state = store.getState()
    const oldadminsections = Array.from(state.adminsections.value)
    // const cursorPosition = this.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, '________');
    // this.quill.setSelection(cursorPosition + 8);
    console.log("this.quill.getSelection()", this.quill.getSelection())

    console.log("values", this.quill.getText())
    console.log("values length", this.quill.getText().length)
    console.log("values till now", this.quill.getText().substring(0, this.quill.getSelection().index))
    console.log("values till remaining", this.quill.getText().substring(this.quill.getSelection().index, this.quill.getText().length))
    let mainString = this.quill.getText().substring(0, this.quill.getSelection().index)
    let remaining = this.quill.getText().substring(this.quill.getSelection().index, this.quill.getText().length)
    let lastIndex = mainString.lastIndexOf("________")
    console.log("lastIndex", lastIndex)
    let regex = new RegExp("________", "g");

    // Use the match method to find all matches of the substring in the main string
    let occurrences = (mainString.match(regex) || []).length;
    console.log("occurences", occurrences)
    let changedValue = mainString.substring(0, lastIndex) + mainString.substring(lastIndex + 8);
    changedValue = changedValue + remaining
    console.log("changed", changedValue)
    console.log("oldadminsections", oldadminsections)
    oldadminsections.splice(occurrences - 1, 1)
    // let popped = oldadminsections.pop(occurrences - 1)
    // myArray.splice(n - 1, 1)
    // console.log("popped", popped, occurrences - 1)
    console.log("changed old adminsections", oldadminsections)
    store.dispatch(editadminstatement({ adminsection: oldadminsections }))
    this.quill.setText(changedValue);
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
        <button className="ql-italic"></button>
        <select className="ql-color">
            <option value="red"></option>
            <option value="green"></option>
            <option value="blue"></option>
            <option defaultValue="orange"></option>
            <option defaultValue="violet"></option>
            <option defaultValue="#d0d1d2"></option>
            <option selected></option>
        </select>
        <button style={{ width: "100px" }} className="ql-insertStar">
            <CustomButton />
        </button>
        <button style={{ width: "200px" }} className="ql-removeStar">
            <CustomRemoveButton />
        </button>
    </div>
);
const FinalCustomForm = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentDate = month + "/" + date + "/" + year;
    let modules = {
        toolbar: {
            container: '#toolbar',
            handlers: {
                insertStar: insertStar,
                removeStar: removeStar
            },
        }
    }
    let formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]
    const reduxadminsections = useSelector((state) => state.adminsections.value)
    const dispatch = useDispatch()
    const [value, setValue] = useState('');
    const [formName, setFormName] = useState('');
    const [formDescription, setFormDescription] = useState('');
    const [adminsections, setadminsections] = useState([])
    const [questions, setquestion] = useState([])
    const [category, setCategory] = useState("")

    const handleSubmit = () => {
        const state = store.getState()
        console.log("final state", state)
        // console.log("final value", value)
        // setValue2(value)
        console.log("new question", questions)
        let body = { formid: uuidv4(), sections: state.adminsections.value, formtext: "<pre class='pretext'>" + value + "</pre>", formname: formName, formdescription: formDescription, category: category }
        console.log(body)
        fetch(`http://localhost:3000/api/forms`, {
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

    const addQuestion = (idToUpdate) => {
        let specificquestion = questions.find((element) => {
            return element.id == idToUpdate
        })
        const state = store.getState()
        const oldadminsections = Array.from(state.adminsections.value)
        const index = oldadminsections.findIndex(item => item.id === idToUpdate);
        oldadminsections[index] = { ...oldadminsections[index], questions: specificquestion.value }
        store.dispatch(editadminstatement({ adminsection: oldadminsections }))
    }
    const handleChange = (id, value) => {
        let newQuestions = [...questions];
        const exists = newQuestions.some(element => element.id === id);
        if (exists) {
            let modifiedQuestion = newQuestions.map(obj => {
                if (obj.id === id) {
                    return { ...obj, value: value };

                }
                return obj;
            });
            newQuestions = modifiedQuestion
        } else {
            newQuestions.push({ id: id, value: value })
        }
        setquestion(newQuestions);
    };
    useEffect(() => {
        // fetching the state initially so that the adminsections can be up
        const state = store.getState()
        const updatedadminsections = state.adminsections.value
        setadminsections(updatedadminsections)
    }, [reduxadminsections])
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
                                    {/* <!--begin::Navbar--> */}
                                    <div className="card mb-6 mb-xl-9">
                                        <div className="card-body pt-9 pb-0">
                                            {/* <!--begin::Details--> */}
                                            <div className="d-flex flex-wrap flex-sm-nowrap mb-6">
                                                {/* <!--begin::Image--> */}
                                                <span className="svg-icon svg-icon-2x svg-icon-primary">
                                                </span>
                                                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor" />
                                                    <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
                                                </svg>
                                                {/* <!--end::Image--> */}
                                                {/* <!--begin::Wrapper--> */}
                                                <div className="flex-grow-1">
                                                    {/* <!--begin::Head--> */}
                                                    <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                                        {/* <!--begin::Details--> */}
                                                        <div className="d-flex flex-column">
                                                            {/* <!--begin::Status--> */}
                                                            <div className="d-flex align-items-center mb-1">
                                                                <a href="#" className="text-gray-800 text-hover-primary fs-2 fw-bold me-3">Create Your New Custom Form Below</a>

                                                            </div>
                                                            {/* <!--end::Status--> */}
                                                            {/* <!--begin::Description--> */}
                                                            <div className="d-flex flex-wrap fw-semibold mb-4 fs-5 text-gray-400">Describe The Name,Descriptions, Questions and The for It Self Down Below</div>
                                                            {/* <!--end::Description--> */}
                                                        </div>
                                                        {/* <!--end::Details--> */}
                                                    </div>
                                                    {/* <!--end::Head--> */}
                                                    {/* <!--begin::Info--> */}
                                                    <div className="d-flex flex-wrap justify-content-start">
                                                        {/* <!--begin::Stats--> */}
                                                        <div className="d-flex flex-wrap">
                                                            {/* <!--begin::Stat--> */}
                                                            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                                                {/* <!--begin::Number--> */}
                                                                <div className="d-flex align-items-center">
                                                                    <div className="fs-4 fw-bold">{currentDate}</div>
                                                                </div>
                                                                {/* <!--end::Number--> */}
                                                                {/* <!--begin::Label--> */}
                                                                <div className="fw-semibold fs-6 text-gray-400">Form Created Date</div>
                                                                {/* <!--end::Label--> */}
                                                            </div>
                                                            {/* <!--end::Stat--> */}
                                                        </div>
                                                        {/* <!--end::Stats--> */}
                                                    </div>
                                                    {/* <!--end::Info--> */}
                                                </div>
                                                {/* <!--end::Wrapper--> */}
                                            </div>
                                            {/* <!--end::Details--> */}
                                            <div className="separator"></div>
                                        </div>
                                    </div>
                                    {/* <!--end::Navbar--> */}
                                    {/* <!--begin::Navbar--> */}
                                    <div className="card mb-6 mb-xl-9">
                                        {/* <!--begin::Main column--> */}
                                        <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">

                                            {/* <!--begin::Tab content--> */}
                                            <div className="tab-content">
                                                {/* <!--begin::Tab pane--> */}
                                                <div className="tab-pane fade show active" id="kt_ecommerce_add_product_general" role="tab-panel">
                                                    <div className="d-flex flex-column gap-7 gap-lg-10">
                                                        {/* <!--begin::General options--> */}
                                                        <div className="card card-flush py-4">
                                                            {/* <!--begin::Card header--> */}
                                                            <div className="card-header">
                                                                <div className="card-title">
                                                                    <h2>Form Details</h2>
                                                                </div>
                                                            </div>
                                                            {/* <!--end::Card header--> */}
                                                            {/* <!--begin::Card body--> */}
                                                            <div className="card-body pt-0">
                                                                {/* <!--begin::Input group--> */}
                                                                <div className="mb-10 fv-row">
                                                                    {/* <!--begin::Label--> */}
                                                                    <label className="required form-label">Form Name</label>
                                                                    {/* <!--end::Label--> */}
                                                                    {/* <!--begin::Input--> */}
                                                                    <input type="text" name="product_name" className="form-control mb-2" onChange={(e) => { setFormName(e.target.value) }} placeholder="Form Name" value={formName} />
                                                                    {/* <!--end::Input--> */}
                                                                    {/* <!--begin::Description--> */}
                                                                    <div className="text-muted fs-7">A Form name is required and recommended to be unique.</div>
                                                                    {/* <!--end::Description--> */}
                                                                </div>
                                                                {/* <!--end::Input group--> */}
                                                                {/* <!--begin::Input group--> */}
                                                                <div>
                                                                    {/* <!--begin::Label--> */}
                                                                    <label className="form-label">Description</label>
                                                                    {/* <!--end::Label--> */}
                                                                    {/* <!--begin::Editor--> */}
                                                                    <input type="text" name="description" onChange={(e) => { setFormDescription(e.target.value) }} className="form-control mb-2" placeholder="Description" value={formDescription} />
                                                                    {/* <!--end::Editor--> */}
                                                                    {/* <!--begin::Description--> */}
                                                                    <div className="text-muted fs-7">Set a description to the form for better understanding.</div>
                                                                    {/* <!--end::Description--> */}
                                                                </div>
                                                                {/* <!--end::Input group--> */}
                                                                {/* <!--begin::Input group--> */}
                                                                <div>
                                                                    {/* <!--begin::Label--> */}
                                                                    <label className="form-label">Category</label>
                                                                    {/* <!--end::Label--> */}
                                                                    {/* <!--begin::Editor--> */}
                                                                    {/* <!--begin::Actions--> */}
                                                                    <div className="d-flex flex-wrap my-2 border-grey-500" style={{ width: "100% !important" }} >
                                                                        <div style={{ width: "100% !important" }} className="me-4 ">
                                                                            {/* <!--begin::Select--> */}
                                                                            <select style={{ width: "100% !important" }} onChange={(e) => { setCategory(e.target.value) }} name="status" data-control="select2" data-hide-search="true" className="form-select form-select-sm border-grey-500 bg-body border-body">
                                                                                <option value="Active" selected="selected"> Select a Category</option>
                                                                                <option value="Criminal" >Criminal</option>
                                                                                <option value="Civil">Civil</option>
                                                                                <option value="Family">Family</option>
                                                                                <option value="Employement">Employement</option>
                                                                                <option value="Contract">Contract</option>
                                                                                <option value="Intellectual Property">Intellectual Property</option>
                                                                                <option value="Constitutional">Constitutional</option>
                                                                                <option value="Administrative">Administrative</option>
                                                                                <option value="Real Estate">Real Estate</option>
                                                                                <option value="Tort">Tort</option>
                                                                            </select>
                                                                            {/* <!--end::Select--> */}
                                                                        </div>
                                                                    </div>
                                                                    {/* <!--end::Actions--> */}
                                                                    {/* <!--end::Editor--> */}
                                                                    {/* <!--begin::Description--> */}
                                                                    <div className="text-muted fs-7">Set a category to the form for better understanding.</div>
                                                                    {/* <!--end::Description--> */}
                                                                </div>
                                                                {/* <!--end::Input group--> */}
                                                            </div>
                                                            {/* <!--end::Card header--> */}
                                                        </div>
                                                        {/* <!--end::General options--> */}
                                                    </div>
                                                </div>
                                                {/* <!--end::Tab pane--> */}
                                            </div>
                                            {/* <!--end::Tab content--> */}
                                        </div>
                                        {/* <!--end::Main column--> */}
                                    </div>
                                    {/* <!--end::Navbar--> */}
                                    {/* <!--begin::Row--> */}
                                    <div className="row g-6 g-xl-9">

                                        {/* <!--begin::Col--> */}
                                        <div className="col-lg-12">
                                            {/* <!--begin::Card--> */}
                                            <div className="card card-flush h-lg-100">
                                                {/* <!--begin::Card header--> */}
                                                <div className="card-header mt-6">
                                                    {/* <!--begin::Card title--> */}
                                                    <div className="card-title flex-column">
                                                        <h3 className="fw-bold mb-1">Questions That will be asked on the form</h3>
                                                        <div className="fs-6 text-gray-400">Total Questions : {adminsections.length}</div>
                                                    </div>
                                                    {/* <!--end::Card title--> */}
                                                    {/* <!--begin::Card toolbar--> */}
                                                    <div className="card-toolbar">
                                                        {/* <!--begin::Select--> */}

                                                        {/* <!--end::Select--> */}
                                                    </div>
                                                    {/* <!--end::Card toolbar--> */}
                                                </div>
                                                {/* <!--end::Card header--> */}

                                                {/* <!--begin::Card body--> */}
                                                <div className="card-body p-9 pt-4">

                                                    {/* <!--begin::Tab Content--> */}
                                                    <div className="tab-content">
                                                        {/* <!--begin::Day--> */}
                                                        <div id="kt_schedule_day_1" className="tab-pane fade show active">

                                                            {
                                                                adminsections.map((adminsection, index) => {
                                                                    return <div className="d-flex flex-stack position-relative mt-8">
                                                                        {/* <!--begin::Bar--> */}

                                                                        <div className={adminsection.questions != "" ? "position-absolute h-100 w-4px bg-success rounded top-0 start-0" : "position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"}></div>
                                                                        {/* <!--end::Bar--> */}
                                                                        {/* <!--begin::Info--> */}
                                                                        <div className="fw-semibold ms-5 text-green-600">
                                                                            {/* <!--begin::Time--> */}
                                                                            <div className="fs-5">
                                                                                <span className="required">Question {index + 1}</span>

                                                                            </div>
                                                                            {/* <!--end::Time--> */}
                                                                            {/* <!--begin::Title--> */}
                                                                            {/* <!--end::Title--> */}
                                                                            {/* <!--begin::User--> */}
                                                                            <div className="text-gray-400">
                                                                                <input id={adminsection.id} key={adminsection.id} type="text" onChange={(e) => { handleChange(adminsection.id, e.target.value) }} className="form-control form-control" placeholder="Enter Project Name" defaultValue={adminsection.questions} name="settings_name" />

                                                                            </div>
                                                                            {/* <!--end::User--> */}
                                                                        </div>
                                                                        {/* <!--end::Info--> */}
                                                                        {/* <!--begin::Action--> */}
                                                                        {adminsection.questions != "" ?
                                                                            <button onClick={(e) => { e.preventDefault(); addQuestion(adminsection.id) }} className="btn btn-sm btn-icon btn-clear btn-active-light-primary me-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Reply">

                                                                                <span className="svg-icon svg-icon-2 m-0">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M2 4.63158C2 3.1782 3.1782 2 4.63158 2H13.47C14.0155 2 14.278 2.66919 13.8778 3.04006L12.4556 4.35821C11.9009 4.87228 11.1726 5.15789 10.4163 5.15789H7.1579C6.05333 5.15789 5.15789 6.05333 5.15789 7.1579V16.8421C5.15789 17.9467 6.05333 18.8421 7.1579 18.8421H16.8421C17.9467 18.8421 18.8421 17.9467 18.8421 16.8421V13.7518C18.8421 12.927 19.1817 12.1387 19.7809 11.572L20.9878 10.4308C21.3703 10.0691 22 10.3403 22 10.8668V19.3684C22 20.8218 20.8218 22 19.3684 22H4.63158C3.1782 22 2 20.8218 2 19.3684V4.63158Z" fill="currentColor" />
                                                                                        <path d="M10.9256 11.1882C10.5351 10.7977 10.5351 10.1645 10.9256 9.77397L18.0669 2.6327C18.8479 1.85165 20.1143 1.85165 20.8953 2.6327L21.3665 3.10391C22.1476 3.88496 22.1476 5.15129 21.3665 5.93234L14.2252 13.0736C13.8347 13.4641 13.2016 13.4641 12.811 13.0736L10.9256 11.1882Z" fill="currentColor" />
                                                                                        <path d="M8.82343 12.0064L8.08852 14.3348C7.8655 15.0414 8.46151 15.7366 9.19388 15.6242L11.8974 15.2092C12.4642 15.1222 12.6916 14.4278 12.2861 14.0223L9.98595 11.7221C9.61452 11.3507 8.98154 11.5055 8.82343 12.0064Z" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                            </button> :
                                                                            <button onClick={(e) => { e.preventDefault(); addQuestion(adminsection.id) }} className="btn btn-icon btn-sm btn-success flex-shrink-0 ms-4" >
                                                                                <span className="svg-icon svg-icon-2">
                                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor" />
                                                                                        <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                                                                    </svg>
                                                                                </span>
                                                                            </button>

                                                                        }
                                                                        {/* <!--end::Action--> */}
                                                                    </div>
                                                                })
                                                            }

                                                        </div>
                                                        {/* <!--end::Day--> */}

                                                    </div>
                                                    {/* <!--end::Tab Content--> */}
                                                </div>
                                                {/* <!--end::Card body--> */}
                                            </div>
                                            {/* <!--end::Card--> */}
                                        </div>
                                        {/* <!--end::Col--> */}
                                        {/* <!--begin::Col--> */}
                                        <div className="col-lg-12">
                                            {/* <!--begin::Card--> */}
                                            <div className="card card-flush h-lg-100">
                                                {/* <!--begin::Card header--> */}
                                                <div className="card-header mt-6">
                                                    {/* <!--begin::Card title--> */}
                                                    <div className="card-title flex-column">
                                                        <h3 className="fw-bold mb-1">Write you custom Form Down Below</h3>
                                                    </div>
                                                    {/* <!--end::Card title--> */}
                                                </div>
                                                {/* <!--end::Card toolbar--> */}
                                                {/* <!--begin::Card body--> */}
                                                <div className="card-body d-flex flex-column p-9 pt-3 mb-9">
                                                    <div style={{ width: "223mm" }} >
                                                        <CustomToolbar />

                                                        <ReactQuill theme="snow"
                                                            modules={modules}
                                                            formats={formats} defaultValue={value} onChange={setValue} />
                                                    </div>
                                                </div>
                                                {/* <!--end::Card body--> */}
                                            </div>
                                            {/* <!--end::Card--> */}
                                        </div>
                                        {/* <!--end::Col--> */}
                                        {/* <!--begin::Col--> */}
                                        <div className="col-lg-12">
                                            {/* <!--begin::Card--> */}
                                            <div className="card card-flush h-lg-100">
                                                {/* <!--begin::Card header--> */}
                                                <div className="card-header mt-6">
                                                    {/* <!--begin::Actions--> */}
                                                    <div className="d-flex flex-stack">
                                                        <button onClick={handleSubmit} type="button" className="btn btn-lg btn-primary" data-kt-element="settings-next">
                                                            <span className="indicator-label">Submit</span>
                                                        </button>
                                                    </div>
                                                    {/* <!--end::Actions--> */}
                                                </div>
                                                {/* <!--end::Card toolbar--> */}

                                            </div>
                                            {/* <!--end::Card--> */}

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
        </div>
    )
}

export default FinalCustomForm