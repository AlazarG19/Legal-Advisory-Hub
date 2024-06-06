import React, { useState, useEffect } from 'react';
import Navigation from '../Navigation';

function Chatbot({ User }) {
    const [messages, setMessages] = useState([]);
    const [userQuestion, setuserQuestion] = useState("");
    const [assistantResponse, setassistantResponse] = useState("");

    const UserId = "Fekede"
    useEffect(() => {
        fetch(`http://localhost:3000/api/threads/all/${UserId}`).then(res => res.json()).then(result => {
            setMessages(result)
            // console.log("This is the thread", result)
            console.log("This is the thread from the Messages", messages)
        }).catch((error) => {
            console.log(error)
        });
    }, [])


    function handleUserQuestion(e) {
        setuserQuestion(e.target.value)
    }

    const handleSendUserQuestion = async (e) => {
        // Start loading indicator
        if (userQuestion.trim() !== '') {

            const url = 'http://localhost:8000/ask'; // Replace with your API endpoint

            const requestData = {
                query_text: userQuestion
            }

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestData),
                });

                if (!response.ok) {
                    throw new Error('Request failed');
                }

                const responseData = await response.json();
                setassistantResponse(responseData)
                SaveThread()
                setuserQuestion("")

                // Process the response data here
                console.log(responseData);
            } catch (error) {
                // Handle the error here
                console.error(error);
            }
        }

    };


    const SaveThread = async () => {

        const url = 'http://localhost:3000/api/threads/'; // Replace with your API endpoint

        const requestData = {
            userId: "Fekede",
            conversation:
            {
                user: userQuestion,
                assistant: assistantResponse
            }
        }


        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }

            const responseData = await response.json();
            // Process the response data here
            console.log(responseData);
        } catch (error) {
            // Handle the error here
            console.error(error);
        }
    }
    const handleCommentSubmit = async () => {

    };



    function formatDateToStatement(dateString) {
        const date = new Date(dateString);

        // Get the month, day, and year from the date
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();

        // Get the hour, minute, and AM/PM designation
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;

        // Construct the statement date
        const statementDate = `${month} ${day}, ${year} at ${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
        return statementDate;
    }


    const PopulateChat = () => {

        return messages.map((chat, index) => {
            return (
                <>
                   
                    {/* <!--begin::Message(out)--> */}
                    <div className="d-flex justify-content-end mb-10">
                        {/* <!--begin::Wrapper--> */}
                        <div className="d-flex flex-column align-items-end">
                            {/* <!--begin::User--> */}
                            <div className="d-flex align-items-center mb-2">
                                {/* <!--begin::Details--> */}
                                <div className="me-3">
                                    <span className="text-muted fs-7 mb-1">{formatDateToStatement(chat.createdAt)}</span>
                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">{chat.userId}</a>
                                </div>
                                {/* <!--end::Details-->
                                    <!--begin::Avatar--> */}
                                <div className="symbol symbol-35px symbol-circle">
                                    <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                                </div>
                                {/* <!--end::Avatar--> */}
                            </div>
                            {/* <!--end::User--> */}
                            {/* <!--begin::Text--> */}
                            <div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">{chat.conversation.user}</div>
                            {/* <!--end::Text--> */}
                        </div>
                        {/* <!--end::Wrapper--> */}
                    </div>
                    {/* <!--end::Message(out)--> */}



                    {/* <!--begin::Message(in)--> */}
                    <div className="d-flex justify-content-start mb-10">
                        {/* <!--begin::Wrapper--> */}
                        <div className="d-flex flex-column align-items-start">
                            {/* <!--begin::User--> */}
                            <div className="d-flex align-items-center mb-2">
                                {/* <!--begin::Avatar--> */}
                                <div className="symbol symbol-35px symbol-circle">
                                    <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                                </div>
                                {/* <!--end::Avatar-->
                                    <!--begin::Details--> */}
                                <div className="ms-3">
                                    <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Chatbot</a>
                                    <span className="text-muted fs-7 mb-1">{formatDateToStatement(chat.createdAt)}</span>
                                </div>
                                {/* <!--end::Details--> */}
                            </div>
                            {/* <!--end::User-->
                                <!--begin::Text--> */}
                            <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">{chat.conversation.assistant}</div>
                            {/* <!--end::Text--> */}
                        </div>
                        {/* <!--end::Wrapper--> */}
                    </div>
                    {/* <!--end::Message(in)--> */}

                </>

            )
        })
    }


    return (
        <>
            {/* <!--begin::Messenger--> */}
            <Navigation />
            <div className="card" id="kt_chat_messenger">
                {/* <!--begin::Card header--> */}
                <div className="card-header" id="kt_chat_messenger_header">
                    {/* <!--begin::Title--> */}
                    <div className="card-title">
                        {/* <!--begin::User--> */}
                        <div className="d-flex justify-content-center flex-column me-3">
                            <a href="#" className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1">Brian Cox</a>
                            {/* <!--begin::Info--> */}
                            <div className="mb-0 lh-1">
                                <span className="badge badge-success badge-circle w-10px h-10px me-1"></span>
                                <span className="fs-7 fw-semibold text-muted">Active</span>
                            </div>
                            {/* <!--end::Info--> */}
                        </div>
                        {/* <!--end::User--> */}
                    </div>
                    {/* <!--end::Title-->
                    <!--begin::Card toolbar--> */}
                    <div className="card-toolbar">
                        {/* <!--begin::Menu--> */}
                        <div className="me-n3">
                            <button className="btn btn-sm btn-icon btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                <i className="bi bi-three-dots fs-2"></i>
                            </button>
                            {/* <!--begin::Menu 3--> */}
                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                                {/* <!--begin::Heading--> */}
                                <div className="menu-item px-3">
                                    <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Contacts</div>
                                </div>
                                {/* <!--end::Heading-->
                                <!--begin::Menu item--> */}
                                <div className="menu-item px-3">
                                    <a href="#" className="menu-link px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_users_search">Add Contact</a>
                                </div>
                                {/* <!--end::Menu item-->
                                <!--begin::Menu item--> */}
                                <div className="menu-item px-3">
                                    <a href="#" className="menu-link flex-stack px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">Invite Contacts
                                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a contact email to send an invitation"></i></a>
                                </div>
                                {/* <!--end::Menu item-->
                                <!--begin::Menu item--> */}
                                <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                    <a href="#" className="menu-link px-3">
                                        <span className="menu-title">Groups</span>
                                        <span className="menu-arrow"></span>
                                    </a>
                                    {/* <!--begin::Menu sub--> */}
                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                        {/* <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Create Group</a>
                                        </div>
                                        {/* <!--end::Menu item-->
                                        <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Invite Members</a>
                                        </div>
                                        {/* <!--end::Menu item-->
                                        <!--begin::Menu item--> */}
                                        <div className="menu-item px-3">
                                            <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Settings</a>
                                        </div>
                                        {/* <!--end::Menu item--> */}
                                    </div>
                                    {/* <!--end::Menu sub--> */}
                                </div>
                                {/* <!--end::Menu item--> */}
                                {/* <!--begin::Menu item--> */}
                                <div className="menu-item px-3 my-1">
                                    <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Settings</a>
                                </div>
                                {/* <!--end::Menu item--> */}
                            </div>
                            {/* <!--end::Menu 3--> */}
                        </div>
                        {/* <!--end::Menu--> */}
                    </div>
                    {/* <!--end::Card toolbar--> */}
                </div>
                {/* <!--end::Card header-->
                <!--begin::Card body--> */}
                <div className="card-body" id="kt_chat_messenger_body">
                    {/* <!--begin::Messages--> */}
                    <div className="scroll-y me-n5 pe-5 h-300px h-lg-auto" data-kt-element="messages" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_header, #kt_app_header, #kt_app_toolbar, #kt_toolbar, #kt_footer, #kt_app_footer, #kt_chat_messenger_header, #kt_chat_messenger_footer" data-kt-scroll-wrappers="#kt_content, #kt_app_content, #kt_chat_messenger_body" data-kt-scroll-offset="5px">
                        {/* <!--begin::Message(in)--> */}
                        <div className="d-flex justify-content-start mb-10">
                            {/* <!--begin::Wrapper--> */}
                            <div className="d-flex flex-column align-items-start">
                                {/* <!--begin::User--> */}
                                <div className="d-flex align-items-center mb-2">
                                    {/* <!--begin::Avatar--> */}
                                    <div className="symbol symbol-35px symbol-circle">
                                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                                    </div>
                                    {/* <!--end::Avatar-->
                                    <!--begin::Details--> */}
                                    <div className="ms-3">
                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Chatbot</a>
                                        <span className="text-muted fs-7 mb-1">2 mins</span>
                                    </div>
                                    {/* <!--end::Details--> */}
                                </div>
                                {/* <!--end::User-->
                                <!--begin::Text--> */}
                                <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Welcome to the Legal Advisory Hub chatbot! I'm an AI assistant to help you with all your legal questions and inquiries.</div>
                                {/* <!--end::Text--> */}
                            </div>
                            {/* <!--end::Wrapper--> */}
                        </div>
                        {/* <!--end::Message(in)--> */}

                        {PopulateChat()}

                        {/* {/* <!--begin::Message(template for out)--> */}
                        <div className="d-flex justify-content-end mb-10 d-none" data-kt-element="template-out">
                            {/* <!--begin::Wrapper--> */}
                            <div className="d-flex flex-column align-items-end">
                                {/* <!--begin::User--> */}
                                <div className="d-flex align-items-center mb-2">
                                    {/* <!--begin::Details--> */}
                                    <div className="me-3">
                                        <span className="text-muted fs-7 mb-1">Just now</span>
                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
                                    </div>
                                    {/* <!--end::Details-->
                                    <!--begin::Avatar--> */}
                                    <div className="symbol symbol-35px symbol-circle">
                                        <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                                    </div>
                                    {/* <!--end::Avatar--> */}
                                </div>
                                {/* <!--end::User-->
                                <!--begin::Text--> */}
                                <div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text"></div>
                                {/* <!--end::Text--> */}
                            </div>
                            {/* <!--end::Wrapper--> */}
                        </div>
                        {/* <!--end::Message(template for out)--> */}
                        {/* <!--begin::Message(template for in)--> */}
                        <div className="d-flex justify-content-start mb-10 d-none" data-kt-element="template-in">
                            {/* <!--begin::Wrapper--> */}
                            <div className="d-flex flex-column align-items-start">
                                {/* <!--begin::User--> */}
                                <div className="d-flex align-items-center mb-2">
                                    {/* <!--begin::Avatar--> */}
                                    <div className="symbol symbol-35px symbol-circle">
                                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                                    </div>
                                    {/* <!--end::Avatar--> */}
                                    {/* <!--begin::Details--> */}
                                    <div className="ms-3">
                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                        <span className="text-muted fs-7 mb-1">Just now</span>
                                    </div>
                                    {/* <!--end::Details--> */}
                                </div>
                                {/* <!--end::User--> */}
                                {/* <!--begin::Text--> */}
                                <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Right before vacation season we have the next Big Deal for you.</div>
                                {/* <!--end::Text--> */}
                            </div>
                            {/* <!--end::Wrapper--> */}
                        </div>
                        {/* <!--end::Message(template for in)--> */}

                    </div>
                    {/* <!--end::Messages--> */}
                </div>
                {/* <!--end::Card body--> */}
                {/* <!--begin::Card footer--> */}
                <div className="card-footer pt-4" id="kt_chat_messenger_footer">
                    {/* <!--begin::Input--> */}
                    <textarea className="form-control form-control-flush mb-3" value={userQuestion} onChange={handleUserQuestion} rows="1" data-kt-element="input" placeholder="Type a message"></textarea>
                    {/* <!--end::Input--> */}
                    {/* <!--begin:Toolbar--> */}
                    <div className="d-flex flex-stack">
                        {/* <!--begin::Actions--> */}
                        <div className="d-flex align-items-center me-2">
                            <button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon">
                                {/* <i className="bi bi-paperclip fs-3"></i> */}
                            </button>
                            <button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon">
                                {/* <i className="bi bi-upload fs-3"></i> */}
                            </button>
                        </div>
                        {/* <!--end::Actions--> */}
                        {/* <!--begin::Send--> */}
                        <button className="btn btn-primary" type="button" onClick={handleSendUserQuestion()} data-kt-element="send">Send</button>
                        {/* <!--end::Send--> */}
                    </div>
                    {/* <!--end::Toolbar--> */}
                </div>
                {/* <!--end::Card footer--> */}
            </div>
            {/* <!--end::Messenger--> */}

        </>
    );
}

export default Chatbot;
























