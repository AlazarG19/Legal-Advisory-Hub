import React from "react";
import Header from "../../Header";
import Aside from "../../Aside";
const Documents = () => {
  return (
    <div>
      <Header />

      <div className="app-wrapper flex-row-fluid" id="kt_app_wrapper">
        <div
          id="kt_app_sidebar"
          className="app-sidebar flex-column"
          data-kt-drawer="true"
          data-kt-drawer-name="app-sidebar"
          data-kt-drawer-activate="{default: true, lg: false}"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="225px"
          data-kt-drawer-direction="start"
          data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
        >
          <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
            <a href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html">
              <img
                alt="Logo"
                src="assets/img/default-dark.svg"
                className="h-30px app-sidebar-logo-default"
              />
            </a>
            <div
              id="kt_app_sidebar_toggle"
              className="app-sidebar-toggle btn btn-icon btn-sm h-30px w-30px rotate"
              data-kt-toggle="true"
              data-kt-toggle-state="active"
              data-kt-toggle-target="body"
              data-kt-toggle-name="app-sidebar-minimize"
            >
              <span className="svg-icon svg-icon-2 rotate-180">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
                    fill="currentColor"
                  />
                  <path
                    d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
            <div
              id="kt_app_sidebar_menu_wrapper"
              className="app-sidebar-wrapper hover-scroll-overlay-y my-5"
              data-kt-scroll="true"
              data-kt-scroll-activate="true"
              data-kt-scroll-height="auto"
              data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
              data-kt-scroll-wrappers="#kt_app_sidebar_menu"
              data-kt-scroll-offset="5px"
              style={{ height: 707 }}
            >
              <Aside />
            </div>
          </div>
        </div>
        <div className="">
          {" "}
          <div class="d-flex flex-wrap flex-stack mb-6">
            <h3 class="fw-bold my-2">
              My Documents
              <span class="fs-6 text-gray-400 fw-semibold ms-1">
                100+ resources
              </span>
            </h3>
            <div class="d-flex">
              <select
                name="campaign-type"
                data-control="select2"
                data-hide-search="true"
                class="form-select form-select-sm bg-body border-body w-175px"
              >
                <option value="Twitter" selected="selected">
                  Select Document
                </option>
                <option value="Twitter">Document1</option>
                <option value="Twitter">Document2</option>
                <option value="Twitter">Adword Campaign</option>
                <option value="Twitter">Carbon Campaign</option>
              </select>
              <a
                href="#"
                class="btn btn-icon btn-sm btn-success flex-shrink-0 ms-4"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_create_campaign"
              >
                <span class="svg-icon svg-icon-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      opacity="0.5"
                      x="11.364"
                      y="20.364"
                      width="16"
                      height="2"
                      rx="1"
                      transform="rotate(-90 11.364 20.364)"
                      fill="currentColor"
                    />
                    <rect
                      x="4.36396"
                      y="11.364"
                      width="16"
                      height="2"
                      rx="1"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          //create campign form
          <div
            class="modal fade"
            id="kt_modal_create_campaign"
            tabindex="-1"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-fullscreen p-9">
              <div class="modal-content modal-rounded">
                <div class="modal-header py-7 d-flex justify-content-between">
                  <h2>Create New document</h2>

                  <div
                    class="btn btn-sm btn-icon btn-active-color-primary"
                    data-bs-dismiss="modal"
                  >
                    <span class="svg-icon svg-icon-1">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          opacity="0.5"
                          x="6"
                          y="17.3137"
                          width="16"
                          height="2"
                          rx="1"
                          transform="rotate(-45 6 17.3137)"
                          fill="currentColor"
                        />
                        <rect
                          x="7.41422"
                          y="6"
                          width="16"
                          height="2"
                          rx="1"
                          transform="rotate(45 7.41422 6)"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div class="modal-body scroll-y m-5">
                  <div
                    class="stepper stepper-links d-flex flex-column"
                    id="kt_modal_create_campaign_stepper"
                  >
                    <form
                      class="mx-auto w-100 mw-600px pt-15 pb-10"
                      novalidate="novalidate"
                      id="kt_modal_create_campaign_stepper_form"
                    >
                      <div class="current" data-kt-stepper-element="content">
                        <div class="w-100">
                          <div class="mb-10 fv-row">
                            <label class="required form-label mb-3">
                              Document Title
                            </label>

                            <input
                              type="text"
                              class="form-control form-control-lg form-control-solid"
                              name="campaign_name"
                              placeholder=""
                              value=""
                            />
                          </div>
                          <div>
                            <div class="w-100">
                              <div class="pb-10 pb-lg-12">
                                <label class="required form-label mb-3">
                                  Upload file
                                </label>
                              </div>

                              <div class="fv-row mb-10">
                                <div
                                  class="dropzone"
                                  id="kt_modal_create_campaign_files_upload"
                                >
                                  <div class="dz-message needsclick">
                                    <span class="svg-icon svg-icon-3hx svg-icon-primary">
                                      <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          opacity="0.3"
                                          d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM14.5 12L12.7 9.3C12.3 8.9 11.7 8.9 11.3 9.3L10 12H11.5V17C11.5 17.6 11.4 18 12 18C12.6 18 12.5 17.6 12.5 17V12H14.5Z"
                                          fill="currentColor"
                                        />
                                        <path
                                          d="M13 11.5V17.9355C13 18.2742 12.6 19 12 19C11.4 19 11 18.2742 11 17.9355V11.5H13Z"
                                          fill="currentColor"
                                        />
                                        <path
                                          d="M8.2575 11.4411C7.82942 11.8015 8.08434 12.5 8.64398 12.5H15.356C15.9157 12.5 16.1706 11.8015 15.7425 11.4411L12.4375 8.65789C12.1875 8.44737 11.8125 8.44737 11.5625 8.65789L8.2575 11.4411Z"
                                          fill="currentColor"
                                        />
                                        <path
                                          d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                                          fill="currentColor"
                                        />
                                      </svg>
                                    </span>

                                    <div class="ms-4">
                                      <h3 class="dfs-3 fw-bold text-gray-900 mb-1">
                                        Drop documents here or click to upload.
                                      </h3>
                                      <span class="fw-semibold fs-4 text-muted">
                                        Upload up to 10 files
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="mb-10">
                                <label class="fs-6 fw-semibold mb-2">
                                  Uploaded File
                                </label>

                                <div class="mh-300px scroll-y me-n7 pe-7">
                                  <div class="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                    <div class="d-flex align-items-center">
                                      <div class="symbol symbol-35px">
                                        <img
                                          src="assets/media/svg/files/pdf.svg"
                                          alt="icon"
                                        />
                                      </div>

                                      <div class="ms-6">
                                        <a
                                          href="#"
                                          class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                        >
                                          Product Specifications
                                        </a>
                                        <div class="fw-semibold text-muted">
                                          230kb
                                        </div>
                                      </div>
                                    </div>

                                    <div class="min-w-100px">
                                      <select
                                        class="form-select form-select-solid form-select-sm"
                                        data-control="select2"
                                        data-hide-search="true"
                                        data-placeholder="Edit"
                                      >
                                        <option></option>
                                        <option value="1">Remove</option>
                                        <option value="2">Modify</option>
                                        <option value="3">Select</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div class="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                    <div class="d-flex align-items-center">
                                      <div class="symbol symbol-35px">
                                        <img
                                          src="assets/media/svg/files/tif.svg"
                                          alt="icon"
                                        />
                                      </div>

                                      <div class="ms-6">
                                        <a
                                          href="#"
                                          class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                        >
                                          Campaign Creative Poster
                                        </a>
                                        <div class="fw-semibold text-muted">
                                          2.4mb
                                        </div>
                                      </div>
                                    </div>

                                    <div class="min-w-100px">
                                      <select
                                        class="form-select form-select-solid form-select-sm"
                                        data-control="select2"
                                        data-hide-search="true"
                                        data-placeholder="Edit"
                                      >
                                        <option></option>
                                        <option value="1">Remove</option>
                                        <option value="2">Modify</option>
                                        <option value="3">Select</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div class="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                    <div class="d-flex align-items-center">
                                      <div class="symbol symbol-35px">
                                        <img
                                          src="assets/media/svg/files/folder-document.svg"
                                          alt="icon"
                                        />
                                      </div>

                                      <div class="ms-6">
                                        <a
                                          href="#"
                                          class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                        >
                                          Campaign Landing Page Source
                                        </a>
                                        <div class="fw-semibold text-muted">
                                          1.12mb
                                        </div>
                                      </div>
                                    </div>

                                    <div class="min-w-100px">
                                      <select
                                        class="form-select form-select-solid form-select-sm"
                                        data-control="select2"
                                        data-hide-search="true"
                                        data-placeholder="Edit"
                                      >
                                        <option></option>
                                        <option value="1">Remove</option>
                                        <option value="2">Modify</option>
                                        <option value="3">Select</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div class="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                    <div class="d-flex align-items-center">
                                      <div class="symbol symbol-35px">
                                        <img
                                          src="assets/media/svg/files/css.svg"
                                          alt="icon"
                                        />
                                      </div>

                                      <div class="ms-6">
                                        <a
                                          href="#"
                                          class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                        >
                                          Landing Page Styling
                                        </a>
                                        <div class="fw-semibold text-muted">
                                          85kb
                                        </div>
                                      </div>
                                    </div>

                                    <div class="min-w-100px">
                                      <select
                                        class="form-select form-select-solid form-select-sm"
                                        data-control="select2"
                                        data-hide-search="true"
                                        data-placeholder="Edit"
                                      >
                                        <option></option>
                                        <option value="1">Remove</option>
                                        <option value="2">Modify</option>
                                        <option value="3">Select</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div class="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                                    <div class="d-flex align-items-center">
                                      <div class="symbol symbol-35px">
                                        <img
                                          src="assets/media/svg/files/ai.svg"
                                          alt="icon"
                                        />
                                      </div>

                                      <div class="ms-6">
                                        <a
                                          href="#"
                                          class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                        >
                                          Design Source Files
                                        </a>
                                        <div class="fw-semibold text-muted">
                                          48mb
                                        </div>
                                      </div>
                                    </div>

                                    <div class="min-w-100px">
                                      <select
                                        class="form-select form-select-solid form-select-sm"
                                        data-control="select2"
                                        data-hide-search="true"
                                        data-placeholder="Edit"
                                      >
                                        <option></option>
                                        <option value="1">Remove</option>
                                        <option value="2">Modify</option>
                                        <option value="3">Select</option>
                                      </select>
                                    </div>
                                  </div>

                                  <div class="d-flex flex-stack py-4">
                                    <div class="d-flex align-items-center">
                                      <div class="symbol symbol-35px">
                                        <img
                                          src="assets/media/svg/files/doc.svg"
                                          alt="icon"
                                        />
                                      </div>

                                      <div class="ms-6">
                                        <a
                                          href="#"
                                          class="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                                        >
                                          Campaign Plan Document
                                        </a>
                                        <div class="fw-semibold text-muted">
                                          27kb
                                        </div>
                                      </div>
                                    </div>

                                    <div class="min-w-100px">
                                      <select
                                        class="form-select form-select-solid form-select-sm"
                                        data-control="select2"
                                        data-hide-search="true"
                                        data-placeholder="Edit"
                                      >
                                        <option></option>
                                        <option value="1">Remove</option>
                                        <option value="2">Modify</option>
                                        <option value="3">Select</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="mb-10">
                            <label class="required fw-semibold fs-6 mb-5">
                              Choose Folder
                            </label>

                            <div class="d-flex fv-row">
                              <div class="form-check form-check-custom form-check-solid">
                                <input
                                  class="form-check-input me-3"
                                  name="user_role"
                                  type="radio"
                                  value="0"
                                  id="kt_modal_update_role_option_0"
                                  checked="checked"
                                />

                                <label
                                  class="form-check-label"
                                  for="kt_modal_update_role_option_0"
                                >
                                  <div class="fw-bold text-gray-800">
                                    Privacy and Data Protection
                                  </div>
                                </label>
                              </div>
                            </div>

                            <div class="separator separator-dashed my-5"></div>

                            <div class="d-flex fv-row">
                              <div class="form-check form-check-custom form-check-solid">
                                <input
                                  class="form-check-input me-3"
                                  name="user_role"
                                  type="radio"
                                  value="1"
                                  id="kt_modal_update_role_option_1"
                                />

                                <label
                                  class="form-check-label"
                                  for="kt_modal_update_role_option_1"
                                >
                                  <div class="fw-bold text-gray-800">
                                    Contracts and Agreements
                                  </div>
                                </label>
                              </div>
                            </div>

                            <div class="separator separator-dashed my-5"></div>

                            <div class="d-flex fv-row">
                              <div class="form-check form-check-custom form-check-solid">
                                <input
                                  class="form-check-input me-3"
                                  name="user_role"
                                  type="radio"
                                  value="2"
                                  id="kt_modal_update_role_option_2"
                                />

                                <label
                                  class="form-check-label"
                                  for="kt_modal_update_role_option_2"
                                >
                                  <div class="fw-bold text-gray-800">
                                    Intellectual Property
                                  </div>
                                </label>
                              </div>
                            </div>

                            <div class="separator separator-dashed my-5"></div>

                            <div class="d-flex fv-row">
                              <div class="form-check form-check-custom form-check-solid">
                                <input
                                  class="form-check-input me-3"
                                  name="user_role"
                                  type="radio"
                                  value="3"
                                  id="kt_modal_update_role_option_3"
                                />

                                <label
                                  class="form-check-label"
                                  for="kt_modal_update_role_option_3"
                                >
                                  <div class="fw-bold text-gray-800">
                                    Compliance and Regulations
                                  </div>
                                </label>
                              </div>
                            </div>

                            <div class="separator separator-dashed my-5"></div>

                            <div class="d-flex fv-row">
                              <div class="form-check form-check-custom form-check-solid">
                                <input
                                  class="form-check-input me-3"
                                  name="user_role"
                                  type="radio"
                                  value="4"
                                  id="kt_modal_update_role_option_4"
                                />

                                <label
                                  class="form-check-label"
                                  for="kt_modal_update_role_option_4"
                                >
                                  <div class="fw-bold text-gray-800">
                                    Dispute Resolution and Litigation
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>
                          <button type="button" class="btn btn-lg btn-primary">
                            <span class="indicator-label">
                              Submit
                              <span class="svg-icon svg-icon-3 ms-2 me-0">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <rect
                                    opacity="0.5"
                                    x="18"
                                    y="13"
                                    width="13"
                                    height="2"
                                    rx="1"
                                    transform="rotate(-180 18 13)"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </span>
                            <span class="indicator-progress">
                              Please wait...
                              <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          //doc lists
          <div class="row g-6 g-xl-9 mb-6 mb-xl-9">
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div class="card h-100">
                <div class="card-body d-flex justify-content-center text-center flex-column p-8">
                  <a
                    href="../../demo1/dist/apps/file-manager/files.html"
                    class="text-gray-800 text-hover-primary d-flex flex-column"
                  >
                    <div class="symbol symbol-75px mb-5">
                      <img
                        src="assets/media/svg/files/folder-document.svg"
                        class="theme-light-show"
                        alt=""
                      />
                      <img
                        src="assets/media/svg/files/folder-document-dark.svg"
                        class="theme-dark-show"
                        alt=""
                      />
                    </div>

                    <div class="fs-5 fw-bold mb-2">Finance</div>
                  </a>

                  <div class="fs-7 fw-semibold text-gray-400">7 files</div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div class="card h-100">
                <div class="card-body d-flex justify-content-center text-center flex-column p-8">
                  <a
                    href="../../demo1/dist/apps/file-manager/files.html"
                    class="text-gray-800 text-hover-primary d-flex flex-column"
                  >
                    <div class="symbol symbol-75px mb-5">
                      <img
                        src="assets/media/svg/files/folder-document.svg"
                        class="theme-light-show"
                        alt=""
                      />
                      <img
                        src="assets/media/svg/files/folder-document-dark.svg"
                        class="theme-dark-show"
                        alt=""
                      />
                    </div>

                    <div class="fs-5 fw-bold mb-2">Customers</div>
                  </a>

                  <div class="fs-7 fw-semibold text-gray-400">3 files</div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4 col-xl-3">
              <div class="card h-100">
                <div class="card-body d-flex justify-content-center text-center flex-column p-8">
                  <a
                    href="../../demo1/dist/apps/file-manager/files.html"
                    class="text-gray-800 text-hover-primary d-flex flex-column"
                  >
                    <div class="symbol symbol-75px mb-5">
                      <img
                        src="assets/media/svg/files/folder-document.svg"
                        class="theme-light-show"
                        alt=""
                      />
                      <img
                        src="assets/media/svg/files/folder-document-dark.svg"
                        class="theme-dark-show"
                        alt=""
                      />
                    </div>

                    <div class="fs-5 fw-bold mb-2">CRM Project</div>
                  </a>

                  <div class="fs-7 fw-semibold text-gray-400">25 files</div>
                </div>
              </div>
            </div>
          </div>
          <div class="row g-6 g-xl-9 mb-6 mb-xl-9">
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div class="card h-100">
                <div class="card-body d-flex justify-content-center text-center flex-column p-8">
                  <a
                    href="../../demo1/dist/apps/file-manager/files.html"
                    class="text-gray-800 text-hover-primary d-flex flex-column"
                  >
                    <div class="symbol symbol-60px mb-5">
                      <img
                        src="assets/media/svg/files/pdf.svg"
                        class="theme-light-show"
                        alt=""
                      />
                      <img
                        src="assets/media/svg/files/pdf-dark.svg"
                        class="theme-dark-show"
                        alt=""
                      />
                    </div>
                    <div class="fs-5 fw-bold mb-2">Project Reqs..</div>
                  </a>
                  <div class="fs-7 fw-semibold text-gray-400">3 days ago</div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div class="card h-100">
                <div class="card-body d-flex justify-content-center text-center flex-column p-8">
                  <a
                    href="../../demo1/dist/apps/file-manager/files.html"
                    class="text-gray-800 text-hover-primary d-flex flex-column"
                  >
                    <div class="symbol symbol-60px mb-5">
                      <img
                        src="assets/media/svg/files/doc.svg"
                        class="theme-light-show"
                        alt=""
                      />
                      <img
                        src="assets/media/svg/files/doc-dark.svg"
                        class="theme-dark-show"
                        alt=""
                      />
                    </div>
                    <div class="fs-5 fw-bold mb-2">CRM App Docs..</div>
                  </a>
                  <div class="fs-7 fw-semibold text-gray-400">3 days ago</div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div class="card h-100">
                <div class="card-body d-flex justify-content-center text-center flex-column p-8">
                  <a
                    href="../../demo1/dist/apps/file-manager/files.html"
                    class="text-gray-800 text-hover-primary d-flex flex-column"
                  >
                    <div class="symbol symbol-60px mb-5">
                      <img
                        src="assets/media/svg/files/css.svg"
                        class="theme-light-show"
                        alt=""
                      />
                      <img
                        src="assets/media/svg/files/css-dark.svg"
                        class="theme-dark-show"
                        alt=""
                      />
                    </div>
                    <div class="fs-5 fw-bold mb-2">User CRUD Styles</div>
                  </a>
                  <div class="fs-7 fw-semibold text-gray-400">4 days ago</div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div class="card h-100">
                <div class="card-body d-flex justify-content-center text-center flex-column p-8">
                  <a
                    href="../../demo1/dist/apps/file-manager/files.html"
                    class="text-gray-800 text-hover-primary d-flex flex-column"
                  >
                    <div class="symbol symbol-60px mb-5">
                      <img
                        src="assets/media/svg/files/ai.svg"
                        class="theme-light-show"
                        alt=""
                      />
                      <img
                        src="assets/media/svg/files/ai-dark.svg"
                        class="theme-dark-show"
                        alt=""
                      />
                    </div>
                    <div class="fs-5 fw-bold mb-2">Product Logo</div>
                  </a>
                  <div class="fs-7 fw-semibold text-gray-400">5 days ago</div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div class="card h-100">
                <div class="card-body d-flex justify-content-center text-center flex-column p-8">
                  <a
                    href="../../demo1/dist/apps/file-manager/files.html"
                    class="text-gray-800 text-hover-primary d-flex flex-column"
                  >
                    <div class="symbol symbol-60px mb-5">
                      <img
                        src="assets/media/svg/files/sql.svg"
                        class="theme-light-show"
                        alt=""
                      />
                      <img
                        src="assets/media/svg/files/sql-dark.svg"
                        class="theme-dark-show"
                        alt=""
                      />
                    </div>
                    <div class="fs-5 fw-bold mb-2">Orders backup</div>
                  </a>
                  <div class="fs-7 fw-semibold text-gray-400">1 week ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
