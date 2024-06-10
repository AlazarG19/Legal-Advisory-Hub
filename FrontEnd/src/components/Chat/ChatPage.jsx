import { useState, useEffect } from "react";
import "../../../public/assets/css/chat.css";
import axios from "axios";
import Chat from "./Chat";
import { useParams, Link, useNavigate } from "react-router-dom";
import io from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

const socket = io.connect("http://localhost:3000");

const ChatPage = () => {
  const uniqueRoomId = uuidv4();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [offer, setOffer] = useState(false);
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [session, setSession] = useState([]);
  const [freelancersName, setFreelancersName] = useState("");
  const [userid, setUserId] = useState(id);
  const [participants, setParticipants] = useState([]);
  const [roomId, setRoomId] = useState("");
  const [roomCreated, setRoomCreated] = useState(false);
  const [clientId, setClientId] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/getFreelancer/${id}`)
      .then((response) => {
        const { name, catagory, email } = response.data;
        setFreelancersName(name);
      })
      .catch((error) => console.error(error));
  });
  useEffect(() => {
    const storedJson = sessionStorage.getItem("user");
    const sessionData = JSON.parse(storedJson);
    console.log("sessionData:", sessionData);
    setSession(sessionData);
    if (sessionData && sessionData.length > 0) {
      const firstUser = sessionData[0];
      if (firstUser && firstUser.username) {
        console.log("Setting username:", firstUser.username);
        setUsername(firstUser.username);
        setClientId(firstUser._id);
      } else {
        console.log("Username does not exist in sessionData.");
      }
    } else {
      console.log("sessionData is empty or does not exist.");
    }

    setRoom(uniqueRoomId);

    axios
      .get(`http://localhost:3000/getOffers/${id}`)
      .then((response) => {
        if (response.data.length > 0) {
          const { title, description, price, status } = response.data[0];
          setTitle(title);
          setDescription(description);
          setPrice(price);
          setStatus(status);
          setOffer(true);
        }
      })
      .catch((error) => console.error(error));
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/getRoom/${id}`)
      .then((response) => {
        console.log("useEffecctroom", response.data);
        if (response.data.length > 0) {
          const { participants, roomId, clientId } = response.data[0];
          setParticipants(participants);
          setRoomId(roomId);
          setClientId(clientId);
          console.log(roomId);

          if (participants.includes(username)) {
            setRoom(roomId);
            socket.emit("join_room", roomId);
            setShowChat(true);
            console.log("Already in the room");
          } else {
            console.log("User not in the room");
            if (!roomCreated) {
              if (room != "") {
                createRoom();
              }
            }
          }
        } else {
          console.log("No room found");
          if (!roomCreated) {
            if (room != "") {
              createRoom();
            }
          }
        }
      })
      .catch((error) => console.error(error));
  }, [id, username, roomCreated]);

  const createRoom = async () => {
    try {
      const data = {
        participants: [username, freelancersName],
        roomId: room,
        userId: userid,
        clientId: clientId,
      };
      console.log("this is the data", data);

      const response = await fetch("http://localhost:3000/createRoom", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("HTTP error, status = " + response.status);
      }

      setShowChat(true);
      setRoomCreated(true);
      console.log("Room created successfully");

      socket.emit("join_room", room);
    } catch (error) {
      console.error("Error creating room:", error);
    }
  };

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="chat-container">
      <div className="App">
        {!showChat ? (
          <div
            className="joinChatContainer"
            style={{ position: "absolute", width: "100vw" }}
          >
            <div
              className="d-flex justify-content-center"
              style={{
                backgroundColor: "#0000002b",
                height: "100vh",
                paddingTop: "25%",
                overflow: "hidden",
              }}
            >
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
            <input
              type="hidden"
              placeholder="John..."
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <input
              type="hidden"
              placeholder="Room ID..."
              value={room}
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
            {/* <button onClick={joinRoom}>Join A Room</button> */}
          </div>
        ) : (
          <>
            <div className="d-flex flex-column flex-lg-row">
              {/*begin::Sidebar*/}
              <div className="flex-column flex-lg-row-auto w-100 w-lg-300px w-xl-400px mb-10 mb-lg-0">
                {/*begin::Contacts*/}
                <div className="card card-flush">
                  {/*begin::Card header*/}
                  <div
                    className="card-header pt-7"
                    id="kt_chat_contacts_header"
                  >
                    {/*begin::Form*/}
                    <form
                      className="w-100 position-relative"
                      autoComplete="off"
                    >
                      {/*begin::Icon*/}
                      {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                      <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.5"
                            x="17.0365"
                            y="15.1223"
                            width="8.15546"
                            height={2}
                            rx={1}
                            transform="rotate(45 17.0365 15.1223)"
                            fill="currentColor"
                          />
                          <path
                            d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                      {/*end::Icon*/}
                      {/*begin::Input*/}
                      <input
                        type="text"
                        className="form-control form-control-solid px-15"
                        name="search"
                        defaultValue=""
                        placeholder="Search by username or email..."
                      />
                      {/*end::Input*/}
                    </form>
                    {/*end::Form*/}
                  </div>
                  {/*end::Card header*/}
                  {/*begin::Card body*/}
                  {offer && (
                <div className="offer mt-3">
                  <div className="col-md-12 col-xl-12">
                    {/*begin::Card*/}
                    <a
                      href="../../demo1/dist/apps/projects/project.html"
                      className="card border-hover-primary"
                    >
                      {/*begin::Card header*/}
                      <div className="card-header border-0 pt-9">
                        {/*begin::Card Title*/}
                        <div className="card-title m-0">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-50px w-50px bg-light">
                            <img
                              src="/assets/media/svg/brand-logos/plurk.svg"
                              alt="image"
                              className="p-3"
                            />
                          </div>
                          {/*end::Avatar*/}
                        </div>
                        {/*end::Car Title*/}
                        {/*begin::Card toolbar*/}
                        <div className="card-toolbar">
                          <span className="badge badge-light-primary fw-bold me-auto px-4 py-3">
                            {status}
                          </span>
                        </div>
                        {/*end::Card toolbar*/}
                      </div>
                      {/*end:: Card header*/}
                      {/*begin:: Card body*/}
                      <div className="card-body p-9">
                        {/*begin::Name*/}
                        <div className="fs-3 fw-bold text-dark">{title}</div>
                        {/*end::Name*/}
                        {/*begin::Description*/}
                        <p className="text-gray-400 fw-semibold fs-5 mt-1 mb-7">
                          {description}
                        </p>
                        {/*end::Description*/}
                        {/*begin::Info*/}
                        <div className="d-flex flex-wrap mb-5">
                          {/*begin::Due*/}
                          <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3">
                            <div className="fs-6 text-gray-800 fw-bold">
                              Nov 10, 2023
                            </div>
                            <div className="fw-semibold text-gray-400">
                              Due Date
                            </div>
                          </div>
                          <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                            <div className="fs-6 text-gray-800 fw-bold">
                              ${price}
                            </div>
                            <div className="fw-semibold text-gray-400">
                              Price
                            </div>
                          </div>
                        </div>
                        <Link
                          to={`/acceptOffer/${id}`}
                          className="btn container btn-primary mt-5"
                          target="_blank"
                        >
                          Accept Offer
                        </Link>
                      </div>
                    </a>
                  </div>
                </div>
              )}
                  {/*end::Card body*/}
                </div>
                {/*end::Contacts*/}
              </div>
              {/*end::Sidebar*/}
              {/*begin::Content*/}
              <div className="flex-lg-row-fluid ms-lg-7 ms-xl-10">
                {/*begin::Messenger*/}

                <Chat socket={socket} username={username} room={room} />
                {/*end::Messenger*/}
              </div>
              {/*end::Content*/}
            </div>

            <div
              className="scroll-y me-n5 pe-5 h-300px h-xl-auto"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_header, #kt_toolbar, #kt_footer, #kt_contacts_list_header"
              data-kt-scroll-wrappers="#kt_content, #kt_contacts_list_body"
              data-kt-scroll-stretch="#kt_contacts_list, #kt_contacts_main"
              data-kt-scroll-offset="5px"
              style={{ maxHeight: 561 }}
            >
              <div className="separator separator-dashed d-none" />
            </div>
          </>
        )}
      </div>

      {/* <Link to={`/createOffer/${id}`} className='btn btn-success'>Create Offer</Link> */}
    </div>
  );
};

export default ChatPage;
