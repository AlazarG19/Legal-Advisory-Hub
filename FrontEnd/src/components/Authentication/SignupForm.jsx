import { useEffect } from 'react';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import './authentication.css'
const SignupForm = () => {
  const validate = async (values) => {
    const errors = {};

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 2) {
      errors.password = 'Too Short';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Required';
    } else if (values.confirmPassword != values.password) {
      errors.confirmPassword = 'Passwords must match';
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length < 2) {
      errors.lastName = 'Too Short!';
    }

    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length < 2) {
      errors.firstName = 'Too Short!';
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
    if (!errors.username) {

      await fetch(`http://localhost:3000/checkusername/${values.username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => response.json())
        .then((data) => {
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
    console.log("error", errors)
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      username: "",
      userType: "client",
    },
    validate,
    validateOnChange: false,
    onSubmit: async (values) => {
      // console.log("submitted successfully")
      let body = {
        email: values.email,
        password: values.password,
        firstName: values.firstName,
        lastName: values.lastName,
        userType: values.userType,
        username: values.username
      }
      body = JSON.stringify(body)
      console.log(body)
      await fetch(`http://localhost:3000/createUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("data")
          console.log(data)
          if (data.message == "User created successfully") {
            // sessionStorage.setItem("user", JSON.stringify(data.info));
            if (values.userType == "freelancer") {
              window.location.href = `http://localhost:5173/freelancersignup/${data.user._id}`
            } else {
              window.location.href = `http://localhost:5173/usersignup/${data.user._id}`
            }
          } else {
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  })
  return (

    <div className="d-flex flex-column flex-lg-row flex-column-fluid">
      {/* begin::Aside */}
      <div className="d-flex flex-lg-row-fluid bgi-size-cover bgi-position-center" style={{ backgroundImage: "url(/assets/media/misc/auth-bg.png)" }}>
        <img style={{ width: "100%" }} className="" src="assets/img/front.png" alt="" />

      </div>
      {/* begin::Aside */}
      {/* begin::Body */}
      <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10">
        {/* begin::Form */}
        <div className="d-flex flex-center flex-column flex-lg-row-fluid">
          {/* begin::Wrapper */}
          <div className="w-lg-500px p-10">
            {/* begin::Form */}
            <form onSubmit={formik.handleSubmit} className="form w-100" noValidate="novalidate" id="kt_sign_up_form" data-kt-redirect-url="../../demo1/dist/authentication/layouts/corporate/sign-in.html" action="#">
              {/* begin::Heading */}
              <div className="text-center mb-11">
                {/* begin::Title */}
                <h1 className="text-dark fw-bolder mb-3">Sign Up</h1>
                {/* end::Title */}
              </div>
              {/* begin::Heading */}
              {/* begin::Input group= */}
              <div className="fv-row mb-8">
                <input type="text" onChange={formik.handleChange}

                  value={formik.values.firstName} name='firstName' placeholder='First Name' className="form-control bg-transparent" />
                <div className='input-error-display' style={{ marginLeft: "40px" }} >{formik.errors.firstName}</div>

              </div>
              {/* begin::Input group */}
              {/* begin::Input group= */}
              <div className="fv-row mb-8">
                <input ype="text" onChange={formik.handleChange}

                  value={formik.values.lastName} name='lastName' placeholder='Last Name' className="form-control bg-transparent" />
                <div className='input-error-display' style={{ marginLeft: "40px" }} >{formik.errors.lastName}</div>
              </div>
              {/* begin::Input group */}

              {/* begin::Input group= */}
              <div className="fv-row mb-8">
                <input type="email" onChange={formik.handleChange}

                  value={formik.values.email} name='email' placeholder='Email' className="form-control bg-transparent" />
                <div className='input-error-display' style={{ marginLeft: "40px" }} >{formik.errors.email}</div>
              </div>
              {/* begin::Input group */}
              {/* begin::Input group= */}
              <div className="fv-row mb-8">
                <input type="email" onChange={formik.handleChange}

                  value={formik.values.username} name='username' placeholder='User Name' className="form-control bg-transparent" />
                <div className='input-error-display' style={{ marginLeft: "40px" }} >{formik.errors.username}</div>
              </div>
              {/* begin::Input group */}

              {/* begin::Input group= */}
              <div className="fv-row mb-8">
                <input onChange={formik.handleChange}

                  value={formik.values.password} type="password" name='password' placeholder='Password' className="form-control bg-transparent" />
                <div style={{ marginLeft: "40px" }} className='input-error-display' >{formik.errors.password}</div>
              </div>
              {/* begin::Input group */}
              {/* begin::Input group= */}
              <div className="fv-row mb-8">
                <input type="password" onChange={formik.handleChange}

                  value={formik.values.confirmPassword} name='confirmPassword' placeholder='Confirm Password' className="form-control bg-transparent" />
                <div style={{ marginLeft: "40px" }} className='input-error-display' >{formik.errors.confirmPassword}</div>
              </div>
              {/* begin::Input group */}
              {/* begin::Input group= */}
              <div className="fv-row mb-8">
                <select onChange={formik.handleChange} value={formik.values.userType} name='userType' placeholder='User Type' defaultValue="client" className="form-control bg-transparent" >
                  <option value="client" selected>Client</option>
                  <option value="freelancer">Freelancer</option>
                </select>

                <div style={{ marginLeft: "40px" }} className='input-error-display' >{formik.errors.userType}</div>
              </div>
              {/* begin::Input group */}
              {/* begin::Submit button */}
              <div className="d-grid mb-10">
                <button type="submit" id="kt_sign_up_submit" onClick={formik.handleSubmit} className="btn btn-primary">
                  {/* begin::Indicator label */}
                  <span className="indicator-label">Sign up</span>
                  {/* end::Indicator label */}
                  {/* begin::Indicator progress */}
                  <span className="indicator-progress">Please wait...
                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                  {/* end::Indicator progress */}
                </button>
              </div>
              {/* end::Submit button */}
              {/* begin::Sign up */}
              <div className="text-gray-500 text-center fw-semibold fs-6">Already have an Account?
                <a href="http://localhost:5173/login" className="link-primary fw-semibold">Sign in</a></div>
              {/* end::Sign up */}
            </form>
            {/* end::Form */}
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Form */}
      </div>
      {/* end::Body */}
    </div>

  )
}

export default SignupForm;
