import { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../../public/assets/css/chat.css";
import ProfileHeader from "./ProfileHeader";

function Chat({ socket, username, room, clients }) {
  const [offers, setOffers] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [user, setUser] = useState([]);
  const [userName, setUserName] = useState("");
  const [offerText, setOfferText] = useState("Create Offer");
  const [text, setText] = useState("");
  const [id, setId] = useState("");
  const [userType, setUserType] = useState("");
  const [client, setClient] = useState([]);
  const [createdAt, setCreatedAt] = useState([]);
  const [linkAddress, setLinkAddress] = useState(`/createOffer/${id}`);
  const [file, setFile] = useState("");
  const [dateInstance] = useState(new Date());
  const [loading, setLoading] = useState(true);
  let setup = async () => {
    const userString = sessionStorage.getItem("user");
    const user = JSON.parse(userString);
    const id = user[0]._id;
    await axios
      .get(`http://localhost:3000/getOffers/${id}`)
      .then((response) => {
        setOffers(response.data[0].status);
        console.log("response", response);
        console.log("response2", response.data[0].status);
        console.log("response2 id", id);
        setLoading(false);
        if (
          response.data[0].status == "Complete" ||
          response.data[0].status == "Cancel"
        ) {
          setOfferText("Create Offer");
          setLinkAddress(`/createOffer`);
        } else if (response.data[0].status == "InProgress") {
          setOfferText("Complete Offer");
          setLinkAddress(`/completeOffer`);
        } else if (response.data[0].status == "waiting") {
          setOfferText("Cancel Offer");
          setLinkAddress(`/cancelOffer`);
        } else {
          setOfferText("Create Offer");
          setLinkAddress(`/createOffer`);
        }
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    setup();
  }, [offers]);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const sendMessage = async () => {
    console.log("send msg room", room);
    if (currentMessage.trim() !== "") {
      const messageData = {
        roomId: room,
        author: username,
        text: currentMessage,
      };
      try {
        console.log("send message", JSON.stringify(messageData));
        const response = await fetch("http://localhost:3000/createMessage", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(messageData),
        });
        console.log("sucess");
        if (!response.ok) {
          throw new Error("HTTP error, status = " + response.status);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }

      // await socket.emit("send_message", messageData);
      // setMessageList((list) => [...list, messageData]);
      // setCurrentMessage("");
    }
  };

  const fetchMessages = async () => {
    console.log("room", room);
    setup();
    try {
      const response = await axios.get(
        `http://localhost:3000/getMessage/${room}`
      );
      console.log("response", response.data);
      setMessageList(response.data);
      // console.log("this is the message list", response.data);

      const userString = sessionStorage.getItem("user");
      if (userString) {
        const user = JSON.parse(userString);
        setUser(user);
        if (user.length > 0) {
          setId(user[0]._id);
          setUserType(user[0].userType);
          setUserName(clients[0].username);
        }
      }
      // Set the clients received as props
      setClient(clients);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleReceiveMessage = (data) => {
    setMessageList((prevMessages) => [...prevMessages, data]);
  };
  useEffect(() => {
    setup();
    // Initial fetch
    fetchMessages();

    // Fetch messages every second
    const intervalId = setInterval(fetchMessages, 1000);

    // Socket event handling
    socket.on("receive_message", handleReceiveMessage);

    // Clean up
    return () => {
      clearInterval(intervalId);
      socket.off("receive_message", handleReceiveMessage);
    };
  }, [room, socket, clients]);

  return (
    <>
      <div
        id="kt_drawer_chat"
        className="bg-body drawer drawer-end drawer-on"
        data-kt-drawer="true"
        data-kt-drawer-name="chat"
        data-kt-drawer-activate="true"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="{default:'300px', 'md': '500px'}"
        data-kt-drawer-direction="end"
        data-kt-drawer-toggle="#kt_drawer_chat_toggle"
        data-kt-drawer-close="#kt_drawer_chat_close"
        style={{
          width: userType === "freelancer" ? "37vw" : "50vw",
          marginTop: "85px",
          marginRight: userType === "freelancer" ? "12.5vw" : undefined,
        }}
      >
        loading {loading.toString()}
        {/*begin::Messenger*/}
        <div
          className="card w-100 rounded-0 border-0"
          id="kt_drawer_chat_messenger"
        >
          {/*begin::Card header*/}
          <ProfileHeader name={userName} />
          {/*begin::Card body*/}
          <div className="card-body" id="kt_drawer_chat_messenger_body">
            {/*begin::Messages*/}
            <div
              className="scroll-y me-n5 pe-5"
              data-kt-element="messages"
              data-kt-scroll="true"
              data-kt-scroll-activate="true"
              data-kt-scroll-height="auto"
              data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer"
              data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body"
              data-kt-scroll-offset="0px"
              style={{ height: "58.8vh" }}
            >
              {messageList.map((messageContent, index) =>
                username !== messageContent.author ? (
                  <div
                    className="d-flex justify-content-start mb-10"
                    key={index}
                  >
                    {/*begin::Wrapper*/}
                    <div className="d-flex flex-column align-items-start">
                      {/*begin::User*/}
                      <div className="d-flex align-items-center mb-2">
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img
                            alt="Pic"
                            src="/assets/media/avatars/300-25.jpg"
                          />
                        </div>
                        {/*end::Avatar*/}
                        {/*begin::Details*/}
                        <div className="ms-3">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                          >
                            {userName}
                          </a>
                          <span className="text-muted fs-7 mb-1">2 mins</span>
                        </div>
                        {/*end::Details*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::Text*/}
                      <div
                        className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                        data-kt-element="message-text"
                      >
                        {messageContent.text}
                      </div>
                      {/*end::Text*/}
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                ) : (
                  <div className="d-flex justify-content-end mb-10" key={index}>
                    {/*begin::Wrapper*/}
                    <div className="d-flex flex-column align-items-end">
                      {/*begin::User*/}
                      <div className="d-flex align-items-center mb-2">
                        {/*begin::Details*/}
                        <div className="me-3">
                          <span className="text-muted fs-7 mb-1">5 mins</span>
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                          >
                            You
                          </a>
                        </div>
                        {/*end::Details*/}
                        {/*begin::Avatar*/}
                        <div className="symbol symbol-35px symbol-circle">
                          <img
                            alt="Pic"
                            src="/assets/media/avatars/300-1.jpg"
                          />
                        </div>
                        {/*end::Avatar*/}
                      </div>
                      {/*end::User*/}
                      {/*begin::Text*/}
                      <div
                        className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end"
                        data-kt-element="message-text"
                      >
                        {messageContent.text}
                      </div>
                      {/*end::Text*/}
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                )
              )}
            </div>
            {/*end::Messages*/}
          </div>
          {/*end::Card body*/}
          {/*begin::Card footer*/}
          <div
            className="card-footer pt-4"
            id="kt_drawer_chat_messenger_footer"
          >
            {/*begin::Input*/}
            <textarea
              className="form-control form-control-flush mb-3"
              rows={1}
              data-kt-element="input"
              placeholder="Type a message"
              value={currentMessage}
              onChange={(event) => setCurrentMessage(event.target.value)}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  sendMessage();
                }
              }}
            />
            {/*end::Input*/}
            {/*begin:Toolbar*/}
            <div className="d-flex flex-stack">
              {/*begin::Actions*/}
              <div className="d-flex align-items-center me-2">
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <button
                  className="btn btn-sm btn-icon btn-active-light-primary me-1"
                  type="button"
                  data-bs-toggle="tooltip"
                  aria-label="Coming soon"
                  data-bs-original-title="Coming soon"
                  data-kt-initialized={1}
                  onClick={() => document.getElementById("fileInput").click()}
                >
                  <i className="bi bi-upload fs-3" />
                </button>
              </div>
              {/*end::Actions*/}
              {/*begin::Send*/}
              <button
                className="btn btn-primary"
                type="button"
                data-kt-element="send"
                onClick={sendMessage}
              >
                Send
              </button>
              {/*end::Send*/}
            </div>
            <div className="d-flex flex-stack">
              {/*begin::Send*/}
              {userType === "freelancer" ? (
                <>
                  {offers === "InProgress" ? (
                    <Link
                      to={`/completeOffer/${id}`}
                      className="btn btn-primary container-fluid mt-5"
                    >
                      Complete Offer
                    </Link>
                  ) : offers === "Complete" || offers === "Cancel" ? (
                    <Link
                      to={`/createOffer/${id}`}
                      className="btn btn-primary container-fluid mt-5"
                    >
                      Create Offer
                    </Link>
                  ) : offers === "Waiting" ? (
                    <Link
                      to={`/cancelOffer/${id}`}
                      className="btn btn-primary container-fluid mt-5"
                    >
                      Cancel Offer
                    </Link>
                  ) : (
                    <Link
                      to={`/createOffer/${id}`}
                      className="btn btn-primary container-fluid mt-5"
                    >
                      Create Offer
                    </Link>
                  )}
                </>
              ) : null}
              {/* <Link to={`/createOffer/${id}`} className="btn btn-primary container-fluid mt-5" >Create Offer</Link> */}
              {/*end::Send*/}
            </div>
            {/*end::Toolbar*/}
          </div>
          {/*end::Card footer*/}
        </div>
        {/*end::Messenger*/}
      </div>
      {/* <!--begin::Content--> */}
      <div className="flex-lg-row-fluid ms-lg-7 ms-xl-10">
        {/* <!--begin::Messenger--> */}
        <div className="card" id="kt_chat_messenger">
          {/* <!--begin::Card header--> */}
          <div className="card-header" id="kt_chat_messenger_header">
            {/* <!--begin::Title--> */}
            <div className="card-title">
              {/* <!--begin::User--> */}
              <div className="d-flex justify-content-center flex-column me-3">
                <a
                  href="#"
                  className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1"
                >
                  {userName}
                </a>
                {/* <!--begin::Info--> */}
                <div className="mb-0 lh-1">
                  <span className="badge badge-success badge-circle w-10px h-10px me-1"></span>
                  <span className="fs-7 fw-semibold text-muted">Active</span>
                </div>
                {/* <!--end::Info--> */}
              </div>
              {/* <!--end::User--> */}
            </div>
            {/* <!--end::Title--> */}
          </div>
          {/* <!--end::Card header--> */}
          {/* <!--begin::Card body--> */}
          <div className="card-body" id="kt_chat_messenger_body">
            {/* <!--begin::Messages--> */}
            <div
              className="scroll-y me-n5 pe-5 h-300px h-lg-auto"
              data-kt-element="messages"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_header, #kt_app_header, #kt_app_toolbar, #kt_toolbar, #kt_footer, #kt_app_footer, #kt_chat_messenger_header, #kt_chat_messenger_footer"
              data-kt-scroll-wrappers="#kt_content, #kt_app_content, #kt_chat_messenger_body"
              data-kt-scroll-offset="5px"
            >
              {/* start of the messages */}
              {messageList.map((messageContent, index) =>
                username !== messageContent.author ? (
                  <div
                    key={index}
                    className="d-flex justify-content-start mb-10"
                  >
                    {/* <!--begin::Wrapper--> */}
                    <div className="d-flex flex-column align-items-start">
                      {/* <!--begin::User--> */}
                      <div className="d-flex align-items-center mb-2">
                        {/* <!--begin::Avatar--> */}
                        <div className="symbol symbol-35px symbol-circle">
                          <img
                            alt="Pic"
                            src="assets/media/avatars/300-25.jpg"
                          />
                        </div>
                        {/* <!--end::Avatar--> */}
                        {/* <!--begin::Details--> */}
                        <div className="ms-3">
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                          >
                            {userName}
                          </a>
                          <span className="text-muted fs-7 mb-1">2 mins</span>
                        </div>
                        {/* <!--end::Details--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Text--> */}
                      <div
                        className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                        data-kt-element="message-text"
                      >
                        {messageContent.text}
                      </div>
                      {/* <!--end::Text--> */}
                    </div>
                    {/* <!--end::Wrapper--> */}
                  </div>
                ) : (
                  <div className="d-flex justify-content-end mb-10" key={index}>
                    {/* <!--begin::Wrapper--> */}
                    <div className="d-flex flex-column align-items-end">
                      {/* <!--begin::User--> */}
                      <div className="d-flex align-items-center mb-2">
                        {/* <!--begin::Details--> */}
                        <div className="me-3">
                          <span className="text-muted fs-7 mb-1">5 mins</span>
                          <a
                            href="#"
                            className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                          >
                            You
                          </a>
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Avatar--> */}
                        <div className="symbol symbol-35px symbol-circle">
                          <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                        </div>
                        {/* <!--end::Avatar--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Text--> */}
                      <div
                        className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end"
                        data-kt-element="message-text"
                      >
                        {messageContent.text}
                      </div>
                      {/* <!--end::Text--> */}
                    </div>
                    {/* <!--end::Wrapper--> */}
                  </div>
                )
              )}

              {/* end of the messages */}
            </div>
            {/* <!--end::Messages--> */}
          </div>
          {/* <!--end::Card body--> */}
          {/* <!--begin::Card footer--> */}
          <div className="card-footer pt-4" id="kt_chat_messenger_footer">
            {/* <!--begin::Input--> */}
            <textarea
              className="form-control form-control-flush mb-3"
              rows={1}
              data-kt-element="input"
              placeholder="Type a message"
              value={currentMessage}
              onChange={(event) => setCurrentMessage(event.target.value)}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  sendMessage();
                }
              }}
            ></textarea>
            {/* <!--end::Input--> */}
            {/* <!--begin:Toolbar--> */}
            <div className="d-flex flex-stack">
              {/* <!--begin::Actions--> */}
              {/* <!--begin::Send--> */}
              <button
                className="btn btn-primary"
                type="button"
                data-kt-element="send"
                onClick={sendMessage}
              >
                Send
              </button>
              {/* <!--end::Send--> */}
            </div>
            {/* <!--end::Toolbar--> */}
          </div>
          {/* <!--end::Card footer--> */}
          <div className="d-flex flex-stack">
            {/*begin::Send*/}
            {userType === "freelancer" ? (
              <>
                {offers === "InProgress" ? (
                  <Link
                    to={`/completeOffer/${id}`}
                    className="btn btn-primary container-fluid mt-5"
                  >
                    Complete Offer
                  </Link>
                ) : offers === "Complete" || offers === "Cancel" ? (
                  <Link
                    to={`/createOffer/${id}`}
                    className="btn btn-primary container-fluid mt-5"
                  >
                    Create Offer
                  </Link>
                ) : offers === "Waiting" ? (
                  <Link
                    to={`/cancelOffer/${id}`}
                    className="btn btn-primary container-fluid mt-5"
                  >
                    Cancel Offer
                  </Link>
                ) : (
                  <Link
                    to={`/createOffer/${id}`}
                    className="btn btn-primary container-fluid mt-5"
                  >
                    Create Offer
                  </Link>
                )}
              </>
            ) : null}
          </div>
        </div>
        {/* <!--end::Messenger--> */}
      </div>
      {/* <!--end::Content--> */}
    </>
  );
}

export default Chat;