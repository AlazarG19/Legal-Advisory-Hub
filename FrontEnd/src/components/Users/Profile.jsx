import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
import OverviewComponent from "./OverviewComponent";
import ProjectsComponent from "./ProjectsComponent";
import Settings from "./Settings";
import axios from 'axios'
const Profile = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [usertype, setUsertype] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [password, setPassword] = useState("");

  // freelancer
  const [catagory, setCatagory] = useState("");
  const [firm, setFirm] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState([])
  const [language, setLanguage] = useState([])
  const [bio, setBio] = useState([])

  const navigate = useNavigate();

  const fetchData = async (getUser) => {
    const session = JSON.parse(getUser);
    console.log(session)
    const id2 = session[0]?._id
    console.log(`http://localhost:3000/getFreelancer/${id2}`)
    await fetch(`http://localhost:3000/getFreelancer/${id2}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setId(id2)
        setEmail(data[0].email)
        setFirstName(data[0].firstName)
        setLastName(data[0].lastName)
        setUsername(data[0].username)
        setUsertype(data[0].userType)
        setProfilePic(data[0].profilePicture)
        setPassword(data[0].password)
        if (data[0].userType == "freelancer") {
          setCatagory(data[0].Details[0].category)
          setFirm(data[0].Details[0].firm)
          setContact(data[0].Details[0].contact)
          setCity(data[0].Details[0].city)
          setLanguage(data[0].Details[0].language)
          setBio(data[0].Details[0].bio)
        }

      })
      .catch((error) => {
        console.log(error)
      });
  }

  useEffect(() => {
    const getUser = sessionStorage.getItem("user");

    if (getUser) {
      fetchData(getUser)
    } else {
      navigate("/login");
    }

  }, []);

  const [activeTab, setActiveTab] = useState("overview");

  const renderComponent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewComponent details={{ email, firstname, lastname, usertype, username, catagory, firm, contact, city, language, bio }} />;
      case "projects":
        return <ProjectsComponent id={id} />;
      case "settings":
        return <Settings details={{ id, profilePic, password, email, firstname, lastname, usertype, username, catagory, firm, contact, city, language, bio }} />;
      default:
        return <>NO COMPONENTS TO RENDER</>;
    }
  };

  return (
    <div id="kt_app_content_container" className="app-container" style={{ overflow: "hidden" }}>
      <Navigation />
      {/*begin::Navbar*/}
      <div className="card card-flush mb-9" id="kt_user_profile_panel">
        {/*begin::Hero nav*/}
        <div
          className="card-header rounded-top bgi-size-cover h-200px"
          style={{
            backgroundPosition: "100% 50%",
            backgroundImage: 'url("assets/media/misc/profile-head-bg.jpg")',
          }}
        />
        {/*end::Hero nav*/}
        {/*begin::Body*/}
        <div className="card-body mt-n19">
          {/*begin::Details*/}
          <div className="m-0">
            {/*begin: Pic*/}
            <div className="d-flex flex-stack align-items-end pb-4 mt-n19">
              <div className="symbol symbol-125px symbol-lg-150px symbol-fixed position-relative mt-n3">
                <img
                  src={"http://localhost:3000/uploads/profile/" + profilePic}
                  alt="image"
                  className="border border-white border-4"
                  style={{ borderRadius: 20 }}
                />
                <div className="position-absolute translate-middle bottom-0 start-100 ms-n1 mb-9 bg-success rounded-circle h-15px w-15px" />
              </div>
            </div>
            {/*end::Pic*/}
            {/*begin::Info*/}
          </div>
          {/*end::Details*/}
        </div>
      </div>
      {/*end::Navbar*/}
      {/*begin::Nav items*/}
      <div>
        <div
          id="kt_user_profile_nav"
          className="rounded bg-gray-200 d-flex flex-stack flex-wrap mb-9 p-2"
          data-kt-sticky="true"
          data-kt-sticky-name="sticky-profile-navs"
          data-kt-sticky-offset="{default: false, lg: '200px'}"
          data-kt-sticky-width="{target: '#kt_user_profile_panel'}"
          data-kt-sticky-left="auto"
          data-kt-sticky-top="70px"
          data-kt-sticky-animation="false"
          data-kt-sticky-zindex={95}
          style={{}}
        >
          {/*begin::Nav*/}
          <ul className="nav flex-wrap border-transparent">
            <li className="nav-item my-1">
              <a
                className={`btn btn-sm btn-color-gray-600 bg-state-body btn-active-color-gray-800 fw-bolder fw-bold fs-6 fs-lg-base nav-link px-3 px-lg-4 mx-1 ${activeTab === "overview" ? "active" : ""
                  }`}
                href="#"
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </a>
            </li>
            <li className="nav-item my-1">
              <a
                className={`btn btn-sm btn-color-gray-600 bg-state-body btn-active-color-gray-800 fw-bolder fw-bold fs-6 fs-lg-base nav-link px-3 px-lg-4 mx-1 ${activeTab === "projects" ? "active" : ""
                  }`}
                href="#"
                onClick={() => setActiveTab("projects")}
              >
                Projects
              </a>
            </li>
            <li className="nav-item my-1">
              <a
                className={`btn btn-sm btn-color-gray-600 bg-state-body btn-active-color-gray-800 fw-bolder fw-bold fs-6 fs-lg-base nav-link px-3 px-lg-4 mx-1 ${activeTab === "settings" ? "active" : ""
                  }`}
                href="#"
                onClick={() => setActiveTab("settings")}
              >
                Settings
              </a>
            </li>



          </ul>
          {/*end::Nav*/}
        </div>
        {/* Render the component based on active tab */}
        {renderComponent()}
      </div>
      {/*end::Nav items*/}
      {/*begin::Row*/}
      {/*end::Row*/}
      {/*begin::Row*/}
      {/*end::Row*/}
      {/*begin::Row*/}

      {/*end::Row*/}
    </div>
  );
};

export default Profile;
