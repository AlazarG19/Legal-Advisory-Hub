import React from 'react';
import '../../public/assets/css/style.bundle.css'
import Pagination from './Pagination';
import UserCard from './UserCard';
import { Link, useNavigate } from 'react-router-dom';

const ProjectUsersCardPane = () => {
    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/login')
        
    };
    const navigate = useNavigate();

    return (
        <div id="kt_project_users_card_pane" className="tab-pane fade show active">
            <Link to="/create" className='btn btn-success'>Register +</Link>
            <button className='btn btn-success' onClick={handleLogout}>Logout</button>
            <div className="row g-6 g-xl-9">
                <UserCard />
            </div>
            <Pagination />
        </div>
    );
};

export default ProjectUsersCardPane;
