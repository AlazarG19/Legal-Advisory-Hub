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

    const formtext = useSelector((state) => state.formtext.value)
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
        //console.log('print');  
        let printContents = document.getElementById('printablediv').innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }
    return (

        // <!--begin::Content-->
        <div id="kt_app_content" className="app-content flex-column-fluid">

            <div id="kt_app_content_container" className="app-container container-xxl">
                {/* <!--begin::Layout--> */}
                <div className="d-flex flex-column flex-lg-row">
                    {/* <!--begin::Content--> */}
                    <div className="flex-lg-row-fluid ms-lg-6 ms-xl-6">
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
                    <div className="flex-lg-row-fluid ms-lg-6 ms-xl-6">

                        <div style={{ width: "210mm", height: "297mm", boxShadow: `0px 0px 70px -8px rgba(0,0,0,0.37)`, padding: "40px" }} id='printablediv' className="content" dangerouslySetInnerHTML={{ __html: formtext }}></div>
                    </div>
                    {/* <!--end::Content--> */}
                    {/* <!--begin::Sidebar--> */}
                    {/* <ReactQuill theme="snow"
                        ref={quillRef}
                        modules={modules}
                        formats={formats} defaultValue={value} onChange={setValue} /> ; */}
                    {/* <!--end::Sidebar--> */}
                    { }
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