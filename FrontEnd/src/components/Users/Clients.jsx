import { useState, useEffect } from "react";
import axios from "axios";
import Chat from "../Chat/Chat";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import Navigation from "../Navigation";
import ProfileHeader from "../Chat/ProfileHeader";
const Clients = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [session, setSession] = useState([]);
  const [username, setUsername] = useState("");
  const [freelancerId, setFreelancerId] = useState("");
  const [clients, setClients] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [offer, setOffer] = useState(false);
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const socket = io.connect("http://localhost:3000");
  useEffect(() => {
    const storedJson = sessionStorage.getItem("user");
    const sessionData = JSON.parse(storedJson);
    console.log("sessionData:", sessionData);
    setSession(sessionData);

    if (sessionData && sessionData.length > 0) {
      const firstUser = sessionData[0];
      if (firstUser && firstUser.username) {
        setUsername(firstUser.username);
        setFreelancerId(firstUser._id);
        axios
          .get(`http://localhost:3000/client/${firstUser._id}`)
          .then((response) => {
            console.log(response.data);
            if (Array.isArray(response.data)) {
              // If response is an array, update clients state directly
              setClients(response.data);
            } else if (typeof response.data === "object") {
              // If response is an object, convert it to an array and update clients state
              setClients([response.data]);
            } else {
              console.error("Invalid data format returned from the server.");
            }
          })
          .catch((error) => {
            console.error("Error fetching clients:", error);
          });
        axios
          .get(`http://localhost:3000/getOffers/${firstUser._id}`)
          .then((response) => {
            if (response.data.length > 0) {
              const { title, description, price } = response.data[0];
              setTitle(title);
              setDescription(description);
              setPrice(price);
              if (clients[0].userType == "client") {
                setOffer(true);
              } else {
                setOffer(false);
              }
            }
          })
          .catch((error) => console.error(error));
      } else {
        console.log("Username does not exist in sessionData.");
      }
    } else {
      console.log("sessionData is empty or does not exist.");
    }
  }, []);
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const fetchRoomId = async (clientId, userId) => {
    try {
      const response = await axios.post("http://localhost:3000/getRoomId", {
        clientId: clientId,
        userId: userId,
      });
      setRoom(response.data.roomId);
      socket.emit("join_room", room);
      setShowChat(true);
      console.log("Room ID:", response.data.roomId);
    } catch (error) {
      console.error("Error:", error.response.data.error);
    }
  };

  const handleClientSelect = (client) => {
    const clientId = client._id;
    const freelancersId = freelancerId;
    fetchRoomId(clientId, freelancersId);
    setSelectedClient(client);
    setOffer(true);
  };

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="app-container container-xxl">
      <Navigation />

      <div className="row">
        <div className="col-lg-6 col-xl-3">
          {/*begin::Contacts*/}
          <div className="card card-flush" id="kt_contacts_list">
            {/*begin::Card header*/}
            <div className="card-header pt-7" id="kt_contacts_list_header">
              {/*begin::Form*/}
              <form
                className="d-flex align-items-center position-relative w-100 m-0"
                autoComplete="off"
              >
                {/*begin::Icon*/}
                {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                <span className="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y">
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
                  className="form-control form-control-solid ps-13"
                  name="search"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Search contacts"
                />
                {/*end::Input*/}
              </form>
              {/*end::Form*/}
            </div>
            {/*end::Card header*/}
            {/*begin::Card body*/}
            <div className="card-body pt-5" id="kt_contacts_list_body">
              {/*begin::List*/}
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
                {filteredClients.map((client, index) => (
                  <button
                    key={index}
                    className={`d-flex flex-stack py-4 list-group-item list-group-item-action ${
                      selectedClient === client ? "active" : ""
                    }`}
                    onClick={() => handleClientSelect(client)}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-40px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-4">
                        <p className="fs-6 fw-bold text-gray-900 text-hover-primary mb-2">
                          {client.name}
                        </p>
                        <div className="fw-semibold fs-7 text-muted">
                          smith@kpmg.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                  </button>
                ))}
                <div className="separator separator-dashed d-none" />
              </div>
              {/*end::List*/}
            </div>
            {/*end::Card body*/}
          </div>
          {/*end::Contacts*/}
        </div>

        <div className="col-lg-6 col-xl-3">
          {/*begin::Contacts*/}
          <div className="card card-flush" id="kt_contacts_list">
            {/*begin::Card header*/}
            <div className="card-header pt-7" id="kt_contacts_list_header">
              {/*begin::Form*/}

              {/*end::Form*/}
            </div>
            {/*end::Card header*/}
            {/*begin::Card body*/}
            <div className="card-body pt-5" id="kt_contacts_list_body">
              {/*begin::List*/}

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
                                src="assets/media/svg/brand-logos/plurk.svg"
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
                              In Progress
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
                        </div>
                      </a>
                    </div>
                  </div>
                )}
                <div className="separator separator-dashed d-none" />
              </div>
              {/*end::List*/}
            </div>
            {/*end::Card body*/}
          </div>
          {/*end::Contacts*/}
        </div>

        <div className="col-9">
          <div className="App">
            {!showChat ? (
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
                  width: "37vw",
                  marginTop: "85px",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "23vw",
                  marginRight: "12.4vw",
                }}
              >
                <p>Select a chat to start Messaging</p>
              </div>
            ) : (
              <Chat
                socket={socket}
                username={username}
                room={room}
                clients={clients}
              />
            )}
          </div>
        </div>
      </div>

      {/* <Link to={`/createOffer/${id}`} className='btn btn-success'>Create Offer</Link> */}
    </div>
  );
};

export default Clients;
