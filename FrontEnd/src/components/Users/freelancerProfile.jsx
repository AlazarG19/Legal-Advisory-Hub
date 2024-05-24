import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
const FreelancerProfile = () => {
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  const navigate = useNavigate();
  return (
    <div id="kt_app_content_container" className="app-container container-xxl">
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
                    Bessie Cooper
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
                  Design is like a fart. If you have to force it, it’s probably
                  shit.
                </span>
                {/*end::Text*/}
                {/*begin::Info*/}
                <div className="d-flex align-items-center flex-wrap fw-semibold fs-7 pe-2">
                  <a
                    href="#"
                    className="d-flex align-items-center text-gray-400 text-hover-primary"
                  >
                    UI/UX Design
                  </a>
                  <span className="bullet bullet-dot h-5px w-5px bg-gray-400 mx-3" />
                  <a
                    href="#"
                    className="d-flex align-items-center text-gray-400 text-hover-primary"
                  >
                    Austin, TX
                  </a>
                  <span className="bullet bullet-dot h-5px w-5px bg-gray-400 mx-3" />
                  <a href="#" className="text-gray-400 text-hover-primary">
                    3,450 Followers
                  </a>
                </div>
                {/*end::Info*/}
              </div>
              {/*end::User*/}
              {/*begin::Actions*/}
              <div className="d-flex">
                <a
                  href="#"
                  className="btn btn-sm btn-light me-3"
                  id="kt_drawer_chat_toggle"
                >
                  Send Message
                </a>
                <button
                  className="btn btn-sm btn-primary"
                  id="kt_user_follow_button"
                >
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr012.svg*/}
                  <span className="svg-icon svg-icon-3 d-none">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        d="M10 18C9.7 18 9.5 17.9 9.3 17.7L2.3 10.7C1.9 10.3 1.9 9.7 2.3 9.3C2.7 8.9 3.29999 8.9 3.69999 9.3L10.7 16.3C11.1 16.7 11.1 17.3 10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10 18C9.7 18 9.5 17.9 9.3 17.7C8.9 17.3 8.9 16.7 9.3 16.3L20.3 5.3C20.7 4.9 21.3 4.9 21.7 5.3C22.1 5.7 22.1 6.30002 21.7 6.70002L10.7 17.7C10.5 17.9 10.3 18 10 18Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                  {/*begin::Indicator label*/}
                  <span className="indicator-label">Follow</span>
                  {/*end::Indicator label*/}
                  {/*begin::Indicator progress*/}
                  <span className="indicator-progress">
                    Please wait...
                    <span className="spinner-border spinner-border-sm align-middle ms-2" />
                  </span>
                  {/*end::Indicator progress*/}
                </button>
              </div>
              {/*end::Actions*/}
            </div>
            {/*end::Info*/}
          </div>
          {/*end::Details*/}
        </div>
      </div>
      {/*end::Navbar*/}
      {/*begin::Nav items*/}
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
          {/*begin::Nav item*/}
          <li className="nav-item my-1">
            <a
              className="btn btn-sm btn-color-gray-600 bg-state-body btn-active-color-gray-800 fw-bolder fw-bold fs-6 fs-lg-base nav-link px-3 px-lg-4 mx-1 active"
              href="../../demo1/dist/pages/user-profile/overview.html"
            >
              Overview
            </a>
          </li>
          {/*end::Nav item*/}
          {/*begin::Nav item*/}
          <li className="nav-item my-1">
            <a
              className="btn btn-sm btn-color-gray-600 bg-state-body btn-active-color-gray-800 fw-bolder fw-bold fs-6 fs-lg-base nav-link px-3 px-lg-4 mx-1"
              href="../../demo1/dist/pages/user-profile/projects.html"
            >
              Projects
            </a>
          </li>
          {/*end::Nav item*/}
          {/*begin::Nav item*/}
          <li className="nav-item my-1">
            <a
              className="btn btn-sm btn-color-gray-600 bg-state-body btn-active-color-gray-800 fw-bolder fw-bold fs-6 fs-lg-base nav-link px-3 px-lg-4 mx-1"
              href="../../demo1/dist/pages/user-profile/campaigns.html"
            >
              Campaigns
            </a>
          </li>
          {/*end::Nav item*/}
          {/*begin::Nav item*/}
          <li className="nav-item my-1">
            <a
              className="btn btn-sm btn-color-gray-600 bg-state-body btn-active-color-gray-800 fw-bolder fw-bold fs-6 fs-lg-base nav-link px-3 px-lg-4 mx-1"
              href="../../demo1/dist/pages/user-profile/documents.html"
            >
              Documents
            </a>
          </li>
          {/*end::Nav item*/}
          {/*begin::Nav item*/}
          <li className="nav-item my-1">
            <a
              className="btn btn-sm btn-color-gray-600 bg-state-body btn-active-color-gray-800 fw-bolder fw-bold fs-6 fs-lg-base nav-link px-3 px-lg-4 mx-1"
              href="../../demo1/dist/pages/user-profile/followers.html"
            >
              Followers
            </a>
          </li>
          {/*end::Nav item*/}
          {/*begin::Nav item*/}
          <li className="nav-item my-1">
            <a
              className="btn btn-sm btn-color-gray-600 bg-state-body btn-active-color-gray-800 fw-bolder fw-bold fs-6 fs-lg-base nav-link px-3 px-lg-4 mx-1"
              href="../../demo1/dist/pages/user-profile/activity.html"
            >
              Activity
            </a>
          </li>
          {/*end::Nav item*/}
        </ul>
        {/*end::Nav*/}
      </div>
      {/*end::Nav items*/}
      {/*begin::Row*/}
      <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
        {/*begin::Col*/}
        <div className="col-xl-6">
          {/*begin::List widget 1*/}
          <div className="card card-flush h-md-100 mb-5 mb-lg-10">
            {/*begin::Header*/}
            <div className="card-header pt-5">
              {/*begin::Title*/}
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-dark">Highlights</span>
                <span className="text-gray-400 mt-1 fw-semibold fs-6">
                  Latest social statistics
                </span>
              </h3>
              {/*end::Title*/}
              {/*begin::Toolbar*/}
              <div className="card-toolbar">
                {/*begin::Menu*/}
                <button
                  className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-overflow="true"
                >
                  {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                  <span className="svg-icon svg-icon-1">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.3"
                        x={2}
                        y={2}
                        width={20}
                        height={20}
                        rx={4}
                        fill="currentColor"
                      />
                      <rect
                        x={11}
                        y={11}
                        width="2.6"
                        height="2.6"
                        rx="1.3"
                        fill="currentColor"
                      />
                      <rect
                        x={15}
                        y={11}
                        width="2.6"
                        height="2.6"
                        rx="1.3"
                        fill="currentColor"
                      />
                      <rect
                        x={7}
                        y={11}
                        width="2.6"
                        height="2.6"
                        rx="1.3"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </button>
                {/*begin::Menu 2*/}
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                  data-kt-menu="true"
                >
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                      Quick Actions
                    </div>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator mb-3 opacity-75" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">
                      New Ticket
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">
                      New Customer
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div
                    className="menu-item px-3"
                    data-kt-menu-trigger="hover"
                    data-kt-menu-placement="right-start"
                  >
                    {/*begin::Menu item*/}
                    <a href="#" className="menu-link px-3">
                      <span className="menu-title">New Group</span>
                      <span className="menu-arrow" />
                    </a>
                    {/*end::Menu item*/}
                    {/*begin::Menu sub*/}
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          Admin Group
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          Staff Group
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          Member Group
                        </a>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu sub*/}
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">
                      New Contact
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator mt-3 opacity-75" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <div className="menu-content px-3 py-3">
                      <a className="btn btn-primary btn-sm px-4" href="#">
                        Generate Reports
                      </a>
                    </div>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu 2*/}
                {/*end::Menu*/}
              </div>
              {/*end::Toolbar*/}
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="card-body pt-5">
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Section*/}
                <div className="text-gray-700 fw-semibold fs-6 me-2">
                  Avg. Client Rating
                </div>
                {/*end::Section*/}
                {/*begin::Statistics*/}
                <div className="d-flex align-items-senter">
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr094.svg*/}
                  <span className="svg-icon svg-icon-2 svg-icon-success me-2">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.5"
                        x="16.9497"
                        y="8.46448"
                        width={13}
                        height={2}
                        rx={1}
                        transform="rotate(135 16.9497 8.46448)"
                        fill="currentColor"
                      />
                      <path
                        d="M14.8284 9.97157L14.8284 15.8891C14.8284 16.4749 15.3033 16.9497 15.8891 16.9497C16.4749 16.9497 16.9497 16.4749 16.9497 15.8891L16.9497 8.05025C16.9497 7.49797 16.502 7.05025 15.9497 7.05025L8.11091 7.05025C7.52512 7.05025 7.05025 7.52513 7.05025 8.11091C7.05025 8.6967 7.52512 9.17157 8.11091 9.17157L14.0284 9.17157C14.4703 9.17157 14.8284 9.52975 14.8284 9.97157Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                  {/*begin::Number*/}
                  <span className="text-gray-900 fw-bolder fs-6">7.8</span>
                  {/*end::Number*/}
                  <span className="text-gray-400 fw-bold fs-6">/10</span>
                </div>
                {/*end::Statistics*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-3" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Section*/}
                <div className="text-gray-700 fw-semibold fs-6 me-2">
                  Instagram Followers
                </div>
                {/*end::Section*/}
                {/*begin::Statistics*/}
                <div className="d-flex align-items-senter">
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr093.svg*/}
                  <span className="svg-icon svg-icon-2 svg-icon-danger me-2">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.5"
                        x="7.05026"
                        y="15.5355"
                        width={13}
                        height={2}
                        rx={1}
                        transform="rotate(-45 7.05026 15.5355)"
                        fill="currentColor"
                      />
                      <path
                        d="M9.17158 14.0284L9.17158 8.11091C9.17158 7.52513 8.6967 7.05025 8.11092 7.05025C7.52513 7.05025 7.05026 7.52512 7.05026 8.11091L7.05026 15.9497C7.05026 16.502 7.49797 16.9497 8.05026 16.9497L15.8891 16.9497C16.4749 16.9497 16.9498 16.4749 16.9498 15.8891C16.9498 15.3033 16.4749 14.8284 15.8891 14.8284L9.97158 14.8284C9.52975 14.8284 9.17158 14.4703 9.17158 14.0284Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                  {/*begin::Number*/}
                  <span className="text-gray-900 fw-bolder fs-6">730k</span>
                  {/*end::Number*/}
                </div>
                {/*end::Statistics*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-3" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Section*/}
                <div className="text-gray-700 fw-semibold fs-6 me-2">
                  Google Ads CPC
                </div>
                {/*end::Section*/}
                {/*begin::Statistics*/}
                <div className="d-flex align-items-senter">
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr094.svg*/}
                  <span className="svg-icon svg-icon-2 svg-icon-success me-2">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.5"
                        x="16.9497"
                        y="8.46448"
                        width={13}
                        height={2}
                        rx={1}
                        transform="rotate(135 16.9497 8.46448)"
                        fill="currentColor"
                      />
                      <path
                        d="M14.8284 9.97157L14.8284 15.8891C14.8284 16.4749 15.3033 16.9497 15.8891 16.9497C16.4749 16.9497 16.9497 16.4749 16.9497 15.8891L16.9497 8.05025C16.9497 7.49797 16.502 7.05025 15.9497 7.05025L8.11091 7.05025C7.52512 7.05025 7.05025 7.52513 7.05025 8.11091C7.05025 8.6967 7.52512 9.17157 8.11091 9.17157L14.0284 9.17157C14.4703 9.17157 14.8284 9.52975 14.8284 9.97157Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                  {/*begin::Number*/}
                  <span className="text-gray-900 fw-bolder fs-6">$2.09</span>
                  {/*end::Number*/}
                </div>
                {/*end::Statistics*/}
              </div>
              {/*end::Item*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::LIst widget 1*/}
        </div>
        {/*end::Col*/}
        {/*begin::Col*/}
        <div className="col-xl-6">
          {/*begin::List widget 2*/}
          <div className="card card-flush h-md-100 mb-5 mb-lg-10">
            {/*begin::Header*/}
            <div className="card-header pt-5">
              {/*begin::Title*/}
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-dark">
                  External Links
                </span>
                <span className="text-gray-400 mt-1 fw-semibold fs-6">
                  Most used resources
                </span>
              </h3>
              {/*end::Title*/}
              {/*begin::Toolbar*/}
              <div className="card-toolbar">
                {/*begin::Menu*/}
                <button
                  className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-overflow="true"
                >
                  {/*begin::Svg Icon | path: icons/duotune/general/gen023.svg*/}
                  <span className="svg-icon svg-icon-1">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.3"
                        x={2}
                        y={2}
                        width={20}
                        height={20}
                        rx={4}
                        fill="currentColor"
                      />
                      <rect
                        x={11}
                        y={11}
                        width="2.6"
                        height="2.6"
                        rx="1.3"
                        fill="currentColor"
                      />
                      <rect
                        x={15}
                        y={11}
                        width="2.6"
                        height="2.6"
                        rx="1.3"
                        fill="currentColor"
                      />
                      <rect
                        x={7}
                        y={11}
                        width="2.6"
                        height="2.6"
                        rx="1.3"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
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
                {/*end::Menu*/}
              </div>
              {/*end::Toolbar*/}
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="card-body pt-5">
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Title*/}
                <a
                  href="#"
                  className="text-primary opacity-75-hover fs-6 fw-semibold"
                >
                  Google Analytics
                </a>
                {/*end::Title*/}
                {/*begin::Action*/}
                <button
                  type="button"
                  className="btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary justify-content-end"
                >
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr095.svg*/}
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
                        d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z"
                        fill="currentColor"
                      />
                      <rect
                        x="21.9497"
                        y="3.46448"
                        width={13}
                        height={2}
                        rx={1}
                        transform="rotate(135 21.9497 3.46448)"
                        fill="currentColor"
                      />
                      <path
                        d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </button>
                {/*end::Action*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-3" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Title*/}
                <a
                  href="#"
                  className="text-primary opacity-75-hover fs-6 fw-semibold"
                >
                  Facebook Ads
                </a>
                {/*end::Title*/}
                {/*begin::Action*/}
                <button
                  type="button"
                  className="btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary justify-content-end"
                >
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr095.svg*/}
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
                        d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z"
                        fill="currentColor"
                      />
                      <rect
                        x="21.9497"
                        y="3.46448"
                        width={13}
                        height={2}
                        rx={1}
                        transform="rotate(135 21.9497 3.46448)"
                        fill="currentColor"
                      />
                      <path
                        d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </button>
                {/*end::Action*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-3" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Title*/}
                <a
                  href="#"
                  className="text-primary opacity-75-hover fs-6 fw-semibold"
                >
                  Seranking
                </a>
                {/*end::Title*/}
                {/*begin::Action*/}
                <button
                  type="button"
                  className="btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary justify-content-end"
                >
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr095.svg*/}
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
                        d="M4.7 17.3V7.7C4.7 6.59543 5.59543 5.7 6.7 5.7H9.8C10.2694 5.7 10.65 5.31944 10.65 4.85C10.65 4.38056 10.2694 4 9.8 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H18C19.1046 21 20 20.1046 20 19V14.2C20 13.7306 19.6194 13.35 19.15 13.35C18.6806 13.35 18.3 13.7306 18.3 14.2V17.3C18.3 18.4046 17.4046 19.3 16.3 19.3H6.7C5.59543 19.3 4.7 18.4046 4.7 17.3Z"
                        fill="currentColor"
                      />
                      <rect
                        x="21.9497"
                        y="3.46448"
                        width={13}
                        height={2}
                        rx={1}
                        transform="rotate(135 21.9497 3.46448)"
                        fill="currentColor"
                      />
                      <path
                        d="M19.8284 4.97161L19.8284 9.93937C19.8284 10.5252 20.3033 11 20.8891 11C21.4749 11 21.9497 10.5252 21.9497 9.93937L21.9497 3.05029C21.9497 2.498 21.502 2.05028 20.9497 2.05028L14.0607 2.05027C13.4749 2.05027 13 2.52514 13 3.11094C13 3.69673 13.4749 4.17161 14.0607 4.17161L19.0284 4.17161C19.4702 4.17161 19.8284 4.52978 19.8284 4.97161Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </button>
                {/*end::Action*/}
              </div>
              {/*end::Item*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::List widget 2*/}
        </div>
        {/*end::Col*/}
      </div>
      {/*end::Row*/}
      {/*begin::Row*/}
      <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
        {/*begin::Col*/}
        <div className="col-xl-6">
          {/*begin::Engage widget 1*/}
          <div className="card h-xl-100" dir="ltr">
            {/*begin::Body*/}
            <div className="card-body d-flex flex-column flex-center">
              {/*begin::Heading*/}
              <div className="mb-2">
                {/*begin::Title*/}
                <h1 className="fw-semibold text-gray-800 text-center lh-lg">
                  Have you tried
                  <br />
                  new
                  <span className="fw-bolder">Invoice Manager?</span>
                </h1>
                {/*end::Title*/}
                {/*begin::Illustration*/}
                <div className="py-10 text-center">
                  <img
                    src="assets/media/svg/illustrations/easy/2.svg"
                    className="theme-light-show w-200px"
                    alt=""
                  />
                  <img
                    src="assets/media/svg/illustrations/easy/2-dark.svg"
                    className="theme-dark-show w-200px"
                    alt=""
                  />
                </div>
                {/*end::Illustration*/}
              </div>
              {/*end::Heading*/}
              {/*begin::Links*/}
              <div className="text-center mb-1">
                {/*begin::Link*/}
                <a
                  className="btn btn-sm btn-primary me-2"
                  data-bs-target="#kt_modal_new_card"
                  data-bs-toggle="modal"
                >
                  Try now
                </a>
                {/*end::Link*/}
                {/*begin::Link*/}
                <a
                  className="btn btn-sm btn-light"
                  href="../../demo1/dist/pages/user-profile/followers.html"
                >
                  Learn more
                </a>
                {/*end::Link*/}
              </div>
              {/*end::Links*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::Engage widget 1*/}
        </div>
        {/*end::Col*/}
        {/*begin::Col*/}
        <div className="col-xl-6">
          {/*begin::Lists Widget 19*/}
          <div className="card card-flush h-xl-100">
            {/*begin::Heading*/}
            <div
              className="card-header rounded bgi-no-repeat bgi-size-cover bgi-position-y-top bgi-position-x-center align-items-start h-250px"
              style={{
                backgroundImage: 'url("assets/media/svg/shapes/top-green.png',
              }}
              data-bs-theme="light"
            >
              {/*begin::Title*/}
              <h3 className="card-title align-items-start flex-column text-white pt-15">
                <span className="fw-bold fs-2x mb-3">My Tasks</span>
                <div className="fs-4 text-white">
                  <span className="opacity-75">You have</span>
                  <span className="position-relative d-inline-block">
                    <a
                      href="../../demo1/dist/pages/user-profile/projects.html"
                      className="link-white opacity-75-hover fw-bold d-block mb-1"
                    >
                      4 tasks
                    </a>
                    {/*begin::Separator*/}
                    <span className="position-absolute opacity-50 bottom-0 start-0 border-2 border-body border-bottom w-100" />
                    {/*end::Separator*/}
                  </span>
                  <span className="opacity-75">to comlete</span>
                </div>
              </h3>
              {/*end::Title*/}
              {/*begin::Toolbar*/}
              <div className="card-toolbar pt-5">
                {/*begin::Menu*/}
                <button
                  className="btn btn-sm btn-icon btn-active-color-primary btn-color-white bg-white bg-opacity-25 bg-hover-opacity-100 bg-hover-white bg-active-opacity-25 w-20px h-20px"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-overflow="true"
                >
                  {/*begin::Svg Icon | path: icons/duotune/general/gen052.svg*/}
                  <span className="svg-icon svg-icon-4">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x={10}
                        y={10}
                        width={4}
                        height={4}
                        rx={2}
                        fill="currentColor"
                      />
                      <rect
                        x={17}
                        y={10}
                        width={4}
                        height={4}
                        rx={2}
                        fill="currentColor"
                      />
                      <rect
                        x={3}
                        y={10}
                        width={4}
                        height={4}
                        rx={2}
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </button>
                {/*begin::Menu 2*/}
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                  data-kt-menu="true"
                >
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                      Quick Actions
                    </div>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator mb-3 opacity-75" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">
                      New Ticket
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">
                      New Customer
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div
                    className="menu-item px-3"
                    data-kt-menu-trigger="hover"
                    data-kt-menu-placement="right-start"
                  >
                    {/*begin::Menu item*/}
                    <a href="#" className="menu-link px-3">
                      <span className="menu-title">New Group</span>
                      <span className="menu-arrow" />
                    </a>
                    {/*end::Menu item*/}
                    {/*begin::Menu sub*/}
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          Admin Group
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          Staff Group
                        </a>
                      </div>
                      {/*end::Menu item*/}
                      {/*begin::Menu item*/}
                      <div className="menu-item px-3">
                        <a href="#" className="menu-link px-3">
                          Member Group
                        </a>
                      </div>
                      {/*end::Menu item*/}
                    </div>
                    {/*end::Menu sub*/}
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a href="#" className="menu-link px-3">
                      New Contact
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu separator*/}
                  <div className="separator mt-3 opacity-75" />
                  {/*end::Menu separator*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <div className="menu-content px-3 py-3">
                      <a className="btn btn-primary btn-sm px-4" href="#">
                        Generate Reports
                      </a>
                    </div>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu 2*/}
                {/*end::Menu*/}
              </div>
              {/*end::Toolbar*/}
            </div>
            {/*end::Heading*/}
            {/*begin::Body*/}
            <div className="card-body mt-n20">
              {/*begin::Stats*/}
              <div className="mt-n20 position-relative">
                {/*begin::Row*/}
                <div className="row g-3 g-lg-6">
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Items*/}
                    <div className="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5">
                      {/*begin::Symbol*/}
                      <div className="symbol symbol-30px me-5 mb-8">
                        <span className="symbol-label">
                          {/*begin::Svg Icon | path: icons/duotune/medicine/med005.svg*/}
                          <span className="svg-icon svg-icon-1 svg-icon-primary">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                d="M17.9061 13H11.2061C11.2061 12.4 10.8061 12 10.2061 12C9.60605 12 9.20605 12.4 9.20605 13H6.50606L9.20605 8.40002V4C8.60605 4 8.20605 3.6 8.20605 3C8.20605 2.4 8.60605 2 9.20605 2H15.2061C15.8061 2 16.2061 2.4 16.2061 3C16.2061 3.6 15.8061 4 15.2061 4V8.40002L17.9061 13ZM13.2061 9C12.6061 9 12.2061 9.4 12.2061 10C12.2061 10.6 12.6061 11 13.2061 11C13.8061 11 14.2061 10.6 14.2061 10C14.2061 9.4 13.8061 9 13.2061 9Z"
                                fill="currentColor"
                              />
                              <path
                                d="M18.9061 22H5.40605C3.60605 22 2.40606 20 3.30606 18.4L6.40605 13H9.10605C9.10605 13.6 9.50605 14 10.106 14C10.706 14 11.106 13.6 11.106 13H17.8061L20.9061 18.4C21.9061 20 20.8061 22 18.9061 22ZM14.2061 15C13.1061 15 12.2061 15.9 12.2061 17C12.2061 18.1 13.1061 19 14.2061 19C15.3061 19 16.2061 18.1 16.2061 17C16.2061 15.9 15.3061 15 14.2061 15Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                      </div>
                      {/*end::Symbol*/}
                      {/*begin::Stats*/}
                      <div className="m-0">
                        {/*begin::Number*/}
                        <span className="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1">
                          37
                        </span>
                        {/*end::Number*/}
                        {/*begin::Desc*/}
                        <span className="text-gray-500 fw-semibold fs-6">
                          Courses
                        </span>
                        {/*end::Desc*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::Items*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Items*/}
                    <div className="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5">
                      {/*begin::Symbol*/}
                      <div className="symbol symbol-30px me-5 mb-8">
                        <span className="symbol-label">
                          {/*begin::Svg Icon | path: icons/duotune/finance/fin001.svg*/}
                          <span className="svg-icon svg-icon-1 svg-icon-primary">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 19.725V18.725C20 18.125 19.6 17.725 19 17.725H5C4.4 17.725 4 18.125 4 18.725V19.725H3C2.4 19.725 2 20.125 2 20.725V21.725H22V20.725C22 20.125 21.6 19.725 21 19.725H20Z"
                                fill="currentColor"
                              />
                              <path
                                opacity="0.3"
                                d="M22 6.725V7.725C22 8.325 21.6 8.725 21 8.725H18C18.6 8.725 19 9.125 19 9.725C19 10.325 18.6 10.725 18 10.725V15.725C18.6 15.725 19 16.125 19 16.725V17.725H15V16.725C15 16.125 15.4 15.725 16 15.725V10.725C15.4 10.725 15 10.325 15 9.725C15 9.125 15.4 8.725 16 8.725H13C13.6 8.725 14 9.125 14 9.725C14 10.325 13.6 10.725 13 10.725V15.725C13.6 15.725 14 16.125 14 16.725V17.725H10V16.725C10 16.125 10.4 15.725 11 15.725V10.725C10.4 10.725 10 10.325 10 9.725C10 9.125 10.4 8.725 11 8.725H8C8.6 8.725 9 9.125 9 9.725C9 10.325 8.6 10.725 8 10.725V15.725C8.6 15.725 9 16.125 9 16.725V17.725H5V16.725C5 16.125 5.4 15.725 6 15.725V10.725C5.4 10.725 5 10.325 5 9.725C5 9.125 5.4 8.725 6 8.725H3C2.4 8.725 2 8.325 2 7.725V6.725L11 2.225C11.6 1.925 12.4 1.925 13.1 2.225L22 6.725ZM12 3.725C11.2 3.725 10.5 4.425 10.5 5.225C10.5 6.025 11.2 6.725 12 6.725C12.8 6.725 13.5 6.025 13.5 5.225C13.5 4.425 12.8 3.725 12 3.725Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                      </div>
                      {/*end::Symbol*/}
                      {/*begin::Stats*/}
                      <div className="m-0">
                        {/*begin::Number*/}
                        <span className="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1">
                          6
                        </span>
                        {/*end::Number*/}
                        {/*begin::Desc*/}
                        <span className="text-gray-500 fw-semibold fs-6">
                          Certificates
                        </span>
                        {/*end::Desc*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::Items*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Items*/}
                    <div className="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5">
                      {/*begin::Symbol*/}
                      <div className="symbol symbol-30px me-5 mb-8">
                        <span className="symbol-label">
                          {/*begin::Svg Icon | path: icons/duotune/general/gen020.svg*/}
                          <span className="svg-icon svg-icon-1 svg-icon-primary">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14 18V16H10V18L9 20H15L14 18Z"
                                fill="currentColor"
                              />
                              <path
                                opacity="0.3"
                                d="M20 4H17V3C17 2.4 16.6 2 16 2H8C7.4 2 7 2.4 7 3V4H4C3.4 4 3 4.4 3 5V9C3 11.2 4.8 13 7 13C8.2 14.2 8.8 14.8 10 16H14C15.2 14.8 15.8 14.2 17 13C19.2 13 21 11.2 21 9V5C21 4.4 20.6 4 20 4ZM5 9V6H7V11C5.9 11 5 10.1 5 9ZM19 9C19 10.1 18.1 11 17 11V6H19V9ZM17 21V22H7V21C7 20.4 7.4 20 8 20H16C16.6 20 17 20.4 17 21ZM10 9C9.4 9 9 8.6 9 8V5C9 4.4 9.4 4 10 4C10.6 4 11 4.4 11 5V8C11 8.6 10.6 9 10 9ZM10 13C9.4 13 9 12.6 9 12V11C9 10.4 9.4 10 10 10C10.6 10 11 10.4 11 11V12C11 12.6 10.6 13 10 13Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                      </div>
                      {/*end::Symbol*/}
                      {/*begin::Stats*/}
                      <div className="m-0">
                        {/*begin::Number*/}
                        <span className="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1">
                          4,7
                        </span>
                        {/*end::Number*/}
                        {/*begin::Desc*/}
                        <span className="text-gray-500 fw-semibold fs-6">
                          Avg. Score
                        </span>
                        {/*end::Desc*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::Items*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Items*/}
                    <div className="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5">
                      {/*begin::Symbol*/}
                      <div className="symbol symbol-30px me-5 mb-8">
                        <span className="symbol-label">
                          {/*begin::Svg Icon | path: icons/duotune/general/gen013.svg*/}
                          <span className="svg-icon svg-icon-1 svg-icon-primary">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                d="M20.9 12.9C20.3 12.9 19.9 12.5 19.9 11.9C19.9 11.3 20.3 10.9 20.9 10.9H21.8C21.3 6.2 17.6 2.4 12.9 2V2.9C12.9 3.5 12.5 3.9 11.9 3.9C11.3 3.9 10.9 3.5 10.9 2.9V2C6.19999 2.5 2.4 6.2 2 10.9H2.89999C3.49999 10.9 3.89999 11.3 3.89999 11.9C3.89999 12.5 3.49999 12.9 2.89999 12.9H2C2.5 17.6 6.19999 21.4 10.9 21.8V20.9C10.9 20.3 11.3 19.9 11.9 19.9C12.5 19.9 12.9 20.3 12.9 20.9V21.8C17.6 21.3 21.4 17.6 21.8 12.9H20.9Z"
                                fill="currentColor"
                              />
                              <path
                                d="M16.9 10.9H13.6C13.4 10.6 13.2 10.4 12.9 10.2V5.90002C12.9 5.30002 12.5 4.90002 11.9 4.90002C11.3 4.90002 10.9 5.30002 10.9 5.90002V10.2C10.6 10.4 10.4 10.6 10.2 10.9H9.89999C9.29999 10.9 8.89999 11.3 8.89999 11.9C8.89999 12.5 9.29999 12.9 9.89999 12.9H10.2C10.4 13.2 10.6 13.4 10.9 13.6V13.9C10.9 14.5 11.3 14.9 11.9 14.9C12.5 14.9 12.9 14.5 12.9 13.9V13.6C13.2 13.4 13.4 13.2 13.6 12.9H16.9C17.5 12.9 17.9 12.5 17.9 11.9C17.9 11.3 17.5 10.9 16.9 10.9Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </span>
                      </div>
                      {/*end::Symbol*/}
                      {/*begin::Stats*/}
                      <div className="m-0">
                        {/*begin::Number*/}
                        <span className="text-gray-700 fw-bolder d-block fs-2qx lh-1 ls-n1 mb-1">
                          822
                        </span>
                        {/*end::Number*/}
                        {/*begin::Desc*/}
                        <span className="text-gray-500 fw-semibold fs-6">
                          Hours Learned
                        </span>
                        {/*end::Desc*/}
                      </div>
                      {/*end::Stats*/}
                    </div>
                    {/*end::Items*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
              </div>
              {/*end::Stats*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::Lists Widget 19*/}
        </div>
        {/*end::Col*/}
      </div>
      {/*end::Row*/}
      {/*begin::Row*/}
      <div className="row g-5 g-xl-10">
        {/*begin::Col*/}
        <div className="col-xxl-6">
          {/*begin::List widget 20*/}
          <div className="card h-xl-100">
            {/*begin::Header*/}
            <div className="card-header border-0 pt-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-dark">
                  Recommended for you
                </span>
                <span className="text-muted mt-1 fw-semibold fs-7">
                  8k social visitors
                </span>
              </h3>
              {/*begin::Toolbar*/}
              <div className="card-toolbar">
                <a href="#" className="btn btn-sm btn-light">
                  All Courses
                </a>
              </div>
              {/*end::Toolbar*/}
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="card-body pt-6">
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Symbol*/}
                <div className="symbol symbol-40px me-4">
                  <div className="symbol-label fs-2 fw-semibold bg-danger text-inverse-danger">
                    M
                  </div>
                </div>
                {/*end::Symbol*/}
                {/*begin::Section*/}
                <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                  {/*begin:Author*/}
                  <div className="flex-grow-1 me-2">
                    <a
                      href="../../demo1/dist/pages/user-profile/overview.html"
                      className="text-gray-800 text-hover-primary fs-6 fw-bold"
                    >
                      UI/UX Design
                    </a>
                    <span className="text-muted fw-semibold d-block fs-7">
                      40+ Courses
                    </span>
                  </div>
                  {/*end:Author*/}
                  {/*begin::Actions*/}
                  <a
                    href="#"
                    className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                  >
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                    <span className="svg-icon svg-icon-2">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.5"
                          x={18}
                          y={13}
                          width={13}
                          height={2}
                          rx={1}
                          transform="rotate(-180 18 13)"
                          fill="currentColor"
                        />
                        <path
                          d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </a>
                  {/*begin::Actions*/}
                </div>
                {/*end::Section*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-4" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Symbol*/}
                <div className="symbol symbol-40px me-4">
                  <div className="symbol-label fs-2 fw-semibold bg-success text-inverse-success">
                    Q
                  </div>
                </div>
                {/*end::Symbol*/}
                {/*begin::Section*/}
                <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                  {/*begin:Author*/}
                  <div className="flex-grow-1 me-2">
                    <a
                      href="../../demo1/dist/pages/user-profile/overview.html"
                      className="text-gray-800 text-hover-primary fs-6 fw-bold"
                    >
                      QA Analysis
                    </a>
                    <span className="text-muted fw-semibold d-block fs-7">
                      18 Courses
                    </span>
                  </div>
                  {/*end:Author*/}
                  {/*begin::Actions*/}
                  <a
                    href="#"
                    className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                  >
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                    <span className="svg-icon svg-icon-2">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.5"
                          x={18}
                          y={13}
                          width={13}
                          height={2}
                          rx={1}
                          transform="rotate(-180 18 13)"
                          fill="currentColor"
                        />
                        <path
                          d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </a>
                  {/*begin::Actions*/}
                </div>
                {/*end::Section*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-4" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Symbol*/}
                <div className="symbol symbol-40px me-4">
                  <div className="symbol-label fs-2 fw-semibold bg-info text-inverse-info">
                    W
                  </div>
                </div>
                {/*end::Symbol*/}
                {/*begin::Section*/}
                <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                  {/*begin:Author*/}
                  <div className="flex-grow-1 me-2">
                    <a
                      href="../../demo1/dist/pages/user-profile/overview.html"
                      className="text-gray-800 text-hover-primary fs-6 fw-bold"
                    >
                      Web Development
                    </a>
                    <span className="text-muted fw-semibold d-block fs-7">
                      120+ Courses
                    </span>
                  </div>
                  {/*end:Author*/}
                  {/*begin::Actions*/}
                  <a
                    href="#"
                    className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                  >
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                    <span className="svg-icon svg-icon-2">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.5"
                          x={18}
                          y={13}
                          width={13}
                          height={2}
                          rx={1}
                          transform="rotate(-180 18 13)"
                          fill="currentColor"
                        />
                        <path
                          d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </a>
                  {/*begin::Actions*/}
                </div>
                {/*end::Section*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-4" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Symbol*/}
                <div className="symbol symbol-40px me-4">
                  <div className="symbol-label fs-2 fw-semibold bg-primary text-inverse-primary">
                    M
                  </div>
                </div>
                {/*end::Symbol*/}
                {/*begin::Section*/}
                <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                  {/*begin:Author*/}
                  <div className="flex-grow-1 me-2">
                    <a
                      href="../../demo1/dist/pages/user-profile/overview.html"
                      className="text-gray-800 text-hover-primary fs-6 fw-bold"
                    >
                      Marketing
                    </a>
                    <span className="text-muted fw-semibold d-block fs-7">
                      50+ Courses.
                    </span>
                  </div>
                  {/*end:Author*/}
                  {/*begin::Actions*/}
                  <a
                    href="#"
                    className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                  >
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                    <span className="svg-icon svg-icon-2">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.5"
                          x={18}
                          y={13}
                          width={13}
                          height={2}
                          rx={1}
                          transform="rotate(-180 18 13)"
                          fill="currentColor"
                        />
                        <path
                          d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </a>
                  {/*begin::Actions*/}
                </div>
                {/*end::Section*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-4" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Symbol*/}
                <div className="symbol symbol-40px me-4">
                  <div className="symbol-label fs-2 fw-semibold bg-warning text-inverse-warning">
                    P
                  </div>
                </div>
                {/*end::Symbol*/}
                {/*begin::Section*/}
                <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                  {/*begin:Author*/}
                  <div className="flex-grow-1 me-2">
                    <a
                      href="../../demo1/dist/pages/user-profile/overview.html"
                      className="text-gray-800 text-hover-primary fs-6 fw-bold"
                    >
                      Philosophy
                    </a>
                    <span className="text-muted fw-semibold d-block fs-7">
                      24+ Courses
                    </span>
                  </div>
                  {/*end:Author*/}
                  {/*begin::Actions*/}
                  <a
                    href="#"
                    className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                  >
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                    <span className="svg-icon svg-icon-2">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.5"
                          x={18}
                          y={13}
                          width={13}
                          height={2}
                          rx={1}
                          transform="rotate(-180 18 13)"
                          fill="currentColor"
                        />
                        <path
                          d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </a>
                  {/*begin::Actions*/}
                </div>
                {/*end::Section*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-4" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Symbol*/}
                <div className="symbol symbol-40px me-4">
                  <div className="symbol-label fs-2 fw-semibold bg-dark text-inverse-dark">
                    M
                  </div>
                </div>
                {/*end::Symbol*/}
                {/*begin::Section*/}
                <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                  {/*begin:Author*/}
                  <div className="flex-grow-1 me-2">
                    <a
                      href="../../demo1/dist/pages/user-profile/overview.html"
                      className="text-gray-800 text-hover-primary fs-6 fw-bold"
                    >
                      Mathematics
                    </a>
                    <span className="text-muted fw-semibold d-block fs-7">
                      24+ Courses
                    </span>
                  </div>
                  {/*end:Author*/}
                  {/*begin::Actions*/}
                  <a
                    href="#"
                    className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                  >
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                    <span className="svg-icon svg-icon-2">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.5"
                          x={18}
                          y={13}
                          width={13}
                          height={2}
                          rx={1}
                          transform="rotate(-180 18 13)"
                          fill="currentColor"
                        />
                        <path
                          d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    {/*end::Svg Icon*/}
                  </a>
                  {/*begin::Actions*/}
                </div>
                {/*end::Section*/}
              </div>
              {/*end::Item*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::List widget 20*/}
        </div>
        {/*end::Col*/}
        {/*begin::Col*/}
        <div className="col-xl-6">
          {/*begin::List widget 21*/}
          <div className="card card-flush h-xl-100">
            {/*begin::Header*/}
            <div className="card-header border-0 pt-5">
              <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold text-dark">
                  Active Lessons
                </span>
                <span className="text-muted mt-1 fw-semibold fs-7">
                  Avg. 72% completed lessons
                </span>
              </h3>
              {/*begin::Toolbar*/}
              <div className="card-toolbar">
                <a href="#" className="btn btn-sm btn-light">
                  All Lessons
                </a>
              </div>
              {/*end::Toolbar*/}
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="card-body pt-5">
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Wrapper*/}
                <div className="d-flex align-items-center me-3">
                  {/*begin::Logo*/}
                  <img
                    src="assets/media/svg/brand-logos/laravel-2.svg"
                    className="me-4 w-30px"
                    alt=""
                  />
                  {/*end::Logo*/}
                  {/*begin::Section*/}
                  <div className="flex-grow-1">
                    {/*begin::Text*/}
                    <a
                      href="#"
                      className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0"
                    >
                      Laravel
                    </a>
                    {/*end::Text*/}
                    {/*begin::Description*/}
                    <span className="text-gray-400 fw-semibold d-block fs-6">
                      PHP Framework
                    </span>
                    {/*end::Description=*/}
                  </div>
                  {/*end::Section*/}
                </div>
                {/*end::Wrapper*/}
                {/*begin::Statistics*/}
                <div className="d-flex align-items-center w-100 mw-125px">
                  {/*begin::Progress*/}
                  <div className="progress h-6px w-100 me-2 bg-light-success">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "65%" }}
                      aria-valuenow={65}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  {/*end::Progress*/}
                  {/*begin::Value*/}
                  <span className="text-gray-400 fw-semibold">65%</span>
                  {/*end::Value*/}
                </div>
                {/*end::Statistics*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-3" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Wrapper*/}
                <div className="d-flex align-items-center me-3">
                  {/*begin::Logo*/}
                  <img
                    src="assets/media/svg/brand-logos/vue-9.svg"
                    className="me-4 w-30px"
                    alt=""
                  />
                  {/*end::Logo*/}
                  {/*begin::Section*/}
                  <div className="flex-grow-1">
                    {/*begin::Text*/}
                    <a
                      href="#"
                      className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0"
                    >
                      Vue 3
                    </a>
                    {/*end::Text*/}
                    {/*begin::Description*/}
                    <span className="text-gray-400 fw-semibold d-block fs-6">
                      JS Framework
                    </span>
                    {/*end::Description=*/}
                  </div>
                  {/*end::Section*/}
                </div>
                {/*end::Wrapper*/}
                {/*begin::Statistics*/}
                <div className="d-flex align-items-center w-100 mw-125px">
                  {/*begin::Progress*/}
                  <div className="progress h-6px w-100 me-2 bg-light-warning">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "87%" }}
                      aria-valuenow={87}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  {/*end::Progress*/}
                  {/*begin::Value*/}
                  <span className="text-gray-400 fw-semibold">87%</span>
                  {/*end::Value*/}
                </div>
                {/*end::Statistics*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-3" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Wrapper*/}
                <div className="d-flex align-items-center me-3">
                  {/*begin::Logo*/}
                  <img
                    src="assets/media/svg/brand-logos/bootstrap5.svg"
                    className="me-4 w-30px"
                    alt=""
                  />
                  {/*end::Logo*/}
                  {/*begin::Section*/}
                  <div className="flex-grow-1">
                    {/*begin::Text*/}
                    <a
                      href="#"
                      className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0"
                    >
                      Bootstrap 5
                    </a>
                    {/*end::Text*/}
                    {/*begin::Description*/}
                    <span className="text-gray-400 fw-semibold d-block fs-6">
                      CSS Framework
                    </span>
                    {/*end::Description=*/}
                  </div>
                  {/*end::Section*/}
                </div>
                {/*end::Wrapper*/}
                {/*begin::Statistics*/}
                <div className="d-flex align-items-center w-100 mw-125px">
                  {/*begin::Progress*/}
                  <div className="progress h-6px w-100 me-2 bg-light-primary">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "44%" }}
                      aria-valuenow={44}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  {/*end::Progress*/}
                  {/*begin::Value*/}
                  <span className="text-gray-400 fw-semibold">44%</span>
                  {/*end::Value*/}
                </div>
                {/*end::Statistics*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-3" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Wrapper*/}
                <div className="d-flex align-items-center me-3">
                  {/*begin::Logo*/}
                  <img
                    src="assets/media/svg/brand-logos/angular-icon.svg"
                    className="me-4 w-30px"
                    alt=""
                  />
                  {/*end::Logo*/}
                  {/*begin::Section*/}
                  <div className="flex-grow-1">
                    {/*begin::Text*/}
                    <a
                      href="#"
                      className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0"
                    >
                      Angular 13
                    </a>
                    {/*end::Text*/}
                    {/*begin::Description*/}
                    <span className="text-gray-400 fw-semibold d-block fs-6">
                      JS Framework
                    </span>
                    {/*end::Description=*/}
                  </div>
                  {/*end::Section*/}
                </div>
                {/*end::Wrapper*/}
                {/*begin::Statistics*/}
                <div className="d-flex align-items-center w-100 mw-125px">
                  {/*begin::Progress*/}
                  <div className="progress h-6px w-100 me-2 bg-light-info">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  {/*end::Progress*/}
                  {/*begin::Value*/}
                  <span className="text-gray-400 fw-semibold">70%</span>
                  {/*end::Value*/}
                </div>
                {/*end::Statistics*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-3" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Wrapper*/}
                <div className="d-flex align-items-center me-3">
                  {/*begin::Logo*/}
                  <img
                    src="assets/media/svg/brand-logos/spring-3.svg"
                    className="me-4 w-30px"
                    alt=""
                  />
                  {/*end::Logo*/}
                  {/*begin::Section*/}
                  <div className="flex-grow-1">
                    {/*begin::Text*/}
                    <a
                      href="#"
                      className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0"
                    >
                      Spring
                    </a>
                    {/*end::Text*/}
                    {/*begin::Description*/}
                    <span className="text-gray-400 fw-semibold d-block fs-6">
                      Java Framework
                    </span>
                    {/*end::Description=*/}
                  </div>
                  {/*end::Section*/}
                </div>
                {/*end::Wrapper*/}
                {/*begin::Statistics*/}
                <div className="d-flex align-items-center w-100 mw-125px">
                  {/*begin::Progress*/}
                  <div className="progress h-6px w-100 me-2 bg-light-danger">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "56%" }}
                      aria-valuenow={56}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  {/*end::Progress*/}
                  {/*begin::Value*/}
                  <span className="text-gray-400 fw-semibold">56%</span>
                  {/*end::Value*/}
                </div>
                {/*end::Statistics*/}
              </div>
              {/*end::Item*/}
              {/*begin::Separator*/}
              <div className="separator separator-dashed my-3" />
              {/*end::Separator*/}
              {/*begin::Item*/}
              <div className="d-flex flex-stack">
                {/*begin::Wrapper*/}
                <div className="d-flex align-items-center me-3">
                  {/*begin::Logo*/}
                  <img
                    src="assets/media/svg/brand-logos/typescript-1.svg"
                    className="me-4 w-30px"
                    alt=""
                  />
                  {/*end::Logo*/}
                  {/*begin::Section*/}
                  <div className="flex-grow-1">
                    {/*begin::Text*/}
                    <a
                      href="#"
                      className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0"
                    >
                      TypeScript
                    </a>
                    {/*end::Text*/}
                    {/*begin::Description*/}
                    <span className="text-gray-400 fw-semibold d-block fs-6">
                      Better Tooling
                    </span>
                    {/*end::Description=*/}
                  </div>
                  {/*end::Section*/}
                </div>
                {/*end::Wrapper*/}
                {/*begin::Statistics*/}
                <div className="d-flex align-items-center w-100 mw-125px">
                  {/*begin::Progress*/}
                  <div className="progress h-6px w-100 me-2 bg-light-success">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "82%" }}
                      aria-valuenow={82}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  {/*end::Progress*/}
                  {/*begin::Value*/}
                  <span className="text-gray-400 fw-semibold">82%</span>
                  {/*end::Value*/}
                </div>
                {/*end::Statistics*/}
              </div>
              {/*end::Item*/}
            </div>
            {/*end::Body*/}
          </div>
          {/*end::List widget 21*/}
        </div>
        {/*end::Col*/}
      </div>
      {/*end::Row*/}
    </div>
  );
};

export default FreelancerProfile;
