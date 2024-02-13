import React, { useState, useEffect } from "react";
import axios from "axios";

const MessageModule = ({ username }) => {
  const [messages, setMessages] = useState([]);
  const [messagess, setMessagess] = useState("");

  const sendMessage = async () => {
    try {
      await axios.post("http://localhost:8080/api/messages/save", {
        senderId: username,
        receiverId: "admin",
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
    <div>
      <div>
        <h2>Messages</h2>
        <ul>
          {messages &&
            messages
              .sort((a, b) => a.id - b.id) // Sort messages by id
              .map((message) => (
                <li
                  key={message.id}
                  style={{
                    textAlign: message.senderId === username ? "left" : "right",
                    color: message.senderId === username ? "red" : "blue",
                  }}
                >
                  {message.message}
                </li>
              ))}
        </ul>
      </div>

      <div>
        <form onSubmit={sendMessage}>
          <input
            type="text"
            value={messagess}
            onChange={(e) => setMessagess(e.target.value)}
          />
          <button type="submit">Send</button>{" "}
        </form>
      </div>
    </div>
  );
};

export default MessageModule;
