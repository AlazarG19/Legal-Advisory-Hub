import React, { useState } from "react";
import { Formik, useFormik } from 'formik';
import './authentication.css'
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";
import WarningModal from "./WarningModal";
const Settings = ({ details }) => {
  console.log(details)
  const [submitting, setsubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showConfirmationError, setShowConfirmationError] = useState(false);
  const [showConfirmationWarning, setShowConfirmationWarning] = useState(false);
  const handleSuccess = () => {
    setShowConfirmation(true);
  };
  const handleError = () => {
    setShowConfirmationError(true);
  };
  const handleDelete = () => {
    setShowConfirmationWarning(true);
  };
  const handleCloseDelete = () => {
    setShowConfirmationWarning(false)
  }
  const validate = async (values) => {
    console.log("start validating")
    const errors = {};
    console.log(values)
    if (!values.firstname) {
      errors.firstname = 'First Name Required';
    }
    if (!values.lastname) {
      errors.lastname = 'Last Name Required';
    }
    if (!values.username) {
      errors.username = 'UserName Required';
    }
    console.log(`http://localhost:3000/checkusername/${values.username}`)
    if (!errors.username) {
      console.log(values.username, details.username)
      if (values.username != details.username) {

        await fetch(`http://localhost:3000/checkusername/${values.username}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("within data")
            console.log(data)
            if (data.length != 0) {
              errors.username = 'username Exist!';
            }
          })
          .catch((error) => {
            console.log(error)
          });
      }
    } else {
      console.log("error")
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!errors.email) {

      await fetch(`http://localhost:3000/checkEmail/${values.email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          if (data.length != 0) {
            errors.email = 'Email Exist!';
          }
        })
        .catch((error) => {
          console.log(error)
        });
    } else {
      console.log("error")
    }
    if (!values.password) {
      errors.password = 'Password Required';
    }

    console.log("error", errors)
    setsubmitting(false)
    return errors;
  };
  const [selectedImage, setSelectedImage] = useState("http://localhost:3000/uploads/profile/" + details.profilePic);
  const [profilePicture, setProfilePicture] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
        setProfilePicture(event.target.files[0]);
      };
      reader.readAsDataURL(file);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstname: details.firstname,
      lastname: details.lastname,
      username: details.username,
      password: ""
    },
    validate,
    validateOnChange: false,


    onSubmit: async (values, setSubmitting) => {
      setsubmitting(false)
      console.log("submitted successfully")
      const formData = new FormData();
      console.log("profile picture", profilePicture)
      console.log("old Form data", formData)
      formData.append("profilePicture", profilePicture);
      formData.append("userid", details.id);
      formData.append("usertype", details.usertype);
      formData.append("firstname", values.firstname);
      formData.append("lastname", values.lastname);
      formData.append("username", values.username);
      formData.append("password", values.password);
      formData.append("profilePicture", profilePicture);
      console.log("userid", details.id);
      console.log("firstname", values.firstname);
      console.log("lastname", values.lastname);
      console.log("username", values.username);
      console.log("newpassword", values.newpassword);
      console.log("newformdata", formData.entries)

      // formData.append("contact", values.contact);
      // formData.append("city", values.city);
      // formData.append("language", values.language);
      // formData.append("bio", values.bio);
      // fetch(`http://localhost:3000/updateProfile`, {
      //   method: 'POST',
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      //   body: formData
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log("Successfully sent")
      //   })
      //   .catch((error) => {
      //     console.log("error while sending")
      //     console.error('Error:', error);
      //   });
      try {
        await axios.post("http://localhost:3000/updateProfile", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then(
          (result) => {
            console.log(result)
            console.log(result.data.success == true)
            if (result.data.success) {
              handleSuccess()
            } else {
              handleError()
            }
          }
        );

      } catch (error) {
        console.error("Error creating product:", error);
      }


    }
  })
  return (
    <div>
      {"normal submitting" + submitting}
      {"formik submitting" + formik.isSubmitting}
      {/* {formik.isSubmitting} */}
      <div className="card mb-5 mb-xl-10">
        {/*begin::Card header*/}
        <div
          className="card-header border-0 cursor-pointer"
          role="button"
          data-bs-toggle="collapse"
          data-bs-target="#kt_account_profile_details"
          aria-expanded="true"
          aria-controls="kt_account_profile_details"
        >
          {/*begin::Card title*/}
          <div className="card-title m-0">
            <h3 className="fw-bold m-0">Profile Details</h3>
          </div>
          {/*end::Card title*/}
        </div>
        {/*begin::Card header*/}
        {/*begin::Content*/}
        <div id="kt_account_settings_profile_details" className="collapse show">
          {/*begin::Form*/}
          <form
            onSubmit={formik.handleSubmit}
            id="kt_account_profile_details_form"
            className="form fv-plugins-bootstrap5 fv-plugins-framework"
            noValidate="novalidate"
          >
            {/*begin::Card body*/}
            <div className="card-body border-top p-9">
              {/*begin::Input group*/}
              <div className="row mb-6">
                {/*begin::Label*/}
                <label className="col-lg-4 col-form-label fw-semibold fs-6">
                  Avatar
                </label>
                {/*end::Label*/}
                {/*begin::Col*/}
                <div className="col-lg-8">
                  {/*begin::Image input*/}
                  <div
                    className="image-input image-input-outline"
                    data-kt-image-input="true"
                    style={{
                      backgroundImage:
                        'url("assets/media/svg/avatars/blank.svg")',
                    }}
                  >
                    {/*begin::Preview existing avatar*/}
                    <img className="image-input-wrapper w-125px h-125px" src={selectedImage} alt="" />

                    {/*end::Preview existing avatar*/}
                    {/*begin::Label*/}
                    <label
                      className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                      data-kt-image-input-action="change"
                      data-bs-toggle="tooltip"
                      aria-label="Change avatar"
                      data-bs-original-title="Change avatar"
                      data-kt-initialized={1}
                    >
                      <i className="bi bi-pencil-fill fs-7" />
                      {/*begin::Inputs*/}
                      <input type="file"
                        id="input-file"
                        name="input-file"
                        accept="image/*"
                        hidden=""
                        onChange={handleFileChange} />
                      {/*end::Inputs*/}
                    </label>
                    {/*end::Label*/}
                    {/*begin::Cancel*/}
                    <span
                      className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                      data-kt-image-input-action="cancel"
                      data-bs-toggle="tooltip"
                      aria-label="Cancel avatar"
                      data-bs-original-title="Cancel avatar"
                      data-kt-initialized={1}
                    >
                      <i className="bi bi-x fs-2" />
                    </span>
                    {/*end::Cancel*/}
                    {/*begin::Remove*/}
                    <span
                      className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                      data-kt-image-input-action="remove"
                      data-bs-toggle="tooltip"
                      aria-label="Remove avatar"
                      data-bs-original-title="Remove avatar"
                      data-kt-initialized={1}
                    >
                      <i className="bi bi-x fs-2" />
                    </span>
                    {/*end::Remove*/}
                  </div>
                  {/*end::Image input*/}
                  {/*begin::Hint*/}
                  <div className="form-text">
                    Allowed file types: png, jpg, jpeg.
                  </div>
                  {/*end::Hint*/}
                </div>
                {/*end::Col*/}
              </div>
              {/*end::Input group*/}
              {/*begin::Input group*/}
              <div className="row mb-6">
                {/*begin::Label*/}
                <label className="col-lg-4 col-form-label required fw-semibold fs-6">
                  Full Name
                </label>
                {/*end::Label*/}
                {/*begin::Col*/}
                <div className="col-lg-8">
                  {/*begin::Row*/}
                  <div className="row">
                    {/*begin::Col*/}
                    <div className="col-lg-6 fv-row fv-plugins-icon-container">
                      <input
                        type="text"
                        name="firstname"
                        className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"

                        onChange={formik.handleChange}
                        value={formik.values.firstname}
                      />
                      <div className='input-error-display' style={{ marginLeft: "40px" }} >{formik.errors.firstname}</div>

                    </div>
                    {/*end::Col*/}
                    {/*begin::Col*/}
                    <div className="col-lg-6 fv-row fv-plugins-icon-container">
                      <input
                        type="text"
                        name="lastname"
                        className="form-control form-control-lg form-control-solid"
                        onChange={formik.handleChange}
                        value={formik.values.lastname}

                      />
                      <div className='input-error-display' style={{ marginLeft: "40px" }} >{formik.errors.lastname}</div>
                    </div>
                    {/*end::Col*/}
                  </div>
                  {/*end::Row*/}
                </div>
                {/*end::Col*/}
              </div>
              {/*end::Input group*/}
              {/*begin::Input group*/}
              <div className="row mb-6">
                {/*begin::Label*/}
                <label className="col-lg-4 col-form-label required fw-semibold fs-6">
                  Username
                </label>
                {/*end::Label*/}
                {/*begin::Col*/}
                <div className="col-lg-8 fv-row fv-plugins-icon-container">
                  <input
                    type="text"
                    name="username"
                    className="form-control form-control-lg form-control-solid"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.username}
                  />
                  <div className='input-error-display' style={{ marginLeft: "40px" }} >{formik.errors.username}</div>
                </div>
                {/*end::Col*/}
              </div>
              {/*end::Input group*/}
              <div className="card-title m-0">
                <h3 className="fw-bold mb-10">If you want to change the password fill in the old password and add a new password. If not leave it blank</h3>
              </div>
              {/*begin::Input group*/}
              <div className="row mb-6">
                {/*begin::Label*/}
                <label className="col-lg-4 col-form-label fw-semibold fs-6">
                  <span className="required">Old Password</span>

                </label>
                {/*end::Label*/}
                {/*begin::Col*/}
                <div className="col-lg-8 fv-row fv-plugins-icon-container">
                  <input
                    type="password"
                    className="form-control form-control-lg form-control-solid"
                    onChange={formik.handleChange}
                    value={formik.values.oldpassword}
                    name='oldpassword'
                  />
                  <div className='input-error-display' style={{ marginLeft: "40px" }} >{formik.errors.oldpassword}</div>
                </div>
                {/*end::Col*/}
              </div>
              {/*end::Input group*/}
              {/*begin::Input group*/}
              <div className="row mb-6">
                {/*begin::Label*/}
                <label className="col-lg-4 col-form-label fw-semibold fs-6">
                  <span className="required">New Password</span>

                </label>
                {/*end::Label*/}
                {/*begin::Col*/}
                <div className="col-lg-8 fv-row fv-plugins-icon-container">
                  <input
                    type="password"
                    className="form-control form-control-lg form-control-solid"
                    onChange={formik.handleChange}
                    value={formik.values.newpassword}
                    name='newpassword'
                  />
                  <div className='input-error-display' style={{ marginLeft: "40px" }} >{formik.errors.newpassword}</div>
                </div>
                {/*end::Col*/}
              </div>
              {/*end::Input group*/}
            </div>
            {/*end::Card body*/}
            {/*begin::Actions*/}
            <div className="card-footer d-flex justify-content-end py-6 px-9">
              <button
                type="reset"
                className="btn btn-light btn-active-light-primary me-2"
              >
                Discard
              </button>
              {formik.isSubmitting ? <div className="text-center">
                <button disabled className="btn btn-primary" >
                  <span className="indicator-label">Please wait...
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                </button>
              </div> : <button
                type="submit"
                className="btn btn-primary"
                id="kt_account_profile_details_submit"
              >
                Save Changes

                <span className="indicator-progress">Please wait...
                  <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
              </button>}

            </div>
            {/*end::Actions*/}
            <input type="hidden" />
          </form>
          {/*end::Form*/}
        </div>
        {/*end::Content*/}
      </div>
      <div>
        <div className="card">
          {/*begin::Card header*/}
          <div
            className="card-header border-0 cursor-pointer"
            role="button"
            data-bs-toggle="collapse"
            data-bs-target="#kt_account_deactivate"
            aria-expanded="true"
            aria-controls="kt_account_deactivate"
          >
            <div className="card-title m-0">
              <h3 className="fw-bold m-0">Deactivate Account</h3>
            </div>
          </div>
          {/*end::Card header*/}
          {/*begin::Content*/}
          <div id="kt_account_settings_deactivate" className="collapse show">
            {/*begin::Form*/}

            {/*begin::Card body*/}
            <div className="card-body border-top p-9">
              {/*begin::Notice*/}
              <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
                {/*begin::Icon*/}
                {/*begin::Svg Icon | path: icons/duotune/general/gen044.svg*/}
                <span className="svg-icon svg-icon-2tx svg-icon-warning me-4">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.3"
                      x={2}
                      y={2}
                      width={20}
                      height={20}
                      rx={10}
                      fill="currentColor"
                    />
                    <rect
                      x={11}
                      y={14}
                      width={7}
                      height={2}
                      rx={1}
                      transform="rotate(-90 11 14)"
                      fill="currentColor"
                    />
                    <rect
                      x={11}
                      y={17}
                      width={2}
                      height={2}
                      rx={1}
                      transform="rotate(-90 11 17)"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
                {/*end::Icon*/}
                {/*begin::Wrapper*/}
                <div className="d-flex flex-stack flex-grow-1">
                  {/*begin::Content*/}
                  <div className="fw-semibold">
                    <h4 className="text-gray-900 fw-bold">
                      You Are Deactivating Your Account
                    </h4>
                    <div className="fs-6 text-gray-700">
                      Once your account is deactivating you won't be able to recover it.
                      <br />
                    </div>
                  </div>
                  {/*end::Content*/}
                </div>
                {/*end::Wrapper*/}
              </div>
              {/*end::Notice*/}
            </div>
            {/*end::Card body*/}
            {/*begin::Card footer*/}
            <div className="card-footer d-flex justify-content-end py-6 px-9">
              <button
                id=""
                onClick={handleDelete}
                className="btn btn-danger fw-semibold"
              >
                Deactivate Account
              </button>
            </div>
            {/*end::Card footer*/}
            <input type="hidden" />

            {/*end::Form*/}
          </div>
          {/*end::Content*/}
        </div>
      </div>

      {showConfirmation && <SuccessModal />}
      {showConfirmationError && <ErrorModal />}
      {showConfirmationWarning && <WarningModal id={details.id} close={handleCloseDelete} />}
    </div>
  );
};

export default Settings;
