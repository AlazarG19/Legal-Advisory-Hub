import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login')
  }
  const handleViewProfile = () => {
    navigate('/freelancerProfile')
  }

  const navigateToClientsPage = () => {
    navigate("/clients");
  };
  let onLinkClick = (link) => {
    navigate(link)
  }
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
                <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-here-bg menu-lg-down-accordion me-0 me-lg-2">
                  {/* <!--begin:Menu link--> */}
                  <span className="menu-link">
                    <span className="menu-title">Forum</span>
                    <span className="menu-arrow d-lg-none"></span>
                  </span>
                  {/* <!--end:Menu link--> */}
                </div>
                {/* <!--end:Menu item--> */}
                {/* <!--begin:Menu item--> */}
                <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item here show">
                  {/* <!--begin:Menu link--> */}
                  <span className="menu-link">
                    <span className="menu-title">Legal Experts</span>
                    <span className="menu-arrow d-lg-none"></span>
                  </span>
                  {/* <!--end:Menu link--> */}
                </div>
                {/* <!--end:Menu item--> */}
                {/* <!--begin:Menu item--> */}
                <div onClick={() => { onLinkClick("/customform") }} data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">
                  {/* <!--begin:Menu link--> */}
                  <span className="menu-link">
                    <span className="menu-title">Custom Form</span>
                    <span className="menu-arrow d-lg-none"></span>
                  </span>
                  {/* <!--end:Menu link--> */}
                </div>
                {/* <!--end:Menu item--> */}
                {/* <!--begin:Menu item--> */}
                <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-0 me-lg-2">
                  {/* <!--begin:Menu link--> */}
                  <span className="menu-link">
                    <span className="menu-title">Document Database</span>
                    <span className="menu-arrow d-lg-none"></span>
                  </span>
                  {/* <!--end:Menu link--> */}
                </div>
                {/* <!--end:Menu item--> */}
                {/* <!--begin:Menu item--> */}
                <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">
                  {/* <!--begin:Menu link--> */}
                  <span className="menu-link">
                    <span className="menu-title">Help</span>
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
              <div className="app-navbar-item ms-1 ms-lg-3">
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
                <div className="dropdown">
                  <div
                    className="cursor-pointer symbol symbol-35px symbol-md-40px"
                    onClick={toggleDropdown}
                  >
                    <img src="assets/media/avatars/300-3.jpg" alt="user" />
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

                {/*begin::User account menu*/}
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
                  data-kt-menu="true"
                >
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <div className="menu-content d-flex align-items-center px-3">
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-50px me-5">
                        <img alt="Logo" src="assets/media/avatars/300-3.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Username*/}
                      <div className="d-flex flex-column">
                        <div className="fw-bold d-flex align-items-center fs-5">
                          Max Smith
                          <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">
                            Pro
                          </span>
                        </div>
                        <a
                          href="#"
                          className="fw-semibold text-muted text-hover-primary fs-7"
                        >
                          max@kt.com
                        </a>
                      </div>
                      {/*end::Username*/}
                    </div>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator my-2" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a
                      href="../../demo1/dist/account/overview.html"
                      className="menu-link px-5"
                    >
                      My Profile
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a
                      href="../../demo1/dist/apps/projects/list.html"
                      className="menu-link px-5"
                    >
                      <span className="menu-text">My Projects</span>
                      <span className="menu-badge">
                        <span className="badge badge-light-danger badge-circle fw-bold fs-7">
                          3
                        </span>
                      </span>
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div
                    className="menu-item px-5"
                    data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                    data-kt-menu-placement="left-start"
                    data-kt-menu-offset="-15px, 0"
                  >
                    <a href="#" className="menu-link px-5">
                      <span className="menu-title">My Subscription</span>
                      <span className="menu-arrow" />
                    </a>
                    {/*begin::Menu sub*/}
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="../../demo1/dist/account/referrals.html"
                          className="menu-link px-5"
                        >
                          Referrals
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="../../demo1/dist/account/billing.html"
                          className="menu-link px-5"
                        >
                          Billing
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="../../demo1/dist/account/statements.html"
                          className="menu-link px-5"
                        >
                          Payments
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="../../demo1/dist/account/statements.html"
                          className="menu-link d-flex flex-stack px-5"
                        >
                          Statements
                          <i
                            className="fas fa-exclamation-circle ms-2 fs-7"
                            data-bs-toggle="tooltip"
                            aria-label="View your statements"
                            data-bs-original-title="View your statements"
                            data-kt-initialized={1}
                          />
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu separator*/}
                      <div className="separator my-2" />
                      {/*end::Menu separator*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <div className="menu-content px-3">
                          <label className="form-check form-switch form-check-custom form-check-solid">
                            <input
                              className="form-check-input w-30px h-20px"
                              type="checkbox"
                              defaultValue={1}
                              defaultChecked="checked"
                              name="notifications"
                            />
                            <span className="form-check-label text-muted fs-7">
                              Notifications
                            </span>
                          </label>
                        </div>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu sub*/}
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a
                      href="../../demo1/dist/account/statements.html"
                      className="menu-link px-5"
                    >
                      My Statements
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator my-2" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div
                    className="menu-item px-5"
                    data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                    data-kt-menu-placement="left-start"
                    data-kt-menu-offset="-15px, 0"
                  >
                    <a href="#" className="menu-link px-5">
                      <span className="menu-title position-relative">
                        Language
                        <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                          English
                          <img
                            className="w-15px h-15px rounded-1 ms-2"
                            src="assets/media/flags/united-states.svg"
                            alt=""
                          />
                        </span>
                      </span>
                    </a>
                    {/*begin::Menu sub*/}
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="../../demo1/dist/account/settings.html"
                          className="menu-link d-flex px-5 active"
                        >
                          <span className="symbol symbol-20px me-4">
                            <img
                              className="rounded-1"
                              src="assets/media/flags/united-states.svg"
                              alt=""
                            />
                          </span>
                          English
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="../../demo1/dist/account/settings.html"
                          className="menu-link d-flex px-5"
                        >
                          <span className="symbol symbol-20px me-4">
                            <img
                              className="rounded-1"
                              src="assets/media/flags/spain.svg"
                              alt=""
                            />
                          </span>
                          Spanish
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="../../demo1/dist/account/settings.html"
                          className="menu-link d-flex px-5"
                        >
                          <span className="symbol symbol-20px me-4">
                            <img
                              className="rounded-1"
                              src="assets/media/flags/germany.svg"
                              alt=""
                            />
                          </span>
                          German
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="../../demo1/dist/account/settings.html"
                          className="menu-link d-flex px-5"
                        >
                          <span className="symbol symbol-20px me-4">
                            <img
                              className="rounded-1"
                              src="assets/media/flags/japan.svg"
                              alt=""
                            />
                          </span>
                          Japanese
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a
                          href="../../demo1/dist/account/settings.html"
                          className="menu-link d-flex px-5"
                        >
                          <span className="symbol symbol-20px me-4">
                            <img
                              className="rounded-1"
                              src="assets/media/flags/france.svg"
                              alt=""
                            />
                          </span>
                          French
                        </a>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu sub*/}
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5 my-1">
                    <a
                      href="../../demo1/dist/account/settings.html"
                      className="menu-link px-5"
                    >
                      Account Settings
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-5">
                    <a
                      href="../../demo1/dist/authentication/layouts/corporate/sign-in.html"
                      className="menu-link px-5"
                    >
                      Sign Out
                    </a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::User account menu*/}
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
