import React from "react";
import "./Navbar.css";
import logo from "../../assets/MAC.png";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div>
        <p className="nom">  M.Achref.Chouikh 🌋</p>
      </div>
      <ul className="navigation">
        <li>accueil </li>
        <li>About</li>
        <li>Parcours</li>
        <li>Projet</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
