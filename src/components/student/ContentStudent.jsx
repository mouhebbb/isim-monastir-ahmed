import React from "react";
import ProfileModule from "./profile/ProfileModule";
import Notestudent from "./Notestudent";
import MessageModule from "./message/messageModule";

const ContentStudent = ({ selectedItem, username }) => {
  const renderContent = () => {
    switch (selectedItem) {
      case "item1":
        return (
          <div>
            <ProfileModule username={username} />{" "}
          </div>
        );
      case "item2":
        return (
          <div>
            <Notestudent username={username} />
          </div>
        );

      case "mes":
        return (
          <div>
            <MessageModule username={username} />
          </div>
        );
      case "item4":
        return <div>cdc </div>;
      default:
        return <div>Select an item from the navbar </div>;
    }
  };

  return <div>{renderContent()}</div>;
};

export default ContentStudent;
