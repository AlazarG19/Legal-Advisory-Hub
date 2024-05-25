import React from "react";

const DeactivateComponent = () => {
  return (
    <div>
      <div className="card">
        {/*begin::Card header*/}
        <div
          className="card-header border-0 cursor-pointer"
          role="button"
          data-bs-toggle="collapse"
          data-bs-target="#kt_account_deactivate"
          aria-expanded="true"
          aria-controls="kt_account_deactivate"
        >
          <div className="card-title m-0">
            <h3 className="fw-bold m-0">Deactivate Account</h3>
          </div>
        </div>
        {/*end::Card header*/}
        {/*begin::Content*/}
        <div id="kt_account_settings_deactivate" className="collapse show">
          {/*begin::Form*/}
          <form
            id="kt_account_deactivate_form"
            className="form fv-plugins-bootstrap5 fv-plugins-framework"
            noValidate="novalidate"
          >
            {/*begin::Card body*/}
            <div className="card-body border-top p-9">
              {/*begin::Notice*/}
              <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
                {/*begin::Icon*/}
                {/*begin::Svg Icon | path: icons/duotune/general/gen044.svg*/}
                <span className="svg-icon svg-icon-2tx svg-icon-warning me-4">
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
                      rx={10}
                      fill="currentColor"
                    />
                    <rect
                      x={11}
                      y={14}
                      width={7}
                      height={2}
                      rx={1}
                      transform="rotate(-90 11 14)"
                      fill="currentColor"
                    />
                    <rect
                      x={11}
                      y={17}
                      width={2}
                      height={2}
                      rx={1}
                      transform="rotate(-90 11 17)"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
                {/*end::Icon*/}
                {/*begin::Wrapper*/}
                <div className="d-flex flex-stack flex-grow-1">
                  {/*begin::Content*/}
                  <div className="fw-semibold">
                    <h4 className="text-gray-900 fw-bold">
                      You Are Deactivating Your Account
                    </h4>
                    <div className="fs-6 text-gray-700">
                      For extra security, this requires you to confirm your
                      email or phone number when you reset yousignr password.
                      <br />
                      <a className="fw-bold" href="#">
                        Learn more
                      </a>
                    </div>
                  </div>
                  {/*end::Content*/}
                </div>
                {/*end::Wrapper*/}
              </div>
              {/*end::Notice*/}
              {/*begin::Form input row*/}
              <div className="form-check form-check-solid fv-row fv-plugins-icon-container">
                <input
                  name="deactivate"
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="deactivate"
                />
                <label
                  className="form-check-label fw-semibold ps-2 fs-6"
                  htmlFor="deactivate"
                >
                  I confirm my account deactivation
                </label>
                <div className="fv-plugins-message-container invalid-feedback" />
              </div>
              {/*end::Form input row*/}
            </div>
            {/*end::Card body*/}
            {/*begin::Card footer*/}
            <div className="card-footer d-flex justify-content-end py-6 px-9">
              <button
                id="kt_account_deactivate_account_submit"
                type="submit"
                className="btn btn-danger fw-semibold"
              >
                Deactivate Account
              </button>
            </div>
            {/*end::Card footer*/}
            <input type="hidden" />
          </form>
          {/*end::Form*/}
        </div>
        {/*end::Content*/}
      </div>
    </div>
  );
};

export default DeactivateComponent;
