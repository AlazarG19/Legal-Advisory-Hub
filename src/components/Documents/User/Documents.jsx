import React from "react";
import Header from "../../Header";
import Aside from "../../Aside";
const Documents = () => {
  return (
    <div>
      <Header />

      <div className="app-wrapper flex-row-fluid m-9" id="kt_app_wrapper">
        <div className="">
          {" "}
          <div class="d-flex flex-wrap flex-stack mb-6">
            <h3 class="fw-bold my-2">
              My Documents
              <span class="fs-6 text-gray-400 fw-semibold ms-1">
                100+ resources
              </span>
            </h3>
            <div class="d-flex my-2">
              <div class="d-flex align-items-center position-relative me-4">
                <span class="svg-icon svg-icon-3 position-absolute ms-3">
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
                  id="kt_filter_search"
                  class="form-control form-control-sm border-body bg-body w-150px ps-10"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          {/* doc lists */}
          <div class=" row g-6 g-xl-9 mb-6 mb-xl-9 bg-gray-100">
            <div class="col-md-6 col-lg-4 col-xl-3 ">
              <div class="card h-100">
                <div class="card-body d-flex justify-content-center text-center flex-column p-8">
                  <a
                    href="../../demo1/dist/apps/file-manager/files.html"
                    class="text-gray-800 text-hover-primary d-flex flex-column"
                  >
                    <div class="symbol symbol-175px mb-5">
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
            <div class="col-md-6 col-lg-4 col-xl-3 ">
              <div class="card h-100">
                <div class="card-body d-flex justify-content-center text-center flex-column p-8">
                  <a
                    href="../../demo1/dist/apps/file-manager/files.html"
                    class="text-gray-800 text-hover-primary d-flex flex-column"
                  >
                    <div class="symbol symbol-175px mb-5">
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
                    <div class="symbol symbol-175px mb-5">
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
                    <div class="symbol symbol-175px mb-5">
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
                    <div class="symbol symbol-175px mb-5">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
