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
    <div
        id="myModal"
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{ display: "block", backgroundColor: "#0000004a" }}
      >
        <div className="modal-content">
          {/* Modal header */}
          <div className="modal-header">
            {/* Modal title */}
            <h2>View Offer</h2>
            {/* Close button */}
            <div
              className="btn btn-sm btn-icon btn-active-color-primary"
              data-bs-dismiss="modal"
            >
              <span className="svg-icon svg-icon-1">
                {/* Close button SVG icon */}
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
          {/* Modal body */}
          <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
            {/* Offer details container */}
            <div className="card">
              <div className="card-body">
                {/* Offer title */}
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
                {/* Offer description */}
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

                {/* Additional important details */}
                <div className="mb-3">
                  {/* Include any additional important details here */}
                </div>
              </div>
            </div>
            {/* Proceed to Payment button */}
            <div className="text-center pt-4">
            <Link to={`/paymentPage/${id}`} className="btn btn-primary">
            Procceed to Payment
          </Link>
           
             
            </div>
          </div>
          {/* End Modal body */}
        </div>
      </div> 
    
    
    </>
  );
};

export default OfferComponent;
