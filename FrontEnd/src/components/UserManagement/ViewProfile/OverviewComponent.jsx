import React from "react";

const OverviewComponent = ({ details }) => {
  console.log("details")
  console.log(details)
  return (
    <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
      {/*begin::Card header*/}
      <div className="card-header cursor-pointer">
        {/*begin::Card title*/}
        <div className="card-title m-0">
          <h3 className="fw-bold m-0">Profile Details</h3>
        </div>
        {/*end::Card title*/}
        {/*begin::Action*/}
        {/* <a
      href="../../demo1/dist/account/settings.html"
      className="btn btn-sm btn-primary align-self-center"
    >
      Edit Profile
    </a> */}
        {/*end::Action*/}
      </div>
      {/*begin::Card header*/}
      {/*begin::Card body*/}
      <div className="card-body p-9">
        {/*begin::Row*/}
        <div className="row mb-7">
          {/*begin::Label*/}
          <label className="col-lg-4 fw-semibold text-muted">Full Name</label>
          {/*end::Label*/}
          {/*begin::Col*/}
          <div className="col-lg-8">
            <span className="fw-bold fs-6 text-gray-800">{details.firstname + " " + details.lastname}</span>
          </div>
          {/*end::Col*/}
        </div>
        {/*end::Row*/}
        {/*begin::Input group*/}
        <div className="row mb-7">
          {/*begin::Label*/}
          <label className="col-lg-4 fw-semibold text-muted">
            Email

          </label>
          {/*end::Label*/}
          {/*begin::Col*/}
          <div className="col-lg-8 d-flex align-items-center">
            <span className="fw-bold fs-6 text-gray-800 me-2">
              {details.email}
            </span>
            <span className="badge badge-success">Verified</span>
          </div>
          {/*end::Col*/}
        </div>
        {/*end::Input group*/}
        {/*begin::Input group*/}
        <div className="row mb-7">
          {/*begin::Label*/}
          <label className="col-lg-4 fw-semibold text-muted">User Name </label>
          {/*end::Label*/}
          {/*begin::Col*/}
          <div className="col-lg-8 fv-row">
            <span className="fw-bold text-gray-800 fs-6">{details.username}</span>
          </div>
          {/*end::Col*/}
        </div>
        {/*end::Input group*/}
        {details.usertype == "freelancer" ?
          <div className="row mb-7">
            {/*begin::Label*/}
            <label className="col-lg-4 fw-semibold text-muted">Category</label>
            {/*end::Label*/}
            {/*begin::Col*/}
            <div className="col-lg-8 fv-row">
              <span className="fw-bold text-gray-800 fs-6">{details.catagory}</span>
            </div>
            {/*end::Col*/}
          </div>

          : ""}
        {details.usertype == "freelancer" ?
          <div className="row mb-7">
            {/*begin::Label*/}
            <label className="col-lg-4 fw-semibold text-muted">Firm</label>
            {/*end::Label*/}
            {/*begin::Col*/}
            <div className="col-lg-8 fv-row">
              <span className="fw-bold text-gray-800 fs-6">{details.firm}</span>
            </div>
            {/*end::Col*/}
          </div>

          : ""}
        {details.usertype == "freelancer" ?
          <div className="row mb-7">
            {/*begin::Label*/}
            <label className="col-lg-4 fw-semibold text-muted">Contact</label>
            {/*end::Label*/}
            {/*begin::Col*/}
            <div className="col-lg-8 fv-row">
              <span className="fw-bold text-gray-800 fs-6">{details.contact}</span>
            </div>
            {/*end::Col*/}
          </div>

          : ""}
        {details.usertype == "freelancer" ?
          <div className="row mb-7">
            {/*begin::Label*/}
            <label className="col-lg-4 fw-semibold text-muted">City</label>
            {/*end::Label*/}
            {/*begin::Col*/}
            <div className="col-lg-8 fv-row">
              <span className="fw-bold text-gray-800 fs-6">{details.city}</span>
            </div>
            {/*end::Col*/}
          </div>

          : ""}
        {details.usertype == "freelancer" ?
          <div className="row mb-7">
            {/*begin::Label*/}
            <label className="col-lg-4 fw-semibold text-muted">Language</label>
            {/*end::Label*/}
            {/*begin::Col*/}
            <div className="col-lg-8 fv-row">
              <span className="fw-bold text-gray-800 fs-6">{details.language}</span>
            </div>
            {/*end::Col*/}
          </div>

          : ""}
        {details.usertype == "freelancer" ?
          <div className="row mb-7">
            {/*begin::Label*/}
            <label className="col-lg-4 fw-semibold text-muted">Bio</label>
            {/*end::Label*/}
            {/*begin::Col*/}
            <div className="col-lg-8 fv-row">
              <span className="fw-bold text-gray-800 fs-6">{details.bio}</span>
            </div>
            {/*end::Col*/}
          </div>

          : ""}
      </div>
      {/*end::Card body*/}
    </div>

  );
};

export default OverviewComponent;
