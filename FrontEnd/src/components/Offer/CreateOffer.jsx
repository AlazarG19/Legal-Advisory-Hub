import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "../../public/assets/css/multistepform.css";

const CreateOffer = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
    };
    console.log(formData);

    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/createOffer", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (step == 3 && response.ok && title!="") {
        handleSucessClick();
      }else if(step==3 && title==""){
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
  };
  const navigateSuccess = () => {
    setSucessModalShown(false);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Offer OverView</h2>
            <input
              type="text"
              name="title"
              placeholder="Title of the Offer"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input type="text" name="client" placeholder="Client Name" />
            <input
              type="text"
              name="freelancer"
              placeholder="Freelancers Name"
              value=""
            />
            <input
              type="text"
              name="company"
              placeholder="Organization/Campany (if exists)"
              value=""
            />
            <button onClick={handleSubmit}>Next</button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Offer Details</h2>
            <input
              type="text"
              name="desc"
              placeholder="Key Deliverables"
              value=""
            />
            <input
              type="text"
              name="reqmt"
              placeholder="Requirements from Client"
              value=""
            />
            <input
              type="text"
              name="reqmt"
              placeholder="Timeline and Process"
              value=""
            />
            <input
              type="text"
              name="price"
              placeholder="Price of the Service"
              onChange={(e) => setPrice(e.target.value)}
            />
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              type="text"
              name="description"
              placeholder="Detail Description of the offer"
              onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={handleSubmit}>Next</button>
            <button onClick={handlePrevStep}>Previous</button>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Final Results</h2>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              type="text"
              name="expn"
              placeholder="Client Expectation"
            />
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              type="text"
              name="expn"
              placeholder="Final Deliverables"
            />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handlePrevStep}>Previous</button>
          </div>
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
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          display: loading ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0000004a",
        }}
      >
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      <div className="multi-step-form">
        <div className="step-indicator">
          <ul>
            <li className={step === 1 ? "active" : ""}>1</li>
            <li className={step === 2 ? "active" : ""}>2</li>
            <li className={step === 3 ? "active" : ""}>3</li>
          </ul>
        </div>
        {renderStep()}
      </div>

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
