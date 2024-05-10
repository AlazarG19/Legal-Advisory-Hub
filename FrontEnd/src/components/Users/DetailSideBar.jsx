const DetailSideBar = () => {
    return (
        <div className="card card-flush">
                    <div
                      className="card-header pt-7"
                      id="kt_chat_contacts_header"
                    >
                      <div className="card-title">
                        <h2>Groups</h2>
                      </div>
                    </div>
                    <div className="card-body pt-5">
                      <div className="d-flex flex-column gap-5">
                        <div className="d-flex flex-stack">
                          <a
                            href="../../demo1/dist/apps/contacts/getting-started.html"
                            className="fs-6 fw-bold text-gray-800 text-hover-primary text-active-primary active"
                          >
                            All Contacts
                          </a>
                          <div className="badge badge-light-primary">9</div>
                        </div>
                        <div className="d-flex flex-stack">
                          <a
                            href="../../demo1/dist/apps/contacts/getting-started.html"
                            className="fs-6 fw-bold text-gray-800 text-hover-primary"
                          >
                            Subscribed
                          </a>
                          <div className="badge badge-light-primary">3</div>
                        </div>
                        <div className="d-flex flex-stack">
                          <a
                            href="../../demo1/dist/apps/contacts/getting-started.html"
                            className="fs-6 fw-bold text-gray-800 text-hover-primary"
                          >
                            Tier 1 Member
                          </a>
                          <div className="badge badge-light-primary">1</div>
                        </div>
                        <div className="d-flex flex-stack">
                          <a
                            href="../../demo1/dist/apps/contacts/getting-started.html"
                            className="fs-6 fw-bold text-gray-800 text-hover-primary"
                          >
                            Pending Approval
                          </a>
                          <div className="badge badge-light-primary">3</div>
                        </div>
                        <div className="d-flex flex-stack">
                          <a
                            href="../../demo1/dist/apps/contacts/getting-started.html"
                            className="fs-6 fw-bold text-danger text-hover-primary"
                          >
                            Blocked
                          </a>
                          <div className="badge badge-light-danger">2</div>
                        </div>
                      </div>
                      <div className="separator my-7" />
                      <label className="fs-6 fw-semibold form-label">
                        Add new group
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control form-control-solid"
                          placeholder="Group name"
                        />
                        <button
                          type="button"
                          className="btn btn-icon btn-light"
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
                                opacity="0.3"
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={5}
                                fill="currentColor"
                              />
                              <rect
                                x="10.8891"
                                y="17.8033"
                                width={12}
                                height={2}
                                rx={1}
                                transform="rotate(-90 10.8891 17.8033)"
                                fill="currentColor"
                              />
                              <rect
                                x="6.01041"
                                y="10.9247"
                                width={12}
                                height={2}
                                rx={1}
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div className="separator my-7" />
                      <a
                        href="../../demo1/dist/apps/contacts/add-contact.html"
                        className="btn btn-primary w-100"
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
                              d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.3"
                              d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        Add new contact
                      </a>
                    </div>
                  </div>
    );
}

export default DetailSideBar;
