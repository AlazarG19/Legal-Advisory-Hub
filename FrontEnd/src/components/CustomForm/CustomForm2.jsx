import React, { useRef } from 'react'
import { useState } from 'react';
import config from "../ChatbotKit/config.jsx";
import MessageParser from "../ChatbotKit/MessageParser.jsx";
import ActionProvider from "../ChatbotKit/ActionProvider.jsx";
import Chatbot from "react-chatbot-kit";
import { useSelector, useDispatch, useStore } from "react-redux"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect } from 'react';
import store from '../../redux/Store/index.js';
// tool bar that is located above the quill editor to make it blank 
// the reason it is black is to avoid editing the editor
import "./customform.css"
import { useParams } from 'react-router-dom';
import Navigation from '../Navigation.jsx';
function CustomForm2() {
    // create a refernce to the quill reference to call different functions
    const quillRef = useRef();

    let modules = {
        toolbar: {
            container: '#toolbar',

        }
    }
    let formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]
    // let newconfig = config
    const { id } = useParams();
    config["state"]["id"] = id
    const formtext = useSelector((state) => state.formtext.value)
    const [complete, setcomplete] = useState(false)
    // useEffect(() => {
    //     // console.log("+++++++++++++++++++++use effect in form data")
    //     const editor = quillRef.current.getEditor()
    //     if (editor.getText() == "\n") {
    //         if (typeof (formtext) == "string") {
    //             let delta = editor.clipboard.convert(formtext)
    //             editor.setContents(delta, 'silent')
    //         }
    //     } else {
    //         let delta = editor.clipboard.convert(formtext)
    //         editor.setContents(delta, 'silent')
    //     }
    // }, [reduxstate])
    const Print = () => {
        print()
    }
    const reduxstate = useSelector(state => state);
    console.log("???????????????")
    console.log("store state", reduxstate)
    useEffect(() => {
        console.log("+++++++++++++++++++++use effect in form data")
        // alert("dfadafa")
        if (reduxstate.formtext.completed) {
            console.log("???????????????")
            console.log(reduxstate.formtext)
            setcomplete(true)
        }

    }, [reduxstate])
    return (
        <>
            <Navigation />

            <div id="kt_app_content" className="app-content flex-column-fluid">

                <div id="kt_app_content_container" className="app-container container-xxl">
                    {/* <!--begin::Layout--> */}
                    <div className="d-flex flex-column flex-lg-row ">
                        {/* <!--begin::Content--> */}
                        <div className="flex-lg-row-fluid ms-lg-6 ms-xl-6 chatbotdiv mb-20 pb-10">
                            {/* <!--begin::Messenger--> */}

                            <div className="card" id="kt_chat_messenger">
                                <Chatbot
                                    config={config}
                                    messageParser={MessageParser}
                                    actionProvider={ActionProvider}
                                />{
                                    complete ? <button type="button" className="btn btn-lg btn-primary mt-10" onClick={Print} data-kt-element="settings-next">
                                        <span className="indicator-label">Print</span>
                                    </button> : ""
                                }

                            </div>
                            {/* <!--end::Messenger--> */}
                        </div>

                        <div className="flex-lg-row-fluid ms-lg-6 ms-xl-6">

                            <div id='printablediv' className="content" dangerouslySetInnerHTML={{ __html: formtext }}></div>
                        </div>
                        {/* <!--end::Content--> */}
                        {/* <!--begin::Sidebar--> */}

                    </div>

                    {/* <!--end::Layout--> */}

                </div>
                {/* <!--begin::Content container--> */}
                {/* <!--end::Content container--> */}
            </div>
        </>
    )
}



export default CustomForm2;