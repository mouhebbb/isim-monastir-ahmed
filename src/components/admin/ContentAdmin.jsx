import React from "react";
import ScheduleForm from "./schedule/ScheduleForm";
import ScheduleList from "./schedule/ScheduleList";
import NoteForm from "./Note/NoteForm";
import NoteList from "./Note/NoteList";
import CreateUserForm from "./CreateUserForm";
import UserList from "./UserList";
// import Sidebar from "./Sidebar";

const ContentAdmin = ({ selectedItem }) => {
  // Render different content based on the selected item
  const renderContent = () => {
    switch (selectedItem) {
      case "item1":
        return (
          <div>
            <ScheduleForm />{" "}
          </div>
        );
      case "item2":
        return (
          <div>
            <ScheduleList />
          </div>
        );

      case "item3":
        return (
          <div>
            <NoteForm />
          </div>
        );
      case "item4":
        return (
          <div>
            <NoteList />
          </div>
        );
      case "item5":
        return (
          <div>
            <CreateUserForm />
          </div>
        );
      case "item6":
        return (
          <div>
            <UserList />
          </div>
        );
      default:
        return <div></div>;
    }
  };

  return <div>{renderContent()}</div>;
};

export default ContentAdmin;
