import React, { useState, useEffect } from "react";
import ProfileForm from "./ProfileForm";
import Profile from "./Profile";

const ProfileModule = ({ username }) => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/student/${username}`)
      .then((response) => response.json())
      .then((data) => setStudent(data))
      .catch((error) => console.error("Error fetching student:", error));
  }, [username]);

  const handleSave = (data) => {
    fetch("http://localhost:8080/api/student/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((savedStudent) => setStudent(savedStudent))
      .catch((error) => console.error("Error saving student:", error));
  };

  return (
    <div>
      {!student ? (
        <ProfileForm username={username} onSave={handleSave} />
      ) : (
        <Profile student={student} />
      )}
    </div>
  );
};

export default ProfileModule;
