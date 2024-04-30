import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../Navigation'
const FreelancerProfile = () => {
    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/login')
        
    };
    const navigate = useNavigate();
    return (
        <div className="container mt-5">
            <Navigation/>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    {/* Placeholder for profile picture */}
                                    <img src="https://via.placeholder.com/150" alt="Profile" className="img-fluid rounded-circle" />
                                </div>
                                <div className="col-md-8">
                                    {/* Placeholder for name */}
                                    <h2>Freelancer Name</h2>
                                    <hr />
                                    {/* Placeholder for skills */}
                                    <h4>Skills:</h4>
                                    <p>Web Development, Graphic Design, SEO</p>
                                    <hr />
                                    {/* Placeholder for description */}
                                    <h4>Description:</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac justo sit amet enim sagittis pharetra. Integer semper lacus nec nisl aliquet, a ultricies felis volutpat.</p>
                                    <hr />
                                    {/* Placeholder for contact information */}
                                    <h4>Contact Information:</h4>
                                    <ul>
                                        <li>Email: freelancer@example.com</li>
                                        <li>Phone: +1234567890</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FreelancerProfile;
