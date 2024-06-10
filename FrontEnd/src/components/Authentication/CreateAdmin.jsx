import React, { useState } from "react";
import { Formik, useFormik } from 'formik';
import './authentication.css'
import SuccessModal from "./SuccessModal";
import ErrorModal from "./ErrorModal";
import WarningModal from "./WarningModal";
import Navigation from "../Navigation";
import { useNavigate } from "react-router";
const CreateAdmin = ({ }) => {
  const [submitting, setsubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showConfirmationError, setShowConfirmationError] = useState(false);
  const [showConfirmationWarning, setShowConfirmationWarning] = useState(false);
  const navigate = useNavigate()
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
      errors.password = 'Required';
    } else if (values.password.length < 2) {
      errors.password = 'Too Short';
    }

    console.log("error", errors)
    setsubmitting(false)
    return errors;
  };
  const [selectedImage, setSelectedImage] = useState("/assets/img/placeholder.png");
  const [profilePicture, setProfilePicture] = useState("");
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
      firstname: "",
      lastname: "",
      username: "",
      newpassword: "",
      oldpassword: "",
    },
    validate,
    validateOnChange: false,


    onSubmit: async (values, setSubmitting) => {
      setsubmitting(false)
      // console.log("submitted successfully")
      const formData = new FormData();
      // console.log("profile picture", profilePicture)
      // console.log("old Form data", formData)
      formData.append("profilePicture", profilePicture);
      formData.append("usertype", "admin");
      formData.append("firstname", values.firstname);
      formData.append("lastname", values.lastname);
      formData.append("username", values.username);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("profilePicture", profilePicture);
      fetch(`http://localhost:3000/createAdminProfile`, {
        method: 'POST',

        body: formData
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Successfully Created")
          navigate("/profile")
        })
        .catch((error) => {
          console.log("error while sending")
          console.error('Error:', error);
        });



    }
  })
  return (
    <div>
      <Navigation />
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
              {/*begin::Input group*/}
              <div className="row mb-6">
                {/*begin::Label*/}
                <label className="col-lg-4 col-form-label required fw-semibold fs-6">
                  Email
                </label>
                {/*end::Label*/}
                {/*begin::Col*/}
                <div className="col-lg-8 fv-row fv-plugins-icon-container">
                  <input
                    type="text"
                    name="email"
                    className="form-control form-control-lg form-control-solid"
                    onChange={formik.handleChange}
                    defaultValue={formik.values.email}
                  />
                  <div className='input-error-display' style={{ marginLeft: "40px" }} >{formik.errors.email}</div>
                </div>
                {/*end::Col*/}
              </div>
              {/*end::Input group*/}
              {/*begin::Input group*/}
              <div className="row mb-6">
                {/*begin::Label*/}
                <label className="col-lg-4 col-form-label fw-semibold fs-6">
                  <span className="required">Password</span>

                </label>
                {/*end::Label*/}
                {/*begin::Col*/}
                <div className="col-lg-8 fv-row fv-plugins-icon-container">
                  <input
                    type="password"
                    className="form-control form-control-lg form-control-solid"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    name='password'
                  />
                  <div className='input-error-display' style={{ marginLeft: "40px" }} >{formik.errors.password}</div>
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

      {showConfirmation && <SuccessModal />}
      {showConfirmationError && <ErrorModal />}
      {showConfirmationWarning && <WarningModal id={"details.id"} close={handleCloseDelete} />}
    </div>
  );
};

export default CreateAdmin;
