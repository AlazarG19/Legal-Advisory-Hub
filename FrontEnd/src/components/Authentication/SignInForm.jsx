import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

import './authentication.css'
import { Formik } from 'formik';
import * as Yup from 'yup';
const SignInForm = () => {
  const navigate = useNavigate();
  const [password, setpassword] = useState("")

  const SigninSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required("Required")
      .test('Invalid Email', "Invalid Email or Password", // <- key, message
        function (value) {
          console.log("this ")
          let body = {
            email: value,
            password: password
          }
          body = JSON.stringify(body)

          return new Promise((resolve, reject) => {
            if (password == "") {
              resolve(true);
            } else {
              console.log(body)
              fetch(`http://localhost:3000/clientlogin`, {
                method: 'POST',
                body: body,
                headers: {
                  'Content-Type': 'application/json',
                }
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log(data)
                  if (data.message == 'Invalid username or password') {
                    resolve(this.createError({ message: data.message }));

                  } else {
                    resolve(true)
                  }
                  // successModal()
                })
                .catch((error) => {
                  // errorModal()
                  console.error('Error:', error);
                });
            }
          })
        })
    , password: Yup.string()
      .required('Required'),
  })
  useEffect(() => {

    const storedJson = sessionStorage.getItem('user');
    console.log(storedJson)
    const userData = JSON.parse(storedJson);

    if (userData) {
      const userType = userData.userType;
      if (userType == 'client') {
        navigate('/users');
      } else {
        navigate('/freelancerProfile');
      }
    } else {
      navigate('/login')
    }
  }, [navigate]);
  return (
    <div className="d-flex flex-column flex-lg-row flex-column-fluid">
      <div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center" style={{ backgroundImage: "url(/assets/media/misc/auth-bg.png)" }}>
        <div className="d-flex flex-column flex-center p-6 p-lg-10 w-100">
          <a href="../../demo1/dist/index.html" className="mb-0 mb-lg-20">
            <img alt="Logo" src="assets/media/logos/default-white.svg" className="h-40px h-lg-50px" />
          </a>
          <img className="d-none d-lg-block mx-auto w-300px w-lg-75 w-xl-500px mb-10 mb-lg-20" src="assets/media/misc/auth-screens.png" alt="" />
          <h1 className="d-none d-lg-block text-white fs-2qx fw-bold text-center mb-7">Fast, Efficient and Productive</h1>
          <div className="d-none d-lg-block text-white fs-base text-center">In this kind of post,
            <a href="#" className="opacity-75-hover text-warning fw-semibold me-1">the blogger</a>introduces a person they’ve interviewed
            <br />and provides some background information about
            <a href="#" className="opacity-75-hover text-warning fw-semibold me-1">the interviewee</a>and their
            <br />work following this is a transcript of the interview.</div>
        </div>
      </div>
      <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10">
        <div className="d-flex flex-center flex-column flex-lg-row-fluid">
          <div className="w-lg-500px p-10">
            <Formik
              initialValues={{ email: '', password: '' }}
              validateOnChange={false}
              validateOnBlur={false}

              validationSchema={SigninSchema}
              onSubmit={async (values, { setSubmitting }, formik) => {
                let body = {
                  email: values.email,
                  password: values.password
                }
                console.log(body)
                body = JSON.stringify(body)
                setSubmitting(false);
                await fetch(`http://localhost:3000/clientlogin`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: body
                })
                  .then((response) => {

                    return response.json();
                  })
                  .then((data) => {
                    setSubmitting(false);
                    sessionStorage.setItem('user', JSON.stringify(data.user));
                    console.log("from session", sessionStorage.getItem('user'));
                    if (data.user.userType == 'client') {
                      console.log("this user is a client")
                      Navigate('/users')
                    } else {
                      console.log("this is a freelancer")
                      navigate('/freelancerProfile')
                    }

                    // if (data.success) {
                    //   axios.get(`http://localhost:3000/getUser/${username}`).then(result => {
                    //     sessionStorage.setItem('user', JSON.stringify(result.data));
                    //     setUser(result.data);
                    //     console.log("from session", sessionStorage.getItem('user'));
                    //     if (result.data[0].userType == 'client') {
                    //       console.log("this user is a client")
                    //       navigate('/users')
                    //     } else {
                    //       console.log("this is a freelancer")
                    //       navigate('/freelancerProfile')
                    //     }



                    //   });
                    //   window.location.href = `${import.meta.env.VITE_FRONTEND_URL}`
                    // }
                    // successModal()
                  })
                  .catch((error) => {
                    // errorModal()
                    setSubmitting(false);
                  });


              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                /* and other goodies */
              }) => (
                <form className="form w-100" id="kt_sign_in_form" onSubmit={handleSubmit}>
                  <div className="text-center mb-11">
                    <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
                    <div className="text-gray-500 fw-semibold fs-6">Your Social Campaigns</div>
                  </div>
                  <div className="row g-3 mb-9">
                    <div className="col-md-6">
                      <a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                        <img alt="Logo" src="assets/media/svg/brand-logos/google-icon.svg" className="h-15px me-3" />Sign in with Google</a>
                    </div>
                    <div className="col-md-6">
                      <a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                        <img alt="Logo" src="assets/media/svg/brand-logos/apple-black.svg" className="theme-light-show h-15px me-3" />
                        <img alt="Logo" src="assets/media/svg/brand-logos/apple-black-dark.svg" className="theme-dark-show h-15px me-3" />Sign in with Apple</a>
                    </div>
                  </div>
                  <div className="separator separator-content my-14">
                    <span className="w-125px text-gray-500 fw-semibold fs-7">Or with email</span>
                  </div>
                  <div className="fv-row mb-8 input-container">
                    <input type="text" onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email} name='email' placeholder='Email' className="form-control bg-transparent" />
                    <span className="">
                    </span>
                    <div className='input-error-display' >{errors.email && touched.email && errors.email}</div>
                  </div>
                  <div className="fv-row mb-3 input-container">
                    <input type="password"
                      name="password"
                      onChange={(event) => { setpassword(event.target.value), handleChange(event) }}
                      onBlur={handleBlur}
                      value={values.password} placeholder='password' className="form-control bg-transparent" />
                    <span className="">
                    </span>
                  </div>
                  <div className='input-error-display' >{errors.password && touched.password && errors.password}</div>

                  <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                    <div></div>
                    <a href="../../demo1/dist/authentication/layouts/corporate/reset-password.html" className="link-primary">Forgot Password ?</a>
                  </div>
                  <div className="d-grid mb-10">
                    <button onClick={(event) => { handleSubmit(event) }} type='submit' className="btn btn-primary sign-in">
                      <span className="indicator-label">Sign In</span>
                      <span className="indicator-progress">Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                    </button>
                  </div>
                  <div className="text-gray-500 text-center fw-semibold fs-6">Not a Member yet?
                    <a href="../../demo1/dist/authentication/layouts/corporate/sign-up.html" className="link-primary">Sign up</a></div>
                </form>
              )}
            </Formik>
          </div>
        </div>
        <div className="d-flex flex-center flex-wrap px-5">
          <div className="d-flex fw-semibold text-primary fs-base">
            <a href="https://keenthemes.com" className="px-5" target="_blank">Terms</a>
            <a href="https://devs.keenthemes.com" className="px-5" target="_blank">Plans</a>
            <a href="https://themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/" className="px-5" target="_blank">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInForm;
