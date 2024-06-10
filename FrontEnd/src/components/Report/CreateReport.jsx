import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "../../../public/assets/css/multistepform.css";

const CreateReport = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [userid, setUserId] = useState(id);
  const [freelancerName, set] = useState("");
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
      const response = await fetch("http://localhost:3000/createReport", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (step == 1 && response.ok && title != "") {
        handleSucessClick();
      } else if (step == 1 && title == "") {
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
            <h2>Report</h2>
            <input
              type="text"
              name="title"
              placeholder="Name of Freelancer"
              onChange={(e) => setTitle(e.target.value)}
            />
            <select id="issueType" name="issueType">
              <option value="">Select an issue type</option>
              <option value="qualityOfWork">Quality of Work</option>
              <option value="missedDeadlines">Missed Deadlines</option>
              <option value="communicationProblems">
                Communication Problems
              </option>
              <option value="unprofessionalBehavior">
                Unprofessional Behavior
              </option>
              <option value="other">Other</option>
            </select>
            <select id="issueType" name="issueType">
              <option value="">Severity of the issue</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">
                High
              </option>
              <option value="Critical">
                Critical
              </option>
              
            </select>
            <input type="text" name="client" placeholder="Type of issue" />
            <textarea
              type="text"
              name="freelancer"
              placeholder="Description of the Issue"
              value=""
            />
            <textarea
              type="text"
              name="freelancer"
              placeholder="Prefered Resolution"
              value=""
            />
            
            <button onClick={handleSubmit}>Submit</button>
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

      <div className="multi-step-form">{renderStep()}</div>

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

export default CreateReport;
