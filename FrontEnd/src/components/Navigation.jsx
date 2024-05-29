import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [img, setimg] = useState("#")
  const [usertype, setusertype] = useState("")
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login')
  }
  const handleViewProfile = () => {
    if (usertype == "client") {
      navigate('/user')

    } else if (usertype == "freelancer") {

      navigate('/freelancerProfile')
    }
  }
  let location = useLocation()
  console.log("locaiton", location.pathname)
  const navigateToClientsPage = () => {
    navigate("/clients");
  };
  let onLinkClick = (link) => {
    navigate(link)
  }
  useEffect(() => {
    setimg("http://localhost:3000/uploads/profile/" + JSON.parse(sessionStorage.getItem('user'))[0]["profilePicture"])
    setusertype(JSON.parse(sessionStorage.getItem('user'))[0]["userType"])

  }, [])

  return (
    <>
      <div id="kt_app_header" className="app-header">
        {/*begin::Header container*/}
        <div
          className="app-container container-fluid d-flex align-items-stretch justify-content-between"
          id="kt_app_header_container"
        >

          {/*begin::Header wrapper*/}
          <div
            className="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
            id="kt_app_header_wrapper"
          >
            <div
              className="app-header-menu app-header-mobile-drawer align-items-stretch"
              data-kt-drawer="true"
              data-kt-drawer-name="app-header-menu"
              data-kt-drawer-activate="{default: true, lg: false}"
              data-kt-drawer-overlay="true"
              data-kt-drawer-width="225px"
              data-kt-drawer-direction="end"
              data-kt-drawer-toggle="#kt_app_header_menu_toggle"
              data-kt-swapper="true"
              data-kt-swapper-mode="{default: 'append', lg: 'prepend'}"
              data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}"
              style={{}}
            >
              {/* <!--begin::Menu--> */}
              <div className="menu menu-rounded menu-column menu-lg-row my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0" id="kt_app_header_menu" data-kt-menu="true">
                {/* <!--begin:Menu item--> */}
                <div onClick={() => { onLinkClick("/forum") }} data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className={location.pathname.includes("forum") ? "menu-item here " : "menu-item "}>
                  {/* <!--begin:Menu link--> */}
                  <span className="menu-link">
                    <span className="menu-title">Forum</span>
                    <span className="menu-arrow d-lg-none"></span>
                  </span>
                  {/* <!--end:Menu link--> */}
                </div>
                {/* <!--end:Menu item--> */}
                {/* <!--begin:Menu item--> */}
                <div onClick={() => { onLinkClick("/legalexperts") }} data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className={location.pathname.includes("legalexperts") ? "menu-item here " : "menu-item "} >
                  {/* <!--begin:Menu link--> */}
                  <span className="menu-link">
                    <span className="menu-title">Legal Experts</span>
                    <span className="menu-arrow d-lg-none"></span>
                  </span>
                  {/* <!--end:Menu link--> */}
                </div>
                {/* <!--end:Menu item--> */}
                {/* <!--begin:Menu item--> */}
                <div onClick={() => { onLinkClick("/customform") }} data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className={location.pathname.includes("customform") ? "menu-item here " : "menu-item "}>
                  {/* <!--begin:Menu link--> */}
                  <span className="menu-link">
                    <span className="menu-title">Custom Form</span>
                    <span className="menu-arrow d-lg-none"></span>
                  </span>
                  {/* <!--end:Menu link--> */}
                </div>
                {/* <!--end:Menu item--> */}
                {/* <!--begin:Menu item--> */}
                <div onClick={() => { onLinkClick("/docdb/documents") }} data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className={location.pathname.includes("docdb") ? "menu-item here " : "menu-item "}>
                  {/* <!--begin:Menu link--> */}
                  <span className="menu-link">
                    <span className="menu-title">Document Database</span>
                    <span className="menu-arrow d-lg-none"></span>
                  </span>
                  {/* <!--end:Menu link--> */}
                </div>
                {/* <!--end:Menu item--> */}
              </div>
              {/* <!--end::Menu--> */}
            </div>
            {/*begin::Menu wrapper*/}
            {/*end::Menu wrapper*/}
            {/*begin::Navbar*/}
            <div className="app-navbar flex-shrink-0">

              {/*begin::Chat*/}
              <div className="app-navbar-item ms-1 ms-lg-3" >
                {/*begin::Menu wrapper*/}
                <div
                  className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px position-relative"
                  id="kt_drawer_chat_toggle"
                >
                  {/*begin::Svg Icon | path: icons/duotune/communication/com012.svg*/}
                  <span
                    className="svg-icon svg-icon-1"
                    onClick={navigateToClientsPage}
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                        fill="currentColor"
                      />
                      <rect
                        x={6}
                        y={12}
                        width={7}
                        height={2}
                        rx={1}
                        fill="currentColor"
                      />
                      <rect
                        x={6}
                        y={7}
                        width={12}
                        height={2}
                        rx={1}
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                  <span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink" />
                </div>
                {/*end::Menu wrapper*/}
              </div>
              {/*end::Chat*/}
              {/*begin::User menu*/}
              <div
                className="app-navbar-item ms-1 ms-lg-3"
                id="kt_header_user_menu_toggle"

              >
                {/*begin::Menu wrapper*/}
                <div className="dropdown" style={{ marginRight: "70px" }}>
                  <div
                    className="cursor-pointer symbol symbol-35px symbol-md-40px"
                    onClick={toggleDropdown}
                  >
                    <img src={img} alt="user" />
                  </div>
                  {isOpen && (
                    <div className="dropdown-menu show">
                      <button className="dropdown-item" onClick={handleViewProfile}>
                        ViewProfile
                      </button>
                      <button className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </button>
                      {/* Add more dropdown items as needed */}
                    </div>
                  )}
                </div>

                {/*end::Menu wrapper*/}
              </div>
              {/*end::User menu*/}
              {/*begin::Header menu toggle*/}
              <div
                className="app-navbar-item d-lg-none ms-2 me-n3"
                title="Show header menu"
              >
                <div
                  className="btn btn-icon btn-active-color-primary w-35px h-35px"
                  id="kt_app_header_menu_toggle"
                >
                  {/*begin::Svg Icon | path: icons/duotune/text/txt001.svg*/}
                  <span className="svg-icon svg-icon-1">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 11H3C2.4 11 2 10.6 2 10V9C2 8.4 2.4 8 3 8H13C13.6 8 14 8.4 14 9V10C14 10.6 13.6 11 13 11ZM22 5V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4V5C2 5.6 2.4 6 3 6H21C21.6 6 22 5.6 22 5Z"
                        fill="currentColor"
                      />
                      <path
                        opacity="0.3"
                        d="M21 16H3C2.4 16 2 15.6 2 15V14C2 13.4 2.4 13 3 13H21C21.6 13 22 13.4 22 14V15C22 15.6 21.6 16 21 16ZM14 20V19C14 18.4 13.6 18 13 18H3C2.4 18 2 18.4 2 19V20C2 20.6 2.4 21 3 21H13C13.6 21 14 20.6 14 20Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </div>
              </div>
              {/*end::Header menu toggle*/}
            </div>
            {/*end::Navbar*/}
          </div>
          {/*end::Header wrapper*/}
        </div>
        {/*end::Header container*/}
      </div>
    </>
  );
};

export default Navigation;
