import React, { useEffect, useState } from 'react';
import '../../../public/assets/css/style.bundle.css'
import Pagination from './Pagination';
import UserCard from './UserCard';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../Navigation';
import DetailSideBar from './DetailSideBar';
import axios from "axios";
const ProjectUsersCardPane = () => {
    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/login')

    };
    const [users, setUsers] = useState([]);

    const [olduser, setOldUser] = useState([])

    const [selectedcategory, setSelectedCategory] = useState("")
    const navigate = useNavigate();

    const onCategoryClicked = (category) => {
        console.log(olduser)
        console.log("clickedcategory", category)
        setSelectedCategory(category)
        let filtereddata = olduser.filter(user => user.Details[0].category === category);
        console.log(filtereddata)
        setUsers(filtereddata)
    }

    useEffect(() => {
        axios.get('http://localhost:3000/getFreelancers')
            .then(result => {
                console.log(result.data);
                const filteredUsers = result.data.filter(user => user.userType === "freelancer");
                setUsers(filteredUsers);
                setOldUser(filteredUsers);
            });
    }, []);
    return (
        <>
            <div id="kt_project_users_card_pane" className="tab-pane fade show active">
                <Navigation />
                <div className="row mt-5 col-md-12">
                    <div className="col-2">
                        {/* <!--begin::List widget 5--> */}
                        <div className="card card-flush h-xl-100" style={{ position: "fixed", boxShadow: "3px 1px 16px #888888" }}>
                            {/* <!--begin::Header--> */}
                            <div className="card-header pt-7">
                                {/* <!--begin::Title--> */}
                                <h3 className="card-title align-items-start flex-column">
                                    <span className="card-label fw-bold text-dark">Categories</span>
                                    <span className="text-gray-400 mt-1 fw-semibold fs-6">10 Categories So far</span>
                                </h3>
                                {/* <!--end::Title--> */}
                            </div>
                            {/* <!--end::Header--> */}
                            {/* <!--begin::Body--> */}
                            <div className="card-body">
                                {/* <!--begin::Scroll--> */}
                                <div className="hover-scroll-overlay-y pe-6 me-n6" style={{ height: "74vh" }}>
                                    {/* <!--begin::Item--> */}
                                    <div onClick={() => { onCategoryClicked("criminal") }} className={selectedcategory == "criminal" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                        {/* <!--begin::Info--> */}
                                        <div className="d-flex flex-stack mb-3">
                                            {/* <!--begin::Wrapper--> */}
                                            <div className="me-3">
                                                {/* <!--begin::Icon--> */}

                                                {/* <!--end::Icon--> */}
                                                {/* <!--begin::Title--> */}
                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Criminal</a>
                                                {/* <!--end::Title--> */}
                                            </div>
                                            {/* <!--end::Wrapper--> */}
                                        </div>
                                        {/* <!--end::Info--> */}
                                    </div>
                                    {/* <!--end::Item--> */}
                                    {/* <!--begin::Item--> */}
                                    <div onClick={() => { onCategoryClicked("family") }} className={selectedcategory == "family" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                        {/* <!--begin::Info--> */}
                                        <div className="d-flex flex-stack mb-3">
                                            {/* <!--begin::Wrapper--> */}
                                            <div className="me-3">
                                                {/* <!--begin::Icon--> */}

                                                {/* <!--end::Icon--> */}
                                                {/* <!--begin::Title--> */}
                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Family</a>
                                                {/* <!--end::Title--> */}
                                            </div>
                                            {/* <!--end::Wrapper--> */}
                                        </div>
                                        {/* <!--end::Info--> */}
                                    </div>
                                    {/* <!--end::Item--> */}
                                    {/* <!--begin::Item--> */}
                                    <div onClick={() => { onCategoryClicked("employement") }} className={selectedcategory == "employement" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                        {/* <!--begin::Info--> */}
                                        <div className="d-flex flex-stack mb-3">
                                            {/* <!--begin::Wrapper--> */}
                                            <div className="me-3">
                                                {/* <!--begin::Icon--> */}

                                                {/* <!--end::Icon--> */}
                                                {/* <!--begin::Title--> */}
                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Employement</a>
                                                {/* <!--end::Title--> */}
                                            </div>
                                            {/* <!--end::Wrapper--> */}
                                        </div>
                                        {/* <!--end::Info--> */}
                                    </div>
                                    {/* <!--end::Item--> */}
                                    {/* <!--begin::Item--> */}
                                    <div onClick={() => { onCategoryClicked("contract") }} className={selectedcategory == "contract" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                        {/* <!--begin::Info--> */}
                                        <div className="d-flex flex-stack mb-3">
                                            {/* <!--begin::Wrapper--> */}
                                            <div className="me-3">
                                                {/* <!--begin::Icon--> */}

                                                {/* <!--end::Icon--> */}
                                                {/* <!--begin::Title--> */}
                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Contract</a>
                                                {/* <!--end::Title--> */}
                                            </div>
                                            {/* <!--end::Wrapper--> */}
                                        </div>
                                        {/* <!--end::Info--> */}
                                    </div>
                                    {/* <!--end::Item--> */}
                                    {/* <!--begin::Item--> */}
                                    <div onClick={() => { onCategoryClicked("intellectual") }} className={selectedcategory == "intellectual" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                        {/* <!--begin::Info--> */}
                                        <div className="d-flex flex-stack mb-3">
                                            {/* <!--begin::Wrapper--> */}
                                            <div className="me-3">
                                                {/* <!--begin::Icon--> */}

                                                {/* <!--end::Icon--> */}
                                                {/* <!--begin::Title--> */}
                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Intellectual Property</a>
                                                {/* <!--end::Title--> */}
                                            </div>
                                            {/* <!--end::Wrapper--> */}
                                        </div>
                                        {/* <!--end::Info--> */}
                                    </div>
                                    {/* <!--end::Item--> */}
                                    {/* <!--begin::Item--> */}
                                    <div onClick={() => { onCategoryClicked("constitutional") }} className={selectedcategory == "constitutional" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                        {/* <!--begin::Info--> */}
                                        <div className="d-flex flex-stack mb-3">
                                            {/* <!--begin::Wrapper--> */}
                                            <div className="me-3">
                                                {/* <!--begin::Icon--> */}

                                                {/* <!--end::Icon--> */}
                                                {/* <!--begin::Title--> */}
                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Constitutional</a>
                                                {/* <!--end::Title--> */}
                                            </div>
                                            {/* <!--end::Wrapper--> */}
                                        </div>
                                        {/* <!--end::Info--> */}
                                    </div>
                                    {/* <!--end::Item--> */}
                                    {/* <!--begin::Item--> */}
                                    <div onClick={() => { onCategoryClicked("administrative") }} className={selectedcategory == "administrative" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                        {/* <!--begin::Info--> */}
                                        <div className="d-flex flex-stack mb-3">
                                            {/* <!--begin::Wrapper--> */}
                                            <div className="me-3">
                                                {/* <!--begin::Icon--> */}

                                                {/* <!--end::Icon--> */}
                                                {/* <!--begin::Title--> */}
                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Administrative</a>
                                                {/* <!--end::Title--> */}
                                            </div>
                                            {/* <!--end::Wrapper--> */}
                                        </div>
                                        {/* <!--end::Info--> */}
                                    </div>
                                    {/* <!--end::Item--> */}
                                    {/* <!--begin::Item--> */}
                                    <div onClick={() => { onCategoryClicked("realestate") }} className={selectedcategory == "realestate" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                        {/* <!--begin::Info--> */}
                                        <div className="d-flex flex-stack mb-3">
                                            {/* <!--begin::Wrapper--> */}
                                            <div className="me-3">
                                                {/* <!--begin::Icon--> */}

                                                {/* <!--end::Icon--> */}
                                                {/* <!--begin::Title--> */}
                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Real Estate</a>
                                                {/* <!--end::Title--> */}
                                            </div>
                                            {/* <!--end::Wrapper--> */}
                                        </div>
                                        {/* <!--end::Info--> */}
                                    </div>
                                    {/* <!--end::Item--> */}
                                    {/* <!--begin::Item--> */}
                                    <div onClick={() => { onCategoryClicked("tort") }} className={selectedcategory == "tort" ? "border border-dashed border-primary rounded px-7 py-3 mb-6" : "border border-dashed border-gray-300 rounded px-7 py-3 mb-6"}>
                                        {/* <!--begin::Info--> */}
                                        <div className="d-flex flex-stack mb-3">
                                            {/* <!--begin::Wrapper--> */}
                                            <div className="me-3">
                                                {/* <!--begin::Icon--> */}

                                                {/* <!--end::Icon--> */}
                                                {/* <!--begin::Title--> */}
                                                <a href="#" className="text-gray-800 text-hover-primary fw-bold">Tort</a>
                                                {/* <!--end::Title--> */}
                                            </div>
                                            {/* <!--end::Wrapper--> */}
                                        </div>
                                        {/* <!--end::Info--> */}
                                    </div>
                                    {/* <!--end::Item--> */}

                                </div>
                                {/* <!--end::Scroll--> */}
                            </div>
                            {/* <!--end::Body--> */}
                        </div>
                        {/* <!--end::List widget 5--> */}
                    </div>
                    <div className='col-10 row mt-5'>

                        <UserCard users={users} />
                    </div>
                </div>
                {/* <Pagination /> */}
            </div>
        </>
    );
};

export default ProjectUsersCardPane;
