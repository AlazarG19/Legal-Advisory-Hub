import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const OfferComponent = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [offer, setOffer] = useState(false); // State to store the offer data
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/getOffers/${id}`)
      .then((response) => {
        const { title, description, price } = response.data;
        setTitle(response.data[0].title);
        setDescription(response.data[0].description);
        setPrice(response.data[0].price);
        if (response) {
          setOffer(true);
        }
      })

      .catch((error) => console.error(error));
  }, [id]);
  return (
    <>
      {/* <div
        id="myModal"
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{ display: "block", backgroundColor: "#0000004a" }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h2>View Offer</h2>
            <div
              className="btn btn-sm btn-icon btn-active-color-primary"
              data-bs-dismiss="modal"
            >
              <span className="svg-icon svg-icon-1">
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
                    y="17.3137"
                    width={16}
                    height={2}
                    rx={1}
                    transform="rotate(-45 6 17.3137)"
                    fill="currentColor"
                  />
                  <rect
                    x="7.41422"
                    y={6}
                    width={16}
                    height={2}
                    rx={1}
                    transform="rotate(45 7.41422 6)"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
            <div className="card">
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="offerTitle" className="form-label">
                    Offer Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="offerTitle"
                    placeholder="Enter offer title"
                    value={title}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="offerDescription" className="form-label">
                    Offer Description
                  </label>
                  <textarea
                    className="form-control"
                    id="offerDescription"
                    rows="3"
                    placeholder="Enter offer description"
                    value={description}
                    disabled
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="offerTitle" className="form-label">
                    Offer Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="offerTitle"
                    placeholder="Enter offer title"
                    value={price}
                    disabled
                  />
                </div>

                <div className="mb-3">
                </div>
              </div>
            </div>
            <div className="text-center pt-4">
              <Link to={`/paymentPage/${id}`} className="btn btn-primary">
                Procceed to Payment
              </Link>


            </div>
          </div>
        </div>
      </div> */}

      {/* <!--end::Toolbar--> */}
      {/* <!--begin::Content--> */}
      <div id="kt_app_content" class="app-content flex-column-fluid">
        {/* <!--begin::Content container--> */}
        <div id="kt_app_content_container" class="app-container container-xxl">
          {/* <!--begin::Card--> */}
          <div class="card">
            {/* <!--begin::Card body--> */}
            <div class="card-body">
              {/* <!--begin::Stepper--> */}
              <div class="stepper stepper-links d-flex flex-column pt-15" id="kt_create_account_stepper">
                {/* <!--begin::Nav--> */}
                <div class="stepper-nav mb-5">
                  {/* <!--begin::Step 3--> */}
                  <div class="stepper-item" data-kt-stepper-element="nav">
                    <h3 class="stepper-title">Offer Title</h3>
                  </div>

                </div>
                {/* <!--end::Nav--> */}
                {/* <!--begin::Form--> */}
                <div class="mx-auto mw-600px w-100 pt-15 pb-10" id="kt_create_account_form">

                  {/* <!--begin::Step 3--> */}
                  <div class="current" data-kt-stepper-element="content">
                    {/* <!--begin::Wrapper--> */}
                    <div class="w-100">
                      {/* <!--begin::Heading--> */}
                      <div class="pb-10 pb-lg-12">
                        {/* <!--begin::Title--> */}
                        <h2 class="fw-bold text-dark">Business Details</h2>
                        {/* <!--end::Title--> */}
                      </div>
                      {/* <!--end::Heading--> */}
                      {/* <!--begin::Input group--> */}
                      <div class="fv-row mb-10">
                        {/* <!--begin::Label--> */}
                        <label class="form-label required">Offer Title</label>
                        {/* <!--end::Label--> */}
                        {/* <!--begin::Input--> */}
                        <input name="business_name" class="form-control form-control-lg form-control-solid" value={title} disabled />
                        {/* <!--end::Input--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Input group--> */}
                      <div class="fv-row mb-10">
                        {/* <!--begin::Label--> */}
                        <label class="d-flex align-items-center form-label">
                          <span class="required">Offer Description</span>
                        </label>
                        {/* <!--end::Label--> */}
                        {/* <!--begin::Input--> */}
                        <input name="business_descriptor" class="form-control form-control-lg form-control-solid" disabled value={description} />
                        {/* <!--end::Input--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      <div class="fv-row mb-10">
                        {/* <!--begin::Label--> */}
                        <label class="d-flex align-items-center form-label">
                          <span class="required">Offer Price</span>
                        </label>
                        {/* <!--end::Label--> */}
                        {/* <!--begin::Input--> */}
                        <input name="business_descriptor" class="form-control form-control-lg form-control-solid" disabled value={price} />
                        {/* <!--end::Input--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                    </div>
                    {/* <!--end::Wrapper--> */}
                  </div>

                  {/* <!--begin::Actions--> */}
                  <div class="d-flex flex-stack pt-15">
                    {/* <!--begin::Wrapper--> */}
                    <div class="mr-2">
                      <Link to={`/paymentPage/${id}`} className="btn btn-primary">
                        Procceed to Payment
                      </Link>
                    </div>
                    {/* <!--end::Wrapper--> */}
                  </div>
                  {/* <!--end::Actions--> */}
                </div>
                {/* <!--end::Form--> */}
              </div>
              {/* <!--end::Stepper--> */}
            </div>
            {/* <!--end::Card body--> */}
          </div>
          {/* <!--end::Card--> */}
        </div>
        {/* <!--end::Content container--> */}
      </div>
      {/* <!--end::Content--> */}


    </>
  );
};

export default OfferComponent;
