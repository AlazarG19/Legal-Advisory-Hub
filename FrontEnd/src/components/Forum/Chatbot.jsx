import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "../Navigation"

const CHATBOT_URL = 'http://localhost:8000/ask';
const DATABASE_URL = 'http://localhost:3000/api/threads/';

const ChatMessenger = () => {
  const [userId, setUserId] = useState("Fekede");
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [assistantMessage, setassistantMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load messages from the database when the component mounts
    loadMessages();

    // Save the userId in localStorage
    localStorage.setItem('userId', userId);
  }, [userId, assistantMessage]);

  const loadMessages = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/threads/all/${userId}`);
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };

  const sendMessage = async () => {
    if (inputValue.trim() === '') return;

    setIsLoading(true);

    try {
      const userMessage = { text: inputValue, isUserMessage: true, userId }
      setMessages((prevMessages) => [
        ...prevMessages,
        userMessage,
      ]);
      saveConversation(userMessage);
      setInputValue('');

      // Add the "assistant is typing" message
      const typingMessage = { text: 'Assistant is typing...', isUserMessage: false, userId };
      setMessages((prevMessages) => [
        ...prevMessages,
        typingMessage,
      ]);

      const response = await fetch(CHATBOT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query_text: inputValue }),
      });
      const apiResponse = await response.json();

      if (response.status == 404) {
        const assistantMessage2 = { text: "I apologize, but that topic is outside my expertise in legal matters. For issues beyond my capabilities, I recommend consulting a qualified professional. How else can I assist you today within my legal knowledge?", isUserMessage: false, userId }
        saveConversation(assistantMessage2);
        setassistantMessage(assistantMessage2)
      } else {
        const assistantMessage = { text: apiResponse.response, isUserMessage: false, userId }
        saveConversation(assistantMessage);
        setassistantMessage(assistantMessage)
      }



      // Replace the "assistant is typing" message with the actual assistant's response
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, prevMessages.length - 1),
        assistantMessage,
      ]);

    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveConversation = async (message) => {
    console.log(message)
    try {
      await fetch(DATABASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });
      console.log('Conversation saved to the database');
    } catch (error) {
      console.error('Error saving conversation:', error);
    }
  };

  return (
    <div>
      <Navigation />
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="chat-container d-flex flex-column align-items-start">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`d-flex align-items-center chat-message ${message.isUserMessage
                          ? 'user-message bg-primary text-white rounded-pill px-3 py-2 mb-2 align-self-end'
                          : 'assistant-message bg-light rounded-pill px-3 py-2 mb-2'
                        }`}
                    >
                      {!message.isUserMessage && (
                        <img
                          src="/assets/img/Floating Robot.jpg"
                          alt="Message Image"
                          className='p-1'
                          style={{ maxWidth: '3%' }}
                        />
                      )}
                      <p className="mb-0">{message.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-footer">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type your message..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        sendMessage();
                      }
                    }}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={sendMessage}
                      disabled={isLoading}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessenger;

