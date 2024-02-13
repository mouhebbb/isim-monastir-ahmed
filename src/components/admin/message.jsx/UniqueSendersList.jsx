import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const UniqueSendersList = () => {
  const [uniqueSenders, setUniqueSenders] = useState([]);
  const history = useHistory();

  const go = (username) => {
    history.push(`/AdminMessages/${username}`);
  };

  useEffect(() => {
    fetchUniqueSenders();
  }, []);

  const fetchUniqueSenders = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/messages/all"
      );
      const messages = response.data;

      const uniqueSenderIds = [
        ...new Set(messages.map((message) => message.senderId)),
      ];

      setUniqueSenders(uniqueSenderIds);
    } catch (error) {
      console.error("Error fetching unique senders:", error);
    }
  };

  return (
    <div>
      <h2>Unique Senders</h2>
      <ul>
        {uniqueSenders.map((senderId) => (
          <li key={senderId}>
            {senderId}{" "}
            <button className="btn primary" onClick={() => go(senderId)}>
              contact
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UniqueSendersList;
