import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

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
                        navigate('/legalexperts');
                    } else {
                        navigate('/freelancerProfile');
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

    useEffect(() => {
        const storedJson = sessionStorage.getItem('user');
        if (storedJson) {
            const userData = JSON.parse(storedJson);
            if (userData && userData[0]) {
                const userType = userData[0].userType;
                if (userType === 'client') {
                    navigate('/legalexperts');
                } else {
                    navigate('/freelancerProfile');
                }
            }
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
                    <div className="d-none d-lg-block text-white fs-base text-center">
                        In this kind of post,
                        <a href="#" className="opacity-75-hover text-warning fw-semibold me-1">the blogger</a> introduces a person they’ve interviewed
                        <br /> and provides some background information about
                        <a href="#" className="opacity-75-hover text-warning fw-semibold me-1">the interviewee</a> and their
                        <br /> work following this is a transcript of the interview.
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10">
                <div className="d-flex flex-center flex-column flex-lg-row-fluid">
                    <div className="w-lg-500px p-10">
                        <form className="form w-100" id="kt_sign_in_form" onSubmit={handleSubmit}>
                            <div className="text-center mb-11">
                                <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
                            </div>
                            <div className="fv-row mb-8">
                                <input type="text" placeholder="username" name="username" className="form-control bg-transparent" onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="fv-row mb-3">
                                <input type="password" placeholder="Password" name="password" className="form-control bg-transparent" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                                <div></div>
                                <a href="" className="link-primary">Forgot Password ?</a>
                            </div>
                            <div className="d-grid mb-10">
                                <button type="submit" id="kt_sign_in_submit" className="btn btn-primary">
                                    <span className="indicator-label">Sign In</span>
                                    <span className="indicator-progress">Please wait...
                                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                    </span>
                                </button>
                            </div>
                            <div className="text-gray-500 text-center fw-semibold fs-6">Not a Member yet?
                                <a href="http://localhost:5173/signup" className="link-primary">Sign up</a>
                            </div>
                        </form>
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
