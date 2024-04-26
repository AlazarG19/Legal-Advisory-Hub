import React from "react";
import Header from "../../Header";
import Aside from "../../Aside";
const Files = () => {
  return (
    <div className="">
      <Header />

      <div className="app-wrapper m-9 flex-row-fluid" id="kt_app_wrapper">
        <div class="card-body">
          <div class="card-title">
            <div class="d-flex align-items-center position-relative my-1">
              <span class="svg-icon svg-icon-1 position-absolute ms-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.5"
                    x="17.0365"
                    y="15.1223"
                    width="8.15546"
                    height="2"
                    rx="1"
                    transform="rotate(45 17.0365 15.1223)"
                    fill="currentColor"
                  />
                  <path
                    d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>

              <input
                type="text"
                data-kt-filemanager-table-filter="search"
                class="form-control form-control-solid w-250px ps-15"
                placeholder="Search Files & Folders"
              />
            </div>
          </div>
          <table
            id="kt_file_manager_list"
            data-kt-filemanager-table="files"
            className="table align-middle table-row-dashed fs-6 gy-5"
          >
            <thead>
              <tr class="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                <th class="min-w-250px">Name</th>
                <th class="min-w-250px">Size</th>
                <th class="min-w-125px">Last Modified</th>
                <th class="w-125px"></th>
              </tr>
            </thead>

            <tbody class="fw-semibold text-gray-600 m-9">
              <tr class="mb-6">
                <td>
                  <div class="d-flex align-items-center">
                    <span class="svg-icon svg-icon-2x svg-icon-primary me-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>

                    <a href="#" class="text-gray-800 text-hover-primary">
                      api-keys.html
                    </a>
                  </div>
                </td>
                <td>489 KB</td>
                <td>24 Jun 2023, 2:40 pm</td>
                <td
                  class="text-end"
                  data-kt-filemanager-table="action_dropdown"
                >
                  <div class="d-flex justify-content-end">
                    <div class="ms-2" data-kt-filemanger-table="copy_link">
                      <button type="button" class="btn btn-light btn-sm">
                        <span class="svg-icon svg-icon-5">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM12 16C9.23858 16 7 13.7614 7 11C7 8.23858 9.23858 6 12 6C14.7614 6 17 8.23858 17 11C17 13.7614 14.7614 16 12 16ZM12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8Z"
                              fill="currentColor"
                            />
                            <circle cx="12" cy="12" r="3" fill="currentColor" />
                          </svg>
                        </span>
                      </button>
                    </div>

                    <div class="d-flex justify-content-end">
                      <div class="ms-2">
                        <a
                          href="path/to/download/file"
                          class="btn btn-sm btn-light"
                        >
                          <span class="svg-icon svg-icon-5 m-0">
                            <svg
                              width="34"
                              height="34"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V15M8 17L12 21L16 17M12 21V9"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="mb-6">
                <td>
                  <div class="d-flex align-items-center">
                    <span class="svg-icon svg-icon-2x svg-icon-primary me-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>

                    <a href="#" class="text-gray-800 text-hover-primary">
                      api-keys.html
                    </a>
                  </div>
                </td>
                <td>489 KB</td>
                <td>24 Jun 2023, 2:40 pm</td>
                <td
                  class="text-end"
                  data-kt-filemanager-table="action_dropdown"
                >
                  <div class="d-flex justify-content-end">
                    <div class="ms-2" data-kt-filemanger-table="copy_link">
                      <button type="button" class="btn btn-light btn-sm">
                        <span class="svg-icon svg-icon-5">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM12 16C9.23858 16 7 13.7614 7 11C7 8.23858 9.23858 6 12 6C14.7614 6 17 8.23858 17 11C17 13.7614 14.7614 16 12 16ZM12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8Z"
                              fill="currentColor"
                            />
                            <circle cx="12" cy="12" r="3" fill="currentColor" />
                          </svg>
                        </span>
                      </button>
                    </div>

                    <div class="d-flex justify-content-end">
                      <div class="ms-2">
                        <a
                          href="path/to/download/file"
                          class="btn btn-sm btn-light"
                        >
                          <span class="svg-icon svg-icon-5 m-0">
                            <svg
                              width="34"
                              height="34"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V15M8 17L12 21L16 17M12 21V9"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="mb-6">
                <td>
                  <div class="d-flex align-items-center">
                    <span class="svg-icon svg-icon-2x svg-icon-primary me-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>

                    <a href="#" class="text-gray-800 text-hover-primary">
                      api-keys.html
                    </a>
                  </div>
                </td>
                <td>489 KB</td>
                <td>24 Jun 2023, 2:40 pm</td>
                <td
                  class="text-end"
                  data-kt-filemanager-table="action_dropdown"
                >
                  <div class="d-flex justify-content-end">
                    <div class="ms-2" data-kt-filemanger-table="copy_link">
                      <button type="button" class="btn btn-light btn-sm">
                        <span class="svg-icon svg-icon-5">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM12 16C9.23858 16 7 13.7614 7 11C7 8.23858 9.23858 6 12 6C14.7614 6 17 8.23858 17 11C17 13.7614 14.7614 16 12 16ZM12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8Z"
                              fill="currentColor"
                            />
                            <circle cx="12" cy="12" r="3" fill="currentColor" />
                          </svg>
                        </span>
                      </button>
                    </div>

                    <div class="d-flex justify-content-end">
                      <div class="ms-2">
                        <a
                          href="path/to/download/file"
                          class="btn btn-sm btn-light"
                        >
                          <span class="svg-icon svg-icon-5 m-0">
                            <svg
                              width="34"
                              height="34"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V15M8 17L12 21L16 17M12 21V9"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="mb-6">
                <td>
                  <div class="d-flex align-items-center">
                    <span class="svg-icon svg-icon-2x svg-icon-primary me-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>

                    <a href="#" class="text-gray-800 text-hover-primary">
                      api-keys.html
                    </a>
                  </div>
                </td>
                <td>489 KB</td>
                <td>24 Jun 2023, 2:40 pm</td>
                <td
                  class="text-end"
                  data-kt-filemanager-table="action_dropdown"
                >
                  <div class="d-flex justify-content-end">
                    <div class="ms-2" data-kt-filemanger-table="copy_link">
                      <button type="button" class="btn btn-light btn-sm">
                        <span class="svg-icon svg-icon-5">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM12 16C9.23858 16 7 13.7614 7 11C7 8.23858 9.23858 6 12 6C14.7614 6 17 8.23858 17 11C17 13.7614 14.7614 16 12 16ZM12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8Z"
                              fill="currentColor"
                            />
                            <circle cx="12" cy="12" r="3" fill="currentColor" />
                          </svg>
                        </span>
                      </button>
                    </div>

                    <div class="d-flex justify-content-end">
                      <div class="ms-2">
                        <a
                          href="path/to/download/file"
                          class="btn btn-sm btn-light"
                        >
                          <span class="svg-icon svg-icon-5 m-0">
                            <svg
                              width="34"
                              height="34"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V15M8 17L12 21L16 17M12 21V9"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="mb-6">
                <td>
                  <div class="d-flex align-items-center">
                    <span class="svg-icon svg-icon-2x svg-icon-primary me-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>

                    <a href="#" class="text-gray-800 text-hover-primary">
                      api-keys.html
                    </a>
                  </div>
                </td>
                <td>489 KB</td>
                <td>24 Jun 2023, 2:40 pm</td>
                <td
                  class="text-end"
                  data-kt-filemanager-table="action_dropdown"
                >
                  <div class="d-flex justify-content-end">
                    <div class="ms-2" data-kt-filemanger-table="copy_link">
                      <button type="button" class="btn btn-light btn-sm">
                        <span class="svg-icon svg-icon-5">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM12 16C9.23858 16 7 13.7614 7 11C7 8.23858 9.23858 6 12 6C14.7614 6 17 8.23858 17 11C17 13.7614 14.7614 16 12 16ZM12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8Z"
                              fill="currentColor"
                            />
                            <circle cx="12" cy="12" r="3" fill="currentColor" />
                          </svg>
                        </span>
                      </button>
                    </div>

                    <div class="d-flex justify-content-end">
                      <div class="ms-2">
                        <a
                          href="path/to/download/file"
                          class="btn btn-sm btn-light"
                        >
                          <span class="svg-icon svg-icon-5 m-0">
                            <svg
                              width="34"
                              height="34"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V15M8 17L12 21L16 17M12 21V9"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="mb-6">
                <td>
                  <div class="d-flex align-items-center">
                    <span class="svg-icon svg-icon-2x svg-icon-primary me-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.3"
                          d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z"
                          fill="currentColor"
                        />
                        <path
                          d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>

                    <a href="#" class="text-gray-800 text-hover-primary">
                      api-keys.html
                    </a>
                  </div>
                </td>
                <td>489 KB</td>
                <td>24 Jun 2023, 2:40 pm</td>
                <td
                  class="text-end"
                  data-kt-filemanager-table="action_dropdown"
                >
                  <div class="d-flex justify-content-end">
                    <div class="ms-2" data-kt-filemanger-table="copy_link">
                      <button type="button" class="btn btn-light btn-sm">
                        <span class="svg-icon svg-icon-5">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM12 16C9.23858 16 7 13.7614 7 11C7 8.23858 9.23858 6 12 6C14.7614 6 17 8.23858 17 11C17 13.7614 14.7614 16 12 16ZM12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8Z"
                              fill="currentColor"
                            />
                            <circle cx="12" cy="12" r="3" fill="currentColor" />
                          </svg>
                        </span>
                      </button>
                    </div>

                    <div class="d-flex justify-content-end">
                      <div class="ms-2">
                        <a
                          href="path/to/download/file"
                          class="btn btn-sm btn-light"
                        >
                          <span class="svg-icon svg-icon-5 m-0">
                            <svg
                              width="34"
                              height="34"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V15M8 17L12 21L16 17M12 21V9"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Files;
