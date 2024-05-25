
import { Link } from 'react-router-dom';
const UserCard = ({ users }) => {
    console.log(users)

    return (
        users.length == 0 ? <div>

        </div>
            :
            users.map((user) => {
                return (
                    <div key={user._id} className="col-md-6 col-xxl-4">
                        <div className="card">
                            <div className="card-body d-flex flex-center flex-column pt-12 p-9">
                                <div className="symbol symbol-65px symbol-circle mb-5">
                                    <img src={"http://localhost:3000/uploads/profile/" + user.Details[0].profilePicture} alt="image" />
                                    <div className="bg-success position-absolute border border-4 border-body h-15px w-15px rounded-circle translate-middle start-100 top-100 ms-n3 mt-n3"></div>
                                </div>
                                <a href="#" className="fs-4 text-gray-800 text-hover-primary fw-bold mb-0">{user.firstName + " " + user.lastName}</a>
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
                                <Link to={`/userdetail/${user._id}`} className="btn btn-primary btn-sm mr-1">View Profile</Link>
                            </div>
                        </div>
                    </div>
                );
            })
    );
}

export default UserCard;
