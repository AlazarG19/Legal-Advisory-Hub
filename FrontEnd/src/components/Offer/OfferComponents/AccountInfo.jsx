import React from "react";

const AccountInfo = ({ handleSubmit, handlePrevStep }) => {
  return (
    <div>
      <div data-kt-stepper-element="content" className="current">
        {/*begin::Wrapper*/}
        <div className="w-100">
          {/*begin::Heading*/}
          <div className="pb-10 pb-lg-15">
            {/*begin::Title*/}
            <h2 className="fw-bold text-dark">Account Info</h2>
            {/*end::Title*/}
            {/*begin::Notice*/}
            <div className="text-muted fw-semibold fs-6">
              If you need more info, please check out
              <a href="#" className="link-primary fw-bold">
                Help Page
              </a>
              .
            </div>
            {/*end::Notice*/}
          </div>
          {/*end::Heading*/}
          {/*begin::Input group*/}
          <div className="mb-10 fv-row fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
            {/*begin::Label*/}
            <label className="d-flex align-items-center form-label mb-3">
              Specify Team Size
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                aria-label="Provide your team size to help us setup your billing"
                data-bs-original-title="Provide your team size to help us setup your billing"
                data-kt-initialized={1}
              />
            </label>
            {/*end::Label*/}
            {/*begin::Row*/}
            <div
              className="row mb-2"
              data-kt-buttons="true"
              data-kt-initialized={1}
            >
              {/*begin::Col*/}
              <div className="col">
                {/*begin::Option*/}
                <label className="btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4">
                  <input
                    type="radio"
                    className="btn-check"
                    name="account_team_size"
                    defaultValue="1-1"
                  />
                  <span className="fw-bold fs-3">1-1</span>
                </label>
                {/*end::Option*/}
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col">
                {/*begin::Option*/}
                <label className="btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4 active">
                  <input
                    type="radio"
                    className="btn-check"
                    name="account_team_size"
                    defaultChecked="checked"
                    defaultValue="2-10"
                  />
                  <span className="fw-bold fs-3">2-10</span>
                </label>
                {/*end::Option*/}
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col">
                {/*begin::Option*/}
                <label className="btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4">
                  <input
                    type="radio"
                    className="btn-check"
                    name="account_team_size"
                    defaultValue="10-50"
                  />
                  <span className="fw-bold fs-3">10-50</span>
                </label>
                {/*end::Option*/}
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col">
                {/*begin::Option*/}
                <label className="btn btn-outline btn-outline-dashed btn-active-light-primary w-100 p-4">
                  <input
                    type="radio"
                    className="btn-check"
                    name="account_team_size"
                    defaultValue="50+"
                  />
                  <span className="fw-bold fs-3">50+</span>
                </label>
                {/*end::Option*/}
              </div>
              {/*end::Col*/}
            </div>
            {/*end::Row*/}
            {/*begin::Hint*/}
            <div className="form-text">
              Customers will see this shortened version of your statement
              descriptor
            </div>
            {/*end::Hint*/}
            <div className="fv-plugins-message-container invalid-feedback" />
          </div>
          {/*end::Input group*/}
          {/*begin::Input group*/}
          <div className="mb-10 fv-row fv-plugins-icon-container fv-plugins-bootstrap5-row-invalid">
            {/*begin::Label*/}
            <label className="form-label mb-3">Team Account Name</label>
            {/*end::Label*/}
            {/*begin::Input*/}
            <input
              type="text"
              className="form-control form-control-lg form-control-solid"
              name="account_name"
              placeholder=""
              defaultValue=""
            />
            {/*end::Input*/}
            <div className="fv-plugins-message-container invalid-feedback">
              <div data-field="account_name" data-validator="notEmpty">
                Account name is required
              </div>
            </div>
          </div>
          {/*end::Input group*/}
          {/*begin::Input group*/}
          <div className="mb-0 fv-row fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
            {/*begin::Label*/}
            <label className="d-flex align-items-center form-label mb-5">
              Select Account Plan
              <i
                className="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                aria-label="Monthly billing will be based on your account plan"
                data-bs-original-title="Monthly billing will be based on your account plan"
                data-kt-initialized={1}
              />
            </label>
            {/*end::Label*/}
            {/*begin::Options*/}
            <div className="mb-0">
              {/*begin:Option*/}
              <label className="d-flex flex-stack mb-5 cursor-pointer">
                {/*begin:Label*/}
                <span className="d-flex align-items-center me-2">
                  {/*begin::Icon*/}
                  <span className="symbol symbol-50px me-6">
                    <span className="symbol-label">
                      {/*begin::Svg Icon | path: icons/duotune/finance/fin001.svg*/}
                      <span className="svg-icon svg-icon-1 svg-icon-gray-600">
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
                  </span>
                  {/*end::Icon*/}
                  {/*begin::Description*/}
                  <span className="d-flex flex-column">
                    <span className="fw-bold text-gray-800 text-hover-primary fs-5">
                      Company Account
                    </span>
                    <span className="fs-6 fw-semibold text-muted">
                      Use images to enhance your post flow
                    </span>
                  </span>
                  {/*end:Description*/}
                </span>
                {/*end:Label*/}
                {/*begin:Input*/}
                <span className="form-check form-check-custom form-check-solid">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="account_plan"
                    defaultValue={1}
                  />
                </span>
                {/*end:Input*/}
              </label>
              {/*end::Option*/}
              {/*begin:Option*/}
              <label className="d-flex flex-stack mb-5 cursor-pointer">
                {/*begin:Label*/}
                <span className="d-flex align-items-center me-2">
                  {/*begin::Icon*/}
                  <span className="symbol symbol-50px me-6">
                    <span className="symbol-label">
                      {/*begin::Svg Icon | path: icons/duotune/graphs/gra006.svg*/}
                      <span className="svg-icon svg-icon-1 svg-icon-gray-600">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z"
                            fill="currentColor"
                          />
                          <path
                            opacity="0.3"
                            d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                  </span>
                  {/*end::Icon*/}
                  {/*begin::Description*/}
                  <span className="d-flex flex-column">
                    <span className="fw-bold text-gray-800 text-hover-primary fs-5">
                      Developer Account
                    </span>
                    <span className="fs-6 fw-semibold text-muted">
                      Use images to your post time
                    </span>
                  </span>
                  {/*end:Description*/}
                </span>
                {/*end:Label*/}
                {/*begin:Input*/}
                <span className="form-check form-check-custom form-check-solid">
                  <input
                    className="form-check-input"
                    type="radio"
                    defaultChecked="checked"
                    name="account_plan"
                    defaultValue={2}
                  />
                </span>
                {/*end:Input*/}
              </label>
              {/*end::Option*/}
              {/*begin:Option*/}
              <label className="d-flex flex-stack mb-0 cursor-pointer">
                {/*begin:Label*/}
                <span className="d-flex align-items-center me-2">
                  {/*begin::Icon*/}
                  <span className="symbol symbol-50px me-6">
                    <span className="symbol-label">
                      {/*begin::Svg Icon | path: icons/duotune/graphs/gra008.svg*/}
                      <span className="svg-icon svg-icon-1 svg-icon-gray-600">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 10.9128V3.01281C13 2.41281 13.5 1.91281 14.1 2.01281C16.1 2.21281 17.9 3.11284 19.3 4.61284C20.7 6.01284 21.6 7.91285 21.9 9.81285C22 10.4129 21.5 10.9128 20.9 10.9128H13Z"
                            fill="currentColor"
                          />
                          <path
                            opacity="0.3"
                            d="M13 12.9128V20.8129C13 21.4129 13.5 21.9129 14.1 21.8129C16.1 21.6129 17.9 20.7128 19.3 19.2128C20.7 17.8128 21.6 15.9128 21.9 14.0128C22 13.4128 21.5 12.9128 20.9 12.9128H13Z"
                            fill="currentColor"
                          />
                          <path
                            opacity="0.3"
                            d="M11 19.8129C11 20.4129 10.5 20.9129 9.89999 20.8129C5.49999 20.2129 2 16.5128 2 11.9128C2 7.31283 5.39999 3.51281 9.89999 3.01281C10.5 2.91281 11 3.41281 11 4.01281V19.8129Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </span>
                  </span>
                  {/*end::Icon*/}
                  {/*begin::Description*/}
                  <span className="d-flex flex-column">
                    <span className="fw-bold text-gray-800 text-hover-primary fs-5">
                      Testing Account
                    </span>
                    <span className="fs-6 fw-semibold text-muted">
                      Use images to enhance time travel rivers
                    </span>
                  </span>
                  {/*end:Description*/}
                </span>
                {/*end:Label*/}
                {/*begin:Input*/}
                <span className="form-check form-check-custom form-check-solid">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="account_plan"
                    defaultValue={3}
                  />
                </span>
                {/*end:Input*/}
              </label>
              {/*end::Option*/}
            </div>
            {/*end::Options*/}
            <div className="fv-plugins-message-container invalid-feedback" />
          </div>
          {/*end::Input group*/}
        </div>
        {/*end::Wrapper*/}
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handlePrevStep}>Previous</button>
    </div>
  );
};

export default AccountInfo;
