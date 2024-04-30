import { useState, useEffect } from 'react';
import '../../../public/assets/css/chat.css'; 
import axios from 'axios';
import Chat from './Chat';
import { useParams, Link, useNavigate } from 'react-router-dom';
import io from "socket.io-client";
import { v4 as uuidv4 } from 'uuid';

const socket = io.connect("http://localhost:3000");

const ChatPage = () => {
    const uniqueRoomId = uuidv4();
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [offer, setOffer] = useState(false); // State to store the offer data
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
    const [session, setSession] = useState([])
    const [freelancersName, setFreelancersName] = useState("")
    const [userid, setUserId] = useState(id);
    const [participants, setParticipants] = useState([]);
    const [roomId, setRoomId] = useState("");
    const [roomCreated, setRoomCreated] = useState(false); 
    const [clientId, setClientId] = useState(false); 
    useEffect(()=>{
      axios.get(`http://localhost:3000/getFreelancer/${id}`)
            .then(response => {
                const { name, catagory, email } = response.data;
                setFreelancersName(name);
            })
            .catch(error => console.error(error));
    })
    useEffect(() => {
        const storedJson = sessionStorage.getItem('user');
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
        setRoom(uniqueRoomId)

        axios.get(`http://localhost:3000/getOffers/${id}`)
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
    }, [id]);

    useEffect(() => {
        axios.get(`http://localhost:3000/getRoom/${id}`)
            .then(response => {
                if (response.data.length > 0) {
                    const { participants, roomId, clientId } = response.data[0];
                    setParticipants(participants);
                    setRoomId(roomId);
                    setClientId(clientId)
                    console.log(roomId);

                    if (participants.includes(username)) {
                        setRoom(roomId);
                        socket.emit("join_room", roomId);
                        setShowChat(true);
                        console.log("Already in the room");

                    } else {
                        console.log("User not in the room");
                        if (!roomCreated) {
                          if(room != ""){
                                createRoom();
                            
                          }
                        }
                    }

                } else {
                    console.log("No room found");
                    if (!roomCreated) {
                      if(room != ""){
                            createRoom();
                        
                      }
                    }
                }
            })
            .catch(error => console.error(error));
    }, [id, username, roomCreated]);

    const createRoom = async () => {
        try {

            const data = {
                participants: [username, freelancersName],
                roomId: room,
                userId: userid,
                clientId: clientId,

            };
            console.log("this is the data", data)

            const response = await fetch("http://localhost:3000/createRoom", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(data)
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
    }

    return (
        <div className="chat-container">
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

            {offer && (
                <div className="offer mt-3">
                    <div className="offer-content card mb-2" style={{ backgroundColor: '#f0f0f0' }}>
                        <div className="card-body">
                            <h3 className="card-title text-primary">Offer</h3>
                            <p className="card-text"><strong>Title:</strong> {title}</p>
                            <p className="card-text"><strong>Description:</strong> {description}</p>
                            <p className="card-text"><strong>Price:</strong> ${price}</p>
                            <Link to={`/acceptOffer/${id}`} className='btn btn-success'>Accept Offer</Link>
                        </div>
                    </div>
                </div>
            )}

            <Link to={`/createOffer/${id}`} className='btn btn-success'>Create Offer</Link>
        </div>
    );

}

export default ChatPage;
