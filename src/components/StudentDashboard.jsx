import NavStudent from "./student/NavStudent";
import ContentStudent from "./student/ContentStudent";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const StudentDashboard = () => {
  const { username } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleNavbarItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <div>
      <NavStudent onItemClick={handleNavbarItemClick} />
      <ContentStudent selectedItem={selectedItem} username={username} />
    </div>
  );
};

export default StudentDashboard;
