import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
import OverviewComponent from "../FreelancerComponent/OverviewComponent";
import ProjectsComponent from "../FreelancerComponent/ProjectsComponent";
import Settings from "../FreelancerComponent/Settings";
import axios from 'axios'
const FreelancerProfile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [catagory, setCatagory] = useState("");
  const [firm, setFirm] = useState("");
  const [id, setId] = useState("");
  const [offers, setOffers] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = sessionStorage.getItem("user");
    if (getUser) {
      const session = JSON.parse(getUser);
      setName(session[0].name);
      setBio(session[0].bio);
      setCatagory(session[0].catagory);
      setFirm(session[0].firm);
      setUser(session[0]);
      setId(session[0]._id)
    } else {
      navigate("/login");
    }
    
  }, []);
  console.log(user);

  const [activeTab, setActiveTab] = useState("overview");

  const renderComponent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewComponent />;
      case "projects":
        return <ProjectsComponent id = {id}/>;
      case "settings":
        return <Settings />;
      // case "documents":
      //   return <DocumentsComponent />;
      // case "followers":
      //   return <FollowersComponent />;
      // case "activity":
      //   return <ActivityComponent />;
      default:
        return <>NO COMPONENTS TO RENDER</>;
    }
  };

  return (
    <div id="kt_app_content_container" className="app-container" style={{overflow:"hidden"}}>
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
                  src="assets/media/avatars/300-3.jpg"
                  alt="image"
                  className="border border-white border-4"
                  style={{ borderRadius: 20 }}
                />
                <div className="position-absolute translate-middle bottom-0 start-100 ms-n1 mb-9 bg-success rounded-circle h-15px w-15px" />
              </div>
              {/*begin::Toolbar*/}
              <div className="me-0">
                <button
                  className="btn btn-icon btn-sm btn-active-color-primary justify-content-end pt-3"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                >
                  <i className="fonticon-settings fs-2" />
                </button>
                {/*begin::Menu 3*/}
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                  data-kt-menu="true"
                >
                  {/*begin::Heading*/}
                  <div className="menu-item px-3">
                    <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                      Payments
                    </div>
                  </div>
                  {/*end::Heading*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">
                      Create Invoice
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link flex-stack px-3">
                      Create Payment
                      <i
                        className="fas fa-exclamation-circle ms-2 fs-7"
                        data-bs-toggle="tooltip"
                        aria-label="Specify a target name for future usage and reference"
                        data-bs-original-title="Specify a target name for future usage and reference"
                        data-kt-initialized={1}
                      />
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">
                      Generate Bill
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div
                    className="menu-item px-3"
                    data-kt-menu-trigger="hover"
                    data-kt-menu-placement="right-end"
                  >
                    <a href="#" className="menu-link px-3">
                      <span className="menu-title">Subscription</span>
                      <span className="menu-arrow" />
                    </a>
                    {/*begin::Menu sub*/}
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          Plans
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          Billing
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          Statements
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator my-2" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content px-3">
                          {/*begin::Switch*/}
                          <label className="form-check form-switch form-check-custom form-check-solid">
                            {/*begin::Input*/}
                            <input
                              className="form-check-input w-30px h-20px"
                              type="checkbox"
                              defaultValue={1}
                              defaultChecked="checked"
                              name="notifications"
                            />
                            {/*end::Input*/}
                            {/*end::Label*/}
                            <span className="form-check-label text-muted fs-6">
                              Recuring
                            </span>
                            {/*end::Label*/}
                          </label>
                          {/*end::Switch*/}
                        </div>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu sub*/}
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3 my-1">
                    <a href="#" className="menu-link px-3">
                      Settings
                    </a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu 3*/}
              </div>
              {/*end::Toolbar*/}
            </div>
            {/*end::Pic*/}
            {/*begin::Info*/}
            <div className="d-flex flex-stack flex-wrap align-items-end">
              {/*begin::User*/}
              <div className="d-flex flex-column">
                {/*begin::Name*/}
                <div className="d-flex align-items-center mb-2">
                  <a
                    href="#"
                    className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                  >
                    {name.toUpperCase()}
                  </a>
                  <a
                    href="#"
                    className=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    aria-label="Account is verified"
                    data-bs-original-title="Account is verified"
                    data-kt-initialized={1}
                  >
                    {/*begin::Svg Icon | path: icons/duotune/general/gen026.svg*/}
                    <span className="svg-icon svg-icon-1 svg-icon-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M10.0813 3.7242C10.8849 2.16438 13.1151 2.16438 13.9187 3.7242V3.7242C14.4016 4.66147 15.4909 5.1127 16.4951 4.79139V4.79139C18.1663 4.25668 19.7433 5.83365 19.2086 7.50485V7.50485C18.8873 8.50905 19.3385 9.59842 20.2758 10.0813V10.0813C21.8356 10.8849 21.8356 13.1151 20.2758 13.9187V13.9187C19.3385 14.4016 18.8873 15.491 19.2086 16.4951V16.4951C19.7433 18.1663 18.1663 19.7433 16.4951 19.2086V19.2086C15.491 18.8873 14.4016 19.3385 13.9187 20.2758V20.2758C13.1151 21.8356 10.8849 21.8356 10.0813 20.2758V20.2758C9.59842 19.3385 8.50905 18.8873 7.50485 19.2086V19.2086C5.83365 19.7433 4.25668 18.1663 4.79139 16.4951V16.4951C5.1127 15.491 4.66147 14.4016 3.7242 13.9187V13.9187C2.16438 13.1151 2.16438 10.8849 3.7242 10.0813V10.0813C4.66147 9.59842 5.1127 8.50905 4.79139 7.50485V7.50485C4.25668 5.83365 5.83365 4.25668 7.50485 4.79139V4.79139C8.50905 5.1127 9.59842 4.66147 10.0813 3.7242V3.7242Z"
                          fill="currentColor"
                        />
                        <path
                          d="M14.8563 9.1903C15.0606 8.94984 15.3771 8.9385 15.6175 9.14289C15.858 9.34728 15.8229 9.66433 15.6185 9.9048L11.863 14.6558C11.6554 14.9001 11.2876 14.9258 11.048 14.7128L8.47656 12.4271C8.24068 12.2174 8.21944 11.8563 8.42911 11.6204C8.63877 11.3845 8.99996 11.3633 9.23583 11.5729L11.3706 13.4705L14.8563 9.1903Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </a>
                </div>
                {/*end::Name*/}
                {/*begin::Text*/}
                <span className="fw-bold text-gray-600 fs-6 mb-2 d-block">
                  {bio}
                </span>
                {/*end::Text*/}
                {/*begin::Info*/}
                <div className="d-flex align-items-center flex-wrap fw-semibold fs-7 pe-2">
                  <a
                    href="#"
                    className="d-flex align-items-center text-gray-400 text-hover-primary"
                  >
                    {catagory}
                  </a>
                  <span className="bullet bullet-dot h-5px w-5px bg-gray-400 mx-3" />
                  <a
                    href="#"
                    className="d-flex align-items-center text-gray-400 text-hover-primary"
                  >
                    {firm}
                  </a>
                </div>
                {/*end::Info*/}
              </div>
              {/*end::User*/}
            </div>
            {/*end::Info*/}
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
                className={`btn btn-sm btn-color-gray-600 bg-state-body btn-active-color-gray-800 fw-bolder fw-bold fs-6 fs-lg-base nav-link px-3 px-lg-4 mx-1 ${
                  activeTab === "overview" ? "active" : ""
                }`}
                href="#"
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </a>
            </li>
            <li className="nav-item my-1">
              <a
                className={`btn btn-sm btn-color-gray-600 bg-state-body btn-active-color-gray-800 fw-bolder fw-bold fs-6 fs-lg-base nav-link px-3 px-lg-4 mx-1 ${
                  activeTab === "projects" ? "active" : ""
                }`}
                href="#"
                onClick={() => setActiveTab("projects")}
              >
                Projects
              </a>
            </li>
            <li className="nav-item my-1">
              <a
                className={`btn btn-sm btn-color-gray-600 bg-state-body btn-active-color-gray-800 fw-bolder fw-bold fs-6 fs-lg-base nav-link px-3 px-lg-4 mx-1 ${
                  activeTab === "settings" ? "active" : ""
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

export default FreelancerProfile;
