import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

const SignInForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const validate = async (values) => {
        const errors = {};

        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length < 2) {
            errors.password = 'Too Short';
        }

        if (!values.username) {
            errors.username = 'Required';
        }
        if (!errors.username && !errors.password) {
            console.log()
            let username = values.username
            let password = values.password
            try {
                const response = await axios.post('http://localhost:3000/clientlogin', {
                    username,
                    password
                });

                if (response.status === 200) {
                    console.log('Login successful');
                    const result = await axios.get(`http://localhost:3000/getUser/${username}`);
                    const userData = result.data;
                    if (userData[0].disabled) {
                        errors.username = "Your Account has been disabled.Contact Admins"
                    }
                    if (!userData[0].verified) {
                        errors.username = "Verify your account first"
                    }

                }
            } catch (error) {
                console.log(error)
                if (error.response && error.response.status === 401) {
                    errors.username = "Invalid username or password"
                } else {
                    errors.username = "Internal Server Error"
                }
            }

        } else {
            console.log("error")
        }
        console.log("error", errors)
        return errors;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/clientlogin', {
                username,
                password,
            });

            if (response.status === 200) {
                console.log('Login successful');

                const result = await axios.get(`http://localhost:3000/getUser/${username}`);
                const userData = result.data;

                if (userData && userData[0]) {
                    sessionStorage.setItem('user', JSON.stringify(userData));
                    if (userData[0].userType === 'client') {
                        navigate('/forum');
                    } else {
                        navigate('/profile');
                    }
                } else {
                    setErrorMessage('User data is not available');
                }
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setErrorMessage('Invalid username or password');
            } else {
                setErrorMessage('Internal server error');
            }
        }
    };
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",

        },
        validate,
        validateOnChange: false,
        onSubmit: async (values) => {
            console.log("submitted successfully")
            const result = await axios.get(`http://localhost:3000/getUser/${values.username}`);
            const userData = result.data;
            console.log(`http://localhost:3000/getUser/${values.username}`)
            console.log(userData)
            if (userData && userData[0]) {
                sessionStorage.setItem('user', JSON.stringify(userData));
                if (userData[0].userType === 'client') {
                    navigate('/forum');
                } else {
                    navigate('/profile');
                }
            } else {
                setErrorMessage('User data is not available');
            }
        }
    })
    useEffect(() => {
        const storedJson = sessionStorage.getItem('user');
        if (storedJson) {
            const userData = JSON.parse(storedJson);
            if (userData && userData[0]) {
                const userType = userData[0].userType;
                if (userType === 'client') {
                    navigate('/legalexperts');
                } else {
                    navigate('/profile');
                }
            }
        }
    }, [navigate]);

    return (
        <div className="d-flex flex-column flex-lg-row flex-column-fluid">
            <div className=" d-none d-lg-block d-flex flex-lg-row-fluid bgi-size-cover bgi-position-center" style={{ backgroundImage: "url(/assets/media/misc/auth-bg.png)" }}>
                <img style={{ width: "100%" }} className="" src="assets/img/front.png" alt="" />

            </div>
            <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10">
                <div className="d-flex flex-center flex-column flex-lg-row-fluid">
                    <div className="w-lg-500px p-10">
                        <form className="form w-100" id="kt_sign_in_form" onSubmit={formik.handleSubmit}>
                            <div className="text-center mb-11">
                                <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
                            </div>
                            <div className="fv-row mb-8">
                                <input type="text"
                                    placeholder="username"
                                    name="username"
                                    className="form-control bg-transparent"
                                    onChange={formik.handleChange}
                                    value={formik.values.username}
                                />
                                <div className='input-error-display' style={{ marginLeft: "40px" }} >{formik.errors.username}</div>

                            </div>
                            <div className="fv-row mb-3">
                                <input type="password"
                                    placeholder="Password"
                                    name="password"
                                    className="form-control bg-transparent"
                                    onChange={formik.handleChange}
                                    value={formik.values.password} />
                                <div className='input-error-display' style={{ marginLeft: "40px" }} >{formik.errors.password}</div>

                            </div>
                            {/* <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                                <div></div>
                                <a href="" className="link-primary">Forgot Password ?</a>
                            </div> */}

                            <div className="d-grid mb-10">

                                {formik.isSubmitting ? <div className="text-center">
                                    <button disabled className="btn btn-primary" >
                                        <span className="indicator-label">Please wait...
                                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                    </button>
                                </div> : <button type="submit" id="kt_sign_in_submit" onClick={formik.handleSubmit} className="btn btn-primary">
                                    <span className="indicator-label">Sign In</span>
                                    <span className="indicator-progress">Please wait...
                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                    </span>
                                </button>}
                            </div>

                            <div className="text-gray-500 text-center fw-semibold fs-6">Not a Member yet?
                                <a href="http://localhost:5173/signup" className="link-primary">Sign up</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignInForm;
