import React from 'react'

function MessageOut({ message }) {

    return (
        <>
            <div className="d-flex justify-content-end mb-10">
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-column align-items-end">
                    {/* <!--begin::User--> */}
                    <div className="d-flex align-items-center mb-2">
                        {/* <!--begin::Details--> */}
                        <div className="me-3">
                            <span className="text-muted fs-7 mb-1">5 mins</span>
                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Avatar--> */}
                        <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                        </div>
                        {/* <!--end::Avatar--> */}
                    </div>
                    {/* <!--end::User--> */}
                    {/* <!--begin::Text--> */}
                    <div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">{message}</div>
                    {/* <!--end::Text--> */}
                </div>
                {/* <!--end::Wrapper--> */}
            </div>
        </>
    )
}

export default MessageOut