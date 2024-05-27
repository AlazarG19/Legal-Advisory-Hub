import { useEffect, useState } from "react";
import axios from "axios";
import { Link} from 'react-router-dom';
const UserCard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/getFreelancers')
            .then(result => {
                console.log(result.data);
                const filteredUsers = result.data.filter(user => user.userType === "freelancer");
                setUsers(filteredUsers);
            });
    }, []);

    return (
        users.map((user) => {
            return (
                <div key={user._id} className="col-md-6 col-xxl-4">
                    <div className="card">
                        <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                            <div className="symbol symbol-65px symbol-circle mb-5">
                                <img src="assets/media//avatars/300-2.jpg" alt="image" />
                                <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n3 mt-n3"></div>
                            </div>
                            <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">{user.name}</a>
                            <div className="fw-semibold text-gray-400 mb-6">{user.catagory}</div>
                            <div className="d-flex flex-center flex-wrap">
                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                    <div className="fs-6 fw-bold text-gray-700">$14,560</div>
                                    <div className="fw-semibold text-gray-400">Earnings</div>
                                </div>
                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                    <div className="fs-6 fw-bold text-gray-700">23</div>
                                    <div className="fw-semibold text-gray-400">Clients</div>
                                </div>
                                <div className="border border-gray-300 border-dashed rounded min-w-80px py-3 px-4 mx-2 mb-3">
                                    <div className="fs-6 fw-bold text-gray-700">$236,400</div>
                                    <div className="fw-semibold text-gray-400">Average Price</div>
                                </div>
                            </div>
                            <Link to ={`/userdetail/${user._id}`} className="btn btn-primary btn-sm mr-1">View Profile</Link>
                        </div>
                    </div>
                </div>
            );
        })
    );
}

export default UserCard;
