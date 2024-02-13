import React, { useState } from "react";
import NavEnseignant from "./enseignant/NavEnseignant";
import ContentEnseignant from "./enseignant/ContentEnseignant";

const EnseignantDashboard = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleNavbarItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <div>
      <NavEnseignant onItemClick={handleNavbarItemClick} />
      <ContentEnseignant selectedItem={selectedItem} />
    </div>
  );
};

export default EnseignantDashboard;
