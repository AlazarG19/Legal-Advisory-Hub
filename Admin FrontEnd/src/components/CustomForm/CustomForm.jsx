import React, { useEffect, useRef, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux'
import { editstatement } from '../../../../FrontEnd/src/redux/Reducers/sectionreducer';
uuidv4();
import store from '../../redux/Store';
const CustomButton = () => <span className="octicon octicon-star" >BLANK SPACE</span>;
const CustomRemoveButton = () => <span className="octicon octicon-remove" >REMOVE BLANK SPACE</span>;
function insertStar() {
    const state = store.getState()
    const oldSections = Array.from(state.sections.value)
    const cursorPosition = this.quill.getSelection().index;

    let mainString = this.quill.getText().substring(0, this.quill.getSelection().index)
    let regex = new RegExp("_____", "g");
    // Use the match method to find all matches of the substring in the main string
    let occurrences = (mainString.match(regex) || []).length;
    console.log("occurences", occurrences)
    let test = [...oldSections]
    console.log("test before", test)
    test.splice(occurrences, 0, {
        id: uuidv4(),
        questionNumber: oldSections.length,
        questions: ""
    })
    console.log("test after", test)

    this.quill.insertText(cursorPosition, '_____');
    this.quill.setSelection(cursorPosition + 6);


    const updatedSections = [...oldSections,
    {
        id: uuidv4(),
        questionNumber: oldSections.length,
        questions: ""
    }]
    console.log("updatedSections", updatedSections)
    store.dispatch(editstatement({ section: test }))
}
function removeStar() {
    const state = store.getState()
    const oldSections = Array.from(state.sections.value)
    // const cursorPosition = this.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, '_____');
    // this.quill.setSelection(cursorPosition + 6);
    console.log("this.quill.getSelection()", this.quill.getSelection())

    console.log("values", this.quill.getText())
    console.log("values length", this.quill.getText().length)
    console.log("values till now", this.quill.getText().substring(0, this.quill.getSelection().index))
    console.log("values till remaining", this.quill.getText().substring(this.quill.getSelection().index, this.quill.getText().length))
    let mainString = this.quill.getText().substring(0, this.quill.getSelection().index)
    let remaining = this.quill.getText().substring(this.quill.getSelection().index, this.quill.getText().length)
    let lastIndex = mainString.lastIndexOf("_____")
    console.log("lastIndex", lastIndex)
    let regex = new RegExp("_____", "g");

    // Use the match method to find all matches of the substring in the main string
    let occurrences = (mainString.match(regex) || []).length;
    console.log("occurences", occurrences)
    let changedValue = mainString.substring(0, lastIndex) + mainString.substring(lastIndex + 5);
    changedValue = changedValue + remaining
    console.log("changed", changedValue)
    console.log("oldSections", oldSections)
    oldSections.splice(occurrences - 1, 1)
    // let popped = oldSections.pop(occurrences - 1)
    // myArray.splice(n - 1, 1)
    // console.log("popped", popped, occurrences - 1)
    console.log("changed old sections", oldSections)
    store.dispatch(editstatement({ section: oldSections }))
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
function CustomForm() {
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

    const reduxsections = useSelector((state) => state.sections.value)
    const dispatch = useDispatch()
    const [value, setValue] = useState('');
    const [sections, setsections] = useState([])
    const [questions, setquestion] = useState([])

    const handleSubmit = () => {
        const state = store.getState()
        console.log("final state", state)
        // console.log("final value", value)
        // setValue2(value)
        console.log("new question", questions)
        let body = { sections: state.sections.value, formtext: "<pre>" + value + "</pre>" }
        console.log(body)
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
        const oldSections = reduxsections;
        const updatedSections = [...oldSections,
        {
            position: 0,
            questions: questions,
        }]
        dispatch(editstatement({ section: updatedSections }))
    }
    const addQuestion = (idToUpdate) => {
        let specificquestion = questions.find((element) => {
            return element.id == idToUpdate
        })
        const state = store.getState()
        const oldSections = Array.from(state.sections.value)
        const index = oldSections.findIndex(item => item.id === idToUpdate);
        oldSections[index] = { ...oldSections[index], questions: specificquestion.value }
        store.dispatch(editstatement({ section: oldSections }))
    }
    const handleRemoveSection = () => {
        console.log(sections)
        const updatedSections = [...sections];
        updatedSections.pop(); // Remove the last message
        setsections(updatedSections);
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
        // fetching the state initially so that the sections can be up
        const state = store.getState()
        const updatedSections = state.sections.value
        setsections(updatedSections)
    }, [reduxsections])
    return (

        <div className="d-flex flex-column flex-root app-root" id="kt_app_root">

            {/* <!--begin::Stepper--> */}
            <div className="stepper stepper-links d-flex flex-column flex-lg-row" id="kt_modal_create_project_stepper">
                {/* <!--begin::Container--> */}
                <div className="flex-column flex-lg-row-auto">

                    <div className="">
                        {/* <!--begin::Form--> */}
                        <form className="mx-auto " noValidate="novalidate" id="kt_modal_create_project_form" method="post">
                            {
                                sections.map((section, index) => {
                                    return <div key={index} className="current pb-15" data-kt-stepper-element="content">

                                        {/* <!--begin::Wrapper--> */}
                                        <div className="w-100">
                                            {/* <!--begin::Heading--> */}
                                            {/* <!--end::Heading--> */}
                                            {/* <!--begin::Input group--> */}
                                            <div className="fv-row mb-8">
                                                {/* <!--begin::Label--> */}
                                                <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                                                    <span className="required">Question {index + 1} {section.id}</span>
                                                    <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify project name"></i>
                                                </label>
                                                {/* <!--end::Label--> */}
                                                {/* <!--begin::Input--> */}
                                                <div className="d-flex">
                                                    <input id={section.id} key={section.id} type="text" onChange={(e) => { handleChange(section.id, e.target.value) }} className="form-control form-control" placeholder="Enter Project Name" defaultValue={section.questions} name="settings_name" />
                                                    {section.questions != "" ?
                                                        <button onClick={(e) => { e.preventDefault(); addQuestion(section.id) }} className="btn btn-sm btn-icon btn-clear btn-active-light-primary me-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Reply">

                                                            <span className="svg-icon svg-icon-2 m-0">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M2 4.63158C2 3.1782 3.1782 2 4.63158 2H13.47C14.0155 2 14.278 2.66919 13.8778 3.04006L12.4556 4.35821C11.9009 4.87228 11.1726 5.15789 10.4163 5.15789H7.1579C6.05333 5.15789 5.15789 6.05333 5.15789 7.1579V16.8421C5.15789 17.9467 6.05333 18.8421 7.1579 18.8421H16.8421C17.9467 18.8421 18.8421 17.9467 18.8421 16.8421V13.7518C18.8421 12.927 19.1817 12.1387 19.7809 11.572L20.9878 10.4308C21.3703 10.0691 22 10.3403 22 10.8668V19.3684C22 20.8218 20.8218 22 19.3684 22H4.63158C3.1782 22 2 20.8218 2 19.3684V4.63158Z" fill="currentColor" />
                                                                    <path d="M10.9256 11.1882C10.5351 10.7977 10.5351 10.1645 10.9256 9.77397L18.0669 2.6327C18.8479 1.85165 20.1143 1.85165 20.8953 2.6327L21.3665 3.10391C22.1476 3.88496 22.1476 5.15129 21.3665 5.93234L14.2252 13.0736C13.8347 13.4641 13.2016 13.4641 12.811 13.0736L10.9256 11.1882Z" fill="currentColor" />
                                                                    <path d="M8.82343 12.0064L8.08852 14.3348C7.8655 15.0414 8.46151 15.7366 9.19388 15.6242L11.8974 15.2092C12.4642 15.1222 12.6916 14.4278 12.2861 14.0223L9.98595 11.7221C9.61452 11.3507 8.98154 11.5055 8.82343 12.0064Z" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                        </button> :
                                                        <button onClick={(e) => { e.preventDefault(); addQuestion(section.id) }} className="btn btn-icon btn-sm btn-success flex-shrink-0 ms-4" >
                                                            <span className="svg-icon svg-icon-2">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="currentColor" />
                                                                    <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="currentColor" />
                                                                </svg>
                                                            </span>
                                                        </button>

                                                    }
                                                </div>
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
                <div className="flex-column flex-lg-row-auto ms-lg-5 ms-xl-5" >
                    <div style={{ width: "210mm", boxShadow: `0px 0px 70px -8px rgba(0,0,0,0.37)`, }} >
                        <CustomToolbar />

                        <ReactQuill theme="snow"
                            modules={modules}
                            formats={formats} defaultValue={value} onChange={setValue} />
                    </div>
                </div>
                {/* <!--begin::Container--> */}
            </div>
            {/* <!--end::Stepper--> */}
        </div >
    )
}

export default CustomForm