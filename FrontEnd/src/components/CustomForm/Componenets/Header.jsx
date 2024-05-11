import React from 'react'

function Header() {
    return (
        <>
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
        </>
    )
}

export default Header