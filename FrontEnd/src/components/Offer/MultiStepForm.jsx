import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
const CreateOffer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [userid, setUserId] = useState(id);
  const [price, setPrice] = useState("");

  const Submit = async (e) => {
    e.preventDefault();

    const formData = {
      title: title,
      description: description,
      userid: userid,
      price: price,
    };

    console.log(formData);

    setLoading('flex')
    try {
        const response = await fetch("http://localhost:3000/createOffer", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            handleFailClick();
            throw new Error("Network response was not ok");
        }
        setLoading('none')
    } catch (error) {
        handleFailClick();
        console.error("There was an error:", error.message);
        // Handle the error here, e.g., show an error message to the user
    }
};


  const [modalShown, setModalShown] = useState(false);
  const [loading, setLoading] = useState('none');

  // Function to handle click event
  const handleFailClick = () => {
    // Show the modal by setting modalShown to true
    setModalShown(true);
    setLoading('none')
  };
  const handleSucessClick = () => {
    // Show the modal by setting modalShown to true
    setModalShown(true);
  };
  const navigateFail = () => {
    setModalShown(false);
  };
  const navigateSuccess = () => {
    navigate(`/chat/${id}`);
  };

  
  return (
    <>
      <div className="text-center" style ={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            display: loading,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0000004a',
      }}>
        <div
          className="spinner-border"
          role="status"
          style={{
            position: "absolute",
            top: "12%",
            width: "50px",
            height: "50px",
          }}
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>

      <div className="container mt-5">
        <h2>Add Offer</h2>
        <form id="userForm" onSubmit={Submit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={(e) => setTitle(e.target.value)}
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              className="form-control"
              id="category"
              onChange={(e) => setDescription(e.target.value)}
              name="category"
              required
            />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input
              type="text"
              className="form-control"
              id="email"
              onChange={(e) => setPrice(e.target.value)}
              name="email"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create Offer
          </button>
        </form>
      </div>
      {modalShown && (
        <div
          id="myModal"
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block", backgroundColor: '#0000004a', }}
        >
          <div
            aria-labelledby="swal2-title"
            aria-describedby="swal2-html-container"
            className="modal-dialog modal-content swal2-popup swal2-modal swal2-icon-error swal2-show"
            tabIndex={-1}
            role="dialog"
            aria-live="assertive"
            aria-modal="true"
            style={{ display: "grid", marginTop: "20%" }}
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

      {/* Event listener for modal shown event */}
      {modalShown && (
        <script>{`document.getElementById('myModal').addEventListener('shown.bs.modal', () => { document.getElementById('myInput').focus(); })`}</script>
      )}
    </>
  );
};

export default CreateOffer;
