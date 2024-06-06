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
                        navigate('/forum');
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
            <div className="d-flex flex-lg-row-fluid bgi-size-cover bgi-position-center" style={{ backgroundImage: "url(/assets/media/misc/auth-bg.png)" }}>
                <img style={{ width: "100%" }} className="" src="assets/img/front.png" alt="" />

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
                            {/* <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                                <div></div>
                                <a href="" className="link-primary">Forgot Password ?</a>
                            </div> */}
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
            </div>
        </div>
    );
}

export default SignInForm;
