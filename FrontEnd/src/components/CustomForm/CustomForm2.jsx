import React, { useRef } from 'react'
import { useState } from 'react';
import config from "../ChatbotKit/config.jsx";
import MessageParser from "../ChatbotKit/MessageParser.jsx";
import ActionProvider from "../ChatbotKit/ActionProvider.jsx";
import Chatbot from "react-chatbot-kit";
import { useSelector, useDispatch } from "react-redux"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useEffect } from 'react';
import store from '../../redux/Store/index.js';
// tool bar that is located above the quill editor to make it blank 
// the reason it is black is to avoid editing the editor
const CustomToolbar = () => (
    <div id="toolbar">

    </div>
);
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

    const sections = useSelector((state) => state.sections.value)
    const formtext = useSelector((state) => state.formtext.value)
    const [value, setValue] = useState(formtext);
    const reduxstate = store.getState()
    useEffect(() => {
        console.log("+++++++++++++++++++++use effect in form data")
        const editor = quillRef.current.getEditor()
        if (editor.getText() == "\n") {
            if (typeof (formtext) == "string") {
                let delta = editor.clipboard.convert(formtext)
                editor.setContents(delta, 'silent')
            }
        }
    }, [reduxstate])

    return (

        // <!--begin::Content-->
        <div id="kt_app_content" className="app-content flex-column-fluid">

            <div id="kt_app_content_container" className="app-container container-xxl">
                {/* <!--begin::Layout--> */}
                <div className="d-flex flex-column flex-lg-row">
                    {/* <!--begin::Content--> */}
                    <div className="flex-lg-row-fluid ms-lg-5 ms-xl-5">
                        {/* <!--begin::Messenger--> */}

                        <div className="card" id="kt_chat_messenger">
                            <Chatbot
                                config={config}
                                messageParser={MessageParser}
                                actionProvider={ActionProvider}
                            />
                        </div>
                        {/* <!--end::Messenger--> */}
                    </div>
                    {/* <!--end::Content--> */}
                    {/* <!--begin::Sidebar--> */}
                    <CustomToolbar />
                    <ReactQuill theme="snow"
                        ref={quillRef}
                        modules={modules}
                        formats={formats} defaultValue={value} onChange={setValue} /> ;
                    {/* <!--end::Sidebar--> */}

                </div>
                {/* <!--end::Layout--> */}

            </div>
            {/* <!--begin::Content container--> */}
            {/* <!--end::Content container--> */}
        </div>
        // <!--end::Content-->
    )
}



export default CustomForm2;