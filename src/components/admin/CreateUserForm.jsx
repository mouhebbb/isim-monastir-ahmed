import React, { useState } from "react";
import axios from "axios";

const CreateUserForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");

  const generatePassword = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let generatedPassword = "";
    for (let i = 0; i < 8; i++) {
      generatedPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(generatedPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/user/save", {
        username,
        password,
        role,
        email,
      });
      const bodymail = `Username: ${username}, Password: ${password}`;
      await axios.get(`http://localhost:8080/send-email/${email}/${bodymail}`);

      setUsername("");
      setPassword("");
      setRole("student");
      setEmail("");

      alert("User created successfully and email sent!");
    } catch (error) {
      console.error("Error creating user or sending email:", error);
      alert("Error creating user or sending email. Please try again.");
    }
  };

  return (
    <div
      className="container mt-5"
      style={{
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "300px", margin: "auto" }}
      >
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              borderRadius: "3px",
              border: "1px solid #ccc",
              padding: "8px",
              width: "100%",
              marginTop: "5px",
            }}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              borderRadius: "3px",
              border: "1px solid #ccc",
              padding: "8px",
              width: "100%",
              marginTop: "5px",
            }}
          />
          <button type="button" onClick={generatePassword}>
            Generate Password
          </button>
        </label>
        <br />
        <label>
          Role:
          <label>
            <input
              type="radio"
              value="student"
              checked={role === "student"}
              onChange={() => setRole("student")}
            />
            Student
          </label>
          <label>
            <input
              type="radio"
              value="teacher"
              checked={role === "teacher"}
              onChange={() => setRole("teacher")}
            />
            Teacher
          </label>
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              borderRadius: "3px",
              border: "1px solid #ccc",
              padding: "8px",
              width: "100%",
              marginTop: "5px",
            }}
          />
        </label>
        <br />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateUserForm;
