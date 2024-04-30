import  { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import axios from 'axios'
import '../../public/assets/css/chat.css'

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [createdAt, setCreatedAt] = useState([]);
  const [dateInstance] = useState(new Date());
  console.log(room)
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
          body: JSON.stringify(messageData)
        });
        console.log("sucess")
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
        const response = await axios.get(`http://localhost:3000/getMessage/${room}`);
        const { author, text, createdAt } = response.data;
        console.log(response.data);
        setAuthor(author);
        setText(text);
        setCreatedAt(createdAt);
        setMessageList(response.data)
        console.log("this is the message list", messageList)
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
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent, index) => (
            <div
            key={index}
            className="message"
            id={username === messageContent.author ? "you" : "other"}
          >
            <div>
              <div className="message-content">
                <p>{messageContent.text}</p>
              </div>
              <div className="message-meta">
                <p id="time">{messageContent.time}</p>
                <p id="author">{messageContent.author}</p>
              </div>
            </div>
          </div>
          ))}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey..."
          onChange={(event) => setCurrentMessage(event.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              sendMessage();
            }
          }}
        />
        <button type="button" onClick={sendMessage}>
          &#9658;
        </button>
      </div>
    </div>
  );
}

export default Chat;