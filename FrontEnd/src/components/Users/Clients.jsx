import  { useState, useEffect } from 'react';
import axios from 'axios';
import Chat from './Chat';
import {Link} from 'react-router-dom'
import io from "socket.io-client";
const Clients = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [session, setSession] = useState([]);
  const [username, setUsername] = useState("");
  const [freelancerId, setFreelancerId] = useState("");
  const [clients, setClients] = useState([]); // State for dynamic list of clients
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [offer, setOffer] = useState(false);
  const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
    const socket = io.connect("http://localhost:3000");
  useEffect(() => {
    
    const storedJson = sessionStorage.getItem('user');
    const sessionData = JSON.parse(storedJson);
    console.log("sessionData:", sessionData);
    setSession(sessionData);
  
    if (sessionData && sessionData.length > 0) {
      const firstUser = sessionData[0];
      if (firstUser && firstUser.username) {
        setUsername(firstUser.username);
        setFreelancerId(firstUser._id);
        axios.get(`http://localhost:3000/client/${firstUser._id}`)
          .then(response => {
            console.log(response.data);
            if (Array.isArray(response.data)) {
              // If response is an array, update clients state directly
              setClients(response.data);
            } else if (typeof response.data === 'object') {
              // If response is an object, convert it to an array and update clients state
              setClients([response.data]);
            } else {
              console.error("Invalid data format returned from the server.");
            }
          })
          .catch(error => {
            console.error("Error fetching clients:", error);
          });
          axios.get(`http://localhost:3000/getOffers/${firstUser._id}`)
            .then(response => {
                if (response.data.length > 0) {
                    const { title, description, price } = response.data[0];
                    setTitle(title);
                    setDescription(description);
                    setPrice(price);
                    setOffer(true);
                }
            })
            .catch(error => console.error(error));
      } else {
        console.log("Username does not exist in sessionData.");
      }
    } else {
      console.log("sessionData is empty or does not exist.");
    }
    
  }, []);
  const fetchRoomId = async (clientId, userId) => {
    try {
      const response = await axios.post('http://localhost:3000/getRoomId', {
        clientId: clientId,
        userId: userId
      });
      setRoom(response.data.roomId)
      socket.emit("join_room", room);
      setShowChat(true);
      console.log('Room ID:', response.data.roomId);
    } catch (error) {
      console.error('Error:', error.response.data.error);
    }
  };
  
  

  const handleClientSelect = (client) => {
    const clientId = client._id;
    const freelancersId = freelancerId;
    fetchRoomId(clientId, freelancersId)
    setSelectedClient(client);
    
  };

 
  const joinRoom = () => {
    if (username !== "" && room !== "") {
        socket.emit("join_room", room);
        setShowChat(true);
    }
    }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 bg-light">
          <h4 className="text-center mt-3">Clients</h4>
          <div className="list-group">
            {/* Dynamically generate client list */}
            {clients.map((client, index) => (
              <button
                key={index}
                className={`list-group-item list-group-item-action ${
                  selectedClient === client ? 'active' : ''
                }`}
                onClick={() => handleClientSelect(client)}
              >
                {client.name} {/* Assuming each client object has a 'name' property */}
              </button>
            ))}
          </div>
        </div>
        <div className="col-9">
        <div className="App">
                {!showChat ? (
                    <div className="joinChatContainer">
                        <h3>Join A Chat</h3>
                        <input
                            type="text"
                            placeholder="John..."
                            value={username}
                            onChange={(event) => {
                                setUsername(event.target.value);
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Room ID..."
                            value={room}
                            onChange={(event) => {
                                setRoom(event.target.value);
                            }}
                        />
                        <button onClick={joinRoom}>Join A Room</button>
                    </div>
                ) : (
                    <Chat socket={socket} username={username} room={room} />
                )}
            </div>
        </div>
      </div>
      {offer && (
                <div className="offer mt-3">
                    <div className="offer-content card mb-2" style={{ backgroundColor: '#f0f0f0' }}>
                        <div className="card-body">
                            <h3 className="card-title text-primary">Offer</h3>
                            <p className="card-text"><strong>Title:</strong> {title}</p>
                            <p className="card-text"><strong>Description:</strong> {description}</p>
                            <p className="card-text"><strong>Price:</strong> ${price}</p>
                            {/* <Link to={`/acceptOffer/${id}`} className='btn btn-success'>Accept Offer</Link> */}
                        </div>
                    </div>
                </div>
            )}

            {/* <Link to={`/createOffer/${id}`} className='btn btn-success'>Create Offer</Link> */}
    </div>
  );
};

export default Clients;
