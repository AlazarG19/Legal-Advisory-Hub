import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import DetailSideBar from "./DetailSideBar";
import Navbar from "../Navbar";
import Navigation from "../Navigation";

const UserDetails = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [category, setCategory] = useState("");
  const [firm, setFirm] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [language, setLanguage] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [detail, setDetail] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/getFreelancer/${id}`)
      .then((response) => {
        console.log(response.data);
        console.log(response.data[0]);
        setName(response.data[0].firstName + " " + response.data[0].lastName);
        setUserName(response.data[0].username);
        setProfilePicture(response.data[0].profilePicture);
        setCategory(response.data[0].Details[0].category);
        setFirm(response.data[0].Details[0].firm);
        setContact(response.data[0].Details[0].contact);
        setCity(response.data[0].Details[0].city);
        setLanguage(response.data[0].Details[0].language);
        setBio(response.data[0].Details[0].bio);
        setEmail(response.data[0].email);
        setUser(response.data[0].city);
      })
      .catch((error) => console.error(error));
  }, [id]);
  return (
    <>
      <Navigation />
      <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        <div
          className="app-page flex-column flex-column-fluid"
          id="kt_app_page"
        >
          <div
            className="app-wrapper flex-column flex-row-fluid"
            id="kt_app_wrapper"
          >
            <div
              className="app-main flex-column flex-row-fluid"
              id="kt_app_main"
            >
              <div className="d-flex flex-column flex-column-fluid">
                <div
                  id="kt_app_content"
                  className="app-content flex-column-fluid"
                >
                  <div
                    id="kt_app_content_container"
                    className="app-container container-xxl"
                  >
                    <div className="row g-8">
                      <div className="col-md-4 d-flex justify-content-center mt-10" style={{ height: "fitContent", boxShadow: "1px 1px 5px rgb(136 136 136 / 25%) ", borderRadius: "16px", marginRight: "20px" }}>
                        <div
                          className="card card-flush h-lg-100"
                          id="kt_contacts_main"
                          style={{ width: "100%", maxWidth: "400px", alignItems: "center" }}
                        >
                          <div className="card-header pt-7">
                            <div className="card-title text-center ustify-content-center">
                              <center><h2>User Profile</h2></center>
                            </div>
                          </div>
                          <div className="card-body pt-5 text-center">
                            <div className="d-flex justify-content-center mb-4">
                              <div className="symbol symbol-circle symbol-100px overflow-hidden">
                                <img
                                  src={
                                    "http://localhost:3000/uploads/profile/" +
                                    profilePicture
                                  }
                                  alt="profile"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                            <div className="d-flex flex-column gap-2 align-items-center">
                              <h3 className="mb-0">{name}</h3>
                              <div className="d-flex align-items-center gap-2">
                                <span className="svg-icon svg-icon-2">
                                  <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      opacity="0.3"
                                      d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z"
                                      fill="currentColor"
                                    />
                                    <path
                                      d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                <a
                                  href="#"
                                  className="text-muted text-hover-primary"
                                >
                                  {email}
                                </a>
                              </div>
                            </div >
                            <Link
                              to={`/chat/${id}`}
                              className="btn btn-sm btn-light btn-primary mt-4"
                            >
                              <span className="svg-icon svg-icon-2">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    opacity="0.3"
                                    d="M8 8C8 7.4 8.4 7 9 7H16V3C16 2.4 15.6 2 15 2H3C2.4 2 2 2.4 2 3V13C2 13.6 2.4 14 3 14H5V16.1C5 16.8 5.79999 17.1 6.29999 16.6L8 14.9V8Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M22 8V18C22 18.6 21.6 19 21 19H19V21.1C19 21.8 18.2 22.1 17.7 21.6L15 18.9H9C8.4 18.9 8 18.5 8 17.9V7.90002C8 7.30002 8.4 6.90002 9 6.90002H21C21.6 7.00002 22 7.4 22 8ZM19 11C19 10.4 18.6 10 18 10H12C11.4 10 11 10.4 11 11C11 11.6 11.4 12 12 12H18C18.6 12 19 11.6 19 11ZM17 15C17 14.4 16.6 14 16 14H12C11.4 14 11 14.4 11 15C11 15.6 11.4 16 12 16H16C16.6 16 17 15.6 17 15Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              Message
                            </Link>
                          </div >
                        </div >
                      </div >
                      <div className="col-md-7 mt-10" style={{ boxShadow: "1px 1px 20px rgb(136 136 136 / 25%)" }}>
                        <div
                          className="card card-flush h-lg-100 "
                          id="kt_contacts_main"
                        >

                          <div className="card-body pt-5">

                            <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x fs-6 fw-semibold mt-6 mb-8">
                              <li className="nav-item">
                                <a
                                  className="nav-link text-active-primary pb-4 active"
                                  data-bs-toggle="tab"
                                  href="#kt_contact_view_general"
                                >
                                  <span className="svg-icon svg-icon-4 me-1">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M11 2.375L2 9.575V20.575C2 21.175 2.4 21.575 3 21.575H9C9.6 21.575 10 21.175 10 20.575V14.575C10 13.975 10.4 13.575 11 13.575H13C13.6 13.575 14 13.975 14 14.575V20.575C14 21.175 14.4 21.575 15 21.575H21C21.6 21.575 22 21.175 22 20.575V9.575L13 2.375C12.4 1.875 11.6 1.875 11 2.375Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  Basic Informations
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link text-active-primary pb-4"
                                  data-bs-toggle="tab"
                                  href="#kt_contact_view_meetings"
                                >
                                  <span className="svg-icon svg-icon-4 me-1">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        opacity="0.3"
                                        d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  Portifolio/Work Sample
                                </a>
                              </li>
                            </ul>
                            <div className="tab-content" id="">
                              <div
                                className="tab-pane fade show active"
                                id="kt_contact_view_general"
                                role="tabpanel"
                              >
                                <div className="d-flex flex-column gap-5 mt-7">
                                  <div className="d-flex flex-column gap-1" >
                                    <div className="fw-bold text-muted">
                                      Category
                                    </div>
                                    <div className="fw-bold fs-5">
                                      {category}
                                    </div>
                                  </div>
                                  <div className="d-flex flex-column gap-1" >
                                    <div className="fw-bold text-muted">
                                      User Name
                                    </div>
                                    <div className="fw-bold fs-5">
                                      {username}
                                    </div>
                                  </div>
                                  <div className="d-flex flex-column gap-1" >
                                    <div className="fw-bold text-muted">
                                      City
                                    </div>
                                    <div className="fw-bold fs-5">{city}</div>
                                  </div>
                                  <div className="d-flex flex-column gap-1" >
                                    <div className="fw-bold text-muted">
                                      Language
                                    </div>
                                    <div className="fw-bold fs-5">
                                      {language}
                                    </div>
                                  </div>
                                  <div className="d-flex flex-column gap-1" >
                                    <div className="fw-bold text-muted">
                                      Bio
                                    </div>
                                    <p>
                                      <p>{bio}.</p>
                                    </p>
                                  </div>
                                </div>
                              </div >
                              <div
                                className="tab-pane fade"
                                id="kt_contact_view_meetings"
                                role="tabpanel"
                              >
                                <ul className="nav nav-pills d-flex flex-stack flex-nowrap hover-scroll-x">
                                  <li className="nav-item me-1">
                                    <a
                                      className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 text-dark text-active-white btn-active-primary"
                                      data-bs-toggle="tab"
                                      href="#kt_schedule_day_0"
                                    >
                                      <span className="opacity-50 fs-7 fw-semibold">
                                        Su
                                      </span>
                                      <span className="fs-6 fw-bold">22</span>
                                    </a>
                                  </li>
                                  <li className="nav-item me-1">
                                    <a
                                      className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 text-dark text-active-white btn-active-primary active"
                                      data-bs-toggle="tab"
                                      href="#kt_schedule_day_1"
                                    >
                                      <span className="opacity-50 fs-7 fw-semibold">
                                        Mo
                                      </span>
                                      <span className="fs-6 fw-bold">23</span>
                                    </a>
                                  </li>
                                  <li className="nav-item me-1">
                                    <a
                                      className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 text-dark text-active-white btn-active-primary"
                                      data-bs-toggle="tab"
                                      href="#kt_schedule_day_2"
                                    >
                                      <span className="opacity-50 fs-7 fw-semibold">
                                        Tu
                                      </span>
                                      <span className="fs-6 fw-bold">24</span>
                                    </a>
                                  </li>
                                  <li className="nav-item me-1">
                                    <a
                                      className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 text-dark text-active-white btn-active-primary"
                                      data-bs-toggle="tab"
                                      href="#kt_schedule_day_3"
                                    >
                                      <span className="opacity-50 fs-7 fw-semibold">
                                        We
                                      </span>
                                      <span className="fs-6 fw-bold">25</span>
                                    </a>
                                  </li>
                                  <li className="nav-item me-1">
                                    <a
                                      className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 text-dark text-active-white btn-active-primary"
                                      data-bs-toggle="tab"
                                      href="#kt_schedule_day_4"
                                    >
                                      <span className="opacity-50 fs-7 fw-semibold">
                                        Th
                                      </span>
                                      <span className="fs-6 fw-bold">26</span>
                                    </a>
                                  </li>
                                  <li className="nav-item me-1">
                                    <a
                                      className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 text-dark text-active-white btn-active-primary"
                                      data-bs-toggle="tab"
                                      href="#kt_schedule_day_5"
                                    >
                                      <span className="opacity-50 fs-7 fw-semibold">
                                        Fr
                                      </span>
                                      <span className="fs-6 fw-bold">27</span>
                                    </a>
                                  </li>
                                  <li className="nav-item me-1">
                                    <a
                                      className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 text-dark text-active-white btn-active-primary"
                                      data-bs-toggle="tab"
                                      href="#kt_schedule_day_6"
                                    >
                                      <span className="opacity-50 fs-7 fw-semibold">
                                        Sa
                                      </span>
                                      <span className="fs-6 fw-bold">28</span>
                                    </a>
                                  </li>
                                  <li className="nav-item me-1">
                                    <a
                                      className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 text-dark text-active-white btn-active-primary"
                                      data-bs-toggle="tab"
                                      href="#kt_schedule_day_7"
                                    >
                                      <span className="opacity-50 fs-7 fw-semibold">
                                        Su
                                      </span>
                                      <span className="fs-6 fw-bold">29</span>
                                    </a>
                                  </li>
                                  <li className="nav-item me-1">
                                    <a
                                      className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 text-dark text-active-white btn-active-primary"
                                      data-bs-toggle="tab"
                                      href="#kt_schedule_day_8"
                                    >
                                      <span className="opacity-50 fs-7 fw-semibold">
                                        Mo
                                      </span>
                                      <span className="fs-6 fw-bold">30</span>
                                    </a>
                                  </li>
                                  <li className="nav-item me-1">
                                    <a
                                      className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-45px me-2 py-4 px-3 text-dark text-active-white btn-active-primary"
                                      data-bs-toggle="tab"
                                      href="#kt_schedule_day_9"
                                    >
                                      <span className="opacity-50 fs-7 fw-semibold">
                                        Tu
                                      </span>
                                      <span className="fs-6 fw-bold">31</span>
                                    </a>
                                  </li>
                                </ul>
                                <div className="tab-content">
                                  <div
                                    id="kt_schedule_day_0"
                                    className="tab-pane fade show"
                                  >
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-danger rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          11:00 - 11:45
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            am
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Creative Content Initiative
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Caleb Donaldson</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-info rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          13:00 - 14:00
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            pm
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Marketing Campaign Discussion
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Naomi Hayabusa</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-danger rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          12:00 - 13:00
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            pm
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Sales Pitch Proposal
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Walter White</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                  </div>
                                  <div
                                    id="kt_schedule_day_1"
                                    className="tab-pane fade show active"
                                  >
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-info rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          14:30 - 15:30
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            pm
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Sales Pitch Proposal
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Michael Walters</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-danger rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          11:00 - 11:45
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            am
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Dashboard UI/UX Design Review
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Kendell Trevor</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-primary rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          9:00 - 10:00
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            am
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Sales Pitch Proposal
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Michael Walters</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                  </div>
                                  <div
                                    id="kt_schedule_day_2"
                                    className="tab-pane fade show"
                                  >
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-warning rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          11:00 - 11:45
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            am
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Committee Review Approvals
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Naomi Hayabusa</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-danger rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          11:00 - 11:45
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            am
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Project Review &amp; Testing
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Kendell Trevor</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-primary rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          12:00 - 13:00
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            pm
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          9 Degree Project Estimation Meeting
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">David Stevenson</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                  </div>
                                  <div
                                    id="kt_schedule_day_3"
                                    className="tab-pane fade show"
                                  >
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-info rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          16:30 - 17:30
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            pm
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Development Team Capacity Review
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Karina Clarke</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-success rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          12:00 - 13:00
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            pm
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Committee Review Approvals
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">David Stevenson</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-info rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          16:30 - 17:30
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            pm
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Committee Review Approvals
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">David Stevenson</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                  </div>
                                  <div
                                    id="kt_schedule_day_4"
                                    className="tab-pane fade show"
                                  >
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-primary rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          16:30 - 17:30
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            pm
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Marketing Campaign Discussion
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Bob Harris</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-success rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          14:30 - 15:30
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            pm
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Committee Review Approvals
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Walter White</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-primary rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          14:30 - 15:30
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            pm
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Team Backlog Grooming Session
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Caleb Donaldson</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                  </div>
                                  <div
                                    id="kt_schedule_day_5"
                                    className="tab-pane fade show"
                                  >
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-success rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          16:30 - 17:30
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            pm
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          9 Degree Project Estimation Meeting
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Michael Walters</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-success rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          16:30 - 17:30
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            pm
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Committee Review Approvals
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Mark Randall</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-warning rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          16:30 - 17:30
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            pm
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Lunch &amp; Learn Catch Up
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Caleb Donaldson</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                  </div>
                                  <div
                                    id="kt_schedule_day_6"
                                    className="tab-pane fade show"
                                  >
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-info rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          10:00 - 11:00
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            am
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Weekly Team Stand-Up
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Peter Marcus</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-primary rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          16:30 - 17:30
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            pm
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Lunch &amp; Learn Catch Up
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Yannis Gloverson</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-danger rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          9:00 - 10:00
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            am
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          9 Degree Project Estimation Meeting
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Mark Randall</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                  </div>
                                  <div
                                    id="kt_schedule_day_7"
                                    className="tab-pane fade show"
                                  >
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-warning rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          13:00 - 14:00
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            pm
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Weekly Team Stand-Up
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Walter White</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-warning rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          12:00 - 13:00
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            pm
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Creative Content Initiative
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">David Stevenson</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-warning rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          11:00 - 11:45
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            am
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Committee Review Approvals
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Mark Randall</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                  </div>
                                  <div
                                    id="kt_schedule_day_8"
                                    className="tab-pane fade show"
                                  >
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-info rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          10:00 - 11:00
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            am
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          9 Degree Project Estimation Meeting
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Sean Bean</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-warning rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          11:00 - 11:45
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            am
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Creative Content Initiative
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Michael Walters</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-danger rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          14:30 - 15:30
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            pm
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Committee Review Approvals
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Naomi Hayabusa</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                  </div>
                                  <div
                                    id="kt_schedule_day_9"
                                    className="tab-pane fade show"
                                  >
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-info rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          16:30 - 17:30
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            pm
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Committee Review Approvals
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Karina Clarke</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-danger rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          9:00 - 10:00
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            am
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Project Review &amp; Testing
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">David Stevenson</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                    <div className="d-flex flex-stack position-relative mt-8">
                                      <div className="position-absolute h-100 w-4px bg-primary rounded top-0 start-0"></div>
                                      <div className="fw-semibold ms-5 text-gray-600">
                                        <div className="fs-5">
                                          12:00 - 13:00
                                          <span className="fs-7 text-gray-400 text-uppercase">
                                            pm
                                          </span>
                                        </div>
                                        <a
                                          href="#"
                                          className="fs-5 fw-bold text-gray-800 text-hover-primary mb-2"
                                        >
                                          Dashboard UI/UX Design Review
                                        </a>
                                        <div className="text-gray-400">
                                          Lead by
                                          <a href="#">Kendell Trevor</a>
                                        </div>
                                      </div>
                                      <a
                                        href="#"
                                        className="btn btn-bg-light btn-active-color-primary btn-sm"
                                      >
                                        View
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div >
                          </div >
                        </div >
                      </div >
                    </div >
                  </div >
                </div >
              </div >
            </div >
          </div >
        </div >
      </div >
    </>
  );
};

export default UserDetails;
