import Header from "../../Header";
import Aside from "../../Aside";
import React, { useState } from "react";
import axios from "axios";
const Documents = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleSaveDocument = async () => {
    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("pdf", file); // Append the selected file to the formData

      await axios.post("http://localhost:5005/Docs", formData, {});

      setLoading(false);
      console.log("Document created successfully");
    } catch (error) {
      console.error(error);
      setLoading(false);
      console.log("Error creating document");
    }
  };
  const isFormValid =
    title.trim() !== "" && description.trim() !== "" && file !== null;
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
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                            />
                          </div>
                          <div class="mb-10 fv-row">
                            <label class="required form-label mb-3">
                              Document Description
                            </label>

                            <input
                              type="text"
                              class="form-control form-control-lg form-control-solid"
                              name="campaign_name"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                            />
                          </div>
                          <div>
                            <div class="w-100">
                              <div class="pb-10 pb-lg-12">
                                <label class="required form-label mb-3">
                                  Upload file
                                </label>
                              </div>
                              <div>
                                <input
                                  class="form-control form-control-lg mb-5"
                                  id="formFileLg"
                                  type="file"
                                  onChange={handleFileChange}
                                />
                              </div>
                            </div>
                          </div>

                          <div class="mb-10">
                            <label class="required fw-semibold fs-6 mb-5">
                              Choose Folder
                            </label>

                            <div class="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                value="Option 1"
                                onChange={handleOptionChange}
                              />
                              <label
                                class="fw-bold text-gray-800 "
                                for="flexRadioDefault1"
                              >
                                Privacy and Data protection
                              </label>
                            </div>

                            <div class="separator separator-dashed my-5"></div>

                            <div class="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                value="Option 2"
                                onChange={handleOptionChange}
                              />
                              <label
                                class="fw-bold text-gray-800 "
                                for="flexRadioDefault1"
                              >
                                Privacy and Data protection
                              </label>
                            </div>

                            <div class="separator separator-dashed my-5"></div>

                            <div class="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                value="Option 3"
                                onChange={handleOptionChange}
                              />
                              <label
                                class="fw-bold text-gray-800 "
                                for="flexRadioDefault1"
                              >
                                Privacy and Data protection
                              </label>
                            </div>

                            <div class="separator separator-dashed my-5"></div>

                            <div class="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                value="Option 4"
                                onChange={handleOptionChange}
                              />
                              <label
                                class="fw-bold text-gray-800 "
                                for="flexRadioDefault1"
                              >
                                Privacy and Data protection
                              </label>
                            </div>

                            <div class="separator separator-dashed my-5"></div>
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSaveDocument}
                        disabled={!isFormValid}
                      >
                        Submit
                      </button>
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
