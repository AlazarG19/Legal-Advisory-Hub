import React from 'react'

function MessageIn({ message }) {

    return (
        <>
            {/* <!--begin::Message(in)--> */}
            <div className="d-flex justify-content-start mb-10">
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-column align-items-start">
                    {/* <!--begin::User--> */}
                    <div className="d-flex align-items-center mb-2">
                        {/* <!--begin::Avatar--> */}
                        <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="/assets/media/avatars/300-25.jpg" />
                        </div>
                        {/* <!--end::Avatar--> */}
                        {/* <!--begin::Details--> */}
                        <div className="ms-3">
                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Chat Bot</a>
                            {/* <span className="text-muted fs-7 mb-1">2 mins</span> */}
                        </div>
                        {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::User--> */}
                    {/* <!--begin::Text--> */}
                    <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">{message}</div>
                    {/* <!--end::Text--> */}
                </div>
                {/* <!--end::Wrapper--> */}
            </div>
            {/* <!--end::Message(in)--> */}
        </>
    )
}

export default MessageIn