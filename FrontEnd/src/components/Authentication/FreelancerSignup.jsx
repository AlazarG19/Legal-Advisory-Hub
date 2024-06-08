import { useEffect, useState } from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import './authentication.css'
import axios from "axios";
import { useParams } from 'react-router-dom';
const FreelancerSignup = () => {
    const validate = async (values) => {
        const errors = {};
        console.log(values)
        if (!values.category) {
            errors.category = 'Required';
        }
        if (!values.firm) {
            errors.firm = 'Required';
        }
        if (!values.contact) {
            errors.contact = 'Required';
        }
        if (!values.city) {
            errors.city = 'Required';
        }
        if (!values.language) {
            errors.language = 'Required';
        }
        if (!values.bio) {
            errors.bio = 'Required';
        }
        console.log("error", errors)
        return errors;
    };
    const [selectedImage, setSelectedImage] = useState("/assets/img/placeholder.png");
    const [profilePicture, setProfilePicture] = useState(null);
    const url = useParams()
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
            category: "",
            firm: "",
            contact: "",
            city: "",
            language: "",
            bio: "",
        },
        validate,
        validateOnChange: false,
        onSubmit: async (values) => {
            // console.log("submitted successfully")
            const formData = new FormData();
            formData.append("userid", url.id);
            formData.append("category", values.category);
            formData.append("firm", values.firm);
            formData.append("contact", values.contact);
            formData.append("city", values.city);
            formData.append("language", values.language);
            formData.append("bio", values.bio);
            formData.append("profilePicture", profilePicture);
            console.log(formData)
            // let body = {
            //     userid: "",
            //     category: values.category,
            //     firm: values.firm,
            //     contact: values.contact,
            //     city: values.city,
            //     language: values.language,
            //     bio: values.bio,
            //     profilePicture: profilePicture
            // }
            // body = JSON.stringify(body)
            // console.log(body)

            try {
                await axios.post("http://localhost:3000/createFreelancerProfile", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }).then(

                );
                window.location.href = `http://localhost:5173/checkemail/0`

            } catch (error) {
                console.error("Error creating product:", error);
            }
            // setSubmitting(false);
            // await fetch(`http://localhost:3000/createFreelancerProfile`, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: body
            // })
            //     .then((response) => response.json())
            //     .then((data) => {
            //         console.log("data")
            //         console.log(data)
            //         // if (data.success) {
            //         //     // sessionStorage.setItem("user", JSON.stringify(data.info));
            //         //     if (values.userType == "freelancer") {
            //         //         window.location.href = ``
            //         //     } else {
            //         //         window.location.href = `http://localhost:5173/checkemail/0`
            //         //     }
            //         // } else {
            //         // }
            //     })
            //     .catch((error) => {
            //         console.error('Error:', error);
            //     });
        }
    })
    return (
        <div>
            {/* <!--begin::Content--> */}
            <div id="kt_app_content" class="app-content flex-column-fluid">
                {/* <!--begin::Content container--> */}
                <div id="kt_app_content_container" class="app-container container-xxl">
                    {/* <!--begin::Navbar--> */}
                    <div class="card card-flush mb-9" id="kt_user_profile_panel">
                        {/* <!--begin::Hero nav--> */}
                        <div class="card-header rounded-top bgi-size-cover" ></div>
                        {/* <!--end::Hero nav--> */}
                        {/* <!--begin::Body--> */}
                        <div class="card-body">
                            {/* <!--begin::Details--> */}
                            <div class="m-0">
                                {/* <!--begin::Info--> */}
                                <div class="d-flex flex-stack flex-wrap align-items-end">
                                    {/* <!--begin::User--> */}
                                    <div class="d-flex flex-column">
                                        {/* <!--begin::Name--> */}
                                        <div class="d-flex align-items-center mb-2">
                                            <a href="#" class="text-gray-800 text-hover-primary fs-2 fw-bolder me-1">Setup Your Freelancer Profile</a>

                                        </div>
                                        {/* <!--end::Name--> */}
                                    </div>
                                    {/* <!--end::User--> */}
                                </div>
                                {/* <!--end::Info--> */}
                            </div>
                            {/* <!--end::Details--> */}
                        </div>
                    </div>
                    {/* <!--end::Navbar--> */}
                    {/* <!--begin::Basic info--> */}
                    <div class="card mb-5 mb-xl-10">
                        {/* <!--begin::Card header--> */}
                        <div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_profile_details" aria-expanded="true" aria-controls="kt_account_profile_details">
                            {/* <!--begin::Card title--> */}
                            <div class="card-title m-0">
                                <h3 class="fw-bold m-0">Profile Details</h3>
                            </div>
                            {/* <!--end::Card title--> */}
                        </div>
                        {/* <!--begin::Card header--> */}
                        {/* <!--begin::Content--> */}
                        <div id="kt_account_settings_profile_details" class="collapse show">
                            {/* <!--begin::Form--> */}
                            <form onSubmit={formik.handleSubmit} id="kt_account_profile_details_form" class="form">
                                {/* <!--begin::Card body--> */}
                                <div class="card-body border-top p-9">
                                    {/* <!--begin::Input group--> */}
                                    <div class="row mb-6">
                                        {/* <!--begin::Label--> */}
                                        <label class="col-lg-4 col-form-label fw-semibold fs-6">Profile Picture</label>
                                        {/* <!--end::Label--> */}
                                        {/* <!--begin::Col--> */}
                                        <div class="col-lg-8">
                                            {/* <!--begin::Image input--> */}
                                            <div class="image-input image-input-outline" data-kt-image-input="true" >
                                                {/* <!--begin::Preview existing avatar--> */}
                                                {/* <div class="image-input-wrapper w-125px h-125px" style={{ background: selectedImage }} ></div> */}
                                                <img class="image-input-wrapper w-125px h-125px" src={selectedImage} alt="" />
                                                {/* <!--end::Preview existing avatar--> */}
                                                {/* <!--begin::Label--> */}
                                                <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="Change avatar">
                                                    <i class="bi bi-pencil-fill fs-7"></i>
                                                    {/* <!--begin::Inputs--> */}
                                                    <input type="file"
                                                        id="input-file"
                                                        name="input-file"
                                                        accept="image/*"
                                                        hidden=""
                                                        onChange={handleFileChange} />

                                                    {/* <!--end::Inputs--> */}
                                                </label>
                                                {/* <!--end::Label--> */}
                                                {/* <!--begin::Cancel--> */}
                                                <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="Cancel avatar">
                                                    <i class="bi bi-x fs-2"></i>
                                                </span>
                                                {/* <!--end::Cancel--> */}
                                                {/* <!--begin::Remove--> */}
                                                <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="Remove avatar">
                                                    <i class="bi bi-x fs-2"></i>
                                                </span>
                                                {/* <!--end::Remove--> */}
                                            </div>
                                            {/* <!--end::Image input--> */}
                                            {/* <!--begin::Hint--> */}
                                            <div class="form-text">Allowed file types: png, jpg, jpeg.</div>
                                            {/* <!--end::Hint--> */}
                                        </div>
                                        {/* <!--end::Col--> */}
                                    </div>
                                    {/* <!--end::Input group--> */}
                                    {/* <!--begin::Input group--> */}
                                    <div class="row mb-6">
                                        {/* <!--begin::Label--> */}
                                        <label class="col-lg-4 col-form-label required fw-semibold fs-6">Category</label>
                                        {/* <!--end::Label--> */}
                                        {/* <!--begin::Col--> */}
                                        <div class="col-lg-8 fv-row">
                                            <select type="text" onChange={formik.handleChange}

                                                value={formik.values.category} name='category' class="form-control form-control-lg form-control-solid" >
                                                <option value="">Select One Option</option>
                                                <option value="criminal">Criminal</option>
                                                <option value="civil">Civil</option>
                                                <option value="family">Family</option>
                                                <option value="employment">Employment</option>
                                                <option value="contract">Contract</option>
                                                <option value="intellectualproperty">Intellectual Property</option>
                                                <option value="constitutional">Constitutional</option>
                                                <option value="administrative">Administrative</option>
                                                <option value="realestate">Real Estate</option>
                                                <option value="tort">Tort</option>
                                            </select>
                                            <div className='input-error-display' style={{ marginLeft: "40px" }} >{formik.errors.category}</div>

                                        </div>
                                        {/* <!--end::Col--> */}
                                    </div>
                                    {/* <!--end::Input group--> */}
                                    {/* <!--begin::Input group--> */}
                                    <div class="row mb-6">
                                        {/* <!--begin::Label--> */}
                                        <label class="col-lg-4 col-form-label required fw-semibold fs-6">Firm</label>
                                        {/* <!--end::Label--> */}
                                        {/* <!--begin::Col--> */}
                                        <div class="col-lg-8 fv-row">
                                            <input
                                                type="text"
                                                class="form-control form-control-lg form-control-solid"
                                                onChange={formik.handleChange}
                                                value={formik.values.firm}
                                                name='firm' placeholder='Firm' />
                                            <div className='input-error-display' style={{ marginLeft: "40px" }} >{formik.errors.firm}</div>

                                        </div>
                                        {/* <!--end::Col--> */}
                                    </div>
                                    {/* <!--end::Input group--> */}
                                    {/* <!--begin::Input group--> */}
                                    <div class="row mb-6">
                                        {/* <!--begin::Label--> */}
                                        <label class="col-lg-4 col-form-label required fw-semibold fs-6">Contact Number</label>
                                        {/* <!--end::Label--> */}
                                        {/* <!--begin::Col--> */}
                                        <div class="col-lg-8 fv-row">
                                            <input type="text" class="form-control form-control-lg form-control-solid" onChange={formik.handleChange}

                                                value={formik.values.contact} name='contact' placeholder='Contact Number' />
                                            <div className='input-error-display' style={{ marginLeft: "40px" }} >{formik.errors.contact}</div>

                                        </div>
                                        {/* <!--end::Col--> */}
                                    </div>
                                    {/* <!--end::Input group--> */}
                                    {/* <!--begin::Input group--> */}
                                    <div class="row mb-6">
                                        {/* <!--begin::Label--> */}
                                        <label class="col-lg-4 col-form-label required fw-semibold fs-6">City</label>
                                        {/* <!--end::Label--> */}
                                        {/* <!--begin::Col--> */}
                                        <div class="col-lg-8 fv-row">
                                            <input type="text" class="form-control form-control-lg form-control-solid" onChange={formik.handleChange}

                                                value={formik.values.city} name='city' placeholder='City' />
                                            <div className='input-error-display' style={{ marginLeft: "40px" }} >{formik.errors.city}</div>

                                        </div>
                                        {/* <!--end::Col--> */}
                                    </div>
                                    {/* <!--end::Input group--> */}
                                    {/* <!--begin::Input group--> */}
                                    <div class="row mb-6">
                                        {/* <!--begin::Label--> */}
                                        <label class="col-lg-4 col-form-label required fw-semibold fs-6">Language</label>
                                        {/* <!--end::Label--> */}
                                        {/* <!--begin::Col--> */}
                                        <div class="col-lg-8 fv-row">
                                            <input type="text" class="form-control form-control-lg form-control-solid" onChange={formik.handleChange}

                                                value={formik.values.language} name='language' placeholder='Language' />
                                            <div className='input-error-display' style={{ marginLeft: "40px" }} >{formik.errors.language}</div>

                                        </div>
                                        {/* <!--end::Col--> */}
                                    </div>
                                    {/* <!--end::Input group--> */}
                                    {/* <!--begin::Input group--> */}
                                    <div class="row mb-6">
                                        {/* <!--begin::Label--> */}
                                        <label class="col-lg-4 col-form-label required fw-semibold fs-6">Bio</label>
                                        {/* <!--end::Label--> */}
                                        {/* <!--begin::Col--> */}
                                        <div class="col-lg-8 fv-row">
                                            <textarea type="text" class="form-control form-control-lg form-control-solid" onChange={formik.handleChange}

                                                value={formik.values.bio} name='bio' placeholder='Bio' />
                                            <div className='input-error-display' style={{ marginLeft: "40px" }} >{formik.errors.bio}</div>

                                        </div>
                                        {/* <!--end::Col--> */}
                                    </div>
                                    {/* <!--end::Input group--> */}


                                </div>
                                {/* <!--end::Card body--> */}
                                {/* <!--begin::Actions--> */}
                                <div class="card-footer d-flex justify-content-end py-6 px-9">
                                    <button type="submit" class="btn btn-primary" onClick={formik.handleSubmit} id="kt_account_profile_details_submit">Save Changes</button>
                                </div>
                                {/* <!--end::Actions--> */}
                            </form>
                            {/* <!--end::Form--> */}
                        </div>
                        {/* <!--end::Content--> */}
                    </div>
                    {/* <!--end::Basic info--> */}

                </div>
                {/* <!--end::Content container--> */}
            </div>
            {/* <!--end::Content--> */}
        </div>
    )
}

export default FreelancerSignup