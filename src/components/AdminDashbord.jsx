import React, { useState } from "react";
import NavAdmin from "./admin/NavAdmin";
import ContentAdmin from "./admin/ContentAdmin";

const AdminDashbord = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleNavbarItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <div>
      <NavAdmin onItemClick={handleNavbarItemClick} />
      <ContentAdmin selectedItem={selectedItem} />
    </div>
  );
};

export default AdminDashbord;
