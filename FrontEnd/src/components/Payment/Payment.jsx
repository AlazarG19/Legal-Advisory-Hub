import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Payment = () => {
  const { id } = useParams()

  const [form, setForm] = useState({
    amount: "",
    currency: "",
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // console.log(form)
  const tx_ref = `${form.first_name}-${Date.now()}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/accept-payment",
        {
          amount: form.amount,
          currency: form.currency,
          email: form.email,
          first_name: form.first_name,
          last_name: form.last_name,
          phone_number: form.phone_number,
          tx_ref,
          // return_url,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      axios.post(`http://localhost:3000/offerInProgress/${id}`).then(() => {
        console.log("offer in progress")
      })
      window.location.href = res.data.data.checkout_url;
      console.log(res);
      setForm({
        amount: "",
        currency: "",
        email: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        tx_ref,
      });
    } catch (error) {
      console.log("Error", error);
    }
  };
  const [loading, setLoading] = useState(false);

  const Submit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Perform payment processing logic here

    setLoading(false);
  };
  return (
    <>
      {/* <div
        id="myModal"
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{ display: "block", backgroundColor: "#0000004a" }}
      >
        <div
          className="modal-content"
          style={{ maxWidth: "500px", margin: "auto" }}
        >
          <div className="modal-header">
            <h2>Payment Details</h2>

          </div>
          <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
            <form
              className=" p-5 m-10 shadow-2xl rounded-xl"
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label htmlFor="personName" name="first_name" className="form-label">
                  Person's Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="personName"
                  placeholder="Enter person's name"
                  onChange={handleChange}
                  required
                />

              </div>
              <div className="mb-3">
                <label htmlFor="personName" className="form-label">
                  Amount
                </label>
                <input
                  className="form-control"
                  onChange={handleChange}
                  type="text"
                  name="amount"
                  value={form.amount}
                  placeholder="amount"
                  required
                />

              </div>

              <br />
              <input
                className="m-3 border border-black px-5 py-2 rounded-lg"
                onChange={handleChange}
                type="hidden"
                name="currency"
                value={form.currency = "ETB"}
                placeholder="currency"
              />

              <button
                className="px-[100px] py-3 rounded-md bg-green-600 text-white"
                type="submit"
              >
                Pay With Chapa
              </button>
            </form>
          </div>
        </div>
      </div> */}

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

                </div>
                {/* <!--end::Nav--> */}
                <form onSubmit={handleSubmit} >

                  {/* <!--begin::Form--> */}
                  <div class="mx-auto mw-600px w-100 pt-15 pb-10" id="kt_create_account_form">

                    {/* <!--begin::Step 3--> */}
                    <div class="current" data-kt-stepper-element="content">
                      {/* <!--begin::Wrapper--> */}
                      <div class="w-100">
                        {/* <!--begin::Input group--> */}
                        <div class="fv-row mb-10">
                          {/* <!--begin::Label--> */}
                          <label class="form-label required">Person Name</label>
                          {/* <!--end::Label--> */}
                          {/* <!--begin::Input--> */}
                          <input
                            type="text"
                            className="form-control form-control-lg form-control-solid"
                            id="personName"
                            placeholder="Enter person's name"
                            onChange={handleChange}
                            required
                          />
                          {/* <!--end::Input--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
                        <div class="fv-row mb-10">
                          {/* <!--begin::Label--> */}
                          <label class="d-flex align-items-center form-label">
                            <span class="required">Amount</span>
                          </label>
                          {/* <!--end::Label--> */}
                          {/* <!--begin::Input--> */}
                          <input
                            onChange={handleChange}
                            type="text"
                            name="amount"
                            value={form.amount}
                            placeholder="amount"
                            required
                            class="form-control form-control-lg form-control-solid" />
                          {/* <!--end::Input--> */}
                        </div>
                        <input
                          className="m-3 border border-black px-5 py-2 rounded-lg"
                          onChange={handleChange}
                          type="hidden"
                          name="currency"
                          value={form.currency = "ETB"}
                          placeholder="currency"
                        />
                      </div>
                      {/* <!--end::Wrapper--> */}
                    </div>

                    {/* <!--begin::Actions--> */}
                    <div class="d-flex flex-stack pt-15">
                      {/* <!--begin::Wrapper--> */}
                      <div class="mr-2">
                        <button
                          className="btn btn-primary"
                          type="submit"
                        >
                          Pay With Chapa
                        </button>
                      </div>
                      {/* <!--end::Wrapper--> */}
                    </div>
                    {/* <!--end::Actions--> */}
                  </div>
                  {/* <!--end::Form--> */}
                </form>
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

export default Payment;
