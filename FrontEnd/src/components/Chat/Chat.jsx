import { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import axios from "axios";
import "../../../public/assets/css/chat.css";
import ProfileHeader from "./ProfileHeader";

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [createdAt, setCreatedAt] = useState([]);
  const [dateInstance] = useState(new Date());
  console.log(room);
  const sendMessage = async () => {
    if (currentMessage.trim() !== "") {
      const messageData = {
        roomId: room,
        author: username,
        text: currentMessage,
      };
      try {
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

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/getMessage/${room}`
        );
        const { author, text, createdAt } = response.data;
        console.log(response.data);
        setAuthor(author);
        setText(text);
        setCreatedAt(createdAt);
        setMessageList(response.data);
        console.log("this is the message list", messageList);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    const handleReceiveMessage = (data) => {
      setMessageList((prevMessages) => [...prevMessages, data]);
    };
    fetchMessages();

    socket.on("receive_message", handleReceiveMessage);

    return () => {
      socket.off("receive_message", handleReceiveMessage);
    };
  }, [room, socket]);

  return (
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
      style={{ width: "75vw", marginTop: "85px" }}
    >
      {/*begin::Messenger*/}
      <div
        className="card w-100 rounded-0 border-0"
        id="kt_drawer_chat_messenger"
      >
        {/*begin::Card header*/}
        <ProfileHeader />
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
            style={{ height: 610 }}
          >
            {messageList.map((messageContent, index) =>
              username !== messageContent.author ? (
                <div className="d-flex justify-content-start mb-10" key={index}>
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-column align-items-start">
                    {/*begin::User*/}
                    <div className="d-flex align-items-center mb-2">
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-3">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                        >
                          Brian Cox
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
                        <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
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
        <div className="card-footer pt-4" id="kt_drawer_chat_messenger_footer">
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
              <button
                className="btn btn-sm btn-icon btn-active-light-primary me-1"
                type="button"
                data-bs-toggle="tooltip"
                aria-label="Coming soon"
                data-bs-original-title="Coming soon"
                data-kt-initialized={1}
              >
                <i className="bi bi-paperclip fs-3" />
              </button>
              <button
                className="btn btn-sm btn-icon btn-active-light-primary me-1"
                type="button"
                data-bs-toggle="tooltip"
                aria-label="Coming soon"
                data-bs-original-title="Coming soon"
                data-kt-initialized={1}
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
          {/*end::Toolbar*/}
        </div>
        {/*end::Card footer*/}
      </div>
      {/*end::Messenger*/}
    </div>
  );
}

export default Chat;
