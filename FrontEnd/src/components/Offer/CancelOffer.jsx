import React from "react";
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const CancelOffer = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  console.log("canceled offer", id)
  console.log(id)
  const handleCancel = () => {
    console.log("offer canceled")
    axios.post(`http://localhost:3000/cancelOffer/${id}`)
      .then(() => {
        console.log("offer canceled sucessfully")
        navigate('/clients')
      })

  }
  return (
    <div id="kt_app_content_container" className="app-container container-xxl">
      {/*begin::Card*/}
      <div className="card">
        {/*begin::Card body*/}
        <div className="card-body p-0">
          {/*begin::Wrapper*/}
          <div className="card-px text-center py-20 my-10">
            {/*begin::Title*/}
            <h2 className="fs-2x fw-bold mb-10">Cancel Offers</h2>
            {/*end::Title*/}
            {/*begin::Description*/}
            <p className="text-gray-400 fs-4 fw-semibold mb-10">
              Are you sure you want to cancel this offer.
              <br />
              Once you cancel an offer you can't restore the offer
            </p>
            {/*end::Description*/}
            {/*begin::Action*/}
            <a
              className="btn btn-primary"
              onClick={handleCancel}
            >
              Cancel Offer
            </a>
            {/*end::Action*/}
          </div>
          {/*end::Wrapper*/}
          {/*begin::Illustration*/}
          <div className="text-center px-4">
            <img
              className="mw-100 mh-300px"
              alt=""
              src="/assets/media/illustrations/sketchy-1/2.png"
            />
          </div>
          {/*end::Illustration*/}
        </div>
        {/*end::Card body*/}
      </div>
      {/*end::Card*/}

    </div >
  );
};

export default CancelOffer;
