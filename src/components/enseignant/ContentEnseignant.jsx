import React from "react";

const ContentEnseignant = ({ selectedItem }) => {
  // Render different content based on the selected item
  const renderContent = () => {
    switch (selectedItem) {
      case "item1":
        return <div>item1</div>;
      case "item2":
        return <div>item2</div>;

      case "item3":
        return <div>kk</div>;
      default:
        return <div>Select an item from the navbar</div>;
    }
  };

  return <div>{renderContent()}</div>;
};

export default ContentEnseignant;
