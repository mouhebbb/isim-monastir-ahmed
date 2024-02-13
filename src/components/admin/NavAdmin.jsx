import React from "react";

const NavAdmin = ({ onItemClick }) => {
  const handleItemClick = (item) => {
    onItemClick(item);
  };
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Your Brand
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                onClick={() => handleItemClick("item1")}
              >
                Scedule form
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                onClick={() => handleItemClick("item2")}
              >
                Schedule List
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                onClick={() => handleItemClick("item3")}
              >
                Note Form
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                onClick={() => handleItemClick("item4")}
              >
                Note List
              </a>
            </li>{" "}
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                onClick={() => handleItemClick("item5")}
              >
                Create User Form
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                onClick={() => handleItemClick("item6")}
              >
                User List
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavAdmin;
