import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "../../../public/assets/css/multistepform.css";
import axios from 'axios'

const CreateOffer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Waiting");
  const [userid, setUserId] = useState(id);
  const [price, setPrice] = useState("");
  const [modalShown, setModalShown] = useState(false);
  const [sucessModalShown, setSucessModalShown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title: title,
      description: description,
      userid: userid,
      price: price,
      status: status
    };
    console.log(formData);

    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/createOffer", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (step == 3 && response.ok && title != "") {
        handleSucessClick();

      } else if (step == 3 && title == "") {
        handleFailClick();
      }

      if (!response.ok) {
        handleFailClick();
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      if (step == 3) {
        handleFailClick();
      }
      console.error("There was an error:", error.message);
      // Handle the error here, e.g., show an error message to the user
    }

    setLoading(false);

    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    // Go back to the previous step
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleFailClick = () => {
    setModalShown(true);
  };
  const handleSucessClick = () => {
    setSucessModalShown(true);
  };

  const navigateFail = () => {
    setModalShown(false);
    setStep(1)
  };
  const navigateSuccess = () => {
    setSucessModalShown(false);
    navigate('/clients')
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <form
            className="mx-auto mw-600px w-100 pt-15 pb-10 fv-plugins-bootstrap5 fv-plugins-framework"
            noValidate="novalidate"
            id="kt_create_account_form"
          >
            {/*begin::Step 1*/}
            <div className="current" data-kt-stepper-element="content">
              {/*begin::Wrapper*/}
              <div className="w-100">
                {/*begin::Heading*/}
                <div className="pb-10 pb-lg-15">
                  {/*begin::Title*/}

                  <h2 className="fw-bold d-flex align-items-center text-dark">
                    Offer OverView
                    <i
                      className="fas fa-exclamation-circle ms-2 fs-7"
                      data-bs-toggle="tooltip"
                      aria-label="Billing is issued based on your selected account type"
                      data-bs-original-title="Billing is issued based on your selected account type"
                      data-kt-initialized={1}
                    />
                  </h2>
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
                <div className="fv-row fv-plugins-icon-container">
                  {/*begin::Row*/}
                  <input
                    type="text"
                    name="company"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="Enter title of the Offer"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <input
                    type="text"
                    name="company"
                    className="form-control form-control-lg form-control-solid mt-4"
                    placeholder="Client's Name"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <input
                    type="text"
                    name="company"
                    className="form-control form-control-lg form-control-solid mt-4"
                    placeholder="Freelancer's Name"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <input
                    type="text"
                    name="company"
                    className="form-control form-control-lg form-control-solid mt-4"
                    placeholder="Firm (if exists)"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  {/*end::Row*/}
                </div>
                {/*end::Input group*/}
              </div>
              {/*end::Wrapper*/}
            </div>
            <div className="d-flex flex-stack pt-15">
              {/*begin::Wrapper*/}
              <div className="mr-2">
                <button
                  type="button"
                  className="btn btn-lg btn-light-primary me-3"
                  data-kt-stepper-action="previous"
                >
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr063.svg*/}
                  <span className="svg-icon svg-icon-4 me-1">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.5"
                        x={6}
                        y={11}
                        width={13}
                        height={2}
                        rx={1}
                        fill="currentColor"
                      />
                      <path
                        d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}Back
                </button>
              </div>
              {/*end::Wrapper*/}
              {/*begin::Wrapper*/}
              <div>
                <button
                  type="button"
                  className="btn btn-lg btn-primary me-3"
                  data-kt-stepper-action="submit"
                >
                  <span className="indicator-label">
                    onClick={handleSubmit}
                    Next
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                    <span className="svg-icon svg-icon-3 ms-2 me-0">
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
                  </span>
                  <span className="indicator-progress">
                    Please wait...
                    <span className="spinner-border spinner-border-sm align-middle ms-2" />
                  </span>
                </button>
                <button
                  type="button"
                  className="btn btn-lg btn-primary"
                  data-kt-stepper-action="next"
                  onClick={handleSubmit}
                >
                  Continue
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                  <span className="svg-icon svg-icon-4 ms-1 me-0">
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
                </button>
              </div>
              {/*end::Wrapper*/}
            </div>
            {/*end::Actions*/}
          </form>
        );
      case 2:
        return (
          <form
            className="mx-auto mw-600px w-100 pt-15 pb-10 fv-plugins-bootstrap5 fv-plugins-framework"
            noValidate="novalidate"
            id="kt_create_account_form"
          >
            {/*begin::Step 1*/}
            <div className="current" data-kt-stepper-element="content">
              {/*begin::Wrapper*/}
              <div className="w-100">
                {/*begin::Heading*/}
                <div className="pb-10 pb-lg-15">
                  {/*begin::Title*/}

                  <h2 className="fw-bold d-flex align-items-center text-dark">
                    Offer Details
                    <i
                      className="fas fa-exclamation-circle ms-2 fs-7"
                      data-bs-toggle="tooltip"
                      aria-label="Billing is issued based on your selected account type"
                      data-bs-original-title="Billing is issued based on your selected account type"
                      data-kt-initialized={1}
                    />
                  </h2>
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
                <div className="fv-row fv-plugins-icon-container">
                  {/*begin::Row*/}
                  <input
                    type="text"
                    name="company"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="Key Deliverables"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <input
                    type="text"
                    name="company"
                    className="form-control form-control-lg form-control-solid mt-4"
                    placeholder="Client Requirements"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <input
                    type="text"
                    name="company"
                    className="form-control form-control-lg form-control-solid mt-4"
                    placeholder="TimeLine and Process"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <input
                    type="number"
                    name="company"
                    className="form-control form-control-lg form-control-solid mt-4"
                    placeholder="Price for the service"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <textarea
                    className="form-control form-control-lg form-control-solid mt-4"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    type="text"
                    name="description"
                    placeholder="Detail Description of the offer"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  {/*end::Row*/}
                </div>
                {/*end::Input group*/}
              </div>
              {/*end::Wrapper*/}
            </div>
            {/*end::Step 1*/}
            {/*begin::Step 2*/}
            {/*end::Step 5*/}
            {/*begin::Actions*/}
            <div className="d-flex flex-stack pt-15">
              {/*begin::Wrapper*/}
              <div className="mr-2">
                <button
                  type="button"
                  className="btn btn-lg btn-light-primary me-3"
                  data-kt-stepper-action="previous"
                >
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr063.svg*/}
                  <span className="svg-icon svg-icon-4 me-1">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.5"
                        x={6}
                        y={11}
                        width={13}
                        height={2}
                        rx={1}
                        fill="currentColor"
                      />
                      <path
                        d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}Back
                </button>
              </div>
              {/*end::Wrapper*/}
              {/*begin::Wrapper*/}
              <div>
                <button
                  type="button"
                  className="btn btn-lg btn-primary me-3"
                  data-kt-stepper-action="submit"
                >
                  <span className="indicator-label">
                    onClick={handleSubmit}
                    Next
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                    <span className="svg-icon svg-icon-3 ms-2 me-0">
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
                  </span>
                  <span className="indicator-progress">
                    Please wait...
                    <span className="spinner-border spinner-border-sm align-middle ms-2" />
                  </span>
                </button>

                <button
                  type="button"
                  className="btn btn-lg btn-primary"
                  data-kt-stepper-action="next"
                  onClick={handlePrevStep}
                  style={{ marginRight: "20px" }}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="btn btn-lg btn-primary"
                  data-kt-stepper-action="next"
                  onClick={handleSubmit}
                >
                  Next
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                  <span className="svg-icon svg-icon-4 ms-1 me-0">
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
                </button>
              </div>
              {/*end::Wrapper*/}
            </div>
            {/*end::Actions*/}
          </form>
        );
      case 3:
        return (
          <form
            className="mx-auto mw-600px w-100 pt-15 pb-10 fv-plugins-bootstrap5 fv-plugins-framework"
            noValidate="novalidate"
            id="kt_create_account_form"
          >
            {/*begin::Step 1*/}
            <div className="current" data-kt-stepper-element="content">
              {/*begin::Wrapper*/}
              <div className="w-100">
                {/*begin::Heading*/}
                <div className="pb-10 pb-lg-15">
                  {/*begin::Title*/}

                  <h2 className="fw-bold d-flex align-items-center text-dark">
                    Expected Outcome
                    <i
                      className="fas fa-exclamation-circle ms-2 fs-7"
                      data-bs-toggle="tooltip"
                      aria-label="Billing is issued based on your selected account type"
                      data-bs-original-title="Billing is issued based on your selected account type"
                      data-kt-initialized={1}
                    />
                  </h2>
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
                <div className="fv-row fv-plugins-icon-container">
                  {/*begin::Row*/}

                  <textarea
                    className="form-control form-control-lg form-control-solid mt-4"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    type="text"
                    name="description"
                    placeholder="Client Expectation"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <textarea
                    className="form-control form-control-lg form-control-solid mt-4"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    type="text"
                    name="description"
                    placeholder="Final Deliverables"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  {/*end::Row*/}
                </div>
                {/*end::Input group*/}
              </div>
              {/*end::Wrapper*/}
            </div>
            {/*end::Step 1*/}
            {/*begin::Step 2*/}
            {/*end::Step 5*/}
            {/*begin::Actions*/}
            <div className="d-flex flex-stack pt-15">
              {/*begin::Wrapper*/}
              <div className="mr-2">
                <button
                  type="button"
                  className="btn btn-lg btn-light-primary me-3"
                  data-kt-stepper-action="previous"
                >
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr063.svg*/}
                  <span className="svg-icon svg-icon-4 me-1">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.5"
                        x={6}
                        y={11}
                        width={13}
                        height={2}
                        rx={1}
                        fill="currentColor"
                      />
                      <path
                        d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}Back
                </button>
              </div>
              {/*end::Wrapper*/}
              {/*begin::Wrapper*/}
              <div>
                <button
                  type="button"
                  className="btn btn-lg btn-primary me-3"
                  data-kt-stepper-action="submit"
                >
                  <span className="indicator-label">
                    onClick={handleSubmit}
                    Next
                    {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                    <span className="svg-icon svg-icon-3 ms-2 me-0">
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
                  </span>
                  <span className="indicator-progress">
                    Please wait...
                    <span className="spinner-border spinner-border-sm align-middle ms-2" />
                  </span>
                </button>

                <button
                  type="button"
                  className="btn btn-lg btn-primary"
                  data-kt-stepper-action="next"
                  onClick={handlePrevStep}
                  style={{ marginRight: "20px" }}
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="btn btn-lg btn-primary"
                  data-kt-stepper-action="next"
                  onClick={handleSubmit}
                >
                  Submit
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
                  <span className="svg-icon svg-icon-4 ms-1 me-0">
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
                </button>
              </div>
              {/*end::Wrapper*/}
            </div>
            {/*end::Actions*/}
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div
        className="text-center"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          display: loading ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0000004a",
          zIndex: "10"
        }}
      >
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div className="card-body">
        {/*begin::Stepper*/}
        <div
          className="stepper stepper-links d-flex flex-column pt-15"
          id="kt_create_account_stepper"
          data-kt-stepper="true"
        >
          {/*begin::Nav*/}
          <div className="stepper-nav mb-5">{/*begin::Step 1*/}</div>
          <div className="step-indicator">
            <ul>
              <li className={step === 1 ? "active" : ""}>1</li>
              <li className={step === 2 ? "active" : ""}>2</li>
              <li className={step === 3 ? "active" : ""}>3</li>
            </ul>
          </div>
          {renderStep()}

          {/*end::Form*/}
        </div>
        {/*end::Stepper*/}
      </div>

      {/* <div className="multi-step-form">
        <div className="step-indicator">
          <ul>
            <li className={step === 1 ? "active" : ""}>1</li>
            <li className={step === 2 ? "active" : ""}>2</li>
            <li className={step === 3 ? "active" : ""}>3</li>
          </ul>
        </div>
        {renderStep()}
      </div> */}

      {modalShown && (
        <div
          id="myModal"
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block", backgroundColor: "#0000004a" }}
        >
          <div
            aria-labelledby="swal2-title"
            aria-describedby="swal2-html-container"
            className="modal-dialog modal-content swal2-popup swal2-modal swal2-icon-error swal2-show"
            tabIndex={-1}
            role="dialog"
            aria-live="assertive"
            aria-modal="true"
            style={{ display: "grid", marginTop: "26vh" }}
          >
            <div
              className="swal2-icon swal2-error swal2-icon-show"
              style={{ display: "flex" }}
            >
              <span className="swal2-x-mark">
                <span className="swal2-x-mark-line-left" />
                <span className="swal2-x-mark-line-right" />
              </span>
            </div>

            <div
              className="swal2-html-container"
              id="swal2-html-container"
              style={{ display: "block" }}
            >
              Sorry, looks like there are some errors detected, please try
              again.
            </div>

            <div className="swal2-actions" style={{ display: "flex" }}>
              <div className="swal2-loader" />
              <button
                type="button"
                className="swal2-confirm btn btn-primary"
                aria-label=""
                style={{ display: "inline-block" }}
                onClick={navigateFail}
              >
                Ok, got it!
              </button>
            </div>
          </div>
        </div>
      )}
      {modalShown && (
        <script>{`document.getElementById('myModal').addEventListener('shown.bs.modal', () => { document.getElementById('myInput').focus(); })`}</script>
      )}
      {sucessModalShown && (
        <div
          id="myModal"
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block", backgroundColor: "#0000004a" }}
        >
          <div
            aria-labelledby="swal2-title"
            aria-describedby="swal2-html-container"
            className="modal-dialog modal-content swal2-popup swal2-modal swal2-icon-success swal2-show" // changed swal2-icon-error to swal2-icon-success
            tabIndex={-1}
            role="dialog"
            aria-live="assertive"
            aria-modal="true"
            style={{ display: "grid", marginTop: "26vh" }}
          >
            <div
              className="swal2-icon swal2-success swal2-icon-show" // changed swal2-error to swal2-success
              style={{ display: "flex" }}
            >
              <span className="swal2-success-line-tip" />
              <span className="swal2-success-line-long" />
              <div className="swal2-success-ring" />
              <div className="swal2-success-fix" />
              <div className="swal2-success-circular-line-left" />
              <div className="swal2-success-circular-line-right" />
            </div>

            <div
              className="swal2-html-container"
              id="swal2-html-container"
              style={{ display: "block" }}
            >
              Success! Your action was completed.
            </div>

            <div className="swal2-actions" style={{ display: "flex" }}>
              <div className="swal2-loader" />
              <button
                type="button"
                className="swal2-confirm btn btn-primary"
                aria-label=""
                style={{ display: "inline-block" }}
                onClick={navigateSuccess}
              >
                Ok, got it!
              </button>
            </div>
          </div>
        </div>
      )}
      {sucessModalShown && (
        <script>{`document.getElementById('myModal').addEventListener('shown.bs.modal', () => { document.getElementById('myInput').focus(); })`}</script>
      )}
    </>
  );
};

export default CreateOffer;
