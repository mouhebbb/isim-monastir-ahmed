import React, { useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";

const Navbar = ({ onItemClick }) => {
  const [isNavActive, setIsNavActive] = useState(false);
  const history = useHistory();
  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };
  const handleItemClick = (item) => {
    onItemClick(item);
  };
  const go = () => {
    history.push("/login");
  };
  return (
    <div className="container">
      <nav className={isNavActive ? "active" : ""}>
        <div className="menu-icons" onClick={toggleNav}>
          <i className="fas fa-bars"></i>
          <i className="fas fa-times"></i>
        </div>
        <a href="#">
          <img src="./unnamed.png" width={100} height={50} alt="isimm" />
        </a>
        <ul className="nav-list">
          <li>
            <a href="#" onClick={() => handleItemClick("home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#">
              INSTITUE <i className="fas fa-caret-down"></i>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="#">
                  ISIMM
                  <i className="fas fa-caret-down"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#" onClick={() => handleItemClick("item1")}>
                      Presentation de ISIMM
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Equipes
                      <i className="fas fa-caret-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#" onClick={() => handleItemClick("item2")}>
                          Departement
                        </a>
                      </li>
                      <li>
                        <a href="#">Centre 4C</a>
                      </li>
                      <li>
                        <a href="#">Communté de Qualité</a>
                      </li>
                      <li>
                        <a href="#">Conseille</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Vie Etudiant
                  <i className="fas fa-caret-down"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  Vie Assoiciative
                  <i className="fas fa-caret-down"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#" onClick={() => handleItemClick("item1")}>
                      Les Associations
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => handleItemClick("item1")}>
                      Les Clubes
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => handleItemClick("item1")}>
                      Les Evennement
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  L'internationnelle
                  <i className="fas fa-caret-down"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#" onClick={() => handleItemClick("item1")}>
                      Les programme de mobilité
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => handleItemClick("item1")}>
                      Les stages de l'exterieur
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => handleItemClick("item1")}>
                      Les partenaire internationaux
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              Formation <i className="fas fa-caret-down"></i>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="#">
                  Cycle Ingenieur
                  <i className="fas fa-caret-down"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#" onClick={() => handleItemClick("item1")}>
                      ingenieur Info
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => handleItemClick("item2")}>
                      ingenieur Electrique
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Master
                  <i className="fas fa-caret-down"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#" onClick={() => handleItemClick("item1")}>
                      Master Genie Logicel
                    </a>
                  </li>
                  <li>
                    <a href="#">Master Data science</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Lisence
                  <i className="fas fa-caret-down"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="#" onClick={() => handleItemClick("item1")}>
                      Licence Info
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => handleItemClick("item2")}>
                      Lisence Mathappliquer
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => handleItemClick("item2")}>
                      Lisence electrique
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Cycle Preparatoire
                  <i className="fas fa-caret-down"></i>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              Recherche
              <i className="fas fa-caret-down"></i>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="#">Laboratoire et unite de recherche</a>
              </li>
              <li>
                <a href="#">
                  projet de recherche
                  <i className="fas fa-caret-down"></i>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              Entreprise
              <i className="fas fa-caret-down"></i>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="#">description de talon de l'isimm</a>
              </li>
              <li>
                <a href="#">
                  Offre de stage
                  <i className="fas fa-caret-down"></i>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              Contactez-Nous
              <i className="fas fa-caret-down"></i>
            </a>
            <ul className="sub-menu">
              <li>
                <a href="#">Formulaire de contact</a>
              </li>
            </ul>
          </li>

          <li>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => go()}
            >
              Login
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
