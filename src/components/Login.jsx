import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:8080/api/auth/login/${username}/${password}`
      );

      const { message, role } = response.data;

      console.log(message);

      if (role === "student") {
        history.push(`/StudentDashboard/${username}`);
        setLoggedIn(true);
      } else if (role === "enseignant") {
        history.push("/EnseignantDashboard");
        setLoggedIn(true);
      } else if (role === "admin") {
        history.push("/AdminDashboard");
        setLoggedIn(true);
      }
    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials.");
    }
  };
  return (
    <div>
      <div
        className="container mt-5"
        style={{
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        {loggedIn ? (
          <div>
            <p>Welcome to the student or teacher space!</p>
          </div>
        ) : (
          <form
            onSubmit={handleLogin}
            style={{ maxWidth: "300px", margin: "auto" }}
          >
            <div className="mb-3">
              <label
                htmlFor="username"
                className="form-label"
                style={{ fontWeight: "bold" }}
              >
                Username:
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  borderRadius: "3px",
                  border: "1px solid #ccc",
                  padding: "8px",
                  width: "100%",
                  marginTop: "5px",
                }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="password"
                className="form-label"
                style={{ fontWeight: "bold" }}
              >
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  borderRadius: "3px",
                  border: "1px solid #ccc",
                  padding: "8px",
                  width: "100%",
                  marginTop: "5px",
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "3px",
                backgroundColor: "#007bff",
                border: "none",
              }}
            >
              Login
            </button>
            {errorMessage && (
              <p className="mt-3" style={{ color: "red" }}>
                {errorMessage}
              </p>
            )}
            <br />
            <br />
            <a
              href="http://localhost:3000/ForgetPassword"
              style={{ textDecoration: "underline", textAlign: "right" }}
            >
              forget password
            </a>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
