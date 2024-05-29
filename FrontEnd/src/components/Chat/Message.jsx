import "../../public/assets/css/chat.css";
const Message = ({ message }) => {
  const { text, sender, timestamp } = message;
  const messageClass = sender === "user" ? "user-message" : "other-message";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <div className="d-flex flex-column align-items-start" >
          <div className="d-flex align-items-center mb-2">
            <div className="symbol symbol-35px symbol-circle">
              <img src="/assets/media/avatars/300-2.jpg" alt="Pic" />
            </div>
            <div className="ms-3">
              <a
                href="#"
                className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
              >
                Brian Cox
              </a>
              <span className="text-muted fs-7 mb-1">{new Date(timestamp).toLocaleString()}</span>
            </div>
          </div>
          <div
            className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
            data-kt-element="message-text"
          >
            {text}
            ?
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
