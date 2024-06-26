import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import MessageIn from './MessageIn';
import MessageOut from './MessageOut';
import { useSelector } from 'react-redux';

function CustomForm() {
    const [section, setsection] = useState()
    useEffect(() => {
        fetch(`http://localhost:3000/api/forms`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Successfully sent")
                console.log(data[0].section)
                setsection(data[0].section)
            })
            .catch((error) => {
                console.log("error while sending")
                console.error('Error:', error);
            });
    }, [])
    console.log("withing the react component")
    const states = useSelector(state => state);
    console.log(states)
    return (
        // <!--begin::Content-->
        <div id="kt_app_content" className="app-content flex-column-fluid">
            {/* <!--begin::Content container--> */}
            <div id="kt_app_content_container" className="app-container container-xxl">
                {/* <!--begin::Layout--> */}
                <div className="d-flex flex-column flex-lg-row">
                    {/* <!--begin::Content--> */}
                    <div className="flex-lg-row-fluid ms-lg-5 ms-xl-5">
                        {/* <!--begin::Messenger--> */}
                        <div className="card" id="kt_chat_messenger">
                            {/* <!--begin::Card header--> */}
                            <div className="card-header" id="kt_chat_messenger_header">
                                {/* <!--begin::Title--> */}
                                <div className="card-title">
                                    {/* <!--begin::User--> */}
                                    <div className="d-flex justify-content-center flex-column me-3">
                                        <a href="#" className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1">Form Filler</a>

                                    </div>
                                    {/* <!--end::User--> */}
                                </div>
                                {/* <!--end::Title--> */}
                            </div>
                            {/* <!--end::Card header--> */}
                            {/* <!--begin::Card body--> */}
                            <div className="card-body" id="kt_chat_messenger_body">
                                {/* <!--begin::Messages--> */}
                                <div className="scroll-y me-n5 pe-5 h-300px h-lg-auto" data-kt-element="messages" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_header, #kt_app_header, #kt_app_toolbar, #kt_toolbar, #kt_footer, #kt_app_footer, #kt_chat_messenger_header, #kt_chat_messenger_footer" data-kt-scroll-wrappers="#kt_content, #kt_app_content, #kt_chat_messenger_body" data-kt-scroll-offset="5px">
                                    {/* <!--begin::Message(in)--> */}
                                    <MessageIn />
                                    {/* <!--end::Message(in)--> */}
                                    {/* <!--begin::Message(out)--> */}
                                    <MessageOut />
                                    {/* <!--end::Message(out)--> */}
                                </div>
                                {/* <!--end::Messages--> */}
                            </div>
                            {/* <!--end::Card body--> */}
                            {/* <!--begin::Card footer--> */}
                            <div className="card-footer pt-4" id="kt_chat_messenger_footer">
                                {/* <!--begin::Input--> */}
                                <textarea className="form-control form-control-flush mb-3" rows="1" data-kt-element="input" placeholder="Type a message"></textarea>
                                {/* <!--end::Input--> */}
                                {/* <!--begin:Toolbar--> */}
                                <div className="d-flex flex-stack">
                                    {/* <!--begin::Send--> */}
                                    <button className="btn btn-primary" type="button" data-kt-element="send">Send</button>
                                    {/* <!--end::Send--> */}
                                </div>
                                {/* <!--end::Toolbar--> */}
                            </div>
                            {/* <!--end::Card footer--> */}
                        </div>
                        {/* <!--end::Messenger--> */}
                    </div>
                    {/* <!--end::Content--> */}
                    {/* <!--begin::Sidebar--> */}
                    <div className="flex-column flex-lg-row-auto w-100 w-lg-300px w-xl-400px mb-10 mb-lg-0">
                        {/* <!--begin::Contacts--> */}
                        <div className="card card-flush">
                            {/* <!--begin::Card header--> */}
                            <div className="card-header pt-7" id="kt_chat_contacts_header">
                                {/* <!--begin::Form--> */}
                                <form className="w-100 position-relative" autoComplete="off">
                                    {/* <!--begin::Icon--> */}
                                    {/* <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg--> */}
                                    <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor" />
                                            <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                    {/* <!--end::Svg Icon--> */}
                                    {/* <!--end::Icon--> */}
                                    {/* <!--begin::Input--> */}
                                    <input type="text" className="form-control form-control-solid px-15" name="search" placeholder="Search by username or email..." />
                                    {/* <!--end::Input--> */}
                                </form>
                                {/* <!--end::Form--> */}
                            </div>
                            {/* <!--end::Card header--> */}
                            {/* <!--begin::Card body--> */}
                            <div className="card-body pt-5" id="kt_chat_contacts_body">
                                {/* <!--begin::List--> */}
                                <div className="scroll-y me-n5 pe-5 h-200px h-lg-auto" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_header, #kt_app_header, #kt_toolbar, #kt_app_toolbar, #kt_footer, #kt_app_footer, #kt_chat_contacts_header" data-kt-scroll-wrappers="#kt_content, #kt_app_content, #kt_chat_contacts_body" data-kt-scroll-offset="5px">
                                    {/* <!--begin::User--> */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* <!--begin::Details--> */}
                                        <div className="d-flex align-items-center">
                                            {/* <!--begin::Avatar--> */}
                                            <div className="symbol symbol-45px symbol-circle">
                                                <span className="symbol-label bg-light-danger text-danger fs-6 fw-bolder">M</span>
                                                <div className="symbol-badge bg-success start-100 top-100 border-4 h-8px w-8px ms-n2 mt-n2"></div>
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                            {/* <!--begin::Details--> */}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>
                                                <div className="fw-semibold text-muted">melody@altbox.com</div>
                                            </div>
                                            {/* <!--end::Details--> */}
                                        </div>
                                        {/* <!--end::Details--> */}
                                        {/* <!--begin::Lat seen--> */}
                                        <div className="d-flex flex-column align-items-end ms-2">
                                            <span className="text-muted fs-7 mb-1">1 week</span>
                                        </div>
                                        {/* <!--end::Lat seen--> */}
                                    </div>
                                    {/* <!--end::User--> */}
                                    {/* <!--begin::Separator--> */}
                                    <div className="separator separator-dashed d-none"></div>
                                    {/* <!--end::Separator--> */}
                                    {/* <!--begin::User--> */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* <!--begin::Details--> */}
                                        <div className="d-flex align-items-center">
                                            {/* <!--begin::Avatar--> */}
                                            <div className="symbol symbol-45px symbol-circle">
                                                <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                            {/* <!--begin::Details--> */}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>
                                                <div className="fw-semibold text-muted">max@kt.com</div>
                                            </div>
                                            {/* <!--end::Details--> */}
                                        </div>
                                        {/* <!--end::Details--> */}
                                        {/* <!--begin::Lat seen--> */}
                                        <div className="d-flex flex-column align-items-end ms-2">
                                            <span className="text-muted fs-7 mb-1">3 hrs</span>
                                            <span className="badge badge-sm badge-circle badge-light-success">2</span>
                                        </div>
                                        {/* <!--end::Lat seen--> */}
                                    </div>
                                    {/* <!--end::User--> */}
                                    {/* <!--begin::Separator--> */}
                                    <div className="separator separator-dashed d-none"></div>
                                    {/* <!--end::Separator--> */}
                                    {/* <!--begin::User--> */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* <!--begin::Details--> */}
                                        <div className="d-flex align-items-center">
                                            {/* <!--begin::Avatar--> */}
                                            <div className="symbol symbol-45px symbol-circle">
                                                <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                            {/* <!--begin::Details--> */}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>
                                                <div className="fw-semibold text-muted">sean@dellito.com</div>
                                            </div>
                                            {/* <!--end::Details--> */}
                                        </div>
                                        {/* <!--end::Details--> */}
                                        {/* <!--begin::Lat seen--> */}
                                        <div className="d-flex flex-column align-items-end ms-2">
                                            <span className="text-muted fs-7 mb-1">2 weeks</span>
                                        </div>
                                        {/* <!--end::Lat seen--> */}
                                    </div>
                                    {/* <!--end::User--> */}
                                    {/* <!--begin::Separator--> */}
                                    <div className="separator separator-dashed d-none"></div>
                                    {/* <!--end::Separator--> */}
                                    {/* <!--begin::User--> */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* <!--begin::Details--> */}
                                        <div className="d-flex align-items-center">
                                            {/* <!--begin::Avatar--> */}
                                            <div className="symbol symbol-45px symbol-circle">
                                                <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                                                <div className="symbol-badge bg-success start-100 top-100 border-4 h-8px w-8px ms-n2 mt-n2"></div>
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                            {/* <!--begin::Details--> */}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>
                                                <div className="fw-semibold text-muted">brian@exchange.com</div>
                                            </div>
                                            {/* <!--end::Details--> */}
                                        </div>
                                        {/* <!--end::Details--> */}
                                        {/* <!--begin::Lat seen--> */}
                                        <div className="d-flex flex-column align-items-end ms-2">
                                            <span className="text-muted fs-7 mb-1">5 hrs</span>
                                            <span className="badge badge-sm badge-circle badge-light-success">6</span>
                                        </div>
                                        {/* <!--end::Lat seen--> */}
                                    </div>
                                    {/* <!--end::User--> */}
                                    {/* <!--begin::Separator--> */}
                                    <div className="separator separator-dashed d-none"></div>
                                    {/* <!--end::Separator--> */}
                                    {/* <!--begin::User--> */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* <!--begin::Details--> */}
                                        <div className="d-flex align-items-center">
                                            {/* <!--begin::Avatar--> */}
                                            <div className="symbol symbol-45px symbol-circle">
                                                <span className="symbol-label bg-light-warning text-warning fs-6 fw-bolder">C</span>
                                                <div className="symbol-badge bg-success start-100 top-100 border-4 h-8px w-8px ms-n2 mt-n2"></div>
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                            {/* <!--begin::Details--> */}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>
                                                <div className="fw-semibold text-muted">mik@pex.com</div>
                                            </div>
                                            {/* <!--end::Details--> */}
                                        </div>
                                        {/* <!--end::Details--> */}
                                        {/* <!--begin::Lat seen--> */}
                                        <div className="d-flex flex-column align-items-end ms-2">
                                            <span className="text-muted fs-7 mb-1">2 weeks</span>
                                        </div>
                                        {/* <!--end::Lat seen--> */}
                                    </div>
                                    {/* <!--end::User--> */}
                                    {/* <!--begin::Separator--> */}
                                    <div className="separator separator-dashed d-none"></div>
                                    {/* <!--end::Separator--> */}
                                    {/* <!--begin::User--> */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* <!--begin::Details--> */}
                                        <div className="d-flex align-items-center">
                                            {/* <!--begin::Avatar--> */}
                                            <div className="symbol symbol-45px symbol-circle">
                                                <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                                                <div className="symbol-badge bg-success start-100 top-100 border-4 h-8px w-8px ms-n2 mt-n2"></div>
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                            {/* <!--begin::Details--> */}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
                                                <div className="fw-semibold text-muted">f.mit@kpmg.com</div>
                                            </div>
                                            {/* <!--end::Details--> */}
                                        </div>
                                        {/* <!--end::Details--> */}
                                        {/* <!--begin::Lat seen--> */}
                                        <div className="d-flex flex-column align-items-end ms-2">
                                            <span className="text-muted fs-7 mb-1">2 weeks</span>
                                        </div>
                                        {/* <!--end::Lat seen--> */}
                                    </div>
                                    {/* <!--end::User--> */}
                                    {/* <!--begin::Separator--> */}
                                    <div className="separator separator-dashed d-none"></div>
                                    {/* <!--end::Separator--> */}
                                    {/* <!--begin::User--> */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* <!--begin::Details--> */}
                                        <div className="d-flex align-items-center">
                                            {/* <!--begin::Avatar--> */}
                                            <div className="symbol symbol-45px symbol-circle">
                                                <span className="symbol-label bg-light-danger text-danger fs-6 fw-bolder">O</span>
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                            {/* <!--begin::Details--> */}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>
                                                <div className="fw-semibold text-muted">olivia@corpmail.com</div>
                                            </div>
                                            {/* <!--end::Details--> */}
                                        </div>
                                        {/* <!--end::Details--> */}
                                        {/* <!--begin::Lat seen--> */}
                                        <div className="d-flex flex-column align-items-end ms-2">
                                            <span className="text-muted fs-7 mb-1">1 week</span>
                                            <span className="badge badge-sm badge-circle badge-light-danger">5</span>
                                        </div>
                                        {/* <!--end::Lat seen--> */}
                                    </div>
                                    {/* <!--end::User--> */}
                                    {/* <!--begin::Separator--> */}
                                    <div className="separator separator-dashed d-none"></div>
                                    {/* <!--end::Separator--> */}
                                    {/* <!--begin::User--> */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* <!--begin::Details--> */}
                                        <div className="d-flex align-items-center">
                                            {/* <!--begin::Avatar--> */}
                                            <div className="symbol symbol-45px symbol-circle">
                                                <span className="symbol-label bg-light-primary text-primary fs-6 fw-bolder">N</span>
                                                <div className="symbol-badge bg-success start-100 top-100 border-4 h-8px w-8px ms-n2 mt-n2"></div>
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                            {/* <!--begin::Details--> */}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>
                                                <div className="fw-semibold text-muted">owen.neil@gmail.com</div>
                                            </div>
                                            {/* <!--end::Details--> */}
                                        </div>
                                        {/* <!--end::Details--> */}
                                        {/* <!--begin::Lat seen--> */}
                                        <div className="d-flex flex-column align-items-end ms-2">
                                            <span className="text-muted fs-7 mb-1">2 weeks</span>
                                            <span className="badge badge-sm badge-circle badge-light-success">6</span>
                                        </div>
                                        {/* <!--end::Lat seen--> */}
                                    </div>
                                    {/* <!--end::User--> */}
                                    {/* <!--begin::Separator--> */}
                                    <div className="separator separator-dashed d-none"></div>
                                    {/* <!--end::Separator--> */}
                                    {/* <!--begin::User--> */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* <!--begin::Details--> */}
                                        <div className="d-flex align-items-center">
                                            {/* <!--begin::Avatar--> */}
                                            <div className="symbol symbol-45px symbol-circle">
                                                <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                                                <div className="symbol-badge bg-success start-100 top-100 border-4 h-8px w-8px ms-n2 mt-n2"></div>
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                            {/* <!--begin::Details--> */}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
                                                <div className="fw-semibold text-muted">dam@consilting.com</div>
                                            </div>
                                            {/* <!--end::Details--> */}
                                        </div>
                                        {/* <!--end::Details--> */}
                                        {/* <!--begin::Lat seen--> */}
                                        <div className="d-flex flex-column align-items-end ms-2">
                                            <span className="text-muted fs-7 mb-1">3 hrs</span>
                                            <span className="badge badge-sm badge-circle badge-light-success">2</span>
                                        </div>
                                        {/* <!--end::Lat seen--> */}
                                    </div>
                                    {/* <!--end::User--> */}
                                    {/* <!--begin::Separator--> */}
                                    <div className="separator separator-dashed d-none"></div>
                                    {/* <!--end::Separator--> */}
                                    {/* <!--begin::User--> */}
                                    <div className="d-flex flex-stack py-4">
                                        {/* <!--begin::Details--> */}
                                        <div className="d-flex align-items-center">
                                            {/* <!--begin::Avatar--> */}
                                            <div className="symbol symbol-45px symbol-circle">
                                                <span className="symbol-label bg-light-danger text-danger fs-6 fw-bolder">E</span>
                                                <div className="symbol-badge bg-success start-100 top-100 border-4 h-8px w-8px ms-n2 mt-n2"></div>
                                            </div>
                                            {/* <!--end::Avatar--> */}
                                            {/* <!--begin::Details--> */}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>
                                                <div className="fw-semibold text-muted">emma@intenso.com</div>
                                            </div>
                                            {/* <!--end::Details--> */}
                                        </div>
                                        {/* <!--end::Details--> */}
                                        {/* <!--begin::Lat seen--> */}
                                        <div className="d-flex flex-column align-items-end ms-2">
                                            <span className="text-muted fs-7 mb-1">1 day</span>
                                            <span className="badge badge-sm badge-circle badge-light-danger">5</span>
                                        </div>
                                        {/* <!--end::Lat seen--> */}
                                    </div>
                                    {/* <!--end::User--> */}
                                </div>
                                {/* <!--end::List--> */}
                            </div>
                            {/* <!--end::Card body--> */}
                        </div>
                        {/* <!--end::Contacts--> */}
                    </div>
                    {/* <!--end::Sidebar--> */}

                </div>
                {/* <!--end::Layout--> */}

            </div>
            {/* <!--end::Content container--> */}
        </div>
        // <!--end::Content-->
    )
}

export default CustomForm