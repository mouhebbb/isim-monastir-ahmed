import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [messagess, setMessagess] = useState("");
  const { username } = useParams();

  const sendMessage = async (event) => {
    event.preventDefault(); // Prevent page refresh on form submission

    try {
      await axios.post("http://localhost:8080/api/messages/save", {
        senderId: "admin",
        receiverId: username,
        message: messagess,
      });
      setMessagess("");
      fetchMessages();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/messages/bySenderId/${username}`
      );
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div style={{ alignContent: "center" }}>
      <div
        class="messages"
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          maxHeight: "300px",
          overflowY: "auto",
          padding: "10px",
          width: "300px",
        }}
      >
        <h2>Messages</h2>
        <ul>
          {messages &&
            messages
              .sort((a, b) => a.id - b.id)
              .map((message) => (
                <li
                  key={message.id}
                  style={{
                    maxWidth: "70%",
                    padding: "8px",
                    marginBottom: "8px",
                    borderRadius: "8px",
                    backgroundColor:
                      message.senderId === username ? "#dcf8c6" : "#f1f0f0",
                    alignSelf:
                      message.senderId === username ? "flex-end" : "flex-start",
                    textAlign: message.senderId === username ? "right" : "left",
                    color: message.senderId === username ? "blue" : "red",
                  }}
                >
                  {message.message}
                </li>
              ))}
        </ul>
      </div>

      <div>
        <form onSubmit={sendMessage} class="input-container">
          <input
            type="text"
            value={messagess}
            onChange={(e) => setMessagess(e.target.value)}
            style={{
              width: "300px",
              padding: "8px",
              borderRadius: "20px",
              border: "1px solid #ccc",
            }}
            placeholder="Type a message..."
          />
          <button
            type="submit"
            style={{
              width: "50px",
              padding: "8px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: "#4caf50",
              color: "white",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminMessages;
