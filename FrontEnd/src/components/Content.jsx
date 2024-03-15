import Toolbar from "./Toolbar";

const Content = () => {
    return (
        <>
        <Toolbar />
                    <div id="kt_app_content" className="app-content flex-column-fluid">
              <div
                id="kt_app_content_container"
                className="app-container container-fluid"
              >
                <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
                  <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
                    <div
                      className="card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end h-md-50 mb-5 mb-xl-10"
                      style={{
                        backgroundColor: "#3E97FF",
                        backgroundImage:
                          'url("assets/img/media/svg/shapes/widget-bg-1.png")'
                      }}
                    >
                      <div className="card-header pt-5">
                        <div className="card-title d-flex flex-column">
                          <span className="fs-2hx fw-bold text-white me-2 lh-1 ls-n2">
                            69
                          </span>
                          <span className="text-white opacity-75 pt-1 fw-semibold fs-6">
                            Active Projects in April
                          </span>
                        </div>
                      </div>
                      <div className="card-body d-flex align-items-end pt-0">
                        <div className="d-flex align-items-center flex-column mt-3 w-100">
                          <div className="d-flex justify-content-between fw-bold fs-6 text-white opacity-75 w-100 mt-auto mb-2">
                            <span>43 Pending</span>
                            <span>72%</span>
                          </div>
                          <div className="h-8px mx-3 w-100 bg-white bg-opacity-50 rounded">
                            <div
                              className="bg-white rounded h-8px"
                              role="progressbar"
                              style={{ width: "72%" }}
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card card-flush h-md-50 mb-5 mb-xl-10">
                      <div className="card-header pt-5">
                        <h3 className="card-title text-gray-800 fw-bold">
                          External Links
                        </h3>
                        <div className="card-toolbar">
                          <button
                            className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end"
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end"
                            data-kt-menu-overflow="true"
                          >
                            <span className="svg-icon svg-icon-1 svg-icon-gray-300 me-n1">
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
                          </button>
                          <div
                            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                            data-kt-menu="true"
                          >
                            <div className="menu-item px-3">
                              <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                                Quick Actions
                              </div>
                            </div>
                            <div className="separator mb-3 opacity-75" />
                            <div className="menu-item px-3">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="menu-link px-3"
                              >
                                New Ticket
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="menu-link px-3"
                              >
                                New Customer
                              </a>
                            </div>
                            <div
                              className="menu-item px-3"
                              data-kt-menu-trigger="hover"
                              data-kt-menu-placement="right-start"
                            >
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="menu-link px-3"
                              >
                                <span className="menu-title">New Group</span>
                                <span className="menu-arrow" />
                              </a>
                              <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                <div className="menu-item px-3">
                                  <a
                                    href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                    className="menu-link px-3"
                                  >
                                    Admin Group
                                  </a>
                                </div>
                                <div className="menu-item px-3">
                                  <a
                                    href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                    className="menu-link px-3"
                                  >
                                    Staff Group
                                  </a>
                                </div>
                                <div className="menu-item px-3">
                                  <a
                                    href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                    className="menu-link px-3"
                                  >
                                    Member Group
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="menu-item px-3">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="menu-link px-3"
                              >
                                New Contact
                              </a>
                            </div>
                            <div className="separator mt-3 opacity-75" />
                            <div className="menu-item px-3">
                              <div className="menu-content px-3 py-3">
                                <a
                                  className="btn btn-primary btn-sm px-4"
                                  href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                >
                                  Generate Reports
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body pt-5">
                        <div className="d-flex flex-stack">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="text-primary fw-semibold fs-6 me-2"
                          >
                            Avg. Client Rating
                          </a>
                          <button
                            type="button"
                            className="btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary justify-content-end"
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
                          </button>
                        </div>
                        <div className="separator separator-dashed my-3" />
                        <div className="d-flex flex-stack">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="text-primary fw-semibold fs-6 me-2"
                          >
                            Instagram Followers
                          </a>
                          <button
                            type="button"
                            className="btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary justify-content-end"
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
                          </button>
                        </div>
                        <div className="separator separator-dashed my-3" />
                        <div className="d-flex flex-stack">
                          <a
                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                            className="text-primary fw-semibold fs-6 me-2"
                          >
                            Google Ads CPC
                          </a>
                          <button
                            type="button"
                            className="btn btn-icon btn-sm h-auto btn-color-gray-400 btn-active-color-primary justify-content-end"
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
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10">
                    <div className="card card-flush h-md-50 mb-5 mb-xl-10">
                      <div className="card-header pt-5">
                        <div className="card-title d-flex flex-column">
                          <div className="d-flex align-items-center">
                            <span className="fs-4 fw-semibold text-gray-400 me-1 align-self-start">
                              $
                            </span>
                            <span className="fs-2hx fw-bold text-dark me-2 lh-1 ls-n2">
                              69,700
                            </span>
                            <span className="badge badge-light-success fs-base">
                              <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.5"
                                    x={13}
                                    y={6}
                                    width={13}
                                    height={2}
                                    rx={1}
                                    transform="rotate(90 13 6)"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              2.2%
                            </span>
                          </div>
                          <span className="text-gray-400 pt-1 fw-semibold fs-6">
                            Projects Earnings in April
                          </span>
                        </div>
                      </div>
                      <div className="card-body pt-2 pb-4 d-flex flex-wrap align-items-center">
                        <div className="d-flex flex-center me-5 pt-2">
                          <div
                            id="kt_card_widget_17_chart"
                            style={{ minWidth: 70, minHeight: 70 }}
                            data-kt-size={70}
                            data-kt-line={11}
                          >
                            <span />
                            <canvas height={70} width={70} />
                          </div>
                        </div>
                        <div className="d-flex flex-column content-justify-center flex-row-fluid">
                          <div className="d-flex fw-semibold align-items-center">
                            <div className="bullet w-8px h-3px rounded-2 bg-success me-3" />
                            <div className="text-gray-500 flex-grow-1 me-4">
                              Leaf CRM
                            </div>
                            <div className="fw-bolder text-gray-700 text-xxl-end">
                              $7,660
                            </div>
                          </div>
                          <div className="d-flex fw-semibold align-items-center my-3">
                            <div className="bullet w-8px h-3px rounded-2 bg-primary me-3" />
                            <div className="text-gray-500 flex-grow-1 me-4">
                              Mivy App
                            </div>
                            <div className="fw-bolder text-gray-700 text-xxl-end">
                              $2,820
                            </div>
                          </div>
                          <div className="d-flex fw-semibold align-items-center">
                            <div
                              className="bullet w-8px h-3px rounded-2 me-3"
                              style={{ backgroundColor: "#E4E6EF" }}
                            />
                            <div className="text-gray-500 flex-grow-1 me-4">
                              Others
                            </div>
                            <div className="fw-bolder text-gray-700 text-xxl-end">
                              $45,257
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card card-flush h-lg-50">
                      <div className="card-header pt-5">
                        <h3 className="card-title text-gray-800">Highlights</h3>
                        <div className="card-toolbar d-none">
                          <div
                            data-kt-daterangepicker="true"
                            data-kt-daterangepicker-opens="left"
                            className="btn btn-sm btn-light d-flex align-items-center px-4"
                            data-kt-initialized={1}
                          >
                            <div className="text-gray-600 fw-bold">
                              8 Feb 2024 - 8 Mar 2024
                            </div>
                            <span className="svg-icon svg-icon-1 ms-2 me-0">
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
                          </div>
                        </div>
                      </div>
                      <div className="card-body pt-5">
                        <div className="d-flex flex-stack">
                          <div className="text-gray-700 fw-semibold fs-6 me-2">
                            Avg. Client Rating
                          </div>
                          <div className="d-flex align-items-senter">
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
                            <span className="text-gray-900 fw-bolder fs-6">
                              7.8
                            </span>
                            <span className="text-gray-400 fw-bold fs-6">
                              /10
                            </span>
                          </div>
                        </div>
                        <div className="separator separator-dashed my-3" />
                        <div className="d-flex flex-stack">
                          <div className="text-gray-700 fw-semibold fs-6 me-2">
                            Avg. Quotes
                          </div>
                          <div className="d-flex align-items-senter">
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
                            <span className="text-gray-900 fw-bolder fs-6">
                              730
                            </span>
                          </div>
                        </div>
                        <div className="separator separator-dashed my-3" />
                        <div className="d-flex flex-stack">
                          <div className="text-gray-700 fw-semibold fs-6 me-2">
                            Avg. Agent Earnings
                          </div>
                          <div className="d-flex align-items-senter">
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
                            <span className="text-gray-900 fw-bolder fs-6">
                              $2,309
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6">
                    <div className="card card-flush h-md-100">
                      <div className="card-header pt-5">
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bold text-gray-800">
                            Authors Achievements
                          </span>
                          <span className="text-gray-400 mt-1 fw-semibold fs-6">
                            Avg. 69.34% Conv. Rate
                          </span>
                        </h3>
                        <div className="card-toolbar">
                          <button
                            className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end"
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end"
                            data-kt-menu-overflow="true"
                          >
                            <span className="svg-icon svg-icon-1 svg-icon-gray-300 me-n1">
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
                          </button>
                          <div
                            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                            data-kt-menu="true"
                          >
                            <div className="menu-item px-3">
                              <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                                Quick Actions
                              </div>
                            </div>
                            <div className="separator mb-3 opacity-75" />
                            <div className="menu-item px-3">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="menu-link px-3"
                              >
                                New Ticket
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="menu-link px-3"
                              >
                                New Customer
                              </a>
                            </div>
                            <div
                              className="menu-item px-3"
                              data-kt-menu-trigger="hover"
                              data-kt-menu-placement="right-start"
                            >
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="menu-link px-3"
                              >
                                <span className="menu-title">New Group</span>
                                <span className="menu-arrow" />
                              </a>
                              <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                <div className="menu-item px-3">
                                  <a
                                    href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                    className="menu-link px-3"
                                  >
                                    Admin Group
                                  </a>
                                </div>
                                <div className="menu-item px-3">
                                  <a
                                    href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                    className="menu-link px-3"
                                  >
                                    Staff Group
                                  </a>
                                </div>
                                <div className="menu-item px-3">
                                  <a
                                    href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                    className="menu-link px-3"
                                  >
                                    Member Group
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="menu-item px-3">
                              <a
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                className="menu-link px-3"
                              >
                                New Contact
                              </a>
                            </div>
                            <div className="separator mt-3 opacity-75" />
                            <div className="menu-item px-3">
                              <div className="menu-content px-3 py-3">
                                <a
                                  className="btn btn-primary btn-sm px-4"
                                  href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                >
                                  Generate Reports
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body pt-6">
                        <ul
                          className="nav nav-pills nav-pills-custom mb-3"
                          role="tablist"
                        >
                          <li
                            className="nav-item mb-3 me-3 me-lg-6"
                            role="presentation"
                          >
                            <a
                              className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2 active"
                              id="kt_stats_widget_16_tab_link_1"
                              data-bs-toggle="pill"
                              href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#kt_stats_widget_16_tab_1"
                              aria-selected="true"
                              role="tab"
                            >
                              <div className="nav-icon mb-3">
                                <i className="fonticon-drive fs-1 p-0" />
                              </div>
                              <span className="nav-text text-gray-800 fw-bold fs-6 lh-1">
                                SaaS
                              </span>
                              <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                            </a>
                          </li>
                          <li
                            className="nav-item mb-3 me-3 me-lg-6"
                            role="presentation"
                          >
                            <a
                              className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2"
                              id="kt_stats_widget_16_tab_link_2"
                              data-bs-toggle="pill"
                              href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#kt_stats_widget_16_tab_2"
                              aria-selected="false"
                              tabIndex={-1}
                              role="tab"
                            >
                              <div className="nav-icon mb-3">
                                <i className="fonticon-bank fs-1 p-0" />
                              </div>
                              <span className="nav-text text-gray-800 fw-bold fs-6 lh-1">
                                Crypto
                              </span>
                              <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                            </a>
                          </li>
                          <li
                            className="nav-item mb-3 me-3 me-lg-6"
                            role="presentation"
                          >
                            <a
                              className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2"
                              id="kt_stats_widget_16_tab_link_3"
                              data-bs-toggle="pill"
                              href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#kt_stats_widget_16_tab_3"
                              aria-selected="false"
                              tabIndex={-1}
                              role="tab"
                            >
                              <div className="nav-icon mb-3">
                                <i className="fonticon-like-1 fs-1 p-0" />
                              </div>
                              <span className="nav-text text-gray-800 fw-bold fs-6 lh-1">
                                Social
                              </span>
                              <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                            </a>
                          </li>
                          <li
                            className="nav-item mb-3 me-3 me-lg-6"
                            role="presentation"
                          >
                            <a
                              className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2"
                              id="kt_stats_widget_16_tab_link_4"
                              data-bs-toggle="pill"
                              href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#kt_stats_widget_16_tab_4"
                              aria-selected="false"
                              tabIndex={-1}
                              role="tab"
                            >
                              <div className="nav-icon mb-3">
                                <i className="fonticon-remote-control fs-1 p-0" />
                              </div>
                              <span className="nav-text text-gray-800 fw-bold fs-6 lh-1">
                                Mobile
                              </span>
                              <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                            </a>
                          </li>
                          <li
                            className="nav-item mb-3 me-3 me-lg-6"
                            role="presentation"
                          >
                            <a
                              className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2"
                              id="kt_stats_widget_16_tab_link_5"
                              data-bs-toggle="pill"
                              href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#kt_stats_widget_16_tab_5"
                              aria-selected="false"
                              tabIndex={-1}
                              role="tab"
                            >
                              <div className="nav-icon mb-3">
                                <i className="fonticon-telegram fs-1 p-0" />
                              </div>
                              <span className="nav-text text-gray-800 fw-bold fs-6 lh-1">
                                Others
                              </span>
                              <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <div
                            className="tab-pane fade show active"
                            id="kt_stats_widget_16_tab_1"
                            role="tabpanel"
                            aria-labelledby="#kt_stats_widget_16_tab_link_1"
                          >
                            <div className="table-responsive">
                              <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                <thead>
                                  <tr className="fs-7 fw-bold text-gray-400 border-bottom-0">
                                    <th className="p-0 pb-3 min-w-150px text-start">
                                      AUTHOR
                                    </th>
                                    <th className="p-0 pb-3 min-w-100px text-end pe-13">
                                      CONV.
                                    </th>
                                    <th className="p-0 pb-3 w-125px text-end pe-7">
                                      CHART
                                    </th>
                                    <th className="p-0 pb-3 w-50px text-end">
                                      VIEW
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/img/300-3.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Guy Hawkins
                                          </a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">
                                            Haiti
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        78.34%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_1_1"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                        style={{ minHeight: 50 }}
                                      >
                                        <div
                                          id="apexchartss5drecy8"
                                          className="apexcharts-canvas apexchartss5drecy8 apexcharts-theme-light"
                                          style={{
                                            width: "92.25px",
                                            height: 50
                                          }}
                                        >
                                          <svg
                                            id="SvgjsSvg1600"
                                            width="92.25"
                                            height={50}
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="1.1"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xmlns:svgjs="http://svgjs.dev"
                                            className="apexcharts-svg"
                                            xmlns:data="ApexChartsNS"
                                            transform="translate(0, 0)"
                                            style={{
                                              background: "transparent"
                                            }}
                                          >
                                            <g
                                              id="SvgjsG1602"
                                              className="apexcharts-inner apexcharts-graphical"
                                              transform="translate(0, 0)"
                                            >
                                              <defs id="SvgjsDefs1601">
                                                <clipPath id="gridRectMasks5drecy8">
                                                  <rect
                                                    id="SvgjsRect1606"
                                                    width="98.25"
                                                    height={52}
                                                    x={-3}
                                                    y={-1}
                                                    rx={0}
                                                    ry={0}
                                                    opacity={1}
                                                    strokeWidth={0}
                                                    stroke="none"
                                                    strokeDasharray={0}
                                                    fill="#fff"
                                                  />
                                                </clipPath>
                                                <clipPath id="forecastMasks5drecy8" />
                                                <clipPath id="nonForecastMasks5drecy8" />
                                                <clipPath id="gridRectMarkerMasks5drecy8">
                                                  <rect
                                                    id="SvgjsRect1607"
                                                    width="96.25"
                                                    height={54}
                                                    x={-2}
                                                    y={-2}
                                                    rx={0}
                                                    ry={0}
                                                    opacity={1}
                                                    strokeWidth={0}
                                                    stroke="none"
                                                    strokeDasharray={0}
                                                    fill="#fff"
                                                  />
                                                </clipPath>
                                              </defs>
                                              <g
                                                id="SvgjsG1614"
                                                className="apexcharts-xaxis"
                                                transform="translate(0, 0)"
                                              >
                                                <g
                                                  id="SvgjsG1615"
                                                  className="apexcharts-xaxis-texts-g"
                                                  transform="translate(0, 4)"
                                                />
                                              </g>
                                              <g
                                                id="SvgjsG1631"
                                                className="apexcharts-grid"
                                              >
                                                <g
                                                  id="SvgjsG1632"
                                                  className="apexcharts-gridlines-horizontal"
                                                  style={{ display: "none" }}
                                                >
                                                  <line
                                                    id="SvgjsLine1634"
                                                    x1={0}
                                                    y1={0}
                                                    x2="92.25"
                                                    y2={0}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1635"
                                                    x1={0}
                                                    y1={5}
                                                    x2="92.25"
                                                    y2={5}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1636"
                                                    x1={0}
                                                    y1={10}
                                                    x2="92.25"
                                                    y2={10}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1637"
                                                    x1={0}
                                                    y1={15}
                                                    x2="92.25"
                                                    y2={15}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1638"
                                                    x1={0}
                                                    y1={20}
                                                    x2="92.25"
                                                    y2={20}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1639"
                                                    x1={0}
                                                    y1={25}
                                                    x2="92.25"
                                                    y2={25}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1640"
                                                    x1={0}
                                                    y1={30}
                                                    x2="92.25"
                                                    y2={30}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1641"
                                                    x1={0}
                                                    y1={35}
                                                    x2="92.25"
                                                    y2={35}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1642"
                                                    x1={0}
                                                    y1={40}
                                                    x2="92.25"
                                                    y2={40}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1643"
                                                    x1={0}
                                                    y1={45}
                                                    x2="92.25"
                                                    y2={45}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1644"
                                                    x1={0}
                                                    y1={50}
                                                    x2="92.25"
                                                    y2={50}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                </g>
                                                <g
                                                  id="SvgjsG1633"
                                                  className="apexcharts-gridlines-vertical"
                                                  style={{ display: "none" }}
                                                />
                                                <line
                                                  id="SvgjsLine1646"
                                                  x1={0}
                                                  y1={50}
                                                  x2="92.25"
                                                  y2={50}
                                                  stroke="transparent"
                                                  strokeDasharray={0}
                                                  strokeLinecap="butt"
                                                />
                                                <line
                                                  id="SvgjsLine1645"
                                                  x1={0}
                                                  y1={1}
                                                  x2={0}
                                                  y2={50}
                                                  stroke="transparent"
                                                  strokeDasharray={0}
                                                  strokeLinecap="butt"
                                                />
                                              </g>
                                              <g
                                                id="SvgjsG1608"
                                                className="apexcharts-area-series apexcharts-plot-series"
                                              >
                                                <g
                                                  id="SvgjsG1609"
                                                  className="apexcharts-series"
                                                  seriesname="NetxProfit"
                                                  data:longestseries="true"
                                                  rel={1}
                                                  data:realindex={0}
                                                >
                                                  <path
                                                    id="SvgjsPath1612"
                                                    d="M0 50L0 36.666666666666664C2.483653846153846 36.666666666666664 4.612500000000001 41.666666666666664 7.096153846153847 41.666666666666664C9.579807692307693 41.666666666666664 11.708653846153847 37.5 14.192307692307693 37.5C16.67596153846154 37.5 18.804807692307694 32.5 21.28846153846154 32.5C23.772115384615386 32.5 25.90096153846154 45 28.384615384615387 45C30.868269230769233 45 32.997115384615384 40.83333333333333 35.48076923076923 40.83333333333333C37.96442307692308 40.83333333333333 40.09326923076924 45.833333333333336 42.57692307692308 45.833333333333336C45.06057692307692 45.833333333333336 47.18942307692308 30.833333333333332 49.67307692307693 30.833333333333332C52.156730769230776 30.833333333333332 54.28557692307693 45.833333333333336 56.769230769230774 45.833333333333336C59.252884615384616 45.833333333333336 61.38173076923077 40.83333333333333 63.86538461538462 40.83333333333333C66.34903846153847 40.83333333333333 68.47788461538462 35 70.96153846153847 35C73.44519230769231 35 75.57403846153846 44.166666666666664 78.0576923076923 44.166666666666664C80.54134615384615 44.166666666666664 82.67019230769232 32.5 85.15384615384616 32.5C87.6375 32.5 89.76634615384616 39.166666666666664 92.25 39.166666666666664C92.25 39.166666666666664 92.25 39.166666666666664 92.25 50M92.25 39.166666666666664C92.25 39.166666666666664 92.25 39.166666666666664 92.25 39.166666666666664 "
                                                    fill="rgba(255,255,255,1)"
                                                    fillOpacity={1}
                                                    strokeOpacity={1}
                                                    strokeLinecap="butt"
                                                    strokeWidth={0}
                                                    strokeDasharray={0}
                                                    className="apexcharts-area"
                                                    index={0}
                                                    clipPath="url(#gridRectMasks5drecy8)"
                                                    pathto="M 0 50L 0 36.666666666666664C 2.483653846153846 36.666666666666664 4.612500000000001 41.666666666666664 7.096153846153847 41.666666666666664C 9.579807692307693 41.666666666666664 11.708653846153847 37.5 14.192307692307693 37.5C 16.67596153846154 37.5 18.804807692307694 32.5 21.28846153846154 32.5C 23.772115384615386 32.5 25.90096153846154 45 28.384615384615387 45C 30.868269230769233 45 32.997115384615384 40.83333333333333 35.48076923076923 40.83333333333333C 37.96442307692308 40.83333333333333 40.09326923076924 45.833333333333336 42.57692307692308 45.833333333333336C 45.06057692307692 45.833333333333336 47.18942307692308 30.833333333333332 49.67307692307693 30.833333333333332C 52.156730769230776 30.833333333333332 54.28557692307693 45.833333333333336 56.769230769230774 45.833333333333336C 59.252884615384616 45.833333333333336 61.38173076923077 40.83333333333333 63.86538461538462 40.83333333333333C 66.34903846153847 40.83333333333333 68.47788461538462 35 70.96153846153847 35C 73.44519230769231 35 75.57403846153846 44.166666666666664 78.0576923076923 44.166666666666664C 80.54134615384615 44.166666666666664 82.67019230769232 32.5 85.15384615384616 32.5C 87.6375 32.5 89.76634615384616 39.166666666666664 92.25 39.166666666666664C 92.25 39.166666666666664 92.25 39.166666666666664 92.25 50M 92.25 39.166666666666664z"
                                                    pathfrom="M -1 50L -1 50L 7.096153846153847 50L 14.192307692307693 50L 21.28846153846154 50L 28.384615384615387 50L 35.48076923076923 50L 42.57692307692308 50L 49.67307692307693 50L 56.769230769230774 50L 63.86538461538462 50L 70.96153846153847 50L 78.0576923076923 50L 85.15384615384616 50L 92.25 50"
                                                  />
                                                  <path
                                                    id="SvgjsPath1613"
                                                    d="M0 36.666666666666664C2.483653846153846 36.666666666666664 4.612500000000001 41.666666666666664 7.096153846153847 41.666666666666664C9.579807692307693 41.666666666666664 11.708653846153847 37.5 14.192307692307693 37.5C16.67596153846154 37.5 18.804807692307694 32.5 21.28846153846154 32.5C23.772115384615386 32.5 25.90096153846154 45 28.384615384615387 45C30.868269230769233 45 32.997115384615384 40.83333333333333 35.48076923076923 40.83333333333333C37.96442307692308 40.83333333333333 40.09326923076924 45.833333333333336 42.57692307692308 45.833333333333336C45.06057692307692 45.833333333333336 47.18942307692308 30.833333333333332 49.67307692307693 30.833333333333332C52.156730769230776 30.833333333333332 54.28557692307693 45.833333333333336 56.769230769230774 45.833333333333336C59.252884615384616 45.833333333333336 61.38173076923077 40.83333333333333 63.86538461538462 40.83333333333333C66.34903846153847 40.83333333333333 68.47788461538462 35 70.96153846153847 35C73.44519230769231 35 75.57403846153846 44.166666666666664 78.0576923076923 44.166666666666664C80.54134615384615 44.166666666666664 82.67019230769232 32.5 85.15384615384616 32.5C87.6375 32.5 89.76634615384616 39.166666666666664 92.25 39.166666666666664C92.25 39.166666666666664 92.25 39.166666666666664 92.25 39.166666666666664 "
                                                    fill="none"
                                                    fillOpacity={1}
                                                    stroke="#50cd89"
                                                    strokeOpacity={1}
                                                    strokeLinecap="butt"
                                                    strokeWidth={2}
                                                    strokeDasharray={0}
                                                    className="apexcharts-area"
                                                    index={0}
                                                    clipPath="url(#gridRectMasks5drecy8)"
                                                    pathto="M 0 36.666666666666664C 2.483653846153846 36.666666666666664 4.612500000000001 41.666666666666664 7.096153846153847 41.666666666666664C 9.579807692307693 41.666666666666664 11.708653846153847 37.5 14.192307692307693 37.5C 16.67596153846154 37.5 18.804807692307694 32.5 21.28846153846154 32.5C 23.772115384615386 32.5 25.90096153846154 45 28.384615384615387 45C 30.868269230769233 45 32.997115384615384 40.83333333333333 35.48076923076923 40.83333333333333C 37.96442307692308 40.83333333333333 40.09326923076924 45.833333333333336 42.57692307692308 45.833333333333336C 45.06057692307692 45.833333333333336 47.18942307692308 30.833333333333332 49.67307692307693 30.833333333333332C 52.156730769230776 30.833333333333332 54.28557692307693 45.833333333333336 56.769230769230774 45.833333333333336C 59.252884615384616 45.833333333333336 61.38173076923077 40.83333333333333 63.86538461538462 40.83333333333333C 66.34903846153847 40.83333333333333 68.47788461538462 35 70.96153846153847 35C 73.44519230769231 35 75.57403846153846 44.166666666666664 78.0576923076923 44.166666666666664C 80.54134615384615 44.166666666666664 82.67019230769232 32.5 85.15384615384616 32.5C 87.6375 32.5 89.76634615384616 39.166666666666664 92.25 39.166666666666664"
                                                    pathfrom="M -1 50L -1 50L 7.096153846153847 50L 14.192307692307693 50L 21.28846153846154 50L 28.384615384615387 50L 35.48076923076923 50L 42.57692307692308 50L 49.67307692307693 50L 56.769230769230774 50L 63.86538461538462 50L 70.96153846153847 50L 78.0576923076923 50L 85.15384615384616 50L 92.25 50"
                                                    fillRule="evenodd"
                                                  />
                                                  <g
                                                    id="SvgjsG1610"
                                                    className="apexcharts-series-markers-wrap"
                                                    data:realindex={0}
                                                  />
                                                </g>
                                                <g
                                                  id="SvgjsG1611"
                                                  className="apexcharts-datalabels"
                                                  data:realindex={0}
                                                />
                                              </g>
                                              <line
                                                id="SvgjsLine1647"
                                                x1={0}
                                                y1={0}
                                                x2="92.25"
                                                y2={0}
                                                stroke="#b6b6b6"
                                                strokeDasharray={0}
                                                strokeWidth={1}
                                                strokeLinecap="butt"
                                                className="apexcharts-ycrosshairs"
                                              />
                                              <line
                                                id="SvgjsLine1648"
                                                x1={0}
                                                y1={0}
                                                x2="92.25"
                                                y2={0}
                                                strokeDasharray={0}
                                                strokeWidth={0}
                                                strokeLinecap="butt"
                                                className="apexcharts-ycrosshairs-hidden"
                                              />
                                              <g
                                                id="SvgjsG1649"
                                                className="apexcharts-yaxis-annotations"
                                              />
                                              <g
                                                id="SvgjsG1650"
                                                className="apexcharts-xaxis-annotations"
                                              />
                                              <g
                                                id="SvgjsG1651"
                                                className="apexcharts-point-annotations"
                                              />
                                            </g>
                                            <g
                                              id="SvgjsG1630"
                                              className="apexcharts-yaxis"
                                              rel={0}
                                              transform="translate(-18, 0)"
                                            />
                                            <g
                                              id="SvgjsG1603"
                                              className="apexcharts-annotations"
                                            />
                                          </svg>
                                          <div
                                            className="apexcharts-legend"
                                            style={{ maxHeight: 25 }}
                                          />
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              opacity="0.3"
                                              d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/img/300-2.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Jane Cooper
                                          </a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">
                                            Monaco
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        63.83%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_1_2"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="danger"
                                        style={{ minHeight: 50 }}
                                      >
                                        <div
                                          id="apexcharts7kxeqhip"
                                          className="apexcharts-canvas apexcharts7kxeqhip apexcharts-theme-light"
                                          style={{
                                            width: "92.25px",
                                            height: 50
                                          }}
                                        >
                                          <svg
                                            id="SvgjsSvg1652"
                                            width="92.25"
                                            height={50}
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="1.1"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xmlns:svgjs="http://svgjs.dev"
                                            className="apexcharts-svg"
                                            xmlns:data="ApexChartsNS"
                                            transform="translate(0, 0)"
                                            style={{
                                              background: "transparent"
                                            }}
                                          >
                                            <g
                                              id="SvgjsG1654"
                                              className="apexcharts-inner apexcharts-graphical"
                                              transform="translate(0, 0)"
                                            >
                                              <defs id="SvgjsDefs1653">
                                                <clipPath id="gridRectMask7kxeqhip">
                                                  <rect
                                                    id="SvgjsRect1658"
                                                    width="98.25"
                                                    height={52}
                                                    x={-3}
                                                    y={-1}
                                                    rx={0}
                                                    ry={0}
                                                    opacity={1}
                                                    strokeWidth={0}
                                                    stroke="none"
                                                    strokeDasharray={0}
                                                    fill="#fff"
                                                  />
                                                </clipPath>
                                                <clipPath id="forecastMask7kxeqhip" />
                                                <clipPath id="nonForecastMask7kxeqhip" />
                                                <clipPath id="gridRectMarkerMask7kxeqhip">
                                                  <rect
                                                    id="SvgjsRect1659"
                                                    width="96.25"
                                                    height={54}
                                                    x={-2}
                                                    y={-2}
                                                    rx={0}
                                                    ry={0}
                                                    opacity={1}
                                                    strokeWidth={0}
                                                    stroke="none"
                                                    strokeDasharray={0}
                                                    fill="#fff"
                                                  />
                                                </clipPath>
                                              </defs>
                                              <g
                                                id="SvgjsG1666"
                                                className="apexcharts-xaxis"
                                                transform="translate(0, 0)"
                                              >
                                                <g
                                                  id="SvgjsG1667"
                                                  className="apexcharts-xaxis-texts-g"
                                                  transform="translate(0, 4)"
                                                />
                                              </g>
                                              <g
                                                id="SvgjsG1683"
                                                className="apexcharts-grid"
                                              >
                                                <g
                                                  id="SvgjsG1684"
                                                  className="apexcharts-gridlines-horizontal"
                                                  style={{ display: "none" }}
                                                >
                                                  <line
                                                    id="SvgjsLine1686"
                                                    x1={0}
                                                    y1={0}
                                                    x2="92.25"
                                                    y2={0}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1687"
                                                    x1={0}
                                                    y1={5}
                                                    x2="92.25"
                                                    y2={5}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1688"
                                                    x1={0}
                                                    y1={10}
                                                    x2="92.25"
                                                    y2={10}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1689"
                                                    x1={0}
                                                    y1={15}
                                                    x2="92.25"
                                                    y2={15}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1690"
                                                    x1={0}
                                                    y1={20}
                                                    x2="92.25"
                                                    y2={20}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1691"
                                                    x1={0}
                                                    y1={25}
                                                    x2="92.25"
                                                    y2={25}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1692"
                                                    x1={0}
                                                    y1={30}
                                                    x2="92.25"
                                                    y2={30}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1693"
                                                    x1={0}
                                                    y1={35}
                                                    x2="92.25"
                                                    y2={35}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1694"
                                                    x1={0}
                                                    y1={40}
                                                    x2="92.25"
                                                    y2={40}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1695"
                                                    x1={0}
                                                    y1={45}
                                                    x2="92.25"
                                                    y2={45}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1696"
                                                    x1={0}
                                                    y1={50}
                                                    x2="92.25"
                                                    y2={50}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                </g>
                                                <g
                                                  id="SvgjsG1685"
                                                  className="apexcharts-gridlines-vertical"
                                                  style={{ display: "none" }}
                                                />
                                                <line
                                                  id="SvgjsLine1698"
                                                  x1={0}
                                                  y1={50}
                                                  x2="92.25"
                                                  y2={50}
                                                  stroke="transparent"
                                                  strokeDasharray={0}
                                                  strokeLinecap="butt"
                                                />
                                                <line
                                                  id="SvgjsLine1697"
                                                  x1={0}
                                                  y1={1}
                                                  x2={0}
                                                  y2={50}
                                                  stroke="transparent"
                                                  strokeDasharray={0}
                                                  strokeLinecap="butt"
                                                />
                                              </g>
                                              <g
                                                id="SvgjsG1660"
                                                className="apexcharts-area-series apexcharts-plot-series"
                                              >
                                                <g
                                                  id="SvgjsG1661"
                                                  className="apexcharts-series"
                                                  seriesname="NetxProfit"
                                                  data:longestseries="true"
                                                  rel={1}
                                                  data:realindex={0}
                                                >
                                                  <path
                                                    id="SvgjsPath1664"
                                                    d="M0 50L0 43.333333333333336C2.483653846153846 43.333333333333336 4.612500000000001 45.833333333333336 7.096153846153847 45.833333333333336C9.579807692307693 45.833333333333336 11.708653846153847 36.666666666666664 14.192307692307693 36.666666666666664C16.67596153846154 36.666666666666664 18.804807692307694 47.5 21.28846153846154 47.5C23.772115384615386 47.5 25.90096153846154 30.833333333333332 28.384615384615387 30.833333333333332C30.868269230769233 30.833333333333332 32.997115384615384 36.666666666666664 35.48076923076923 36.666666666666664C37.96442307692308 36.666666666666664 40.09326923076924 40.83333333333333 42.57692307692308 40.83333333333333C45.06057692307692 40.83333333333333 47.18942307692308 37.5 49.67307692307693 37.5C52.156730769230776 37.5 54.28557692307693 47.5 56.769230769230774 47.5C59.252884615384616 47.5 61.38173076923077 40.83333333333333 63.86538461538462 40.83333333333333C66.34903846153847 40.83333333333333 68.47788461538462 37.5 70.96153846153847 37.5C73.44519230769231 37.5 75.57403846153846 44.166666666666664 78.0576923076923 44.166666666666664C80.54134615384615 44.166666666666664 82.67019230769232 35.83333333333333 85.15384615384616 35.83333333333333C87.6375 35.83333333333333 89.76634615384616 42.5 92.25 42.5C92.25 42.5 92.25 42.5 92.25 50M92.25 42.5C92.25 42.5 92.25 42.5 92.25 42.5 "
                                                    fill="rgba(255,255,255,1)"
                                                    fillOpacity={1}
                                                    strokeOpacity={1}
                                                    strokeLinecap="butt"
                                                    strokeWidth={0}
                                                    strokeDasharray={0}
                                                    className="apexcharts-area"
                                                    index={0}
                                                    clipPath="url(#gridRectMask7kxeqhip)"
                                                    pathto="M 0 50L 0 43.333333333333336C 2.483653846153846 43.333333333333336 4.612500000000001 45.833333333333336 7.096153846153847 45.833333333333336C 9.579807692307693 45.833333333333336 11.708653846153847 36.666666666666664 14.192307692307693 36.666666666666664C 16.67596153846154 36.666666666666664 18.804807692307694 47.5 21.28846153846154 47.5C 23.772115384615386 47.5 25.90096153846154 30.833333333333332 28.384615384615387 30.833333333333332C 30.868269230769233 30.833333333333332 32.997115384615384 36.666666666666664 35.48076923076923 36.666666666666664C 37.96442307692308 36.666666666666664 40.09326923076924 40.83333333333333 42.57692307692308 40.83333333333333C 45.06057692307692 40.83333333333333 47.18942307692308 37.5 49.67307692307693 37.5C 52.156730769230776 37.5 54.28557692307693 47.5 56.769230769230774 47.5C 59.252884615384616 47.5 61.38173076923077 40.83333333333333 63.86538461538462 40.83333333333333C 66.34903846153847 40.83333333333333 68.47788461538462 37.5 70.96153846153847 37.5C 73.44519230769231 37.5 75.57403846153846 44.166666666666664 78.0576923076923 44.166666666666664C 80.54134615384615 44.166666666666664 82.67019230769232 35.83333333333333 85.15384615384616 35.83333333333333C 87.6375 35.83333333333333 89.76634615384616 42.5 92.25 42.5C 92.25 42.5 92.25 42.5 92.25 50M 92.25 42.5z"
                                                    pathfrom="M -1 50L -1 50L 7.096153846153847 50L 14.192307692307693 50L 21.28846153846154 50L 28.384615384615387 50L 35.48076923076923 50L 42.57692307692308 50L 49.67307692307693 50L 56.769230769230774 50L 63.86538461538462 50L 70.96153846153847 50L 78.0576923076923 50L 85.15384615384616 50L 92.25 50"
                                                  />
                                                  <path
                                                    id="SvgjsPath1665"
                                                    d="M0 43.333333333333336C2.483653846153846 43.333333333333336 4.612500000000001 45.833333333333336 7.096153846153847 45.833333333333336C9.579807692307693 45.833333333333336 11.708653846153847 36.666666666666664 14.192307692307693 36.666666666666664C16.67596153846154 36.666666666666664 18.804807692307694 47.5 21.28846153846154 47.5C23.772115384615386 47.5 25.90096153846154 30.833333333333332 28.384615384615387 30.833333333333332C30.868269230769233 30.833333333333332 32.997115384615384 36.666666666666664 35.48076923076923 36.666666666666664C37.96442307692308 36.666666666666664 40.09326923076924 40.83333333333333 42.57692307692308 40.83333333333333C45.06057692307692 40.83333333333333 47.18942307692308 37.5 49.67307692307693 37.5C52.156730769230776 37.5 54.28557692307693 47.5 56.769230769230774 47.5C59.252884615384616 47.5 61.38173076923077 40.83333333333333 63.86538461538462 40.83333333333333C66.34903846153847 40.83333333333333 68.47788461538462 37.5 70.96153846153847 37.5C73.44519230769231 37.5 75.57403846153846 44.166666666666664 78.0576923076923 44.166666666666664C80.54134615384615 44.166666666666664 82.67019230769232 35.83333333333333 85.15384615384616 35.83333333333333C87.6375 35.83333333333333 89.76634615384616 42.5 92.25 42.5C92.25 42.5 92.25 42.5 92.25 42.5 "
                                                    fill="none"
                                                    fillOpacity={1}
                                                    stroke="#f1416c"
                                                    strokeOpacity={1}
                                                    strokeLinecap="butt"
                                                    strokeWidth={2}
                                                    strokeDasharray={0}
                                                    className="apexcharts-area"
                                                    index={0}
                                                    clipPath="url(#gridRectMask7kxeqhip)"
                                                    pathto="M 0 43.333333333333336C 2.483653846153846 43.333333333333336 4.612500000000001 45.833333333333336 7.096153846153847 45.833333333333336C 9.579807692307693 45.833333333333336 11.708653846153847 36.666666666666664 14.192307692307693 36.666666666666664C 16.67596153846154 36.666666666666664 18.804807692307694 47.5 21.28846153846154 47.5C 23.772115384615386 47.5 25.90096153846154 30.833333333333332 28.384615384615387 30.833333333333332C 30.868269230769233 30.833333333333332 32.997115384615384 36.666666666666664 35.48076923076923 36.666666666666664C 37.96442307692308 36.666666666666664 40.09326923076924 40.83333333333333 42.57692307692308 40.83333333333333C 45.06057692307692 40.83333333333333 47.18942307692308 37.5 49.67307692307693 37.5C 52.156730769230776 37.5 54.28557692307693 47.5 56.769230769230774 47.5C 59.252884615384616 47.5 61.38173076923077 40.83333333333333 63.86538461538462 40.83333333333333C 66.34903846153847 40.83333333333333 68.47788461538462 37.5 70.96153846153847 37.5C 73.44519230769231 37.5 75.57403846153846 44.166666666666664 78.0576923076923 44.166666666666664C 80.54134615384615 44.166666666666664 82.67019230769232 35.83333333333333 85.15384615384616 35.83333333333333C 87.6375 35.83333333333333 89.76634615384616 42.5 92.25 42.5"
                                                    pathfrom="M -1 50L -1 50L 7.096153846153847 50L 14.192307692307693 50L 21.28846153846154 50L 28.384615384615387 50L 35.48076923076923 50L 42.57692307692308 50L 49.67307692307693 50L 56.769230769230774 50L 63.86538461538462 50L 70.96153846153847 50L 78.0576923076923 50L 85.15384615384616 50L 92.25 50"
                                                    fillRule="evenodd"
                                                  />
                                                  <g
                                                    id="SvgjsG1662"
                                                    className="apexcharts-series-markers-wrap"
                                                    data:realindex={0}
                                                  />
                                                </g>
                                                <g
                                                  id="SvgjsG1663"
                                                  className="apexcharts-datalabels"
                                                  data:realindex={0}
                                                />
                                              </g>
                                              <line
                                                id="SvgjsLine1699"
                                                x1={0}
                                                y1={0}
                                                x2="92.25"
                                                y2={0}
                                                stroke="#b6b6b6"
                                                strokeDasharray={0}
                                                strokeWidth={1}
                                                strokeLinecap="butt"
                                                className="apexcharts-ycrosshairs"
                                              />
                                              <line
                                                id="SvgjsLine1700"
                                                x1={0}
                                                y1={0}
                                                x2="92.25"
                                                y2={0}
                                                strokeDasharray={0}
                                                strokeWidth={0}
                                                strokeLinecap="butt"
                                                className="apexcharts-ycrosshairs-hidden"
                                              />
                                              <g
                                                id="SvgjsG1701"
                                                className="apexcharts-yaxis-annotations"
                                              />
                                              <g
                                                id="SvgjsG1702"
                                                className="apexcharts-xaxis-annotations"
                                              />
                                              <g
                                                id="SvgjsG1703"
                                                className="apexcharts-point-annotations"
                                              />
                                            </g>
                                            <g
                                              id="SvgjsG1682"
                                              className="apexcharts-yaxis"
                                              rel={0}
                                              transform="translate(-18, 0)"
                                            />
                                            <g
                                              id="SvgjsG1655"
                                              className="apexcharts-annotations"
                                            />
                                          </svg>
                                          <div
                                            className="apexcharts-legend"
                                            style={{ maxHeight: 25 }}
                                          />
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              opacity="0.3"
                                              d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/img/300-9.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Jacob Jones
                                          </a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">
                                            Poland
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        92.56%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_1_3"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                        style={{ minHeight: 50 }}
                                      >
                                        <div
                                          id="apexchartsdvdmoq7ai"
                                          className="apexcharts-canvas apexchartsdvdmoq7ai apexcharts-theme-light"
                                          style={{
                                            width: "92.25px",
                                            height: 50
                                          }}
                                        >
                                          <svg
                                            id="SvgjsSvg1704"
                                            width="92.25"
                                            height={50}
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="1.1"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xmlns:svgjs="http://svgjs.dev"
                                            className="apexcharts-svg"
                                            xmlns:data="ApexChartsNS"
                                            transform="translate(0, 0)"
                                            style={{
                                              background: "transparent"
                                            }}
                                          >
                                            <g
                                              id="SvgjsG1706"
                                              className="apexcharts-inner apexcharts-graphical"
                                              transform="translate(0, 0)"
                                            >
                                              <defs id="SvgjsDefs1705">
                                                <clipPath id="gridRectMaskdvdmoq7ai">
                                                  <rect
                                                    id="SvgjsRect1710"
                                                    width="98.25"
                                                    height={52}
                                                    x={-3}
                                                    y={-1}
                                                    rx={0}
                                                    ry={0}
                                                    opacity={1}
                                                    strokeWidth={0}
                                                    stroke="none"
                                                    strokeDasharray={0}
                                                    fill="#fff"
                                                  />
                                                </clipPath>
                                                <clipPath id="forecastMaskdvdmoq7ai" />
                                                <clipPath id="nonForecastMaskdvdmoq7ai" />
                                                <clipPath id="gridRectMarkerMaskdvdmoq7ai">
                                                  <rect
                                                    id="SvgjsRect1711"
                                                    width="96.25"
                                                    height={54}
                                                    x={-2}
                                                    y={-2}
                                                    rx={0}
                                                    ry={0}
                                                    opacity={1}
                                                    strokeWidth={0}
                                                    stroke="none"
                                                    strokeDasharray={0}
                                                    fill="#fff"
                                                  />
                                                </clipPath>
                                              </defs>
                                              <g
                                                id="SvgjsG1718"
                                                className="apexcharts-xaxis"
                                                transform="translate(0, 0)"
                                              >
                                                <g
                                                  id="SvgjsG1719"
                                                  className="apexcharts-xaxis-texts-g"
                                                  transform="translate(0, 4)"
                                                />
                                              </g>
                                              <g
                                                id="SvgjsG1735"
                                                className="apexcharts-grid"
                                              >
                                                <g
                                                  id="SvgjsG1736"
                                                  className="apexcharts-gridlines-horizontal"
                                                  style={{ display: "none" }}
                                                >
                                                  <line
                                                    id="SvgjsLine1738"
                                                    x1={0}
                                                    y1={0}
                                                    x2="92.25"
                                                    y2={0}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1739"
                                                    x1={0}
                                                    y1={5}
                                                    x2="92.25"
                                                    y2={5}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1740"
                                                    x1={0}
                                                    y1={10}
                                                    x2="92.25"
                                                    y2={10}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1741"
                                                    x1={0}
                                                    y1={15}
                                                    x2="92.25"
                                                    y2={15}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1742"
                                                    x1={0}
                                                    y1={20}
                                                    x2="92.25"
                                                    y2={20}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1743"
                                                    x1={0}
                                                    y1={25}
                                                    x2="92.25"
                                                    y2={25}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1744"
                                                    x1={0}
                                                    y1={30}
                                                    x2="92.25"
                                                    y2={30}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1745"
                                                    x1={0}
                                                    y1={35}
                                                    x2="92.25"
                                                    y2={35}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1746"
                                                    x1={0}
                                                    y1={40}
                                                    x2="92.25"
                                                    y2={40}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1747"
                                                    x1={0}
                                                    y1={45}
                                                    x2="92.25"
                                                    y2={45}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1748"
                                                    x1={0}
                                                    y1={50}
                                                    x2="92.25"
                                                    y2={50}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                </g>
                                                <g
                                                  id="SvgjsG1737"
                                                  className="apexcharts-gridlines-vertical"
                                                  style={{ display: "none" }}
                                                />
                                                <line
                                                  id="SvgjsLine1750"
                                                  x1={0}
                                                  y1={50}
                                                  x2="92.25"
                                                  y2={50}
                                                  stroke="transparent"
                                                  strokeDasharray={0}
                                                  strokeLinecap="butt"
                                                />
                                                <line
                                                  id="SvgjsLine1749"
                                                  x1={0}
                                                  y1={1}
                                                  x2={0}
                                                  y2={50}
                                                  stroke="transparent"
                                                  strokeDasharray={0}
                                                  strokeLinecap="butt"
                                                />
                                              </g>
                                              <g
                                                id="SvgjsG1712"
                                                className="apexcharts-area-series apexcharts-plot-series"
                                              >
                                                <g
                                                  id="SvgjsG1713"
                                                  className="apexcharts-series"
                                                  seriesname="NetxProfit"
                                                  data:longestseries="true"
                                                  rel={1}
                                                  data:realindex={0}
                                                >
                                                  <path
                                                    id="SvgjsPath1716"
                                                    d="M0 50L0 43.333333333333336C2.483653846153846 43.333333333333336 4.612500000000001 45 7.096153846153847 45C9.579807692307693 45 11.708653846153847 36.666666666666664 14.192307692307693 36.666666666666664C16.67596153846154 36.666666666666664 18.804807692307694 47.5 21.28846153846154 47.5C23.772115384615386 47.5 25.90096153846154 30.833333333333332 28.384615384615387 30.833333333333332C30.868269230769233 30.833333333333332 32.997115384615384 36.666666666666664 35.48076923076923 36.666666666666664C37.96442307692308 36.666666666666664 40.09326923076924 40.83333333333333 42.57692307692308 40.83333333333333C45.06057692307692 40.83333333333333 47.18942307692308 38.33333333333333 49.67307692307693 38.33333333333333C52.156730769230776 38.33333333333333 54.28557692307693 47.5 56.769230769230774 47.5C59.252884615384616 47.5 61.38173076923077 40.83333333333333 63.86538461538462 40.83333333333333C66.34903846153847 40.83333333333333 68.47788461538462 37.5 70.96153846153847 37.5C73.44519230769231 37.5 75.57403846153846 43.333333333333336 78.0576923076923 43.333333333333336C80.54134615384615 43.333333333333336 82.67019230769232 35.83333333333333 85.15384615384616 35.83333333333333C87.6375 35.83333333333333 89.76634615384616 42.5 92.25 42.5C92.25 42.5 92.25 42.5 92.25 50M92.25 42.5C92.25 42.5 92.25 42.5 92.25 42.5 "
                                                    fill="rgba(255,255,255,1)"
                                                    fillOpacity={1}
                                                    strokeOpacity={1}
                                                    strokeLinecap="butt"
                                                    strokeWidth={0}
                                                    strokeDasharray={0}
                                                    className="apexcharts-area"
                                                    index={0}
                                                    clipPath="url(#gridRectMaskdvdmoq7ai)"
                                                    pathto="M 0 50L 0 43.333333333333336C 2.483653846153846 43.333333333333336 4.612500000000001 45 7.096153846153847 45C 9.579807692307693 45 11.708653846153847 36.666666666666664 14.192307692307693 36.666666666666664C 16.67596153846154 36.666666666666664 18.804807692307694 47.5 21.28846153846154 47.5C 23.772115384615386 47.5 25.90096153846154 30.833333333333332 28.384615384615387 30.833333333333332C 30.868269230769233 30.833333333333332 32.997115384615384 36.666666666666664 35.48076923076923 36.666666666666664C 37.96442307692308 36.666666666666664 40.09326923076924 40.83333333333333 42.57692307692308 40.83333333333333C 45.06057692307692 40.83333333333333 47.18942307692308 38.33333333333333 49.67307692307693 38.33333333333333C 52.156730769230776 38.33333333333333 54.28557692307693 47.5 56.769230769230774 47.5C 59.252884615384616 47.5 61.38173076923077 40.83333333333333 63.86538461538462 40.83333333333333C 66.34903846153847 40.83333333333333 68.47788461538462 37.5 70.96153846153847 37.5C 73.44519230769231 37.5 75.57403846153846 43.333333333333336 78.0576923076923 43.333333333333336C 80.54134615384615 43.333333333333336 82.67019230769232 35.83333333333333 85.15384615384616 35.83333333333333C 87.6375 35.83333333333333 89.76634615384616 42.5 92.25 42.5C 92.25 42.5 92.25 42.5 92.25 50M 92.25 42.5z"
                                                    pathfrom="M -1 50L -1 50L 7.096153846153847 50L 14.192307692307693 50L 21.28846153846154 50L 28.384615384615387 50L 35.48076923076923 50L 42.57692307692308 50L 49.67307692307693 50L 56.769230769230774 50L 63.86538461538462 50L 70.96153846153847 50L 78.0576923076923 50L 85.15384615384616 50L 92.25 50"
                                                  />
                                                  <path
                                                    id="SvgjsPath1717"
                                                    d="M0 43.333333333333336C2.483653846153846 43.333333333333336 4.612500000000001 45 7.096153846153847 45C9.579807692307693 45 11.708653846153847 36.666666666666664 14.192307692307693 36.666666666666664C16.67596153846154 36.666666666666664 18.804807692307694 47.5 21.28846153846154 47.5C23.772115384615386 47.5 25.90096153846154 30.833333333333332 28.384615384615387 30.833333333333332C30.868269230769233 30.833333333333332 32.997115384615384 36.666666666666664 35.48076923076923 36.666666666666664C37.96442307692308 36.666666666666664 40.09326923076924 40.83333333333333 42.57692307692308 40.83333333333333C45.06057692307692 40.83333333333333 47.18942307692308 38.33333333333333 49.67307692307693 38.33333333333333C52.156730769230776 38.33333333333333 54.28557692307693 47.5 56.769230769230774 47.5C59.252884615384616 47.5 61.38173076923077 40.83333333333333 63.86538461538462 40.83333333333333C66.34903846153847 40.83333333333333 68.47788461538462 37.5 70.96153846153847 37.5C73.44519230769231 37.5 75.57403846153846 43.333333333333336 78.0576923076923 43.333333333333336C80.54134615384615 43.333333333333336 82.67019230769232 35.83333333333333 85.15384615384616 35.83333333333333C87.6375 35.83333333333333 89.76634615384616 42.5 92.25 42.5C92.25 42.5 92.25 42.5 92.25 42.5 "
                                                    fill="none"
                                                    fillOpacity={1}
                                                    stroke="#50cd89"
                                                    strokeOpacity={1}
                                                    strokeLinecap="butt"
                                                    strokeWidth={2}
                                                    strokeDasharray={0}
                                                    className="apexcharts-area"
                                                    index={0}
                                                    clipPath="url(#gridRectMaskdvdmoq7ai)"
                                                    pathto="M 0 43.333333333333336C 2.483653846153846 43.333333333333336 4.612500000000001 45 7.096153846153847 45C 9.579807692307693 45 11.708653846153847 36.666666666666664 14.192307692307693 36.666666666666664C 16.67596153846154 36.666666666666664 18.804807692307694 47.5 21.28846153846154 47.5C 23.772115384615386 47.5 25.90096153846154 30.833333333333332 28.384615384615387 30.833333333333332C 30.868269230769233 30.833333333333332 32.997115384615384 36.666666666666664 35.48076923076923 36.666666666666664C 37.96442307692308 36.666666666666664 40.09326923076924 40.83333333333333 42.57692307692308 40.83333333333333C 45.06057692307692 40.83333333333333 47.18942307692308 38.33333333333333 49.67307692307693 38.33333333333333C 52.156730769230776 38.33333333333333 54.28557692307693 47.5 56.769230769230774 47.5C 59.252884615384616 47.5 61.38173076923077 40.83333333333333 63.86538461538462 40.83333333333333C 66.34903846153847 40.83333333333333 68.47788461538462 37.5 70.96153846153847 37.5C 73.44519230769231 37.5 75.57403846153846 43.333333333333336 78.0576923076923 43.333333333333336C 80.54134615384615 43.333333333333336 82.67019230769232 35.83333333333333 85.15384615384616 35.83333333333333C 87.6375 35.83333333333333 89.76634615384616 42.5 92.25 42.5"
                                                    pathfrom="M -1 50L -1 50L 7.096153846153847 50L 14.192307692307693 50L 21.28846153846154 50L 28.384615384615387 50L 35.48076923076923 50L 42.57692307692308 50L 49.67307692307693 50L 56.769230769230774 50L 63.86538461538462 50L 70.96153846153847 50L 78.0576923076923 50L 85.15384615384616 50L 92.25 50"
                                                    fillRule="evenodd"
                                                  />
                                                  <g
                                                    id="SvgjsG1714"
                                                    className="apexcharts-series-markers-wrap"
                                                    data:realindex={0}
                                                  />
                                                </g>
                                                <g
                                                  id="SvgjsG1715"
                                                  className="apexcharts-datalabels"
                                                  data:realindex={0}
                                                />
                                              </g>
                                              <line
                                                id="SvgjsLine1751"
                                                x1={0}
                                                y1={0}
                                                x2="92.25"
                                                y2={0}
                                                stroke="#b6b6b6"
                                                strokeDasharray={0}
                                                strokeWidth={1}
                                                strokeLinecap="butt"
                                                className="apexcharts-ycrosshairs"
                                              />
                                              <line
                                                id="SvgjsLine1752"
                                                x1={0}
                                                y1={0}
                                                x2="92.25"
                                                y2={0}
                                                strokeDasharray={0}
                                                strokeWidth={0}
                                                strokeLinecap="butt"
                                                className="apexcharts-ycrosshairs-hidden"
                                              />
                                              <g
                                                id="SvgjsG1753"
                                                className="apexcharts-yaxis-annotations"
                                              />
                                              <g
                                                id="SvgjsG1754"
                                                className="apexcharts-xaxis-annotations"
                                              />
                                              <g
                                                id="SvgjsG1755"
                                                className="apexcharts-point-annotations"
                                              />
                                            </g>
                                            <g
                                              id="SvgjsG1734"
                                              className="apexcharts-yaxis"
                                              rel={0}
                                              transform="translate(-18, 0)"
                                            />
                                            <g
                                              id="SvgjsG1707"
                                              className="apexcharts-annotations"
                                            />
                                          </svg>
                                          <div
                                            className="apexcharts-legend"
                                            style={{ maxHeight: 25 }}
                                          />
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              opacity="0.3"
                                              d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/img/300-7.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Cody Fishers
                                          </a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">
                                            Mexico
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        63.08%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_1_4"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                        style={{ minHeight: 50 }}
                                      >
                                        <div
                                          id="apexchartsrhekninq"
                                          className="apexcharts-canvas apexchartsrhekninq apexcharts-theme-light"
                                          style={{
                                            width: "92.25px",
                                            height: 50
                                          }}
                                        >
                                          <svg
                                            id="SvgjsSvg1756"
                                            width="92.25"
                                            height={50}
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="1.1"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xmlns:svgjs="http://svgjs.dev"
                                            className="apexcharts-svg"
                                            xmlns:data="ApexChartsNS"
                                            transform="translate(0, 0)"
                                            style={{
                                              background: "transparent"
                                            }}
                                          >
                                            <g
                                              id="SvgjsG1758"
                                              className="apexcharts-inner apexcharts-graphical"
                                              transform="translate(0, 0)"
                                            >
                                              <defs id="SvgjsDefs1757">
                                                <clipPath id="gridRectMaskrhekninq">
                                                  <rect
                                                    id="SvgjsRect1762"
                                                    width="98.25"
                                                    height={52}
                                                    x={-3}
                                                    y={-1}
                                                    rx={0}
                                                    ry={0}
                                                    opacity={1}
                                                    strokeWidth={0}
                                                    stroke="none"
                                                    strokeDasharray={0}
                                                    fill="#fff"
                                                  />
                                                </clipPath>
                                                <clipPath id="forecastMaskrhekninq" />
                                                <clipPath id="nonForecastMaskrhekninq" />
                                                <clipPath id="gridRectMarkerMaskrhekninq">
                                                  <rect
                                                    id="SvgjsRect1763"
                                                    width="96.25"
                                                    height={54}
                                                    x={-2}
                                                    y={-2}
                                                    rx={0}
                                                    ry={0}
                                                    opacity={1}
                                                    strokeWidth={0}
                                                    stroke="none"
                                                    strokeDasharray={0}
                                                    fill="#fff"
                                                  />
                                                </clipPath>
                                              </defs>
                                              <g
                                                id="SvgjsG1770"
                                                className="apexcharts-xaxis"
                                                transform="translate(0, 0)"
                                              >
                                                <g
                                                  id="SvgjsG1771"
                                                  className="apexcharts-xaxis-texts-g"
                                                  transform="translate(0, 4)"
                                                />
                                              </g>
                                              <g
                                                id="SvgjsG1787"
                                                className="apexcharts-grid"
                                              >
                                                <g
                                                  id="SvgjsG1788"
                                                  className="apexcharts-gridlines-horizontal"
                                                  style={{ display: "none" }}
                                                >
                                                  <line
                                                    id="SvgjsLine1790"
                                                    x1={0}
                                                    y1={0}
                                                    x2="92.25"
                                                    y2={0}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1791"
                                                    x1={0}
                                                    y1={5}
                                                    x2="92.25"
                                                    y2={5}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1792"
                                                    x1={0}
                                                    y1={10}
                                                    x2="92.25"
                                                    y2={10}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1793"
                                                    x1={0}
                                                    y1={15}
                                                    x2="92.25"
                                                    y2={15}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1794"
                                                    x1={0}
                                                    y1={20}
                                                    x2="92.25"
                                                    y2={20}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1795"
                                                    x1={0}
                                                    y1={25}
                                                    x2="92.25"
                                                    y2={25}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1796"
                                                    x1={0}
                                                    y1={30}
                                                    x2="92.25"
                                                    y2={30}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1797"
                                                    x1={0}
                                                    y1={35}
                                                    x2="92.25"
                                                    y2={35}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1798"
                                                    x1={0}
                                                    y1={40}
                                                    x2="92.25"
                                                    y2={40}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1799"
                                                    x1={0}
                                                    y1={45}
                                                    x2="92.25"
                                                    y2={45}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1800"
                                                    x1={0}
                                                    y1={50}
                                                    x2="92.25"
                                                    y2={50}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                </g>
                                                <g
                                                  id="SvgjsG1789"
                                                  className="apexcharts-gridlines-vertical"
                                                  style={{ display: "none" }}
                                                />
                                                <line
                                                  id="SvgjsLine1802"
                                                  x1={0}
                                                  y1={50}
                                                  x2="92.25"
                                                  y2={50}
                                                  stroke="transparent"
                                                  strokeDasharray={0}
                                                  strokeLinecap="butt"
                                                />
                                                <line
                                                  id="SvgjsLine1801"
                                                  x1={0}
                                                  y1={1}
                                                  x2={0}
                                                  y2={50}
                                                  stroke="transparent"
                                                  strokeDasharray={0}
                                                  strokeLinecap="butt"
                                                />
                                              </g>
                                              <g
                                                id="SvgjsG1764"
                                                className="apexcharts-area-series apexcharts-plot-series"
                                              >
                                                <g
                                                  id="SvgjsG1765"
                                                  className="apexcharts-series"
                                                  seriesname="NetxProfit"
                                                  data:longestseries="true"
                                                  rel={1}
                                                  data:realindex={0}
                                                >
                                                  <path
                                                    id="SvgjsPath1768"
                                                    d="M0 50L0 40C2.483653846153846 40 4.612500000000001 45.833333333333336 7.096153846153847 45.833333333333336C9.579807692307693 45.833333333333336 11.708653846153847 30.833333333333332 14.192307692307693 30.833333333333332C16.67596153846154 30.833333333333332 18.804807692307694 40 21.28846153846154 40C23.772115384615386 40 25.90096153846154 32.5 28.384615384615387 32.5C30.868269230769233 32.5 32.997115384615384 42.5 35.48076923076923 42.5C37.96442307692308 42.5 40.09326923076924 35.83333333333333 42.57692307692308 35.83333333333333C45.06057692307692 35.83333333333333 47.18942307692308 33.33333333333333 49.67307692307693 33.33333333333333C52.156730769230776 33.33333333333333 54.28557692307693 46.666666666666664 56.769230769230774 46.666666666666664C59.252884615384616 46.666666666666664 61.38173076923077 30 63.86538461538462 30C66.34903846153847 30 68.47788461538462 42.5 70.96153846153847 42.5C73.44519230769231 42.5 75.57403846153846 39.166666666666664 78.0576923076923 39.166666666666664C80.54134615384615 39.166666666666664 82.67019230769232 35 85.15384615384616 35C87.6375 35 89.76634615384616 42.5 92.25 42.5C92.25 42.5 92.25 42.5 92.25 50M92.25 42.5C92.25 42.5 92.25 42.5 92.25 42.5 "
                                                    fill="rgba(255,255,255,1)"
                                                    fillOpacity={1}
                                                    strokeOpacity={1}
                                                    strokeLinecap="butt"
                                                    strokeWidth={0}
                                                    strokeDasharray={0}
                                                    className="apexcharts-area"
                                                    index={0}
                                                    clipPath="url(#gridRectMaskrhekninq)"
                                                    pathto="M 0 50L 0 40C 2.483653846153846 40 4.612500000000001 45.833333333333336 7.096153846153847 45.833333333333336C 9.579807692307693 45.833333333333336 11.708653846153847 30.833333333333332 14.192307692307693 30.833333333333332C 16.67596153846154 30.833333333333332 18.804807692307694 40 21.28846153846154 40C 23.772115384615386 40 25.90096153846154 32.5 28.384615384615387 32.5C 30.868269230769233 32.5 32.997115384615384 42.5 35.48076923076923 42.5C 37.96442307692308 42.5 40.09326923076924 35.83333333333333 42.57692307692308 35.83333333333333C 45.06057692307692 35.83333333333333 47.18942307692308 33.33333333333333 49.67307692307693 33.33333333333333C 52.156730769230776 33.33333333333333 54.28557692307693 46.666666666666664 56.769230769230774 46.666666666666664C 59.252884615384616 46.666666666666664 61.38173076923077 30 63.86538461538462 30C 66.34903846153847 30 68.47788461538462 42.5 70.96153846153847 42.5C 73.44519230769231 42.5 75.57403846153846 39.166666666666664 78.0576923076923 39.166666666666664C 80.54134615384615 39.166666666666664 82.67019230769232 35 85.15384615384616 35C 87.6375 35 89.76634615384616 42.5 92.25 42.5C 92.25 42.5 92.25 42.5 92.25 50M 92.25 42.5z"
                                                    pathfrom="M -1 50L -1 50L 7.096153846153847 50L 14.192307692307693 50L 21.28846153846154 50L 28.384615384615387 50L 35.48076923076923 50L 42.57692307692308 50L 49.67307692307693 50L 56.769230769230774 50L 63.86538461538462 50L 70.96153846153847 50L 78.0576923076923 50L 85.15384615384616 50L 92.25 50"
                                                  />
                                                  <path
                                                    id="SvgjsPath1769"
                                                    d="M0 40C2.483653846153846 40 4.612500000000001 45.833333333333336 7.096153846153847 45.833333333333336C9.579807692307693 45.833333333333336 11.708653846153847 30.833333333333332 14.192307692307693 30.833333333333332C16.67596153846154 30.833333333333332 18.804807692307694 40 21.28846153846154 40C23.772115384615386 40 25.90096153846154 32.5 28.384615384615387 32.5C30.868269230769233 32.5 32.997115384615384 42.5 35.48076923076923 42.5C37.96442307692308 42.5 40.09326923076924 35.83333333333333 42.57692307692308 35.83333333333333C45.06057692307692 35.83333333333333 47.18942307692308 33.33333333333333 49.67307692307693 33.33333333333333C52.156730769230776 33.33333333333333 54.28557692307693 46.666666666666664 56.769230769230774 46.666666666666664C59.252884615384616 46.666666666666664 61.38173076923077 30 63.86538461538462 30C66.34903846153847 30 68.47788461538462 42.5 70.96153846153847 42.5C73.44519230769231 42.5 75.57403846153846 39.166666666666664 78.0576923076923 39.166666666666664C80.54134615384615 39.166666666666664 82.67019230769232 35 85.15384615384616 35C87.6375 35 89.76634615384616 42.5 92.25 42.5C92.25 42.5 92.25 42.5 92.25 42.5 "
                                                    fill="none"
                                                    fillOpacity={1}
                                                    stroke="#50cd89"
                                                    strokeOpacity={1}
                                                    strokeLinecap="butt"
                                                    strokeWidth={2}
                                                    strokeDasharray={0}
                                                    className="apexcharts-area"
                                                    index={0}
                                                    clipPath="url(#gridRectMaskrhekninq)"
                                                    pathto="M 0 40C 2.483653846153846 40 4.612500000000001 45.833333333333336 7.096153846153847 45.833333333333336C 9.579807692307693 45.833333333333336 11.708653846153847 30.833333333333332 14.192307692307693 30.833333333333332C 16.67596153846154 30.833333333333332 18.804807692307694 40 21.28846153846154 40C 23.772115384615386 40 25.90096153846154 32.5 28.384615384615387 32.5C 30.868269230769233 32.5 32.997115384615384 42.5 35.48076923076923 42.5C 37.96442307692308 42.5 40.09326923076924 35.83333333333333 42.57692307692308 35.83333333333333C 45.06057692307692 35.83333333333333 47.18942307692308 33.33333333333333 49.67307692307693 33.33333333333333C 52.156730769230776 33.33333333333333 54.28557692307693 46.666666666666664 56.769230769230774 46.666666666666664C 59.252884615384616 46.666666666666664 61.38173076923077 30 63.86538461538462 30C 66.34903846153847 30 68.47788461538462 42.5 70.96153846153847 42.5C 73.44519230769231 42.5 75.57403846153846 39.166666666666664 78.0576923076923 39.166666666666664C 80.54134615384615 39.166666666666664 82.67019230769232 35 85.15384615384616 35C 87.6375 35 89.76634615384616 42.5 92.25 42.5"
                                                    pathfrom="M -1 50L -1 50L 7.096153846153847 50L 14.192307692307693 50L 21.28846153846154 50L 28.384615384615387 50L 35.48076923076923 50L 42.57692307692308 50L 49.67307692307693 50L 56.769230769230774 50L 63.86538461538462 50L 70.96153846153847 50L 78.0576923076923 50L 85.15384615384616 50L 92.25 50"
                                                    fillRule="evenodd"
                                                  />
                                                  <g
                                                    id="SvgjsG1766"
                                                    className="apexcharts-series-markers-wrap"
                                                    data:realindex={0}
                                                  />
                                                </g>
                                                <g
                                                  id="SvgjsG1767"
                                                  className="apexcharts-datalabels"
                                                  data:realindex={0}
                                                />
                                              </g>
                                              <line
                                                id="SvgjsLine1803"
                                                x1={0}
                                                y1={0}
                                                x2="92.25"
                                                y2={0}
                                                stroke="#b6b6b6"
                                                strokeDasharray={0}
                                                strokeWidth={1}
                                                strokeLinecap="butt"
                                                className="apexcharts-ycrosshairs"
                                              />
                                              <line
                                                id="SvgjsLine1804"
                                                x1={0}
                                                y1={0}
                                                x2="92.25"
                                                y2={0}
                                                strokeDasharray={0}
                                                strokeWidth={0}
                                                strokeLinecap="butt"
                                                className="apexcharts-ycrosshairs-hidden"
                                              />
                                              <g
                                                id="SvgjsG1805"
                                                className="apexcharts-yaxis-annotations"
                                              />
                                              <g
                                                id="SvgjsG1806"
                                                className="apexcharts-xaxis-annotations"
                                              />
                                              <g
                                                id="SvgjsG1807"
                                                className="apexcharts-point-annotations"
                                              />
                                            </g>
                                            <g
                                              id="SvgjsG1786"
                                              className="apexcharts-yaxis"
                                              rel={0}
                                              transform="translate(-18, 0)"
                                            />
                                            <g
                                              id="SvgjsG1759"
                                              className="apexcharts-annotations"
                                            />
                                          </svg>
                                          <div
                                            className="apexcharts-legend"
                                            style={{ maxHeight: 25 }}
                                          />
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              opacity="0.3"
                                              d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="kt_stats_widget_16_tab_2"
                            role="tabpanel"
                            aria-labelledby="#kt_stats_widget_16_tab_link_2"
                          >
                            <div className="table-responsive">
                              <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                <thead>
                                  <tr className="fs-7 fw-bold text-gray-400 border-bottom-0">
                                    <th className="p-0 pb-3 min-w-150px text-start">
                                      AUTHOR
                                    </th>
                                    <th className="p-0 pb-3 min-w-100px text-end pe-13">
                                      CONV.
                                    </th>
                                    <th className="p-0 pb-3 w-125px text-end pe-7">
                                      CHART
                                    </th>
                                    <th className="p-0 pb-3 w-50px text-end">
                                      VIEW
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/img/300-25.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Brooklyn Simmons
                                          </a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">
                                            Poland
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        85.23%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_2_1"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              opacity="0.3"
                                              d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/img/300-24.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Esther Howard
                                          </a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">
                                            Mexico
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        74.83%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_2_2"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="danger"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              opacity="0.3"
                                              d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/img/300-20.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Annette Black
                                          </a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">
                                            Haiti
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        90.06%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_2_3"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              opacity="0.3"
                                              d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/img/300-17.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Marvin McKinney
                                          </a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">
                                            Monaco
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        54.08%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_2_4"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              opacity="0.3"
                                              d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="kt_stats_widget_16_tab_3"
                            role="tabpanel"
                            aria-labelledby="#kt_stats_widget_16_tab_link_3"
                          >
                            <div className="table-responsive">
                              <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                <thead>
                                  <tr className="fs-7 fw-bold text-gray-400 border-bottom-0">
                                    <th className="p-0 pb-3 min-w-150px text-start">
                                      AUTHOR
                                    </th>
                                    <th className="p-0 pb-3 min-w-100px text-end pe-13">
                                      CONV.
                                    </th>
                                    <th className="p-0 pb-3 w-125px text-end pe-7">
                                      CHART
                                    </th>
                                    <th className="p-0 pb-3 w-50px text-end">
                                      VIEW
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/img/300-11.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Jacob Jones
                                          </a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">
                                            New York
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        52.34%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_3_1"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              opacity="0.3"
                                              d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/img/300-23.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Ronald Richards
                                          </a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">
                                            Madrid
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        77.65%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_3_2"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="danger"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              opacity="0.3"
                                              d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/img/300-4.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Leslie Alexander
                                          </a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">
                                            Pune
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        82.47%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_3_3"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              opacity="0.3"
                                              d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/img/300-1.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Courtney Henry
                                          </a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">
                                            Mexico
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        67.84%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_3_4"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              opacity="0.3"
                                              d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="kt_stats_widget_16_tab_4"
                            role="tabpanel"
                            aria-labelledby="#kt_stats_widget_16_tab_link_4"
                          >
                            <div className="table-responsive">
                              <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                <thead>
                                  <tr className="fs-7 fw-bold text-gray-400 border-bottom-0">
                                    <th className="p-0 pb-3 min-w-150px text-start">
                                      AUTHOR
                                    </th>
                                    <th className="p-0 pb-3 min-w-100px text-end pe-13">
                                      CONV.
                                    </th>
                                    <th className="p-0 pb-3 w-125px text-end pe-7">
                                      CHART
                                    </th>
                                    <th className="p-0 pb-3 w-50px text-end">
                                      VIEW
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/img/300-12.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Arlene McCoy
                                          </a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">
                                            London
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        53.44%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_4_1"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              opacity="0.3"
                                              d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/img/300-21.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Marvin McKinneyr
                                          </a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">
                                            Monaco
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        74.64%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_4_2"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="danger"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              opacity="0.3"
                                              d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/img/300-30.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Jacob Jones
                                          </a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">
                                            PManila
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        88.56%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_4_3"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              opacity="0.3"
                                              d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/img/300-14.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Esther Howard
                                          </a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">
                                            Iceland
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        63.16%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_4_4"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              opacity="0.3"
                                              d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="kt_stats_widget_16_tab_5"
                            role="tabpanel"
                            aria-labelledby="#kt_stats_widget_16_tab_link_5"
                          >
                            <div className="table-responsive">
                              <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                <thead>
                                  <tr className="fs-7 fw-bold text-gray-400 border-bottom-0">
                                    <th className="p-0 pb-3 min-w-150px text-start">
                                      AUTHOR
                                    </th>
                                    <th className="p-0 pb-3 min-w-100px text-end pe-13">
                                      CONV.
                                    </th>
                                    <th className="p-0 pb-3 w-125px text-end pe-7">
                                      CHART
                                    </th>
                                    <th className="p-0 pb-3 w-50px text-end">
                                      VIEW
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/img/300-6.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Jane Cooper
                                          </a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">
                                            Haiti
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        68.54%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_5_1"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              opacity="0.3"
                                              d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/img/300-10.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Esther Howard
                                          </a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">
                                            Kiribati
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        55.83%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_5_2"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="danger"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              opacity="0.3"
                                              d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/img/300-9.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Jacob Jones
                                          </a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">
                                            Poland
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        93.46%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_5_3"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              opacity="0.3"
                                              d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-circle symbol-50px me-3">
                                          <img
                                            src="assets/img/300-3.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/pages/user-profile/overview.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Ralph Edwards
                                          </a>
                                          <span className="text-gray-400 fw-semibold d-block fs-7">
                                            Mexico
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-13">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        64.48%
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_16_chart_5_4"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                      />
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <span className="svg-icon svg-icon-5 svg-icon-gray-700">
                                          <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M14.4 11H3C2.4 11 2 11.4 2 12C2 12.6 2.4 13 3 13H14.4V11Z"
                                              fill="currentColor"
                                            />
                                            <path
                                              opacity="0.3"
                                              d="M14.4 20V4L21.7 11.3C22.1 11.7 22.1 12.3 21.7 12.7L14.4 20Z"
                                              fill="currentColor"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gx-5 gx-xl-10">
                  <div className="col-xxl-6 mb-5 mb-xl-10">
                    <div className="card card-flush h-xl-100">
                      <div className="card-header pt-5">
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bold text-dark">
                            Performance Overview
                          </span>
                          <span className="text-gray-400 mt-1 fw-semibold fs-6">
                            Users from all channels
                          </span>
                        </h3>
                        <div className="card-toolbar">
                          <ul
                            className="nav"
                            id="kt_chart_widget_8_tabs"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1"
                                data-bs-toggle="tab"
                                id="kt_chart_widget_8_week_toggle"
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#kt_chart_widget_8_week_tab"
                                aria-selected="false"
                                tabIndex={-1}
                                role="tab"
                              >
                                Month
                              </a>
                            </li>
                            <li className="nav-item" role="presentation">
                              <a
                                className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1 active"
                                data-bs-toggle="tab"
                                id="kt_chart_widget_8_month_toggle"
                                href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#kt_chart_widget_8_month_tab"
                                aria-selected="true"
                                role="tab"
                              >
                                Week
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body pt-6">
                        <div className="tab-content">
                          <div
                            className="tab-pane fade"
                            id="kt_chart_widget_8_week_tab"
                            role="tabpanel"
                            aria-labelledby="#kt_chart_widget_8_week_toggle"
                          >
                            <div className="mb-5">
                              <div className="d-flex align-items-center mb-2">
                                <span className="fs-1 fw-semibold text-gray-400 me-1 mt-n1">
                                  $
                                </span>
                                <span className="fs-3x fw-bold text-gray-800 me-2 lh-1 ls-n2">
                                  18,89
                                </span>
                                <span className="badge badge-light-success fs-base">
                                  <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        opacity="0.5"
                                        x={13}
                                        y={6}
                                        width={13}
                                        height={2}
                                        rx={1}
                                        transform="rotate(90 13 6)"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  4,8%
                                </span>
                              </div>
                              <span className="fs-6 fw-semibold text-gray-400">
                                Avarage cost per interaction
                              </span>
                            </div>
                            <div
                              id="kt_chart_widget_8_week_chart"
                              className="ms-n5 min-h-auto"
                              style={{ height: 275 }}
                            />
                            <div className="d-flex flex-wrap pt-5">
                              <div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
                                <div className="d-flex align-items-center mb-3 mb-sm-6">
                                  <span className="bullet bullet-dot bg-primary me-2 h-10px w-10px" />
                                  <span className="fw-bold text-gray-600 fs-6">
                                    Social Campaigns
                                  </span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <span className="bullet bullet-dot bg-danger me-2 h-10px w-10px" />
                                  <span className="fw-bold text-<gray-600 fs-6">
                                    Google Ads
                                  </span>
                                </div>
                              </div>
                              <div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
                                <div className="d-flex align-items-center mb-3 mb-sm-6">
                                  <span className="bullet bullet-dot bg-success me-2 h-10px w-10px" />
                                  <span className="fw-bold text-gray-600 fs-6">
                                    Email Newsletter
                                  </span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <span className="bullet bullet-dot bg-warning me-2 h-10px w-10px" />
                                  <span className="fw-bold text-gray-600 fs-6">
                                    Courses
                                  </span>
                                </div>
                              </div>
                              <div className="d-flex flex-column pt-sm-3 pt-6">
                                <div className="d-flex align-items-center mb-3 mb-sm-6">
                                  <span className="bullet bullet-dot bg-info me-2 h-10px w-10px" />
                                  <span className="fw-bold text-gray-600 fs-6">
                                    TV Campaign
                                  </span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <span className="bullet bullet-dot bg-success me-2 h-10px w-10px" />
                                  <span className="fw-bold text-gray-600 fs-6">
                                    Radio
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade active show"
                            id="kt_chart_widget_8_month_tab"
                            role="tabpanel"
                            aria-labelledby="#kt_chart_widget_8_month_toggle"
                          >
                            <div className="mb-5">
                              <div className="d-flex align-items-center mb-2">
                                <span className="fs-1 fw-semibold text-gray-400 me-1 mt-n1">
                                  $
                                </span>
                                <span className="fs-3x fw-bold text-gray-800 me-2 lh-1 ls-n2">
                                  8,55
                                </span>
                                <span className="badge badge-light-success fs-base">
                                  <span className="svg-icon svg-icon-5 svg-icon-success ms-n1">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        opacity="0.5"
                                        x={13}
                                        y={6}
                                        width={13}
                                        height={2}
                                        rx={1}
                                        transform="rotate(90 13 6)"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  2.2%
                                </span>
                              </div>
                              <span className="fs-6 fw-semibold text-gray-400">
                                Avarage cost per interaction
                              </span>
                            </div>
                            <div
                              id="kt_chart_widget_8_month_chart"
                              className="ms-n5 min-h-auto"
                              style={{ height: 275, minHeight: 290 }}
                            >
                              <div
                                id="apexchartsqpeag0b5"
                                className="apexcharts-canvas apexchartsqpeag0b5 apexcharts-theme-light"
                                style={{ width: 705, height: 275 }}
                              >
                                <svg
                                  id="SvgjsSvg1195"
                                  width={705}
                                  height={275}
                                  xmlns="http://www.w3.org/2000/svg"
                                  version="1.1"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  xmlns:svgjs="http://svgjs.dev"
                                  className="apexcharts-svg apexcharts-zoomable"
                                  xmlns:data="ApexChartsNS"
                                  transform="translate(0, 0)"
                                  style={{ background: "transparent" }}
                                >
                                  <g
                                    id="SvgjsG1197"
                                    className="apexcharts-inner apexcharts-graphical"
                                    transform="translate(48.703125, 30)"
                                  >
                                    <defs id="SvgjsDefs1196">
                                      <clipPath id="gridRectMaskqpeag0b5">
                                        <rect
                                          id="SvgjsRect1203"
                                          width="640.296875"
                                          height={212}
                                          x={-2}
                                          y={0}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                      <clipPath id="forecastMaskqpeag0b5" />
                                      <clipPath id="nonForecastMaskqpeag0b5" />
                                      <clipPath id="gridRectMarkerMaskqpeag0b5">
                                        <rect
                                          id="SvgjsRect1204"
                                          width="640.296875"
                                          height={216}
                                          x={-2}
                                          y={-2}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                    </defs>
                                    <rect
                                      id="SvgjsRect1202"
                                      width={0}
                                      height={212}
                                      x={0}
                                      y={0}
                                      rx={0}
                                      ry={0}
                                      opacity={1}
                                      strokeWidth={1}
                                      stroke="#b6b6b6"
                                      strokeDasharray={3}
                                      fill="#b1b9c4"
                                      className="apexcharts-xcrosshairs"
                                      y2={212}
                                      filter="none"
                                      fillOpacity="0.9"
                                    />
                                    <g
                                      id="SvgjsG1254"
                                      className="apexcharts-xaxis"
                                      transform="translate(0, 0)"
                                    >
                                      <g
                                        id="SvgjsG1255"
                                        className="apexcharts-xaxis-texts-g"
                                        transform="translate(0, -4)"
                                      >
                                        <text
                                          id="SvgjsText1257"
                                          fontFamily="inherit"
                                          x={0}
                                          y={241}
                                          textAnchor="middle"
                                          dominantBaseline="auto"
                                          fontSize="13px"
                                          fontWeight={400}
                                          fill="#a1a5b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                        >
                                          <tspan id="SvgjsTspan1258">0</tspan>
                                          <title>0</title>
                                        </text>
                                        <text
                                          id="SvgjsText1260"
                                          fontFamily="inherit"
                                          x="90.89955357142858"
                                          y={241}
                                          textAnchor="middle"
                                          dominantBaseline="auto"
                                          fontSize="13px"
                                          fontWeight={400}
                                          fill="#a1a5b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                        >
                                          <tspan id="SvgjsTspan1261">100</tspan>
                                          <title>100</title>
                                        </text>
                                        <text
                                          id="SvgjsText1263"
                                          fontFamily="inherit"
                                          x="181.79910714285717"
                                          y={241}
                                          textAnchor="middle"
                                          dominantBaseline="auto"
                                          fontSize="13px"
                                          fontWeight={400}
                                          fill="#a1a5b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                        >
                                          <tspan id="SvgjsTspan1264">200</tspan>
                                          <title>200</title>
                                        </text>
                                        <text
                                          id="SvgjsText1266"
                                          fontFamily="inherit"
                                          x="272.6986607142857"
                                          y={241}
                                          textAnchor="middle"
                                          dominantBaseline="auto"
                                          fontSize="13px"
                                          fontWeight={400}
                                          fill="#a1a5b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                        >
                                          <tspan id="SvgjsTspan1267">300</tspan>
                                          <title>300</title>
                                        </text>
                                        <text
                                          id="SvgjsText1269"
                                          fontFamily="inherit"
                                          x="363.5982142857143"
                                          y={241}
                                          textAnchor="middle"
                                          dominantBaseline="auto"
                                          fontSize="13px"
                                          fontWeight={400}
                                          fill="#a1a5b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                        >
                                          <tspan id="SvgjsTspan1270">400</tspan>
                                          <title>400</title>
                                        </text>
                                        <text
                                          id="SvgjsText1272"
                                          fontFamily="inherit"
                                          x="454.49776785714283"
                                          y={241}
                                          textAnchor="middle"
                                          dominantBaseline="auto"
                                          fontSize="13px"
                                          fontWeight={400}
                                          fill="#a1a5b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                        >
                                          <tspan id="SvgjsTspan1273">500</tspan>
                                          <title>500</title>
                                        </text>
                                        <text
                                          id="SvgjsText1275"
                                          fontFamily="inherit"
                                          x="545.3973214285713"
                                          y={241}
                                          textAnchor="middle"
                                          dominantBaseline="auto"
                                          fontSize="13px"
                                          fontWeight={400}
                                          fill="#a1a5b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                        >
                                          <tspan id="SvgjsTspan1276">600</tspan>
                                          <title>600</title>
                                        </text>
                                        <text
                                          id="SvgjsText1278"
                                          fontFamily="inherit"
                                          x="636.2968749999999"
                                          y={241}
                                          textAnchor="middle"
                                          dominantBaseline="auto"
                                          fontSize="13px"
                                          fontWeight={400}
                                          fill="#a1a5b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                        >
                                          <tspan id="SvgjsTspan1279">700</tspan>
                                          <title>700</title>
                                        </text>
                                      </g>
                                    </g>
                                    <g
                                      id="SvgjsG1306"
                                      className="apexcharts-grid"
                                    >
                                      <g
                                        id="SvgjsG1307"
                                        className="apexcharts-gridlines-horizontal"
                                      >
                                        <line
                                          id="SvgjsLine1317"
                                          x1={0}
                                          y1={0}
                                          x2="636.296875"
                                          y2={0}
                                          stroke="#e1e3ea"
                                          strokeDasharray={4}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1318"
                                          x1={0}
                                          y1="30.285714285714285"
                                          x2="636.296875"
                                          y2="30.285714285714285"
                                          stroke="#e1e3ea"
                                          strokeDasharray={4}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1319"
                                          x1={0}
                                          y1="60.57142857142857"
                                          x2="636.296875"
                                          y2="60.57142857142857"
                                          stroke="#e1e3ea"
                                          strokeDasharray={4}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1320"
                                          x1={0}
                                          y1="90.85714285714286"
                                          x2="636.296875"
                                          y2="90.85714285714286"
                                          stroke="#e1e3ea"
                                          strokeDasharray={4}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1321"
                                          x1={0}
                                          y1="121.14285714285714"
                                          x2="636.296875"
                                          y2="121.14285714285714"
                                          stroke="#e1e3ea"
                                          strokeDasharray={4}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1322"
                                          x1={0}
                                          y1="151.42857142857142"
                                          x2="636.296875"
                                          y2="151.42857142857142"
                                          stroke="#e1e3ea"
                                          strokeDasharray={4}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1323"
                                          x1={0}
                                          y1="181.7142857142857"
                                          x2="636.296875"
                                          y2="181.7142857142857"
                                          stroke="#e1e3ea"
                                          strokeDasharray={4}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1324"
                                          x1={0}
                                          y1="211.99999999999997"
                                          x2="636.296875"
                                          y2="211.99999999999997"
                                          stroke="#e1e3ea"
                                          strokeDasharray={4}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                      </g>
                                      <g
                                        id="SvgjsG1308"
                                        className="apexcharts-gridlines-vertical"
                                      />
                                      <line
                                        id="SvgjsLine1309"
                                        x1={0}
                                        y1={213}
                                        x2={0}
                                        y2={213}
                                        stroke="#e0e0e0"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                        className="apexcharts-xaxis-tick"
                                      />
                                      <line
                                        id="SvgjsLine1310"
                                        x1="90.89955139160156"
                                        y1={213}
                                        x2="90.89955139160156"
                                        y2={213}
                                        stroke="#e0e0e0"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                        className="apexcharts-xaxis-tick"
                                      />
                                      <line
                                        id="SvgjsLine1311"
                                        x1="181.79910278320312"
                                        y1={213}
                                        x2="181.79910278320312"
                                        y2={213}
                                        stroke="#e0e0e0"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                        className="apexcharts-xaxis-tick"
                                      />
                                      <line
                                        id="SvgjsLine1312"
                                        x1="272.69866943359375"
                                        y1={213}
                                        x2="272.69866943359375"
                                        y2={213}
                                        stroke="#e0e0e0"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                        className="apexcharts-xaxis-tick"
                                      />
                                      <line
                                        id="SvgjsLine1313"
                                        x1="363.59820556640625"
                                        y1={213}
                                        x2="363.59820556640625"
                                        y2={213}
                                        stroke="#e0e0e0"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                        className="apexcharts-xaxis-tick"
                                      />
                                      <line
                                        id="SvgjsLine1314"
                                        x1="454.4977722167969"
                                        y1={213}
                                        x2="454.4977722167969"
                                        y2={213}
                                        stroke="#e0e0e0"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                        className="apexcharts-xaxis-tick"
                                      />
                                      <line
                                        id="SvgjsLine1315"
                                        x1="545.3973388671875"
                                        y1={213}
                                        x2="545.3973388671875"
                                        y2={213}
                                        stroke="#e0e0e0"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                        className="apexcharts-xaxis-tick"
                                      />
                                      <line
                                        id="SvgjsLine1316"
                                        x1="636.296875"
                                        y1={213}
                                        x2="636.296875"
                                        y2={213}
                                        stroke="#e0e0e0"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                        className="apexcharts-xaxis-tick"
                                      />
                                      <line
                                        id="SvgjsLine1326"
                                        x1={0}
                                        y1={212}
                                        x2="636.296875"
                                        y2={212}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                      <line
                                        id="SvgjsLine1325"
                                        x1={0}
                                        y1={1}
                                        x2={0}
                                        y2={212}
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1205"
                                      className="apexcharts-bubble-series apexcharts-plot-series"
                                    >
                                      <g
                                        id="SvgjsG1206"
                                        className="apexcharts-series"
                                        seriesname="SocialxCampaigns"
                                        data:longestseries="true"
                                        rel={1}
                                        data:realindex={0}
                                      >
                                        <g
                                          id="SvgjsG1207"
                                          className="apexcharts-series-markers-wrap"
                                          data:realindex={0}
                                        >
                                          <g
                                            id="SvgjsG1209"
                                            className=""
                                            clipPath="url(#gridRectMarkerMaskqpeag0b5)"
                                          >
                                            <circle
                                              id="SvgjsCircle1210"
                                              r={0}
                                              cx="113.62444196428572"
                                              cy="121.14285714285714"
                                              className="apexcharts-marker wefvv8dtc"
                                              fill="#3e97ff"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeOpacity="0.9"
                                              rel={0}
                                              j={0}
                                              index={0}
                                              default-marker-size={0}
                                            />
                                            <circle
                                              id="SvgjsCircle1211"
                                              r={0}
                                              cx="113.62444196428572"
                                              cy={0}
                                              className="apexcharts-nullpoint"
                                              fill="#3e97ff"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeOpacity="0.9"
                                              rel={1}
                                              j={1}
                                              index={0}
                                              default-marker-size={0}
                                            />
                                          </g>
                                          <g
                                            id="SvgjsG1212"
                                            className="apexcharts-series-markers apexcharts-series-bubble"
                                            clipPath="url(#gridRectMarkerMaskqpeag0b5)"
                                          >
                                            <circle
                                              id="SvgjsCircle1213"
                                              r="35.333333333333336"
                                              cx="113.62444196428572"
                                              cy="121.14285714285714"
                                              x="109.62444196428572"
                                              y="117.14285714285714"
                                              fill="rgba(62,151,255,1)"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeDasharray={0}
                                              strokeOpacity="0.9"
                                              width={0}
                                              height={0}
                                              rel={0}
                                              j={0}
                                              index={0}
                                              default-marker-size="35.333333333333336"
                                              className="apexcharts-marker"
                                            />
                                          </g>
                                          <g className="apexcharts-series-markers">
                                            <circle
                                              id="SvgjsCircle1332"
                                              r={0}
                                              cx={0}
                                              cy={0}
                                              className="apexcharts-marker wkt09dr5zg"
                                              fill="#3e97ff"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeOpacity="0.9"
                                              default-marker-size={0}
                                            />
                                          </g>
                                        </g>
                                      </g>
                                      <g
                                        id="SvgjsG1214"
                                        className="apexcharts-series"
                                        seriesname="EmailxNewsletter"
                                        data:longestseries="true"
                                        rel={2}
                                        data:realindex={1}
                                      >
                                        <g
                                          id="SvgjsG1215"
                                          className="apexcharts-series-markers-wrap"
                                          data:realindex={1}
                                        >
                                          <g
                                            id="SvgjsG1217"
                                            className=""
                                            clipPath="url(#gridRectMarkerMaskqpeag0b5)"
                                          >
                                            <circle
                                              id="SvgjsCircle1218"
                                              r={0}
                                              cx="227.24888392857144"
                                              cy={106}
                                              className="apexcharts-marker wb5i6cy1a"
                                              fill="#50cd89"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeOpacity="0.9"
                                              rel={0}
                                              j={0}
                                              index={1}
                                              default-marker-size={0}
                                            />
                                            <circle
                                              id="SvgjsCircle1219"
                                              r={0}
                                              cx="113.62444196428572"
                                              cy={0}
                                              className="apexcharts-nullpoint"
                                              fill="#50cd89"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeOpacity="0.9"
                                              rel={1}
                                              j={1}
                                              index={1}
                                              default-marker-size={0}
                                            />
                                          </g>
                                          <g
                                            id="SvgjsG1220"
                                            className="apexcharts-series-markers apexcharts-series-bubble"
                                            clipPath="url(#gridRectMarkerMaskqpeag0b5)"
                                          >
                                            <circle
                                              id="SvgjsCircle1221"
                                              r="30.916666666666668"
                                              cx="227.24888392857144"
                                              cy={106}
                                              x="223.24888392857144"
                                              y={102}
                                              fill="rgba(80,205,137,1)"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeDasharray={0}
                                              strokeOpacity="0.9"
                                              width={0}
                                              height={0}
                                              rel={0}
                                              j={0}
                                              index={1}
                                              default-marker-size="30.916666666666668"
                                              className="apexcharts-marker"
                                            />
                                          </g>
                                          <g className="apexcharts-series-markers">
                                            <circle
                                              id="SvgjsCircle1333"
                                              r={0}
                                              cx={0}
                                              cy={0}
                                              className="apexcharts-marker whqr69on7"
                                              fill="#50cd89"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeOpacity="0.9"
                                              default-marker-size={0}
                                            />
                                          </g>
                                        </g>
                                      </g>
                                      <g
                                        id="SvgjsG1222"
                                        className="apexcharts-series"
                                        seriesname="TVxCampaign"
                                        data:longestseries="true"
                                        rel={3}
                                        data:realindex={2}
                                      >
                                        <g
                                          id="SvgjsG1223"
                                          className="apexcharts-series-markers-wrap"
                                          data:realindex={2}
                                        >
                                          <g
                                            id="SvgjsG1225"
                                            className=""
                                            clipPath="url(#gridRectMarkerMaskqpeag0b5)"
                                          >
                                            <circle
                                              id="SvgjsCircle1226"
                                              r={0}
                                              cx="318.1484375"
                                              cy="75.71428571428572"
                                              className="apexcharts-marker waifbt4g8"
                                              fill="#ffc700"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeOpacity="0.9"
                                              rel={0}
                                              j={0}
                                              index={2}
                                              default-marker-size={0}
                                            />
                                            <circle
                                              id="SvgjsCircle1227"
                                              r={0}
                                              cx="113.62444196428572"
                                              cy={0}
                                              className="apexcharts-nullpoint"
                                              fill="#ffc700"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeOpacity="0.9"
                                              rel={1}
                                              j={1}
                                              index={2}
                                              default-marker-size={0}
                                            />
                                          </g>
                                          <g
                                            id="SvgjsG1228"
                                            className="apexcharts-series-markers apexcharts-series-bubble"
                                            clipPath="url(#gridRectMarkerMaskqpeag0b5)"
                                          >
                                            <circle
                                              id="SvgjsCircle1229"
                                              r="26.5"
                                              cx="318.1484375"
                                              cy="75.71428571428572"
                                              x="314.1484375"
                                              y="71.71428571428572"
                                              fill="rgba(255,199,0,1)"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeDasharray={0}
                                              strokeOpacity="0.9"
                                              width={0}
                                              height={0}
                                              rel={0}
                                              j={0}
                                              index={2}
                                              default-marker-size="26.5"
                                              className="apexcharts-marker"
                                            />
                                          </g>
                                          <g className="apexcharts-series-markers">
                                            <circle
                                              id="SvgjsCircle1334"
                                              r={0}
                                              cx={0}
                                              cy={0}
                                              className="apexcharts-marker w84g2wjrp"
                                              fill="#ffc700"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeOpacity="0.9"
                                              default-marker-size={0}
                                            />
                                          </g>
                                        </g>
                                      </g>
                                      <g
                                        id="SvgjsG1230"
                                        className="apexcharts-series"
                                        seriesname="GooglexAds"
                                        data:longestseries="true"
                                        rel={4}
                                        data:realindex={3}
                                      >
                                        <g
                                          id="SvgjsG1231"
                                          className="apexcharts-series-markers-wrap"
                                          data:realindex={3}
                                        >
                                          <g
                                            id="SvgjsG1233"
                                            className=""
                                            clipPath="url(#gridRectMarkerMaskqpeag0b5)"
                                          >
                                            <circle
                                              id="SvgjsCircle1234"
                                              r={0}
                                              cx="409.0479910714286"
                                              cy="136.28571428571428"
                                              className="apexcharts-marker w3la1zf3r"
                                              fill="#f1416c"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeOpacity="0.9"
                                              rel={0}
                                              j={0}
                                              index={3}
                                              default-marker-size={0}
                                            />
                                            <circle
                                              id="SvgjsCircle1235"
                                              r={0}
                                              cx="113.62444196428572"
                                              cy={0}
                                              className="apexcharts-nullpoint"
                                              fill="#f1416c"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeOpacity="0.9"
                                              rel={1}
                                              j={1}
                                              index={3}
                                              default-marker-size={0}
                                            />
                                          </g>
                                          <g
                                            id="SvgjsG1236"
                                            className="apexcharts-series-markers apexcharts-series-bubble"
                                            clipPath="url(#gridRectMarkerMaskqpeag0b5)"
                                          >
                                            <circle
                                              id="SvgjsCircle1237"
                                              r="22.083333333333332"
                                              cx="409.0479910714286"
                                              cy="136.28571428571428"
                                              x="405.0479910714286"
                                              y="132.28571428571428"
                                              fill="rgba(241,65,108,1)"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeDasharray={0}
                                              strokeOpacity="0.9"
                                              width={0}
                                              height={0}
                                              rel={0}
                                              j={0}
                                              index={3}
                                              default-marker-size="22.083333333333332"
                                              className="apexcharts-marker"
                                            />
                                          </g>
                                          <g className="apexcharts-series-markers">
                                            <circle
                                              id="SvgjsCircle1335"
                                              r={0}
                                              cx={0}
                                              cy={0}
                                              className="apexcharts-marker wbzfgyjw1"
                                              fill="#f1416c"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeOpacity="0.9"
                                              default-marker-size={0}
                                            />
                                          </g>
                                        </g>
                                      </g>
                                      <g
                                        id="SvgjsG1238"
                                        className="apexcharts-series"
                                        seriesname="Courses"
                                        data:longestseries="true"
                                        rel={5}
                                        data:realindex={4}
                                      >
                                        <g
                                          id="SvgjsG1239"
                                          className="apexcharts-series-markers-wrap"
                                          data:realindex={4}
                                        >
                                          <g
                                            id="SvgjsG1241"
                                            className=""
                                            clipPath="url(#gridRectMarkerMaskqpeag0b5)"
                                          >
                                            <circle
                                              id="SvgjsCircle1242"
                                              r={0}
                                              cx="454.4977678571429"
                                              cy="60.571428571428555"
                                              className="apexcharts-marker wc51d39za"
                                              fill="#7239ea"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeOpacity="0.9"
                                              rel={0}
                                              j={0}
                                              index={4}
                                              default-marker-size={0}
                                            />
                                            <circle
                                              id="SvgjsCircle1243"
                                              r={0}
                                              cx="113.62444196428572"
                                              cy={0}
                                              className="apexcharts-nullpoint"
                                              fill="#7239ea"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeOpacity="0.9"
                                              rel={1}
                                              j={1}
                                              index={4}
                                              default-marker-size={0}
                                            />
                                          </g>
                                          <g
                                            id="SvgjsG1244"
                                            className="apexcharts-series-markers apexcharts-series-bubble"
                                            clipPath="url(#gridRectMarkerMaskqpeag0b5)"
                                          >
                                            <circle
                                              id="SvgjsCircle1245"
                                              r="26.5"
                                              cx="454.4977678571429"
                                              cy="60.571428571428555"
                                              x="450.4977678571429"
                                              y="56.571428571428555"
                                              fill="rgba(114,57,234,1)"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeDasharray={0}
                                              strokeOpacity="0.9"
                                              width={0}
                                              height={0}
                                              rel={0}
                                              j={0}
                                              index={4}
                                              default-marker-size="26.5"
                                              className="apexcharts-marker"
                                            />
                                          </g>
                                          <g className="apexcharts-series-markers">
                                            <circle
                                              id="SvgjsCircle1336"
                                              r={0}
                                              cx={0}
                                              cy={0}
                                              className="apexcharts-marker w7h9ls67t"
                                              fill="#7239ea"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeOpacity="0.9"
                                              default-marker-size={0}
                                            />
                                          </g>
                                        </g>
                                      </g>
                                      <g
                                        id="SvgjsG1246"
                                        className="apexcharts-series"
                                        seriesname="Radio"
                                        data:longestseries="true"
                                        rel={6}
                                        data:realindex={5}
                                      >
                                        <g
                                          id="SvgjsG1247"
                                          className="apexcharts-series-markers-wrap"
                                          data:realindex={5}
                                        >
                                          <g
                                            id="SvgjsG1249"
                                            className=""
                                            clipPath="url(#gridRectMarkerMaskqpeag0b5)"
                                          >
                                            <circle
                                              id="SvgjsCircle1250"
                                              r={0}
                                              cx="545.3973214285714"
                                              cy="136.28571428571428"
                                              className="apexcharts-marker w89a8f7bt"
                                              fill="#43ced7"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeOpacity="0.9"
                                              rel={0}
                                              j={0}
                                              index={5}
                                              default-marker-size={0}
                                            />
                                            <circle
                                              id="SvgjsCircle1251"
                                              r={0}
                                              cx="113.62444196428572"
                                              cy={0}
                                              className="apexcharts-nullpoint"
                                              fill="#43ced7"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeOpacity="0.9"
                                              rel={1}
                                              j={1}
                                              index={5}
                                              default-marker-size={0}
                                            />
                                          </g>
                                          <g
                                            id="SvgjsG1252"
                                            className="apexcharts-series-markers apexcharts-series-bubble"
                                            clipPath="url(#gridRectMarkerMaskqpeag0b5)"
                                          >
                                            <circle
                                              id="SvgjsCircle1253"
                                              r="24.733333333333334"
                                              cx="545.3973214285714"
                                              cy="136.28571428571428"
                                              x="541.3973214285714"
                                              y="132.28571428571428"
                                              fill="rgba(67,206,215,1)"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeDasharray={0}
                                              strokeOpacity="0.9"
                                              width={0}
                                              height={0}
                                              rel={0}
                                              j={0}
                                              index={5}
                                              default-marker-size="24.733333333333334"
                                              className="apexcharts-marker"
                                            />
                                          </g>
                                          <g className="apexcharts-series-markers">
                                            <circle
                                              id="SvgjsCircle1337"
                                              r={0}
                                              cx={0}
                                              cy={0}
                                              className="apexcharts-marker wib9yeiex"
                                              fill="#43ced7"
                                              fillOpacity={1}
                                              strokeWidth={0}
                                              strokeOpacity="0.9"
                                              default-marker-size={0}
                                            />
                                          </g>
                                        </g>
                                      </g>
                                      <g
                                        id="SvgjsG1208"
                                        className="apexcharts-datalabels"
                                        data:realindex={0}
                                      />
                                      <g
                                        id="SvgjsG1216"
                                        className="apexcharts-datalabels"
                                        data:realindex={1}
                                      />
                                      <g
                                        id="SvgjsG1224"
                                        className="apexcharts-datalabels"
                                        data:realindex={2}
                                      />
                                      <g
                                        id="SvgjsG1232"
                                        className="apexcharts-datalabels"
                                        data:realindex={3}
                                      />
                                      <g
                                        id="SvgjsG1240"
                                        className="apexcharts-datalabels"
                                        data:realindex={4}
                                      />
                                      <g
                                        id="SvgjsG1248"
                                        className="apexcharts-datalabels"
                                        data:realindex={5}
                                      />
                                    </g>
                                    <line
                                      id="SvgjsLine1327"
                                      x1={0}
                                      y1={0}
                                      x2="636.296875"
                                      y2={0}
                                      stroke="#b6b6b6"
                                      strokeDasharray={0}
                                      strokeWidth={1}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs"
                                    />
                                    <line
                                      id="SvgjsLine1328"
                                      x1={0}
                                      y1={0}
                                      x2="636.296875"
                                      y2={0}
                                      strokeDasharray={0}
                                      strokeWidth={0}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs-hidden"
                                    />
                                    <g
                                      id="SvgjsG1329"
                                      className="apexcharts-yaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1330"
                                      className="apexcharts-xaxis-annotations"
                                    />
                                    <g
                                      id="SvgjsG1331"
                                      className="apexcharts-point-annotations"
                                    />
                                    <rect
                                      id="SvgjsRect1338"
                                      width={0}
                                      height={0}
                                      x={0}
                                      y={0}
                                      rx={0}
                                      ry={0}
                                      opacity={1}
                                      strokeWidth={0}
                                      stroke="none"
                                      strokeDasharray={0}
                                      fill="#fefefe"
                                      className="apexcharts-zoom-rect"
                                    />
                                    <rect
                                      id="SvgjsRect1339"
                                      width={0}
                                      height={0}
                                      x={0}
                                      y={0}
                                      rx={0}
                                      ry={0}
                                      opacity={1}
                                      strokeWidth={0}
                                      stroke="none"
                                      strokeDasharray={0}
                                      fill="#fefefe"
                                      className="apexcharts-selection-rect"
                                    />
                                  </g>
                                  <g
                                    id="SvgjsG1280"
                                    className="apexcharts-yaxis"
                                    rel={0}
                                    transform="translate(18.703125, 0)"
                                  >
                                    <g
                                      id="SvgjsG1281"
                                      className="apexcharts-yaxis-texts-g"
                                    >
                                      <text
                                        id="SvgjsText1283"
                                        fontFamily="inherit"
                                        x={20}
                                        y="31.7"
                                        textAnchor="end"
                                        dominantBaseline="auto"
                                        fontSize="13px"
                                        fontWeight={400}
                                        fill="#a1a5b7"
                                        className="apexcharts-text apexcharts-yaxis-label "
                                        style={{ fontFamily: "inherit" }}
                                      >
                                        <tspan id="SvgjsTspan1284">700</tspan>
                                        <title>700</title>
                                      </text>
                                      <text
                                        id="SvgjsText1286"
                                        fontFamily="inherit"
                                        x={20}
                                        y="61.98571428571429"
                                        textAnchor="end"
                                        dominantBaseline="auto"
                                        fontSize="13px"
                                        fontWeight={400}
                                        fill="#a1a5b7"
                                        className="apexcharts-text apexcharts-yaxis-label "
                                        style={{ fontFamily: "inherit" }}
                                      >
                                        <tspan id="SvgjsTspan1287">600</tspan>
                                        <title>600</title>
                                      </text>
                                      <text
                                        id="SvgjsText1289"
                                        fontFamily="inherit"
                                        x={20}
                                        y="92.27142857142857"
                                        textAnchor="end"
                                        dominantBaseline="auto"
                                        fontSize="13px"
                                        fontWeight={400}
                                        fill="#a1a5b7"
                                        className="apexcharts-text apexcharts-yaxis-label "
                                        style={{ fontFamily: "inherit" }}
                                      >
                                        <tspan id="SvgjsTspan1290">500</tspan>
                                        <title>500</title>
                                      </text>
                                      <text
                                        id="SvgjsText1292"
                                        fontFamily="inherit"
                                        x={20}
                                        y="122.55714285714286"
                                        textAnchor="end"
                                        dominantBaseline="auto"
                                        fontSize="13px"
                                        fontWeight={400}
                                        fill="#a1a5b7"
                                        className="apexcharts-text apexcharts-yaxis-label "
                                        style={{ fontFamily: "inherit" }}
                                      >
                                        <tspan id="SvgjsTspan1293">400</tspan>
                                        <title>400</title>
                                      </text>
                                      <text
                                        id="SvgjsText1295"
                                        fontFamily="inherit"
                                        x={20}
                                        y="152.84285714285713"
                                        textAnchor="end"
                                        dominantBaseline="auto"
                                        fontSize="13px"
                                        fontWeight={400}
                                        fill="#a1a5b7"
                                        className="apexcharts-text apexcharts-yaxis-label "
                                        style={{ fontFamily: "inherit" }}
                                      >
                                        <tspan id="SvgjsTspan1296">300</tspan>
                                        <title>300</title>
                                      </text>
                                      <text
                                        id="SvgjsText1298"
                                        fontFamily="inherit"
                                        x={20}
                                        y="183.1285714285714"
                                        textAnchor="end"
                                        dominantBaseline="auto"
                                        fontSize="13px"
                                        fontWeight={400}
                                        fill="#a1a5b7"
                                        className="apexcharts-text apexcharts-yaxis-label "
                                        style={{ fontFamily: "inherit" }}
                                      >
                                        <tspan id="SvgjsTspan1299">200</tspan>
                                        <title>200</title>
                                      </text>
                                      <text
                                        id="SvgjsText1301"
                                        fontFamily="inherit"
                                        x={20}
                                        y="213.41428571428568"
                                        textAnchor="end"
                                        dominantBaseline="auto"
                                        fontSize="13px"
                                        fontWeight={400}
                                        fill="#a1a5b7"
                                        className="apexcharts-text apexcharts-yaxis-label "
                                        style={{ fontFamily: "inherit" }}
                                      >
                                        <tspan id="SvgjsTspan1302">100</tspan>
                                        <title>100</title>
                                      </text>
                                      <text
                                        id="SvgjsText1304"
                                        fontFamily="inherit"
                                        x={20}
                                        y="243.69999999999996"
                                        textAnchor="end"
                                        dominantBaseline="auto"
                                        fontSize="13px"
                                        fontWeight={400}
                                        fill="#a1a5b7"
                                        className="apexcharts-text apexcharts-yaxis-label "
                                        style={{ fontFamily: "inherit" }}
                                      >
                                        <tspan id="SvgjsTspan1305">0</tspan>
                                        <title>0</title>
                                      </text>
                                    </g>
                                  </g>
                                  <g
                                    id="SvgjsG1198"
                                    className="apexcharts-annotations"
                                  />
                                </svg>
                                <div
                                  className="apexcharts-legend"
                                  style={{ maxHeight: "137.5px" }}
                                />
                                <div className="apexcharts-tooltip apexcharts-theme-light">
                                  <div
                                    className="apexcharts-tooltip-title"
                                    style={{
                                      fontFamily: "inherit",
                                      fontSize: 12
                                    }}
                                  />
                                  <div
                                    className="apexcharts-tooltip-series-group"
                                    style={{ order: 1 }}
                                  >
                                    <span
                                      className="apexcharts-tooltip-marker"
                                      style={{
                                        backgroundColor: "rgb(62, 151, 255)"
                                      }}
                                    />
                                    <div
                                      className="apexcharts-tooltip-text"
                                      style={{
                                        fontFamily: "inherit",
                                        fontSize: 12
                                      }}
                                    >
                                      <div className="apexcharts-tooltip-y-group">
                                        <span className="apexcharts-tooltip-text-y-label" />
                                        <span className="apexcharts-tooltip-text-y-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-goals-group">
                                        <span className="apexcharts-tooltip-text-goals-label" />
                                        <span className="apexcharts-tooltip-text-goals-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-z-group">
                                        <span className="apexcharts-tooltip-text-z-label" />
                                        <span className="apexcharts-tooltip-text-z-value" />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="apexcharts-tooltip-series-group"
                                    style={{ order: 2 }}
                                  >
                                    <span
                                      className="apexcharts-tooltip-marker"
                                      style={{
                                        backgroundColor: "rgb(80, 205, 137)"
                                      }}
                                    />
                                    <div
                                      className="apexcharts-tooltip-text"
                                      style={{
                                        fontFamily: "inherit",
                                        fontSize: 12
                                      }}
                                    >
                                      <div className="apexcharts-tooltip-y-group">
                                        <span className="apexcharts-tooltip-text-y-label" />
                                        <span className="apexcharts-tooltip-text-y-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-goals-group">
                                        <span className="apexcharts-tooltip-text-goals-label" />
                                        <span className="apexcharts-tooltip-text-goals-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-z-group">
                                        <span className="apexcharts-tooltip-text-z-label" />
                                        <span className="apexcharts-tooltip-text-z-value" />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="apexcharts-tooltip-series-group"
                                    style={{ order: 3 }}
                                  >
                                    <span
                                      className="apexcharts-tooltip-marker"
                                      style={{
                                        backgroundColor: "rgb(255, 199, 0)"
                                      }}
                                    />
                                    <div
                                      className="apexcharts-tooltip-text"
                                      style={{
                                        fontFamily: "inherit",
                                        fontSize: 12
                                      }}
                                    >
                                      <div className="apexcharts-tooltip-y-group">
                                        <span className="apexcharts-tooltip-text-y-label" />
                                        <span className="apexcharts-tooltip-text-y-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-goals-group">
                                        <span className="apexcharts-tooltip-text-goals-label" />
                                        <span className="apexcharts-tooltip-text-goals-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-z-group">
                                        <span className="apexcharts-tooltip-text-z-label" />
                                        <span className="apexcharts-tooltip-text-z-value" />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="apexcharts-tooltip-series-group"
                                    style={{ order: 4 }}
                                  >
                                    <span
                                      className="apexcharts-tooltip-marker"
                                      style={{
                                        backgroundColor: "rgb(241, 65, 108)"
                                      }}
                                    />
                                    <div
                                      className="apexcharts-tooltip-text"
                                      style={{
                                        fontFamily: "inherit",
                                        fontSize: 12
                                      }}
                                    >
                                      <div className="apexcharts-tooltip-y-group">
                                        <span className="apexcharts-tooltip-text-y-label" />
                                        <span className="apexcharts-tooltip-text-y-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-goals-group">
                                        <span className="apexcharts-tooltip-text-goals-label" />
                                        <span className="apexcharts-tooltip-text-goals-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-z-group">
                                        <span className="apexcharts-tooltip-text-z-label" />
                                        <span className="apexcharts-tooltip-text-z-value" />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="apexcharts-tooltip-series-group"
                                    style={{ order: 5 }}
                                  >
                                    <span
                                      className="apexcharts-tooltip-marker"
                                      style={{
                                        backgroundColor: "rgb(114, 57, 234)"
                                      }}
                                    />
                                    <div
                                      className="apexcharts-tooltip-text"
                                      style={{
                                        fontFamily: "inherit",
                                        fontSize: 12
                                      }}
                                    >
                                      <div className="apexcharts-tooltip-y-group">
                                        <span className="apexcharts-tooltip-text-y-label" />
                                        <span className="apexcharts-tooltip-text-y-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-goals-group">
                                        <span className="apexcharts-tooltip-text-goals-label" />
                                        <span className="apexcharts-tooltip-text-goals-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-z-group">
                                        <span className="apexcharts-tooltip-text-z-label" />
                                        <span className="apexcharts-tooltip-text-z-value" />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="apexcharts-tooltip-series-group"
                                    style={{ order: 6 }}
                                  >
                                    <span
                                      className="apexcharts-tooltip-marker"
                                      style={{
                                        backgroundColor: "rgb(67, 206, 215)"
                                      }}
                                    />
                                    <div
                                      className="apexcharts-tooltip-text"
                                      style={{
                                        fontFamily: "inherit",
                                        fontSize: 12
                                      }}
                                    >
                                      <div className="apexcharts-tooltip-y-group">
                                        <span className="apexcharts-tooltip-text-y-label" />
                                        <span className="apexcharts-tooltip-text-y-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-goals-group">
                                        <span className="apexcharts-tooltip-text-goals-label" />
                                        <span className="apexcharts-tooltip-text-goals-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-z-group">
                                        <span className="apexcharts-tooltip-text-z-label" />
                                        <span className="apexcharts-tooltip-text-z-value" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                                  <div
                                    className="apexcharts-xaxistooltip-text"
                                    style={{
                                      fontFamily: "inherit",
                                      fontSize: 12
                                    }}
                                  />
                                </div>
                                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                  <div className="apexcharts-yaxistooltip-text" />
                                </div>
                              </div>
                            </div>
                            <div className="d-flex flex-wrap pt-5">
                              <div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
                                <div className="d-flex align-items-center mb-3 mb-sm-6">
                                  <span className="bullet bullet-dot bg-primary me-2 h-10px w-10px" />
                                  <span className="fw-bold text-gray-600 fs-6">
                                    Social Campaigns
                                  </span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <span className="bullet bullet-dot bg-danger me-2 h-10px w-10px" />
                                  <span className="fw-bold text-gray-600 fs-6">
                                    Google Ads
                                  </span>
                                </div>
                              </div>
                              <div className="d-flex flex-column me-7 me-lg-16 pt-sm-3 pt-6">
                                <div className="d-flex align-items-center mb-3 mb-sm-6">
                                  <span className="bullet bullet-dot bg-success me-2 h-10px w-10px" />
                                  <span className="fw-bold text-gray-600 fs-6">
                                    Email Newsletter
                                  </span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <span className="bullet bullet-dot bg-warning me-2 h-10px w-10px" />
                                  <span className="fw-bold text-gray-600 fs-6">
                                    Courses
                                  </span>
                                </div>
                              </div>
                              <div className="d-flex flex-column pt-sm-3 pt-6">
                                <div className="d-flex align-items-center mb-3 mb-sm-6">
                                  <span className="bullet bullet-dot bg-info me-2 h-10px w-10px" />
                                  <span className="fw-bold text-gray-600 fs-6">
                                    TV Campaign
                                  </span>
                                </div>
                                <div className="d-flex align-items-center">
                                  <span className="bullet bullet-dot bg-success me-2 h-10px w-10px" />
                                  <span className="fw-bold text-gray-600 fs-6">
                                    Radio
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 mb-5 mb-xl-10">
                    <div className="card card-flush overflow-hidden h-xl-100">
                      <div className="card-header pt-5">
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bold text-dark">
                            Performance
                          </span>
                          <span className="text-gray-400 mt-1 fw-semibold fs-6">
                            1,046 Inbound Calls today
                          </span>
                        </h3>
                        <div className="card-toolbar">
                          <div
                            data-kt-daterangepicker="true"
                            data-kt-daterangepicker-opens="left"
                            data-kt-daterangepicker-range="today"
                            className="btn btn-sm btn-light d-flex align-items-center px-4"
                            data-kt-initialized={1}
                          >
                            <div className="text-gray-600 fw-bold">
                              8 Mar 2024
                            </div>
                            <span className="svg-icon svg-icon-1 ms-2 me-0">
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
                          </div>
                        </div>
                      </div>
                      <div className="card-body d-flex align-items-end p-0">
                        <div
                          id="kt_charts_widget_36"
                          className="min-h-auto w-100 ps-4 pe-6"
                          style={{ height: 300, minHeight: 315 }}
                        >
                          <div
                            id="apexcharts4xtdxrqy"
                            className="apexcharts-canvas apexcharts4xtdxrqy apexcharts-theme-light"
                            style={{ width: "714.5px", height: 300 }}
                          >
                            <svg
                              id="SvgjsSvg1062"
                              width="714.5"
                              height={300}
                              xmlns="http://www.w3.org/2000/svg"
                              version="1.1"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              xmlns:svgjs="http://svgjs.dev"
                              className="apexcharts-svg apexcharts-zoomable"
                              xmlns:data="ApexChartsNS"
                              transform="translate(0, 0)"
                              style={{ background: "transparent" }}
                            >
                              <g
                                id="SvgjsG1064"
                                className="apexcharts-inner apexcharts-graphical"
                                transform="translate(47.34765625, 30)"
                              >
                                <defs id="SvgjsDefs1063">
                                  <clipPath id="gridRectMask4xtdxrqy">
                                    <rect
                                      id="SvgjsRect1069"
                                      width="664.15234375"
                                      height="225.89866666666666"
                                      x="-3.5"
                                      y="-1.5"
                                      rx={0}
                                      ry={0}
                                      opacity={1}
                                      strokeWidth={0}
                                      stroke="none"
                                      strokeDasharray={0}
                                      fill="#fff"
                                    />
                                  </clipPath>
                                  <clipPath id="forecastMask4xtdxrqy" />
                                  <clipPath id="nonForecastMask4xtdxrqy" />
                                  <clipPath id="gridRectMarkerMask4xtdxrqy">
                                    <rect
                                      id="SvgjsRect1070"
                                      width="661.15234375"
                                      height="226.89866666666666"
                                      x={-2}
                                      y={-2}
                                      rx={0}
                                      ry={0}
                                      opacity={1}
                                      strokeWidth={0}
                                      stroke="none"
                                      strokeDasharray={0}
                                      fill="#fff"
                                    />
                                  </clipPath>
                                  <linearGradient
                                    id="SvgjsLinearGradient1075"
                                    x1={0}
                                    y1={0}
                                    x2={0}
                                    y2={1}
                                  >
                                    <stop
                                      id="SvgjsStop1076"
                                      stopOpacity="0.4"
                                      stopColor="rgba(62,151,255,0.4)"
                                      offset="0.15"
                                    />
                                    <stop
                                      id="SvgjsStop1077"
                                      stopOpacity="0.2"
                                      stopColor="rgba(255,255,255,0.2)"
                                      offset="1.2"
                                    />
                                    <stop
                                      id="SvgjsStop1078"
                                      stopOpacity="0.2"
                                      stopColor="rgba(255,255,255,0.2)"
                                      offset={1}
                                    />
                                  </linearGradient>
                                  <linearGradient
                                    id="SvgjsLinearGradient1084"
                                    x1={0}
                                    y1={0}
                                    x2={0}
                                    y2={1}
                                  >
                                    <stop
                                      id="SvgjsStop1085"
                                      stopOpacity="0.4"
                                      stopColor="rgba(80,205,137,0.4)"
                                      offset="0.15"
                                    />
                                    <stop
                                      id="SvgjsStop1086"
                                      stopOpacity="0.2"
                                      stopColor="rgba(255,255,255,0.2)"
                                      offset="1.2"
                                    />
                                    <stop
                                      id="SvgjsStop1087"
                                      stopOpacity="0.2"
                                      stopColor="rgba(255,255,255,0.2)"
                                      offset={1}
                                    />
                                  </linearGradient>
                                </defs>
                                <g
                                  id="SvgjsG1090"
                                  className="apexcharts-xaxis"
                                  transform="translate(0, 0)"
                                >
                                  <g
                                    id="SvgjsG1091"
                                    className="apexcharts-xaxis-texts-g"
                                    transform="translate(0, -10)"
                                  >
                                    <text
                                      id="SvgjsText1093"
                                      fontFamily="inherit"
                                      x={0}
                                      y="245.89866666666666"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="12px"
                                      fontWeight={400}
                                      fill="#a1a5b7"
                                      className="apexcharts-text apexcharts-xaxis-label "
                                      style={{ fontFamily: "inherit" }}
                                      transform="rotate(0 1 -1)"
                                    >
                                      <tspan id="SvgjsTspan1094" />
                                      <title />
                                    </text>
                                    <text
                                      id="SvgjsText1096"
                                      fontFamily="inherit"
                                      x="36.50846354166667"
                                      y="245.89866666666666"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="12px"
                                      fontWeight={400}
                                      fill="#a1a5b7"
                                      className="apexcharts-text apexcharts-xaxis-label "
                                      style={{ fontFamily: "inherit" }}
                                      transform="rotate(0 1 -1)"
                                    >
                                      <tspan id="SvgjsTspan1097" />
                                      <title />
                                    </text>
                                    <text
                                      id="SvgjsText1099"
                                      fontFamily="inherit"
                                      x="73.01692708333333"
                                      y="245.89866666666666"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="12px"
                                      fontWeight={400}
                                      fill="#a1a5b7"
                                      className="apexcharts-text apexcharts-xaxis-label "
                                      style={{ fontFamily: "inherit" }}
                                      transform="rotate(0 1 -1)"
                                    >
                                      <tspan id="SvgjsTspan1100" />
                                      <title />
                                    </text>
                                    <text
                                      id="SvgjsText1102"
                                      fontFamily="inherit"
                                      x="109.52539062499999"
                                      y="245.89866666666666"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="12px"
                                      fontWeight={400}
                                      fill="#a1a5b7"
                                      className="apexcharts-text apexcharts-xaxis-label "
                                      style={{ fontFamily: "inherit" }}
                                      transform="rotate(0 110.525390625 240.89866638183594)"
                                    >
                                      <tspan id="SvgjsTspan1103">9 AM</tspan>
                                      <title>9 AM</title>
                                    </text>
                                    <text
                                      id="SvgjsText1105"
                                      fontFamily="inherit"
                                      x="146.03385416666663"
                                      y="245.89866666666666"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="12px"
                                      fontWeight={400}
                                      fill="#a1a5b7"
                                      className="apexcharts-text apexcharts-xaxis-label "
                                      style={{ fontFamily: "inherit" }}
                                      transform="rotate(0 1 -1)"
                                    >
                                      <tspan id="SvgjsTspan1106" />
                                      <title />
                                    </text>
                                    <text
                                      id="SvgjsText1108"
                                      fontFamily="inherit"
                                      x="182.5423177083333"
                                      y="245.89866666666666"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="12px"
                                      fontWeight={400}
                                      fill="#a1a5b7"
                                      className="apexcharts-text apexcharts-xaxis-label "
                                      style={{ fontFamily: "inherit" }}
                                      transform="rotate(0 1 -1)"
                                    >
                                      <tspan id="SvgjsTspan1109" />
                                      <title />
                                    </text>
                                    <text
                                      id="SvgjsText1111"
                                      fontFamily="inherit"
                                      x="219.05078124999994"
                                      y="245.89866666666666"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="12px"
                                      fontWeight={400}
                                      fill="#a1a5b7"
                                      className="apexcharts-text apexcharts-xaxis-label "
                                      style={{ fontFamily: "inherit" }}
                                      transform="rotate(0 220.05078125 240.89866638183594)"
                                    >
                                      <tspan id="SvgjsTspan1112">12 PM</tspan>
                                      <title>12 PM</title>
                                    </text>
                                    <text
                                      id="SvgjsText1114"
                                      fontFamily="inherit"
                                      x="255.5592447916666"
                                      y="245.89866666666666"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="12px"
                                      fontWeight={400}
                                      fill="#a1a5b7"
                                      className="apexcharts-text apexcharts-xaxis-label "
                                      style={{ fontFamily: "inherit" }}
                                      transform="rotate(0 1 -1)"
                                    >
                                      <tspan id="SvgjsTspan1115" />
                                      <title />
                                    </text>
                                    <text
                                      id="SvgjsText1117"
                                      fontFamily="inherit"
                                      x="292.0677083333333"
                                      y="245.89866666666666"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="12px"
                                      fontWeight={400}
                                      fill="#a1a5b7"
                                      className="apexcharts-text apexcharts-xaxis-label "
                                      style={{ fontFamily: "inherit" }}
                                      transform="rotate(0 1 -1)"
                                    >
                                      <tspan id="SvgjsTspan1118" />
                                      <title />
                                    </text>
                                    <text
                                      id="SvgjsText1120"
                                      fontFamily="inherit"
                                      x="328.576171875"
                                      y="245.89866666666666"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="12px"
                                      fontWeight={400}
                                      fill="#a1a5b7"
                                      className="apexcharts-text apexcharts-xaxis-label "
                                      style={{ fontFamily: "inherit" }}
                                      transform="rotate(0 329.576171875 240.89866638183594)"
                                    >
                                      <tspan id="SvgjsTspan1121">15 PM</tspan>
                                      <title>15 PM</title>
                                    </text>
                                    <text
                                      id="SvgjsText1123"
                                      fontFamily="inherit"
                                      x="365.0846354166667"
                                      y="245.89866666666666"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="12px"
                                      fontWeight={400}
                                      fill="#a1a5b7"
                                      className="apexcharts-text apexcharts-xaxis-label "
                                      style={{ fontFamily: "inherit" }}
                                      transform="rotate(0 1 -1)"
                                    >
                                      <tspan id="SvgjsTspan1124" />
                                      <title />
                                    </text>
                                    <text
                                      id="SvgjsText1126"
                                      fontFamily="inherit"
                                      x="401.59309895833337"
                                      y="245.89866666666666"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="12px"
                                      fontWeight={400}
                                      fill="#a1a5b7"
                                      className="apexcharts-text apexcharts-xaxis-label "
                                      style={{ fontFamily: "inherit" }}
                                      transform="rotate(0 1 -1)"
                                    >
                                      <tspan id="SvgjsTspan1127" />
                                      <title />
                                    </text>
                                    <text
                                      id="SvgjsText1129"
                                      fontFamily="inherit"
                                      x="438.10156250000006"
                                      y="245.89866666666666"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="12px"
                                      fontWeight={400}
                                      fill="#a1a5b7"
                                      className="apexcharts-text apexcharts-xaxis-label "
                                      style={{ fontFamily: "inherit" }}
                                      transform="rotate(0 439.1015625 240.89866638183594)"
                                    >
                                      <tspan id="SvgjsTspan1130">18 PM</tspan>
                                      <title>18 PM</title>
                                    </text>
                                    <text
                                      id="SvgjsText1132"
                                      fontFamily="inherit"
                                      x="474.61002604166674"
                                      y="245.89866666666666"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="12px"
                                      fontWeight={400}
                                      fill="#a1a5b7"
                                      className="apexcharts-text apexcharts-xaxis-label "
                                      style={{ fontFamily: "inherit" }}
                                      transform="rotate(0 1 -1)"
                                    >
                                      <tspan id="SvgjsTspan1133" />
                                      <title />
                                    </text>
                                    <text
                                      id="SvgjsText1135"
                                      fontFamily="inherit"
                                      x="511.1184895833334"
                                      y="245.89866666666666"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="12px"
                                      fontWeight={400}
                                      fill="#a1a5b7"
                                      className="apexcharts-text apexcharts-xaxis-label "
                                      style={{ fontFamily: "inherit" }}
                                      transform="rotate(0 1 -1)"
                                    >
                                      <tspan id="SvgjsTspan1136" />
                                      <title />
                                    </text>
                                    <text
                                      id="SvgjsText1138"
                                      fontFamily="inherit"
                                      x="547.626953125"
                                      y="245.89866666666666"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="12px"
                                      fontWeight={400}
                                      fill="#a1a5b7"
                                      className="apexcharts-text apexcharts-xaxis-label "
                                      style={{ fontFamily: "inherit" }}
                                      transform="rotate(0 548.626953125 240.89866638183594)"
                                    >
                                      <tspan id="SvgjsTspan1139">19 PM</tspan>
                                      <title>19 PM</title>
                                    </text>
                                    <text
                                      id="SvgjsText1141"
                                      fontFamily="inherit"
                                      x="584.1354166666666"
                                      y="245.89866666666666"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="12px"
                                      fontWeight={400}
                                      fill="#a1a5b7"
                                      className="apexcharts-text apexcharts-xaxis-label "
                                      style={{ fontFamily: "inherit" }}
                                      transform="rotate(0 1 -1)"
                                    >
                                      <tspan id="SvgjsTspan1142" />
                                      <title />
                                    </text>
                                    <text
                                      id="SvgjsText1144"
                                      fontFamily="inherit"
                                      x="620.6438802083333"
                                      y="245.89866666666666"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="12px"
                                      fontWeight={400}
                                      fill="#a1a5b7"
                                      className="apexcharts-text apexcharts-xaxis-label "
                                      style={{ fontFamily: "inherit" }}
                                      transform="rotate(0 1 -1)"
                                    >
                                      <tspan id="SvgjsTspan1145" />
                                      <title />
                                    </text>
                                    <text
                                      id="SvgjsText1147"
                                      fontFamily="inherit"
                                      x="657.1523437499999"
                                      y="245.89866666666666"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="12px"
                                      fontWeight={400}
                                      fill="#a1a5b7"
                                      className="apexcharts-text apexcharts-xaxis-label "
                                      style={{ fontFamily: "inherit" }}
                                      transform="rotate(0 1 -1)"
                                    >
                                      <tspan id="SvgjsTspan1148" />
                                      <title />
                                    </text>
                                  </g>
                                </g>
                                <g id="SvgjsG1172" className="apexcharts-grid">
                                  <g
                                    id="SvgjsG1173"
                                    className="apexcharts-gridlines-horizontal"
                                  >
                                    <line
                                      id="SvgjsLine1175"
                                      x1={0}
                                      y1={0}
                                      x2="657.15234375"
                                      y2={0}
                                      stroke="#e1e3ea"
                                      strokeDasharray={4}
                                      strokeLinecap="butt"
                                      className="apexcharts-gridline"
                                    />
                                    <line
                                      id="SvgjsLine1176"
                                      x1={0}
                                      y1="37.14977777777778"
                                      x2="657.15234375"
                                      y2="37.14977777777778"
                                      stroke="#e1e3ea"
                                      strokeDasharray={4}
                                      strokeLinecap="butt"
                                      className="apexcharts-gridline"
                                    />
                                    <line
                                      id="SvgjsLine1177"
                                      x1={0}
                                      y1="74.29955555555556"
                                      x2="657.15234375"
                                      y2="74.29955555555556"
                                      stroke="#e1e3ea"
                                      strokeDasharray={4}
                                      strokeLinecap="butt"
                                      className="apexcharts-gridline"
                                    />
                                    <line
                                      id="SvgjsLine1178"
                                      x1={0}
                                      y1="111.44933333333333"
                                      x2="657.15234375"
                                      y2="111.44933333333333"
                                      stroke="#e1e3ea"
                                      strokeDasharray={4}
                                      strokeLinecap="butt"
                                      className="apexcharts-gridline"
                                    />
                                    <line
                                      id="SvgjsLine1179"
                                      x1={0}
                                      y1="148.5991111111111"
                                      x2="657.15234375"
                                      y2="148.5991111111111"
                                      stroke="#e1e3ea"
                                      strokeDasharray={4}
                                      strokeLinecap="butt"
                                      className="apexcharts-gridline"
                                    />
                                    <line
                                      id="SvgjsLine1180"
                                      x1={0}
                                      y1="185.7488888888889"
                                      x2="657.15234375"
                                      y2="185.7488888888889"
                                      stroke="#e1e3ea"
                                      strokeDasharray={4}
                                      strokeLinecap="butt"
                                      className="apexcharts-gridline"
                                    />
                                    <line
                                      id="SvgjsLine1181"
                                      x1={0}
                                      y1="222.89866666666668"
                                      x2="657.15234375"
                                      y2="222.89866666666668"
                                      stroke="#e1e3ea"
                                      strokeDasharray={4}
                                      strokeLinecap="butt"
                                      className="apexcharts-gridline"
                                    />
                                  </g>
                                  <g
                                    id="SvgjsG1174"
                                    className="apexcharts-gridlines-vertical"
                                  />
                                  <line
                                    id="SvgjsLine1183"
                                    x1={0}
                                    y1="222.89866666666666"
                                    x2="657.15234375"
                                    y2="222.89866666666666"
                                    stroke="transparent"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                  />
                                  <line
                                    id="SvgjsLine1182"
                                    x1={0}
                                    y1={1}
                                    x2={0}
                                    y2="222.89866666666666"
                                    stroke="transparent"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                  />
                                </g>
                                <g
                                  id="SvgjsG1071"
                                  className="apexcharts-area-series apexcharts-plot-series"
                                >
                                  <g
                                    id="SvgjsG1072"
                                    className="apexcharts-series"
                                    seriesname="InboundxCalls"
                                    data:longestseries="true"
                                    rel={1}
                                    data:realindex={0}
                                  >
                                    <path
                                      id="SvgjsPath1079"
                                      d="M0 222.89866666666666L0 136.21585185185185C12.777962239583335 136.21585185185185 23.730501302083336 99.06607407407407 36.50846354166667 99.06607407407407C49.28642578125 99.06607407407407 60.23896484375001 99.06607407407407 73.01692708333334 99.06607407407407C85.79488932291667 99.06607407407407 96.74742838541667 148.5991111111111 109.525390625 148.5991111111111C122.30335286458333 148.5991111111111 133.25589192708335 148.5991111111111 146.03385416666669 148.5991111111111C158.81181640625002 148.5991111111111 169.76435546875 185.74888888888887 182.54231770833334 185.74888888888887C195.32027994791667 185.74888888888887 206.27281901041667 185.74888888888887 219.05078125 185.74888888888887C231.82874348958333 185.74888888888887 242.78128255208335 99.06607407407407 255.55924479166669 99.06607407407407C268.33720703125005 99.06607407407407 279.28974609375 99.06607407407407 292.06770833333337 99.06607407407407C304.8456705729167 99.06607407407407 315.7982096354167 123.83259259259259 328.576171875 123.83259259259259C341.35413411458336 123.83259259259259 352.3066731770833 123.83259259259259 365.0846354166667 123.83259259259259C377.86259765625005 123.83259259259259 388.81513671875 74.29955555555554 401.59309895833337 74.29955555555554C414.3710611979167 74.29955555555554 425.3236002604167 74.29955555555554 438.1015625 74.29955555555554C450.87952473958336 74.29955555555554 461.8320638020833 99.06607407407407 474.6100260416667 99.06607407407407C487.38798828125005 99.06607407407407 498.34052734375 99.06607407407407 511.11848958333337 99.06607407407407C523.8964518229167 99.06607407407407 534.8489908854167 99.06607407407407 547.626953125 99.06607407407407C560.4049153645833 99.06607407407407 571.3574544270834 148.5991111111111 584.1354166666667 148.5991111111111C596.91337890625 148.5991111111111 607.8659179687501 148.5991111111111 620.6438802083334 148.5991111111111C633.4218424479167 148.5991111111111 644.3743815104167 173.36562962962964 657.15234375 173.36562962962964C657.15234375 173.36562962962964 657.15234375 173.36562962962964 657.15234375 222.89866666666666M657.15234375 173.36562962962964C657.15234375 173.36562962962964 657.15234375 173.36562962962964 657.15234375 173.36562962962964 "
                                      fill="url(#SvgjsLinearGradient1075)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      strokeLinecap="butt"
                                      strokeWidth={0}
                                      strokeDasharray={0}
                                      className="apexcharts-area"
                                      index={0}
                                      clipPath="url(#gridRectMask4xtdxrqy)"
                                      pathto="M 0 222.89866666666666L 0 136.21585185185185C 12.777962239583335 136.21585185185185 23.730501302083336 99.06607407407407 36.50846354166667 99.06607407407407C 49.28642578125 99.06607407407407 60.23896484375001 99.06607407407407 73.01692708333334 99.06607407407407C 85.79488932291667 99.06607407407407 96.74742838541667 148.5991111111111 109.525390625 148.5991111111111C 122.30335286458333 148.5991111111111 133.25589192708335 148.5991111111111 146.03385416666669 148.5991111111111C 158.81181640625002 148.5991111111111 169.76435546875 185.74888888888887 182.54231770833334 185.74888888888887C 195.32027994791667 185.74888888888887 206.27281901041667 185.74888888888887 219.05078125 185.74888888888887C 231.82874348958333 185.74888888888887 242.78128255208335 99.06607407407407 255.55924479166669 99.06607407407407C 268.33720703125005 99.06607407407407 279.28974609375 99.06607407407407 292.06770833333337 99.06607407407407C 304.8456705729167 99.06607407407407 315.7982096354167 123.83259259259259 328.576171875 123.83259259259259C 341.35413411458336 123.83259259259259 352.3066731770833 123.83259259259259 365.0846354166667 123.83259259259259C 377.86259765625005 123.83259259259259 388.81513671875 74.29955555555554 401.59309895833337 74.29955555555554C 414.3710611979167 74.29955555555554 425.3236002604167 74.29955555555554 438.1015625 74.29955555555554C 450.87952473958336 74.29955555555554 461.8320638020833 99.06607407407407 474.6100260416667 99.06607407407407C 487.38798828125005 99.06607407407407 498.34052734375 99.06607407407407 511.11848958333337 99.06607407407407C 523.8964518229167 99.06607407407407 534.8489908854167 99.06607407407407 547.626953125 99.06607407407407C 560.4049153645833 99.06607407407407 571.3574544270834 148.5991111111111 584.1354166666667 148.5991111111111C 596.91337890625 148.5991111111111 607.8659179687501 148.5991111111111 620.6438802083334 148.5991111111111C 633.4218424479167 148.5991111111111 644.3743815104167 173.36562962962964 657.15234375 173.36562962962964C 657.15234375 173.36562962962964 657.15234375 173.36562962962964 657.15234375 222.89866666666666M 657.15234375 173.36562962962964z"
                                      pathfrom="M -1 297.1982222222222L -1 297.1982222222222L 36.50846354166667 297.1982222222222L 73.01692708333334 297.1982222222222L 109.525390625 297.1982222222222L 146.03385416666669 297.1982222222222L 182.54231770833334 297.1982222222222L 219.05078125 297.1982222222222L 255.55924479166669 297.1982222222222L 292.06770833333337 297.1982222222222L 328.576171875 297.1982222222222L 365.0846354166667 297.1982222222222L 401.59309895833337 297.1982222222222L 438.1015625 297.1982222222222L 474.6100260416667 297.1982222222222L 511.11848958333337 297.1982222222222L 547.626953125 297.1982222222222L 584.1354166666667 297.1982222222222L 620.6438802083334 297.1982222222222L 657.15234375 297.1982222222222"
                                    />
                                    <path
                                      id="SvgjsPath1080"
                                      d="M0 136.21585185185185C12.777962239583335 136.21585185185185 23.730501302083336 99.06607407407407 36.50846354166667 99.06607407407407C49.28642578125 99.06607407407407 60.23896484375001 99.06607407407407 73.01692708333334 99.06607407407407C85.79488932291667 99.06607407407407 96.74742838541667 148.5991111111111 109.525390625 148.5991111111111C122.30335286458333 148.5991111111111 133.25589192708335 148.5991111111111 146.03385416666669 148.5991111111111C158.81181640625002 148.5991111111111 169.76435546875 185.74888888888887 182.54231770833334 185.74888888888887C195.32027994791667 185.74888888888887 206.27281901041667 185.74888888888887 219.05078125 185.74888888888887C231.82874348958333 185.74888888888887 242.78128255208335 99.06607407407407 255.55924479166669 99.06607407407407C268.33720703125005 99.06607407407407 279.28974609375 99.06607407407407 292.06770833333337 99.06607407407407C304.8456705729167 99.06607407407407 315.7982096354167 123.83259259259259 328.576171875 123.83259259259259C341.35413411458336 123.83259259259259 352.3066731770833 123.83259259259259 365.0846354166667 123.83259259259259C377.86259765625005 123.83259259259259 388.81513671875 74.29955555555554 401.59309895833337 74.29955555555554C414.3710611979167 74.29955555555554 425.3236002604167 74.29955555555554 438.1015625 74.29955555555554C450.87952473958336 74.29955555555554 461.8320638020833 99.06607407407407 474.6100260416667 99.06607407407407C487.38798828125005 99.06607407407407 498.34052734375 99.06607407407407 511.11848958333337 99.06607407407407C523.8964518229167 99.06607407407407 534.8489908854167 99.06607407407407 547.626953125 99.06607407407407C560.4049153645833 99.06607407407407 571.3574544270834 148.5991111111111 584.1354166666667 148.5991111111111C596.91337890625 148.5991111111111 607.8659179687501 148.5991111111111 620.6438802083334 148.5991111111111C633.4218424479167 148.5991111111111 644.3743815104167 173.36562962962964 657.15234375 173.36562962962964C657.15234375 173.36562962962964 657.15234375 173.36562962962964 657.15234375 173.36562962962964 "
                                      fill="none"
                                      fillOpacity={1}
                                      stroke="#3e97ff"
                                      strokeOpacity={1}
                                      strokeLinecap="butt"
                                      strokeWidth={3}
                                      strokeDasharray={0}
                                      className="apexcharts-area"
                                      index={0}
                                      clipPath="url(#gridRectMask4xtdxrqy)"
                                      pathto="M 0 136.21585185185185C 12.777962239583335 136.21585185185185 23.730501302083336 99.06607407407407 36.50846354166667 99.06607407407407C 49.28642578125 99.06607407407407 60.23896484375001 99.06607407407407 73.01692708333334 99.06607407407407C 85.79488932291667 99.06607407407407 96.74742838541667 148.5991111111111 109.525390625 148.5991111111111C 122.30335286458333 148.5991111111111 133.25589192708335 148.5991111111111 146.03385416666669 148.5991111111111C 158.81181640625002 148.5991111111111 169.76435546875 185.74888888888887 182.54231770833334 185.74888888888887C 195.32027994791667 185.74888888888887 206.27281901041667 185.74888888888887 219.05078125 185.74888888888887C 231.82874348958333 185.74888888888887 242.78128255208335 99.06607407407407 255.55924479166669 99.06607407407407C 268.33720703125005 99.06607407407407 279.28974609375 99.06607407407407 292.06770833333337 99.06607407407407C 304.8456705729167 99.06607407407407 315.7982096354167 123.83259259259259 328.576171875 123.83259259259259C 341.35413411458336 123.83259259259259 352.3066731770833 123.83259259259259 365.0846354166667 123.83259259259259C 377.86259765625005 123.83259259259259 388.81513671875 74.29955555555554 401.59309895833337 74.29955555555554C 414.3710611979167 74.29955555555554 425.3236002604167 74.29955555555554 438.1015625 74.29955555555554C 450.87952473958336 74.29955555555554 461.8320638020833 99.06607407407407 474.6100260416667 99.06607407407407C 487.38798828125005 99.06607407407407 498.34052734375 99.06607407407407 511.11848958333337 99.06607407407407C 523.8964518229167 99.06607407407407 534.8489908854167 99.06607407407407 547.626953125 99.06607407407407C 560.4049153645833 99.06607407407407 571.3574544270834 148.5991111111111 584.1354166666667 148.5991111111111C 596.91337890625 148.5991111111111 607.8659179687501 148.5991111111111 620.6438802083334 148.5991111111111C 633.4218424479167 148.5991111111111 644.3743815104167 173.36562962962964 657.15234375 173.36562962962964"
                                      pathfrom="M -1 297.1982222222222L -1 297.1982222222222L 36.50846354166667 297.1982222222222L 73.01692708333334 297.1982222222222L 109.525390625 297.1982222222222L 146.03385416666669 297.1982222222222L 182.54231770833334 297.1982222222222L 219.05078125 297.1982222222222L 255.55924479166669 297.1982222222222L 292.06770833333337 297.1982222222222L 328.576171875 297.1982222222222L 365.0846354166667 297.1982222222222L 401.59309895833337 297.1982222222222L 438.1015625 297.1982222222222L 474.6100260416667 297.1982222222222L 511.11848958333337 297.1982222222222L 547.626953125 297.1982222222222L 584.1354166666667 297.1982222222222L 620.6438802083334 297.1982222222222L 657.15234375 297.1982222222222"
                                      fillRule="evenodd"
                                    />
                                    <g
                                      id="SvgjsG1073"
                                      className="apexcharts-series-markers-wrap"
                                      data:realindex={0}
                                    >
                                      <g className="apexcharts-series-markers">
                                        <circle
                                          id="SvgjsCircle1191"
                                          r={0}
                                          cx={0}
                                          cy={0}
                                          className="apexcharts-marker wbzdf8xtoh no-pointer-events"
                                          stroke="#3e97ff"
                                          fill="#3e97ff"
                                          fillOpacity={1}
                                          strokeWidth={3}
                                          strokeOpacity="0.9"
                                          default-marker-size={0}
                                        />
                                      </g>
                                    </g>
                                  </g>
                                  <g
                                    id="SvgjsG1081"
                                    className="apexcharts-series"
                                    seriesname="OutboundxCalls"
                                    data:longestseries="true"
                                    rel={2}
                                    data:realindex={1}
                                  >
                                    <path
                                      id="SvgjsPath1088"
                                      d="M0 222.89866666666666L0 74.29955555555554C12.777962239583335 74.29955555555554 23.730501302083336 24.766518518518524 36.50846354166667 24.766518518518524C49.28642578125 24.766518518518524 60.23896484375001 24.766518518518524 73.01692708333334 24.766518518518524C85.79488932291667 24.766518518518524 96.74742838541667 61.91629629629631 109.525390625 61.91629629629631C122.30335286458333 61.91629629629631 133.25589192708335 61.91629629629631 146.03385416666669 61.91629629629631C158.81181640625002 61.91629629629631 169.76435546875 86.6828148148148 182.54231770833334 86.6828148148148C195.32027994791667 86.6828148148148 206.27281901041667 86.6828148148148 219.05078125 86.6828148148148C231.82874348958333 86.6828148148148 242.78128255208335 61.91629629629631 255.55924479166669 61.91629629629631C268.33720703125005 61.91629629629631 279.28974609375 61.91629629629631 292.06770833333337 61.91629629629631C304.8456705729167 61.91629629629631 315.7982096354167 12.383259259259262 328.576171875 12.383259259259262C341.35413411458336 12.383259259259262 352.3066731770833 12.383259259259262 365.0846354166667 12.383259259259262C377.86259765625005 12.383259259259262 388.81513671875 49.53303703703705 401.59309895833337 49.53303703703705C414.3710611979167 49.53303703703705 425.3236002604167 49.53303703703705 438.1015625 49.53303703703705C450.87952473958336 49.53303703703705 461.8320638020833 12.383259259259262 474.6100260416667 12.383259259259262C487.38798828125005 12.383259259259262 498.34052734375 12.383259259259262 511.11848958333337 12.383259259259262C523.8964518229167 12.383259259259262 534.8489908854167 61.91629629629631 547.626953125 61.91629629629631C560.4049153645833 61.91629629629631 571.3574544270834 61.91629629629631 584.1354166666667 61.91629629629631C596.91337890625 61.91629629629631 607.8659179687501 86.6828148148148 620.6438802083334 86.6828148148148C633.4218424479167 86.6828148148148 644.3743815104167 86.6828148148148 657.15234375 86.6828148148148C657.15234375 86.6828148148148 657.15234375 86.6828148148148 657.15234375 222.89866666666666M657.15234375 86.6828148148148C657.15234375 86.6828148148148 657.15234375 86.6828148148148 657.15234375 86.6828148148148 "
                                      fill="url(#SvgjsLinearGradient1084)"
                                      fillOpacity={1}
                                      strokeOpacity={1}
                                      strokeLinecap="butt"
                                      strokeWidth={0}
                                      strokeDasharray={0}
                                      className="apexcharts-area"
                                      index={1}
                                      clipPath="url(#gridRectMask4xtdxrqy)"
                                      pathto="M 0 222.89866666666666L 0 74.29955555555554C 12.777962239583335 74.29955555555554 23.730501302083336 24.766518518518524 36.50846354166667 24.766518518518524C 49.28642578125 24.766518518518524 60.23896484375001 24.766518518518524 73.01692708333334 24.766518518518524C 85.79488932291667 24.766518518518524 96.74742838541667 61.91629629629631 109.525390625 61.91629629629631C 122.30335286458333 61.91629629629631 133.25589192708335 61.91629629629631 146.03385416666669 61.91629629629631C 158.81181640625002 61.91629629629631 169.76435546875 86.6828148148148 182.54231770833334 86.6828148148148C 195.32027994791667 86.6828148148148 206.27281901041667 86.6828148148148 219.05078125 86.6828148148148C 231.82874348958333 86.6828148148148 242.78128255208335 61.91629629629631 255.55924479166669 61.91629629629631C 268.33720703125005 61.91629629629631 279.28974609375 61.91629629629631 292.06770833333337 61.91629629629631C 304.8456705729167 61.91629629629631 315.7982096354167 12.383259259259262 328.576171875 12.383259259259262C 341.35413411458336 12.383259259259262 352.3066731770833 12.383259259259262 365.0846354166667 12.383259259259262C 377.86259765625005 12.383259259259262 388.81513671875 49.53303703703705 401.59309895833337 49.53303703703705C 414.3710611979167 49.53303703703705 425.3236002604167 49.53303703703705 438.1015625 49.53303703703705C 450.87952473958336 49.53303703703705 461.8320638020833 12.383259259259262 474.6100260416667 12.383259259259262C 487.38798828125005 12.383259259259262 498.34052734375 12.383259259259262 511.11848958333337 12.383259259259262C 523.8964518229167 12.383259259259262 534.8489908854167 61.91629629629631 547.626953125 61.91629629629631C 560.4049153645833 61.91629629629631 571.3574544270834 61.91629629629631 584.1354166666667 61.91629629629631C 596.91337890625 61.91629629629631 607.8659179687501 86.6828148148148 620.6438802083334 86.6828148148148C 633.4218424479167 86.6828148148148 644.3743815104167 86.6828148148148 657.15234375 86.6828148148148C 657.15234375 86.6828148148148 657.15234375 86.6828148148148 657.15234375 222.89866666666666M 657.15234375 86.6828148148148z"
                                      pathfrom="M -1 297.1982222222222L -1 297.1982222222222L 36.50846354166667 297.1982222222222L 73.01692708333334 297.1982222222222L 109.525390625 297.1982222222222L 146.03385416666669 297.1982222222222L 182.54231770833334 297.1982222222222L 219.05078125 297.1982222222222L 255.55924479166669 297.1982222222222L 292.06770833333337 297.1982222222222L 328.576171875 297.1982222222222L 365.0846354166667 297.1982222222222L 401.59309895833337 297.1982222222222L 438.1015625 297.1982222222222L 474.6100260416667 297.1982222222222L 511.11848958333337 297.1982222222222L 547.626953125 297.1982222222222L 584.1354166666667 297.1982222222222L 620.6438802083334 297.1982222222222L 657.15234375 297.1982222222222"
                                    />
                                    <path
                                      id="SvgjsPath1089"
                                      d="M0 74.29955555555554C12.777962239583335 74.29955555555554 23.730501302083336 24.766518518518524 36.50846354166667 24.766518518518524C49.28642578125 24.766518518518524 60.23896484375001 24.766518518518524 73.01692708333334 24.766518518518524C85.79488932291667 24.766518518518524 96.74742838541667 61.91629629629631 109.525390625 61.91629629629631C122.30335286458333 61.91629629629631 133.25589192708335 61.91629629629631 146.03385416666669 61.91629629629631C158.81181640625002 61.91629629629631 169.76435546875 86.6828148148148 182.54231770833334 86.6828148148148C195.32027994791667 86.6828148148148 206.27281901041667 86.6828148148148 219.05078125 86.6828148148148C231.82874348958333 86.6828148148148 242.78128255208335 61.91629629629631 255.55924479166669 61.91629629629631C268.33720703125005 61.91629629629631 279.28974609375 61.91629629629631 292.06770833333337 61.91629629629631C304.8456705729167 61.91629629629631 315.7982096354167 12.383259259259262 328.576171875 12.383259259259262C341.35413411458336 12.383259259259262 352.3066731770833 12.383259259259262 365.0846354166667 12.383259259259262C377.86259765625005 12.383259259259262 388.81513671875 49.53303703703705 401.59309895833337 49.53303703703705C414.3710611979167 49.53303703703705 425.3236002604167 49.53303703703705 438.1015625 49.53303703703705C450.87952473958336 49.53303703703705 461.8320638020833 12.383259259259262 474.6100260416667 12.383259259259262C487.38798828125005 12.383259259259262 498.34052734375 12.383259259259262 511.11848958333337 12.383259259259262C523.8964518229167 12.383259259259262 534.8489908854167 61.91629629629631 547.626953125 61.91629629629631C560.4049153645833 61.91629629629631 571.3574544270834 61.91629629629631 584.1354166666667 61.91629629629631C596.91337890625 61.91629629629631 607.8659179687501 86.6828148148148 620.6438802083334 86.6828148148148C633.4218424479167 86.6828148148148 644.3743815104167 86.6828148148148 657.15234375 86.6828148148148C657.15234375 86.6828148148148 657.15234375 86.6828148148148 657.15234375 86.6828148148148 "
                                      fill="none"
                                      fillOpacity={1}
                                      stroke="#50cd89"
                                      strokeOpacity={1}
                                      strokeLinecap="butt"
                                      strokeWidth={3}
                                      strokeDasharray={0}
                                      className="apexcharts-area"
                                      index={1}
                                      clipPath="url(#gridRectMask4xtdxrqy)"
                                      pathto="M 0 74.29955555555554C 12.777962239583335 74.29955555555554 23.730501302083336 24.766518518518524 36.50846354166667 24.766518518518524C 49.28642578125 24.766518518518524 60.23896484375001 24.766518518518524 73.01692708333334 24.766518518518524C 85.79488932291667 24.766518518518524 96.74742838541667 61.91629629629631 109.525390625 61.91629629629631C 122.30335286458333 61.91629629629631 133.25589192708335 61.91629629629631 146.03385416666669 61.91629629629631C 158.81181640625002 61.91629629629631 169.76435546875 86.6828148148148 182.54231770833334 86.6828148148148C 195.32027994791667 86.6828148148148 206.27281901041667 86.6828148148148 219.05078125 86.6828148148148C 231.82874348958333 86.6828148148148 242.78128255208335 61.91629629629631 255.55924479166669 61.91629629629631C 268.33720703125005 61.91629629629631 279.28974609375 61.91629629629631 292.06770833333337 61.91629629629631C 304.8456705729167 61.91629629629631 315.7982096354167 12.383259259259262 328.576171875 12.383259259259262C 341.35413411458336 12.383259259259262 352.3066731770833 12.383259259259262 365.0846354166667 12.383259259259262C 377.86259765625005 12.383259259259262 388.81513671875 49.53303703703705 401.59309895833337 49.53303703703705C 414.3710611979167 49.53303703703705 425.3236002604167 49.53303703703705 438.1015625 49.53303703703705C 450.87952473958336 49.53303703703705 461.8320638020833 12.383259259259262 474.6100260416667 12.383259259259262C 487.38798828125005 12.383259259259262 498.34052734375 12.383259259259262 511.11848958333337 12.383259259259262C 523.8964518229167 12.383259259259262 534.8489908854167 61.91629629629631 547.626953125 61.91629629629631C 560.4049153645833 61.91629629629631 571.3574544270834 61.91629629629631 584.1354166666667 61.91629629629631C 596.91337890625 61.91629629629631 607.8659179687501 86.6828148148148 620.6438802083334 86.6828148148148C 633.4218424479167 86.6828148148148 644.3743815104167 86.6828148148148 657.15234375 86.6828148148148"
                                      pathfrom="M -1 297.1982222222222L -1 297.1982222222222L 36.50846354166667 297.1982222222222L 73.01692708333334 297.1982222222222L 109.525390625 297.1982222222222L 146.03385416666669 297.1982222222222L 182.54231770833334 297.1982222222222L 219.05078125 297.1982222222222L 255.55924479166669 297.1982222222222L 292.06770833333337 297.1982222222222L 328.576171875 297.1982222222222L 365.0846354166667 297.1982222222222L 401.59309895833337 297.1982222222222L 438.1015625 297.1982222222222L 474.6100260416667 297.1982222222222L 511.11848958333337 297.1982222222222L 547.626953125 297.1982222222222L 584.1354166666667 297.1982222222222L 620.6438802083334 297.1982222222222L 657.15234375 297.1982222222222"
                                      fillRule="evenodd"
                                    />
                                    <g
                                      id="SvgjsG1082"
                                      className="apexcharts-series-markers-wrap"
                                      data:realindex={1}
                                    >
                                      <g className="apexcharts-series-markers">
                                        <circle
                                          id="SvgjsCircle1192"
                                          r={0}
                                          cx={0}
                                          cy={0}
                                          className="apexcharts-marker w4om3vhkq no-pointer-events"
                                          stroke="#50cd89"
                                          fill="#50cd89"
                                          fillOpacity={1}
                                          strokeWidth={3}
                                          strokeOpacity="0.9"
                                          default-marker-size={0}
                                        />
                                      </g>
                                    </g>
                                  </g>
                                  <g
                                    id="SvgjsG1074"
                                    className="apexcharts-datalabels"
                                    data:realindex={0}
                                  />
                                  <g
                                    id="SvgjsG1083"
                                    className="apexcharts-datalabels"
                                    data:realindex={1}
                                  />
                                </g>
                                <line
                                  id="SvgjsLine1185"
                                  x1={0}
                                  y1={0}
                                  x2={0}
                                  y2="222.89866666666666"
                                  stroke="#3E97FF #50CD89"
                                  strokeDasharray={3}
                                  strokeLinecap="butt"
                                  className="apexcharts-xcrosshairs"
                                  x={0}
                                  y={0}
                                  width={1}
                                  height="222.89866666666666"
                                  fill="#b1b9c4"
                                  filter="none"
                                  fillOpacity="0.9"
                                  strokeWidth={1}
                                />
                                <line
                                  id="SvgjsLine1186"
                                  x1={0}
                                  y1={0}
                                  x2="657.15234375"
                                  y2={0}
                                  stroke="#b6b6b6"
                                  strokeDasharray={0}
                                  strokeWidth={1}
                                  strokeLinecap="butt"
                                  className="apexcharts-ycrosshairs"
                                />
                                <line
                                  id="SvgjsLine1187"
                                  x1={0}
                                  y1={0}
                                  x2="657.15234375"
                                  y2={0}
                                  strokeDasharray={0}
                                  strokeWidth={0}
                                  strokeLinecap="butt"
                                  className="apexcharts-ycrosshairs-hidden"
                                />
                                <g
                                  id="SvgjsG1188"
                                  className="apexcharts-yaxis-annotations"
                                />
                                <g
                                  id="SvgjsG1189"
                                  className="apexcharts-xaxis-annotations"
                                />
                                <g
                                  id="SvgjsG1190"
                                  className="apexcharts-point-annotations"
                                />
                                <rect
                                  id="SvgjsRect1193"
                                  width={0}
                                  height={0}
                                  x={0}
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  opacity={1}
                                  strokeWidth={0}
                                  stroke="none"
                                  strokeDasharray={0}
                                  fill="#fefefe"
                                  className="apexcharts-zoom-rect"
                                />
                                <rect
                                  id="SvgjsRect1194"
                                  width={0}
                                  height={0}
                                  x={0}
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  opacity={1}
                                  strokeWidth={0}
                                  stroke="none"
                                  strokeDasharray={0}
                                  fill="#fefefe"
                                  className="apexcharts-selection-rect"
                                />
                              </g>
                              <g
                                id="SvgjsG1149"
                                className="apexcharts-yaxis"
                                rel={0}
                                transform="translate(17.34765625, 0)"
                              >
                                <g
                                  id="SvgjsG1150"
                                  className="apexcharts-yaxis-texts-g"
                                >
                                  <text
                                    id="SvgjsText1152"
                                    fontFamily="inherit"
                                    x={20}
                                    y="31.6"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="12px"
                                    fontWeight={400}
                                    fill="#a1a5b7"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                  >
                                    <tspan id="SvgjsTspan1153">120</tspan>
                                    <title>120</title>
                                  </text>
                                  <text
                                    id="SvgjsText1155"
                                    fontFamily="inherit"
                                    x={20}
                                    y="68.74977777777778"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="12px"
                                    fontWeight={400}
                                    fill="#a1a5b7"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                  >
                                    <tspan id="SvgjsTspan1156">105</tspan>
                                    <title>105</title>
                                  </text>
                                  <text
                                    id="SvgjsText1158"
                                    fontFamily="inherit"
                                    x={20}
                                    y="105.89955555555557"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="12px"
                                    fontWeight={400}
                                    fill="#a1a5b7"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                  >
                                    <tspan id="SvgjsTspan1159">90</tspan>
                                    <title>90</title>
                                  </text>
                                  <text
                                    id="SvgjsText1161"
                                    fontFamily="inherit"
                                    x={20}
                                    y="143.04933333333335"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="12px"
                                    fontWeight={400}
                                    fill="#a1a5b7"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                  >
                                    <tspan id="SvgjsTspan1162">75</tspan>
                                    <title>75</title>
                                  </text>
                                  <text
                                    id="SvgjsText1164"
                                    fontFamily="inherit"
                                    x={20}
                                    y="180.19911111111114"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="12px"
                                    fontWeight={400}
                                    fill="#a1a5b7"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                  >
                                    <tspan id="SvgjsTspan1165">60</tspan>
                                    <title>60</title>
                                  </text>
                                  <text
                                    id="SvgjsText1167"
                                    fontFamily="inherit"
                                    x={20}
                                    y="217.34888888888892"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="12px"
                                    fontWeight={400}
                                    fill="#a1a5b7"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                  >
                                    <tspan id="SvgjsTspan1168">45</tspan>
                                    <title>45</title>
                                  </text>
                                  <text
                                    id="SvgjsText1170"
                                    fontFamily="inherit"
                                    x={20}
                                    y="254.4986666666667"
                                    textAnchor="end"
                                    dominantBaseline="auto"
                                    fontSize="12px"
                                    fontWeight={400}
                                    fill="#a1a5b7"
                                    className="apexcharts-text apexcharts-yaxis-label "
                                    style={{ fontFamily: "inherit" }}
                                  >
                                    <tspan id="SvgjsTspan1171">30</tspan>
                                    <title>30</title>
                                  </text>
                                </g>
                              </g>
                              <rect
                                id="SvgjsRect1184"
                                width={0}
                                height={0}
                                x={0}
                                y={0}
                                rx={0}
                                ry={0}
                                opacity={1}
                                strokeWidth={0}
                                stroke="none"
                                strokeDasharray={0}
                                fill="#fefefe"
                              />
                              <g
                                id="SvgjsG1065"
                                className="apexcharts-annotations"
                              />
                            </svg>
                            <div
                              className="apexcharts-legend"
                              style={{ maxHeight: 150 }}
                            />
                            <div className="apexcharts-tooltip apexcharts-theme-light">
                              <div
                                className="apexcharts-tooltip-title"
                                style={{ fontFamily: "inherit", fontSize: 12 }}
                              />
                              <div
                                className="apexcharts-tooltip-series-group"
                                style={{ order: 1 }}
                              >
                                <span
                                  className="apexcharts-tooltip-marker"
                                  style={{
                                    backgroundColor: "rgb(62, 151, 255)"
                                  }}
                                />
                                <div
                                  className="apexcharts-tooltip-text"
                                  style={{
                                    fontFamily: "inherit",
                                    fontSize: 12
                                  }}
                                >
                                  <div className="apexcharts-tooltip-y-group">
                                    <span className="apexcharts-tooltip-text-y-label" />
                                    <span className="apexcharts-tooltip-text-y-value" />
                                  </div>
                                  <div className="apexcharts-tooltip-goals-group">
                                    <span className="apexcharts-tooltip-text-goals-label" />
                                    <span className="apexcharts-tooltip-text-goals-value" />
                                  </div>
                                  <div className="apexcharts-tooltip-z-group">
                                    <span className="apexcharts-tooltip-text-z-label" />
                                    <span className="apexcharts-tooltip-text-z-value" />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="apexcharts-tooltip-series-group"
                                style={{ order: 2 }}
                              >
                                <span
                                  className="apexcharts-tooltip-marker"
                                  style={{
                                    backgroundColor: "rgb(80, 205, 137)"
                                  }}
                                />
                                <div
                                  className="apexcharts-tooltip-text"
                                  style={{
                                    fontFamily: "inherit",
                                    fontSize: 12
                                  }}
                                >
                                  <div className="apexcharts-tooltip-y-group">
                                    <span className="apexcharts-tooltip-text-y-label" />
                                    <span className="apexcharts-tooltip-text-y-value" />
                                  </div>
                                  <div className="apexcharts-tooltip-goals-group">
                                    <span className="apexcharts-tooltip-text-goals-label" />
                                    <span className="apexcharts-tooltip-text-goals-value" />
                                  </div>
                                  <div className="apexcharts-tooltip-z-group">
                                    <span className="apexcharts-tooltip-text-z-label" />
                                    <span className="apexcharts-tooltip-text-z-value" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                              <div
                                className="apexcharts-xaxistooltip-text"
                                style={{ fontFamily: "inherit", fontSize: 12 }}
                              />
                            </div>
                            <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                              <div className="apexcharts-yaxistooltip-text" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
    );
}

export default Content;
