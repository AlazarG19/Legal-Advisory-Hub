import React from 'react'

function CreatePost() {
    return (
        <div className="card card-flush mb-10">

            {/* <!--begin::Body--> */}
            <div className="card-body pt-2 pb-0">
                {/* <!--begin::Input--> */}
                <textarea className="form-control bg-transparent border-0 px-0" id="kt_social_feeds_post_input" name="message" data-kt-autosize="true" rows="1" placeholder="Type your message..."></textarea>
                {/* <!--end::Input--> */}
            </div>
            {/* <!--end::Body--> */}
            {/* <!--begin::Footer--> */}
            <div className="card-footer d-flex justify-content-end pt-0">
                {/* <!--begin::Post action--> */}
                <a href="../../demo1/dist/pages/blog/post.html" className="btn btn-sm btn-primary" id="kt_social_feeds_post_btn">
                    {/* <!--begin::Indicator label--> */}
                    <span className="indicator-label">Post</span>
                    {/* <!--end::Indicator label--> */}
                    {/* <!--begin::Indicator progress--> */}
                    <span className="indicator-progress">Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                    {/* <!--end::Indicator progress--> */}
                </a>
                {/* <!--end::Post action--> */}
            </div>
            {/* <!--end::Footer--> */}
        </div>
    )
}

export default CreatePost