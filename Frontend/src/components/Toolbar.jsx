const Toolbar = () => {
    return (
        <>
            <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
              <div
                id="kt_app_toolbar_container"
                className="app-container container-fluid d-flex flex-stack"
              >
                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                  <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                    Default
                  </h1>
                  <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                    <li className="breadcrumb-item text-muted">
                      <a
                        href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html"
                        className="text-muted text-hover-primary"
                      >
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <span className="bullet bg-gray-400 w-5px h-2px" />
                    </li>
                    <li className="breadcrumb-item text-muted">Dashboards</li>
                  </ul>
                </div>
                <div className="d-flex align-items-center gap-2 gap-lg-3">
                  <div className="d-flex">
                    <select
                      name="campaign-type"
                      data-control="select2"
                      data-hide-search="true"
                      className="form-select form-select-sm bg-body border-body w-175px select2-hidden-accessible"
                      data-select2-id="select2-data-7-xhcj"
                      tabIndex={-1}
                      aria-hidden="true"
                      data-kt-initialized={1}
                    >
                      <option
                        value="Twitter"
                        selected="selected"
                        data-select2-id="select2-data-9-kirn"
                      >
                        Select Campaign
                      </option>
                      <option value="Twitter">Twitter Campaign</option>
                      <option value="Twitter">Facebook Campaign</option>
                      <option value="Twitter">Adword Campaign</option>
                      <option value="Twitter">Carbon Campaign</option>
                    </select>
                    <span
                      className="select2 select2-container select2-container--bootstrap5"
                      dir="ltr"
                      data-select2-id="select2-data-8-p24e"
                      style={{ width: "100%" }}
                    >
                      <span className="selection">
                        <span
                          className="select2-selection select2-selection--single form-select form-select-sm bg-body border-body w-175px"
                          role="combobox"
                          aria-haspopup="true"
                          aria-expanded="false"
                          tabIndex={0}
                          aria-disabled="false"
                          aria-labelledby="select2-campaign-type-81-container"
                          aria-controls="select2-campaign-type-81-container"
                        >
                          <span
                            className="select2-selection__rendered"
                            id="select2-campaign-type-81-container"
                            role="textbox"
                            aria-readonly="true"
                            title="Select Campaign"
                          >
                            Select Campaign
                          </span>
                          <span
                            className="select2-selection__arrow"
                            role="presentation"
                          >
                            <b role="presentation" />
                          </span>
                        </span>
                      </span>
                      <span className="dropdown-wrapper" aria-hidden="true" />
                    </span>
                    <a
                      href="file:///C:/Users/zoro/Music/Keen%20v3.0.3/Keen%20v3.0.3/demo1/dist/index.html#"
                      className="btn btn-icon btn-sm btn-success flex-shrink-0 ms-4"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_create_campaign"
                    >
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
                            x="11.364"
                            y="20.364"
                            width={16}
                            height={2}
                            rx={1}
                            transform="rotate(-90 11.364 20.364)"
                            fill="currentColor"
                          />
                          <rect
                            x="4.36396"
                            y="11.364"
                            width={16}
                            height={2}
                            rx={1}
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </>
    );
}

export default Toolbar;
